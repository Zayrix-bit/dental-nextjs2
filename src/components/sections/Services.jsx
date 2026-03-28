import { services } from '@/data/siteData';
import SectionTitle from '@/components/ui/SectionTitle';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="py-8 lg:py-12 bg-zinc-50 relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-primary)]/5 blur-[80px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 w-full">
        <ScrollReveal>
          <div className="mb-6 lg:mb-8 text-center max-w-2xl mx-auto">
             <div className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-3 py-1.5 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-3 lg:mb-4 border border-slate-100 shadow-sm">
               Premium Care
             </div>
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black text-[var(--color-text-dark)] mb-3 lg:mb-4 leading-tight tracking-tight">
               Comprehensive <span className="text-[var(--color-primary)] italic font-medium">Solutions.</span>
             </h2>
             <p className="text-slate-500 text-[0.85rem] md:text-base leading-relaxed max-w-[450px] mx-auto">
                Experience painless dental care tailored to enhance your smile and function.
             </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-4 lg:mt-6">
          {[...services].sort((a, b) => (b.isHighlighted ? 1 : 0) - (a.isHighlighted ? 1 : 0)).map((service) => (
            <ScrollReveal key={service.id || service.slug || service.title} className="h-full">
              <Link href={`/services/${service.slug}`} className="block h-full outline-none">
                <div className={`h-full bg-white rounded-[1.25rem] lg:rounded-[1.5rem] transition-all duration-300 relative group flex flex-col hover:-translate-y-1.5 ${
                  service.isHighlighted 
                    ? 'shadow-lg hover:shadow-xl border-2 border-[var(--color-primary)]' 
                    : 'shadow-sm hover:shadow-md border border-slate-100/80'
                }`} style={{ overflow: 'hidden' }}>
                  
                  {/* Subtle Gradient Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
                  
                  {/* Priority Badge */}
                  {service.isHighlighted && (
                    <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-white/95 backdrop-blur-sm text-[var(--color-primary)] px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm">
                      <Star className="w-3 h-3 fill-[var(--color-primary)]" />
                      Featured
                    </div>
                  )}

                  {/* Image Area */}
                  <div className="relative w-full aspect-[16/9] sm:aspect-video md:aspect-[5/3] lg:aspect-[16/9] overflow-hidden bg-slate-100">
                    {/* Dark gradient overlay for a premium feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-[#0A3A5C]/20 to-transparent z-10 transition-opacity duration-500 opacity-60 group-hover:opacity-80"></div>
                    
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-[1s] ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Floating Icon overlapping image and content */}
                    <div className="absolute -bottom-[16px] xl:-bottom-[20px] left-4 xl:left-5 z-20">
                      <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-[14px] flex items-center justify-center shadow-md border border-slate-50 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 ${
                        service.isHighlighted ? 'bg-[var(--color-primary)] text-white' : 'bg-white text-[var(--color-primary)]'
                      }`}>
                        <service.icon className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="p-4 pt-6 md:p-5 md:pt-7 lg:p-6 lg:pt-8 flex flex-col flex-grow relative z-10 bg-white">
                    <h3 className="text-lg lg:text-xl font-bold text-[var(--color-text-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-[0.8rem] lg:text-[0.85rem] text-slate-500 leading-snug mb-4 lg:mb-5 flex-grow line-clamp-2 md:line-clamp-3">
                      {service.shortDescription || service.description}
                    </p>

                    {/* Trust Tags */}
                    {service.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-4 lg:mb-5 relative">
                        {service.tags.map((tag, idx) => (
                           <span key={idx} className="bg-slate-50 border border-slate-100 text-slate-500 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase truncate max-w-full">
                             {tag}
                           </span>
                        ))}
                      </div>
                    )}

                    {/* Action Link */}
                    <div className="flex items-center text-[var(--color-primary)] font-bold text-[10px] lg:text-[11px] mt-auto relative group-hover:gap-2 transition-all duration-300 gap-1.5 tracking-wider uppercase">
                      Explore Treatment <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
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
