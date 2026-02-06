"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    token ? "loading" : "error"
  );
  const [message, setMessage] = useState(
    token ? "" : "No verification token provided"
  );

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  useEffect(() => {
    if (!token) return;

    const verifyEmail = async () => {
      try {
        const res = await fetch(`${API_URL}/api/auth/verify-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data = await res.json();

        if (data.success) {
          setStatus("success");
          setMessage("Email verified successfully! You can now sign in.");
          // Redirect to login after 3 seconds
          setTimeout(() => {
            router.push("/login");
          }, 3000);
        } else {
          setStatus("error");
          setMessage(data.message || "Verification failed");
        }
      } catch (error) {
        setStatus("error");
        setMessage("Network error. Please try again.");
      }
    };

    verifyEmail();
  }, [token, API_URL, router]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 -z-10" style={{background: "radial-gradient(ellipse at 20% 20%, rgba(0, 255, 255, 0.06) 0%, transparent 40%), radial-gradient(ellipse at 80% 80%, rgba(255, 0, 255, 0.06) 0%, transparent 40%), #020205"}} />

      {/* Faded SYNAPSE Background - Higher position */}
      <span aria-hidden="true" className="absolute left-1/2 top-[15%] -translate-x-1/2 text-[10rem] md:text-[16rem] font-black text-cyan-900 opacity-10 select-none pointer-events-none z-0 whitespace-nowrap" style={{letterSpacing: "-0.08em"}}>SYNAPSE</span>

      {/* Card */}
      <div className="neon-card neon-float w-full max-w-md relative z-10 text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center" style={{boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)"}}>
          {status === "loading" && (
            <svg className="w-10 h-10 text-cyan-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          )}
          {status === "success" && (
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          {status === "error" && (
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        <h1 className="text-3xl font-bold text-center mb-4" style={{
          color: "#00fff7",
          textShadow: "0 0 10px #00fff7, 0 0 20px rgba(0, 255, 247, 0.5)"
        }}>
          {status === "loading" && "Verifying Email"}
          {status === "success" && "Email Verified!"}
          {status === "error" && "Verification Failed"}
        </h1>

        <p className="text-gray-400 mb-8 leading-relaxed">
          {status === "loading" && "Please wait while we verify your email..."}
          {status === "success" && message}
          {status === "error" && message}
        </p>

        {status === "success" && (
          <p className="text-sm text-cyan-400 mb-6">
            Redirecting to login page in 3 seconds...
          </p>
        )}

        {/* Action Buttons */}
        {status === "error" && (
          <>
            <Link
              href="/signup"
              className="neon-btn-enhanced inline-block w-full py-3 mb-4 group text-center"
            >
              <span className="relative z-10">Try Again</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-cyan-500/20"></div>
              <span className="px-4 text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-cyan-500/20"></div>
            </div>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Go to Login
            </Link>
          </>
        )}

        {status === "success" && (
          <Link
            href="/login"
            className="neon-btn-enhanced inline-block w-full py-3 group text-center"
          >
            <span className="relative z-10">Continue to Login</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        )}
      </div>
    </main>
  );
}

