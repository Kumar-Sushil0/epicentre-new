"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogHero from "../components/blogs/BlogHero";
import StoriesSection from "../components/stories/StoriesSection";

export default function BlogsPage() {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        silence: true,
        identity: false,
        environment: false,
        decision: false,
    });

    const toggleSection = (id: string) => {
        setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const blogCategories = [
        {
            id: "silence",
            title: "Silence & Attention",
            icon: "volume_off",
            description: "You Don't Lack Answers. You Lack Attention.\n\nWhy clarity is not intelligence — it's continuity.",
            stories: [
                {
                    title: "You Don't Lack Answers. You Lack Attention.",
                    description: "Why clarity is not intelligence — it's continuity.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
                    imageAlt: "Attention clarity",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/lack-attention",
                },
                {
                    title: "Why Stimulation Is the Default Setting of Modern Life",
                    description: "How engineered noise fragments thinking.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
                    imageAlt: "Modern stimulation",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/stimulation-default",
                },
                {
                    title: "Silence Is a Design Tool, Not a Spiritual Practice",
                    description: "Reframing silence as infrastructure.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
                    imageAlt: "Silence as design",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/silence-design-tool",
                },
            ],
        },
        {
            id: "identity",
            title: "Identity & Sovereignty",
            icon: "person",
            description: "What Remains When Your Roles Pause?\n\nOn suspending external identity.",
            stories: [
                {
                    title: "What Remains When Your Roles Pause?",
                    description: "On suspending external identity.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
                    imageAlt: "Identity pause",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/roles-pause",
                },
                {
                    title: "Identity Is Usually Inherited. It Can Be Designed.",
                    description: "Introducing authorship without preaching.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
                    imageAlt: "Designed identity",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/identity-designed",
                },
                {
                    title: "Authority Is Not Borrowed. It Is Authored.",
                    description: "The psychological basis of sovereignty.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
                    imageAlt: "Authored authority",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/authority-authored",
                },
            ],
        },
        {
            id: "environment",
            title: "Environment & Structure",
            icon: "architecture",
            description: "Why Environment Shapes Behavior More Than Intention\n\nArchitecture > motivation.",
            stories: [
                {
                    title: "Why Environment Shapes Behavior More Than Intention",
                    description: "Architecture > motivation.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
                    imageAlt: "Environment shapes behavior",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/environment-shapes-behavior",
                },
                {
                    title: "Why Fewer Choices Create More Clarity",
                    description: "Decision fatigue & structural reduction.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
                    imageAlt: "Fewer choices",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/fewer-choices-clarity",
                },
                {
                    title: "Agreement Is Stronger Than Enforcement",
                    description: "Why the Club model works.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
                    imageAlt: "Agreement over enforcement",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/agreement-enforcement",
                },
            ],
        },
        {
            id: "decision",
            title: "Decision & Clarity",
            icon: "explore",
            description: "Clarity Is Subtraction, Not Addition\n\nWhy more input rarely solves uncertainty.",
            stories: [
                {
                    title: "Clarity Is Subtraction, Not Addition",
                    description: "Why more input rarely solves uncertainty.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
                    imageAlt: "Clarity through subtraction",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/clarity-subtraction",
                },
                {
                    title: "Why Most Big Decisions Are Delayed, Not Difficult",
                    description: "On avoidance vs ambiguity.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDZ8o-JGgFjqHv3XthGLGz519OyZYTh_sWwcvBjdQQIzolyCXSsUjdTvivWDhmcltlTFvD71iGQr0I77PCKoXLuqGYJ22zlf__h8EMkv791VfiUJnEUc4ykgWQtr9O5EBzFF-MJ07jrYOwEkyg5xEl0X9ayH0rYcb9diiyN68oouAfDUUeOTFPIBjvnYN8xELQ9oCDNI2lBDINuvnt6NQPsVbvR-t4c4gZrshZ1RXGQrACrjJyPGfT62LIZeuaMXegi9fS2KKrZ35",
                    imageAlt: "Delayed decisions",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/decisions-delayed",
                },
                {
                    title: "Silence Does Not Change You. It Reveals You.",
                    description: "A final integrative piece.",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
                    imageAlt: "Silence reveals",
                    author: "The Silent Club",
                    date: "2024",
                    href: "/blogs/silence-reveals",
                },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100  ">
            <Header />
            <BlogHero />
            <div className="max-w-[1200px] mx-auto px-4 sm:px-10 py-12">
                {blogCategories.map((category) => (
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
