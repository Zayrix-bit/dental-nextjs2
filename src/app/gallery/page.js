import config from '@/config';
import PageHeader from '@/components/ui/PageHeader';
import BeforeAfter from '@/components/sections/BeforeAfter';




export const metadata = {
  title: config.pages.gallery.title,
  description: config.pages.gallery.description,
  alternates: {
    canonical: '/gallery',
  }
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        title={config.pages.gallery.pageHeader.title}
        description={config.pages.gallery.pageHeader.description}
      />
      <div className="pt-20">
        <BeforeAfter />
      </div>
    </>
  );
}
