'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { heroStats } from '@/data/siteData';
import config from '@/config';
import ScrollReveal from '@/components/ScrollReveal';

const TRUST_AVATARS = config.images.trustAvatars;

export default function Hero() {
  return (
    <section className="relative h-svh flex flex-col overflow-hidden">

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

      {/* ── Dark Gradient Overlay ── */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/65 to-black/40" />
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/30" />

      {/* ── Accent Glow & Patterns ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-smile-curve opacity-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-radial-hero opacity-30" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-start sm:justify-center max-w-[1300px] mx-auto w-full px-6 md:px-8 lg:px-12 pt-22 pb-6 sm:pt-20 sm:pb-8">
        <div className="max-w-2xl xl:max-w-[680px]">

          {/* Social Proof Badge */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-lg border border-white/15 rounded-full px-3.5 py-2 shadow-lg">
              <div className="flex -space-x-2.5">
                {TRUST_AVATARS.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Trusted patient ${i + 1}`}
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full border-2 border-white/30 object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-white/90">
                <svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                {config.hero.rating}
              </div>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal>
            <h1 className="text-[2.5rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black tracking-[-0.02em] leading-[1.05] mt-7 md:mt-7 text-white">
              {config.hero.title}
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal>
            <p className="text-[0.9rem] md:text-base lg:text-lg text-white/60 leading-[1.7] mt-5 md:mt-5 max-w-[320px] sm:max-w-md md:max-w-xl">
              {config.hero.subtitle}
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-8 md:mt-9">
              <Link
                href={config.hero.ctaPrimary.href}
                className="btn-primary animate-btn-jiggle flex items-center justify-center gap-2.5 px-8 py-4 sm:py-3.5 rounded-2xl sm:rounded-xl font-bold text-[0.95rem] sm:text-[0.9rem] shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                {config.hero.ctaPrimary.text}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={config.hero.ctaSecondary.href}
                className="flex items-center justify-center gap-2.5 px-8 py-4 sm:py-3.5 rounded-2xl sm:rounded-xl font-bold text-[0.95rem] sm:text-[0.9rem] text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                {config.hero.ctaSecondary.text}
              </Link>
            </div>
          </ScrollReveal>

          {/* Stats Bar */}
          <ScrollReveal>
            <div className="grid grid-cols-4 gap-x-4 md:gap-x-8 mt-8 md:mt-10 pt-6 md:pt-7 border-t border-white/15 max-w-lg lg:max-w-none">
              {heroStats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-base sm:text-lg md:text-2xl lg:text-[1.75rem] font-black text-white tracking-tight">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-[0.55rem] sm:text-[0.6rem] md:text-[0.7rem] text-white/50 font-semibold mt-0.5 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Curved transition into Services ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[40px] sm:h-[50px] lg:h-[48px] block">
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
