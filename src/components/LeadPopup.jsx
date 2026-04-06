'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, Star, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoveringClose, setIsHoveringClose] = useState(false);
  const [isExitIntent, setIsExitIntent] = useState(false);

  const POPUP_SEEN_KEY = 'dental_lead_popup_seen';
  const POPUP_COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours

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

    // Time-based trigger (10s lock)
    timer = setTimeout(() => {
      triggerPopup(false);
    }, 10000);

    // Scroll depth trigger (50%)
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

    // Exit intent trigger (Desktop mouse tracking)
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
        <button
          onClick={handleClose}
          onMouseEnter={() => setIsHoveringClose(true)}
          onMouseLeave={() => setIsHoveringClose(false)}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 z-60 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100/90 backdrop-blur-sm text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 shadow-sm"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

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
            
            <div className="flex flex-col gap-1.5 justify-start border-b border-slate-100 pb-3 mb-3">
                <span className="text-slate-400 font-bold text-[12px] sm:text-[13px] tracking-wide line-through decoration-slate-300">Worth $350</span>
              
                <div className="flex items-center justify-between sm:justify-start flex-wrap gap-x-3 gap-y-1">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-[12px] sm:text-[13px] font-bold text-slate-700">
                    <div className="flex items-center text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    4.9 Rating
                  </div>

                  <div className="flex items-center gap-1.5">
                    <div className="flex -space-x-1.5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white bg-emerald-100 flex items-center justify-center text-[7px] sm:text-[8px] font-bold text-emerald-800">JR</div>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white bg-blue-100 flex items-center justify-center text-[7px] sm:text-[8px] font-bold text-blue-800">SM</div>
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-medium text-slate-500 tracking-tight">500+ happy patients</span>
                  </div>
                </div>
            </div>
          </div>

          <p className="text-slate-600 text-[13px] sm:text-[14px] leading-snug mb-4 font-medium hidden sm:block">
            Comprehensive dental evaluation, digital X-rays, and a personalized treatment plan. Free, with zero obligation.
          </p>

          <ul className="flex flex-col gap-1.5 sm:gap-2 mb-5">
            {[
              "Full oral evaluation included",
              "Digital X-Ray diagnostics included",
              "Zero obligation — walk away anytime"
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="shrink-0 text-emerald-500">
                  <CheckCircle2 className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] fill-current text-white stroke-emerald-500" />
                </div>
                <span className="text-slate-700 text-[13px] sm:text-[14px] font-semibold">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col mt-auto shrink-0 bg-white">
            <button 
              className="w-full bg-[#188A4C] hover:bg-[#126b3a] hover:scale-[1.02] active:scale-[0.98] text-white rounded-xl py-3.5 sm:py-4 font-bold text-[16px] sm:text-[17px] shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={() => {
                window.location.href = '#appointment';
                handleClose();
              }}
            >
              Claim Free Assessment
            </button>
            
            <div className="mt-3 mb-3 flex justify-center">
              <ul className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-1 align-middle text-[10px] sm:text-[11px] font-medium text-slate-500">
                <li className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  Takes 30 seconds
                </li>
                <li className="flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  No credit card
                </li>
              </ul>
            </div>

            <button 
              onClick={handleClose}
              className={`w-full py-1 text-[12px] sm:text-[13px] font-medium transition-colors duration-200 mt-1 ${isHoveringClose ? 'text-slate-400 underline opacity-80' : 'text-slate-400 opacity-60 hover:opacity-100 hover:text-slate-500 hover:underline'}`}
            >
              No thanks
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
