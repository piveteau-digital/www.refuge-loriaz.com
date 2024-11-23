"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials, Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4">
          <Image
            src={testimonial.image}
            alt={`Profile picture of ${testimonial.name}`}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <div className="flex" role="img" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star 
                key={i} 
                className="w-4 h-4 text-yellow-400 fill-current" 
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{testimonial.text}</p>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-white" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="testimonials-title" className="text-4xl font-bold mb-4">
            Guest Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what our guests have to say about their stay at Refuge de Loriaz
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}