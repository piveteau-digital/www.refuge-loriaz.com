import { Car, Mountain, Footprints } from "lucide-react";

// French Version
const access = {
  title: "Comment venir ?",
  message: "Toutes les informations pour accéder au Refuge de Loriaz",
  ways: [
    {
      icon: Car,
      title: "En voiture",
      description: "Depuis Chamonix (16 km) ou Martigny (25 km)",
      details: [
        "Depuis Chamonix, après le Col des Montets",
        "Traverser le village du Buet",
        "Première route à gauche direction Le Couteray",
        "Deux parkings disponibles dans les virages",
      ],
    },
    {
      icon: Footprints,
      title: "À pied",
      description: "2h de marche depuis les parkings du Couteray",
      details: [
        "600m de dénivelé",
        "Large sentier balisé",
        "Parcours entre forêt et alpage",
        "Départ à 150m des parkings",
      ],
    },
    {
      icon: Mountain,
      title: "Autres itinéraires",
      description: "Plusieurs accès possibles selon la saison",
      details: [
        "Depuis Vallorcine par le Siseray ou le Crot",
        "Depuis Châtelard-Frontière via Barberine",
        "Depuis le barrage d'Emosson (été uniquement)",
        "En ski de randonnée ou raquettes l'hiver",
      ],
    },
  ],
  notice: {
    title: "Informations Importantes",
    points: [
      "Stationnement obligatoire sur les parkings dédiés",
      "Ne pas se garer au bout de la route",
      "Accès hivernal uniquement en ski de randonnée ou raquettes",
      "Consulter l'Office de Haute Montagne (OHM) pour plus d'informations",
      "Nous contacter pour tout renseignement complémentaire",
    ],
  },
};

export default access;