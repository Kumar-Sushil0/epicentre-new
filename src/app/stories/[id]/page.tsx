"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function StoryDetailPage() {
    const params = useParams();
    const id = params.id as string;

    // Sample story data - in production, this would come from a database or API
    const story = {
        id: id,
        title: "Note",
        category: "Personal",
        categoryIcon: "person",
        description: "I kept saying I was overwhelmed.\nI wasn't.\nI was distracted.\nThe silence exposed the difference.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
        imageAlt: "Personal reflection",
        author: "Anonymous",
        date: "2024",
        fullContent: `The first day, I wrote a list of everything I needed to fix.

By the second day, I realized the list wasn't the problem.

The problem was that I kept adding to it without ever stopping to ask: what actually matters?

Silence didn't give me answers. It gave me space to stop performing productivity and start examining what I was avoiding.

I wasn't overwhelmed by tasks. I was overwhelmed by the narrative I'd built around them.

The moment I stopped justifying my busyness, the noise dropped.

What remained was simple. Uncomfortable, but simple.

I didn't need more time. I needed less interference.`,
        insights: [
            "Busyness is often a distraction from what we're avoiding",
            "Silence reveals the difference between urgency and importance",
            "The narrative we tell ourselves can be more overwhelming than the actual tasks"
        ],
        relatedCategory: "Personal",
    };

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100">
            <Header />

            {/* Hero Section with Image */}
            <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/60 to-transparent" />

                {/* Breadcrumb and Category */}
                <div className="absolute top-24 left-0 right-0 px-8 md:px-16">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/stories"
                            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors mb-4"
                        >
                            <span className="material-symbols-outlined text-xl">arrow_back</span>
                            <span className="text-sm font-medium">Back to Stories</span>
                        </Link>

                        <div className="flex items-center gap-2 mt-4">
                            <span className="material-symbols-outlined text-gold-500">{story.categoryIcon}</span>
                            <span className="text-gold-500 text-sm font-semibold uppercase tracking-wider">
                                {story.category}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-earth-100 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            {story.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex items-center gap-6 text-earth-300 text-sm">
                            {story.author && (
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">person</span>
                                    {story.author}
                                </span>
                            )}
                            {story.date && (
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">calendar_today</span>
                                    {story.date}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-8 md:px-16">
                <div className="max-w-4xl mx-auto">
                    {/* Initial Description */}
                    <div className="mb-12">
                        <p className="text-xl md:text-2xl leading-relaxed text-earth-200 font-light" style={{ whiteSpace: 'pre-line' }}>
                            {story.description}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent mb-12" />

                    {/* Full Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <div className="text-base md:text-lg leading-relaxed text-earth-300 space-y-6" style={{ whiteSpace: 'pre-line' }}>
                            {story.fullContent}
                        </div>
                    </div>

                    {/* Insights Section */}
                    {story.insights && story.insights.length > 0 && (
                        <div className="mt-16">
                            <div className="bg-earth-800/50 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8">
                                <h3 className="text-2xl font-semibold text-gold-500 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    Key Insights
                                </h3>
                                <ul className="space-y-4">
                                    {story.insights.map((insight, index) => (
                                        <li key={index} className="flex items-start gap-3 text-earth-300">
                                            <span className="material-symbols-outlined text-gold-500 text-xl mt-1">check_circle</span>
                                            <span className="text-base leading-relaxed">{insight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Quote/Reflection */}
                    <div className="mt-12">
                        <blockquote className="border-l-4 border-gold-500/50 pl-6 py-4 italic text-earth-300 text-lg">
                            "Silence does not force insight. It allows it."
                        </blockquote>
                    </div>

                    {/* Navigation */}
                    <div className="mt-16 pt-8 border-t border-earth-700">
                        <Link
                            href="/stories"
                            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors group"
                        >
                            <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            <span className="text-base font-medium">Explore More Stories</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
