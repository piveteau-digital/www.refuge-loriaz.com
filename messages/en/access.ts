import { Car, Train, Mountain } from "lucide-react";  

const access = {  
    title: "How to Get Here?",  
    message: "All the information to access Refuge de Loriaz",  
    ways: [  
        {  
            icon: Car,  
            title: "By car",  
            description: "From Chamonix, take the D1506 towards Vallorcine. Parking at Col des Montets.",  
            details: [  
                "Free parking at Col des Montets",  
                "45 minutes from Chamonix",  
                "1h30 from Geneva"  
            ]  
        },  
        {  
            icon: Train,  
            title: "By train",  
            description: "Vallorcine train station, then shuttle or taxi to the trailhead.",  
            details: [  
                "Regional train from Chamonix or Martigny",  
                "Shuttle service during season",  
                "Taxis available by reservation"  
            ]  
        },  
        {  
            icon: Mountain,  
            title: "On foot",  
            description: "2-hour walk from Col des Montets via marked trail.",  
            details: [  
                "Elevation gain: 700m",  
                "Difficulty: moderate",  
                "Trail markers: yellow"  
            ]  
        }  
    ],
    notice: {  
                title: "Important Information",  
                points: [  
                    "Bring good hiking boots",  
                    "Check weather conditions before departure",  
                    "Bring water and snacks",  
                    "The refuge is not accessible by car",  
                    "In winter, appropriate equipment required"  
                ]  
            }  
}  

export default access;  