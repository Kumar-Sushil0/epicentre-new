"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselCard from "../components/CarouselCard";
import ClosingSection from "../components/ClosingSection";

export default function BlogsPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const blogs = [
        {
            id: "silence-as-method",
            title: "Silence as Method",
            excerpt: "Why we prioritize removing noise over adding features. An exploration of architectural silence.",
            date: "Oct 12, 2025",
            readTime: "5 min read",
            category: "Philosophy",
            images: [
                "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ]
        },
        {
            id: "the-art-of-idleness",
            title: "The Art of Idleness",
            excerpt: "Reclaiming time from the cult of productivity. How doing nothing restores the self.",
            date: "Nov 03, 2025",
            readTime: "7 min read",
            category: "Wellness",
            images: [
                "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
                "https://images.unsplash.com/photo-1516962248409-5038089598bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
            ]
        },
        {
            id: "slow-food-slow-life",
            title: "Slow Food, Slow Life",
            excerpt: "From farm to table, the journey of nourishment at The Silent Club.",
            date: "Dec 15, 2025",
            readTime: "4 min read",
            category: "Dining",
            images: [
                "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1620338009756-1bf2095207fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
            ]
        },
        {
            id: "digital-detox-journal",
            title: "Notes from a Digital Detox",
            excerpt: "Guest journal: What happens when you disconnect for 72 hours straight.",
            date: "Jan 10, 2026",
            readTime: "6 min read",
            category: "Guest Stories",
            images: [
                "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
                "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ]
        },
        {
            id: "architecture-of-peace",
            title: "Architecture of Peace",
            excerpt: "Designing spaces that breathe. How our villas interact with the natural landscape.",
            date: "Jan 24, 2026",
            readTime: "5 min read",
            category: "Design",
            images: [
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
                "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
                "https://images.unsplash.com/photo-1516962248409-5038089598bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            ]
        },
        {
            id: "sounds-of-silence",
            title: "The Sounds of Silence",
            excerpt: "A field recording guide to the natural soundscape of our sanctuary.",
            date: "Feb 02, 2026",
            readTime: "3 min read",
            category: "Nature",
            images: [
                "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
            ]
        }
    ];

    const BlogListItem = ({ blog, index }: { blog: typeof blogs[0], index: number }) => {
        const isEven = index % 2 === 0;
        
        return (
            <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl border border-earth-700 group cursor-pointer mb-6">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={blog.images[0]}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 ${
                        isEven 
                            ? "bg-gradient-to-r from-black/90 via-black/50 to-transparent" 
                            : "bg-gradient-to-l from-black/90 via-black/50 to-transparent"
                    }`} />
                </div>

                {/* Content Overlay */}
                <div className={`absolute inset-0 p-6 flex ${isEven ? "justify-start" : "justify-end"} items-center`}>
                    <div className={`flex flex-col gap-3 max-w-lg ${isEven ? "text-left" : "text-right"}`}>
                        {/* Meta Information */}
                        <div className={`flex items-center gap-3 ${isEven ? "justify-start" : "justify-end"}`}>
                            <span className="text-xs px-3 py-1 bg-gold-500/20 backdrop-blur-sm text-gold-500 rounded-full font-medium border border-gold-500/30">
                                {blog.category}
                            </span>
                            <span className="text-[#e7dfd3]/80 text-sm">{blog.date}</span>
                            <span className="text-[#e7dfd3]/80 text-sm">•</span>
                            <span className="text-[#e7dfd3]/80 text-sm">{blog.readTime}</span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-gold-500 leading-tight group-hover:text-gold-400 transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            {blog.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-[#e7dfd3] text-sm md:text-base leading-relaxed font-body">
                            {blog.excerpt}
                        </p>
                        
                        {/* Read More Button */}
                        <div className="border-t border-gold-500/30 pt-3">
                            <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-earth-950 flex items-center gap-2 ${isEven ? "justify-start" : "justify-end"}`}>
                                Read More
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100  ">
            <Header />

            {/* Hero Section */}
            <section className="relative px-6 py-24 md:py-32 max-w-[1400px] mx-auto flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-6 font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Journal
                </h1>
                <p className="text-earth-300 max-w-2xl text-lg font-body leading-relaxed">
                    Reflections on silence, design, and the art of slowing down.
                </p>
            </section>

            {/* View Toggle */}
            <section className="px-4 lg:px-20 mb-8">
                <div className="max-w-[1400px] mx-auto flex justify-end">
                    <div className="flex items-center gap-2 bg-earth-800/50 rounded-lg p-1 border border-earth-700/50">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                viewMode === 'grid'
                                    ? 'bg-gold-500 text-earth-950'
                                    : 'text-earth-300 hover:text-gold-500'
                            }`}
                        >
                            <span className="material-symbols-outlined text-lg">grid_view</span>
                            Grid
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                viewMode === 'list'
                                    ? 'bg-gold-500 text-earth-950'
                                    : 'text-earth-300 hover:text-gold-500'
                            }`}
                        >
                            <span className="material-symbols-outlined text-lg">view_list</span>
                            List
                        </button>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="px-4 lg:px-20 pb-40">
                <div className="max-w-[1400px] mx-auto">
                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog, index) => (
                                <CarouselCard
                                    key={index}
                                    title={blog.title}
                                    description={blog.excerpt}
                                    images={blog.images}
                                    category={blog.category}
                                    price={blog.date} // Using price prop for Date
                                    userCount={blog.readTime} // Using userCount prop for Read time
                                    icon="edit_note"
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-6">
                            {blogs.map((blog, index) => (
                                <BlogListItem key={index} blog={blog} index={index} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <ClosingSection />
            <Footer />
        </main>
    );
}
