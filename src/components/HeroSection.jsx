import React from "react";
import img4 from "../assets/img1 (4).png";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Heart,
  Zap,
  Flame,
  MessageCircle,
  Gift,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#0a0620] text-[#f5ede0]"
    >
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#5b8def]/15 blur-[130px]" />
        <div className="absolute right-[-100px] top-20 h-[450px] w-[450px] rounded-full bg-[#a855f7]/20 blur-[140px]" />
        <div className="absolute bottom-[-180px] left-[30%] h-[350px] w-[450px] rounded-full bg-[#ec4899]/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main grid */}
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-12 pt-32 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:pt-[105px]">

        {/* LEFT: Text */}
        <div className="relative z-10 mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">

          {/* 1. Pill */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/[0.08] px-4 py-2 text-xs font-medium text-purple-200 backdrop-blur-md sm:text-sm"
            style={{ animation: "fadeUp 0.6s ease-out forwards", opacity: 0 }}
          >
            <Sparkles size={15} className="text-fuchsia-300" />
            A new way to connect
          </div>

          {/* 2. H1 */}
          <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#f5ede0]">
            <span className="block" style={{ animation: "fadeUp 0.6s ease-out 0.1s forwards", opacity: 0 }}>
              Find Your
            </span>
            <span className="block" style={{ animation: "fadeUp 0.6s ease-out 0.2s forwards", opacity: 0 }}>
              People.
            </span>
            <span
              className="block bg-gradient-to-r from-[#5b8def] via-[#a855f7] to-[#ec4899] bg-clip-text italic text-transparent"
              style={{ animation: "fadeUp 0.6s ease-out 0.3s forwards", opacity: 0 }}
            >
              Feel Your Vibe.
            </span>
          </h1>

          {/* 3. Paragraph */}
          <p
            className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#f5ede0]/65 sm:text-base sm:leading-8 lg:mx-0"
            style={{ animation: "fadeUp 0.6s ease-out 0.4s forwards", opacity: 0 }}
          >
            Vibora is a messaging app built for real conversations.
            No clutter. No ads. Just you, your people, and the moments that matter.
          </p>

          {/* 4. Buttons */}
          <div
            className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row lg:justify-start"
            style={{ animation: "fadeUp 0.6s ease-out 0.6s forwards", opacity: 0 }}
          >
            <a
              href="#download"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #c026d3 0%, #7c3aed 100%)",
                boxShadow: "0 0 30px rgba(168,85,247,0.22)",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 40px rgba(217,70,239,0.38)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 30px rgba(168,85,247,0.22)"; }}
            >
              Get Started Free
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-[#f5ede0] transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/10 hover:-translate-y-0.5"
            >
              See How It Works
            </a>
          </div>

          {/* 5. Benefits */}
          <div
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-[#f5ede0]/60 sm:text-sm lg:justify-start"
            style={{ animation: "fadeUp 0.6s ease-out 0.8s forwards", opacity: 0 }}
          >
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-fuchsia-400" />
              Privacy First
            </span>
            <span className="flex items-center gap-2">
              <Heart size={16} className="text-fuchsia-400" />
              Real Connections
            </span>
            <span className="flex items-center gap-2">
              <Zap size={16} className="text-violet-400" />
              Made For You
            </span>
          </div>
        </div>

        {/* RIGHT: Image Mockup with Floating Cards */}
        <div className="relative mx-auto flex w-full max-w-[580px] items-center justify-center py-6 sm:py-10 lg:min-h-[660px] lg:py-0">

          {/* Pulsing purple glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/30 blur-[90px] sm:h-[400px] sm:w-[400px]"
            style={{ animation: "heroGlow 4s ease-in-out infinite" }}
          />

          {/* Second glow — pink */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/25 blur-[80px] sm:h-[320px] sm:w-[320px]"
            style={{ animation: "heroGlow 5s ease-in-out infinite 1s" }}
          />

          {/* Floating Card 1: Top-Left "98% Vibe Match" */}
          <div
            className="absolute -left-2 top-4 z-20 flex items-center gap-3 rounded-2xl border border-fuchsia-500/30 bg-[#140a2c]/85 p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.55),0_0_20px_rgba(217,70,239,0.18)] backdrop-blur-xl transition-all duration-300 hover:scale-105 sm:-left-6 sm:top-14 sm:p-3"
            style={{ animation: "cardFloat1 5s ease-in-out infinite" }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-600 to-pink-500 text-white shadow-md shadow-fuchsia-600/35">
              <Flame size={20} className="fill-white/20 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white sm:text-sm">98% Vibe Match</span>
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
              </div>
              <p className="text-[11px] font-medium text-fuchsia-200/70">Sarah & You connected</p>
            </div>
          </div>

          {/* Floating Card 2: Right-Center "Paid Gift Feature" */}
          <div
            className="absolute -right-3 top-[23%] z-20 flex items-center gap-3 rounded-2xl border border-fuchsia-500/35 bg-[#140a2c]/90 p-2.5 shadow-[0_18px_38px_rgba(0,0,0,0.6),0_0_28px_rgba(236,72,153,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105 sm:-right-8 sm:top-[25%] sm:p-3.5 lg:-right-12"
            style={{ animation: "cardFloatRight 5.5s ease-in-out infinite" }}
          >
            {/* Gift Box Icon with animated bounce & sparkles */}
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-fuchsia-600 to-pink-500 text-white shadow-md shadow-fuchsia-500/35">
              <Gift
                size={22}
                className="text-white drop-shadow-sm"
                style={{ animation: "giftBounce 2.5s ease-in-out infinite" }}
              />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] shadow-sm animate-pulse">
                ✨
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white sm:text-sm">Paid Gift Sent 🎁</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-gradient-to-r from-amber-500/20 to-fuchsia-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-300 shadow-sm">
                  🪙 250 Coins
                </span>
              </div>
              <p className="text-[11px] text-[#f5ede0]/65">Zainab sent a Diamond Rose 🌹</p>
            </div>
          </div>

          {/* Floating Pill: Top-Right "Gifting Coins Badge" */}
          <div
            className="absolute -right-2 top-2 z-20 flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-[#160b30]/85 px-3 py-1 shadow-[0_10px_25px_rgba(245,158,11,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 sm:right-2 sm:top-5"
            style={{ animation: "cardFloatReaction 4.5s ease-in-out infinite" }}
          >
            <span className="text-xs">💎</span>
            <span className="bg-gradient-to-r from-amber-300 via-pink-200 to-fuchsia-200 bg-clip-text text-[11px] font-bold text-transparent">
              Instant Creator Earnings
            </span>
          </div>

          {/* Floating Card 3: Bottom-Right "New Vibe Message" */}
          <div
            className="absolute -right-2 bottom-8 z-20 flex items-center gap-3 rounded-2xl border border-violet-500/30 bg-[#140b2e]/90 p-2.5 shadow-[0_18px_38px_rgba(0,0,0,0.6),0_0_24px_rgba(168,85,247,0.2)] backdrop-blur-xl transition-all duration-300 hover:scale-105 sm:-right-8 sm:bottom-14 sm:p-3.5"
            style={{ animation: "cardFloat2 6s ease-in-out infinite 0.6s" }}
          >
            <div className="relative shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-600/35">
                <MessageCircle size={20} className="text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#140b2e] bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white sm:text-sm">“Loved your vibe! ✨”</span>
                <span className="rounded-full bg-fuchsia-500/20 px-1.5 py-0.5 text-[9px] font-semibold text-fuchsia-300">New</span>
              </div>
              <p className="text-[11px] text-[#f5ede0]/65">Alex is typing...</p>
            </div>
          </div>

          {/* Floating Card 4: Bottom-Left "Live Vibers Pill" */}
          <div
            className="absolute -left-1 bottom-3 z-20 flex items-center gap-2.5 rounded-full border border-white/15 bg-[#160d32]/90 px-3.5 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 hover:scale-105 sm:-left-5 sm:bottom-6 sm:px-4 sm:py-2"
            style={{ animation: "cardFloat3 5.5s ease-in-out infinite 1.2s" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-medium sm:text-xs">
              <span className="font-bold text-white">14.8k+</span>
              <span className="text-fuchsia-200/70">Vibers Online</span>
            </div>
          </div>

          {/* Image wrapper — entry + float */}
          <div
            className="relative z-10 w-[58%] max-w-[285px] sm:w-[52%] sm:max-w-[310px] lg:w-[64%] lg:max-w-[350px]"
            style={{ animation: "heroEnter 1s ease-out forwards, heroFloat 6s ease-in-out 1s infinite" }}
          >
            <img
              src={img4}
              alt="Vibora app preview"
              className="block h-auto w-full object-contain drop-shadow-[0_25px_45px_rgba(124,58,237,0.35)]"
            />
          </div>

          {/* Floating dot — fuchsia */}
          <span
            className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(236,72,153,0.8)]"
            style={{ animation: "dotFloat 4s ease-in-out infinite" }}
          />
          {/* Floating dot — violet */}
          <span
            className="absolute right-[15%] top-[35%] h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
            style={{ animation: "dotFloat 5s ease-in-out infinite 0.5s" }}
          />
          {/* Floating dot — blue */}
          <span
            className="absolute bottom-[25%] left-[18%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(91,141,239,0.8)]"
            style={{ animation: "dotFloat 6s ease-in-out infinite 1s" }}
          />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroEnter {
          0%   { opacity: 0; transform: translateX(60px) translateY(20px) scale(0.9) rotate(-3deg); }
          100% { opacity: 1; transform: translateX(0) translateY(0) scale(1) rotate(0deg); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50%       { transform: translateY(-14px) rotate(1deg); }
        }
        @keyframes heroGlow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.9; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes dotFloat {
          0%, 100% { transform: translateY(0);     opacity: 0.6; }
          50%       { transform: translateY(-10px); opacity: 1; }
        }
        @keyframes cardFloat1 {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-9px) rotate(1deg); }
        }
        @keyframes cardFloat2 {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50%       { transform: translateY(9px) rotate(-1deg); }
        }
        @keyframes cardFloat3 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes cardFloatRight {
          0%, 100% { transform: translateY(0px) rotate(0.5deg); }
          50%       { transform: translateY(-10px) rotate(-0.5deg); }
        }
        @keyframes cardFloatReaction {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-6px) scale(1.05); }
        }
        @keyframes giftBounce {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25%      { transform: translateY(-4px) rotate(-6deg) scale(1.1); }
          50%      { transform: translateY(0) rotate(0deg) scale(1); }
          75%      { transform: translateY(-2px) rotate(5deg) scale(1.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
