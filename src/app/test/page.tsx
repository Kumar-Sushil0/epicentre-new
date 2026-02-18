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
          

           
{/* Solitude Section */}
            <section className={`w-full px-16 transition-all duration-300 ${solitudeExpanded ? 'py-16 mb-24' : 'pt-12 mb-6'}`}>
                <div className="flex items-center gap-4 cursor-pointer mb-6" onClick={() => setSolitudeExpanded(!solitudeExpanded)}>
                        <h2 className="text-3xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            01 — Solitude as a Service
                        </h2>
                        {!solitudeExpanded && (
                            <>
                                <div className="h-[1px] bg-earth-700 flex-grow"></div>
                                <span className="material-symbols-outlined text-gold-500 text-3xl">self_improvement</span>
                            </>
                        )}
                        <button className="text-gold-500 hover:text-gold-400 transition-colors">
                            <span className="material-symbols-outlined text-3xl">
                                {solitudeExpanded ? 'expand_less' : 'expand_more'}
                            </span>
                        </button>
                        {solitudeExpanded && <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700 ml-auto">
                            <button
                                onClick={(e) => { e.stopPropagation(); setSolitudeViewMode('carousel'); }}
                                className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${solitudeViewMode === 'carousel'
                                    ? 'bg-gold-500 text-earth-900'
                                    : 'text-earth-300 hover:text-gold-500'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">view_carousel</span>
                                <span className="text-sm font-normal">Carousel</span>
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setSolitudeViewMode('grid'); }}
                                className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${solitudeViewMode === 'grid'
                                    ? 'bg-gold-500 text-earth-900'
                                    : 'text-earth-300 hover:text-gold-500'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">grid_view</span>
                                <span className="text-sm font-normal">Grid</span>
                            </button>
                        </div>}
                </div>

                {solitudeExpanded && (
                    <div className="space-y-6">
                        <div className="space-y-4 mb-8">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Deep work
                                </span>
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Decision space
                                </span>
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Writing
                                </span>
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Cognitive reset
                                </span>
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Personal recalibration
                                </span>
                            </div>
                            <p className="text-earth-300 text-base leading-relaxed">
                                Self-directed silence within protected conditions.
                            </p>
                            
                        </div>

                        
                    </div>
                )}

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


            {/* Expression Section */}
            <section className={`w-full px-16 transition-all duration-300 ${expressionExpanded ? 'py-16 mb-24' : 'mb-6'}`}>
                <div className="flex items-center gap-4 cursor-pointer mb-6" onClick={() => setExpressionExpanded(!expressionExpanded)}>
                        <h2 className="text-3xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            02 — Experiment as a Service
                        </h2>
                        {!expressionExpanded && (
                            <>
                                <div className="h-[1px] bg-earth-700 flex-grow"></div>
                                <span className="material-symbols-outlined text-gold-500 text-3xl">science</span>
                            </>
                        )}
                        <button className="text-gold-500 hover:text-gold-400 transition-colors">
                            <span className="material-symbols-outlined text-3xl">
                                {expressionExpanded ? 'expand_less' : 'expand_more'}
                            </span>
                        </button>
                        {expressionExpanded && <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700 ml-auto">
                            <button
                                onClick={(e) => { e.stopPropagation(); setExpressionViewMode('carousel'); }}
                                className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${expressionViewMode === 'carousel'
                                    ? 'bg-gold-500 text-earth-900'
                                    : 'text-earth-300 hover:text-gold-500'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">view_carousel</span>
                                <span className="text-sm font-normal">Carousel</span>
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setExpressionViewMode('grid'); }}
                                className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${expressionViewMode === 'grid'
                                    ? 'bg-gold-500 text-earth-900'
                                    : 'text-earth-300 hover:text-gold-500'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">grid_view</span>
                                <span className="text-sm font-normal">Grid</span>
                            </button>
                        </div>}
                </div>

                {expressionExpanded && (
                    <div className="space-y-6">
                        <div className="space-y-4 mb-8">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Prototyping thoughts
                                </span>
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Concept validation
                                </span>
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Controlled interaction
                                </span>
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Strategic exploration
                                </span>
                            </div>
                            <p className="text-earth-300 text-base leading-relaxed">
                                Structured environments for testing ideas without performance pressure.
                            </p>
                            
                        </div>

                       
                    </div>
                )}

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

            

            {/* Residency Section */}
            <section className={`w-full px-16 transition-all duration-300 ${residencyExpanded ? 'py-16 mb-24' : 'mb-6'}`}>
                <div className="flex items-center gap-4 cursor-pointer mb-6" onClick={() => setResidencyExpanded(!residencyExpanded)}>
                        <h2 className="text-3xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            03 — Residency as a Service
                        </h2>
                        {!residencyExpanded && (
                            <>
                                <div className="h-[1px] bg-earth-700 flex-grow"></div>
                                <span className="material-symbols-outlined text-gold-500 text-3xl">school</span>
                            </>
                        )}
                        <button className="text-gold-500 hover:text-gold-400 transition-colors">
                            <span className="material-symbols-outlined text-3xl">
                                {residencyExpanded ? 'expand_less' : 'expand_more'}
                            </span>
                        </button>
                        {residencyExpanded && <div className="flex gap-2 bg-earth-800 p-1 rounded-lg border border-earth-700 ml-auto">
                            <button
                                onClick={(e) => { e.stopPropagation(); setResidencyViewMode('carousel'); }}
                                className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${residencyViewMode === 'carousel'
                                    ? 'bg-gold-500 text-earth-900'
                                    : 'text-earth-300 hover:text-gold-500'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">view_carousel</span>
                                <span className="text-sm font-normal">Carousel</span>
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setResidencyViewMode('grid'); }}
                                className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${residencyViewMode === 'grid'
                                    ? 'bg-gold-500 text-earth-900'
                                    : 'text-earth-300 hover:text-gold-500'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-xl">grid_view</span>
                                <span className="text-sm font-normal">Grid</span>
                            </button>
                        </div>}
                </div>

                {residencyExpanded && (
                    <div className="space-y-6">
                        <div className="space-y-4 mb-8">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Life direction shifts
                                </span>
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Complex decision clarity
                                </span>
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Cross-examination of ideas
                                </span>
                                <span className="px-3 py-1 bg-earth-800/50 border border-earth-700/50 rounded-full text-earth-300 text-sm">
                                    #Applied insight
                                </span>
                            </div>
                            <p className="text-earth-300 text-base leading-relaxed">
                                Multi-day immersion around a single high-stakes question.
                            </p>
                            
                        </div>

                       
                    </div>
                )}

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
