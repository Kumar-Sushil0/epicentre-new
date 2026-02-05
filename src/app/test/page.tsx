"use client";

import { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselCard from "../components/CarouselCard";
import TestHero from "../components/test/TestHero";
import TestPhilosophy from "../components/test/TestPhilosophy";
import WellnessHero from "../components/wellness/WellnessHero";

export default function TestPage() {
    const [wellnessViewMode, setWellnessViewMode] = useState<'grid' | 'carousel'>('grid');
    const [wellnessCarouselIndex, setWellnessCarouselIndex] = useState(0);
    const wellnessCarouselRef = useRef<HTMLDivElement>(null);

    const [experiencesViewMode, setExperiencesViewMode] = useState<'grid' | 'carousel'>('grid');
    const [experiencesCarouselIndex, setExperiencesCarouselIndex] = useState(0);
    const experiencesCarouselRef = useRef<HTMLDivElement>(null);

    const [expressionViewMode, setExpressionViewMode] = useState<'grid' | 'carousel'>('grid');
    const [expressionCarouselIndex, setExpressionCarouselIndex] = useState(0);
    const expressionCarouselRef = useRef<HTMLDivElement>(null);

    const [solitudeViewMode, setSolitudeViewMode] = useState<'grid' | 'carousel'>('grid');
    const [solitudeCarouselIndex, setSolitudeCarouselIndex] = useState(0);
    const solitudeCarouselRef = useRef<HTMLDivElement>(null);

    const [residencyViewMode, setResidencyViewMode] = useState<'grid' | 'carousel'>('grid');
    const [residencyCarouselIndex, setResidencyCarouselIndex] = useState(0);
    const residencyCarouselRef = useRef<HTMLDivElement>(null);
    // Wellness Section Data - All 6 cards from wellness page
    const wellnessPractices = [
        {
            title: "Self-Paced Physical Training",
            description: "Quiet movement without mirrors or metrics.\nStrength and exertion on your own terms.",
            category: "Self-Paced",
            icon: "fitness_center",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBs-hb7o4jNTYxKGveJrfp7t9OjuheyFrl6975031WiGmob3tmuoKzo9e2Gi5gfjM2WmcObIeJRsPLgmRU5lBfL7W78uunGYn_oc94_vQrdsZ1BjmCDRi9ZxSTde7PluowM0B9IEifnGvy1rLS3ysNmjoRiMZS8YRu_xL2Xp4IpulOke15P3reMJbLN2dYFGAbVe9q8f6FFx6X_KZoJ7O_EJvbTRGc45bGfCOWnlsHH2_6uy6yvEum6rEOuMrf4jW3NfWk49g1EY9L5",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBpZOvr0qjgBHYFzGTiTaPYUUfxtRTTng4Mwyz1Y1DWNZJ_1bIkfqJ3exaDYGFmGQH0kEFlJ--2x9K7P2_gWe-POWZpboure-tmEfUlOPBXEahy3y3fJM4Yf1VShZ5WCMnIOQRgohRnU1MHh9dBz_RMPXnR6lgAzzpCeWWqxfY1jj5rO29e1v-so6AiyI_-y3kx2qdK_n4hThx3ugUPOZty1UBFhhmRzm7Lds78A7DSjpxT19FH5wa-UqsVvRcWUBB5wtZ4-NGFFouA",
            ],
        },
        {
            title: "Outdoor Kayaking & Cycling",
            description: "Movement through land and water.\nNo routes, no destinations, no urgency.",
            category: "Outdoor",
            icon: "kayaking",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBs-hb7o4jNTYxKGveJrfp7t9OjuheyFrl6975031WiGmob3tmuoKzo9e2Gi5gfjM2WmcObIeJRsPLgmRU5lBfL7W78uunGYn_oc94_vQrdsZ1BjmCDRi9ZxSTde7PluowM0B9IEifnGvy1rLS3ysNmjoRiMZS8YRu_xL2Xp4IpulOke15P3reMJbLN2dYFGAbVe9q8f6FFx6X_KZoJ7O_EJvbTRGc45bGfCOWnlsHH2_6uy6yvEum6rEOuMrf4jW3NfWk49g1EY9L5",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBpZOvr0qjgBHYFzGTiTaPYUUfxtRTTng4Mwyz1Y1DWNZJ_1bIkfqJ3exaDYGFmGQH0kEFlJ--2x9K7P2_gWe-POWZpboure-tmEfUlOPBXEahy3y3fJM4Yf1VShZ5WCMnIOQRgohRnU1MHh9dBz_RMPXnR6lgAzzpCeWWqxfY1jj5rO29e1v-so6AiyI_-y3kx2qdK_n4hThx3ugUPOZty1UBFhhmRzm7Lds78A7DSjpxT19FH5wa-UqsVvRcWUBB5wtZ4-NGFFouA",
            ],
        },
        {
            title: "Yoga & Meditation",
            description: "Low-light spaces for stillness and breath.\nSelf-led, informal, and unstructured.",
            category: "Mindfulness",
            icon: "self_improvement",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBpZOvr0qjgBHYFzGTiTaPYUUfxtRTTng4Mwyz1Y1DWNZJ_1bIkfqJ3exaDYGFmGQH0kEFlJ--2x9K7P2_gWe-POWZpboure-tmEfUlOPBXEahy3y3fJM4Yf1VShZ5WCMnIOQRgohRnU1MHh9dBz_RMPXnR6lgAzzpCeWWqxfY1jj5rO29e1v-so6AiyI_-y3kx2qdK_n4hThx3ugUPOZty1UBFhhmRzm7Lds78A7DSjpxT19FH5wa-UqsVvRcWUBB5wtZ4-NGFFouA",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBs-hb7o4jNTYxKGveJrfp7t9OjuheyFrl6975031WiGmob3tmuoKzo9e2Gi5gfjM2WmcObIeJRsPLgmRU5lBfL7W78uunGYn_oc94_vQrdsZ1BjmCDRi9ZxSTde7PluowM0B9IEifnGvy1rLS3ysNmjoRiMZS8YRu_xL2Xp4IpulOke15P3reMJbLN2dYFGAbVe9q8f6FFx6X_KZoJ7O_EJvbTRGc45bGfCOWnlsHH2_6uy6yvEum6rEOuMrf4jW3NfWk49g1EY9L5",
            ],
        },
        {
            title: "Leisure & Board Games",
            description: "Analog play without competition.\nEasy to begin, easy to leave.",
            category: "Leisure",
            icon: "casino",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDpLgNIXCBBA7cPpXwO9csLOqZrHsSadnHbb7Q-s24LEXvnrtHwATVxM-rgQthaw7HXT23Wv2Vj4M0QHf7vMXlnFxVR_3527JHh44DEYoHmp9RAiTjj5UKVQsSpgDXnPAtpKFwBRYkq1brPYGQAyalnn8lw1Ew3ezLh9zoRAIiS58I2gC8YpIP3e3Vx-QSnJvTJzmVneD0Kah0f9YnTcUovk_mk9mNLTdZ2PEgiloIzz1gOrdmvtvnxrXR2idxdg2P4IVZ0jM6IqpKT",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBpZOvr0qjgBHYFzGTiTaPYUUfxtRTTng4Mwyz1Y1DWNZJ_1bIkfqJ3exaDYGFmGQH0kEFlJ--2x9K7P2_gWe-POWZpboure-tmEfUlOPBXEahy3y3fJM4Yf1VShZ5WCMnIOQRgohRnU1MHh9dBz_RMPXnR6lgAzzpCeWWqxfY1jj5rO29e1v-so6AiyI_-y3kx2qdK_n4hThx3ugUPOZty1UBFhhmRzm7Lds78A7DSjpxT19FH5wa-UqsVvRcWUBB5wtZ4-NGFFouA",
            ],
        },
        {
            title: "Companionship & Pet Friendly",
            description: "Shared presence with animals.\nCalm, grounding, and uncomplicated.",
            category: "Companionship",
            icon: "pets",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuA2Tpwiek3PonA5i87JcVQ0JysCYWwZeYKjPR00nuxAGlqkrb3Oc2Y76BPK5eoukMAJQpiiOpUXSye5KD7z0KrMUhR-VAei7QNfxuEafVCYyoPl2zI3KEil0UkwjxK_l6FhAUKIbZzxXgqDkWh-X6LW5Zh9V0fgppjnWfzsEE9CipCUk-lGo482Uh8fF2rqUczpWgg0hGFp7hIyQClItjfCzoXHDeU1kPzuo9ZBkjj7S1RucpxI27X9fAKm_lGvr_ZxX4o8cU_In7QQ",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBpZOvr0qjgBHYFzGTiTaPYUUfxtRTTng4Mwyz1Y1DWNZJ_1bIkfqJ3exaDYGFmGQH0kEFlJ--2x9K7P2_gWe-POWZpboure-tmEfUlOPBXEahy3y3fJM4Yf1VShZ5WCMnIOQRgohRnU1MHh9dBz_RMPXnR6lgAzzpCeWWqxfY1jj5rO29e1v-so6AiyI_-y3kx2qdK_n4hThx3ugUPOZty1UBFhhmRzm7Lds78A7DSjpxT19FH5wa-UqsVvRcWUBB5wtZ4-NGFFouA",
            ],
        },
        {
            title: "Grounding, A Day at a Farm",
            description: "Time spent with soil and routine.\nHands-on, slow, and without theory.",
            category: "Grounding",
            icon: "agriculture",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAWhITh0xZYsAlerv6-wQYlJ2lGDb2fA_wBAeP-_GMQIbFan5_10uwImDJBEYxv89qG40jiKmPooOPAuK9VNy0byJTjkmF4qhQWNpG_rIZyaiWljPgYyplu6QhWi4ITpQrmDn--uGE-0y86G3XGlnTx0Szqsk_LMFKI1PoC37grwx7PFmwsXeweFG5cInow3VbwMtmjiHmOpbL1EBaeG9-Ix3LzkGgpXcwBPNvDZuavErPWW1u3mWa2a3qiqIcBhHnodWXLlg5povz0",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBs-hb7o4jNTYxKGveJrfp7t9OjuheyFrl6975031WiGmob3tmuoKzo9e2Gi5gfjM2WmcObIeJRsPLgmRU5lBfL7W78uunGYn_oc94_vQrdsZ1BjmCDRi9ZxSTde7PluowM0B9IEifnGvy1rLS3ysNmjoRiMZS8YRu_xL2Xp4IpulOke15P3reMJbLN2dYFGAbVe9q8f6FFx6X_KZoJ7O_EJvbTRGc45bGfCOWnlsHH2_6uy6yvEum6rEOuMrf4jW3NfWk49g1EY9L5",
            ],
        },
    ];

    // Experiences Section Data - All 12 cards from experiences page
    const experiences = [
        {
            title: "Boat Safari",
            description: "Guided movement through water alongside bird life.\nExperience: Observation, rhythm, quiet.",
            icon: "sailing",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
            ],
            price: "1000 INR",
            userCount: "2-5",
        },
        {
            title: "Boat Night Safari",
            description: "Float slowly under open sky.\nExperience: Stillness, orientation, vastness.",
            icon: "sailing",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
            ],
            price: "1000 INR",
            userCount: "2-5",
        },
        {
            title: "Grassland Safari",
            description: "Moving through open terrain near wildlife.\nExperience: Openness, scale, unhurried time.",
            icon: "landscape",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
            ],
            price: "5000 INR",
            userCount: "2-5",
        },
        {
            title: "Media Viewing",
            description: "Content selected for the moment.\nExperience: Presence, absorption, restraint.",
            icon: "theaters",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAp-yDz8bDOHDgf9xJbj0GvUszs0lHVc4U6p0TXmQLCdZ-dwhnDK6eTIt0Fqm27Qt4eJcpRYgZmPH5c2ok07pIZKm6EFwIWV2HAxf7PPO-nB4ILYwDvkk1P9LlQAzuHl9LHd8EZJz2i_O61QS8QyDfcRjadK3wfoZi1zAnSJMVmkFyGBWO4635QStA8dET3_wdgeBgosK141lBGk7iK8ELekhk349aDocnAmmMG1WCdYKBantBSw7VSeQfYK36scMVJCqV7mmfjDzkL",
            ],
            price: "2000 INR",
            userCount: "2-20",
        },
        {
            title: "Lake Camping",
            description: "Staying close to water and weather.\nExperience: Exposure, continuity, rest.",
            icon: "camping",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
            ],
            price: "2000 INR",
            userCount: "2-5",
        },
        {
            title: "Sound Immersion",
            description: "Sound held as an environment.\nExperience: Resonance, receptivity, release.",
            icon: "music_note",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
            ],
            price: "10000 INR",
            userCount: "2-20",
        },
        {
            title: "Painting",
            description: "Bringing color into form without instruction.\nExperience: Presence, intuition, flow.",
            icon: "palette",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
            ],
            price: "500 INR",
            userCount: "Per Canvas",
        },
        {
            title: "Cooking",
            description: "Preparing meals with seasonal ingredients.\nExperience: Process, nourishment, sharing.",
            icon: "restaurant",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
            ],
            price: "5000 INR",
            userCount: "2-5",
        },
        {
            title: "Calligraphy",
            description: "Giving form to thought through words.\nExperience: Deliberation, clarity, care.",
            icon: "draw",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
            ],
            price: "5000 INR",
            userCount: "2-5",
        },
        {
            title: "Coffee Preparation",
            description: "Roasting, grinding, and brewing with guided restraint.\nExperience: Process, patience, discernment.",
            icon: "local_cafe",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
            ],
            price: "5000 INR",
            userCount: "2-5",
        },
        {
            title: "Pottery",
            description: "Clay shaped under quiet guidance.\nExperience: Weight, surrender, patience.",
            icon: "handyman",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
            ],
            price: "5000 INR",
            userCount: "2-5",
        },
        {
            title: "Rock Balancing",
            description: "Guided balancing of stones without goal.\nExperience: Patience, failure, gravity.",
            icon: "landscape",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
            ],
            price: "5000 INR",
            userCount: "2-5",
        },
    ];

    // Expression Section Data - All 6 cards from expression page
    const expressionPillars = [
        {
            title: "Process Experiments",
            description: "Testing how you work, not what you produce.\nExamine method, rhythm, and sequence before committing to outcomes.",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
            ],
            icon: "science",
        },
        {
            title: "Material Experiments",
            description: "Testing unfinished work, not final output.\nEngage with raw, incomplete material before it becomes fixed.",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
            ],
            icon: "construction",
        },
        {
            title: "Writing experiments",
            description: "Channeling thoughts through the rhythm of keys.\nFocused sessions for drafting, editing, and finding flow.",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAKzLVQHfKO6fVCwz_bbCF3sUZndGv5siIr8bEoBG89SMFxRE0TF5k1L_QJMRXIiNlj0-bkP0NEy5Dd40ZsQrG8Pz8IA3_FIH4-fUrU9kwhzYPpfkoeCi_cChlNmmX-UOo62Dpwf56h80orphiCxMzAb7h0S8XFPrFFU4kdVCTHQNNZLDYJhDYh1W0tvt4o4jr9VdvuTeuc0uJCPIko1WRGysJzvtzn4HG3S3c1p762-ustfuEvWZQvv1VAUjL8Wy-mRFFdTExKAu",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAKzLVQHfKO6fVCwz_bbCF3sUZndGv5siIr8bEoBG89SMFxRE0TF5k1L_QJMRXIiNlj0-bkP0NEy5Dd40ZsQrG8Pz8IA3_FIH4-fUrU9kwhzYPpfkoeCi_cChlNmmX-UOo62Dpwf56h80orphiCxMzAb7h0S8XFPrFFU4kdVCTHQNNZLDYJhDYh1W0tvt4o4jr9VdvuTeuc0uJCPIko1WRGysJzvtzn4HG3S3c1p762-ustfuEvWZQvv1VAUjL8Wy-mRFFdTExKAu",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAKzLVQHfKO6fVCwz_bbCF3sUZndGv5siIr8bEoBG89SMFxRE0TF5k1L_QJMRXIiNlj0-bkP0NEy5Dd40ZsQrG8Pz8IA3_FIH4-fUrU9kwhzYPpfkoeCi_cChlNmmX-UOo62Dpwf56h80orphiCxMzAb7h0S8XFPrFFU4kdVCTHQNNZLDYJhDYh1W0tvt4o4jr9VdvuTeuc0uJCPIko1WRGysJzvtzn4HG3S3c1p762-ustfuEvWZQvv1VAUjL8Wy-mRFFdTExKAu",
            ],
            icon: "history_edu",
        },
        {
            title: "Audience Experiments",
            description: "Testing how work lands, without feedback loops.\nObserve attention, perception, and response without performance pressure.",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
            ],
            icon: "visibility",
        },
        {
            title: "Audio Visual Experiments",
            description: "Testing conditions, not individuals.\nExplore rules, structures, and constraints to understand how conditions shape behavior.",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
            ],
            icon: "settings_suggest",
        },
        {
            title: "Movement experiments",
            description: "Testing unfinished work, not final output.\nDesigned for creators working with raw, incomplete, or unstable material.",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
            ],
            icon: "science",
        },
    ];

    // Solitude Section Data
    const solitudePractices = [
        {
            title: "Angling",
            description: "Repetition and still attention. A meditative practice of patience and presence by the water's edge. Let the rhythm of the cast soothe the restless mind.",
            category: "Focus",
            icon: "arrow_forward",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd",
            ],
        },
        {
            title: "Bird Watching",
            description: "Looking without pursuit. Soft observation of local wildlife in their natural habitat. Train your eye to notice the subtle movements of life around you.",
            category: "Observe",
            icon: "map",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM",
            ],
        },
        {
            title: "Star Gazing",
            description: "Observation without urgency. Reconnecting with the cosmos under our clear, protected night skies. Feel the scale of the universe in silence.",
            category: "Wonder",
            icon: "star",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAfUEFkuPsDcRrwomNpV_HwfuHf9O-A4L4U6MKLljPvLYJJwCUlXXxY2mjgE-er6h_jG_PklBuvKzJnEWMoUJTBEFnfYdbWj0UoS3cNXdzuBn3c88huWQsb9L1tETDwGKjEr-JXTFe2AZ17ij8blc4Ins9QdK95sIdIr8UwQdYwnWrcQj1lZakOp8Ym0eJLoProiY8a7Mgr0ih-iysVaPtnEnXgmXEjcYNY-jgM_8kZIOdBMKHtMR5R46CeAnA6rA3Z00VVJIJkJdLa",
            ],
        },
    ];

    // Residency Section Data - All 12 cards from residency page
    const residencies = [
        {
            title: "AI Sense-Making Residency",
            description: "A 5-day retreat to navigate the existential and practical shifts of the machine age through shared dialogue and deep reading.",
            category: "Future Studies",
            icon: "psychology",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
            ],
        },
        {
            title: "Risk & Attention Residency",
            description: "Understanding how we allocate our most precious resource—attention—in high-stakes environments and digital noise.",
            category: "Psychology",
            icon: "psychology",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
            ],
        },
        {
            title: "Tech Sabbatical Lite",
            description: "A gentle re-entry into the physical world. 3 days of analog interaction, paper maps, and mechanical watches.",
            category: "Wellness",
            icon: "devices_off",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAKzLVQHfKO6fVCwz_bbCF3sUZndGv5siIr8bEoBG89SMFxRE0TF5k1L_QJMRXIiNlj0-bkP0NEy5Dd40ZsQrG8Pz8IA3_FIH4-fUrU9kwhzYPpfkoeCi_cChlNmmX-UOo62Dpwf56h80orphiCxMzAb7h0S8XFPrFFU4kdVCTHQNNZLDYJhDYh1W0tvt4o4jr9VdvuTeuc0uJCPIko1WRGysJzvtzn4HG3S3c1p762-ustfuEvWZQvv1VAUjL8Wy-mRFFdTExKAu",
            ],
        },
        {
            title: "Digital Brain Audit",
            description: "Review your digital archives. What stays, what goes? An audit of your personal knowledge management systems.",
            category: "Knowledge Management",
            icon: "storage",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
            ],
        },
        {
            title: "Dance Movement Signature",
            description: "Finding your unique kinetic language through guided improvisation and spatial awareness exercises.",
            category: "Movement",
            icon: "directions_run",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAPAjtxSh87gIafkgIqTQA4_WlBoXdA8o_35G4VKBbVse1DMUWiZfJRKzPGjlrGI9zwVUe17OPdlAa9eDGJimduOzWhw3_NGmPSM-owaLiC0ZDzOZrYwRq6gzX8Uu1NxkBzYzHe0-Wm213bdlpPLadfY9I9heB0l5jHHYlkSKpnweFU8u8Os8ZU0oPWnswySRkwRHCEuWRJSQkWsiJi0KIugcnXUrIgi8mK3Lhpej9bLkfGjJANLbVri_x-pda8_oyarPiN1ILubRWR",
            ],
        },
        {
            title: "Theater of the Inverse",
            description: "Exploring roles and narratives by doing the exact opposite of your natural inclination in a safe, dramatic setting.",
            category: "Performance Arts",
            icon: "theater_comedy",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBY5EzQoT-ln-vIJmQUQXprHfkVhamnYT-SUJQDgJ_x-ge2ddrWMUbHY-HulrWl5zy7E_7U-oa75n7z0c5hJjd2iHIfvQpPWkPA2DdpUXN7ZVY83Z8XrrP9wU7SXANiExCiyGU1Og9zK-TLtsvDZw_Ns70L2vkkBNyxCGS-KwbMBu-tkeAiSs7LyNa1p8Dt-EHFSSgZ7USt8cgIn-r1QT0JFo5ihBpZIylq3AfMl7iZ-rwm_Qu34XQczQd8PY5uD2NRk-MP4-UxTS0_",
            ],
        },
        {
            title: "Artist in Making",
            description: "A residency for non-artists to rediscover the tactile joy of creation without the pressure of an end product.",
            category: "Creativity",
            icon: "palette",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
            ],
        },
        {
            title: "Off-Grid Life",
            description: "Practical skills in water management, solar cooking, and composting within a high-comfort off-grid facility.",
            category: "Sustainability",
            icon: "eco",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAWhITh0xZYsAlerv6-wQYlJ2lGDb2fA_wBAeP-_GMQIbFan5_10uwImDJBEYxv89qG40jiKmPooOPAuK9VNy0byJTjkmF4qhQWNpG_rIZyaiWljPgYyplu6QhWi4ITpQrmDn--uGE-0y86G3XGlnTx0Szqsk_LMFKI1PoC37grwx7PFmwsXeweFG5cInow3VbwMtmjiHmOpbL1EBaeG9-Ix3LzkGgpXcwBPNvDZuavErPWW1u3mWa2a3qiqIcBhHnodWXLlg5povz0",
            ],
        },
        {
            title: "Leaving Cities",
            description: "An honest inquiry into rural living, modern homesteading, and the future of community outside urban centers.",
            category: "Urban Studies",
            icon: "nature_people",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
            ],
        },
        {
            title: "Silent Writing Residency",
            description: "No workshops, no feedback, no critique. Just 7 days of shared silence and 8 hours of daily writing time.",
            category: "Literature",
            icon: "edit_note",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
            ],
        },
        {
            title: "History Excerpts",
            description: "A guided exploration of primary sources to find parallels between past transitions and our current era.",
            category: "History",
            icon: "menu_book",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAKzLVQHfKO6fVCwz_bbCF3sUZndGv5siIr8bEoBG89SMFxRE0TF5k1L_QJMRXIiNlj0-bkP0NEy5Dd40ZsQrG8Pz8IA3_FIH4-fUrU9kwhzYPpfkoeCi_cChlNmmX-UOo62Dpwf56h80orphiCxMzAb7h0S8XFPrFFU4kdVCTHQNNZLDYJhDYh1W0tvt4o4jr9VdvuTeuc0uJCPIko1WRGysJzvtzn4HG3S3c1p762-ustfuEvWZQvv1VAUjL8Wy-mRFFdTExKAu",
            ],
        },
        {
            title: "Life Design Residency",
            description: "Designing personal systems for health, finance, and learning that work with your biology rather than against it.",
            category: "Systemic Thinking",
            icon: "account_tree",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100">
            <Header />
            <TestHero />
            <TestPhilosophy />

            {/* Wellness Section */}
            
            <section className="px-4 md:px-10 py-16 max-w-[1400px] mx-auto">
                
                <div className="mb-12 flex justify-end items-end">
                    
                    {/* View Toggle Button */}
                    <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
                        <button
                            onClick={() => setWellnessViewMode('grid')}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${wellnessViewMode === 'grid'
                                    ? 'bg-gold-500 text-earth-900'
                                    : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">grid_view</span>
                            <span className="text-sm font-medium">Grid</span>
                        </button>
                        <button
                            onClick={() => setWellnessViewMode('carousel')}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${wellnessViewMode === 'carousel'
                                    ? 'bg-gold-500 text-earth-900'
                                    : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">view_carousel</span>
                            <span className="text-sm font-medium">Carousel</span>
                        </button>
                    </div>
                </div>

                {/* Grid View */}
                {
                    wellnessViewMode === 'grid' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {wellnessPractices.map((practice, index) => (
                                <CarouselCard
                                    key={index}
                                    title={practice.title}
                                    description={practice.description}
                                    images={practice.images}
                                    icon={practice.icon}
                                    category={practice.category}
                                />
                            ))}
                        </div>
                    )
                }

                {/* Carousel View */}
                {
                    wellnessViewMode === 'carousel' && (
                        <div className="relative">
                            <div
                                ref={wellnessCarouselRef}
                                className="overflow-hidden w-full mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                <div
                                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(calc(-${wellnessCarouselIndex} * ((100% - 4rem) / 3 + 2rem)))`,
                                        willChange: "transform",
                                    }}
                                >
                                    {wellnessPractices.map((practice, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0"
                                            style={{
                                                width: `calc((100% - 4rem) / 3)`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            <CarouselCard
                                                title={practice.title}
                                                description={practice.description}
                                                images={practice.images}
                                                icon={practice.icon}
                                                category={practice.category}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => setWellnessCarouselIndex(prev => prev === 0 ? wellnessPractices.length - 3 : prev - 1)}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                                aria-label="Previous"
                            >
                                <span className="material-symbols-outlined text-2xl">chevron_left</span>
                            </button>
                            <button
                                onClick={() => setWellnessCarouselIndex(prev => prev === wellnessPractices.length - 3 ? 0 : prev + 1)}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                                aria-label="Next"
                            >
                                <span className="material-symbols-outlined text-2xl">chevron_right</span>
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-8">
                                {Array.from({ length: wellnessPractices.length - 2 }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setWellnessCarouselIndex(index)}
                                        className={`w-2 h-1 rounded-full transition-all ${index === wellnessCarouselIndex ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                }
            </section >

            {/* Experiences Section */}
            < section className="px-4 md:px-10 py-16 max-w-[1400px] mx-auto" >
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Experiences
                        </h2>
                        <p className="text-earth-300 text-lg font-body">
                            Curated activities and adventures
                        </p>
                    </div>
                    {/* View Toggle Button */}
                    <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
                        <button
                            onClick={() => setExperiencesViewMode('grid')}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${experiencesViewMode === 'grid'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">grid_view</span>
                            <span className="text-sm font-medium">Grid</span>
                        </button>
                        <button
                            onClick={() => setExperiencesViewMode('carousel')}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${experiencesViewMode === 'carousel'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">view_carousel</span>
                            <span className="text-sm font-medium">Carousel</span>
                        </button>
                    </div>
                </div>

                {/* Grid View */}
                {
                    experiencesViewMode === 'grid' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {experiences.map((exp, index) => (
                                <CarouselCard
                                    key={index}
                                    title={exp.title}
                                    description={exp.description}
                                    images={exp.images}
                                    icon={exp.icon}
                                    price={exp.price}
                                    userCount={exp.userCount}
                                />
                            ))}
                        </div>
                    )
                }

                {/* Carousel View */}
                {
                    experiencesViewMode === 'carousel' && (
                        <div className="relative">
                            <div
                                ref={experiencesCarouselRef}
                                className="overflow-hidden w-full mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                <div
                                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(calc(-${experiencesCarouselIndex} * ((100% - 4rem) / 3 + 2rem)))`,
                                        willChange: "transform",
                                    }}
                                >
                                    {experiences.map((exp, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0"
                                            style={{
                                                width: `calc((100% - 4rem) / 3)`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            <CarouselCard
                                                title={exp.title}
                                                description={exp.description}
                                                images={exp.images}
                                                icon={exp.icon}
                                                price={exp.price}
                                                userCount={exp.userCount}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => setExperiencesCarouselIndex(prev => prev === 0 ? experiences.length - 3 : prev - 1)}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                                aria-label="Previous"
                            >
                                <span className="material-symbols-outlined text-2xl">chevron_left</span>
                            </button>
                            <button
                                onClick={() => setExperiencesCarouselIndex(prev => prev === experiences.length - 3 ? 0 : prev + 1)}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                                aria-label="Next"
                            >
                                <span className="material-symbols-outlined text-2xl">chevron_right</span>
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-8">
                                {Array.from({ length: experiences.length - 2 }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setExperiencesCarouselIndex(index)}
                                        className={`w-2 h-1 rounded-full transition-all ${index === experiencesCarouselIndex ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                }
            </section >

            {/* Expression Section */}
            < section className="px-4 md:px-10 py-16 max-w-[1400px] mx-auto" >
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Expression
                        </h2>
                        <p className="text-earth-300 text-lg font-body">
                            Creative experiments and artistic exploration
                        </p>
                    </div>
                    {/* View Toggle Button */}
                    <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
                        <button
                            onClick={() => setExpressionViewMode('grid')}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${expressionViewMode === 'grid'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">grid_view</span>
                            <span className="text-sm font-medium">Grid</span>
                        </button>
                        <button
                            onClick={() => setExpressionViewMode('carousel')}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${expressionViewMode === 'carousel'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">view_carousel</span>
                            <span className="text-sm font-medium">Carousel</span>
                        </button>
                    </div>
                </div>

                {/* Grid View */}
                {
                    expressionViewMode === 'grid' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {expressionPillars.map((pillar, index) => (
                                <CarouselCard
                                    key={index}
                                    title={pillar.title}
                                    description={pillar.description}
                                    images={pillar.images}
                                    icon={pillar.icon}
                                />
                            ))}
                        </div>
                    )
                }

                {/* Carousel View */}
                {
                    expressionViewMode === 'carousel' && (
                        <div className="relative">
                            <div
                                ref={expressionCarouselRef}
                                className="overflow-hidden w-full mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                <div
                                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(calc(-${expressionCarouselIndex} * ((100% - 4rem) / 3 + 2rem)))`,
                                        willChange: "transform",
                                    }}
                                >
                                    {expressionPillars.map((pillar, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0"
                                            style={{
                                                width: `calc((100% - 4rem) / 3)`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            <CarouselCard
                                                title={pillar.title}
                                                description={pillar.description}
                                                images={pillar.images}
                                                icon={pillar.icon}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => setExpressionCarouselIndex(prev => prev === 0 ? expressionPillars.length - 3 : prev - 1)}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                                aria-label="Previous"
                            >
                                <span className="material-symbols-outlined text-2xl">chevron_left</span>
                            </button>
                            <button
                                onClick={() => setExpressionCarouselIndex(prev => prev === expressionPillars.length - 3 ? 0 : prev + 1)}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                                aria-label="Next"
                            >
                                <span className="material-symbols-outlined text-2xl">chevron_right</span>
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-8">
                                {Array.from({ length: expressionPillars.length - 2 }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setExpressionCarouselIndex(index)}
                                        className={`w-2 h-1 rounded-full transition-all ${index === expressionCarouselIndex ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                }
            </section >

            {/* Solitude Section */}
            < section className="px-4 md:px-10 py-16 max-w-[1400px] mx-auto" >
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Solitude
                        </h2>
                        <p className="text-earth-300 text-lg font-body">
                            Practices for introspection and quiet contemplation
                        </p>
                    </div>
                    {/* View Toggle Button */}
                    <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
                        <button
                            onClick={() => setSolitudeViewMode('grid')}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${solitudeViewMode === 'grid'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">grid_view</span>
                            <span className="text-sm font-medium">Grid</span>
                        </button>
                        <button
                            onClick={() => setSolitudeViewMode('carousel')}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${solitudeViewMode === 'carousel'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">view_carousel</span>
                            <span className="text-sm font-medium">Carousel</span>
                        </button>
                    </div>
                </div>

                {/* Grid View */}
                {
                    solitudeViewMode === 'grid' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solitudePractices.map((practice, index) => (
                                <CarouselCard
                                    key={index}
                                    title={practice.title}
                                    description={practice.description}
                                    images={practice.images}
                                    icon={practice.icon}
                                    category={practice.category}
                                />
                            ))}
                        </div>
                    )
                }

                {/* Carousel View */}
                {
                    solitudeViewMode === 'carousel' && (
                        <div className="relative">
                            <div
                                ref={solitudeCarouselRef}
                                className="overflow-hidden w-full mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                <div
                                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(calc(-${solitudeCarouselIndex} * ((100% - 4rem) / 3 + 2rem)))`,
                                        willChange: "transform",
                                    }}
                                >
                                    {solitudePractices.map((practice, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0"
                                            style={{
                                                width: `calc((100% - 4rem) / 3)`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            <CarouselCard
                                                title={practice.title}
                                                description={practice.description}
                                                images={practice.images}
                                                icon={practice.icon}
                                                category={practice.category}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => setSolitudeCarouselIndex(prev => prev === 0 ? 0 : prev - 1)}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                                aria-label="Previous"
                            >
                                <span className="material-symbols-outlined text-2xl">chevron_left</span>
                            </button>
                            <button
                                onClick={() => setSolitudeCarouselIndex(prev => prev === 0 ? 0 : prev + 1)}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                                aria-label="Next"
                            >
                                <span className="material-symbols-outlined text-2xl">chevron_right</span>
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-8">
                                {solitudePractices.length > 0 && Array.from({ length: 1 }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSolitudeCarouselIndex(index)}
                                        className={`w-2 h-1 rounded-full transition-all ${index === solitudeCarouselIndex ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                }
            </section >

            {/* Residency Section */}
            < section className="px-4 md:px-10 py-16 pb-32 max-w-[1400px] mx-auto" >
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Residency
                        </h2>
                        <p className="text-earth-300 text-lg font-body">
                            Immersive programs and learning retreats
                        </p>
                    </div>
                    {/* View Toggle Button */}
                    <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
                        <button
                            onClick={() => setResidencyViewMode('grid')}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${residencyViewMode === 'grid'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">grid_view</span>
                            <span className="text-sm font-medium">Grid</span>
                        </button>
                        <button
                            onClick={() => setResidencyViewMode('carousel')}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${residencyViewMode === 'carousel'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">view_carousel</span>
                            <span className="text-sm font-medium">Carousel</span>
                        </button>
                    </div>
                </div>

                {/* Grid View */}
                {
                    residencyViewMode === 'grid' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {residencies.map((residency, index) => (
                                <CarouselCard
                                    key={index}
                                    title={residency.title}
                                    description={residency.description}
                                    images={residency.images}
                                    icon={residency.icon}
                                    category={residency.category}
                                />
                            ))}
                        </div>
                    )
                }

                {/* Carousel View */}
                {
                    residencyViewMode === 'carousel' && (
                        <div className="relative">
                            <div
                                ref={residencyCarouselRef}
                                className="overflow-hidden w-full mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                <div
                                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(calc(-${residencyCarouselIndex} * ((100% - 4rem) / 3 + 2rem)))`,
                                        willChange: "transform",
                                    }}
                                >
                                    {residencies.map((residency, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0"
                                            style={{
                                                width: `calc((100% - 4rem) / 3)`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            <CarouselCard
                                                title={residency.title}
                                                description={residency.description}
                                                images={residency.images}
                                                icon={residency.icon}
                                                category={residency.category}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => setResidencyCarouselIndex(prev => prev === 0 ? residencies.length - 3 : prev - 1)}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                                aria-label="Previous"
                            >
                                <span className="material-symbols-outlined text-2xl">chevron_left</span>
                            </button>
                            <button
                                onClick={() => setResidencyCarouselIndex(prev => prev === residencies.length - 3 ? 0 : prev + 1)}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-earth-900/80 hover:bg-earth-900 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all backdrop-blur-sm border border-gold-500/30 hover:border-gold-500"
                                aria-label="Next"
                            >
                                <span className="material-symbols-outlined text-2xl">chevron_right</span>
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-8">
                                {Array.from({ length: residencies.length - 2 }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setResidencyCarouselIndex(index)}
                                        className={`w-2 h-1 rounded-full transition-all ${index === residencyCarouselIndex ? "bg-gold-500 w-8" : "bg-earth-100/50 hover:bg-earth-100/75"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                }
            </section >

            <Footer />
        </main >
    );
}
