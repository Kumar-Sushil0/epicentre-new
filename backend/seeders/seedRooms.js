const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Room = require('../models/Room');
const connectDB = require('../config/database');

dotenv.config();

const rooms = [
  {
    name: "Private Room",
    description: "Spacious private accommodation with modern amenities and serene views. Perfect for those seeking solitude and comfort.",
    category: "private",
    price: 240,
    priceDisplay: "$240 / night",
    capacity: 2,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYw7zjjT1NTlSOYdFEp7-uHq0qYu0sfT6aUZMNM2ORSddAkOWotjiQuOXDlF61wyE24VSml-mENINPvgit4PMfWpZeH50NPc447sj25Lb9x3TaeBlPSU7wzYuj_9FCg7AibVjCYClPjUH2RnhsG5KEnMzj-HCgJ18Ml3AHQNFqX4nT-CvUDLtna6318BHSz60gSYsF_rolGCK_gpSLX0f4X7YWlq7PTgefwlFaLqlmddEb47Kk1ikXrmPgfcWjrQbX7yn5wzA--zcc"
    ],
    amenities: ["Private bathroom", "Queen bed", "Desk", "Natural light", "Climate control"],
    availability: true,
    totalRooms: 8,
    features: ["Quiet zone", "Garden view", "Reading nook"]
  },
  {
    name: "Complete Darkness",
    description: "Experience total sensory deprivation in our specially designed dark rooms. A unique opportunity for deep introspection.",
    category: "dark",
    price: 200,
    priceDisplay: "$200 / night",
    capacity: 1,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYw7zjjT1NTlSOYdFEp7-uHq0qYu0sfT6aUZMNM2ORSddAkOWotjiQuOXDlF61wyE24VSml-mENINPvgit4PMfWpZeH50NPc447sj25Lb9x3TaeBlPSU7wzYuj_9FCg7AibVjCYClPjUH2RnhsG5KEnMzj-HCgJ18Ml3AHQNFqX4nT-CvUDLtna6318BHSz60gSYsF_rolGCK_gpSLX0f4X7YWlq7PTgefwlFaLqlmddEb47Kk1ikXrmPgfcWjrQbX7yn5wzA--zcc"
    ],
    amenities: ["Soundproofing", "Complete darkness", "Safety features", "Comfortable bedding"],
    availability: true,
    totalRooms: 3,
    features: ["Sensory deprivation", "Meditation space", "Unique experience"]
  },
  {
    name: "Shared Dorm",
    description: "Comfortable shared accommodation for those who appreciate community and connection. Clean, safe, and welcoming.",
    category: "shared",
    price: 85,
    priceDisplay: "$85 / night",
    capacity: 6,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAd0MrUgxtI24ctYnNVK7t_0ipeTTqmWsJCLm5cpM9SR9eaqccitEqKNUHpiTcRy5_Reud0UU-OZvZFRwaKjCVFUxCCcr5x80ezOMsIk6ZYNAp5-rcQc65w_rIijqQ2xI_DTUrmhpSLXFkH-PJ7tC7F1e1CzGWzy00PXwmWLXC-UqJ9bg6TQfqN1eqg1OkF_v17JlAL4MB-EajLCUR26TuPjjyYiFzsiW8GD6zQrVwkgD66Kefyszm0kHtCfGkNkqLkrYKMViUchwie"
    ],
    amenities: ["Bunk beds", "Shared bathroom", "Lockers", "Common area", "Reading lights"],
    availability: true,
    totalRooms: 4,
    features: ["Community atmosphere", "Budget-friendly", "Social space"]
  },
  {
    name: "Minimalist Tents",
    description: "Sleep under the stars in our comfortable minimalist tents. Connect with nature while maintaining comfort.",
    category: "tent",
    price: 120,
    priceDisplay: "$120 / night",
    capacity: 2,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATOA-7cEFkRwrPfO1Yi_GsWajtQm9kjP7vPcdoMkklExVYKXq1iHwHSN46TT9UzGXZ2GSvZNBTB1p-eMuuUvXuyuTueNOFBENS8jqs4my9pGxB5vcyr7x9voKTIRePCWmgmZr5a4WBdtkSTU9GmvHrQnQEscuZ9JMvgYXNAi22rrvPBBd93C8N_mao7s6WAkTydpuvYyx_ygEtCYiiCq2O0dMsBGO3LlMAosUfSCTq_BUAbUojIr8PTfDo-3Pec-w-I7ddy4UoeU12"
    ],
    amenities: ["Quality bedding", "Lanterns", "Outdoor seating", "Shared facilities"],
    availability: true,
    totalRooms: 10,
    features: ["Nature immersion", "Stargazing", "Fresh air"]
  },
  {
    name: "Community Hall",
    description: "Large open space for group stays or events. Simple, functional, and affordable accommodation.",
    category: "community",
    price: 50,
    priceDisplay: "$50 / night",
    capacity: 20,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0W9yJw8axjF-kN3nS3rx2wcnSyZDgPPr4N6-dQHkur_vVcYF7VJDVWzdTVlXQINnv8OPubPGsP93vzoZSB1siyf5Dfyl4VbjsiDfThEFh4mCXDJb2-Q3XzsQ-yKSgt_d9eFJgNilz-sF-0wpPmMdd_1eUEJmyZqiPXLW-gBggW1zAzs7-S96DxPtCF5pg4bxnbJGHsTOiNtH_b3S1jWkXeIxnAOQavLlixwoNfkJe-ZzbvSK4qZMGzvYZFscIPgABiVcKzflo9wUo"
    ],
    amenities: ["Open floor plan", "Shared facilities", "Kitchen access", "Group seating"],
    availability: true,
    totalRooms: 1,
    features: ["Group accommodation", "Event space", "Budget option"]
  }
];

const seedRooms = async () => {
  try {
    await connectDB();
    
    await Room.deleteMany();
    console.log('Rooms collection cleared');
    
    await Room.insertMany(rooms);
    console.log(`${rooms.length} rooms seeded successfully`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding rooms:', error);
    process.exit(1);
  }
};

seedRooms();
