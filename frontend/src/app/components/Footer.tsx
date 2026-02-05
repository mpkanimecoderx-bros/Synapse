import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-cyan-900 py-6 px-4 flex items-center justify-between bg-[rgba(10,10,20,0.96)]" style={{position: 'fixed', left: 0, bottom: 0, zIndex: 50}}>
        <span className="px-4 py-1 rounded-full font-bold text-lg neon-link bg-linear-to-r from-cyan-400 via-fuchsia-500 to-blue-400 text-transparent bg-clip-text border-2 border-cyan-400 shadow-lg animate-float" style={{letterSpacing: "0.08em"}}>
          MPK
        </span>
      <div className="flex items-center gap-4">
        <a href="#" target="_blank" rel="noopener" aria-label="GitHub">
          <span className="inline-block align-middle">
            <Image src="/github.svg" alt="GitHub" width={28} height={28} />
          </span>
        </a>
        <a href="#" target="_blank" rel="noopener" aria-label="LinkedIn">
          <span className="inline-block align-middle">
            <Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} />
          </span>
        </a>
        <a href="#" target="_blank" rel="noopener" aria-label="Gmail">
          <span className="inline-block align-middle">
            <Image src="/gmail.svg" alt="Gmail" width={28} height={28} />
          </span>
        </a>
      </div>
      <div className="flex items-center">
        <p className="text-cyan-400 text-lg font-bold tracking-wide animate-fade-in">
          Synapse School App
        </p>
      </div>
    </footer>
  );
}
