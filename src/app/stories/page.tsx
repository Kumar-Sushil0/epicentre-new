import Header from "../components/Header";
import Footer from "../components/Footer";
import StoriesHero from "../components/stories/StoriesHero";
import StoriesCategoryNav from "../components/stories/StoriesCategoryNav";
import StoriesSection from "../components/stories/StoriesSection";

export default function StoriesPage() {
  const storyCategories = [
    {
      id: "personal",
      title: "Personal Stories",
      icon: "person",
      stories: [
        {
          title: "Finding Stillness",
          description: "A journey of discovering inner peace through silence and self-reflection.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
          imageAlt: "Peaceful meditation scene",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
        {
          title: "The First Day",
          description: "What it feels like to step into silence for the first time.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
          imageAlt: "Sunrise over peaceful landscape",
          author: "Sarah M.",
          date: "2024",
          href: "/stories",
        },
        {
          title: "Returning Home",
          description: "How silence helped reconnect with what truly matters.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
          imageAlt: "Serene natural setting",
          author: "Michael K.",
          date: "2024",
          href: "/stories",
        },
      ],
    },
    {
      id: "collective",
      title: "Collective Experiences",
      icon: "groups",
      stories: [
        {
          title: "Shared Silence",
          description: "The power of being quiet together without needing to speak.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp-yDz8bDOHDgf9xJbj0GvUszs0lHVc4U6p0TXmQLCdZ-dwhnDK6eTIt0Fqm27Qt4eJcpRYgZmPH5c2ok07pIZKm6EFwIWV2HAxf7PPO-nB4ILYwDvkk1P9LlQAzuHl9LHd8EZJz2i_O61QS8QyDfcRjadK3wfoZi1zAnSJMVmkFyGBWO4635QStA8dET3_wdgeBgosK141lBGk7iK8ELekhk349aDocnAmmMG1WCdYKBantBSw7VSeQfYK36scMVJCqV7mmfjDzkL",
          imageAlt: "Group meditation",
          author: "Community",
          date: "2024",
          href: "/stories",
        },
        {
          title: "Evening Circles",
          description: "Stories from our evening gathering spaces where presence is shared.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
          imageAlt: "Evening gathering",
          author: "The Silent Club",
          date: "2024",
          href: "/stories",
        },
      ],
    },
    {
      id: "transformation",
      title: "Transformation",
      icon: "auto_awesome",
      stories: [
        {
          title: "Before and After",
          description: "How a week in silence changed everything.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE2S4t-k87o3wGZq3teUUbUFBfJH2qACr54qKouo5_6HZkMWtzALctFOFE8XD4ngpfjaOVjy88JHRs5cn_OBpTJsbQgMQSpx70TkgQPSZ7uCSpEXQLC6Qj_Q4jJp7O02aJYeaE3tbYiXEQjlabdBI-sbAVeNv0DGE4hsGS4WoL60uuSFbHq-iQNxF4nG2uTNe9Nqhhe6gw2MF9XcNedUQbzEBoagQm5_9Tkq73LLzuCxBQSIbFcgaF8I7-5JKhpyQa9NcydKPSXmoS",
          imageAlt: "Transformation journey",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
      ],
    },
    {
      id: "insights",
      title: "Insights",
      icon: "lightbulb",
      stories: [
        {
          title: "What Silence Teaches",
          description: "Lessons learned from extended periods of quiet observation.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
          imageAlt: "Insightful moment",
          author: "Various",
          date: "2024",
          href: "/stories",
        },
      ],
    },
    {
      id: "moments",
      title: "Moments",
      icon: "schedule",
      stories: [
        {
          title: "The First Sunrise",
          description: "Witnessing dawn in complete silence for the first time.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
          imageAlt: "Sunrise moment",
          author: "Anonymous",
          date: "2024",
          href: "/stories",
        },
      ],
    },
    {
      id: "reflections",
      title: "Reflections",
      icon: "psychology",
      stories: [
        {
          title: "On Presence",
          description: "Deep reflections on what it means to be fully present.",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
          imageAlt: "Reflective scene",
          author: "Various",
          date: "2024",
          href: "/stories",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
      <Header />
      <StoriesHero />
      <StoriesCategoryNav />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 py-12 flex flex-col gap-24">
        {storyCategories.map((category) => (
          <StoriesSection key={category.id} {...category} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
