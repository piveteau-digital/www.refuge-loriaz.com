export interface Testimonial {
  name: string;
  image: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
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