"use client";

import { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselCard from "../components/CarouselCard";
import TestHero from "../components/test/TestHero";
import TestPhilosophy from "../components/test/TestPhilosophy";
import WellnessHero from "../components/wellness/WellnessHero";
import { wellnessPractices } from "../content/wellness";
import { experiences } from "../content/experiences";
import { expressionPillars } from "../content/expression";
import { solitudePractices } from "../content/solitude";
import { residencies } from "../content/residency";

export default function TestPage() {
    const [wellnessViewMode, setWellnessViewMode] = useState<'grid' | 'carousel'>('carousel');
    const [wellnessCarouselIndex, setWellnessCarouselIndex] = useState(0);
    const wellnessCarouselRef = useRef<HTMLDivElement>(null);

    const [experiencesViewMode, setExperiencesViewMode] = useState<'grid' | 'carousel'>('carousel');
    const [experiencesCarouselIndex, setExperiencesCarouselIndex] = useState(0);
    const experiencesCarouselRef = useRef<HTMLDivElement>(null);

    const [expressionViewMode, setExpressionViewMode] = useState<'grid' | 'carousel'>('carousel');
    const [expressionCarouselIndex, setExpressionCarouselIndex] = useState(0);
    const expressionCarouselRef = useRef<HTMLDivElement>(null);

    const [solitudeViewMode, setSolitudeViewMode] = useState<'grid' | 'carousel'>('carousel');
    const [solitudeCarouselIndex, setSolitudeCarouselIndex] = useState(0);
    const solitudeCarouselRef = useRef<HTMLDivElement>(null);

    const [residencyViewMode, setResidencyViewMode] = useState<'grid' | 'carousel'>('carousel');
    const [residencyCarouselIndex, setResidencyCarouselIndex] = useState(0);
    const residencyCarouselRef = useRef<HTMLDivElement>(null);
    // Wellness Section Data - All 6 cards from wellness page
    

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100">
            <Header />
            <TestHero />
            <TestPhilosophy />

            {/* Wellness Section */}
            
            <section className="w-full px-16 py-16">
                
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Wellness
                        </h2>
                        <h3 className="text-2xl text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Stability Before Insight
                        </h3>
                        <p className="text-earth-300 text-lg font-body">
                            Always-available practices that support the body and nervous system.<br />
                            Unscheduled. Untracked.
                        </p>
                    </div>
                    {/* View Toggle Button */}
                    <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
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
            < section className="w-full px-16 py-16" >
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Experiences
                        </h2>
                        <h3 className="text-2xl text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Guided Not Continuous
                        </h3>
                        <p className="text-earth-300 text-lg font-body">
                            Guided sessions led by experienced practitioners.<br />
                            Offered by booking. Each stands alone.
                        </p>
                    </div>
                    {/* View Toggle Button */}
                    <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
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
            < section className="w-full px-16 py-16" >
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Expression
                        </h2>
                        <h3 className="text-2xl  text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Unfinished by Design
                        </h3>
                        <p className="text-earth-300 text-lg font-body">
                            Temporary sandboxes for individuals or groups exploring unfinished ideas.<br />
                            Built for testing, not presentation.
                        </p>
                    </div>
                    {/* View Toggle Button */}
                    <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
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
                                    href="/expression/details"
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
                                                href="/expression/details"
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
            < section className="w-full px-16 py-16" >
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Solitude
                        </h2>
                        <h3 className="text-2xl text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Time Without Instruction
                        </h3>
                        <p className="text-earth-300 text-lg font-body">
                            Self-led time using simple, nature-based resources.<br />
                            No instruction. No outcome.
                        </p>
                    </div>
                    {/* View Toggle Button */}
                    <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
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
                                    href="/solitude/details"
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
                                                href="/solitude/details"
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
            < section className="w-full px-16 py-16" >
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Residency
                        </h2>
                        <h3 className="text-2xl text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            One Question Held Fully
                        </h3>
                        <p className="text-earth-300 text-lg font-body">
                            Multi-day immersions centered around a single inquiry.<br />
                            Hosted with a selective group for sustained exploration.
                        </p>
                    </div>
                    {/* View Toggle Button */}
                    <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
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
                                    href="/residency/details"
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
                                                href="/residency/details"
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
