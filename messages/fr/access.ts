import { Car, Train, Mountain } from "lucide-react";

const access = {
  title: "Comment venir ?",
  message: "Toutes les informations pour accéder au Refuge de Loriaz",
  ways: [
    {
      icon: Car,
      title: "En voiture",
      description:
        "Depuis Chamonix, prenez la D1506 direction Vallorcine. Parking au Col des Montets.",
      details: [
        "Parking gratuit au Col des Montets",
        "45 minutes depuis Chamonix",
        "1h30 depuis Genève",
      ],
    },
    {
      icon: Train,
      title: "En train",
      description:
        "Gare SNCF de Vallorcine, puis navette ou taxi jusqu'au départ du sentier.",
      details: [
        "TER depuis Chamonix ou Martigny",
        "Service de navette en saison",
        "Taxis disponibles sur réservation",
      ],
    },
    {
      icon: Mountain,
      title: "À pied",
      description:
        "2h de marche depuis le Col des Montets par un sentier balisé.",
      details: ["Dénivelé : 700m", "Difficulté : moyenne", "Balisage : jaune"],
    },
  ],
  notice: {
    title: "Informations importantes",
    points: [
      "Prévoir de bonnes chaussures de marche",
      "Vérifier la météo avant de partir",
      "Emporter de l'eau et des en-cas",
      "Le refuge n'est pas accessible en voiture",
      "En hiver, équipement adapté obligatoire",
    ],
  },
};

export default access;
