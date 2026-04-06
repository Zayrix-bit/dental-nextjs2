'use client';

import { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { siteInfo } from '@/data/siteData';
import { trackEvent, EVENTS } from '@/lib/analytics';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      ref={ref}
      className="hidden lg:block fixed bottom-8 right-8 z-50"
    >
      {/* Expanded options */}
      <div
        className={`absolute bottom-16 right-0 flex flex-col gap-2.5 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Call */}
        <a
          href={`tel:${siteInfo.phoneRaw}`}
          onClick={() => trackEvent(EVENTS.CTA_FLOATING_CALL)}
          className="group flex items-center gap-3 bg-white rounded-2xl px-5 py-3.5 shadow-xl border border-slate-100 hover:border-primary/20 hover:shadow-2xl transition-all hover:-translate-y-0.5"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
            <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-xs font-bold text-text-dark">Call Us Now</div>
            <div className="text-[10px] text-slate-400 font-semibold">{siteInfo.phone}</div>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href={siteInfo.whatsappUrl}
          onClick={() => trackEvent(EVENTS.CTA_FLOATING_WHATSAPP)}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-white rounded-2xl px-5 py-3.5 shadow-xl border border-slate-100 hover:border-accent/20 hover:shadow-2xl transition-all hover:-translate-y-0.5"
        >
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
            <MessageCircle className="w-5 h-5 text-accent group-hover:text-white transition-colors" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-xs font-bold text-text-dark">WhatsApp Us</div>
            <div className="text-[10px] text-slate-400 font-semibold">Responds in ~12 min</div>
          </div>
        </a>
      </div>

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
          isOpen
            ? 'bg-slate-800 rotate-0'
            : 'btn-cta-green animate-btn-jiggle'
        }`}
        aria-label={isOpen ? 'Close contact menu' : 'Contact us'}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" strokeWidth={2.5} />
        ) : (
          <MessageCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
        )}
      </button>
    </div>
  );
}
