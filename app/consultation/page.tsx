import { Metadata } from 'next';
import ConsultationForm from '@/components/consultation/consultation-form';
import Footer from '@/components/shared/footer';
import HeaderNavigation from '@/components/shared/header-navigation';
import BackToTop from '@/components/home/back-to-top';

export const metadata: Metadata = {
  title: 'Book a Consultation | S.A.S Transition',
  description: 'Schedule a consultation with our expert team. Get professional advice on construction, commissioning, safety strategy, or book a SASTpro demo.',
  keywords: 'electrical consultation, SASTpro demo, engineering consultation, safety compliance, construction consultation',
};

export default function ConsultationPage() {
  return (
    <main className="theme-electrical min-h-screen">
      <HeaderNavigation />

        <ConsultationForm />

      <Footer />

      <BackToTop />
    </main>
  );
}
