const pricing = {
  title: "Our Rates",
  sections: {
    accommodation: {
      title: "Accommodation",
      items: [
        {
          type: "Dormitory",
          price: "35€",
          details: "per person/night",
          includes: [
            "Shared dormitory accommodation",
            "Blankets provided",
            "Access to facilities",
          ],
        },
        {
          type: "Double Room",
          price: "85€",
          details: "per room/night",
          includes: [
            "Private room for 2",
            "Bed linen provided",
            "Access to facilities",
          ],
        },
      ],
    },
    meals: {
      title: "Dining",
      items: [
        {
          type: "Half Board",
          price: "25€",
          details: "per person",
          includes: [
            "Mountain dinner",
            "Overnight stay",
            "Continental breakfast",
          ],
        },
        {
          type: "Breakfast",
          price: "9€",
          details: "per person",
          includes: ["Hot beverages", "Fresh bread", "Pastries", "Jams"],
        },
        {
          type: "Dinner",
          price: "19€",
          details: "per person",
          includes: ["Starter", "Main course", "Dessert"],
        },
      ],
    },
    activities: {
      title: "Activities",
      items: [
        {
          type: "Guided Hike",
          price: "45€",
          details: "per person",
          includes: ["Professional guide", "Equipment", "4-8 people"],
        },
        {
          type: "Equipment Rental",
          price: "15€",
          details: "per day",
          includes: ["Walking poles", "Snowshoes (winter)", "Helmet"],
        },
      ],
    },
  },
  importantInfo: {
    title: "Important Information",
    items: [
      "Rates are indicative and may vary by season",
      "10% discount for groups of 8 or more",
      "Free for children under 5 years",
      "Tourist tax not included (0.80€ per person per night)",
    ],
  },
  cta: "Book Now",
};

export default pricing;
