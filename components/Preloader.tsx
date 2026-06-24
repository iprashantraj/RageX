"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState("CHAMBERING 7.62MM ROUNDS...");
  const [logs, setLogs] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [ammo, setAmmo] = useState(5);
  const [isFiring, setIsFiring] = useState(false);

  useEffect(() => {
    // Prevent scrolling during preloader
    document.body.style.overflow = "hidden";

    const logPool = [
      "LOADOUT: VANDAL + SHERIFF EQUIPPED",
      "CALIBRATING AIM ASSIST... DISALLOWED [SECURE]",
      "WARMING UP REFLEX ENGINE... ACTIVE",
      "SYNCING MOUSE INLINE INPUT... 1000HZ",
      "MATCHMAKING SERVER CONNECTED [AP-SOUTH]",
      "TEKKEN COMBAT ENGINE INITIALIZED",
      "LOADING VALORANT HAVEN MAP...",
      "TACTICAL SHIELD INJECTED",
      "TARGET IN SIGHT. PREPARE TO FIRE...",
    ];

    let currentPercent = 0;
    let logIndex = 0;
    let lastFiredPercent = 0;

    const triggerFire = (newAmmo: number) => {
      setAmmo(newAmmo);
      setIsFiring(true);
      setTimeout(() => {
        setIsFiring(false);
      }, 150);
    };

    const interval = setInterval(() => {
      // Custom organic increment
      const increment = Math.floor(Math.random() * 8) + 4;
      currentPercent = Math.min(100, currentPercent + increment);
      setPercent(currentPercent);

      // Trigger weapon firing at thresholds: 20%, 40%, 60%, 80%, 100%
      if (currentPercent >= 20 && lastFiredPercent < 20) {
        triggerFire(4);
        setLogs((prev) => [...prev, "[BANG] VANDAL SHOT FIRED (AMMO: 4/5)"]);
        lastFiredPercent = 20;
      }
      if (currentPercent >= 40 && lastFiredPercent < 40) {
        triggerFire(3);
        setLogs((prev) => [...prev, "[BANG] VANDAL SHOT FIRED (AMMO: 3/5)"]);
        lastFiredPercent = 40;
      }
      if (currentPercent >= 60 && lastFiredPercent < 60) {
        triggerFire(2);
        setLogs((prev) => [...prev, "[BANG] VANDAL SHOT FIRED (AMMO: 2/5)"]);
        lastFiredPercent = 60;
      }
      if (currentPercent >= 80 && lastFiredPercent < 80) {
        triggerFire(1);
        setLogs((prev) => [...prev, "[BANG] VANDAL SHOT FIRED (AMMO: 1/5)"]);
        lastFiredPercent = 80;
      }
      if (currentPercent >= 100 && lastFiredPercent < 100) {
        triggerFire(0);
        setLogs((prev) => [...prev, "[BANG] FINAL VANDAL SHOT FIRED (AMMO: 0/5)"]);
        setStatusText("GLHF. DEFUSE THE BOMB.");
        lastFiredPercent = 100;
      }

      // Dynamically add logs based on percentages
      if (currentPercent > 10 && logIndex === 0) {
        setLogs((prev) => [...prev, `[OK] ${logPool[0]}`]);
        logIndex++;
      }
      if (currentPercent > 25 && logIndex === 1) {
        setLogs((prev) => [...prev, `[OK] ${logPool[1]}`]);
        setStatusText("CALIBRATING MOUSE SENSITIVITY...");
        logIndex++;
      }
      if (currentPercent > 35 && logIndex === 2) {
        setLogs((prev) => [...prev, `[OK] ${logPool[2]}`]);
        setLogs((prev) => [...prev, `[OK] ${logPool[3]}`]);
        logIndex += 2;
      }
      if (currentPercent > 50 && logIndex === 4) {
        setLogs((prev) => [...prev, `[OK] ${logPool[4]}`]);
        setStatusText("WARMING UP REFLEX ENGINE...");
        logIndex++;
      }
      if (currentPercent > 70 && logIndex === 5) {
        setLogs((prev) => [...prev, `[OK] ${logPool[5]}`]);
        setLogs((prev) => [...prev, `[OK] ${logPool[6]}`]);
        logIndex += 2;
      }
      if (currentPercent > 88 && logIndex === 7) {
        setLogs((prev) => [...prev, `[OK] ${logPool[7]}`]);
        setLogs((prev) => [...prev, `[OK] ${logPool[8]}`]);
        setStatusText("LOCKING TARGET ACQUISITION...");
        logIndex += 2;
      }

      if (currentPercent >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "";
          }, 800); // duration of fade transition
        }, 800); // delay at 100% to view the final state
      }
    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  // Calculate filled segments for progress bar (20 total blocks)
  const totalBlocks = 20;
  const filledBlocks = Math.floor((percent / 100) * totalBlocks);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-black px-6 py-12 font-mono transition-all duration-700 ${
        isFading
          ? "opacity-0 scale-105 pointer-events-none blur-md"
          : "opacity-100 scale-100"
      } ${isFiring ? "animate-preloader-shake" : ""}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {/* Background Cyber Glow Grid & Scanline */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,70,85,0.12),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

      {/* Gun Muzzle Flash Effect (Flashes white-red-orange overlay) */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-red-600/30 via-orange-500/20 to-yellow-500/30 mix-blend-color-dodge transition-opacity duration-75 pointer-events-none ${
          isFiring ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Cyberpunk Loading Screen Scanning Line */}
      <div className="preloader-scanner absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff4655] to-transparent opacity-40 pointer-events-none" />

      {/* Top HUD Frame info */}
      <div className="w-full max-w-5xl flex justify-between items-center text-[10px] text-white/40 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-[#ff4655] animate-pulse rounded-full" />
          <span>MATCH: RAGEX_LAN_ARENA_2026</span>
        </div>
        <div className="tracking-widest animate-pulse flex items-center gap-3">
          <span>PING: 2MS</span>
          <span className="text-[#ff4655] font-bold">FPS: 240+</span>
        </div>
      </div>

      {/* Main Logo & Rotating Tactical HUD Crosshair */}
      <div className="relative flex flex-col items-center justify-center my-auto">
        <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(255,70,85,0.25),transparent_65%)] blur-xl animate-pulse-glow" />
        
        {/* Tactical Aim Reticle Crosshairs */}
        <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] flex items-center justify-center pointer-events-none">
          {/* Outer rotating dashed target ring */}
          <div className="absolute inset-0 border border-dashed border-[#ff4655]/20 rounded-full animate-preloader-spin-slow" />
          
          {/* Inner rotating bracket ring */}
          <div className="absolute w-[85%] h-[85%] border-2 border-transparent border-t-[#ff4655]/30 border-b-[#ff4655]/30 rounded-full animate-preloader-spin-reverse" />
          
          {/* HUD corners/ticks */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-[#ff4655]/40 via-transparent to-[#ff4655]/40" />
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-[#ff4655]/40 via-transparent to-[#ff4655]/40" />
          
          {/* Target indicators */}
          <div className="absolute w-4 h-4 border-t-2 border-l-2 border-[#ff4655] top-4 left-4" />
          <div className="absolute w-4 h-4 border-t-2 border-r-2 border-[#ff4655] top-4 right-4" />
          <div className="absolute w-4 h-4 border-b-2 border-l-2 border-[#ff4655] bottom-4 left-4" />
          <div className="absolute w-4 h-4 border-b-2 border-r-2 border-[#ff4655] bottom-4 right-4" />
        </div>

        {/* Logo Container */}
        <div className="relative group scale-95 sm:scale-100">
          <img
            src="/ragex-resized.png"
            alt="RageX"
            className={`w-[180px] sm:w-[260px] md:w-[320px] mix-blend-screen animate-logo-pulse ${
              isFiring ? "animate-logo-glitch-intense scale-95" : "animate-logo-glitch"
            }`}
          />
        </div>
      </div>

      {/* Bottom Loading Dashboard HUD */}
      <div className="w-full max-w-xl flex flex-col gap-5">
        {/* Weapon Ammo status & Console Logs */}
        <div className="flex justify-between items-center text-[10px] text-white/50 tracking-wider">
          <span className="font-semibold text-white/60">TACTICAL CONSOLE:</span>
          {/* Ammo clip visualizer */}
          <div className="flex items-center gap-1.5 bg-black/40 border border-white/5 px-2 py-0.5 rounded">
            <span className="text-[9px] text-[#ff4655] font-bold">MAG:</span>
            <div className="flex gap-[3px]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2.5 w-1 rounded-sm transition-all duration-300 ${
                    idx < ammo ? "bg-[#ff4655] shadow-[0_0_4px_#ff4655]" : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling System Logs */}
        <div className="h-24 overflow-hidden flex flex-col justify-end text-[10px] sm:text-xs text-white/30 gap-1 border border-white/5 bg-black/40 p-3 backdrop-blur-sm rounded">
          {logs.slice(-4).map((log, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[#ff4655] font-bold">&gt;</span>
              <span className="truncate">{log}</span>
            </div>
          ))}
          {logs.length === 0 && <div className="text-white/20">{"// READYING WEAPON SYSTEM..."}</div>}
        </div>

        {/* Ticker HUD percentage & bar */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end text-xs sm:text-sm">
            <span className="text-white/60 tracking-wide font-semibold text-[11px] sm:text-xs uppercase flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 bg-[#ff4655] animate-ping" />
              {statusText}
            </span>
            <span className="text-[#ff4655] font-bold text-lg leading-none tracking-tighter">
              {percent}%
            </span>
          </div>

          {/* Futuristic Cyber Block Progress Bar */}
          <div className="h-4 w-full bg-white/5 border border-white/10 p-[2px] flex gap-[2px]">
            {Array.from({ length: totalBlocks }).map((_, idx) => {
              const isFilled = idx < filledBlocks;
              return (
                <div
                  key={idx}
                  className={`h-full flex-1 transition-all duration-300 ${
                    isFilled
                      ? "bg-gradient-to-r from-[#ff4655] to-[#7c3aed]"
                      : "bg-white/5"
                  }`}
                  style={{
                    boxShadow: isFilled
                      ? "0 0 8px rgba(255, 70, 85, 0.4)"
                      : "none",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom Small Credits */}
        <div className="flex justify-between items-center text-[9px] text-white/30 tracking-widest pt-2 border-t border-white/5">
          <span>LOBBY: AP_OFFLINE_LAN</span>
          <span>EST. TIME: ~2.0S</span>
        </div>
      </div>
    </div>
  );
}
