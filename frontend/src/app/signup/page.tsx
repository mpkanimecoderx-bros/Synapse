"use client";
import Link from "next/link";

export default function Signup() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 -z-10" style={{background: "radial-gradient(ellipse at 20% 20%, rgba(0, 255, 255, 0.06) 0%, transparent 40%), radial-gradient(ellipse at 80% 80%, rgba(255, 0, 255, 0.06) 0%, transparent 40%), #020205"}} />

      {/* Faded SYNAPSE Background - Higher position */}
      <span aria-hidden="true" className="absolute left-1/2 top-[15%] -translate-x-1/2 text-[10rem] md:text-[16rem] font-black text-cyan-900 opacity-10 select-none pointer-events-none z-0 whitespace-nowrap" style={{letterSpacing: "-0.08em"}}>SYNAPSE</span>

      {/* Signup Card with floating animation */}
      <div className="neon-card neon-float w-full max-w-md relative z-10">
        {/* Decorative glow orb */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <h1 className="text-3xl font-bold text-center mb-2 relative z-10" style={{
          color: "#00fff7",
          textShadow: "0 0 10px #00fff7, 0 0 20px rgba(0, 255, 247, 0.5)"
        }}>
          Create Account
        </h1>
        <p className="text-center text-gray-400 mb-8 relative z-10">Join the Synapse school platform</p>

        {/* Form - Inline styles for simplicity */}
        <div className="space-y-5 relative z-10">
          {/* Full Name */}
          <div className="group">
            <label htmlFor="fullName" className="block text-sm font-medium text-cyan-300 mb-2 transition-all group-focus-within:text-cyan-200">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="neon-input w-full px-4 py-3 rounded-lg text-gray-100 placeholder-gray-500"
            />
          </div>

          {/* Username */}
          <div className="group">
            <label htmlFor="username" className="block text-sm font-medium text-cyan-300 mb-2 transition-all group-focus-within:text-cyan-200">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              className="neon-input w-full px-4 py-3 rounded-lg text-gray-100 placeholder-gray-500"
            />
          </div>

          {/* Email */}
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2 transition-all group-focus-within:text-cyan-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="neon-input w-full px-4 py-3 rounded-lg text-gray-100 placeholder-gray-500"
            />
          </div>

          {/* Password */}
          <div className="group">
            <label htmlFor="password" className="block text-sm font-medium text-cyan-300 mb-2 transition-all group-focus-within:text-cyan-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="neon-input w-full px-4 py-3 rounded-lg text-gray-100 placeholder-gray-500"
            />
          </div>

          {/* Role Dropdown */}
          <div className="group">
            <label htmlFor="role" className="block text-sm font-medium text-cyan-300 mb-2 transition-all group-focus-within:text-cyan-200">
              Role
            </label>
            <select
              id="role"
              className="neon-input w-full px-4 py-3 rounded-lg text-gray-100"
            >
              <option value="">Select your role</option>
              <option value="principal">Principal</option>
              <option value="sub-principal">Sub Principal</option>
              <option value="teacher">Teacher</option>
              <option value="babysitter">Babysitter</option>
            </select>
          </div>

          {/* Submit Button */}
          <Link
            href="/verify-email"
            className="neon-btn-enhanced inline-block w-full py-3 mt-2 group text-center"
          >
            <span className="relative z-10">Create Account</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center my-8 relative z-10">
          <div className="flex-1 border-t border-cyan-500/20"></div>
          <span className="px-4 text-gray-500 text-sm">or continue with</span>
          <div className="flex-1 border-t border-cyan-500/20"></div>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3 relative z-10">
          {/* Google */}
          <button
            type="button"
            className="oauth-btn w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg group"
          >
            <span className="text-xl transition-transform group-hover:scale-110">G</span>
            <span className="text-gray-300 group-hover:text-white transition-colors">Continue with Google</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* LinkedIn */}
          <button
            type="button"
            className="oauth-btn w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg group"
          >
            <span className="text-xl transition-transform group-hover:scale-110">in</span>
            <span className="text-gray-300 group-hover:text-white transition-colors">Continue with LinkedIn</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Facebook */}
          <button
            type="button"
            className="oauth-btn w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg group"
          >
            <span className="text-xl transition-transform group-hover:scale-110">f</span>
            <span className="text-gray-300 group-hover:text-white transition-colors">Continue with Facebook</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-8 relative z-10">
          Already have an account?{" "}
          <a href="/login" className="neon-link inline-block transition-all hover:scale-105">
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}

