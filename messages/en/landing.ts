const landing = {
  hero: {
    title: "Refuge de Loriaz",
    subtitle: "Experience the mountains at 2020m altitude",
  },
  weather: {
    title: "Weather at vallorcine village",
    temperature: {
      title: "Temperature",
      value: "-",
    },
    conditions: {
      title: "Conditions",
      value: {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        71: 'Slight snow fall',
        73: 'Moderate snow fall',
        75: 'Heavy snow fall',
        80: 'Slight rain showers',
        81: 'Moderate rain showers',
        82: 'Violent rain showers',
        95: 'Thunderstorm'
      },
    },
    wind: {
      title: "Wind Speed",
      value: "-",
    },
  },

  testimonial: {
    title: "Reviews from our visitors",
    note: { value: "4.6/5", suffix: "Based on 230 Google reviews" },
    more: "See all reviews on Google Maps",
  },
  hikes: {
    title: "Hikes from the refuge",
    subtitle: "Perfect starting point to explore the region",
    dayHikes: {
      title: "Day hikes",
      items: [
        {
          title: "Col de la Terrasse",
          description: "2-hour hike from the refuge",
          difficulty: "Moderate",
          difficultyLabel: "Moderate",
        },
        {
          title: "Pointe de la Terrasse",
          description: "2-hour hike from the refuge",
          difficulty: "Moderate",
          difficultyLabel: "Moderate",
        },
        {
          title: "Cheval Blanc",
          description: "5-hour hike from the refuge via Col de la Terrasse",
          difficulty: "Difficult",
          difficultyLabel: "Difficult",
        },
        {
          title: "Vieil Emosson Lake",
          description: "Panoramic hike to the lake",
          difficulty: "Easy",
          difficultyLabel: "Easy",
        },
        {
          title: "Dinosaur tracks",
          description: "2.5 hours from the refuge, near Col de la Terrasse",
          difficulty: "Moderate",
          difficultyLabel: "Moderate",
        },
        {
          title: "Le Buet (3096m)",
          description: "Highest peak of the Aiguilles Rouges",
          difficulty: "Difficult",
          difficultyLabel: "Difficult",
        },
      ],
    },
    multiDayHikes: {
      title: "Multi-day tours",
      items: [
        {
          title: "Tour du Mont-Blanc",
          description: "Stage of the famous TMB circuit",
        },
        {
          title: "Aiguilles Rouges Tour",
          description: "Circuit through the Aiguilles Rouges massif",
        },
        {
          title: "Mont Ruan Tour",
          description: "Multi-day hike around Mont Ruan",
        },
        {
          title: "Trient Valley Tour",
          description: "Discovery circuit of the Trient Valley",
        },
      ],
    },
  },
  activities: {
    title: "Our Activities",
    subtitle: "Explore the mountains in all their forms",
    hiking: {
      title: "Hiking",
      description: "Explore marked trails and discover breathtaking panoramas",
      season: "Summer",
    },
    alpinism: {
      title: "Mountaineering",
      description:
        "Take on the challenge of summits with our experienced guides",
      season: "Summer",
    },
    skiing: {
      title: "Ski Touring",
      description: "Explore pristine slopes safely",
      season: "Winter",
    },
    wildlife: {
      title: "Wildlife Watching",
      description: "Discover rich Alpine biodiversity",
      season: "All seasons",
    },
  },
  quickBooking: {
    title: "Availability",
    guest: "Guest",
    guests: "Guests",
    check: "Check availability",
    dates: "Dates",
  },
};

export default landing;
