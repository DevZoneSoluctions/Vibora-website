import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import { ShieldCheck, AlertOctagon, Search, Phone, BookOpen, Handshake, Mail } from 'lucide-react';

const sections = [
  {
    icon: ShieldCheck,
    title: 'Our Commitment',
    accent: 'gold',
    content: `The safety of children is Vibora's highest priority — above growth, above features, above everything. We have a zero-tolerance policy for any content that exploits, harms, or endangers minors. This commitment is not aspirational; it is operational. We invest heavily in detection, human review, and law-enforcement cooperation.`,
  },
  {
    icon: AlertOctagon,
    title: 'Age Requirements',
    accent: 'pink',
    content: `Vibora is strictly for users aged 13 and older (16 in the EEA). During registration we collect date-of-birth information and use age-estimation signals to detect underage users. Accounts identified as belonging to users under the minimum age are immediately suspended and the data is deleted in accordance with applicable laws such as COPPA and GDPR-K.`,
  },
  {
    icon: Search,
    title: 'Detection & Moderation',
    accent: 'purple',
    content: `Vibora employs multiple layers of child safety technology. All uploaded media is scanned against the NCMEC PhotoDNA hash database before being made available. Our AI classifiers flag potentially harmful content for immediate human review. Our Trust & Safety team operates around the clock to investigate reports and take decisive action.`,
  },
  {
    icon: Phone,
    title: 'Reporting Mechanisms',
    accent: 'blue',
    content: `Every user profile, message, and piece of media on Vibora can be reported with a single tap. Reports related to child safety are triaged immediately — they do not enter a general queue. We aim to action child safety reports within one hour, 24 hours a day, 7 days a week. We also accept reports from external parties at safety@vibora.app.`,
  },
  {
    icon: BookOpen,
    title: 'CSAM Policy',
    accent: 'gold',
    content: `Child Sexual Abuse Material (CSAM) is illegal and profoundly harmful. Any account found to be producing, sharing, or soliciting CSAM is permanently banned, reported to the National Center for Missing & Exploited Children (NCMEC), and referred to local law enforcement. We comply with all mandatory reporting obligations under 18 U.S.C. § 2258A and equivalent international statutes.`,
  },
  {
    icon: Handshake,
    title: 'Industry Cooperation',
    accent: 'magenta',
    content: `Vibora is a member of the Technology Coalition and participates in the WeProtect Global Alliance. We share CSAM hash signatures with NCMEC and cooperate with Interpol's child protection programme. We believe the industry is stronger when it works together, and we actively participate in cross-platform child-safety research and policy development.`,
  },
  {
    icon: Mail,
    title: 'Contact Our Safety Team',
    accent: 'pink',
    content: `If you encounter any content or behaviour that you believe endangers a child, report it immediately within the app or email safety@vibora.app. If a child is in immediate danger, contact local emergency services first. For NCMEC CyberTipline reports, visit missingkids.org. Our safety team reviews all submissions and responds within one hour for urgent cases.`,
  },
];

const accentMap = {
  gold:    { icon: 'text-vibora-gold',   bg: 'bg-vibora-gold/10',   border: 'border-vibora-gold/30',   glow: 'hover:border-vibora-gold/40 hover:shadow-[0_8px_48px_rgba(245,197,24,0.12)]' },
  pink:    { icon: 'text-vibora-pink',   bg: 'bg-vibora-pink/10',   border: 'border-vibora-pink/30',   glow: 'hover:border-vibora-pink/40 hover:shadow-[0_8px_48px_rgba(236,72,153,0.12)]' },
  purple:  { icon: 'text-vibora-purple', bg: 'bg-vibora-purple/10', border: 'border-vibora-purple/30', glow: 'hover:border-vibora-purple/40 hover:shadow-[0_8px_48px_rgba(168,85,247,0.12)]' },
  blue:    { icon: 'text-vibora-blue',   bg: 'bg-vibora-blue/10',   border: 'border-vibora-blue/30',   glow: 'hover:border-vibora-blue/40 hover:shadow-[0_8px_48px_rgba(91,141,239,0.12)]' },
  magenta: { icon: 'text-vibora-magenta',bg: 'bg-vibora-magenta/10',border: 'border-vibora-magenta/30',glow: 'hover:border-vibora-magenta/40 hover:shadow-[0_8px_48px_rgba(217,70,239,0.12)]' },
};

