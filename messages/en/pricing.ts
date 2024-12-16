const pricing = {
  title: "Our Rates",
  message: "Winter Rates - Advance booking required (minimum 24h notice)",
  sections: {
    accommodation: {
      title: "Half-Board Packages",
      items: [
        {
          type: "Adult",
          price: "49€",
          details: "per person/night",
          includes: [
            "Evening meal",
            "Overnight stay",
            "Breakfast",
          ],
        },
        {
          type: "Adult Group Rate",
          price: "44€",
          details: "per person/night (min. 10 people)",
          includes: [
            "Evening meal",
            "Overnight stay",
            "Breakfast",
          ],
        }
      ],
    },
    extras: {
      title: "Additional Services",
      items: [
        {
          type: "Mountain Guide Rate",
          price: "29€",
          details: "per guide/night",
          includes: ["Half-board accommodation for certified guides"],
        },
        {
          type: "Packed Lunch",
          price: "9€",
          details: "per person",
          includes: ["Available upon reservation"],
        },
      ],
    },
  },
  importantInfo: {
    title: "Important Information",
    items: [
      "Advance booking required (minimum 24h notice)",
      "Tourist tax: 0.80€ per person per night",
      "Packed lunches available on request: 9€",
    ],
  },
  cta: "Book Now",
};

export default pricing;