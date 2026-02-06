"use client";

export default function ForgotPassword() {
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
          Forgot Password
        </h1>
        <p className="text-center text-gray-400 mb-8">Enter your email to receive a reset link</p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2 transition-all group-focus-within:text-cyan-200">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="neon-input w-full px-4 py-3 rounded-lg text-gray-100 placeholder-gray-500"
            />
          </div>

          {/* Submit Button - Enhanced */}
          <button
            type="submit"
            className="neon-btn-enhanced w-full py-3 mt-2 group"
          >
            <span className="relative z-10">Send Reset Link</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </form>

        {/* Back to Login Link */}
        <p className="text-center text-gray-400 mt-8">
          Remember your password?{" "}
          <a href="/login" className="neon-link inline-block transition-all hover:scale-105">
            Sign in
          </a>
        </p>
      </div>
    </main>
  );
}

