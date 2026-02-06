"use client";
import Link from "next/link";
import Image from "next/image";

export default function Signup() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16" style={{background: "radial-gradient(ellipse at 20% 20%, rgba(0, 255, 255, 0.08) 0%, transparent 40%), radial-gradient(ellipse at 80% 80%, rgba(255, 0, 255, 0.08) 0%, transparent 40%), #050510"}}>
      {/* Logo and Title */}
      <div className="text-center mb-8">
        <Link href="/" className="inline-flex items-center">
          <span className="mr-2 drop-shadow-lg">
            <Image src="/logo.svg" alt="Synapse Logo" width={48} height={48} priority />
          </span>
          <span className="text-4xl font-extrabold tracking-tight" style={{
            color: '#00fff7',
            textShadow: '0 0 10px #00fff7, 0 0 20px #ff00ea'
          }}>Synapse</span>
        </Link>
      </div>

      {/* Signup Card */}
      <div className="neon-card w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2" style={{color: '#00fff7', textShadow: '0 0 10px #00fff7'}}>
          Create Account
        </h1>
        <p className="text-center text-gray-400 mb-8">Join the Synapse school platform</p>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-cyan-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-cyan-300 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-cyan-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-cyan-300 mb-2">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/30 text-gray-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            >
              <option value="">Select your role</option>
              <option value="principal">Principal</option>
              <option value="sub-principal">Sub Principal</option>
              <option value="teacher">Teacher</option>
              <option value="babysitter">Babysitter</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="neon-btn w-full py-3 mt-2"
            style={{padding: '0.75em 2em'}}
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 border-t border-cyan-500/20"></div>
          <span className="px-4 text-gray-500 text-sm">or continue with</span>
          <div className="flex-1 border-t border-cyan-500/20"></div>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3">
          {/* Google */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/20 hover:border-cyan-400 transition-all group"
          >
            <span className="text-xl">G</span>
            <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">Continue with Google</span>
          </button>

          {/* LinkedIn */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/20 hover:border-cyan-400 transition-all group"
          >
            <span className="text-xl">in</span>
            <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">Continue with LinkedIn</span>
          </button>

          {/* Facebook */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/20 hover:border-cyan-400 transition-all group"
          >
            <span className="text-xl">f</span>
            <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">Continue with Facebook</span>
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors" style={{textShadow: '0 0 8px rgba(0, 255, 255, 0.4)'}}>
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}

