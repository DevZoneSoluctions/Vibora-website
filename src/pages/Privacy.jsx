import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import { Shield, Lock, Eye, Database, Bell, UserCheck, Mail } from 'lucide-react';

/* ── Section data ─────────────────────────────────────── */
const sections = [
  {
    icon: Shield,
    title: 'Information We Collect',
    accent: 'purple',
    content: `When you create a Vibora account, we collect your chosen username, email address, and encrypted password. You may optionally provide a display name, avatar, bio, and birthday. During app usage we collect device identifiers, IP addresses, locale settings, and diagnostic crash logs — all for the sole purpose of delivering a secure, personalised experience.`,
  },
  {
    icon: Lock,
    title: 'How We Use Your Data',
    accent: 'pink',
    content: `We use your data to power core Vibora features — messaging, voice calls, community discovery, and Vibe Radar matching. We never sell your personal information to advertisers or third parties. Aggregated, anonymised analytics may be used to improve app performance and craft new features you'll love.`,
  },
  {
    icon: Eye,
    title: 'End-to-End Encryption',
    accent: 'blue',
    content: `All private messages and calls on Vibora are protected by end-to-end encryption. This means only you and the person you're communicating with can read or hear your conversations. Even Vibora employees cannot access the contents of your encrypted messages.`,
  },
  {
    icon: Database,
    title: 'Data Storage & Retention',
    accent: 'purple',
    content: `Your data is stored on secure, encrypted servers located in compliant jurisdictions. Messages in private chats are retained only as long as necessary for delivery. You may delete your account at any time, after which we will purge your personal data within 30 days, except where retention is required by law.`,
  },
  {
    icon: Bell,
    title: 'Cookies & Tracking',
    accent: 'magenta',
    content: `Vibora uses essential cookies to maintain your session and preferences. We do not use third-party advertising trackers. Our web dashboard may use first-party analytics cookies to understand page performance. You can manage cookie preferences in your browser settings at any time.`,
  },
  {
    icon: UserCheck,
    title: 'Your Rights & Choices',
    accent: 'blue',
    content: `You have the right to access, correct, export, or delete your personal data at any time through the Vibora app settings. You may opt out of non-essential notifications, withdraw consent for optional data processing, and request a portable copy of your data. We honour GDPR, CCPA, and other applicable data protection laws.`,
  },
  {
    icon: Mail,
    title: 'Contact & Updates',
    accent: 'pink',
    content: `If you have questions about this Privacy Policy or wish to exercise your data rights, please reach out to us at privacy@vibora.app. We may update this policy periodically. Material changes will be announced in-app and via email at least 14 days before taking effect.`,
  },
];

const accentMap = {
  purple:  { icon: 'text-vibora-purple', bg: 'bg-vibora-purple/10', border: 'border-vibora-purple/30', glow: 'hover:border-vibora-purple/40 hover:shadow-[0_8px_48px_rgba(168,85,247,0.12)]', dot: 'bg-vibora-purple shadow-[0_0_8px_theme(colors.vibora.purple)]' },
  pink:    { icon: 'text-vibora-pink',   bg: 'bg-vibora-pink/10',   border: 'border-vibora-pink/30',   glow: 'hover:border-vibora-pink/40 hover:shadow-[0_8px_48px_rgba(236,72,153,0.12)]',   dot: 'bg-vibora-pink shadow-[0_0_8px_theme(colors.vibora.pink)]' },
  blue:    { icon: 'text-vibora-blue',   bg: 'bg-vibora-blue/10',   border: 'border-vibora-blue/30',   glow: 'hover:border-vibora-blue/40 hover:shadow-[0_8px_48px_rgba(91,141,239,0.12)]',   dot: 'bg-vibora-blue shadow-[0_0_8px_theme(colors.vibora.blue)]' },
  magenta: { icon: 'text-vibora-magenta',bg: 'bg-vibora-magenta/10',border: 'border-vibora-magenta/30',glow: 'hover:border-vibora-magenta/40 hover:shadow-[0_8px_48px_rgba(217,70,239,0.12)]', dot: 'bg-vibora-magenta' },
};

