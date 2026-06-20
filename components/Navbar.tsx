import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link href="/" className="flex items-center">
          <img src="/ragex-resized.png" alt="RageX" className="h-8 sm:h-10 w-auto mix-blend-screen" />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#event" className="hover:text-white transition">Event</a>
          <a href="#games" className="hover:text-white transition">Games</a>
          <a href="#join" className="hover:text-white transition">Join</a>
        </div>
        <a
          href={SITE.registerUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-wider bg-white text-black hover:bg-[#ff4655] hover:text-white transition-colors"
        >
          Register
        </a>
      </nav>
    </header>
  );
}
