import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventInfo from "@/components/EventInfo";
import GamesSection from "@/components/GamesSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import GrainOverlay from "@/components/GrainOverlay";
import SectionDivider from "@/components/SectionDivider";

const ticker = [
  "RageX 2026",
  "OFFLINE LAN",
  "VALORANT · 5v5 · 2v2",
  "TEKKEN · 1v1",
  "BYOC",
  "REGISTER NOW",
];

export default function Home() {
  return (
    <div className="scanlines">
      <GrainOverlay />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee items={ticker} />
        <SectionDivider label="01 — Battlegrounds" />
        <GamesSection />
        <SectionDivider label="02 — Event Info" />
        <EventInfo />
        <SectionDivider label="03 — Enlist" />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
