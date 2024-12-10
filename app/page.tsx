import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { QuickBooking } from '@/components/quick-booking';
import { Weather } from '@/components/weather';
import { Testimonials } from '@/components/testimonials';
import { Activities } from '@/components/activities';

export default function Home() {
  return (
    <>
      <Hero />
      <QuickBooking />
      <Features />
      <Activities />
      <Weather />
      <Testimonials />
    </>
  );
}