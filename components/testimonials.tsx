"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "An unforgettable experience! The views are breathtaking and the staff is incredibly welcoming.",
    rating: 5
  },
  {
    name: "Jean Dupont",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "Perfect location for winter sports. The refuge is cozy and the food is excellent.",
    rating: 5
  },
  {
    name: "Maria Schmidt",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "A true Alpine gem! The atmosphere is authentic and the surroundings are magical.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Guest Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what our guests have to say about their stay at Refuge de Loriaz
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
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
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}