import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  markdownContent: string;
}

export default function RulesModal({
  isOpen,
  onClose,
  onAccept,
  markdownContent,
}: RulesModalProps) {
  const [hasAgreed, setHasAgreed] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Ensure portal target exists (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset scroll, checkbox, and focus when modal opens
  useEffect(() => {
    if (isOpen) {
      setHasAgreed(false);
      // Use requestAnimationFrame to ensure DOM is painted before scrolling/focusing
      requestAnimationFrame(() => {
        if (contentRef.current) {
          contentRef.current.scrollTop = 0;
        }
        if (dialogRef.current) {
          dialogRef.current.focus();
        }
      });
    }
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative flex flex-col w-full max-w-3xl max-h-full bg-zinc-950 border border-white/10 rounded-xl shadow-2xl shadow-[#ff4655]/10 animate-in fade-in zoom-in-95 duration-200 outline-none overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rules-modal-title"
      >
        {/* Header */}
        <div className="flex-shrink-0 p-6 border-b border-white/10 bg-zinc-900/50 rounded-t-xl">
          <h2 id="rules-modal-title" className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            Rules & Regulations
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Please read and accept the event rules before proceeding with registration.
          </p>
        </div>

        {/* Content (Scrollable) */}
        <div ref={contentRef} style={{ minHeight: 0 }} className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="prose prose-invert prose-red max-w-none text-white/80">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-6 border-t border-white/10 bg-zinc-900/80 rounded-b-xl">
          <label className="flex items-start sm:items-center gap-3 cursor-pointer group mb-6">
            <div className="relative flex items-center justify-center mt-1 sm:mt-0">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={hasAgreed}
                onChange={(e) => setHasAgreed(e.target.checked)}
              />
              <div className="w-5 h-5 border-2 border-white/30 rounded bg-transparent peer-checked:bg-[#ff4655] peer-checked:border-[#ff4655] transition-all group-hover:border-white/50">
                <svg
                  className={`w-full h-full text-white pointer-events-none transition-transform duration-200 ${
                    hasAgreed ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <span className="text-sm sm:text-base font-medium text-white/80 group-hover:text-white transition-colors select-none">
              I have read and agree to the Rules & Regulations
            </span>
          </label>

          <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-white border border-white/20 hover:bg-white/10 rounded transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (hasAgreed) onAccept();
              }}
              disabled={!hasAgreed}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wider rounded transition-all ${
                hasAgreed
                  ? "bg-[#ff4655] text-black hover:bg-white hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,70,85,0.5)]"
                  : "bg-white/10 text-white/30 cursor-not-allowed"
              }`}
            >
              Continue Registration
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

