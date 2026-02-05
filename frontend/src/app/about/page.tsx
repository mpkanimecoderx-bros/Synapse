"use client";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 flex flex-col items-center">
      {/* Title */}
      <h1
        className="text-5xl md:text-6xl font-black text-center mb-6 neon-title"
        style={{
          letterSpacing: "-0.04em",
          color: "#00fff7",
          textShadow: "0 0 10px #00fff7, 0 0 16px #ff00ea",
        }}
      >
        About Synapse
      </h1>

      {/* Subtitle */}
      <p className="text-center text-gray-300 max-w-2xl mb-14 text-lg">
        School software, re-imagined for speed, clarity, and actual humans.
      </p>

      {/* Card */}
      <section
        className="neon-card w-full shadow-2xl text-gray-100"
        style={{ background: "rgba(10,10,20,0.96)" }}
      >
        {/* Intro */}
        <p className="mb-8 text-lg leading-relaxed">
          <span className="font-bold text-cyan-400">Synapse</span> is a modern
          school platform built for staff who want to work smarter—not longer.
          It unifies attendance, lesson planning, and communication into one
          fast, secure, and beautifully simple experience.
        </p>

        {/* Why */}
        <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">
          Why Synapse?
        </h2>
        <p className="mb-10 leading-relaxed">
          Because school tools shouldn’t feel outdated or exhausting. Synapse
          is designed to be <span className="text-cyan-300 font-semibold">fast</span>,{" "}
          <span className="text-cyan-300 font-semibold">intuitive</span>, and{" "}
          <span className="text-cyan-300 font-semibold">visually alive</span>—
          with smooth animations and neon accents that make daily tasks feel
          lighter and clearer.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="p-5 rounded-xl bg-black/30 border border-cyan-500/20">
            <h3 className="text-cyan-300 font-semibold mb-2">Attendance</h3>
            <p className="text-sm text-gray-300">
              Track, review, and spot patterns instantly with minimal clicks.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-black/30 border border-blue-500/20">
            <h3 className="text-blue-400 font-semibold mb-2">
              Lesson Planning
            </h3>
            <p className="text-sm text-gray-300">
              Organize, update, and share plans effortlessly using flexible
              templates.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-black/30 border border-fuchsia-500/20">
            <h3 className="text-fuchsia-400 font-semibold mb-2">
              Communication
            </h3>
            <p className="text-sm text-gray-300">
              Send secure messages, announcements, and reminders without noise.
            </p>
          </div>
        </div>

        {/* Human */}
        <p className="mb-8 leading-relaxed">
          Synapse is built for <span className="text-cyan-400 font-bold">real people</span>,
          not just tech experts. Every interaction is designed to stay out of
          your way—so you can focus on supporting your school and your team.
        </p>

        {/* Credit */}
        <p className="text-sm text-gray-400">
          Built by <span className="text-cyan-400 font-semibold">MPK</span> with
          care, creativity, and a love for making technology feel good to use.
        </p>
      </section>

      {/* Back to Home link removed as requested */}
      <Footer />
    </main>
  );
}