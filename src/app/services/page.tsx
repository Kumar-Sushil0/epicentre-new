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
import RequestConversation from "../components/RequestConversation";

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
                        {/* Full-width carousel */}
                        <SectionCardCarousel
                            items={experiences.slice(0, 3).map((experience) => ({
                                title: experience.title,
                                description: experience.description,
                                images: experience.images,
                                icon: experience.icon,
                                href: "/services",
                            }))}
                        />
                        <SectionTable />
                        {/* 3 dropdowns in 3-col grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InnerCollapsible title="The Experience" preview="Rapid noise reduction, structured window, practical return">
                                <div className="space-y-3">
                                    {[
                                        { heading: "Rapid Noise Reduction", body: "Silence-first zones and controlled access help reduce reactive attention quickly." },
                                        { heading: "Short, Structured Window", body: "Designed for a half-day to full-day reset when clarity is needed now, not next month." },
                                        { heading: "Practical Return", body: "You leave with cleaner attention and better decision signal, ready to continue your current commitments." },
                                    ].map(({ heading, body }) => (
                                        <div key={heading} className="border-l border-gold-500/30 pl-4 space-y-0.5 mt-2">
                                            <p className="text-gold-500 text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>{heading}</p>
                                            <p className="text-earth-300 text-sm leading-relaxed">{body}</p>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Who This Is For" preview="Immediate recalibration, short stays, attention reset">
                                <div className="space-y-1 text-earth-300 text-sm mt-2">
                                    {["Professionals needing a same-day clarity reset", "Anyone between commitments who needs signal correction", "People who can't afford a multi-day stay but need structured silence", "Those experiencing decision fatigue or attention scatter"].map((item) => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Before You Apply" preview="A short conversation helps confirm fit and timing">
                                <p className="text-earth-300 text-sm leading-relaxed mt-2 mb-3">
                                    Best for people who want a shorter intervention for attention reset and decision clarity.
                                </p>
                                <p className="text-earth-400 text-sm mb-4">A short conversation helps confirm fit and timing.</p>
                                <a href="/book-a-call" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gold-500 text-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-earth-950 transition-all" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    View Plans →
                                </a>
                            </InnerCollapsible>
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
                        <SectionTable />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InnerCollapsible title="The Experience" preview="Step away from noise, move at your own pace, remain unobserved">
                                <div className="space-y-3">
                                    {[
                                        { heading: "Step Away From Noise", body: "The estate is structured to reduce unnecessary stimulation. No social obligations, performance expectations, or scheduled group interactions." },
                                        { heading: "Move At Your Own Pace", body: "You choose how your day unfolds. Some participants spend hours walking or observing nature. Others journal, train, or simply rest." },
                                        { heading: "Remain Unobserved", body: "The environment allows psychological privacy. You are not required to share, participate, or engage unless you choose to." },
                                    ].map(({ heading, body }) => (
                                        <div key={heading} className="border-l border-gold-500/30 pl-4 space-y-0.5 mt-2">
                                            <p className="text-gold-500 text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>{heading}</p>
                                            <p className="text-earth-300 text-sm leading-relaxed">{body}</p>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Who This Is For" preview="Mental fatigue, creative block, uninterrupted thinking time...">
                                <div className="space-y-1 text-earth-300 text-sm mt-2">
                                    {["Individuals experiencing mental fatigue or creative block", "Professionals seeking uninterrupted thinking time", "Athletes or movement practitioners wanting low-stimulus training environments", "Anyone wanting structured solitude without social pressure"].map((item) => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Before You Apply" preview="Self-directed, comfort with extended silence required">
                                <p className="text-earth-300 text-sm leading-relaxed mt-2 mb-3">
                                    This cycle is self-directed and requires comfort with spending extended time alone or in silence.
                                </p>
                                <p className="text-earth-400 text-sm mb-4">For availability and suitability, you can begin with a short conversation.</p>
                                <a href="/book-a-call" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gold-500 text-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-earth-950 transition-all" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    View Plans →
                                </a>
                            </InnerCollapsible>
                        </div>
                    </div>
                )}
            </section >

            {/* Expression Section */}
            <section className={`order-4 w-full px-4 md:px-16 transition-all duration-300 ${expandedSection === "expression" ? 'mb-24' : 'mb-6'}`}>
                <div id="section-header-expression" className="flex items-center gap-4 cursor-pointer mb-6" onClick={() => toggleSection("expression")}>
                        <h2 className="text-2xl font-normal text-gold-500 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            04. Experiment as a Service
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
                        <SectionCardCarousel
                            items={expressionPillars.map((pillar) => ({
                                title: pillar.title,
                                description: pillar.description,
                                images: pillar.images,
                                icon: pillar.icon,
                                href: "/expression/details",
                            }))}
                        />
                        <SectionTable />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InnerCollapsible title="What Happens During Residency" preview="Process, material, narrative, performance, media, movement experiments">
                                <p className="text-earth-400 text-xs mb-3 mt-1">Self-directed experiments — the estate provides the container, not the curriculum.</p>
                                <div className="space-y-3">
                                    {[
                                        { heading: "Process Experiments", body: "Testing new routines, workflows, or decision-making approaches without daily operational pressure." },
                                        { heading: "Material Experiments", body: "Working with physical mediums, prototypes, or tactile practices that require uninterrupted attention." },
                                        { heading: "Narrative Experiments", body: "Reflecting on personal or professional direction, writing, journaling, or story development." },
                                        { heading: "Performance Experiments", body: "Exploring cognitive or physical performance under reduced stimulation conditions." },
                                        { heading: "Media Experiments", body: "Deep creative work such as filming, sound recording, editing, or content ideation in a distraction-free setting." },
                                        { heading: "Movement Experiments", body: "Training cycles, endurance practice, or somatic exploration supported by natural terrain and open spaces." },
                                    ].map(({ heading, body }) => (
                                        <div key={heading} className="border-l border-gold-500/30 pl-4 space-y-0.5 mt-1">
                                            <p className="text-gold-500 text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>{heading}</p>
                                            <p className="text-earth-300 text-sm leading-relaxed">{body}</p>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Who This Is For" preview="Teams, creators, individuals, groups needing quiet decision-making">
                                <div className="space-y-1 text-earth-300 text-sm mt-2">
                                    {["Teams needing offsite clarity without corporate workshop fatigue", "Creators building something that requires uninterrupted focus", "Individuals testing new life or work directions", "Groups wanting a quiet decision-making environment"].map(item => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="The Experience Structure" preview="Shared presence, silence as default, defined engagement perimeter">
                                <div className="space-y-3 mt-2">
                                    {[
                                        { heading: "Shared Presence, Intentional Interaction", body: "Residency cycles are usually scheduled on weekends or custom dates. Interaction windows are limited and purpose-driven." },
                                        { heading: "Silence as the Default Condition", body: "Silence remains the baseline environment across most zones. Conversations are time-bound and anchored around a single working question." },
                                        { heading: "Defined Engagement Perimeter", body: "No presentations, seminars, or performance stages. You work within a calm spatial structure that encourages depth rather than display." },
                                    ].map(({ heading, body }) => (
                                        <div key={heading} className="border-l border-gold-500/30 pl-4 space-y-0.5 mt-1">
                                            <p className="text-gold-500 text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>{heading}</p>
                                            <p className="text-earth-300 text-sm leading-relaxed">{body}</p>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                        </div>
                        <div className="border border-earth-700/40 rounded-lg p-4 bg-earth-800/20">
                            <p className="text-[#e7dfd3] font-semibold text-sm mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Before You Request a Residency</p>
                            <p className="text-earth-300 text-sm leading-relaxed mb-2">
                                This format requires comfort with minimal facilitation and extended silent or low-interaction periods.
                            </p>
                            <p className="text-earth-400 text-sm mb-3">A short alignment conversation helps determine suitability and estate configuration.</p>
                            <a href="/book-a-call" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gold-500 text-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-earth-950 transition-all" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                View Plans →
                            </a>
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
                        <SectionTable />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <InnerCollapsible title="The Experience" preview="Silence as default, one anchoring question, defined engagement boundaries">
                                <div className="space-y-4 mt-2">
                                    <div className="border-l border-gold-500/30 pl-4 space-y-1">
                                        <p className="text-gold-500 text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>Silence as the Default Condition</p>
                                        <p className="text-earth-300 text-sm leading-relaxed">Outside defined interaction windows, silence remains the baseline. This allows deeper processing, independent reflection, reduced cognitive noise, and sharper decision clarity.</p>
                                    </div>
                                    <div className="border-l border-gold-500/30 pl-4 space-y-1">
                                        <p className="text-gold-500 text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>One Anchoring Question</p>
                                        <p className="text-earth-300 text-sm leading-relaxed">Each participant is encouraged to arrive with one important question or decision area. The structure supports exploring assumptions, stress-testing ideas, and refining direction.</p>
                                    </div>
                                    <div className="border-l border-gold-500/30 pl-4 space-y-1">
                                        <p className="text-gold-500 text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>Defined Engagement Boundaries</p>
                                        <div className="space-y-1 text-earth-300 text-sm mt-1">
                                            {["No open debates", "No performance pressure", "No stage dynamics", "No forced sharing"].map(item => (
                                                <div key={item} className="flex items-start gap-2">
                                                    <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Who This Is For" preview="Founders, professionals, creators navigating high-stakes decisions">
                                <div className="space-y-1 text-earth-300 text-sm mt-2">
                                    {["Founders or leaders facing critical decisions", "Professionals navigating major career or financial transitions", "Creators or strategists needing deep perspective", "Individuals seeking high-quality thinking conversations rather than generic learning sessions"].map(item => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </InnerCollapsible>
                            <InnerCollapsible title="Duration & Format" preview="Weekend format, 2–3 days, max 10–12 participants">
                                <div className="space-y-1 text-earth-300 text-sm mt-2 mb-3">
                                    {["Weekend residency format", "Typically 2 to 3 days immersion", "Maximum 10–12 participants", "Accommodation and meals included"].map(item => (
                                        <div key={item} className="flex items-start gap-2">
                                            <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gold-500 text-sm mb-4">Pricing varies <span className="text-earth-400 text-xs">based on speaker profile, theme, and estate configuration.</span></p>
                                <a href="/book-a-call" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gold-500 text-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-earth-950 transition-all" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    View Plans →
                                </a>
                            </InnerCollapsible>
                        </div>
                    </div>
                )}
            </section >
            </div>

            <RequestConversation />
            <Footer />
        </main >
    );
}
