"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import CarouselCard from "../components/CarouselCard";
import TestHero from "../components/services/ServicesHero";
import TestPhilosophy from "../components/services/ServicesPhilosophy";
import { experiences } from "../content/experiences";
import { expressionPillars } from "../content/expression";
import { solitudePractices } from "../content/solitude";
import { residencies } from "../content/residency";
import RequestConversation from "../components/RequestConversation";

const breadcrumbItems = [
  { label: "Services", href: "/services" }
];

export default function TestPage() {
    const [wishlist, setWishlist] = useState<Set<string>>(new Set());
    const [cart, setCart] = useState<Set<string>>(new Set());

    // Collapsible section states
    const [experiencesExpanded, setExperiencesExpanded] = useState(false);
    const [expressionExpanded, setExpressionExpanded] = useState(false);
    const [solitudeExpanded, setSolitudeExpanded] = useState(false);
    const [residencyExpanded, setResidencyExpanded] = useState(false);

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100">
            <Header />
            <Breadcrumb items={breadcrumbItems} />
            <TestHero />
          

           
{/* Solitude Section */}
            <section className={`w-full px-4 md:px-16 transition-all duration-300 ${solitudeExpanded ? 'mb-24' : 'pt-12 mb-6'}`}>
                <div className="flex items-center gap-4 cursor-pointer mb-6" onClick={() => setSolitudeExpanded(!solitudeExpanded)}>
                        <h2 className="text-2xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            01. Solitude as a Service
                        </h2>
                        <div className="h-[1px] bg-earth-700 flex-grow"></div>
                        <span className="material-symbols-outlined text-gold-500 text-3xl">self_improvement</span>
                        <button className="text-gold-500 hover:text-gold-400 transition-colors">
                            <span className="material-symbols-outlined text-3xl">
                                {solitudeExpanded ? 'expand_less' : 'expand_more'}
                            </span>
                        </button>
                </div>

                {solitudeExpanded && (
                    <div className="space-y-6">
                        <div className="space-y-4 mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-earth-300 text-sm md:text-base font-body">
                                {/* Col 1: intro + heading */}
                                <div className="space-y-2">
                                    <p className="font-medium text-gold-500">
                                        Weekdays | Full Silence
                                    </p>
                                    <p className="text-base md:text-lg leading-relaxed font-medium text-[#e7dfd3]">
                                        A deliberately structured environment where you step away from noise, keep your own time, and remain unobserved .
                                    </p>
                                </div>

                                {/* Col 2: weekday context + first bullet list (vertical) */}
                                <div className="space-y-2">
                                    <p className="font-medium text-[#e7dfd3]">
                                        Weekdays are reserved for uninterrupted silence.
                                    </p>
                                    <div className="space-y-1">
                                        <div className="flex items-start gap-2">
                                            <span className="mt-1 text-gold-500">•</span>
                                            <span>No scheduled interaction.</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="mt-1 text-gold-500">•</span>
                                            <span>No shared programming.</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="mt-1 text-gold-500">•</span>
                                            <span>No performance.</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Col 3: estate context + second bullet list (vertical) */}
                                <div className="space-y-2">
                                    <p className="font-medium text-[#e7dfd3]">
                                        You occupy the estate independently.
                                    </p>
                                    <div className="space-y-1">
                                        <div className="flex items-start gap-2">
                                            <span className="mt-1 text-gold-500">•</span>
                                            <span>Full withdrawal.</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="mt-1 text-gold-500">•</span>
                                            <span>Self-directed.</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="mt-1 text-gold-500">•</span>
                                            <span>Unobserved.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Grid View */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solitudePractices.map((practice, index) => (
                                <CarouselCard
                                    key={index}
                                    title={practice.title}
                                    description={practice.description}
                                    images={practice.images}
                                    icon={practice.icon}
                                    category={practice.category}
                                    href="/solitude/details"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </section >

            {/* Expression Section */}
            <section className={`w-full px-4 md:px-16 transition-all duration-300 ${expressionExpanded ? 'mb-24' : 'mb-6'}`}>
                <div className="flex items-center gap-4 cursor-pointer mb-6" onClick={() => setExpressionExpanded(!expressionExpanded)}>
                        <h2 className="text-2xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            02. Experiment as a Service
                        </h2>
                        <div className="h-[1px] bg-earth-700 flex-grow"></div>
                        <span className="material-symbols-outlined text-gold-500 text-3xl">science</span>
                        <button className="text-gold-500 hover:text-gold-400 transition-colors">
                            <span className="material-symbols-outlined text-3xl">
                                {expressionExpanded ? 'expand_less' : 'expand_more'}
                            </span>
                        </button>
                </div>

                {expressionExpanded && (
                    <div className="space-y-6">
                        <div className="space-y-4 mb-8">
                            <p className="text-earth-300 text-base leading-relaxed">
                                Structured environments for testing ideas without performance pressure.
                            </p>

                            <div className="space-y-3 text-earth-300 text-sm md:text-base font-body">
                                <p className="font-medium text-[#e7dfd3]">
                                    Weekends | Observed Silence | 10–12 Max
                                </p>
                                <p>
                                    Weekends are reserved for structured, small-group inquiry.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-2">
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>Silence remains the default condition.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>Interaction is time-bound and intentional.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>No workshops, seminars, or panels.</span>
                                    </div>
                                </div>
                                <p className="mt-3">
                                    You engage within a defined perimeter.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-2">
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>One anchoring question.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>Curated participants.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>No stage dynamics.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Grid View */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {expressionPillars.map((pillar, index) => (
                                <CarouselCard
                                    key={index}
                                    title={pillar.title}
                                    description={pillar.description}
                                    images={pillar.images}
                                    icon={pillar.icon}
                                    href="/expression/details"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </section >

            

            {/* Residency Section */}
            <section className={`w-full px-4 md:px-16 transition-all duration-300 ${residencyExpanded ? 'mb-24' : 'mb-6'}`}>
                <div className="flex items-center gap-4 cursor-pointer mb-6" onClick={() => setResidencyExpanded(!residencyExpanded)}>
                        <h2 className="text-2xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            03. Residency as a Service
                        </h2>
                        <div className="h-[1px] bg-earth-700 flex-grow"></div>
                        <span className="material-symbols-outlined text-gold-500 text-3xl">school</span>
                        <button className="text-gold-500 hover:text-gold-400 transition-colors">
                            <span className="material-symbols-outlined text-3xl">
                                {residencyExpanded ? 'expand_less' : 'expand_more'}
                            </span>
                        </button>
                </div>

                {residencyExpanded && (
                    <div className="space-y-6">
                        <div className="space-y-4 mb-8">
                            <p className="text-earth-300 text-base leading-relaxed">
                                Multi-day immersion around a single high-stakes question.
                            </p>

                            <div className="space-y-3 text-earth-300 text-sm md:text-base font-body">
                                <p className="font-medium text-[#e7dfd3]">
                                    Weekends | Observed Silence | 10–12 Max
                                </p>
                                <p>
                                    Weekends are reserved for structured, small-group inquiry.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-2">
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>Silence remains the default condition.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>Interaction is time-bound and intentional.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>No workshops, seminars, or panels.</span>
                                    </div>
                                </div>
                                <p className="mt-3">
                                    You engage within a defined perimeter.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-2">
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>One anchoring question.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>Curated participants.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="mt-1 text-gold-500">•</span>
                                        <span>No stage dynamics.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Grid View */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {residencies.map((residency, index) => (
                                <CarouselCard
                                    key={index}
                                    title={residency.title}
                                    description={residency.description}
                                    images={residency.images}
                                    icon={residency.icon}
                                    category={residency.category}
                                    href="/residency/details"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </section >

            <RequestConversation />
            <Footer />
        </main >
    );
}
