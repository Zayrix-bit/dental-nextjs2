'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoveringClose, setIsHoveringClose] = useState(false);
  const [isExitIntent, setIsExitIntent] = useState(false);

  const POPUP_SEEN_KEY = 'dental_lead_popup_seen';

  // ✅ TESTING + PRODUCTION SMART COOLDOWN
  const POPUP_COOLDOWN_MS =
    process.env.NODE_ENV === 'development'
      ? 10 * 1000 // 10 sec (testing)
      : 12 * 60 * 60 * 1000; // 12 hours (production)

  const canShowPopup = useCallback(() => {
    if (typeof window === 'undefined') return false;

    const lastSeen = localStorage.getItem(POPUP_SEEN_KEY);
    if (!lastSeen) return true;

    return Date.now() - parseInt(lastSeen, 10) > POPUP_COOLDOWN_MS;
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!canShowPopup()) return;

    let timer;
    let hasTriggered = false;

    const triggerPopup = (viaExitIntent = false) => {
      if (!hasTriggered) {
        hasTriggered = true;
        setIsExitIntent(viaExitIntent);
        setIsOpen(true);

        if (typeof window !== 'undefined') {
          localStorage.setItem(POPUP_SEEN_KEY, Date.now().toString());
        }
      }
    };

    // Time-based trigger (10s)
    timer = setTimeout(() => {
      triggerPopup(false);
    }, 10000);

    // Scroll trigger (50%)
    const handleScroll = () => {
      if (hasTriggered) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage >= 50) {
        triggerPopup(false);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Exit intent
    const handleMouseLeave = (e) => {
      if (hasTriggered) return;

      if (e.clientY <= 0 || e.relatedTarget === null) {
        triggerPopup(true);
        document.removeEventListener('mouseout', handleMouseLeave);
      }
    };
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [canShowPopup]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={handleClose}
      />

      <div
        className="relative w-[95%] sm:w-[90%] md:max-w-md lg:max-w-lg max-h-[90vh] sm:max-h-[85vh] bg-white rounded-2xl md:rounded-3xl shadow-2xl flex flex-col border-2 border-emerald-600/20 animate-in fade-in zoom-in-95 duration-300 pointer-events-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-5 sm:p-6 md:p-7 overflow-y-auto overscroll-contain flex-1 custom-scrollbar">

          <div className="flex flex-col sm:flex-row flex-wrap gap-2 mb-4 sm:mb-5 pr-6 sm:pr-8">
            <div className="inline-flex items-center w-fit gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-bold uppercase tracking-wide border border-emerald-100">
              <Sparkles className="w-3 h-3.5" />
              Limited Time
            </div>

            <div className="inline-flex items-center w-fit flex-1 gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-red-50 text-red-600 text-[11px] sm:text-xs font-bold border border-red-100 animate-[pulse_2.5s_ease-in-out_infinite]">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Only 8 slots left — filling fast</span>
            </div>
          </div>

          <div className="mb-3 sm:mb-4">
            <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-black text-slate-900 tracking-tight leading-[1.1] mb-2">
              {isExitIntent
                ? "Wait — Don't Miss Your Free Dental Assessment"
                : "Get Your Free Smile Assessment + Digital X-Ray Today"}
            </h2>

            <div className="flex flex-col gap-1.5 border-b border-slate-100 pb-3 mb-3">
              <span className="text-slate-400 font-bold text-[12px] sm:text-[13px] line-through">
                Worth $350
              </span>

              <div className="flex items-center justify-between flex-wrap gap-x-3 gap-y-1">
                <div className="flex items-center gap-1 text-[12px] sm:text-[13px] font-bold text-slate-700">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  4.9 Rating
                </div>

                <span className="text-[11px] sm:text-[12px] text-slate-500">
                  500+ happy patients
                </span>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-1.5 sm:gap-2 mb-5">
            {[
              "Full oral evaluation included",
              "Digital X-Ray diagnostics included",
              "Zero obligation — walk away anytime"
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-700 text-[13px] sm:text-[14px] font-semibold">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col mt-auto">
            <button
              className="w-full bg-[#188A4C] hover:bg-[#126b3a] text-white rounded-xl py-3.5 font-bold text-[16px] transition-all"
              onClick={() => {
                window.location.href = '#appointment';
                handleClose();
              }}
            >
              Claim Free Assessment
            </button>

            <p className="text-center text-[11px] text-slate-500 mt-2">
              Takes 30 seconds • No credit card required
            </p>

            <button
              onClick={handleClose}
              className="text-slate-400 text-[12px] mt-2"
            >
              No thanks
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
