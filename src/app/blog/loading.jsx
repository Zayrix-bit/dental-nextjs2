import Header from '@/components/layout/Header';
import { PageHeaderSkeleton, BlogCardsSkeleton } from '@/components/ui/SectionSkeletons';

export default function BlogLoading() {
  return (
    <>
      <Header />
      <PageHeaderSkeleton />
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlogCardsSkeleton count={6} />
        </div>
      </section>
    </>
  );
}
