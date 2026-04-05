import { PageHeaderSkeleton } from '@/components/ui/SectionSkeletons';
import { Skeleton, SkeletonText, SkeletonCircle } from '@/components/ui/Skeleton';

export default function AboutLoading() {
  return (
    <>
      <PageHeaderSkeleton />
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <Skeleton className="w-full aspect-square max-w-md mx-auto" rounded="rounded-2xl" />
            {/* Text */}
            <div>
              <Skeleton className="h-9 w-64 mb-4" />
              <Skeleton className="h-5 w-48 mb-6" />
              <SkeletonText lines={5} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
