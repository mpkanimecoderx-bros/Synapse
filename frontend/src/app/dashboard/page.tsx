"use client";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="relative min-h-screen px-4 py-8 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 -z-10" style={{background: "radial-gradient(ellipse at 20% 20%, rgba(0, 255, 255, 0.06) 0%, transparent 40%), radial-gradient(ellipse at 80% 80%, rgba(255, 0, 255, 0.06) 0%, transparent 40%), #020205"}} />

      {/* Faded SYNAPSE Background - Higher position, visible on scroll */}
      <span aria-hidden="true" className="absolute left-1/2 top-[15%] -translate-x-1/2 text-[10rem] md:text-[16rem] font-black text-cyan-900 opacity-10 select-none pointer-events-none z-0 whitespace-nowrap" style={{letterSpacing: "-0.08em"}}>SYNAPSE</span>

      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12 relative z-10">
        <h1 className="text-4xl font-bold mb-2" style={{
          color: '#00fff7',
          textShadow: '0 0 10px #00fff7, 0 0 20px rgba(0, 255, 247, 0.5)'
        }}>
          Dashboard
        </h1>
        <p className="text-gray-400">Welcome to Synapse</p>
      </header>

      {/* Dashboard Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        
        {/* Quick Stats Cards */}
        <div className="neon-card">
          <h3 className="text-lg font-bold mb-2" style={{color: '#00fff7'}}>Students</h3>
          <p className="text-4xl font-black mb-2">248</p>
          <p className="text-gray-400 text-sm">Total enrolled</p>
        </div>

        <div className="neon-card">
          <h3 className="text-lg font-bold mb-2" style={{color: '#ff00ff'}}>Teachers</h3>
          <p className="text-4xl font-black mb-2">32</p>
          <p className="text-gray-400 text-sm">Active staff</p>
        </div>

        <div className="neon-card">
          <h3 className="text-lg font-bold mb-2" style={{color: '#00bfff'}}>Classes</h3>
          <p className="text-4xl font-black mb-2">16</p>
          <p className="text-gray-400 text-sm">Total classes</p>
        </div>

        {/* Quick Actions */}
        <div className="neon-card md:col-span-2 lg:col-span-3">
          <h3 className="text-xl font-bold mb-4" style={{color: '#00fff7'}}>Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="neon-btn py-3 px-4 text-sm">Take Attendance</button>
            <button className="neon-btn py-3 px-4 text-sm">Add Student</button>
            <button className="neon-btn py-3 px-4 text-sm">Schedule</button>
            <button className="neon-btn py-3 px-4 text-sm">Messages</button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="neon-card md:col-span-2 lg:col-span-2">
          <h3 className="text-xl font-bold mb-4" style={{color: '#00fff7'}}>Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-cyan-500/20">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span className="text-gray-300">Attendance marked for Class 3A</span>
              <span className="text-gray-500 ml-auto text-sm">2 min ago</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-cyan-500/20">
              <div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
              <span className="text-gray-300">New message from Principal</span>
              <span className="text-gray-500 ml-auto text-sm">15 min ago</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-cyan-500/20">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="text-gray-300">Lesson plan submitted</span>
              <span className="text-gray-500 ml-auto text-sm">1 hour ago</span>
            </div>
          </div>
        </div>

        {/* Upcoming */}
        <div className="neon-card">
          <h3 className="text-xl font-bold mb-4" style={{color: '#00fff7'}}>Upcoming</h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-black/30 border border-cyan-500/20">
              <p className="text-cyan-300 font-medium">Staff Meeting</p>
              <p className="text-gray-500 text-sm">Today at 2:00 PM</p>
            </div>
            <div className="p-3 rounded-lg bg-black/30 border border-cyan-500/20">
              <p className="text-fuchsia-300 font-medium">Parent Conference</p>
              <p className="text-gray-500 text-sm">Tomorrow at 10:00 AM</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

