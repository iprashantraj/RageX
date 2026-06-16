export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p className="font-black tracking-widest text-white">
          RAGE<span className="text-[#ff4655]">X</span>
        </p>
        <p>© {new Date().getFullYear()} RageX. All rights reserved.</p>
      </div>
    </footer>
  );
}
