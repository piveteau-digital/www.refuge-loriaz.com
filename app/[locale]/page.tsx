import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { QuickBooking } from '@/components/quick-booking';
import { Weather } from '@/components/weather';
import { Testimonials } from '@/components/testimonials';
import { Activities } from '@/components/activities';
import { getTranslations } from '@/config/@next-intl/server';

export default async function Home() {
  const t = await getTranslations("landing");
  const tCommon = await getTranslations("common");
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