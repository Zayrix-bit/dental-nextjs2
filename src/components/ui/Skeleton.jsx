/**
 * Premium Skeleton Primitives
 * ───────────────────────────
 * Reusable building blocks for layout-accurate loading states.
 * Uses CSS-only shimmer animation — zero JS overhead.
 */

/* ── Skeleton Box ── */
export function Skeleton({ 
  className = '', 
  rounded = 'rounded-lg',
  ...props 
}) {
  return (
    <div 
      className={`skeleton-shimmer ${rounded} ${className}`}
      {...props}
    />
  );
}

/* ── Skeleton Text Lines ── */
export function SkeletonText({ lines = 3, className = '' }) {
  const widths = ['100%', '92%', '75%', '88%', '60%'];
  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <Skeleton
          key={i}
          className="h-3.5"
          style={{ width: widths[i % widths.length] }}
        />
      ))}
    </div>
  );
}

/* ── Skeleton Circle (Avatar) ── */
export function SkeletonCircle({ size = 40, className = '' }) {
  return (
    <Skeleton
      className={className}
      rounded="rounded-full"
      style={{ width: size, height: size, flexShrink: 0 }}
    />
  );
}

/* ── Skeleton Button ── */
export function SkeletonButton({ width = '140px', className = '' }) {
  return (
    <Skeleton
      className={`h-12 ${className}`}
      rounded="rounded-xl"
      style={{ width }}
    />
  );
}

/* ── Skeleton Card ── */
export function SkeletonCard({ hasImage = true, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm ${className}`}>
      {hasImage && (
        <Skeleton className="w-full aspect-[4/3]" rounded="rounded-none" />
      )}
      <div className="p-5">
        <Skeleton className="h-5 w-3/4 mb-3" />
        <SkeletonText lines={2} />
        <Skeleton className="h-3 w-1/4 mt-4" />
      </div>
    </div>
  );
}

export default Skeleton;
