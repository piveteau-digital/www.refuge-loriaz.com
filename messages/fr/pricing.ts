const pricing = {
  title: "Nos Tarifs",
  message: "Tarifs hiver - Réservation obligatoire (24h minimum à l'avance)",
  sections: {
    accommodation: {
      title: "Formules Demi-pension",
      items: [
        {
          type: "Adulte",
          price: "49€",
          details: "par personne/nuit",
          includes: ["Repas du soir", "Nuitée", "Petit-déjeuner"],
        },
        {
          type: "Adulte Groupe",
          price: "44€",
          details: "par personne/nuit (min. 10 pers.)",
          includes: ["Repas du soir", "Nuitée", "Petit-déjeuner"],
        },
      ],
    },
    extras: {
      title: "Services Additionnels",
      items: [
        {
          type: "Tarif Guide",
          price: "29€",
          details: "par guide/nuit",
          includes: ["Demi-pension pour guides certifiés"],
        },
        {
          type: "Pique-nique",
          price: "9€",
          details: "par personne",
          includes: ["Sur réservation uniquement"],
        },
      ],
    },
  },
  importantInfo: {
    title: "Informations Importantes",
    items: [
      "Réservation obligatoire 24h à l'avance minimum",
      "Taxe de séjour : 0,80€ par personne et par nuit",
      "Pique-niques disponibles sur réservation : 9€",
    ],
  },
  cta: "Réserver",
};

export default pricing;
