import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { User } from "../models/User.js";
import { randomBytes } from "crypto";

// Validation schemas
const signupSchema = z.object({
  fullName: z.string().min(2).max(100),
  username: z.string().min(3).max(30).toLowerCase(),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["principal", "sub-principal", "teacher", "babysitter"]),
});

const loginSchema = z.object({
  emailOrUsername: z.string(),
  password: z.string(),
});

const adminGatewaySchema = z.object({
  secretKey: z.string(),
});

const verifyEmailSchema = z.object({
  token: z.string(),
});

const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

const resetPasswordSchema = z.object({
  token: z.string(),
  newPassword: z.string().min(8),
});

// Helper function to generate verification token
function generateVerificationToken(): string {
  return randomBytes(32).toString("hex");
}

export async function authRoutes(fastify: FastifyInstance) {
  // POST /auth/signup
  fastify.post(
    "/signup",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const data = signupSchema.parse(request.body);

        // Check if user already exists
        const existingUser = await User.findOne({
          $or: [{ email: data.email }, { username: data.username }],
        });

        if (existingUser) {
          return reply.status(400).send({
            success: false,
            message:
              existingUser.email === data.email
                ? "Email already registered"
                : "Username already taken",
          });
        }

        // Create verification token
        const verificationToken = generateVerificationToken();

        // Create user
        const user = await User.create({
          ...data,
          verificationToken,
        });

        // In production, send verification email here
        // For now, we'll include the token in the response
        const verificationUrl = `/verify-email?token=${verificationToken}`;

        fastify.log.info(`User registered: ${user.email}`);

        return reply.status(201).send({
          success: true,
          message: "Registration successful. Please verify your email.",
          data: {
            user: {
              id: user._id,
              fullName: user.fullName,
              username: user.username,
              email: user.email,
              role: user.role,
            },
            verificationUrl, // Remove in production
          },
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return reply.status(400).send({
            success: false,
            message: "Validation failed",
            errors: error.errors,
          });
        }
        
        fastify.log.error(error);
        return reply.status(500).send({
          success: false,
          message: "Internal server error",
        });
      }
    }
  );

  // POST /auth/login
  fastify.post(
    "/login",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const { emailOrUsername, password } = loginSchema.parse(request.body);

        // Find user by email or username
        const user = await User.findOne({
          $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
        }).select("+password");

        if (!user) {
          return reply.status(401).send({
            success: false,
            message: "Invalid credentials",
          });
        }

        // Check if user is verified
        if (!user.isVerified) {
          return reply.status(401).send({
            success: false,
            message: "Please verify your email before logging in",
            needsVerification: true,
          });
        }

        // Verify password
        const isValidPassword = await user.comparePassword(password);

        if (!isValidPassword) {
          return reply.status(401).send({
            success: false,
            message: "Invalid credentials",
          });
        }

        // Generate JWT token
        const token = fastify.jwt.sign(
          {
            userId: user._id,
            email: user.email,
            username: user.username,
            role: user.role,
          },
          { expiresIn: "7d" }
        );

        // Set HTTP-only cookie
        reply.setCookie("token", token, {
          path: "/",
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        fastify.log.info(`User logged in: ${user.email}`);

        return reply.send({
          success: true,
          message: "Login successful",
          data: {
            user: {
              id: user._id,
              fullName: user.fullName,
              username: user.username,
              email: user.email,
              role: user.role,
            },
          },
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return reply.status(400).send({
            success: false,
            message: "Validation failed",
            errors: error.errors,
          });
        }
        
        fastify.log.error(error);
        return reply.status(500).send({
          success: false,
          message: "Internal server error",
        });
      }
    }
  );

  // GET /auth/me
  fastify.get(
    "/me",
    {
      onRequest: [fastify.authenticate],
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const user = await User.findById((request as any).user.userId);

        if (!user) {
          return reply.status(404).send({
            success: false,
            message: "User not found",
          });
        }

        return reply.send({
          success: true,
          data: {
            user: {
              id: user._id,
              fullName: user.fullName,
              username: user.username,
              email: user.email,
              role: user.role,
              isVerified: user.isVerified,
              createdAt: user.createdAt,
            },
          },
        });
      } catch (error) {
        fastify.log.error(error);
        return reply.status(500).send({
          success: false,
          message: "Internal server error",
        });
      }
    }
  );

  // POST /auth/admin-gateway
  fastify.post(
    "/admin-gateway",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const { secretKey } = adminGatewaySchema.parse(request.body);

        const adminSecret = process.env.ADMIN_SECRET;

        if (secretKey !== adminSecret) {
          return reply.status(403).send({
            success: false,
            message: "Invalid admin secret key",
          });
        }

        return reply.send({
          success: true,
          message: "Admin access granted",
          data: {
            access: true,
            timestamp: new Date().toISOString(),
          },
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return reply.status(400).send({
            success: false,
            message: "Validation failed",
            errors: error.errors,
          });
        }
        
        fastify.log.error(error);
        return reply.status(500).send({
          success: false,
          message: "Internal server error",
        });
      }
    }
  );

  // POST /auth/logout
  fastify.post(
    "/logout",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return reply
        .clearCookie("token", { path: "/" })
        .send({
          success: true,
          message: "Logged out successfully",
        });
    }
  );

  // POST /auth/verify-email
  fastify.post(
    "/verify-email",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const { token } = verifyEmailSchema.parse(request.body);

        const user = await User.findOne({ verificationToken: token });

        if (!user) {
          return reply.status(400).send({
            success: false,
            message: "Invalid or expired verification token",
          });
        }

        if (user.isVerified) {
          return reply.status(400).send({
            success: false,
            message: "Email already verified",
          });
        }

        user.isVerified = true;
        user.verificationToken = null;
        await user.save();

        fastify.log.info(`User verified: ${user.email}`);

        return reply.send({
          success: true,
          message: "Email verified successfully",
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return reply.status(400).send({
            success: false,
            message: "Validation failed",
            errors: error.errors,
          });
        }

        fastify.log.error(error);
        return reply.status(500).send({
          success: false,
          message: "Internal server error",
        });
      }
    }
  );

  // POST /auth/forgot-password
  fastify.post(
    "/forgot-password",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const { email } = forgotPasswordSchema.parse(request.body);

        const user = await User.findOne({ email });

        if (!user) {
          // Don't reveal if email exists or not for security
          return reply.send({
            success: true,
            message: "If an account with that email exists, a password reset link has been sent.",
          });
        }

        const resetToken = generateVerificationToken();
        user.verificationToken = resetToken;
        await user.save();

        // In production, send password reset email here
        const resetUrl = `/reset-password?token=${resetToken}`;

        fastify.log.info(`Password reset requested for: ${user.email}`);

        return reply.send({
          success: true,
          message: "If an account with that email exists, a password reset link has been sent.",
          data: {
            resetUrl, // Remove in production
          },
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return reply.status(400).send({
            success: false,
            message: "Validation failed",
            errors: error.errors,
          });
        }

        fastify.log.error(error);
        return reply.status(500).send({
          success: false,
          message: "Internal server error",
        });
      }
    }
  );

  // POST /auth/reset-password
  fastify.post(
    "/reset-password",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const { token, newPassword } = resetPasswordSchema.parse(request.body);

        const user = await User.findOne({ verificationToken: token });

        if (!user) {
          return reply.status(400).send({
            success: false,
            message: "Invalid or expired reset token",
          });
        }

        user.password = newPassword; // Will be hashed by pre-save hook
        user.verificationToken = null;
        await user.save();

        fastify.log.info(`Password reset for: ${user.email}`);

        return reply.send({
          success: true,
          message: "Password reset successfully",
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return reply.status(400).send({
            success: false,
            message: "Validation failed",
            errors: error.errors,
          });
        }

        fastify.log.error(error);
        return reply.status(500).send({
          success: false,
          message: "Internal server error",
        });
      }
    }
  );
}

