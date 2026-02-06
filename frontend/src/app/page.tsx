"use client";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 -z-10" style={{background: "radial-gradient(ellipse at 20% 20%, rgba(0, 255, 255, 0.06) 0%, transparent 40%), radial-gradient(ellipse at 80% 80%, rgba(255, 0, 255, 0.06) 0%, transparent 40%), #020205"}} />

      {/* Large faded SYNAPSE background */}
      <span aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[16rem] font-black text-cyan-900 opacity-10 select-none pointer-events-none z-0" style={{letterSpacing: "-0.08em", whiteSpace: "nowrap"}}>SYNAPSE</span>
      
      {/* HEADER */}
      <header className="w-full max-w-5xl mx-auto flex flex-col items-center text-center mb-20 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-linear-to-r from-cyan-400 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg animate-pulse text-7xl md:text-8xl font-black tracking-tight neon-title" style={{letterSpacing: "-0.04em", color: '#00fff7', textShadow: '0 0 16px #00fff7, 0 0 32px #ff00ea'}}>
            SYNAPSE
          </span>
        </div>
         
        <p className="text-2xl md:text-3xl font-medium text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-in">
          The <span className="text-cyan-400 font-bold">intelligent</span> school platform for staff.<br/>
          <span className="text-fuchsia-400">Plan lessons</span>, <span className="text-cyan-300">track attendance</span>, and <span className="text-blue-300">communicate</span>—all in one vibrant, secure hub.
        </p>
        <div className="flex gap-6 justify-center mb-4">
          <Link href="/login" className="neon-btn text-lg px-8 py-3">Login</Link>
          <Link href="/signup" className="neon-btn text-lg px-8 py-3">Sign Up</Link>
        </div>
      </header>

      {/* COOL FEATURES */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 relative z-10">
        <div className="neon-card">
          <h3 className="text-xl font-bold mb-2 neon-title">📊 Attendance</h3>
          <p className="text-gray-300">Lightning-fast, reliable tracking. Visualize trends, spot issues, and keep every student accounted for.</p>
        </div>
        <div className="neon-card">
          <h3 className="text-xl font-bold mb-2 neon-title">📚 Lesson Planning</h3>
          <p className="text-gray-300">Drag-and-drop plans, smart templates, and instant sharing. Make every lesson count.</p>
        </div>
        <div className="neon-card">
          <h3 className="text-xl font-bold mb-2 neon-title">💬 Communication</h3>
          <p className="text-gray-300">Private, role-based messaging. Announcements, reminders, and chat—secure and seamless.</p>
        </div>
      </section>

      {/* EXPLANATORY SECTION */}
      <section className="w-full max-w-4xl mx-auto mb-24 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold neon-title mb-4">Why Synapse?</h2>
        <p className="text-lg text-gray-300 mb-6">
          Synapse is built for <span className="text-cyan-300 font-semibold">real school staff</span>, not just admins. Every feature is designed to save time, reduce stress, and empower educators to focus on what matters most.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-base text-gray-200">
          <li className="flex items-center gap-3"><span className="text-cyan-400">✔</span> Secure, staff-only access</li>
          <li className="flex items-center gap-3"><span className="text-fuchsia-400">✔</span> Modern, animated UI</li>
          <li className="flex items-center gap-3"><span className="text-blue-400">✔</span> Real-time updates</li>
          <li className="flex items-center gap-3"><span className="text-cyan-300">✔</span> Built for speed and clarity</li>
        </ul>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* Custom Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

