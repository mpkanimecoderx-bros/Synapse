import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full neon-navbar">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="mr-2 drop-shadow-lg">
              <Image src="/logo.svg" alt="Synapse Logo" width={32} height={32} priority />
            </span>
            <span className="text-2xl font-extrabold tracking-tight neon-logo" style={{
              color: '#00fff7',
              textShadow: '0 0 10px #00fff7, 0 0 20px #ff00ea'
            }}>Synapse</span>
          </Link>
        </div>

        <div className="flex gap-8 text-base items-center">
          <Link href="/dashboard" className="neon-link">
            Dashboard
          </Link>
          <Link href="/about" className="neon-link">
            About
          </Link>
          <Link href="/signup" className="neon-btn" style={{ padding: '0.6em 1.8em', fontSize: '0.9em' }}>
            Signup
          </Link>
          <Link href="/login" className="neon-btn" style={{ padding: '0.6em 1.8em', fontSize: '0.9em' }}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

