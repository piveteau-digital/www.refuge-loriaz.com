import { Bed, Coffee, Compass, Mountain, Package, Utensils } from "lucide-react";

const services = {
    title: "Nos services",
    message: "Découvrez tout ce que le Refuge de Loriaz peut vous offrir pour un séjour inoubliable",
    services: [
        {
          title: "Demi-pension",
          description: "Profitez d'un séjour tout compris avec dîner et petit-déjeuner",
          icon: Package,
          details: [
            "Dîner montagnard traditionnel",
            "Nuitée en dortoir ou chambre",
            "Petit-déjeuner continental copieux"
          ]
        },
        {
          title: "Petit-déjeuner",
          description: "Démarrez votre journée avec un petit-déjeuner énergétique",
          icon: Coffee,
          details: [
            "Pain frais et viennoiseries",
            "Confitures maison",
            "Boissons chaudes",
            "Céréales et fruits"
          ]
        },
        {
          title: "Dîner",
          description: "Savourez une cuisine traditionnelle de montagne",
          icon: Utensils,
          details: [
            "Spécialités savoyardes",
            "Produits locaux",
            "Menu végétarien disponible",
            "Vin de Savoie"
          ]
        },
        {
          title: "Hébergement",
          description: "Un refuge confortable pour votre séjour en altitude",
          icon: Bed,
          details: [
            "Dortoirs collectifs",
            "Chambres privatives",
            "Douches chaudes",
            "Casiers sécurisés"
          ]
        },
        {
          title: "Randonnées guidées",
          description: "Découvrez les plus beaux sentiers avec nos guides",
          icon: Compass,
          details: [
            "Circuits adaptés à tous niveaux",
            "Guides professionnels",
            "Équipement fourni",
            "Groupes de 4 à 8 personnes"
          ]
        },
        {
          title: "Services additionnels",
          description: "Des prestations pour enrichir votre expérience",
          icon: Mountain,
          details: [
            "Pique-niques à emporter",
            "Location de matériel",
            "Séances photo",
            "Formations alpines"
          ]
        }
      ]
}

export default services;