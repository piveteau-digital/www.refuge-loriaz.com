"use client"
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { QuickBooking } from '@/components/quick-booking';
import { Weather } from '@/components/weather';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Weather />
      <Testimonials />
    </>
  );
}