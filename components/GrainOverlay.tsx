export default function GrainOverlay() {
  return (
    <>
      <svg className="fixed inset-0 w-full h-full opacity-[0.08] pointer-events-none z-[55] mix-blend-overlay">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </>
  );
}
