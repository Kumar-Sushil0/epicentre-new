"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

// --- Types ---
type Category = "stay" | "solitude" | "expression" | "wellness" | "activities" | "residency" | "dining" | "booking";

interface BookingItem {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: number;
  image: string;
  priceDisplay: string;
}

// --- Data ---
const BOOKING_ITEMS: BookingItem[] = [
  // BOOKING OPTIONS
  {
    id: "silent-club-tour",
    category: "booking",
    name: "The Silent Club Tour",
    description: "",
    price: 0,
    priceDisplay: "Free",
    image: "/logo.png",
  },
  {
    id: "half-place-booking",
    category: "booking", 
    name: "Half Place Booking",
    description: "",
    price: 2500,
    priceDisplay: "$2,500 / day",
    image: "/moat.png",
  },
  {
    id: "full-place-booking",
    category: "booking",
    name: "Full Place Booking",
    description: "",
    price: 5000,
    priceDisplay: "$5,000 / day", 
    image: "/moat2.png",
  },
  {
    id: "custom-retreat-package",
    category: "booking",
    name: "Custom Retreat Package",
    description: "",
    price: 1200,
    priceDisplay: "$1,200 / person",
    image: "/moat3.png",
  },
  // The Silent Club Tour
  {
    id: "free-tour",
    category: "activities",
    name: "The Silent Club Tour",
    description: "",
    price: 0,
    priceDisplay: "Free",
    image: "/logo.png",
  },
  // STAY
  {
    id: "private-room",
    category: "stay",
    name: "Private Room",
    description: "",
    price: 240,
    priceDisplay: "$240 / night",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYw7zjjT1NTlSOYdFEp7-uHq0qYu0sfT6aUZMNM2ORSddAkOWotjiQuOXDlF61wyE24VSml-mENINPvgit4PMfWpZeH50NPc447sj25Lb9x3TaeBlPSU7wzYuj_9FCg7AibVjCYClPjUH2RnhsG5KEnMzj-HCgJ18Ml3AHQNFqX4nT-CvUDLtna6318BHSz60gSYsF_rolGCK_gpSLX0f4X7YWlq7PTgefwlFaLqlmddEb47Kk1ikXrmPgfcWjrQbX7yn5wzA--zcc",
  },
  {
    id: "dark-room",
    category: "stay",
    name: "Complete Darkness",
    description: "",
    price: 200,
    priceDisplay: "$200 / night",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYw7zjjT1NTlSOYdFEp7-uHq0qYu0sfT6aUZMNM2ORSddAkOWotjiQuOXDlF61wyE24VSml-mENINPvgit4PMfWpZeH50NPc447sj25Lb9x3TaeBlPSU7wzYuj_9FCg7AibVjCYClPjUH2RnhsG5KEnMzj-HCgJ18Ml3AHQNFqX4nT-CvUDLtna6318BHSz60gSYsF_rolGCK_gpSLX0f4X7YWlq7PTgefwlFaLqlmddEb47Kk1ikXrmPgfcWjrQbX7yn5wzA--zcc",
  },
  {
    id: "shared-dorm",
    category: "stay",
    name: "Shared Dorm",
    description: "",
    price: 85,
    priceDisplay: "$85 / night",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd0MrUgxtI24ctYnNVK7t_0ipeTTqmWsJCLm5cpM9SR9eaqccitEqKNUHpiTcRy5_Reud0UU-OZvZFRwaKjCVFUxCCcr5x80ezOMsIk6ZYNAp5-rcQc65w_rIijqQ2xI_DTUrmhpSLXFkH-PJ7tC7F1e1CzGWzy00PXwmWLXC-UqJ9bg6TQfqN1eqg1OkF_v17JlAL4MB-EajLCUR26TuPjjyYiFzsiW8GD6zQrVwkgD66Kefyszm0kHtCfGkNkqLkrYKMViUchwie",
  },
  {
    id: "minimalist-tent",
    category: "stay",
    name: "Minimalist Tents",
    description: "",
    price: 120,
    priceDisplay: "$120 / night",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATOA-7cEFkRwrPfO1Yi_GsWajtQm9kjP7vPcdoMkklExVYKXq1iHwHSN46TT9UzGXZ2GSvZNBTB1p-eMuuUvXuyuTueNOFBENS8jqs4my9pGxB5vcyr7x9voKTIRePCWmgmZr5a4WBdtkSTU9GmvHrQnQEscuZ9JMvgYXNAi22rrvPBBd93C8N_mao7s6WAkTydpuvYyx_ygEtCYiiCq2O0dMsBGO3LlMAosUfSCTq_BUAbUojIr8PTfDo-3Pec-w-I7ddy4UoeU12",
  },
  {
    id: "community-hall",
    category: "stay",
    name: "Community Hall",
    description: "",
    price: 50,
    priceDisplay: "$50 / night",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0W9yJw8axjF-kN3nS3rx2wcnSyZDgPPr4N6-dQHkur_vVcYF7VJDVWzdTVlXQINnv8OPubPGsP93vzoZSB1siyf5Dfyl4VbjsiDfThEFh4mCXDJb2-Q3XzsQ-yKSgt_d9eFJgNilz-sF-0wpPmMdd_1eUEJmyZqiPXLW-gBggW1zAzs7-S96DxPtCF5pg4bxnbJGHsTOiNtH_b3S1jWkXeIxnAOQavLlixwoNfkJe-ZzbvSK4qZMGzvYZFscIPgABiVcKzflo9wUo",
  },
  // WELLNESS
  {
    id: "physical-training",
    category: "wellness",
    name: "Self-Paced Physical Training",
    description: "",
    price: 50,
    priceDisplay: "$50 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
  },
  {
    id: "kayaking-cycling",
    category: "wellness",
    name: "Outdoor Kayaking & Cycling",
    description: "",
    price: 75,
    priceDisplay: "$75 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs-hb7o4jNTYxKGveJrfp7t9OjuheyFrl6975031WiGmob3tmuoKzo9e2Gi5gfjM2WmcObIeJRsPLgmRU5lBfL7W78uunGYn_oc94_vQrdsZ1BjmCDRi9ZxSTde7PluowM0B9IEifnGvy1rLS3ysNmjoRiMZS8YRu_xL2Xp4IpulOke15P3reMJbLN2dYFGAbVe9q8f6FFx6X_KZoJ7O_EJvbTRGc45bGfCOWnlsHH2_6uy6yvEum6rEOuMrf4jW3NfWk49g1EY9L5",
  },
  {
    id: "yoga-meditation",
    category: "wellness",
    name: "Yoga & Meditation",
    description: "",
    price: 40,
    priceDisplay: "$40 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpZOvr0qjgBHYFzGTiTaPYUUfxtRTTng4Mwyz1Y1DWNZJ_1bIkfqJ3exaDYGFmGQH0kEFlJ--2x9K7P2_gWe-POWZpboure-tmEfUlOPBXEahy3y3fJM4Yf1VShZ5WCMnIOQRgohRnU1MHh9dBz_RMPXnR6lgAzzpCeWWqxfY1jj5rO29e1v-so6AiyI_-y3kx2qdK_n4hThx3ugUPOZty1UBFhhmRzm7Lds78A7DSjpxT19FH5wa-UqsVvRcWUBB5wtZ4-NGFFouA",
  },
  {
    id: "board-games",
    category: "wellness",
    name: "Leisure & Board Games",
    description: "",
    price: 20,
    priceDisplay: "$20 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpLgNIXCBBA7cPpXwO9csLOqZrHsSadnHbb7Q-s24LEXvnrtHwATVxM-rgQthaw7HXT23Wv2Vj4M0QHf7vMXlnFxVR_3527JHh44DEYoHmp9RAiTjj5UKVQsSpgDXnPAtpKFwBRYkq1brPYGQAyalnn8lw1Ew3ezLh9zoRAIiS58I2gC8YpIP3e3Vx-QSnJvTJzmVneD0Kah0f9YnTcUovk_mk9mNLTdZ2PEgiloIzz1gOrdmvtvnxrXR2idxdg2P4IVZ0jM6IqpKT",
  },
  {
    id: "pet-companionship",
    category: "wellness",
    name: "Companionship & Pet Friendly",
    description: "",
    price: 30,
    priceDisplay: "$30 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2Tpwiek3PonA5i87JcVQ0JysCYWwZeYKjPR00nuxAGlqkrb3Oc2Y76BPK5eoukMAJQpiiOpUXSye5KD7z0KrMUhR-VAei7QNfxuEafVCYyoPl2zI3KEil0UkwjxK_l6FhAUKIbZzxXgqDkWh-X6LW5Zh9V0fgppjnWfzsEE9CipCUk-lGo482Uh8fF2rqUczpWgg0hGFp7hIyQClItjfCzoXHDeU1kPzuo9ZBkjj7S1RucpxI27X9fAKm_lGvr_ZxX4o8cU_In7QQ",
  },
  {
    id: "farm-day",
    category: "wellness",
    name: "Grounding, A Day at a Farm",
    description: "",
    price: 60,
    priceDisplay: "$60 / day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWhITh0xZYsAlerv6-wQYlJ2lGDb2fA_wBAeP-_GMQIbFan5_10uwImDJBEYxv89qG40jiKmPooOPAuK9VNy0byJTjkmF4qhQWNpG_rIZyaiWljPgYyplu6QhWi4ITpQrmDn--uGE-0y86G3XGlnTx0Szqsk_LMFKI1PoC37grwx7PFmwsXeweFG5cInow3VbwMtmjiHmOpbL1EBaeG9-Ix3LzkGgpXcwBPNvDZuavErPWW1u3mWa2a3qiqIcBhHnodWXLlg5povz0",
  },
  // ACTIVITIES (EXPERIENCES)
  {
    id: "boat-safari",
    category: "activities",
    name: "Boat Safari",
    description: "",
    price: 12,
    priceDisplay: "$12 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
  },
  {
    id: "boat-night-safari",
    category: "activities",
    name: "Boat Night Safari",
    description: "",
    price: 12,
    priceDisplay: "$12 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
  },
  {
    id: "grassland-safari",
    category: "activities",
    name: "Grassland Safari",
    description: "",
    price: 60,
    priceDisplay: "$60 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
  },
  {
    id: "media-viewing",
    category: "activities",
    name: "Media Viewing",
    description: "",
    price: 24,
    priceDisplay: "$24 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp-yDz8bDOHDgf9xJbj0GvUszs0lHVc4U6p0TXmQLCdZ-dwhnDK6eTIt0Fqm27Qt4eJcpRYgZmPH5c2ok07pIZKm6EFwIWV2HAxf7PPO-nB4ILYwDvkk1P9LlQAzuHl9LHd8EZJz2i_O61QS8QyDfcRjadK3wfoZi1zAnSJMVmkFyGBWO4635QStA8dET3_wdgeBgosK141lBGk7iK8ELekhk349aDocnAmmMG1WCdYKBantBSw7VSeQfYK36scMVJCqV7mmfjDzkL",
  },
  {
    id: "lake-camping",
    category: "activities",
    name: "Lake Camping",
    description: "",
    price: 24,
    priceDisplay: "$24 / night",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
  },
  
  {
    id: "sound-immersion",
    category: "activities",
    name: "Sound Immersion",
    description: "",
    price: 120,
    priceDisplay: "$120 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
  },
  {
    id: "painting",
    category: "activities",
    name: "Painting",
    description: "",
    price: 6,
    priceDisplay: "$6 / canvas",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
  },
  {
    id: "calligraphy",
    category: "activities",
    name: "Calligraphy",
    description: "",
    price: 60,
    priceDisplay: "$60 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
  },
  {
    id: "coffee-preparation",
    category: "activities",
    name: "Coffee Preparation",
    description: "",
    price: 60,
    priceDisplay: "$60 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
  },
  {
    id: "pottery",
    category: "activities",
    name: "Pottery",
    description: "",
    price: 60,
    priceDisplay: "$60 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
  },
  {
    id: "rock-balancing",
    category: "activities",
    name: "Rock Balancing",
    description: "",
    price: 60,
    priceDisplay: "$60 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
  },
  // SOLITUDE
  {
    id: "angling",
    category: "solitude",
    name: "Angling",
    description: "",
    price: 35,
    priceDisplay: "$35 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd",
  },
  {
    id: "bird-watching",
    category: "solitude",
    name: "Bird Watching",
    description: "",
    price: 30,
    priceDisplay: "$30 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM",
  },
  {
    id: "star-gazing",
    category: "solitude",
    name: "Star Gazing",
    description: "",
    price: 40,
    priceDisplay: "$40 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfUEFkuPsDcRrwomNpV_HwfuHf9O-A4L4U6MKLljPvLYJJwCUlXXxY2mjgE-er6h_jG_PklBuvKzJnEWMoUJTBEFnfYdbWj0UoS3cNXdzuBn3c88huWQsb9L1tETDwGKjEr-JXTFe2AZ17ij8blc4Ins9QdK95sIdIr8UwQdYwnWrcQj1lZakOp8Ym0eJLoProiY8a7Mgr0ih-iysVaPtnEnXgmXEjcYNY-jgM_8kZIOdBMKHtMR5R46CeAnA6rA3Z00VVJIJkJdLa",
  },
  {
    id: "forest-walks",
    category: "solitude",
    name: "Forest Walks",
    description: "",
    price: 25,
    priceDisplay: "$25 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS-7ETT0Y8bS144cz6202eGntk2MphbdlmHEt8WqWvWfiBzm80K29cumWX7SRpzNPBWVx2KCkjnZWjF6sj9NpVOCPtk688LcjR8EWa7w8VCQYsrQGbylEBhILeQ9KeZORxLzYKw_VlTgyoibONM9Epoo4FkKSfhEknTxMEh1F1TcoYX9LQ0WLW-IiFj1WOAwKKbs28Kmd6eLeVvQfDyupUltNoBBnP8j96m928ssFCgnjjZBtATZI7UDeYYqKukLbDQoQ68yqdfCCK",
  },
  {
    id: "triathlon-training",
    category: "solitude",
    name: "Triathlon Training",
    description: "",
    price: 80,
    priceDisplay: "$80 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS-7ETT0Y8bS144cz6202eGntk2MphbdlmHEt8WqWvWfiBzm80K29cumWX7SRpzNPBWVx2KCkjnZWjF6sj9NpVOCPtk688LcjR8EWa7w8VCQYsrQGbylEBhILeQ9KeZORxLzYKw_VlTgyoibONM9Epoo4FkKSfhEknTxMEh1F1TcoYX9LQ0WLW-IiFj1WOAwKKbs28Kmd6eLeVvQfDyupUltNoBBnP8j96m928ssFCgnjjZBtATZI7UDeYYqKukLbDQoQ68yqdfCCK",
  },
  {
    id: "awareness-of-breath",
    category: "solitude",
    name: "Awareness of Breath",
    description: "",
    price: 20,
    priceDisplay: "$20 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd",
  },
  {
    id: "fascia-system",
    category: "solitude",
    name: "The Fascia System",
    description: "",
    price: 55,
    priceDisplay: "$55 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM",
  },
  // EXPRESSION
  {
    id: "clay-modeling",
    category: "expression",
    name: "Clay & Earth Workshop",
    description: "",
    price: 55,
    priceDisplay: "$55 / session",
    image: "/noise2.png",
  },
  {
    id: "painting-silence",
    category: "expression",
    name: "Painting in Silence",
    description: "",
    price: 70,
    priceDisplay: "$70 / session",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgtoMMPZz88PXkDYrxvHVR6uCSwqNqDnob4jaoXODBFLGl2UsdhfJ4s__nqrXImhLMN4QUasNvlWzk9Yo_824P4d9lIvSn1WbjbbWb28HQs30tbEHbQGS_MuR1epNrsedDPULlE6AaZ45m5He654JaT49FOV-G_q2QjNTxPSVrimly9bjXTZ01TiOoTicoKoqMBOqEzGfSDPcspcYTtn2f9nvsAvItSPnGcZhvCVsFO9kjJPBy1OdqHj_PbY0RZq_5hkBecKLlEATa",
  },
  {
    id: "voice-release",
    category: "expression",
    name: "Primal Voice Release",
    description: "",
    price: 45,
    priceDisplay: "$45 / session",
    image: "/noise.png",
  },
  // RESIDENCY
  {
    id: "writers-residency",
    category: "residency",
    name: "Writer's Residency",
    description: "",
    price: 800,
    priceDisplay: "$800 / week",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "artist-residency",
    category: "residency",
    name: "Artist's Studio",
    description: "",
    price: 850,
    priceDisplay: "$850 / week",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80",
  },
  // DINING
  {
    id: "satvik-meal",
    category: "dining",
    name: "Satvik Home Meals",
    description: "",
    price: 25,
    priceDisplay: "$25 / day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7EqkXqQPU7fE4pLFU_Hk927TUqj83DfbTfUvPIihY2voNQvmPzkgFFvUowSJV8BeUmi3AK6_9d9MQPQBC_OXh3eBg9xIp_jNbcq4P1uQYXAH4udgKWxtFyRuenpPXcorX848v2tHHPWWYfK16iMhYDcmb9iw-JZ2WzgiEm9s4eNuGAgeRY8AMsVHC_k5fLfLYry5CbHdiz9uOsXZQFafe7IcPz2Ty17dsxEdLhomR6gW_ljYA7vJCFpBg4iyLqVjMKXTFWCffegD2",
  },
  {
    id: "fresh-juice-pass",
    category: "dining",
    name: "Fresh Juice Pass",
    description: "",
    price: 15,
    priceDisplay: "$15 / day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPPRi1KA1SSwhk_HwPBfDwwsAERrk2PJlQEBBT-t3vsDceOPFxRCmCS2hOSB75G50kN4biPj2O6wed6Y5WHy9QYxwfH8SnuPsoH85EkeBG2eWtd61u1kxzb7Hvo1aRqQz8Hw0fhpybRMYRkBpd0hO_yyjc9Cd8p7GUmT-FXalpznzlPS8i_pqPTP-dRL1gJP5yqyABEWDkhy7V7DJxmjQTkdmmZh4DIyIpX7FcKG1hcb2P7A7ZA6abK6NzUJeiJWEJAKb5pwvQZMa5",
  },
  {
    id: "weekend-bbq",
    category: "dining",
    name: "Weekend Barbeque",
    description: "",
    price: 40,
    priceDisplay: "$40 / event",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC72-qeY2eEUj-PVITTUo2cNBi448iUqzdHsoEipULmOX22vormapus2Ny-vkyznBYe1cCZEDjbvLIrW3GuSkIg8UG6cSQjorFd6SxJCSZjnFSUZunRVmsTumGnkttyCeI4bOc-hMIgYBiaqmhKgUJg4c3nVIhqa5238Nu7Cy11M88SVYJR3uvYHZhULleRmsgdg5DSXMHj_jRUCrX6fP_8TMxU7wgAkfOOrz1iU2VMvmW0E8_9TXF6oBAkhRYNTypjcCZ0XHF-AP5d",
  },
];

