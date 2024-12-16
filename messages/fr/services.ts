import {
  Bed,
  Coffee,
  Utensils,
  Mountain,
  Package,
  Clock,
} from "lucide-react";

const services = {
  title: "Nos Services",
  message: "Découvrez tout ce que le Refuge de Loriaz vous propose pour un séjour inoubliable",
  services: [
    {
      title: "Demi-Pension",
      description: "Un repas unique et complet pour votre séjour",
      icon: Package,
      details: [
        "Soupe et fromage",
        "Plat chaud",
        "Dessert",
        "Fondue possible sur réservation (+2€/pers.)",
      ],
    },
    {
      title: "Restauration Midi",
      description: "Une cuisine simple et gourmande servie jusqu'à 15h00",
      icon: Utensils,
      details: [
        "Soupe maison",
        "Croûte au fromage",
        "Quiche végétarienne",
        "Fondue sur réservation",
        "Spécialités savoyardes",
      ],
    },
    {
      title: "Petit-Déjeuner",
      description: "Un bon début de journée en montagne",
      icon: Coffee,
      details: [
        "Pain, gâteau et pain d'épice",
        "Beurre et confitures",
        "Boissons chaudes",
        "Jus d'orange",
      ],
    },
    {
      title: "Hébergement Été",
      description: "40 places en dortoirs",
      icon: Bed,
      details: [
        "3 dortoirs",
        "Sanitaires (WC et lavabo)",
        "Drap de sac obligatoire",
        "Location de drap possible (2€)",
      ],
    },
    {
      title: "Hébergement Hiver",
      description: "30 places en dortoirs chauffés",
      icon: Mountain,
      details: [
        "2 dortoirs chauffés (16-18°C)",
        "Sanitaires disponibles",
        "Drap de sac obligatoire",
        "Vêtements chauds conseillés",
      ],
    },
    {
      title: "Services Additionnels",
      description: "Pour faciliter votre séjour",
      icon: Clock,
      details: [
        "Pique-niques sur commande (8€)",
        "Location de draps de sac",
        "Réservation obligatoire",
        "Carte des boissons disponible",
      ],
    },
  ],
};

export default services;