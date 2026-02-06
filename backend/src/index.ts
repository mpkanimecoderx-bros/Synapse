import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import jwt from "@fastify/jwt";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { authRoutes } from "./routes/auth.js";

// Load environment variables
dotenv.config();

const fastify = Fastify({
  logger: true,
});

// CORS configuration
await fastify.register(cors, {
  origin: process.env.NODE_ENV === "production" 
    ? "https://your-domain.com" 
    : ["http://localhost:3000", "http://127.0.0.1:3000"],
  credentials: true,
});

// Cookie plugin
await fastify.register(cookie);

// JWT plugin
await fastify.register(jwt, {
  secret: process.env.JWT_SECRET || "default-secret-change-in-production",
});

// Authentication decorator
fastify.decorate("authenticate", async function (
  request: any,
  reply: any
) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.status(401).send({ 
      success: false, 
      message: "Unauthorized",
      error: "Invalid or expired token" 
    });
  }
});

// Health check
fastify.get("/health", async () => {
  return { status: "ok", timestamp: new Date().toISOString() };
});

// API routes
fastify.register(authRoutes, { prefix: "/api/auth" });

// Root route
fastify.get("/", async () => {
  return {
    name: "Synapse API",
    version: "1.0.0",
    status: "running",
  };
});

// Connect to MongoDB and start server
const start = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/synapse";
    
    await mongoose.connect(mongoUri);
    fastify.log.info("Connected to MongoDB");

    const port = parseInt(process.env.PORT || "3001", 10);
    const host = process.env.HOST || "0.0.0.0";

    await fastify.listen({ port, host });
    fastify.log.info(`Server running at http://${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

export { fastify };

