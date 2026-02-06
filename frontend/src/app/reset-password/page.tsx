"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid reset link. No token provided.");
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (newPassword !== confirmPassword) {
      setStatus("error");
      setMessage("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      setStatus("error");
      setMessage("Password must be at least 8 characters long");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(`${API_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("Password reset successfully! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to reset password");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (!token) {
    return (
      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{background: "radial-gradient(circle at 20% 30%, #00fff7 0%, transparent 50%), radial-gradient(circle at 80% 70%, #ff00ea 0%, transparent 50%), #050510"}} />
        <div className="neon-card neon-float w-full max-w-md relative z-10 text-center">
          <h1 className="text-3xl font-bold text-center mb-4" style={{color: "#00fff7", textShadow: "0 0 10px #00fff7"}}>
            Invalid Reset Link
          </h1>
          <p className="text-gray-400 mb-8">This password reset link is invalid or has expired.</p>
          <Link href="/forgot-password" className="neon-btn-enhanced inline-block w-full py-3 group text-center">
            <span className="relative z-10">Request New Reset Link</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Static Neon Background - Same as Homepage */}
      <div className="absolute inset-0 -z-10" style={{background: "radial-gradient(circle at 20% 30%, #00fff7 0%, transparent 50%), radial-gradient(circle at 80% 70%, #ff00ea 0%, transparent 50%), #050510"}} />

      {/* Large faded SYNAPSE background - positioned upper */}
      <span aria-hidden="true" className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[16rem] font-black text-cyan-900 opacity-10 select-none pointer-events-none z-0" style={{letterSpacing: "-0.08em", whiteSpace: "nowrap"}}>SYNAPSE</span>

      {/* Card with floating animation */}
      <div className="neon-card neon-float w-full max-w-md relative z-10">
        <h1 className="text-3xl font-bold text-center mb-2" style={{
          color: '#00fff7',
          textShadow: '0 0 10px #00fff7, 0 0 20px rgba(0, 255, 247, 0.5)'
        }}>
          Reset Password
        </h1>
        <p className="text-center text-gray-400 mb-8">Enter your new password below</p>

        {/* Status Message */}
        {message && (
          <div className={`mb-6 p-3 rounded-lg border text-sm text-center ${
            status === "success"
              ? "bg-green-500/10 border-green-500/30 text-green-400"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}>
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* New Password */}
          <div className="group">
            <label htmlFor="newPassword" className="block text-sm font-medium text-cyan-300 mb-2 transition-all group-focus-within:text-cyan-200">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="neon-input w-full px-4 py-3 rounded-lg text-gray-100 placeholder-gray-500"
              required
              minLength={8}
              disabled={status === "loading" || status === "success"}
            />
          </div>

          {/* Confirm Password */}
          <div className="group">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-cyan-300 mb-2 transition-all group-focus-within:text-cyan-200">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="neon-input w-full px-4 py-3 rounded-lg text-gray-100 placeholder-gray-500"
              required
              minLength={8}
              disabled={status === "loading" || status === "success"}
            />
          </div>

          {/* Submit Button - Enhanced */}
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="neon-btn-enhanced w-full py-3 mt-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">
              {status === "loading" ? "Resetting..." : status === "success" ? "Password Reset!" : "Reset Password"}
            </span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </form>

        {/* Back to Login Link */}
        <p className="text-center text-gray-400 mt-8">
          Remember your password?{" "}
          <Link href="/login" className="neon-link inline-block transition-all hover:scale-105">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}

