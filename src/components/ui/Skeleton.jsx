'use client';

export default function Skeleton({ 
  width = '100%', 
  height = '20px', 
  rounded = 'rounded-md', 
  className = '' 
}) {
  return (
    <div 
      className={`relative overflow-hidden bg-slate-200/60 ${rounded} ${className}`}
      style={{ width, height }}
    >
      <div className="absolute inset-0 animate-shimmer" />
    </div>
  );
}