function SafetyCard({ section, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const delay = (index % 3) * 80;
  const a = accentMap[section.accent] || accentMap.gold;
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
        shadow-[0_4px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ${a.glow}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon badge */}
      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 border transition-transform duration-300 group-hover:scale-110 ${a.bg} ${a.border}`}>
        <Icon size={20} className={a.icon} />
      </div>

      {/* Hover glow accent */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%)' }} />

      <h3 className="text-lg sm:text-xl font-bold text-vibora-cream mb-3">{section.title}</h3>
      <p className="text-sm sm:text-base text-vibora-cream/65 leading-relaxed">{section.content}</p>
    </div>
  );
}

/* ── Pulsing shield animation ──────────────────────────── */
function PulsingShield() {
  return (
    <div className="relative flex items-center justify-center mx-auto w-24 h-24 mb-10">
      {[1, 2, 3].map(i => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${i * 32 + 24}px`,
            height: `${i * 32 + 24}px`,
            border: `1px solid rgba(245,197,24,${0.25 / i})`,
            animation: `ping ${1.2 + i * 0.4}s cubic-bezier(0,0,0.2,1) infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
      <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center
        bg-vibora-gold/15 border border-vibora-gold/40 shadow-[0_0_32px_rgba(245,197,24,0.2)]">
        <ShieldCheck size={32} className="text-vibora-gold" />
      </div>
      <style>{`
        @keyframes ping {
          0%   { transform: scale(1); opacity: 1; }
          75%  { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.15); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function HeroBlock() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div className="relative overflow-hidden pt-40 pb-20 px-5 sm:px-8 text-center">
      {/* BG glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full pointer-events-none blur-[60px]"
        style={{ background: 'radial-gradient(ellipse, rgba(245,197,24,0.12) 0%, transparent 70%)' }} />
      <div className="absolute top-24 left-10 h-52 w-52 rounded-full pointer-events-none blur-[40px]"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />
      <div className="absolute top-32 right-10 h-52 w-52 rounded-full pointer-events-none blur-[40px]"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)' }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '52px 52px' }} />

      {/* Shield */}
      <div className={`transition-all duration-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <PulsingShield />
      </div>

      {/* Pill */}
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 select-none
        border border-vibora-gold/35 bg-vibora-gold/10 text-vibora-gold
        transition-all duration-500 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <ShieldCheck size={13} /> Legal • Safety
      </div>

      {/* Heading */}
      <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6
        transition-all duration-700 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <span className="text-vibora-cream">Child </span>
        <span className="bg-gradient-to-br from-vibora-gold to-vibora-pink bg-clip-text text-transparent">
          Safety
        </span>
      </h1>

      {/* Subtitle */}
      <p className={`text-base sm:text-lg text-vibora-cream/65 max-w-2xl mx-auto leading-relaxed mb-6
        transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        Protecting children online is not a feature — it is a fundamental responsibility.
        Vibora maintains a zero-tolerance policy for any content that harms or endangers minors.
      </p>

      {/* Emergency banner */}
      <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium
        border border-vibora-gold/25 bg-vibora-gold/[0.08] text-vibora-cream
        transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <Phone size={15} className="text-vibora-gold shrink-0" />
        <span>
          Child in immediate danger?{' '}
          <span className="font-bold text-vibora-gold">Call emergency services first.</span>
        </span>
      </div>
    </div>
  );
}

export default function ChildSafety() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Child Safety — Vibora';
  }, []);

  return (
    <>
      {loading && (
        <LoadingScreen
          durationMs={1800}
          subtitle="Child Safety & Minor Protection"
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

      <section className="relative px-5 sm:px-8 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {sections.map((s, i) => (
            <SafetyCard key={s.title} section={s} index={i} />
          ))}
        </div>

        {/* NCMEC + Report banners */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Report in-app */}
          <div className="rounded-2xl p-7 flex flex-col items-start gap-4 relative overflow-hidden
            border border-vibora-gold/20 bg-gradient-to-br from-vibora-gold/10 to-vibora-pink/[0.06]">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top left, rgba(245,197,24,0.07) 0%, transparent 70%)' }} />
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-vibora-gold/15 border border-vibora-gold/30">
              <AlertOctagon size={18} className="text-vibora-gold" />
            </div>
            <div>
              <h4 className="text-base font-bold text-vibora-cream mb-1">Report in-app</h4>
              <p className="text-sm text-vibora-cream/60 leading-relaxed">Tap the ⋯ menu on any profile or message to report immediately. Our team reviews child-safety reports within one hour.</p>
            </div>
          </div>

          {/* NCMEC */}
          <div className="rounded-2xl p-7 flex flex-col items-start gap-4 relative overflow-hidden
            border border-vibora-purple/20 bg-gradient-to-br from-vibora-purple/10 to-vibora-blue/[0.06]">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top left, rgba(168,85,247,0.07) 0%, transparent 70%)' }} />
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-vibora-purple/15 border border-vibora-purple/30">
              <BookOpen size={18} className="text-vibora-purple" />
            </div>
            <div>
              <h4 className="text-base font-bold text-vibora-cream mb-1">NCMEC CyberTipline</h4>
              <p className="text-sm text-vibora-cream/60 leading-relaxed">
                You can also report directly to the National Center for Missing &amp; Exploited Children at{' '}
                <a href="https://www.missingkids.org" target="_blank" rel="noreferrer"
                  className="underline text-vibora-purple hover:opacity-80 transition-opacity">
                  missingkids.org
                </a>.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden
          border border-vibora-gold/20 bg-gradient-to-br from-vibora-gold/10 to-vibora-purple/[0.06]">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.06) 0%, transparent 70%)' }} />

          <ShieldCheck size={36} className="mx-auto mb-4 text-vibora-gold" />
          <h3 className="text-2xl font-bold text-vibora-cream mb-3">Contact our Safety Team</h3>
          <p className="text-vibora-cream/65 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Our Trust &amp; Safety team is available around the clock. Child safety reports are reviewed within one hour.
          </p>
          <a
            href="mailto:safety@vibora.app"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-vibora-bg
              bg-gradient-to-r from-vibora-gold to-vibora-orange shadow-[0_4px_24px_rgba(245,197,24,0.4)]
              transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(245,197,24,0.6)] active:scale-95"
          >
            <Mail size={15} /> safety@vibora.app
          </a>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
}
