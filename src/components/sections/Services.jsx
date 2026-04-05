import { services } from '@/data/siteData';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import ParallaxRing from '@/components/ui/ParallaxRing';

const truncateText = (text, maxLength = 24) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

export default function Services({ isHomePage = false }) {
  return (
    <section id="services" className="pt-8 pb-16 lg:pt-6 lg:pb-24 bg-white relative overflow-hidden">

      <ParallaxRing className="absolute -top-20 -right-20 w-[350px] h-[350px] opacity-60" ringStyle="bg-donut-ring" speed={0.12} animation="animate-spin-extra-slow" />
      <ParallaxRing className="absolute bottom-10 -left-28 w-[300px] h-[300px] opacity-50" ringStyle="bg-donut-ring-lg" speed={0.18} animation="animate-float-slow" />
      <ParallaxRing className="absolute top-1/2 right-[5%] w-[150px] h-[150px] opacity-30" ringStyle="bg-donut-ring" speed={0.1} animation="animate-float-slow" />
      <div className="absolute inset-0 bg-radial-soft pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28 relative z-10">
        <ScrollReveal>
          <div className="mb-10 lg:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-text-dark leading-[1.1] tracking-tight mb-6">
                Treatments Designed for <span className="text-primary">Real Results.</span>
              </h2>
              <p className="text-slate-500 text-[0.92rem] md:text-[1rem] leading-relaxed font-medium max-w-xl">
                Personalized dental solutions focused on improving your smile, health, and confidence.
              </p>
            </div>

            {isHomePage && (
              <div className="flex shrink-0 pb-1">
                <Link
                  href="/services"
                  className="group flex items-center gap-2.5 text-primary font-bold text-[0.85rem] uppercase tracking-widest transition-all hover:text-primary-dark"
                >
                  <span className="relative">
                    View All Services
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                </Link>
              </div>
            )}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mt-6 lg:mt-10">
          {[...services]
            .sort((a, b) => (b.isHighlighted ? 1 : 0) - (a.isHighlighted ? 1 : 0))
            .map((service, idx) => (
              <ScrollReveal
                key={service.id || service.slug || service.title}
                delay={(idx % 4) * 80}
                className={`h-full ${isHomePage && idx >= 6 ? 'hidden lg:block' : ''}`}
              >
                <Link href={`/services/${service.slug}`} className="block h-full outline-none">
                  <div className={`h-full bg-white rounded-xl sm:rounded-2xl transition-all duration-500 relative group flex flex-col hover:-translate-y-1.5 ${service.isHighlighted
                    ? 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.16)] border border-primary/30 hover:border-primary/60'
                    : 'shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgb(0,0,0,0.08)] border border-slate-100/80 hover:border-slate-200'
                    }`} style={{ overflow: 'hidden' }}>

                    {/* Subtle Gradient Hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>

                    {/* Priority Badge */}
                    {service.isHighlighted && (
                      <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-30 flex items-center gap-1.5 bg-white text-primary px-2.5 py-1 rounded-md sm:rounded-lg text-[9px] sm:text-[11px] font-black tracking-tighter uppercase shadow-md border border-slate-100">
                        <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-primary" />
                        MOST POPULAR
                      </div>
                    )}

                    {/* Image Area */}
                    <div className="relative w-full aspect-16/10 overflow-hidden bg-slate-100">
                      <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/10 to-transparent z-10 transition-opacity duration-500 opacity-50 group-hover:opacity-70"></div>

                      <Image
                        src={service.image}
                        alt={service.altText || service.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        quality={75}
                        priority={idx < 2}
                      />

                      {/* Floating Icon overlapping image and content */}
                      <div className="absolute -bottom-1.5 left-3 z-20">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shadow-md border border-slate-50 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 ${service.isHighlighted ? 'bg-primary text-white' : 'bg-white text-primary'
                          }`}>
                          <service.icon className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-5 sm:p-6 flex flex-col h-full bg-white relative z-10 transition-colors duration-500 overflow-hidden">
                      {/* Artistic Numeric Marker (Subtle background) */}
                      <span className="absolute -top-3 -right-1 text-6xl font-black text-slate-50/50 select-none pointer-events-none group-hover:text-primary/5 transition-colors duration-500">
                        0{idx + 1}
                      </span>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-px w-3 bg-primary/20" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                          Specialist Care
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-text-dark group-hover:text-primary transition-colors duration-300 leading-tight mb-4">
                        {service.title}
                      </h3>

                      {/* Scannable High-Value Benefits */}
                      <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-auto">
                        {(service.benefits || []).slice(0, 3).map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-1.5 min-w-fit">
                            <div className="w-1 h-1 rounded-full bg-primary/20" />
                            <span className="text-[10px] font-medium text-slate-500 whitespace-nowrap">
                              {truncateText(benefit)}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Link - Professional & Minimal */}
                      <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-50">
                        <div className="inline-flex items-center gap-2.5 text-primary font-bold text-[10px] uppercase tracking-[0.12em] transition-all duration-300 group-hover:gap-4">
                          <span className="relative text-[11px]">
                            Details
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                          </span>
                          <div className="w-6 h-px bg-primary/20 transition-all duration-300 group-hover:w-10 group-hover:bg-primary" />
                        </div>
                        
                        {service.isHighlighted && (
                          <div className="flex items-center gap-1.5 text-emerald-600/70">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <span className="text-[8px] font-bold tracking-tighter">
                              ELITE
                            </span>
                          </div>
                        )}
                      </div>
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
