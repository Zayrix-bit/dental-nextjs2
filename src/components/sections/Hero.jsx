'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Clock } from 'lucide-react';
import config from '@/config';
import ScrollReveal from '@/components/ScrollReveal';
import { trackEvent, EVENTS } from '@/lib/analytics';

export default function Hero() {
  return (
    <section className="relative min-h-[90svh] lg:min-h-svh flex flex-col overflow-hidden bg-slate-900">
      
      {/* ── Background Layer ── */}
      <Image
        src={config.images.heroBg}
        alt={`${config.contact.address.city} Dental Clinic`}
        fill
        priority
        className="object-cover object-[center_30%] sm:object-center opacity-85"
        sizes="100vw"
        quality={90}
      />

      {/* ── Contrast Overlays ── */}
      <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/80 to-black/30" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1300px] mx-auto w-full px-5 sm:px-8 lg:px-12 pt-32 pb-20 mt-4 sm:mt-0">
        <div className="max-w-3xl">
          
          <ScrollReveal>
            {/* 1. 🔥 HEADLINE */}
            <h1 className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-black tracking-tight leading-[1.05] text-white">
              Tooth Pain? Get <br className="hidden sm:block" />
              <span className="text-emerald-400">Same-Day Relief</span> in {config.contact.address.city}
            </h1>
          </ScrollReveal>

          <ScrollReveal>
            {/* 2. 🧾 SUBHEADLINE */}
            <p className="text-[17px] sm:text-[19px] text-white/80 leading-relaxed mt-5 md:mt-6 max-w-xl font-medium">
              Pain-free care by board-certified specialists. Trusted by 5,000+ patients.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            {/* 3. ⭐ TRUST SIGNAL */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-4 md:mt-5 text-[14px] sm:text-[15px] text-white/90 font-medium">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9 Google Rating</span>
              <span className="mx-1 sm:mx-1.5 opacity-40">•</span>
              <span>Trusted by 5,000+ patients</span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            {/* 4. 🎯 PRIMARY CTA */}
            <div className="mt-8 sm:mt-10 flex flex-col items-start w-full sm:w-auto border-t border-white/10 pt-8">
              <Link
                href={config.hero.ctaPrimary.href}
                onClick={() => trackEvent(EVENTS.CTA_HERO_PRIMARY)}
                className="w-full sm:w-fit bg-[#188A4C] hover:bg-[#126b3a] hover:scale-[1.02] active:scale-[0.98] text-white rounded-xl py-4 sm:py-5 px-8 sm:px-10 font-bold text-[17px] sm:text-[19px] shadow-xl shadow-emerald-900/30 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Book Emergency Visit Now
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* URGENCY LINE */}
              <div className="flex items-center gap-1.5 mt-3.5 mb-1.5 w-full justify-center sm:justify-start text-red-400 font-semibold text-[13px] sm:text-[14px]">
                <Clock className="w-3.5 h-3.5" />
                Limited slots available today
              </div>

              {/* 5. 🧠 MICRO TRUST */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 mt-1 text-[12px] sm:text-[13px] text-white/60 font-medium w-full">
                <span className="text-emerald-400">✔</span> Takes 30 sec 
                <span className="mx-1 sm:mx-1.5 opacity-30">•</span> 
                <span className="text-emerald-400">✔</span> No signup required 
                <span className="mx-1 sm:mx-1.5 opacity-30">•</span> 
                <span className="text-emerald-400">✔</span> Same-day availability
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            {/* 6. 📞 SECONDARY CTA */}
            <div className="mt-6 sm:mt-7 flex items-center justify-center sm:justify-start text-[13px] sm:text-[14px] text-white/40">
              Or
              <a 
                href={`tel:${config.contact.phone}`}
                onClick={() => trackEvent(EVENTS.CTA_HERO_SECONDARY)}
                className="ml-1.5 font-medium hover:text-white/80 transition-colors underline decoration-white/20 underline-offset-4"
              >
                call {config.contact.phone}
              </a>
            </div>
          </ScrollReveal>

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
