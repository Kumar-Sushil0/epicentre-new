"use client";

import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExperiencesIntro from "../components/experiences/ExperiencesIntro";
import ExperiencesCTA from "../components/experiences/ExperiencesCTA";
import ExperiencesCategoryNav from "../components/experiences/ExperiencesCategoryNav";
import ExperiencesGrid from "../components/experiences/ExperiencesGrid";

// Helper function to generate a slug from title
function generateId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Helper function to assign random tags (1-3 tags per experience)
function assignRandomTags(): string[] {
  const allTags = ["morning", "afternoon", "evening", "night"];
  const numTags = Math.floor(Math.random() * 3) + 1; // 1-3 tags
  const shuffled = [...allTags].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numTags);
}

export default function ExperiencesPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const experiences = [
    {
      id: generateId("Evening Cooking"),
      title: "Evening Cooking",
      description: "Shared preparation when time and energy allow.\nSlow, collective, and unhurried.",
      time: "Evening",
      icon: "skillet",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
      ],
      imageAlt: "Close up of hands chopping fresh herbs on a wooden board in low warm light",
      aspectRatio: "4/3" as const,
      minimumGuests: 14,
      price: "1500 INR",
      href: "/experiences",
    },
    {
      id: generateId("Afternoon Pottery"),
      title: "Afternoon Pottery",
      description: "Working with clay at its natural pace.\nTactile, grounding, and outcome-free.",
      time: "Afternoon",
      icon: "gesture",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
      ],
      imageAlt: "Close up of clay covered hands working on a pottery wheel",
      aspectRatio: "3/4" as const,
      minimumGuests: 14,
      price: "1500 INR",
      href: "/experiences",
    },
    {
      id: generateId("Midday Paint"),
      title: "Midday Paint",
      description: "Visual expression shaped by light and space.\nEntered quietly, without instruction.",
      time: "Midday",
      icon: "palette",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
      ],
      imageAlt: "An artist's easel standing in a sunlit room with painting supplies",
      aspectRatio: "3/4" as const,
      minimumGuests: 14,
      price: "1500 INR",
      href: "/experiences",
    },
    {
      id: generateId("Late Night Movie Screening"),
      title: "Late Night Movie Screening",
      description: "Films chosen for the moment.\nWatched together, without discussion pressure.",
      time: "Late Night",
      icon: "theaters",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAp-yDz8bDOHDgf9xJbj0GvUszs0lHVc4U6p0TXmQLCdZ-dwhnDK6eTIt0Fqm27Qt4eJcpRYgZmPH5c2ok07pIZKm6EFwIWV2HAxf7PPO-nB4ILYwDvkk1P9LlQAzuHl9LHd8EZJz2i_O61QS8QyDfcRjadK3wfoZi1zAnSJMVmkFyGBWO4635QStA8dET3_wdgeBgosK141lBGk7iK8ELekhk349aDocnAmmMG1WCdYKBantBSw7VSeQfYK36scMVJCqV7mmfjDzkL",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAp-yDz8bDOHDgf9xJbj0GvUszs0lHVc4U6p0TXmQLCdZ-dwhnDK6eTIt0Fqm27Qt4eJcpRYgZmPH5c2ok07pIZKm6EFwIWV2HAxf7PPO-nB4ILYwDvkk1P9LlQAzuHl9LHd8EZJz2i_O61QS8QyDfcRjadK3wfoZi1zAnSJMVmkFyGBWO4635QStA8dET3_wdgeBgosK141lBGk7iK8ELekhk349aDocnAmmMG1WCdYKBantBSw7VSeQfYK36scMVJCqV7mmfjDzkL",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAp-yDz8bDOHDgf9xJbj0GvUszs0lHVc4U6p0TXmQLCdZ-dwhnDK6eTIt0Fqm27Qt4eJcpRYgZmPH5c2ok07pIZKm6EFwIWV2HAxf7PPO-nB4ILYwDvkk1P9LlQAzuHl9LHd8EZJz2i_O61QS8QyDfcRjadK3wfoZi1zAnSJMVmkFyGBWO4635QStA8dET3_wdgeBgosK141lBGk7iK8ELekhk349aDocnAmmMG1WCdYKBantBSw7VSeQfYK36scMVJCqV7mmfjDzkL",
      ],
      imageAlt: "A dark cozy room with a projector screen glowing in the background",
      aspectRatio: "video" as const,
      minimumGuests: 14,
      price: "1500 INR",
      href: "/experiences",
    },
    {
      id: generateId("Overnight Lake Camping"),
      title: "Overnight Lake Camping",
      description: "Staying close to water and weather.\nSimple, quiet, and conditional.",
      time: "Overnight",
      icon: "camping",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
      ],
      imageAlt: "A serene misty lake at dawn with trees reflecting in the water",
      aspectRatio: "video" as const,
      minimumGuests: 14,
      price: "1500 INR",
      href: "/experiences",
    },
    {
      id: generateId("Early Morning & Night Safari"),
      title: "Early Morning & Night Safari",
      description: "Observing life as it begins the day.\nPresence over pursuit.",
      time: "Early Morning",
      icon: "flutter_dash",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCE2S4t-k87o3wGZq3teUUbUFBfJH2qACr54qKouo5_6HZkMWtzALctFOFE8XD4ngpfjaOVjy88JHRs5cn_OBpTJsbQgMQSpx70TkgQPSZ7uCSpEXQLC6Qj_Q4jJp7O02aJYeaE3tbYiXEQjlabdBI-sbAVeNv0DGE4hsGS4WoL60uuSFbHq-iQNxF4nG2uTNe9Nqhhe6gw2MF9XcNedUQbzEBoagQm5_9Tkq73LLzuCxBQSIbFcgaF8I7-5JKhpyQa9NcydKPSXmoS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCE2S4t-k87o3wGZq3teUUbUFBfJH2qACr54qKouo5_6HZkMWtzALctFOFE8XD4ngpfjaOVjy88JHRs5cn_OBpTJsbQgMQSpx70TkgQPSZ7uCSpEXQLC6Qj_Q4jJp7O02aJYeaE3tbYiXEQjlabdBI-sbAVeNv0DGE4hsGS4WoL60uuSFbHq-iQNxF4nG2uTNe9Nqhhe6gw2MF9XcNedUQbzEBoagQm5_9Tkq73LLzuCxBQSIbFcgaF8I7-5JKhpyQa9NcydKPSXmoS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCE2S4t-k87o3wGZq3teUUbUFBfJH2qACr54qKouo5_6HZkMWtzALctFOFE8XD4ngpfjaOVjy88JHRs5cn_OBpTJsbQgMQSpx70TkgQPSZ7uCSpEXQLC6Qj_Q4jJp7O02aJYeaE3tbYiXEQjlabdBI-sbAVeNv0DGE4hsGS4WoL60uuSFbHq-iQNxF4nG2uTNe9Nqhhe6gw2MF9XcNedUQbzEBoagQm5_9Tkq73LLzuCxBQSIbFcgaF8I7-5JKhpyQa9NcydKPSXmoS",
      ],
      imageAlt: "Soft focus image of a bird perched on a branch in a misty forest",
      aspectRatio: "4/3" as const,
      minimumGuests: 14,
      price: "1500 INR",
      href: "/experiences",
    },
    {
      id: generateId("Sound Healing"),
      title: "Sound Healing",
      description: "Heal your mind, soul, and body, with the power of sound.",
      time: "Evening",
      icon: "music_note",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
      ],
      imageAlt: "Sound healing session with singing bowls and instruments",
      aspectRatio: "4/3" as const,
      minimumGuestsText: "For a group of 20 to 35 guests",
      price: "25000 INR",
      href: "/experiences",
    },
    {
      id: generateId("Painting"),
      title: "Painting",
      description: "Learn to capture nature on hand-made paper in dreamy water colours.",
      time: "Afternoon",
      icon: "palette",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
      ],
      imageAlt: "Watercolor painting supplies on handmade paper",
      aspectRatio: "3/4" as const,
      minimumGuests: 10,
      price: "1000 INR",
      href: "/experiences",
    },
    {
      id: generateId("Calligraphy"),
      title: "Calligraphy",
      description: "Take a break from your keyboard and reconnect with the subtle beauty of hand written notes.",
      time: "Afternoon",
      icon: "draw",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
      ],
      imageAlt: "Calligraphy pen and ink on paper with elegant handwritten script",
      aspectRatio: "3/4" as const,
      minimumGuests: 10,
      price: "2000 INR",
      href: "/experiences",
    },
    {
      id: generateId("Coffee Tasting"),
      title: "Coffee Tasting",
      description: "Taste and learn everything about coffee, from bean to cup: how it's grown, types, how it's ripened and roasted and how finally how it is brewed!",
      time: "Morning",
      icon: "local_cafe",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
      ],
      imageAlt: "Coffee beans and brewing equipment arranged for tasting",
      aspectRatio: "4/3" as const,
      minimumGuests: 10,
      price: "900 INR",
      href: "/experiences",
    },
    {
      id: generateId("Cheese Appreciation"),
      title: "Cheese Appreciation",
      description: "Know your cheeses and understand its pairings to create beautiful cheese boards that will take your next house party a notch higher.",
      time: "Evening",
      icon: "restaurant",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
      ],
      imageAlt: "Artisanal cheese board with various cheeses and accompaniments",
      aspectRatio: "4/3" as const,
      minimumGuests: 8,
      price: "1900 INR",
      href: "/experiences",
    },
    {
      id: generateId("Rock Balancing"),
      title: "Rock Balancing",
      description: "Learn a new way of meditation with rock balancing art.",
      time: "Afternoon",
      icon: "landscape",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
      ],
      imageAlt: "Balanced rocks in a meditative arrangement",
      aspectRatio: "3/4" as const,
      minimumGuests: 10,
      price: "1150 INR",
      href: "/experiences",
    },
    {
      id: generateId("Boat Safari"),
      title: "Boat Safari",
      description: "Navigate through serene waters and witness aquatic life in its natural habitat.\nPeaceful, immersive, and close to nature.",
      time: "Morning",
      icon: "directions_boat",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCE2S4t-k87o3wGZq3teUUbUFBfJH2qACr54qKouo5_6HZkMWtzALctFOFE8XD4ngpfjaOVjy88JHRs5cn_OBpTJsbQgMQSpx70TkgQPSZ7uCSpEXQLC6Qj_Q4jJp7O02aJYeaE3tbYiXEQjlabdBI-sbAVeNv0DGE4hsGS4WoL60uuSFbHq-iQNxF4nG2uTNe9Nqhhe6gw2MF9XcNedUQbzEBoagQm5_9Tkq73LLzuCxBQSIbFcgaF8I7-5JKhpyQa9NcydKPSXmoS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCE2S4t-k87o3wGZq3teUUbUFBfJH2qACr54qKouo5_6HZkMWtzALctFOFE8XD4ngpfjaOVjy88JHRs5cn_OBpTJsbQgMQSpx70TkgQPSZ7uCSpEXQLC6Qj_Q4jJp7O02aJYeaE3tbYiXEQjlabdBI-sbAVeNv0DGE4hsGS4WoL60uuSFbHq-iQNxF4nG2uTNe9Nqhhe6gw2MF9XcNedUQbzEBoagQm5_9Tkq73LLzuCxBQSIbFcgaF8I7-5JKhpyQa9NcydKPSXmoS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCE2S4t-k87o3wGZq3teUUbUFBfJH2qACr54qKouo5_6HZkMWtzALctFOFE8XD4ngpfjaOVjy88JHRs5cn_OBpTJsbQgMQSpx70TkgQPSZ7uCSpEXQLC6Qj_Q4jJp7O02aJYeaE3tbYiXEQjlabdBI-sbAVeNv0DGE4hsGS4WoL60uuSFbHq-iQNxF4nG2uTNe9Nqhhe6gw2MF9XcNedUQbzEBoagQm5_9Tkq73LLzuCxBQSIbFcgaF8I7-5JKhpyQa9NcydKPSXmoS",
      ],
      imageAlt: "Boat on calm water surrounded by nature",
      aspectRatio: "4/3" as const,
      minimumGuests: 12,
      price: "2000 INR",
      href: "/experiences",
    },
    {
      id: generateId("Grassland Safari"),
      title: "Grassland Safari",
      description: "Explore vast open grasslands and observe wildlife in their natural environment.\nWild, expansive, and untamed.",
      time: "Afternoon",
      icon: "grass",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCE2S4t-k87o3wGZq3teUUbUFBfJH2qACr54qKouo5_6HZkMWtzALctFOFE8XD4ngpfjaOVjy88JHRs5cn_OBpTJsbQgMQSpx70TkgQPSZ7uCSpEXQLC6Qj_Q4jJp7O02aJYeaE3tbYiXEQjlabdBI-sbAVeNv0DGE4hsGS4WoL60uuSFbHq-iQNxF4nG2uTNe9Nqhhe6gw2MF9XcNedUQbzEBoagQm5_9Tkq73LLzuCxBQSIbFcgaF8I7-5JKhpyQa9NcydKPSXmoS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCE2S4t-k87o3wGZq3teUUbUFBfJH2qACr54qKouo5_6HZkMWtzALctFOFE8XD4ngpfjaOVjy88JHRs5cn_OBpTJsbQgMQSpx70TkgQPSZ7uCSpEXQLC6Qj_Q4jJp7O02aJYeaE3tbYiXEQjlabdBI-sbAVeNv0DGE4hsGS4WoL60uuSFbHq-iQNxF4nG2uTNe9Nqhhe6gw2MF9XcNedUQbzEBoagQm5_9Tkq73LLzuCxBQSIbFcgaF8I7-5JKhpyQa9NcydKPSXmoS",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCE2S4t-k87o3wGZq3teUUbUFBfJH2qACr54qKouo5_6HZkMWtzALctFOFE8XD4ngpfjaOVjy88JHRs5cn_OBpTJsbQgMQSpx70TkgQPSZ7uCSpEXQLC6Qj_Q4jJp7O02aJYeaE3tbYiXEQjlabdBI-sbAVeNv0DGE4hsGS4WoL60uuSFbHq-iQNxF4nG2uTNe9Nqhhe6gw2MF9XcNedUQbzEBoagQm5_9Tkq73LLzuCxBQSIbFcgaF8I7-5JKhpyQa9NcydKPSXmoS",
      ],
      imageAlt: "Vast grassland with wildlife in the distance",
      aspectRatio: "4/3" as const,
      minimumGuests: 15,
      price: "1800 INR",
      href: "/experiences",
    },
    {
      id: generateId("Night Safari"),
      title: "Night Safari",
      description: "Discover the mysteries of nocturnal wildlife under the starlit sky.\nMysterious, thrilling, and unforgettable.",
      time: "Night",
      icon: "nightlight",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAp-yDz8bDOHDgf9xJbj0GvUszs0lHVc4U6p0TXmQLCdZ-dwhnDK6eTIt0Fqm27Qt4eJcpRYgZmPH5c2ok07pIZKm6EFwIWV2HAxf7PPO-nB4ILYwDvkk1P9LlQAzuHl9LHd8EZJz2i_O61QS8QyDfcRjadK3wfoZi1zAnSJMVmkFyGBWO4635QStA8dET3_wdgeBgosK141lBGk7iK8ELekhk349aDocnAmmMG1WCdYKBantBSw7VSeQfYK36scMVJCqV7mmfjDzkL",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAp-yDz8bDOHDgf9xJbj0GvUszs0lHVc4U6p0TXmQLCdZ-dwhnDK6eTIt0Fqm27Qt4eJcpRYgZmPH5c2ok07pIZKm6EFwIWV2HAxf7PPO-nB4ILYwDvkk1P9LlQAzuHl9LHd8EZJz2i_O61QS8QyDfcRjadK3wfoZi1zAnSJMVmkFyGBWO4635QStA8dET3_wdgeBgosK141lBGk7iK8ELekhk349aDocnAmmMG1WCdYKBantBSw7VSeQfYK36scMVJCqV7mmfjDzkL",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAp-yDz8bDOHDgf9xJbj0GvUszs0lHVc4U6p0TXmQLCdZ-dwhnDK6eTIt0Fqm27Qt4eJcpRYgZmPH5c2ok07pIZKm6EFwIWV2HAxf7PPO-nB4ILYwDvkk1P9LlQAzuHl9LHd8EZJz2i_O61QS8QyDfcRjadK3wfoZi1zAnSJMVmkFyGBWO4635QStA8dET3_wdgeBgosK141lBGk7iK8ELekhk349aDocnAmmMG1WCdYKBantBSw7VSeQfYK36scMVJCqV7mmfjDzkL",
      ],
      imageAlt: "Dark night scene with stars and silhouettes of wildlife",
      aspectRatio: "video" as const,
      minimumGuests: 12,
      price: "2200 INR",
      href: "/experiences",
    },
  ];

  // Group experiences by normalized time
  // Assign random tags to each experience (using useMemo to keep tags consistent)
  const experiencesWithTags = useMemo(() => {
    return experiences.map((exp) => ({
      ...exp,
      tags: assignRandomTags(),
    }));
  }, []);

  // Filter experiences based on selected tags
  const filteredExperiences = useMemo(() => {
    let filtered = experiencesWithTags;

    // Filter by tags (experience must have at least one of the selected tags)
    if (selectedTags.length > 0) {
      filtered = filtered.filter((exp) =>
        exp.tags.some((tag) => selectedTags.includes(tag))
      );
    }

    return filtered;
  }, [experiencesWithTags, selectedTags]);

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
      <Header />
      <div className="flex-1 w-full max-w-[1280px] mx-auto px-6 lg:px-8 py-12 md:py-20">
        <ExperiencesIntro />
      </div>
      <ExperiencesCategoryNav
        selectedTags={selectedTags}
        onTagsChange={setSelectedTags}
      />
      <div className="flex-1 w-full max-w-[1280px] mx-auto px-6 lg:px-8 py-12 md:py-20">
        {filteredExperiences.length > 0 ? (
          <>
            <ExperiencesGrid experiences={filteredExperiences} />
            <ExperiencesCTA />
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-earth-400 text-lg font-body">
              No experiences found matching your filters.
            </p>
            <button
              onClick={() => {
                setSelectedTags([]);
              }}
              className="mt-4 text-gold-500 hover:text-gold-400 underline transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
