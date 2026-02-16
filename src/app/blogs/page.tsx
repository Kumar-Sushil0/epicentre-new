"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogHero from "../components/blogs/BlogHero";
import StoriesSection from "../components/stories/StoriesSection";
import { blogCategories } from "../content/blogs";

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

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100">
            <Header />
            <BlogHero />
            <div className="w-full px-16 py-12">
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
