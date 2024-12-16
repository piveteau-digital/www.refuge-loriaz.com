import {
  Bed,
  Coffee,
  Utensils,
  Mountain,
  Package,
  Clock,
} from "lucide-react";

const services = {
  title: "Our Services",
  message: "Discover everything that Refuge de Loriaz offers for an unforgettable stay",
  services: [
    {
      title: "Half-Board",
      description: "A complete set menu for your stay",
      icon: Package,
      details: [
        "Soup and cheese",
        "Hot main course",
        "Dessert",
        "Fondue available upon request (+2€/person)",
      ],
    },
    {
      title: "Lunch Service",
      description: "Simple and delicious cuisine served until 3:00 PM",
      icon: Utensils,
      details: [
        "Homemade soup",
        "Cheese crust",
        "Vegetarian quiche",
        "Fondue (reservation required)",
        "Savoyard specialties",
      ],
    },
    {
      title: "Breakfast",
      description: "A great start to your mountain day",
      icon: Coffee,
      details: [
        "Bread, cake and gingerbread",
        "Butter and jams",
        "Hot beverages",
        "Orange juice",
      ],
    },
    {
      title: "Summer Accommodation",
      description: "40 beds in dormitories",
      icon: Bed,
      details: [
        "3 dormitory rooms",
        "Facilities (WC and sink)",
        "Sleeping bag liner required",
        "Liner rental available (2€)",
      ],
    },
    {
      title: "Winter Accommodation",
      description: "30 beds in heated dormitories",
      icon: Mountain,
      details: [
        "2 heated dormitories (16-18°C)",
        "Facilities available",
        "Sleeping bag liner required",
        "Warm clothing recommended",
      ],
    },
    {
      title: "Additional Services",
      description: "To enhance your stay",
      icon: Clock,
      details: [
        "Packed lunches available (8€)",
        "Sleeping bag liner rental",
        "Advance booking required",
        "Drinks menu available",
      ],
    },
  ],
};

export default services;