const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Activity = require('../models/Activity');
const connectDB = require('../config/database');

dotenv.config();

const activities = [
  // EXPERIENCES
  {
    title: "Boat Safari",
    description: "Guided movement through water alongside bird life. Experience: Observation, rhythm, quiet.",
    category: "experience",
    icon: "sailing",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb"],
    price: 12,
    priceDisplay: "$12 / session",
    duration: { value: 2, unit: "hours" },
    capacity: { min: 2, max: 5 },
    userCount: "2-5",
    availability: true,
    difficulty: "easy"
  },
  {
    title: "Boat Night Safari",
    description: "Float slowly under open sky. Experience: Stillness, orientation, vastness.",
    category: "experience",
    icon: "sailing",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35"],
    price: 12,
    priceDisplay: "$12 / session",
    duration: { value: 2, unit: "hours" },
    capacity: { min: 2, max: 5 },
    userCount: "2-5",
    availability: true,
    difficulty: "easy"
  },
  {
    title: "Grassland Safari",
    description: "Moving through open terrain near wildlife. Experience: Openness, scale, unhurried time.",
    category: "experience",
    icon: "landscape",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS"],
    price: 60,
    priceDisplay: "$60 / session",
    duration: { value: 3, unit: "hours" },
    capacity: { min: 2, max: 5 },
    userCount: "2-5",
    availability: true,
    difficulty: "moderate"
  },
  {
    title: "Sound Immersion",
    description: "Sound held as an environment. Experience: Resonance, receptivity, release.",
    category: "experience",
    icon: "music_note",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb"],
    price: 120,
    priceDisplay: "$120 / session",
    duration: { value: 90, unit: "minutes" },
    capacity: { min: 2, max: 20 },
    userCount: "2-20",
    availability: true,
    difficulty: "easy"
  },
  // WELLNESS
  {
    title: "Self-Paced Physical Training",
    description: "Quiet movement without mirrors or metrics. Strength and exertion on your own terms.",
    category: "wellness",
    subCategory: "Self-Paced",
    icon: "fitness_center",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T"],
    price: 50,
    priceDisplay: "$50 / session",
    duration: { value: 60, unit: "minutes" },
    capacity: { min: 1, max: 10 },
    availability: true,
    difficulty: "moderate"
  },
  {
    title: "Outdoor Kayaking & Cycling",
    description: "Movement through land and water. No routes, no destinations, no urgency.",
    category: "wellness",
    subCategory: "Outdoor",
    icon: "kayaking",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBs-hb7o4jNTYxKGveJrfp7t9OjuheyFrl6975031WiGmob3tmuoKzo9e2Gi5gfjM2WmcObIeJRsPLgmRU5lBfL7W78uunGYn_oc94_vQrdsZ1BjmCDRi9ZxSTde7PluowM0B9IEifnGvy1rLS3ysNmjoRiMZS8YRu_xL2Xp4IpulOke15P3reMJbLN2dYFGAbVe9q8f6FFx6X_KZoJ7O_EJvbTRGc45bGfCOWnlsHH2_6uy6yvEum6rEOuMrf4jW3NfWk49g1EY9L5"],
    price: 75,
    priceDisplay: "$75 / session",
    duration: { value: 2, unit: "hours" },
    capacity: { min: 1, max: 8 },
    availability: true,
    difficulty: "moderate"
  },
  {
    title: "Yoga & Meditation",
    description: "Low-light spaces for stillness and breath. Self-led, informal, and unstructured.",
    category: "wellness",
    subCategory: "Mindfulness",
    icon: "self_improvement",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBpZOvr0qjgBHYFzGTiTaPYUUfxtRTTng4Mwyz1Y1DWNZJ_1bIkfqJ3exaDYGFmGQH0kEFlJ--2x9K7P2_gWe-POWZpboure-tmEfUlOPBXEahy3y3fJM4Yf1VShZ5WCMnIOQRgohRnU1MHh9dBz_RMPXnR6lgAzzpCeWWqxfY1jj5rO29e1v-so6AiyI_-y3kx2qdK_n4hThx3ugUPOZty1UBFhhmRzm7Lds78A7DSjpxT19FH5wa-UqsVvRcWUBB5wtZ4-NGFFouA"],
    price: 40,
    priceDisplay: "$40 / session",
    duration: { value: 60, unit: "minutes" },
    capacity: { min: 1, max: 15 },
    availability: true,
    difficulty: "easy"
  },
  // SOLITUDE
  {
    title: "Angling",
    description: "Repetition and still attention. A meditative practice of patience and presence by the water's edge.",
    category: "solitude",
    icon: "arrow_forward",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd"],
    price: 35,
    priceDisplay: "$35 / session",
    duration: { value: 3, unit: "hours" },
    capacity: { min: 1, max: 4 },
    availability: true,
    difficulty: "easy"
  },
  {
    title: "Bird Watching",
    description: "Looking without pursuit. Soft observation of local wildlife in their natural habitat.",
    category: "solitude",
    icon: "map",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM"],
    price: 30,
    priceDisplay: "$30 / session",
    duration: { value: 2, unit: "hours" },
    capacity: { min: 1, max: 6 },
    availability: true,
    difficulty: "easy"
  },
  {
    title: "Star Gazing",
    description: "Observation without urgency. Reconnecting with the cosmos under our clear, protected night skies.",
    category: "solitude",
    icon: "star",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAfUEFkuPsDcRrwomNpV_HwfuHf9O-A4L4U6MKLljPvLYJJwCUlXXxY2mjgE-er6h_jG_PklBuvKzJnEWMoUJTBEFnfYdbWj0UoS3cNXdzuBn3c88huWQsb9L1tETDwGKjEr-JXTFe2AZ17ij8blc4Ins9QdK95sIdIr8UwQdYwnWrcQj1lZakOp8Ym0eJLoProiY8a7Mgr0ih-iysVaPtnEnXgmXEjcYNY-jgM_8kZIOdBMKHtMR5R46CeAnA6rA3Z00VVJIJkJdLa"],
    price: 40,
    priceDisplay: "$40 / session",
    duration: { value: 2, unit: "hours" },
    capacity: { min: 1, max: 10 },
    availability: true,
    difficulty: "easy"
  },
  // EXPRESSION
  {
    title: "Painting in Silence",
    description: "Bringing color into form without instruction. Experience: Presence, intuition, flow.",
    category: "expression",
    icon: "palette",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS"],
    price: 70,
    priceDisplay: "$70 / session",
    duration: { value: 2, unit: "hours" },
    capacity: { min: 1, max: 8 },
    availability: true,
    difficulty: "easy"
  },
  {
    title: "Pottery",
    description: "Clay shaped under quiet guidance. Experience: Weight, surrender, patience.",
    category: "expression",
    icon: "handyman",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS"],
    price: 60,
    priceDisplay: "$60 / session",
    duration: { value: 90, unit: "minutes" },
    capacity: { min: 1, max: 5 },
    availability: true,
    difficulty: "moderate"
  }
];

const seedActivities = async () => {
  try {
    await connectDB();
    
    await Activity.deleteMany();
    console.log('Activities collection cleared');
    
    await Activity.insertMany(activities);
    console.log(`${activities.length} activities seeded successfully`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding activities:', error);
    process.exit(1);
  }
};

seedActivities();
