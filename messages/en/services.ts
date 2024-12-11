import { Bed, Coffee, Compass, Mountain, Package, Utensils } from "lucide-react";  

const services = {  
    title: "Our Services",  
    message: "Discover everything that Refuge de Loriaz can offer you for an unforgettable stay",  
    services: [  
        {  
            title: "Half-Board",  
            description: "Enjoy an all-inclusive stay with dinner and breakfast",  
            icon: Package,  
            details: [  
                "Traditional mountain dinner",  
                "Night in dormitory or private room",  
                "Hearty continental breakfast"  
            ]  
        },  
        {  
            title: "Breakfast",  
            description: "Start your day with an energizing breakfast",  
            icon: Coffee,  
            details: [  
                "Fresh bread and pastries",  
                "Homemade jams",  
                "Hot beverages",  
                "Cereals and fruits"  
            ]  
        },  
        {  
            title: "Dinner",  
            description: "Savor traditional mountain cuisine",  
            icon: Utensils,  
            details: [  
                "Savoyard specialties",  
                "Local products",  
                "Vegetarian menu available",  
                "Savoie wines"  
            ]  
        },  
        {  
            title: "Accommodation",  
            description: "A comfortable refuge for your high-altitude stay",  
            icon: Bed,  
            details: [  
                "Shared dormitories",  
                "Private rooms",  
                "Hot showers",  
                "Secure lockers"  
            ]  
        },  
        {  
            title: "Guided Hikes",  
            description: "Discover the most beautiful trails with our guides",  
            icon: Compass,  
            details: [  
                "Trails suitable for all levels",  
                "Professional guides",  
                "Equipment provided",  
                "Groups of 4 to 8 people"  
            ]  
        },  
        {  
            title: "Additional Services",  
            description: "Services to enhance your experience",  
            icon: Mountain,  
            details: [  
                "Packed lunches",  
                "Equipment rental",  
                "Photo sessions",  
                "Alpine training"  
            ]  
        }  
    ]  
}  

export default services;  