"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { blogPosts } from "../../content/blogPosts";

export default function BlogDetailPage() {
    const params = useParams();
    const id = params.id as string;
    
    const blog = blogPosts[id];

    if (!blog) {
        return (
            <main className="min-h-screen bg-earth-900 text-earth-100">
                <Header />
                <div className="w-full px-16 py-32 text-center">
                    <h1 className="text-3xl font-normal text-gold-500 mb-4">Blog Not Found</h1>
                    <p className="text-earth-300">The blog post you're looking for doesn't exist.</p>
                    <Link href="/blogs" className="inline-block mt-6 text-gold-500 hover:text-gold-400">
                        ← Back to Blogs
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100">
            <Header />

            {/* Hero Section with Image */}
            <section className="relative h-[60vh] min-h-[500px]">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${blog.image})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/80 to-earth-900"></div>
                </div>
                
                <div className="relative h-full flex items-end">
                    <div className="w-full px-16 pb-16">
                        <div className="mb-4">
                            <Link href="/blogs" className="text-gold-500 hover:text-gold-400 text-sm">
                                ← Back to Blogs
                            </Link>
                        </div>
                        <div className="mb-4">
                            <span className="text-gold-500 text-sm font-medium">{blog.category}</span>
                        </div>
                        <h1 className="text-3xl font-normal text-earth-100 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            {blog.title}
                        </h1>
                        <p className="text-xl text-earth-300 mb-6">
                            {blog.subtitle}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-earth-400">
                            <span>{blog.author}</span>
                            <span>•</span>
                            <span>{blog.date}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <article className="w-full px-16 py-16">
                <div className="prose prose-invert prose-lg max-w-none">
                    {blog.content.map((paragraph, index) => (
                        <p key={index} className="text-earth-200 leading-relaxed mb-4 text-lg">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Navigation */}
                <div className="mt-16 pt-8 border-t border-earth-700">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors"
                    >
                        <span>←</span>
                        <span className="text-base font-medium">Explore More Articles</span>
                    </Link>
                </div>
            </article>

            <Footer />
        </main>
    );
}
