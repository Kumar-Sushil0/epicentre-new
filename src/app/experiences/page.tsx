import Header from "../components/Header";
import Footer from "../components/Footer";
import ExperiencesIntro from "../components/experiences/ExperiencesIntro";
import ExperiencesGrid from "../components/experiences/ExperiencesGrid";
import ExperiencesCTA from "../components/experiences/ExperiencesCTA";

export default function ExperiencesPage() {
  const experiences = [
    {
      title: "Evening Cooking",
      description: "Shared preparation when time and energy allow.\n\nSlow, collective, and unhurried.",
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
      title: "Afternoon Pottery",
      description: "Working with clay at its natural pace.\n\nTactile, grounding, and outcome-free.",
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
      title: "Midday Paint",
      description: "Visual expression shaped by light and space.\n\nEntered quietly, without instruction.",
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
      title: "Late Night Movie Screening",
      description: "Films chosen for the moment.\n\nWatched together, without discussion pressure.",
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
      title: "Overnight Lake Camping",
      description: "Staying close to water and weather.\n\nSimple, quiet, and conditional.",
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
      title: "Early Morning & Night Safari",
      description: "Observing life as it begins the day.\n\nPresence over pursuit.",
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
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
      <Header />
      <div className="flex-1 w-full max-w-[1280px] mx-auto px-6 lg:px-8 py-12 md:py-20">
        <ExperiencesIntro />
        <ExperiencesGrid experiences={experiences} />
        <ExperiencesCTA />
      </div>
      <Footer />
    </main>
  );
}
