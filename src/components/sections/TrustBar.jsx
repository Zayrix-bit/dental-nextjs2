import { trustBarData } from '@/data/siteData';
import { resolveIcon } from '@/config/iconMap';
import ScrollReveal from '@/components/ScrollReveal';

export default function TrustBar() {
  if (!trustBarData || trustBarData.length === 0) return null;

  return (
    <section className="relative z-10 -mt-1 bg-white" id="trust-bar">
      <div className="trust-bar-gradient border-b border-slate-100">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 py-9 lg:py-11">
              {trustBarData.map((item, idx) => {
                const Icon = resolveIcon(item.icon);
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 group"
                  >
                    {/* Larger, bolder icon container */}
                    <div className="w-13 h-13 md:w-14 md:h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-black text-text-dark tracking-tight leading-none">
                        {item.number}
                      </div>
                      <div className="text-[0.8rem] font-bold text-text-dark/85 leading-tight mt-0.5">
                        {item.label}
                      </div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                        {item.sublabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
