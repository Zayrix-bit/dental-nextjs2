'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteInfo } from '@/data/siteData';
import { trackEvent, EVENTS } from '@/lib/analytics';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-inset-bottom">
      <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className={`grid ${siteInfo.whatsappUrl ? 'grid-cols-3' : 'grid-cols-2'} gap-0`}>
          {/* Call */}
          <a
            href={`tel:${siteInfo.phoneRaw}`}
            onClick={() => trackEvent(EVENTS.CTA_STICKY_MOBILE_CALL)}
            className="flex flex-col items-center justify-center gap-1 py-3 min-h-[60px] active:bg-primary/5 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" strokeWidth={2.5} />
            </div>
            <span className="text-[10px] font-bold text-text-dark tracking-wide uppercase">Call</span>
          </a>

          {/* WhatsApp — only if URL is configured */}
          {siteInfo.whatsappUrl && (
            <a
              href={siteInfo.whatsappUrl}
              onClick={() => trackEvent(EVENTS.CTA_STICKY_MOBILE_WHATSAPP)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 py-3 min-h-[60px] active:bg-accent/5 transition-colors border-x border-slate-100"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center animate-whatsapp-giggle">
                <MessageCircle className="w-5 h-5 text-accent" strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-bold text-text-dark tracking-wide uppercase">WhatsApp</span>
            </a>
          )}

          {/* Book */}
          <a
            href="#appointment"
            onClick={() => trackEvent(EVENTS.CTA_STICKY_MOBILE_BOOK)}
            className="flex flex-col items-center justify-center gap-1 py-3 min-h-[60px] active:bg-accent/5 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-md shadow-accent/20">
              <Calendar className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[10px] font-bold text-accent tracking-wide uppercase">Book</span>
          </a>
        </div>
      </div>
    </div>
  );
}
