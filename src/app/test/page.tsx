"use client";

import { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselCard from "../components/CarouselCard";
import TestHero from "../components/test/TestHero";
import TestPhilosophy from "../components/test/TestPhilosophy";
import { experiences } from "../content/experiences";
import { expressionPillars } from "../content/expression";
import { solitudePractices } from "../content/solitude";
import { residencies } from "../content/residency";

export default function TestPage() {
    const [wishlist, setWishlist] = useState<Set<string>>(new Set());
    const [cart, setCart] = useState<Set<string>>(new Set());
    
    // Collapsible section states
    const [experiencesExpanded, setExperiencesExpanded] = useState(false);
    const [expressionExpanded, setExpressionExpanded] = useState(false);
    const [solitudeExpanded, setSolitudeExpanded] = useState(false);
    const [residencyExpanded, setResidencyExpanded] = useState(false);

    const toggleWishlist = (id: string) => {
        setWishlist(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const addToCart = (id: string) => {
        setCart(prev => {
            const newSet = new Set(prev);
            newSet.add(id);
            return newSet;
        });
        alert(`Added to cart!`);
    };

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

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100">
            <Header />
            <TestHero />
            <TestPhilosophy />

            {/* Experiences Section */}
            {/* <section className={`w-full px-16 transition-all duration-300 ${experiencesExpanded ? 'py-16' : 'py-6'}`}>
                <div className={`flex justify-between items-end cursor-pointer ${experiencesExpanded ? 'mb-12' : ''}`} onClick={() => setExperiencesExpanded(!experiencesExpanded)}>
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Activities
                        </h2>
                        <h3 className="text-2xl text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Guided Not Continuous
                        </h3>
                        {experiencesExpanded && <p className="text-earth-300 text-lg font-body">
                            Guided sessions led by experienced practitioners.<br />
                            Offered by booking. Each stands alone.
                        </p>}
                    </div>
                    <div className="flex items-center gap-4">
                    {/* View Toggle Button */}
                    {/* {experiencesExpanded && <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
                        <button
                            onClick={(e) => { e.stopPropagation(); setExperiencesViewMode('carousel'); }}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${experiencesViewMode === 'carousel'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">view_carousel</span>
                            <span className="text-sm font-medium">Carousel</span>
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); setExperiencesViewMode('grid'); }}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${experiencesViewMode === 'grid'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">grid_view</span>
                            <span className="text-sm font-medium">Grid</span>
                        </button>
                    </div>}
                    {/* Expand/Collapse Icon */}
                    {/* <button className="text-gold-500 hover:text-gold-400 transition-colors">
                        <span className="material-symbols-outlined text-3xl">
                            {experiencesExpanded ? 'expand_less' : 'expand_more'}
                        </span>
                    </button>
                    </div>
                </div>

                {/* Grid View */}
                {/* {
                    experiencesExpanded && experiencesViewMode === 'grid' && (
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
                                    showActions={true}
                                    onAddToCart={() => addToCart(`experience-${index}`)}
                                    onToggleWishlist={() => toggleWishlist(`experience-${index}`)}
                                    isInWishlist={wishlist.has(`experience-${index}`)}
                                />
                            ))}
                        </div>
                    )
                }

                {/* Carousel View */}
                {/* {
                    experiencesExpanded && experiencesViewMode === 'carousel' && (
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
                                                showActions={true}
                                                onAddToCart={() => addToCart(`experience-${index}`)}
                                                onToggleWishlist={() => toggleWishlist(`experience-${index}`)}
                                                isInWishlist={wishlist.has(`experience-${index}`)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            {/* <button
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
                            {/* <div className="flex justify-center gap-2 mt-8">
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
            </section > */}

            {/* Expression Section */}
            <section className={`w-full px-16 transition-all duration-300 ${expressionExpanded ? 'py-16' : 'py-6'}`}>
                <div className={`flex justify-between items-end cursor-pointer ${expressionExpanded ? 'mb-12' : ''}`} onClick={() => setExpressionExpanded(!expressionExpanded)}>
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Experiments
                        </h2>
                        <h3 className="text-2xl  text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Unfinished by Design
                        </h3>
                        {expressionExpanded && <p className="text-earth-300 text-lg font-body">
                            Temporary sandboxes for individuals or groups exploring unfinished ideas.<br />
                            Built for testing, not presentation.
                        </p>}
                    </div>
                    <div className="flex items-center gap-4">
                    {/* View Toggle Button */}
                    {expressionExpanded && <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
                        <button
                            onClick={(e) => { e.stopPropagation(); setExpressionViewMode('carousel'); }}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${expressionViewMode === 'carousel'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">view_carousel</span>
                            <span className="text-sm font-medium">Carousel</span>
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); setExpressionViewMode('grid'); }}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${expressionViewMode === 'grid'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">grid_view</span>
                            <span className="text-sm font-medium">Grid</span>
                        </button>
                    </div>}
                    {/* Expand/Collapse Icon */}
                    <button className="text-gold-500 hover:text-gold-400 transition-colors">
                        <span className="material-symbols-outlined text-3xl">
                            {expressionExpanded ? 'expand_less' : 'expand_more'}
                        </span>
                    </button>
                    </div>
                </div>

                {/* Grid View */}
                {
                    expressionExpanded && expressionViewMode === 'grid' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {expressionPillars.map((pillar, index) => (
                                <CarouselCard
                                    key={index}
                                    title={pillar.title}
                                    description={pillar.description}
                                    images={pillar.images}
                                    icon={pillar.icon}
                                    href="/expression/details"
                                    showActions={true}
                                    onAddToCart={() => addToCart(`expression-${index}`)}
                                    onToggleWishlist={() => toggleWishlist(`expression-${index}`)}
                                    isInWishlist={wishlist.has(`expression-${index}`)}
                                />
                            ))}
                        </div>
                    )
                }

                {/* Carousel View */}
                {
                    expressionExpanded && expressionViewMode === 'carousel' && (
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
                                                showActions={true}
                                                onAddToCart={() => addToCart(`expression-${index}`)}
                                                onToggleWishlist={() => toggleWishlist(`expression-${index}`)}
                                                isInWishlist={wishlist.has(`expression-${index}`)}
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
            <section className={`w-full px-16 transition-all duration-300 ${solitudeExpanded ? 'py-16' : 'py-6'}`}>
                <div className={`flex justify-between items-end cursor-pointer ${solitudeExpanded ? 'mb-12' : ''}`} onClick={() => setSolitudeExpanded(!solitudeExpanded)}>
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Solitude
                        </h2>
                        <h3 className="text-2xl text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Time Without Instruction
                        </h3>
                        {solitudeExpanded && <p className="text-earth-300 text-lg font-body">
                            Self-led time using simple, nature-based resources.<br />
                            No instruction. No outcome.
                        </p>}
                    </div>
                    <div className="flex items-center gap-4">
                    {/* View Toggle Button */}
                    {solitudeExpanded && <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
                        <button
                            onClick={(e) => { e.stopPropagation(); setSolitudeViewMode('carousel'); }}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${solitudeViewMode === 'carousel'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">view_carousel</span>
                            <span className="text-sm font-medium">Carousel</span>
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); setSolitudeViewMode('grid'); }}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${solitudeViewMode === 'grid'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">grid_view</span>
                            <span className="text-sm font-medium">Grid</span>
                        </button>
                    </div>}
                    {/* Expand/Collapse Icon */}
                    <button className="text-gold-500 hover:text-gold-400 transition-colors">
                        <span className="material-symbols-outlined text-3xl">
                            {solitudeExpanded ? 'expand_less' : 'expand_more'}
                        </span>
                    </button>
                    </div>
                </div>

                {/* Grid View */}
                {
                    solitudeExpanded && solitudeViewMode === 'grid' && (
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
                                    showActions={true}
                                    onAddToCart={() => addToCart(`solitude-${index}`)}
                                    onToggleWishlist={() => toggleWishlist(`solitude-${index}`)}
                                    isInWishlist={wishlist.has(`solitude-${index}`)}
                                />
                            ))}
                        </div>
                    )
                }

                {/* Carousel View */}
                {
                    solitudeExpanded && solitudeViewMode === 'carousel' && (
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
                                                showActions={true}
                                                onAddToCart={() => addToCart(`solitude-${index}`)}
                                                onToggleWishlist={() => toggleWishlist(`solitude-${index}`)}
                                                isInWishlist={wishlist.has(`solitude-${index}`)}
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
            <section className={`w-full px-16 transition-all duration-300 ${residencyExpanded ? 'py-16' : 'py-6'}`}>
                <div className={`flex justify-between items-end cursor-pointer ${residencyExpanded ? 'mb-12' : ''}`} onClick={() => setResidencyExpanded(!residencyExpanded)}>
                    <div>
                        <h2 className="text-4xl font-bold text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Residency
                        </h2>
                        <h3 className="text-2xl text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            One Question Held Fully
                        </h3>
                        {residencyExpanded && <p className="text-earth-300 text-lg font-body">
                            Multi-day immersions centered around a single inquiry.<br />
                            Hosted with a selective group for sustained exploration.
                        </p>}
                    </div>
                    <div className="flex items-center gap-4">
                    {/* View Toggle Button */}
                    {residencyExpanded && <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700">
                        <button
                            onClick={(e) => { e.stopPropagation(); setResidencyViewMode('carousel'); }}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${residencyViewMode === 'carousel'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">view_carousel</span>
                            <span className="text-sm font-medium">Carousel</span>
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); setResidencyViewMode('grid'); }}
                            className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${residencyViewMode === 'grid'
                                ? 'bg-gold-500 text-earth-900'
                                : 'text-earth-300 hover:text-gold-500'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">grid_view</span>
                            <span className="text-sm font-medium">Grid</span>
                        </button>
                    </div>}
                    {/* Expand/Collapse Icon */}
                    <button className="text-gold-500 hover:text-gold-400 transition-colors">
                        <span className="material-symbols-outlined text-3xl">
                            {residencyExpanded ? 'expand_less' : 'expand_more'}
                        </span>
                    </button>
                    </div>
                </div>

                {/* Grid View */}
                {
                    residencyExpanded && residencyViewMode === 'grid' && (
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
                                    showActions={true}
                                    onAddToCart={() => addToCart(`residency-${index}`)}
                                    onToggleWishlist={() => toggleWishlist(`residency-${index}`)}
                                    isInWishlist={wishlist.has(`residency-${index}`)}
                                />
                            ))}
                        </div>
                    )
                }

                {/* Carousel View */}
                {
                    residencyExpanded && residencyViewMode === 'carousel' && (
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
                                                showActions={true}
                                                onAddToCart={() => addToCart(`residency-${index}`)}
                                                onToggleWishlist={() => toggleWishlist(`residency-${index}`)}
                                                isInWishlist={wishlist.has(`residency-${index}`)}
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
