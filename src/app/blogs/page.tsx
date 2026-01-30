"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselCard from "../components/CarouselCard";
import ClosingSection from "../components/ClosingSection";

export default function BlogsPage() {
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

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100 pt-[72px]">
            <Header />

            {/* Hero Section */}
            <section className="relative px-6 py-24 md:py-32 max-w-[1400px] mx-auto flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-serif text-gold-500 mb-6 font-bold" style={{ fontFamily: 'Trirong, serif' }}>
                    Journal
                </h1>
                <p className="text-earth-300 max-w-2xl text-lg font-body leading-relaxed">
                    Reflections on silence, design, and the art of slowing down.
                </p>
            </section>

            {/* Blog Grid */}
            <section className="px-4 lg:px-20 pb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
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
            </section>

            <ClosingSection />
            <Footer />
        </main>
    );
}