type TabId = "booking" | "stay" | "dining" | "experiences";

export default function BookingsPage() {
  const [cart, setCart] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState<TabId>("booking");
  const [activeExperienceTab, setActiveExperienceTab] = useState<"activities" | "solitude" | "expression" | "residency">("activities");

  const isInCart = (id: string) => cart.includes(id);

  const getQuantity = (id: string) => quantities[id] || 1;

  const setQuantity = (id: string, quantity: number) => {
    setQuantities(prev => ({ ...prev, [id]: quantity }));
  };

  const toggleItem = (id: string) => {
    setCart((prev) => {
      if (prev.includes(id)) {
        // Remove from cart and reset quantity
        setQuantities(prevQty => {
          const newQty = { ...prevQty };
          delete newQty[id];
          return newQty;
        });
        return prev.filter((item) => item !== id);
      } else {
        // Add to cart with default quantity of 1
        setQuantities(prevQty => ({ ...prevQty, [id]: 1 }));
        return [...prev, id];
      }
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, id) => {
      const item = BOOKING_ITEMS.find((i) => i.id === id);
      const quantity = getQuantity(id);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const selectedItemsDetails = cart.map(id => BOOKING_ITEMS.find(i => i.id === id)).filter(Boolean) as BookingItem[];

  // Helper to render a list of items
  const renderItems = (items: BookingItem[]) => (
    <div className="space-y-0">
      {items.map((item) => {
        const isSelected = isInCart(item.id);
        const quantity = getQuantity(item.id);
        return (
          <div
            key={item.id}
            className={`group flex items-center p-4 border-b border-earth-800/30 last:border-0 hover:bg-earth-900/60 transition-all duration-200 relative overflow-hidden ${isSelected ? 'bg-earth-900/90 border-l-[3px] border-l-gold-500' : 'border-l-[3px] border-l-transparent'}`}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Title & Price */}
            <div className="flex-grow flex flex-col sm:flex-row sm:items-center justify-between min-w-0 mr-4 gap-1 sm:gap-4 relative z-10 pl-2">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  {isSelected && <span className="material-symbols-outlined text-gold-500 text-sm">check_circle</span>}
                  <h3 className={`text-base font-medium truncate transition-colors ${isSelected ? 'text-gold-500' : 'text-earth-100 group-hover:text-gold-200'}`}>{item.name}</h3>
                </div>
                {item.description && <p className="text-xs text-earth-400 truncate max-w-[200px] sm:max-w-xs">{item.description}</p>}
              </div>
              <span className={`text-sm font-mono whitespace-nowrap transition-colors ${isSelected ? 'text-gold-500 font-bold' : 'text-earth-400 group-hover:text-gold-400'}`}>{item.priceDisplay}</span>
            </div>

            {/* Quantity Dropdown (only show when selected) */}
            {isSelected && (
              <div className="relative z-10 mr-3">
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(item.id, parseInt(e.target.value))}
                  className="bg-earth-800 border border-earth-700 text-earth-100 text-sm rounded px-2 py-1 focus:outline-none focus:border-gold-500 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Action Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleItem(item.id);
              }}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shrink-0 relative z-10 ${isSelected
                ? "bg-gold-500 border-gold-500 text-earth-950 shadow-[0_0_15px_rgba(197,160,101,0.4)] scale-105"
                : "border-earth-700 text-earth-500 group-hover:border-gold-500 group-hover:text-gold-500 bg-earth-950/50 hover:bg-earth-900"
                }`}
            >
              <span className="material-symbols-outlined text-lg font-bold">
                {isSelected ? "remove" : "add"}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );

  const tabs = [
    { id: "booking" as TabId, label: "00. Booking", subtitle: "Choose your booking type" },
    { id: "stay" as TabId, label: "01. Stay", subtitle: "Select accommodation" },
    { id: "dining" as TabId, label: "02. Food", subtitle: "Nourishment plans" },
    { id: "experiences" as TabId, label: "03. Experiences", subtitle: "Curate your journey" },
  ];

  const experienceTabs = [
    { id: "activities" as const, label: "Activities" },
    { id: "solitude" as const, label: "Solitude" },
    { id: "expression" as const, label: "Expression" },
    { id: "residency" as const, label: "Residency" },
  ];

  return (
    <main className="min-h-screen bg-earth-950 text-earth-100 flex flex-col">
      <Header />

      <div className="flex-grow flex flex-col lg:flex-row-reverse relative">

        {/* RIGHT SIDEBAR (Summary) */}
        <aside className="lg:w-[380px] lg:h-[calc(100vh-72px)] lg:sticky lg:top-[72px] bg-earth-900 border-b lg:border-b-0 lg:border-l border-earth-800 flex flex-col z-30 shadow-2xl shrink-0">
          <div className="p-6 border-b border-earth-800 bg-earth-900 z-10">
            <h2 className="text-xl font-serif text-gold-500 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Your Retreat</h2>
            <p className="text-earth-300/60 text-xs font-body">Review selected items.</p>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-3 max-h-[calc(100vh-72px-140px-100px)]" style={{ scrollbarWidth: 'thin', scrollbarColor: '#3d3d2e #1a1a14' }} data-lenis-prevent>
            {cart.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-earth-800/50 rounded-lg">
                <p className="text-earth-300/40 text-sm">No items selected.</p>
              </div>
            ) : (
              selectedItemsDetails.map((item) => {
                const quantity = getQuantity(item.id);
                return (
                <div key={item.id} className="group flex justify-between items-center bg-earth-950/50 border border-earth-800/50 rounded p-3 hover:border-gold-500/20 transition-all">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="relative w-8 h-8 rounded bg-earth-900 shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover opacity-80" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-earth-100 truncate">{item.name}</p>
                      <p className="text-xs text-earth-400">{item.category} {quantity > 1 && `× ${quantity}`}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gold-500">${item.price * quantity}</span>
                    <button onClick={() => toggleItem(item.id)} className="text-earth-500 hover:text-red-400 transition-colors">
                      <span className="material-symbols-outlined text-base">close</span>
                    </button>
                  </div>
                </div>
              )})
            )}
          </div>

          <div className="p-6 border-t border-earth-800 bg-earth-900 mt-auto">
            <div className="flex justify-between items-end mb-4">
              <span className="text-earth-300 text-sm">Total</span>
              <span className="text-2xl font-serif text-gold-500">${calculateTotal()}</span>
            </div>
            <button
              className="w-full bg-gold-500 text-earth-950 font-bold py-3.5 rounded hover:bg-gold-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-xs"
              disabled={cart.length === 0}
            >
              Proceed
            </button>
          </div>
        </aside>

        {/* LEFT CONTENT */}
        <div className="flex-grow bg-earth-950">
          <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">

            {/* HEADER SECTION: Title/Subtitle full width, then row with actions and booking form */}
            <div className="mb-4">
              <h1 className="text-3xl md:text-5xl text-earth-100 font-serif mb-4 w-full" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Design Your <span className="italic text-gold-500">Silence</span>
              </h1>
              <p className="text-earth-300/60 font-body text-sm max-w-xl leading-relaxed w-full">
                Build your schedule efficiently. Select what calls to you.
              </p>
            </div>
            <div className="mb-4 flex flex-col md:flex-row md:items-start md:gap-6 w-full">
              <div className="w-full">
                <BookingForm />
              </div>
            </div>

            {/* TABS */}
            <div className="border border-earth-800 rounded-lg bg-earth-900/20 overflow-hidden">
              {/* Tab Headers */}
              <div className="flex border-b border-earth-800 overflow-x-auto w-full" style={{ scrollbarWidth: 'thin' }}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 w-full px-6 py-4 text-left transition-all relative ${
                      activeTab === tab.id
                        ? 'bg-earth-900/60 text-gold-500'
                        : 'text-earth-300 hover:bg-earth-900/30 hover:text-earth-100'
                    }`}
                  >
                    <div className="text-sm font-serif" style={{ fontFamily: 'Outfit, sans-serif' }}>{tab.label}</div>
                    <div className="text-xs text-earth-400 mt-0.5">{tab.subtitle}</div>
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500" />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === "booking" && renderItems(BOOKING_ITEMS.filter(i => i.category === "booking"))}
                {activeTab === "stay" && renderItems(BOOKING_ITEMS.filter(i => i.category === "stay"))}
                {activeTab === "dining" && renderItems(BOOKING_ITEMS.filter(i => i.category === "dining"))}
                
                {activeTab === "experiences" && (
                  <div>
                    {/* Nested Experience Tabs */}
                    <div className="flex border-b border-earth-800/50 bg-earth-950/30 overflow-x-auto" style={{ scrollbarWidth: 'thin' }}>
                      {experienceTabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveExperienceTab(tab.id)}
                          className={`flex-shrink-0 px-4 py-3 text-sm transition-all relative ${
                            activeExperienceTab === tab.id
                              ? 'bg-earth-900/40 text-gold-400'
                              : 'text-earth-300 hover:bg-earth-900/20 hover:text-earth-100'
                          }`}
                        >
                          {tab.label}
                          {activeExperienceTab === tab.id && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400" />
                          )}
                        </button>
                      ))}
                    </div>
                    
                    {/* Experience Content */}
                    <div>
                      {activeExperienceTab === "activities" && renderItems(BOOKING_ITEMS.filter(i => i.category === "activities"))}
                      {activeExperienceTab === "solitude" && renderItems(BOOKING_ITEMS.filter(i => i.category === "solitude"))}
                      {activeExperienceTab === "expression" && renderItems(BOOKING_ITEMS.filter(i => i.category === "expression"))}
                      {activeExperienceTab === "residency" && renderItems(BOOKING_ITEMS.filter(i => i.category === "residency"))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}