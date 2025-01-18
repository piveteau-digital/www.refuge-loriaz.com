const landing = {
  hero: {
    title: "Refuge de Loriaz",
    subtitle: "Vivez l'expérience de la montagne à 2020m d'altitude",
  },
  weather: {
    title: "Météo à vallorcine village",
    temperature: {
      title: "Température",
      value: "-",
    },
    conditions: {
      title: "Conditions",
      value: {
        0: 'Ciel clair',
        1: 'Ciel principalement clair',
        2: 'Partiellement nuageux',
        3: 'Nuageux',
        45: 'Brouillard',
        48: 'Brouillard avec givre',
        51: 'Bruine légère',
        53: 'Bruine modérée',
        55: 'Bruine dense',
        61: 'Légère pluie',
        63: 'Pluie modérée',
        65: 'Pluie forte',
        71: 'Faible chute de neige',
        73: 'Chute de neige modérée',
        75: 'Chute de neige forte',
        80: 'Averses de pluie légères',
        81: 'Averses de pluie modérées',
        82: 'Averses de pluie violentes',
        95: 'Orage'
      },
    },
    wind: {
      title: "Vent",
      value: "-",
    },
  },

  testimonial: {
    title: "Avis de nos visiteurs",
    note: { value: "4.6/5", suffix: "Basé sur 230 avis Google" },
    more: "Voir tous les avis sur Google Maps",
  },
  hikes: {
    title: "Randonnées depuis le refuge",
    subtitle: "Point de départ idéal pour explorer la région",
    dayHikes: {
      title: "Randonnées à la journée",
      items: [
        {
          title: "Col de la Terrasse",
          description: "2h de marche depuis le refuge",
          difficulty: "Moderate",
          difficultyLabel: "Modérée",
        },
        {
          title: "Pointe de la Terrasse",
          description: "2h de marche depuis le refuge",
          difficulty: "Moderate",
          difficultyLabel: "Modérée",
        },
        {
          title: "Cheval Blanc",
          description:
            "5h de marche depuis le refuge via le col de la Terrasse",
          difficulty: "Difficult",
          difficultyLabel: "Difficile",
        },
        {
          title: "Lac du Vieil Emosson",
          description: "Randonnée panoramique vers le lac",
          difficulty: "Easy",
          difficultyLabel: "Facile",
        },
        {
          title: "Traces de dinosaures",
          description: "2h30 depuis le refuge, proche du col de la Terrasse",
          difficulty: "Moderate",
          difficultyLabel: "Modérée",
        },
        {
          title: "Le Buet (3096m)",
          description: "Plus haut sommet des Aiguilles Rouges",
          difficulty: "Difficult",
          difficultyLabel: "Difficile",
        },
      ],
    },
    multiDayHikes: {
      title: "Circuits multi-jours",
      items: [
        {
          title: "Tour du Mont-Blanc",
          description: "Étape du célèbre circuit du TMB",
        },
        {
          title: "Tour des Aiguilles Rouges",
          description: "Circuit à travers le massif des Aiguilles Rouges",
        },
        {
          title: "Tour du Mont Ruan",
          description: "Randonnée itinérante autour du Mont Ruan",
        },
        {
          title: "Tour de la vallée du Trient",
          description: "Circuit découverte de la vallée du Trient",
        },
      ],
    },
  },
  activities: {
    title: "Nos Activités",
    subtitle: "Explorez la montagne sous toutes ses formes",
    hiking: {
      title: "Randonnée",
      description:
        "Parcourez les sentiers balisés et découvrez des panoramas à couper le souffle",
      season: "Été",
    },
    alpinism: {
      title: "Alpinisme",
      description: "Relevez le défi des sommets avec nos guides expérimentés",
      season: "Été",
    },
    skiing: {
      title: "Ski de randonnée",
      description: "Explorez les pentes immaculées en toute sécurité",
      season: "Hiver",
    },
    wildlife: {
      title: "Observation de la faune",
      description: "Découvrez la riche biodiversité alpine",
      season: "Toutes saisons",
    },
  },
  quickBooking: {
    title: "Disponibilité",
    guest: "Personne",
    guests: "Personnes",
    check: "Vérifier la disponibilité",
    dates: "Dates",
  },
};

export default landing;