/* ── Animated section card ─────────────────────────────── */
function PolicyCard({ section, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const delay = (index % 3) * 80;
  const a = accentMap[section.accent] || accentMap.purple;
  const Icon = section.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl p-6 sm:p-8 border border-white/[0.07] bg-white/[0.03] backdrop-blur-md
        shadow-[0_4px_32px_rgba(0,0,0,0.3)] transition-all duration-500
        ${a.glow} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon badge */}
      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 border transition-transform duration-300 group-hover:scale-110 ${a.bg} ${a.border}`}>
        <Icon size={20} className={a.icon} />
      </div>

      {/* Hover glow accent */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${section.accent === 'purple' ? 'rgba(168,85,247,0.1)' : section.accent === 'pink' ? 'rgba(236,72,153,0.1)' : section.accent === 'magenta' ? 'rgba(217,70,239,0.1)' : 'rgba(91,141,239,0.1)'} 0%, transparent 70%)` }}
      />

      <h3 className="text-lg sm:text-xl font-bold text-vibora-cream mb-3">{section.title}</h3>
      <p className="text-sm sm:text-base text-vibora-cream/65 leading-relaxed">{section.content}</p>
    </div>
  );
}

/* ── Hero section ──────────────────────────────────────── */
function HeroBlock() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div className="relative overflow-hidden pt-40 pb-20 px-5 sm:px-8 text-center">
      {/* BG glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full pointer-events-none blur-[60px]"
        style={{ background: 'radial-gradient(ellipse, rgba(168,85,247,0.18) 0%, transparent 70%)' }} />
      <div className="absolute top-24 left-10 h-52 w-52 rounded-full pointer-events-none blur-[40px]"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)' }} />
      <div className="absolute top-32 right-10 h-52 w-52 rounded-full pointer-events-none blur-[40px]"
        style={{ background: 'radial-gradient(circle, rgba(91,141,239,0.12) 0%, transparent 70%)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '52px 52px' }} />

      {/* Pill badge */}
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 select-none
        border border-vibora-purple/35 bg-vibora-purple/10 text-purple-300
        transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <Shield size={13} /> Legal • Privacy
      </div>

      {/* Heading */}
      <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6
        transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <span className="text-vibora-cream">Privacy </span>
        <span className="bg-gradient-to-br from-vibora-purple to-vibora-pink bg-clip-text text-transparent">
          Policy
        </span>
      </h1>

      {/* Subtitle */}
      <p className={`text-base sm:text-lg text-vibora-cream/65 max-w-2xl mx-auto leading-relaxed mb-6
        transition-all duration-700 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        Your privacy is not a checkbox — it's the foundation of everything we build at Vibora.
        We are transparent, minimal, and never sell your data.
      </p>

      {/* Last updated pill */}
      <div className={`inline-flex items-center gap-2 text-xs text-vibora-cream/40
        transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-vibora-purple shadow-[0_0_8px_theme(colors.vibora.purple)]" />
        Last updated: October 2025
      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function Privacy() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy — Vibora';
  }, []);

  return (
    <>
      {loading && (
        <LoadingScreen
          durationMs={1800}
          subtitle="Privacy Policy & Security"
          onComplete={() => setLoading(false)}
        />
      )}
      <div
        className={`min-h-screen bg-vibora-bg text-vibora-cream overflow-x-hidden transition-opacity duration-700 ${
          loading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Navbar />

      <HeroBlock />

      {/* Cards grid */}
      <section className="relative px-5 sm:px-8 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {sections.map((s, i) => (
            <PolicyCard key={s.title} section={s} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden
          border border-vibora-purple/20 bg-gradient-to-br from-vibora-purple/10 to-vibora-pink/[0.06]">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.08) 0%, transparent 70%)' }} />

          <Mail size={36} className="mx-auto mb-4 text-vibora-purple" />
          <h3 className="text-2xl font-bold text-vibora-cream mb-3">Questions about your data?</h3>
          <p className="text-vibora-cream/65 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Our privacy team is here to help. Reach out and we'll respond within 48 hours.
          </p>
          <a
            href="mailto:privacy@vibora.app"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-vibora-purple to-vibora-pink shadow-[0_4px_24px_rgba(168,85,247,0.35)]
              transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(168,85,247,0.55)] active:scale-95"
          >
            <Mail size={15} /> privacy@vibora.app
          </a>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
}
