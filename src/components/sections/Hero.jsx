'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import config from '@/config';
import ScrollReveal from '@/components/ScrollReveal';
import { trackEvent, EVENTS } from '@/lib/analytics';

export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col overflow-hidden">

      {/* ── Full-Bleed Background Image ── */}
      <Image
        src={config.images.heroBg}
        alt={`${config.name} — ${config.hero.title}`}
        fill
        priority
        className="object-cover object-[center_25%] sm:object-center"
        sizes="100vw"
        quality={90}
      />

      {/* ── Overlay Gradients ── */}
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/30" />

      {/* ── Accent Glow ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-radial-hero opacity-20" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1300px] mx-auto w-full px-6 md:px-8 lg:px-12 pt-24 pb-8 sm:pt-28 sm:pb-12">

        {/* Mobile Badges (Replaces Top Banner) */}
        <div className="flex lg:hidden flex-col gap-3 mb-6 max-w-fit">
          <ScrollReveal>
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-3.5 shadow-lg w-fit">
              <div className="flex items-center gap-2.5 mb-1.5 mt-0.5">
                <div className="flex -space-x-2">
                  {(config.images.trustAvatars || []).slice(0, 4).map((src, i) => (
                    <Image
                      key={`mob-${i}`}
                      src={src}
                      alt={`Patient ${i + 1}`}
                      width={28}
                      height={28}
                      className="w-7 h-7 rounded-full border-2 border-white/30 object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={`star-mob-${i}`} className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] font-bold text-white">{config.hero.rating}</span>
                </div>
              </div>
              <p className="text-xs text-white/70 font-medium">
                {(() => {
                  const patientStat = config.hero.stats?.find(s => s.label === 'Happy Patients');
                  const count = patientStat ? `${patientStat.number}${patientStat.suffix}` : '5,000+';
                  return `Trusted by ${count} patients in ${config.contact.address.city}`;
                })()}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-emerald-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-2xl px-4 py-2.5 shadow-lg w-fit">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-emergency-pulse shrink-0" />
                <span className="text-[13px] font-bold text-emerald-50 whitespace-nowrap">Same-Day Appointments Available</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Heading */}
            <ScrollReveal>
              <h1 className="text-[2.2rem] sm:text-[2.6rem] md:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-black tracking-[-0.02em] leading-[1.08] text-white">
                {config.hero.title}
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal>
              <p className="text-[0.95rem] md:text-base lg:text-lg text-white/65 leading-[1.7] mt-5 md:mt-6 max-w-xl">
                {config.hero.subtitle}
              </p>
            </ScrollReveal>

            {/* Trust Bullets */}
            {config.hero.trustBullets && (
              <ScrollReveal>
                <div className="flex flex-col gap-2.5 mt-6">
                  {config.hero.trustBullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" strokeWidth={2.5} />
                      <span className="text-sm font-semibold text-white/80">{bullet}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}

            {/* CTA Buttons */}
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-8 md:mt-9">
                <Link
                  href={config.hero.ctaPrimary.href}
                  onClick={() => trackEvent(EVENTS.CTA_HERO_PRIMARY)}
                  className="btn-cta-green animate-btn-jiggle flex items-center justify-center gap-2.5 px-8 py-4 sm:py-3.5 rounded-2xl sm:rounded-xl text-[0.95rem] sm:text-[0.9rem] shadow-xl"
                >
                  {config.hero.ctaPrimary.text}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={config.hero.ctaSecondary.href}
                  onClick={() => trackEvent(EVENTS.CTA_HERO_SECONDARY)}
                  className="flex items-center justify-center gap-2.5 px-8 py-4 sm:py-3.5 rounded-2xl sm:rounded-xl font-bold text-[0.95rem] sm:text-[0.9rem] text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {config.hero.ctaSecondary.text}
                </a>
              </div>
            </ScrollReveal>

            {/* Location Signal */}
            <ScrollReveal>
              <div className="mt-8 md:mt-9 pt-5 border-t border-white/10 flex items-center gap-2 text-white/45">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-xs font-semibold">Proudly serving {config.contact.address.city} for {config.about.yearsBadge.number}+ years</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side — Hero image is already the background, we use this space for floating badges on desktop */}
          <div className="hidden lg:flex flex-col items-end justify-center gap-4">
            {/* Social Proof Badge */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-6 py-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {(config.images.trustAvatars || []).slice(0, 4).map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`Patient ${i + 1}`}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-white/30 object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">{config.hero.rating}</span>
                </div>
              </div>
              <p className="text-xs text-white/60 font-medium">
                {(() => {
                  const patientStat = config.hero.stats?.find(s => s.label === 'Happy Patients');
                  const count = patientStat ? `${patientStat.number}${patientStat.suffix}` : '5,000+';
                  return `Trusted by ${count} patients in ${config.contact.address.city}`;
                })()}
              </p>
            </div>

            {/* Quick Stats Badge */}
            <div className="bg-accent/20 backdrop-blur-xl border border-accent/30 rounded-2xl px-6 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-emergency-pulse" />
                <span className="text-sm font-bold text-white">Same-Day Appointments Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Curved transition ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] sm:h-[50px] lg:h-[48px] block">
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
