'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { services, problemSolutionData } from '@/data/siteData';
import ScrollReveal from '@/components/ScrollReveal';
import { trackEvent, EVENTS } from '@/lib/analytics';

/**
 * Services Section
 * ─────────────────
 * - Homepage: Shows Problem → Solution cards (high conversion)
 * - Services Page: Shows full image-based service cards
 *
 * Pass `variant="full"` from the services page to show all cards.
 */
export default function Services({ variant = 'homepage' }) {
  if (variant === 'homepage') {
    return <HomepageServices />;
  }
  return <FullServices />;
}

// ══════════════════════════════════════
//  HOMEPAGE — Problem → Solution Format
// ══════════════════════════════════════

function HomepageServices() {
  const items = problemSolutionData;

  return (
    <section id="services" className="relative py-14 lg:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-radial-soft pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
            <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">What We Fix</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-text-dark tracking-tight leading-[1.1] mb-4">
              Tell Us Your Problem. <span className="text-primary">We&apos;ll Fix It.</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-[0.95rem] leading-relaxed font-medium">
              Every smile deserves a solution. Find yours below — or call us to discuss options.
            </p>
          </div>
        </ScrollReveal>

        {/* Problem → Solution Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 80}>
                <Link
                  href={`/services/${item.serviceSlug}`}
                  onClick={() => trackEvent(EVENTS.SERVICE_CARD_CLICK, { service: item.solution })}
                  className="group block bg-white rounded-2xl border border-slate-100 p-6 lg:p-7 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      {/* Problem */}
                      <span className="text-xs font-bold text-red-500/80 uppercase tracking-wider">{item.problem}</span>
                      {/* Solution */}
                      <h3 className="text-base lg:text-lg font-bold text-text-dark mt-1 tracking-tight group-hover:text-primary transition-colors">
                        {item.solution}
                      </h3>
                      {/* Description */}
                      <p className="text-sm text-text-light leading-relaxed mt-1.5 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-primary shrink-0 mt-1 transition-colors" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All CTA */}
        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all group"
            >
              View All Services & Treatments
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
//  FULL SERVICES PAGE — Image Cards
// ══════════════════════════════════════

function FullServices() {
  return (
    <section id="services" className="relative py-14 lg:py-20 bg-clinical overflow-hidden">
      <div className="absolute inset-0 bg-dot-mesh pointer-events-none opacity-40" />

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 80}>
              <Link
                href={`/services/${service.slug}`}
                onClick={() => trackEvent(EVENTS.SERVICE_CARD_CLICK, { service: service.title })}
                className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-primary/15 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] bg-slate-50 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {service.isHighlighted && (
                    <span className="absolute top-3 right-3 bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {service.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] font-bold text-primary/70 bg-primary/5 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-text-dark tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed mt-2 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-1.5 mt-4 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
