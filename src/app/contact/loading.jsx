import Header from '@/components/layout/Header';
import { PageHeaderSkeleton, ContactSkeleton } from '@/components/ui/SectionSkeletons';

export default function ContactLoading() {
  return (
    <>
      <Header />
      <PageHeaderSkeleton />
      <ContactSkeleton />
    </>
  );
}
