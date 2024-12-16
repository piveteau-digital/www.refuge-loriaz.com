import { Car, Mountain, Footprints } from "lucide-react";

// English Version
const access = {
  title: "How to Get Here?",
  message: "All information to access Refuge de Loriaz",
  ways: [
    {
      icon: Car,
      title: "By car",
      description: "From Chamonix (16 km) or Martigny (25 km)",
      details: [
        "From Chamonix, past Col des Montets",
        "Through Buet village",
        "First left towards Le Couteray",
        "Two parking areas available in the bends",
      ],
    },
    {
      icon: Footprints,
      title: "On foot",
      description: "2-hour walk from Le Couteray parking areas",
      details: [
        "600m elevation gain",
        "Wide marked trail",
        "Path through forest and alpine meadows",
        "Trail starts 150m from parking",
      ],
    },
    {
      icon: Mountain,
      title: "Alternative routes",
      description: "Several access options depending on season",
      details: [
        "From Vallorcine via Siseray or Crot",
        "From Châtelard-Frontière via Barberine",
        "From Emosson dam (summer only)",
        "By ski touring or snowshoes in winter",
      ],
    },
  ],
  notice: {
    title: "Important Information",
    points: [
      "Parking mandatory in designated areas",
      "Do not park at the end of the road",
      "Winter access only by ski touring or snowshoes",
      "Consult the High Mountain Office (OHM) for more information",
      "Contact us for any additional details",
    ],
  },
};

export default access;