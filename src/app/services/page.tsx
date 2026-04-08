"use client";

import { useState, useEffect } from "react";
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


const breadcrumbItems = [
  { label: "Services", href: "/services" }
];

type ServicesSectionId = "silence" | "solitude" | "expression" | "residency";

type ServiceCardItem = {
    title: string;
    description: string;
    images: string[];
    icon?: string;
    category?: string;
    href: string;
};

function InnerCollapsible({ title, preview, children }: { title: string; preview: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-2 border-gold-500/50 rounded-lg overflow-hidden">
            <button
                onClick={() => setOpen((p) => !p)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-earth-800/40 transition-colors"
            >
                <div className="flex-1 min-w-0 pr-3">
                    <p className="text-[#e7dfd3] font-semibold text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</p>
                    {!open && <p className="text-earth-500 text-xs mt-0.5 truncate">{preview}</p>}
                </div>
                <span className="material-symbols-outlined text-gold-500 text-xl shrink-0">
                    {open ? 'expand_less' : 'expand_more'}
                </span>
            </button>
            {open && <div className="px-4 pb-4 pt-1">{children}</div>}
        </div>
    );
}

function SolitudeTable() {
    const tracks = [
        { emoji: "🧭", name: "The Observer", theme: "Awareness", activities: ["Bird watching", "Nature mapping", "Stillness training"], tagline: "Learn to notice what most people miss." },
        { emoji: "🌌", name: "The Explorer", theme: "Perspective", activities: ["Stargazing", "Telescope work", "Night sky tracking"], tagline: "Zoom out far enough—everything changes." },
        { emoji: "🎣", name: "The Hunter", theme: "Focus", activities: ["Fishing / angling", "Patience training", "Environmental reading"], tagline: "Master the art of waiting without distraction." },
        { emoji: "🧠", name: "The Builder", theme: "Clarity", activities: ["Reading + synthesis", "Writing", "Thinking frameworks"], tagline: "Turn scattered thoughts into structured direction." },
        { emoji: "🏃", name: "The Athlete", theme: "Endurance", activities: ["Swim / cycle / strength", "Triathlon-style discipline"], tagline: "Push your body until your mind gets honest." },
        { emoji: "🧬", name: "The Restorer", theme: "Release", activities: ["Fascia training", "Mobility", "Body awareness"], tagline: "Unlock what your body has been holding onto." },
    ];
    return (
        <div className="w-full space-y-3">
            <div className="text-center space-y-1">
                <p className="text-gold-500 text-base font-normal" style={{ fontFamily: 'Outfit, sans-serif' }}>What Shifts</p>
                <p className="text-earth-400 text-sm">You don’t escape silence. You work through it.</p>
            </div>
            <div className="w-full overflow-x-auto rounded-lg border border-earth-600/60">
                <table className="w-full border-collapse text-xs" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    <thead>
                        <tr>
                            <th className="border border-earth-600/60 px-4 py-2 text-gold-500 font-medium text-left bg-earth-800/30">Track</th>
                            <th className="border border-earth-600/60 px-4 py-2 text-gold-500 font-medium text-left bg-earth-800/30">Theme</th>
                            <th className="border border-earth-600/60 px-4 py-2 text-gold-500 font-medium text-left bg-earth-800/30">Activities</th>
                            <th className="border border-earth-600/60 px-4 py-2 text-gold-500 font-medium text-left bg-earth-800/30">What It Does</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tracks.map((t) => (
                            <tr key={t.name}>
                                <td className="border border-earth-600/60 px-4 py-2 text-earth-200 whitespace-nowrap">{t.emoji} {t.name}</td>
                                <td className="border border-earth-600/60 px-4 py-2 text-gold-500/80">{t.theme}</td>
                                <td className="border border-earth-600/60 px-4 py-2 text-earth-300">{t.activities.join(", ")}</td>
                                <td className="border border-earth-600/60 px-4 py-2 text-earth-400 italic">{t.tagline}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-earth-400 text-xs text-center">Choose one. Or move between them. The silence stays the same.</p>
        </div>
    );
}

function SectionTable() {
    const headers = ["Day", "Check-in", "Check-out", "Duration", "Meals", "Price"];
    const rows = [
        ["Mon – Thu", "9:00 AM", "6:00 PM", "9 hrs", "Breakfast + Lunch", "₹1,000/person"],
        ["Fri – Sun", "8:00 AM", "8:00 PM", "12 hrs", "All meals included", "₹1,500/person"],
    ];
    return (
        <div className="w-full overflow-x-auto rounded-lg border border-earth-600/60">
            <table className="w-full border-collapse text-xs" style={{ fontFamily: 'Outfit, sans-serif', tableLayout: 'fixed' }}>
                <colgroup>
                    <col style={{ width: '16.666%' }} />
                    <col style={{ width: '16.666%' }} />
                    <col style={{ width: '16.666%' }} />
                    <col style={{ width: '16.666%' }} />
                    <col style={{ width: '16.666%' }} />
                    <col style={{ width: '16.67%' }} />
                </colgroup>
                <thead>
                    <tr>
                        {headers.map((h) => (
                            <th key={h} className="border border-earth-600/60 px-4 py-2 text-gold-500 font-medium text-left bg-earth-800/30">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, ri) => (
                        <tr key={ri}>
                            {row.map((cell, ci) => (
                                <td key={ci} className="border border-earth-600/60 px-4 py-2 text-earth-300">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const PAGE_SIZE = 3;

function SectionCardCarousel({ items }: { items: ServiceCardItem[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (items.length <= PAGE_SIZE) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [items.length]);

    if (!items.length) return null;

    const prev = () => setCurrentIndex((p) => (p - 1 + items.length) % items.length);
    const next = () => setCurrentIndex((p) => (p + 1) % items.length);

    // Show 3 items starting from currentIndex (wrapping)
    const visible = [0, 1, 2].map((offset) => items[(currentIndex + offset) % items.length]);

    return (
        <div className="w-full">
            <div className="relative group/carousel">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {visible.map((item, i) => (
                        <div
                            key={`${item.title}-${i}`}
                            className="transition-opacity duration-700"
                        >
                            <CarouselCard
                                title={item.title}
                                description={item.description}
                                images={item.images}
                                icon={item.icon}
                                category={item.category}
                                href={item.href}
                            />
                        </div>
                    ))}
                </div>

                {items.length > PAGE_SIZE && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-earth-900/90 border border-gold-500/50 text-gold-500 hover:bg-earth-800 hover:border-gold-500 transition-all inline-flex items-center justify-center shadow-lg opacity-0 group-hover/carousel:opacity-100"
                            aria-label="Previous"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        <button
                            onClick={next}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-earth-900/90 border border-gold-500/50 text-gold-500 hover:bg-earth-800 hover:border-gold-500 transition-all inline-flex items-center justify-center shadow-lg opacity-0 group-hover/carousel:opacity-100"
                            aria-label="Next"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        {/* Dot indicators */}
                        <div className="flex justify-center gap-1.5 mt-3">
                            {items.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-gold-500 w-5' : 'bg-earth-600 w-1.5 hover:bg-earth-400'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default function TestPage() {
    const [wishlist, setWishlist] = useState<Set<string>>(new Set());
    const [cart, setCart] = useState<Set<string>>(new Set());

    // One dropdown open at a time (same pattern as venue page)
    const [expandedSection, setExpandedSection] = useState<ServicesSectionId | null>(null);
    const toggleSection = (id: ServicesSectionId) => {
        setExpandedSection((prev) => (prev === id ? null : id));
    };

    // After opening a section, scroll so the header sits in the middle of the viewport
    // (matches venue page: sticky header offset ~120px)
    useEffect(() => {
        if (!expandedSection) return;

        const scrollSectionIntoComfortZone = (behavior: ScrollBehavior = "smooth") => {
            const el = document.getElementById(`section-header-${expandedSection}`);
            if (!el) return;

            const headerOffset = 120;
            const rect = el.getBoundingClientRect();
            const elCenterY = rect.top + window.scrollY + rect.height / 2;
            const viewportCenterY = headerOffset + (window.innerHeight - headerOffset) / 2;
            const rawTarget = elCenterY - viewportCenterY;
            const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
            const targetScroll = Math.min(Math.max(0, rawTarget), maxScroll);

            window.scrollTo({
                top: targetScroll,
                behavior,
            });
        };

        // First pass after React paints expanded content.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => scrollSectionIntoComfortZone("smooth"));
        });
        // Follow-up passes handle late layout shifts (e.g. images loading),
        // which is most noticeable on the 3rd section near the page bottom.
        const retry1 = window.setTimeout(() => scrollSectionIntoComfortZone("smooth"), 220);
        const retry2 = window.setTimeout(() => scrollSectionIntoComfortZone("smooth"), 520);

        return () => {
            window.clearTimeout(retry1);
            window.clearTimeout(retry2);
        };
    }, [expandedSection]);

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100">
            <Header />
            <Breadcrumb items={breadcrumbItems} />
            <TestHero />
          

            <div className="flex flex-col">
            {/* Silence Section */}
            <section className={`order-1 w-full px-4 md:px-16 transition-all duration-300 ${expandedSection === "silence" ? 'mb-24' : 'pt-12 mb-6'}`}>
                <div id="section-header-silence" className="flex items-center gap-4 cursor-pointer mb-6" onClick={() => toggleSection("silence")}>
                        <h2 className="text-2xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            01. Silence as a Service
                        </h2>
                        <div className="h-[1px] bg-earth-700 flex-grow"></div>
                        <span className="material-symbols-outlined text-gold-500 text-3xl">volume_off</span>
                        <button className="text-gold-500 hover:text-gold-400 transition-colors">
                            <span className="material-symbols-outlined text-3xl">
                                {expandedSection === "silence" ? 'expand_less' : 'expand_more'}
                            </span>
                        </button>
                </div>

                {expandedSection === "silence" && (
                    <div className="space-y-6">
                        <div>
                            <p className="text-earth-300 text-sm mb-1">4 hours. No noise. You'll think clearer than you have in weeks.</p>
                        </div>
                        {/* Full-width carousel */}
                        <SectionCardCarousel
                            items={experiences.slice(0, 3).map((experience) => ({
                                title: experience.title,
                                description: experience.description,
                                images: experience.images,
                                icon: experience.icon,
                                category: experience.category,
                                href: "/services",
                            }))}
                        />
                        {/* Structure points */}
                        <div className="space-y-2">
                            <p className="text-gold-500 text-base font-normal" style={{ fontFamily: 'Outfit, sans-serif' }}>The Structure</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1">
                                {["Up to 4 hours inside the estate", "No schedule. No guidance", "Access to all spaces and facilities", "Meals / snacks available"].map((item) => (
                                    <div key={item} className="flex items-start gap-2">
                                        <span className="text-gold-500 mt-0.5">•</span>
                                        <span className="text-earth-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Silence mode table */}
                        <div className="space-y-3">
                            <div className="text-center space-y-1">
                                <p className="text-gold-500 text-base font-normal" style={{ fontFamily: 'Outfit, sans-serif' }}>Choose How You Spend Your Silence</p>
                                <p className="text-earth-400 text-sm">You don't need a plan. Just a way in.</p>
                            </div>
                            <div className="w-full overflow-x-auto rounded-lg border border-earth-600/60">
                                <table className="w-full border-collapse text-xs" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    <thead>
                                        <tr>
                                            {["Mode", "Focus", "How You Spend It", "What Shifts"].map(h => (
                                                <th key={h} className="border border-earth-600/60 px-4 py-2 text-gold-500 font-medium text-left bg-earth-800/30">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { mode: "The Reset", focus: "Clarity", how: "Sitting, breathing, doing nothing", shifts: "Mental noise drops" },
                                            { mode: "The Ground", focus: "Balance", how: "Movement, swim, sauna, workout", shifts: "Body regulates, mind settles" },
                                            { mode: "The Reflect", focus: "Awareness", how: "Journaling, reading, observing", shifts: "Thoughts become visible" },
                                        ].map(({ mode, focus, how, shifts }) => (
                                            <tr key={mode}>
                                                <td className="border border-earth-600/60 px-4 py-2 text-earth-200">{mode}</td>
                                                <td className="border border-earth-600/60 px-4 py-2 text-gold-500/80">{focus}</td>
                                                <td className="border border-earth-600/60 px-4 py-2 text-earth-300">{how}</td>
                                                <td className="border border-earth-600/60 px-4 py-2 text-earth-400 italic">{shifts}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-earth-400 text-xs text-center">Start anywhere. Move between them. The silence does the rest.</p>
                        </div>
                        {/* 3 dropdowns in 3-col grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InnerCollapsible title="What Actually Happens" preview="You arrive, disconnect, settle in, move at your own pace">
                                <div className="space-y-1 text-earth-300 text-sm mt-2">
                                    {["You arrive, disconnect, and settle in", "You move at your own pace", "You leave when something shifts", "No pressure. No expectations. Just space."].map((item) => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Who This Is For" preview="Mentally crowded, need a break, want clarity without days away">
                                <div className="space-y-1 text-earth-300 text-sm mt-2">
                                    {["You feel mentally crowded", "You need a break—but not an escape", "You want clarity without committing days"].map((item) => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Before You Enter" preview="Simple—but not passive. Silence will slow you down.">
                                <div className="space-y-2 mt-2">
                                    <p className="text-earth-300 text-sm leading-relaxed">This is simple—but not passive.</p>
                                    <p className="text-earth-300 text-sm leading-relaxed">Silence will slow you down.</p>
                                    <p className="text-earth-400 text-sm mt-1">If you're constantly stimulated, it may feel unfamiliar.</p>
                                    <p className="text-earth-400 text-sm">That's the point.</p>
                                </div>
                            </InnerCollapsible>
                        </div>
                        <div className="border border-earth-700/40 rounded-lg p-4 bg-earth-800/20">
                            <a href="/book-a-call" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gold-500 text-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-earth-950 transition-all mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Step Into Silence →
                            </a>
                            <p className="text-earth-300 text-sm leading-relaxed">You don't need a retreat. You need a few hours without noise.</p>
                        </div>
                    </div>
                )}
            </section>

{/* Solitude Section */}
            <section className={`order-3 w-full px-4 md:px-16 transition-all duration-300 ${expandedSection === "solitude" ? 'mb-24' : 'mb-6'}`}>
                <div id="section-header-solitude" className="flex items-center gap-4 cursor-pointer mb-6" onClick={() => toggleSection("solitude")}>
                        <h2 className="text-2xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            03. Solitude as a Service
                        </h2>
                        <div className="h-[1px] bg-earth-700 flex-grow"></div>
                        <span className="material-symbols-outlined text-gold-500 text-3xl">self_improvement</span>
                        <button className="text-gold-500 hover:text-gold-400 transition-colors">
                            <span className="material-symbols-outlined text-3xl">
                                {expandedSection === "solitude" ? 'expand_less' : 'expand_more'}
                            </span>
                        </button>
                </div>

                {expandedSection === "solitude" && (
                    <div className="space-y-6">
                        <div>
                            <p className="text-earth-300 text-sm mb-1">5 days. Almost no conversation. You'll know what to do next. </p>
                        </div>
                        <SectionCardCarousel
                            items={solitudePractices.map((practice) => ({
                                title: practice.title,
                                description: practice.description,
                                images: practice.images,
                                icon: practice.icon,
                                category: practice.category,
                                href: `/solitude/details?id=${practice.practiceId}`,
                            }))}
                        />
                        {/* Logistics points */}
                        <div className="space-y-2">
                            <p className="text-gold-500 text-base font-normal" style={{ fontFamily: 'Outfit, sans-serif' }}>The Structure</p>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-1">
                                {["Weekdays only (Mon–Thu)", "4 Nights / 5 Days", "Communication - 30 mins", "Meals included", "Full access to estate"].map((item) => (
                                    <div key={item} className="flex items-start gap-2">
                                        <span className="text-gold-500 mt-0.5">•</span>
                                        <span className="text-earth-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <SolitudeTable />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InnerCollapsible title="What Actually Happens" preview="You'll run out of distractions. Then meet what's been waiting.">
                                <div className="space-y-2 mt-2">
                                    <p className="text-earth-300 text-sm leading-relaxed">You'll run out of distractions.</p>
                                    <p className="text-earth-300 text-sm leading-relaxed">Then meet what's been waiting.</p>
                                    <p className="text-earth-400 text-sm mt-1">You feel something is off, but can't name it.</p>
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Who This Is For" preview="Busy but not clear, avoiding something, need space to think">
                                <div className="space-y-1 text-earth-300 text-sm mt-2">
                                    {["You've been busy—but not clear", "You're avoiding something important", "You need space to think without interruption"].map((item) => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Before You Enter" preview="This is not easy. Silence amplifies what's already inside you.">
                                <div className="space-y-2 mt-2">
                                    
                                    <p className="text-earth-400 text-sm mt-1">If you're looking to relax—this isn't it.</p>
                                    <p className="text-earth-400 text-sm">If you're ready to face things—you'll know.</p>
                                </div>
                            </InnerCollapsible>
                        </div>
                        <div className="border border-earth-700/40 rounded-lg p-4 bg-earth-800/20">
                            <a href="/book-a-call" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gold-500 text-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-earth-950 transition-all" style={{ fontFamily: 'Outfit, sans-serif' }}>
                               Enter Solitude
                            </a>

                            <p className="text-earth-300 text-sm leading-relaxed mb-3 mt-2">Most people won’t choose this. The ones who do—don’t come back the same.</p>
                            
                        </div>
                    </div>
                )}
            </section >

            {/* Expression Section */}
            <section className={`order-4 w-full px-4 md:px-16 transition-all duration-300 ${expandedSection === "expression" ? 'mb-24' : 'mb-6'}`}>
                <div id="section-header-expression" className="flex items-center gap-4 cursor-pointer mb-6" onClick={() => toggleSection("expression")}>
                        <h2 className="text-2xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            04. Creation as a Service
                        </h2>
                        <div className="h-[1px] bg-earth-700 flex-grow"></div>
                        <span className="material-symbols-outlined text-gold-500 text-3xl">science</span>
                        <button className="text-gold-500 hover:text-gold-400 transition-colors">
                            <span className="material-symbols-outlined text-3xl">
                                {expandedSection === "expression" ? 'expand_less' : 'expand_more'}
                            </span>
                        </button>
                </div>

                {expandedSection === "expression" && (
                    <div className="space-y-6">
                        <div>
                            <p className="text-earth-300 text-sm mb-1">You don't come here to think. You come here to make something real.</p>
                        </div>
                        <SectionCardCarousel
                            items={expressionPillars.map((pillar) => ({
                                title: pillar.title,
                                description: pillar.description,
                                images: pillar.images,
                                icon: pillar.icon,
                                category: pillar.category,
                                href: "/expression/details",
                            }))}
                        />
                        {/* Structure points */}
                        <div className="space-y-2">
                            <p className="text-gold-500 text-base font-normal" style={{ fontFamily: 'Outfit, sans-serif' }}>The Structure</p>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-1">
                                {["Full estate access", "No fixed schedule", "Solo or collaborative use", "Tools, environments, and open space", "Meals included"].map((item) => (
                                    <div key={item} className="flex items-start gap-2">
                                        <span className="text-gold-500 mt-0.5">•</span>
                                        <span className="text-earth-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Creation Mode table */}
                        <div className="space-y-3">
                            <div className="text-center space-y-1">
                                <p className="text-gold-500 text-base font-normal" style={{ fontFamily: 'Outfit, sans-serif' }}>Choose Your Creation Mode</p>
                                <p className="text-earth-400 text-sm">You don't wait for clarity. You build your way into it.</p>
                            </div>
                            <div className="w-full overflow-x-auto rounded-lg border border-earth-600/60">
                                <table className="w-full border-collapse text-xs" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    <thead>
                                        <tr>
                                            {["Mode", "Focus", "How You Work", "What Emerges"].map(h => (
                                                <th key={h} className="border border-earth-600/60 px-4 py-2 text-gold-500 font-medium text-left bg-earth-800/30">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { mode: "The Forge", focus: "System", how: "Mapping, structuring, refining", emerges: "Clear frameworks & decisions" },
                                            { mode: "The Lab", focus: "Form", how: "Hands-on testing, building", emerges: "Tangible prototypes" },
                                            { mode: "The Script", focus: "Meaning", how: "Writing, storytelling", emerges: "Sharper voice & narrative" },
                                            { mode: "The Studio", focus: "Output", how: "Shooting, editing, publishing", emerges: "Finished content" },
                                            { mode: "The Arena", focus: "Expression", how: "Movement, performance", emerges: "Embodied clarity" },
                                            { mode: "The Edge", focus: "Breakthrough", how: "Live testing, pushing limits", emerges: "New directions" },
                                        ].map(({ mode, focus, how, emerges }) => (
                                            <tr key={mode}>
                                                <td className="border border-earth-600/60 px-4 py-2 text-earth-200">{mode}</td>
                                                <td className="border border-earth-600/60 px-4 py-2 text-gold-500/80">{focus}</td>
                                                <td className="border border-earth-600/60 px-4 py-2 text-earth-300">{how}</td>
                                                <td className="border border-earth-600/60 px-4 py-2 text-earth-400 italic">{emerges}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-earth-400 text-xs text-center">Choose one. Or move between them. The work will tell you where to go.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InnerCollapsible title="What Actually Happens" preview="You arrive with an idea, build without interruption, no noise">
                                <div className="space-y-1 text-earth-300 text-sm mt-2">
                                    {["You arrive with an idea, problem, or intention", "You use the environment without interruption", "You build, test, refine, repeat", "No noise. No waiting. Just output."].map((item) => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Who This Is For" preview="You know what to work on, need space to execute, ready to build">
                                <div className="space-y-1 text-earth-300 text-sm mt-2">
                                    {["You already know what you want to work on", "You need space to execute without distraction", "You're done thinking—you're ready to build"].map((item) => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Before You Enter" preview="Self-directed. No one tells you what to do.">
                                <div className="space-y-2 mt-2">
                                    <p className="text-earth-300 text-sm leading-relaxed">This is self-directed.</p>
                                    <p className="text-earth-300 text-sm leading-relaxed">No one tells you what to do.</p>
                                    <p className="text-earth-400 text-sm mt-1">If you need clarity—start with Solitude.</p>
                                    <p className="text-earth-400 text-sm">If you have clarity—this is where you act.</p>
                                </div>
                            </InnerCollapsible>
                        </div>
                        <div className="border border-earth-700/40 rounded-lg p-4 bg-earth-800/20">
                            <a href="/book-a-call" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gold-500 text-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-earth-950 transition-all mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Start Creating →
                            </a>
                            <p className="text-earth-300 text-sm leading-relaxed">Most people sit on ideas. The right ones come here and build them.</p>
                        </div>
                    </div>
                )}
            </section >

            

            {/* Residency Section */}
            <section className={`order-2 w-full px-4 md:px-16 transition-all duration-300 ${expandedSection === "residency" ? 'mb-24' : 'mb-6'}`}>
                <div id="section-header-residency" className="flex items-center gap-4 cursor-pointer mb-6" onClick={() => toggleSection("residency")}>
                        <h2 className="text-2xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            02. Residency as a Service
                        </h2>
                        <div className="h-[1px] bg-earth-700 flex-grow"></div>
                        <span className="material-symbols-outlined text-gold-500 text-3xl">school</span>
                        <button className="text-gold-500 hover:text-gold-400 transition-colors">
                            <span className="material-symbols-outlined text-3xl">
                                {expandedSection === "residency" ? 'expand_less' : 'expand_more'}
                            </span>
                        </button>
                </div>

                {expandedSection === "residency" && (
                    <div className="space-y-6">
                        <div>
                            <p className="text-earth-300 text-sm mb-1">3 days. One question. You won't think about it the same way again.</p>
                        </div>
                        <SectionCardCarousel
                            items={residencies.map((residency) => ({
                                title: residency.title,
                                description: residency.description,
                                images: residency.images,
                                icon: residency.icon,
                                category: residency.category,
                                href: "/residency/details",
                            }))}
                        />
                        {/* Structure points */}
                        <div className="space-y-2">
                            <p className="text-gold-500 text-base font-normal" style={{ fontFamily: 'Outfit, sans-serif' }}>The Structure</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1">
                                {["Weekends only", "2 Nights / 3 Days", "10–20 participants", "Silence remains the default", "Conversation is intentional and time-bound", "No stages. No presentations. No performance"].map((item) => (
                                    <div key={item} className="flex items-start gap-2">
                                        <span className="text-gold-500 mt-0.5">•</span>
                                        <span className="text-earth-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Inquiry table */}
                        <div className="space-y-3">
                            <div className="text-center space-y-1">
                                <p className="text-gold-500 text-base font-normal" style={{ fontFamily: 'Outfit, sans-serif' }}>Choose The Question You're Sitting With</p>
                                <p className="text-earth-400 text-sm">You don't attend a session. You enter a question.</p>
                            </div>
                            <div className="w-full overflow-x-auto rounded-lg border border-earth-600/60">
                                <table className="w-full border-collapse text-xs" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    <thead>
                                        <tr>
                                            {["Inquiry", "Focus", "What Happens", "What Shifts"].map(h => (
                                                <th key={h} className="border border-earth-600/60 px-4 py-2 text-gold-500 font-medium text-left bg-earth-800/30">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { inquiry: "Future Studies", focus: "Judgment", what: "AI vs human thinking explored", shifts: "Clearer decision boundaries" },
                                            { inquiry: "Economics", focus: "Stability", what: "Money, liquidity, risk unpacked", shifts: "Financial clarity" },
                                            { inquiry: "Wellness", focus: "Regulation", what: "Stress patterns observed", shifts: "Nervous system awareness" },
                                            { inquiry: "Knowledge", focus: "Boundaries", what: "Digital exposure examined", shifts: "Reduced overload" },
                                            { inquiry: "Philosophy", focus: "Integrity", what: "Values tested under pressure", shifts: "Stronger alignment" },
                                            { inquiry: "Closure", focus: "Completion", what: "Emotional backlog processed", shifts: "Relational clarity" },
                                            { inquiry: "Psychology", focus: "Identity", what: "Behavior without audience", shifts: "Internal grounding" },
                                            { inquiry: "Communication", focus: "Precision", what: "Speech reduced, meaning increased", shifts: "Sharper expression" },
                                            { inquiry: "Action", focus: "Execution", what: "Talk vs movement revealed", shifts: "Bias toward doing" },
                                            { inquiry: "Urban Life", focus: "Positioning", what: "City vs life evaluated", shifts: "Strategic clarity" },
                                            { inquiry: "Writing", focus: "Clarity", what: "Thought → language structured", shifts: "Reduced mental loops" },
                                            { inquiry: "Knowledge Design", focus: "Structure", what: "Systems built for thinking", shifts: "Intellectual independence" },
                                        ].map(({ inquiry, focus, what, shifts }) => (
                                            <tr key={inquiry}>
                                                <td className="border border-earth-600/60 px-4 py-2 text-earth-200">{inquiry}</td>
                                                <td className="border border-earth-600/60 px-4 py-2 text-gold-500/80">{focus}</td>
                                                <td className="border border-earth-600/60 px-4 py-2 text-earth-300">{what}</td>
                                                <td className="border border-earth-600/60 px-4 py-2 text-earth-400 italic">{shifts}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-earth-400 text-xs text-center">You don't need all of them. Just the one that won't leave you alone.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InnerCollapsible title="What Actually Happens" preview="Small group, one question, silence as default, no performance">
                                <div className="space-y-1 text-earth-300 text-sm mt-2">
                                    {["A small group gathers around one question", "Silence is the default state", "Conversations happen in controlled windows", "No one performs. No one teaches.", "You don't listen to answers.", "You sit inside the question."].map(item => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Who This Is For" preview="Been thinking about something, need perspective, open to listening">
                                <div className="space-y-1 text-earth-300 text-sm mt-2">
                                    {["You've been thinking about something for a while", "You don't need more information—you need perspective", "You're open to listening without reacting"].map(item => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Before You Enter" preview="Not a workshop. No one is here to impress you.">
                                <div className="space-y-2 mt-2">
                                    <p className="text-earth-300 text-sm leading-relaxed">This is not a workshop.</p>
                                    <p className="text-earth-300 text-sm leading-relaxed">No one is here to impress you.</p>
                                    <p className="text-earth-400 text-sm mt-1">If you want answers—look elsewhere.</p>
                                    <p className="text-earth-400 text-sm">If you're willing to question—this will stay with you.</p>
                                </div>
                            </InnerCollapsible>
                        </div>
                        <div className="border border-earth-700/40 rounded-lg p-4 bg-earth-800/20">
                            <a href="/book-a-call" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gold-500 text-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-earth-950 transition-all mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Join The Residency →
                            </a>
                            <p className="text-earth-300 text-sm leading-relaxed">Some questions don't need answers. They need space—and the right people around them.</p>
                        </div>
                    </div>
                )}
            </section >
            </div>

            <Footer />
        </main >
    );
}
