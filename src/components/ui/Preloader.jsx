"use client";

import { useEffect, useState, useRef } from "react";
import config from "@/config";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const timerRef = useRef(null);
  const removeTimerRef = useRef(null);
  const safetyTimerRef = useRef(null);
  const finishedRef = useRef(false);

  useEffect(() => {
    const handleFinishLoading = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;

      // Immediately clear other trigger mechanisms
      window.removeEventListener("load", handleFinishLoading);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);

      // Small buffer to allow the final paint to settle
      timerRef.current = setTimeout(() => {
        setIsFadingOut(true);
        // Wait for the fade-out animation to finish (optimized for speed)
        removeTimerRef.current = setTimeout(() => {
          setLoading(false);
        }, 300);
      }, 100); 
    };

    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";
    
    // Check if document is already loaded (SSR/Hydration case)
    if (document.readyState === "complete") {
      handleFinishLoading();
    } else {
      window.addEventListener("load", handleFinishLoading);
      
      // Safety timeout: Never keep the user waiting more than 2 seconds
      safetyTimerRef.current = setTimeout(handleFinishLoading, 2000);
    }

    // Unified Cleanup Function: Ensures all timers are cleared via refs
    return () => {
      window.removeEventListener("load", handleFinishLoading);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (removeTimerRef.current) clearTimeout(removeTimerRef.current);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader-bg ${isFadingOut ? "animate-preloader-fade-out" : ""} transition-opacity will-change-[opacity]`}>
      {/* Brand Logo Icon with entrance then exit animation */}
      <div className={`flex flex-col items-center mb-12 will-change-transform ${isFadingOut ? "animate-logo-pop-out" : "animate-logo-pop"}`}>
        <div className="w-22 h-22 bg-primary rounded-full flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            {/* Heartbeat flow animation */}
            <path
              d="M22 12h-4l-3 9L9 3l-3 9H2"
              className="animate-heartbeat-draw"
            />
          </svg>
        </div>
      </div>

      {/* Progress Line Container (Compact & Bold) */}
      <div className="w-64 max-w-[85vw] h-[6px] bg-slate-100/90 rounded-full overflow-hidden relative shadow-inner">
        {/* Bidirectional Sweeping Segment (Matches Book Now Button) */}
        <div className="absolute top-0 left-0 h-full w-1/2 bg-primary rounded-full animate-progress-sweep will-change-transform">
        </div>
      </div>
    </div>
  );
}
