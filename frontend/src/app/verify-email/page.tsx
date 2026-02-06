"use client";
import Link from "next/link";

export default function VerifyEmail() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 -z-10" style={{background: "radial-gradient(ellipse at 20% 20%, rgba(0, 255, 255, 0.06) 0%, transparent 40%), radial-gradient(ellipse at 80% 80%, rgba(255, 0, 255, 0.06) 0%, transparent 40%), #020205"}} />

      {/* Faded SYNAPSE Background - Higher position */}
      <span aria-hidden="true" className="absolute left-1/2 top-[15%] -translate-x-1/2 text-[10rem] md:text-[16rem] font-black text-cyan-900 opacity-10 select-none pointer-events-none z-0 whitespace-nowrap" style={{letterSpacing: "-0.08em"}}>SYNAPSE</span>

      {/* Card */}
      <div className="neon-card neon-float w-full max-w-md relative z-10 text-center">
        {/* Email Icon */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center" style={{boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)"}}>
          <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-center mb-4" style={{
          color: "#00fff7",
          textShadow: "0 0 10px #00fff7, 0 0 20px rgba(0, 255, 247, 0.5)"
        }}>
          Check Your Email
        </h1>
        
        <p className="text-gray-400 mb-8 leading-relaxed">
          We have sent a verification link to your email address. Please check your inbox and click the link to verify your account.
        </p>

        {/* Resend Email Link */}
        <a href="#" className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
          Did not receive the email? Click to resend
        </a>

        {/* Go to Email Button */}
        <a
          href="mailto:"
          className="neon-btn-enhanced inline-block w-full py-3 mb-6 group text-center"
        >
          <span className="relative z-10">Open Email App</span>
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-cyan-500/20"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-cyan-500/20"></div>
        </div>

        {/* Go Back to Signup */}
        <Link 
          href="/signup" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to signup
        </Link>
      </div>
    </main>
  );
}

