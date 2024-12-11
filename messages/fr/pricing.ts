const pricing = {
  title: "Nos Tarifs",
  sections: {
    accommodation: {
      title: "Hébergement",
      items: [
        {
          type: "Dortoir",
          price: "35€",
          details: "par personne/nuit",
          includes: [
            "Couchage en dortoir collectif",
            "Couvertures fournies",
            "Accès aux sanitaires",
          ],
        },
        {
          type: "Chambre double",
          price: "85€",
          details: "par chambre/nuit",
          includes: [
            "Chambre privative pour 2",
            "Linge de lit fourni",
            "Accès aux sanitaires",
          ],
        },
      ],
    },
    meals: {
      title: "Restauration",
      items: [
        {
          type: "Demi-pension",
          price: "25€",
          details: "par personne",
          includes: [
            "Dîner montagnard",
            "Nuitée",
            "Petit-déjeuner continental",
          ],
        },
        {
          type: "Petit-déjeuner",
          price: "9€",
          details: "par personne",
          includes: [
            "Boissons chaudes",
            "Pain frais",
            "Viennoiseries",
            "Confitures",
          ],
        },
        {
          type: "Dîner",
          price: "19€",
          details: "par personne",
          includes: ["Entrée", "Plat principal", "Dessert"],
        },
      ],
    },
    activities: {
      title: "Activités",
      items: [
        {
          type: "Randonnée guidée",
          price: "45€",
          details: "par personne",
          includes: ["Guide professionnel", "Équipement", "4-8 personnes"],
        },
        {
          type: "Location matériel",
          price: "15€",
          details: "par jour",
          includes: ["Bâtons de marche", "Raquettes (hiver)", "Casque"],
        },
      ],
    },
  },
  importantInfo: {
    title: "Informations importantes",
    items: [
      "Les tarifs sont donnés à titre indicatif et peuvent varier selon la saison",
      "Réduction de 10% pour les groupes de plus de 8 personnes",
      "Gratuit pour les enfants de moins de 5 ans",
      "Taxe de séjour non incluse (0,80€ par personne et par nuit)",
    ],
  },
  cta: "Réserver maintenant",
};

export default pricing;
