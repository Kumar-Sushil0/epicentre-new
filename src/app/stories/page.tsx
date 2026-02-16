"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StoriesHero from "../components/stories/StoriesHero";
import StoriesCategoryNav from "../components/stories/StoriesCategoryNav";
import StoriesSection from "../components/stories/StoriesSection";

export default function StoriesPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    personal: true,
    collective: false,
    direction: false,
    insight: false,
    stillness: false,
  });

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const storyCategories = [
    {
      id: "personal",
      title: "Personal",
      icon: "person",
      description: "Interior shifts experienced individually.\n\nReveals: Self-correction. Internal confrontation. Recognition without external input.\n\nInterpretation is personal. Nothing is prescribed.",
      stories: [
        {
          title: "Note",
          description: "I kept saying I was overwhelmed.\nI wasn't.\nI was distracted.\nThe silence exposed the difference.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
          imageAlt: "Personal reflection",
          author: "Anonymous",
          date: "2024",
          href: "/stories/personal-1",
        },
        {
          title: "Note",
          description: "No one here told me what to do.\nThat was uncomfortable at first.\nThen I realized —\nI already knew.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
          imageAlt: "Self-realization",
          author: "Anonymous",
          date: "2024",
          href: "/stories/personal-2",
        },
        {
          title: "Note",
          description: "I thought I needed confidence.\nWhat I needed was quiet.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
          imageAlt: "Quiet confidence",
          author: "Anonymous",
          date: "2024",
          href: "/stories/personal-3",
        },
      ],
    },
    {
      id: "collective",
      title: "Collective",
      icon: "groups",
      description: "What happens when silence is shared without performance.\n\nReveals: Presence without comparison. Connection without performance. Belonging without introduction.\n\nSilence does not isolate. It stabilizes.",
      stories: [
        {
          title: "Note",
          description: "Ten people in a room.\nNo one speaking.\nIt didn't feel awkward.\nIt felt disciplined.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp-yDz8bDOHDgf9xJbj0GvUszs0lHVc4U6p0TXmQLCdZ-dwhnDK6eTIt0Fqm27Qt4eJcpRYgZmPH5c2ok07pIZKm6EFwIWV2HAxf7PPO-nB4ILYwDvkk1P9LlQAzuHl9LHd8EZJz2i_O61QS8QyDfcRjadK3wfoZi1zAnSJMVmkFyGBWO4635QStA8dET3_wdgeBgosK141lBGk7iK8ELekhk349aDocnAmmMG1WCdYKBantBSw7VSeQfYK36scMVJCqV7mmfjDzkL",
          imageAlt: "Shared silence",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
        {
          title: "Note",
          description: "We ate together.\nNo phones.\nNo introductions.\nIt was the most honest interaction I've had in years.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
          imageAlt: "Honest connection",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
        {
          title: "Note",
          description: "Silence shared is different.\nIt removes comparison.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE2S4t-k87o3wGZq3teUUbUFBfJH2qACr54qKouo5_6HZkMWtzALctFOFE8XD4ngpfjaOVjy88JHRs5cn_OBpTJsbQgMQSpx70TkgQPSZ7uCSpEXQLC6Qj_Q4jJp7O02aJYeaE3tbYiXEQjlabdBI-sbAVeNv0DGE4hsGS4WoL60uuSFbHq-iQNxF4nG2uTNe9Nqhhe6gw2MF9XcNedUQbzEBoagQm5_9Tkq73LLzuCxBQSIbFcgaF8I7-5JKhpyQa9NcydKPSXmoS",
          imageAlt: "Shared experience",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
      ],
    },
    {
      id: "direction",
      title: "Direction",
      icon: "explore",
      description: "Clarity about decisions and priorities.\n\nReveals: Reduction. Focus. Subtraction of noise.\n\nDecisions surface when interference drops.",
      stories: [
        {
          title: "Note",
          description: "I arrived with five competing priorities.\nI left with one.\nThe other four were noise.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
          imageAlt: "Clear direction",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
        {
          title: "Note",
          description: "The decision I postponed for six months\ntook fifteen quiet minutes.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
          imageAlt: "Quick decision",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
        {
          title: "Note",
          description: "Clarity wasn't dramatic.\nIt was subtraction.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
          imageAlt: "Clarity through subtraction",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
      ],
    },
    {
      id: "insight",
      title: "Insight",
      icon: "lightbulb",
      description: "Cognitive reframing and internal correction.\n\nReveals: Narrative awareness. Distorted assumptions. Self-authorship.\n\nThe correction is internal. No one delivers it.",
      stories: [
        {
          title: "Note",
          description: "I confuse busyness with progress.\nSilence corrected that.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
          imageAlt: "Insight moment",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
        {
          title: "Note",
          description: "My problem wasn't external.\nIt was narrative.\nI was telling myself the wrong story.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
          imageAlt: "Narrative shift",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
        {
          title: "Note",
          description: "Advice multiplies confusion.\nAttention reduces it.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
          imageAlt: "Attention over advice",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
      ],
    },
    {
      id: "stillness",
      title: "Stillness",
      icon: "self_improvement",
      description: "Moments where nothing dramatic happened — but something settled.\n\nReveals: Pace recalibration. Mental deceleration. Emotional stabilization.\n\nSilence does not force insight. It allows it.",
      stories: [
        {
          title: "Note",
          description: "Day two felt loud.\nDay three felt slow.\nDay four felt precise.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
          imageAlt: "Stillness progression",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
        {
          title: "Note",
          description: "Nothing happened.\nThat was the point.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
          imageAlt: "Nothing happening",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
        {
          title: "Note",
          description: "I stopped looking for a breakthrough.\nThat's when things aligned.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
          imageAlt: "Natural alignment",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100">
      <Header />
      <StoriesHero />
      <StoriesCategoryNav />
      <div className="w-full px-16 py-12">
        {storyCategories.map((category) => (
          <section
            key={category.id}
            className={`transition-all duration-300 ${expandedSections[category.id] ? 'mb-24' : 'mb-6'}`}
          >
            <StoriesSection
              {...category}
              expanded={expandedSections[category.id]}
              onToggle={() => toggleSection(category.id)}
            />
          </section>
        ))}
      </div>
      <Footer />
    </main>
  );
}
