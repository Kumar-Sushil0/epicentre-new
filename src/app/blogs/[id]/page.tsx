"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetailPage() {
    const params = useParams();
    const id = params.id as string;

    // Sample blog data - in production, this would come from a database or API
    const blog = {
        id: id,
        title: "You Don't Lack Answers. You Lack Attention.",
        category: "Silence & Attention",
        categoryIcon: "volume_off",
        subtitle: "Why clarity is not intelligence — it's continuity.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
        imageAlt: "Attention and clarity",
        author: "The Silent Club",
        date: "2024",
        readTime: "8 min read",
        fullContent: `Most people assume clarity comes from gathering more information.

More books. More podcasts. More frameworks. More perspectives.

But clarity isn't an accumulation problem. It's an attention problem.

You don't need more input. You need uninterrupted continuity with what you already know.

## The Fragmentation Problem

Modern life is engineered for interruption.

Notifications. Meetings. Messages. Tabs. Feeds. Pings.

Each one pulls you out of sustained thought and into reactive mode.

The result? You never stay with a single question long enough to resolve it.

You mistake motion for progress. Consumption for understanding.

## Clarity Is Continuity

Clarity doesn't arrive in a flash. It emerges through sustained, uninterrupted attention.

When you hold a question in your mind without distraction, patterns surface. Contradictions resolve. Noise drops.

This isn't meditation. It's not mystical. It's cognitive.

Your brain needs time to process. To connect. To synthesize.

Interruption prevents that process from completing.

## What Silence Does

Silence isn't the absence of sound. It's the absence of interference.

No input. No performance. No external validation.

Just you and the question.

When you remove the noise, what remains is what you already knew — but couldn't access through the static.

## The Practice

This isn't about retreating from the world. It's about creating structural conditions for sustained thought.

Block time. Remove devices. Sit with the question.

Don't journal. Don't optimize. Don't perform insight.

Just hold the question. Let it settle.

Clarity will surface — not because you forced it, but because you stopped interrupting it.`,
        keyTakeaways: [
            "Clarity is not about gathering more information — it's about sustained attention",
            "Interruption prevents your brain from completing the synthesis process",
            "Silence creates the conditions for clarity to emerge naturally",
            "You already have the answers — you just need uninterrupted time to access them"
        ],
        relatedBlogs: [
            {
                title: "Why Stimulation Is the Default Setting of Modern Life",
                href: "/blogs/stimulation-default"
            },
            {
                title: "Silence Is a Design Tool, Not a Spiritual Practice",
                href: "/blogs/silence-design-tool"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100">
            <Header />

            {/* Hero Section with Image */}
            <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.imageAlt}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/70 to-earth-900/30" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between px-8 md:px-16 py-12">
                    {/* Breadcrumb and Category */}
                    <div className="max-w-4xl mx-auto w-full">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors"
                        >
                            <span className="material-symbols-outlined text-xl">arrow_back</span>
                            <span className="text-sm font-medium">Back to Blogs</span>
                        </Link>

                        <div className="flex items-center gap-2 mt-6">
                            <span className="material-symbols-outlined text-gold-500">{blog.categoryIcon}</span>
                            <span className="text-gold-500 text-sm font-semibold uppercase tracking-wider">
                                {blog.category}
                            </span>
                        </div>
                    </div>

                    {/* Title and Meta */}
                    <div className="max-w-4xl mx-auto w-full">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-earth-100 mb-4 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            {blog.title}
                        </h1>

                        {blog.subtitle && (
                            <p className="text-xl md:text-2xl text-gold-500 mb-6 font-light">
                                {blog.subtitle}
                            </p>
                        )}

                        {/* Meta Info */}
                        <div className="flex items-center gap-6 text-earth-300 text-sm">
                            {blog.author && (
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">person</span>
                                    {blog.author}
                                </span>
                            )}
                            {blog.date && (
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">calendar_today</span>
                                    {blog.date}
                                </span>
                            )}
                            {blog.readTime && (
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">schedule</span>
                                    {blog.readTime}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-8 md:px-16">
                <div className="max-w-3xl mx-auto">
                    {/* Main Content */}
                    <article className="prose prose-invert prose-lg max-w-none">
                        <div
                            className="text-base md:text-lg leading-relaxed text-earth-300 space-y-6"
                            dangerouslySetInnerHTML={{ __html: blog.fullContent.replace(/\n\n/g, '</p><p>').replace(/## /g, '<h2 class="text-2xl font-bold text-gold-500 mt-12 mb-6" style="font-family: Outfit, sans-serif;">').replace(/\n/g, '<br/>') }}
                        />
                    </article>

                    {/* Key Takeaways */}
                    {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
                        <div className="mt-16">
                            <div className="bg-earth-800/50 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8">
                                <h3 className="text-2xl font-semibold text-gold-500 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    Key Takeaways
                                </h3>
                                <ul className="space-y-4">
                                    {blog.keyTakeaways.map((takeaway, index) => (
                                        <li key={index} className="flex items-start gap-3 text-earth-300">
                                            <span className="material-symbols-outlined text-gold-500 text-xl mt-1 flex-shrink-0">check_circle</span>
                                            <span className="text-base leading-relaxed">{takeaway}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent my-16" />

                    {/* Related Blogs */}
                    {blog.relatedBlogs && blog.relatedBlogs.length > 0 && (
                        <div className="mt-12">
                            <h3 className="text-xl font-semibold text-gold-500 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Related Reading
                            </h3>
                            <div className="space-y-4">
                                {blog.relatedBlogs.map((related, index) => (
                                    <Link
                                        key={index}
                                        href={related.href}
                                        className="block group"
                                    >
                                        <div className="flex items-center gap-3 text-earth-300 hover:text-gold-500 transition-colors">
                                            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                            <span className="text-base">{related.title}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="mt-16 pt-8 border-t border-earth-700">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors group"
                        >
                            <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            <span className="text-base font-medium">Explore More Articles</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
