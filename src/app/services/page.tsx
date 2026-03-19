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

type ServiceCardItem = {
    title: string;
    description: string;
    images: string[];
    icon?: string;
    category?: string;
    href: string;
};

function SectionCardCarousel({ items }: { items: ServiceCardItem[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!items.length) return null;

    const current = items[currentIndex];
    const prev = () => setCurrentIndex((p) => (p - 1 + items.length) % items.length);
    const next = () => setCurrentIndex((p) => (p + 1) % items.length);

    return (
        <div className="mt-4">
            <div className="relative max-w-xl mx-auto overflow-visible">
                <CarouselCard
                    title={current.title}
                    description={current.description}
                    images={current.images}
                    icon={current.icon}
                    category={current.category}
                    href={current.href}
                />
                {items.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-earth-900/90 border border-gold-500/40 text-gold-500 hover:text-gold-400 transition-colors inline-flex items-center justify-center"
                            aria-label="Previous card"
                        >
                            <span className="material-symbols-outlined text-base leading-none">chevron_left</span>
                        </button>
                        <button
                            onClick={next}
                            className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-earth-900/90 border border-gold-500/40 text-gold-500 hover:text-gold-400 transition-colors inline-flex items-center justify-center"
                            aria-label="Next card"
                        >
                            <span className="material-symbols-outlined text-base leading-none">chevron_right</span>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

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
                        <div className="mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                                {/* Left col: Intro + The Experience + Who This Is For */}
                                <div className="space-y-6">
                                    {/* Intro */}
                                    <div>
                                        <p className="text-gold-500 text-base font-medium mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Weekday Cycle | Structured Solitude</p>
                                        <p className="text-earth-300 text-base md:text-lg leading-relaxed">
                                            A 4 nights / 5 days immersion designed for individuals who want to step away from constant stimulation and spend uninterrupted time with themselves.
                                        </p>
                                        <p className="text-earth-400 text-base leading-relaxed mt-2">
                                            This is not a retreat with fixed group programming. It is a quiet, nature-anchored environment where you set your own rhythm while engaging in restorative outdoor practices.
                                        </p>
                                    </div>

                                    {/* The Experience */}
                                    <div>
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>The Experience</p>
                                        <div className="space-y-3">
                                            {[
                                                { heading: "Step Away From Noise", body: "The estate is structured to reduce unnecessary stimulation. No social obligations, performance expectations, or scheduled group interactions." },
                                                { heading: "Move At Your Own Pace", body: "You choose how your day unfolds. Some participants spend hours walking or observing nature. Others journal, train, or simply rest." },
                                                { heading: "Remain Unobserved", body: "The environment allows psychological privacy. You are not required to share, participate, or engage unless you choose to." },
                                            ].map(({ heading, body }) => (
                                                <div key={heading} className="border-l border-gold-500/30 pl-4 space-y-0.5">
                                                    <p className="text-gold-500 text-base font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>{heading}</p>
                                                    <p className="text-earth-300 text-base leading-relaxed">{body}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Who This Is For */}
                                    <div>
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Who This Is For</p>
                                        <div className="space-y-1 text-earth-300 text-base">
                                            {["Individuals experiencing mental fatigue or creative block", "Professionals seeking uninterrupted thinking time", "Athletes or movement practitioners wanting low-stimulus training environments", "Anyone wanting structured solitude without social pressure"].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    <span className="text-gold-500 mt-0.5">•</span>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right col: Schedule + Duration & Stay + Before You Apply */}
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
                                    {/* Before You Apply */}
                                    <div className="border border-earth-700/40 rounded-lg p-4 bg-earth-800/20">
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Before You Apply</p>
                                        <p className="text-earth-300 text-base leading-relaxed mb-2">
                                            This cycle is self-directed and requires comfort with spending extended time alone or in silence. Limited guidance is provided primarily for safety and orientation.
                                        </p>
                                        <p className="text-earth-400 text-base mb-4">For availability and suitability, you can begin with a short conversation.</p>
                                        <a href="/book-a-call" className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg border border-gold-500 text-gold-500 text-base font-medium hover:bg-gold-500 hover:text-earth-950 transition-all" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            Request a Conversation →
                                        </a>
                                    </div>

                                </div>
                            </div>
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
                        <div className="mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                {/* Left col */}
                                <div className="space-y-6">
                                    {/* Intro */}
                                    <div>
                                        <p className="text-gold-500 text-base font-medium mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Residency Cycle | Private Estate Booking</p>
                                        <p className="text-earth-300 text-base md:text-lg leading-relaxed">
                                            A flexible residency format where individuals, teams, or small groups can reserve the entire Silent Club estate for focused time away from routine environments.
                                        </p>
                                        <p className="text-earth-400 text-base leading-relaxed mt-2">
                                            This format is designed for testing ideas, building clarity, or exploring creative and performance questions in a low-stimulation setting. You may book the estate for multiple days based on your requirement and availability.
                                        </p>
                                    </div>

                                    {/* What Happens During Residency */}
                                    <div>
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>What Happens During Residency</p>
                                        <p className="text-earth-400 text-base mb-3">Residency is not a retreat with lectures or structured workshops. It is a controlled environment that allows you to engage deeply with your own process. Participants use the space to run self-directed experiments:</p>
                                        <div className="space-y-3">
                                            {[
                                                { heading: "Process Experiments", body: "Testing new routines, workflows, or decision-making approaches without daily operational pressure." },
                                                { heading: "Material Experiments", body: "Working with physical mediums, prototypes, or tactile practices that require uninterrupted attention." },
                                                { heading: "Narrative Experiments", body: "Reflecting on personal or professional direction, writing, journaling, or story development." },
                                                { heading: "Performance Experiments", body: "Exploring cognitive or physical performance under reduced stimulation conditions." },
                                                { heading: "Media Experiments", body: "Deep creative work such as filming, sound recording, editing, or content ideation in a distraction-free setting." },
                                                { heading: "Movement Experiments", body: "Training cycles, endurance practice, or somatic exploration supported by natural terrain and open spaces." },
                                            ].map(({ heading, body }) => (
                                                <div key={heading} className="border-l border-gold-500/30 pl-4 space-y-0.5">
                                                    <p className="text-gold-500 text-base font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>{heading}</p>
                                                    <p className="text-earth-300 text-base leading-relaxed">{body}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-earth-500 text-sm mt-3 italic">All experiments are self-led. The estate provides the container, not the curriculum.</p>
                                    </div>
                                    {/* Who This Is For */}
                                    <div>
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Who This Is For</p>
                                        <div className="space-y-1 text-earth-300 text-base">
                                            {["Teams needing offsite clarity without corporate workshop fatigue", "Creators building something that requires uninterrupted focus", "Individuals testing new life or work directions", "Groups wanting a quiet decision-making environment"].map(item => (
                                                <div key={item} className="flex items-start gap-2">
                                                    <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right col */}
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
                                    {/* The Experience Structure */}
                                    <div>
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>The Experience Structure</p>
                                        <div className="space-y-3">
                                            {[
                                                { heading: "Shared Presence, Intentional Interaction", body: "Residency cycles are usually scheduled on weekends or custom dates. If multiple participants or groups are present, interaction windows are limited and purpose-driven." },
                                                { heading: "Silence as the Default Condition", body: "Silence remains the baseline environment across most zones. Conversations are time-bound and anchored around a single working question or objective." },
                                                { heading: "Defined Engagement Perimeter", body: "There are no presentations, seminars, or performance stages. You work within a calm spatial structure that encourages depth rather than display." },
                                            ].map(({ heading, body }) => (
                                                <div key={heading} className="border-l border-gold-500/30 pl-4 space-y-0.5">
                                                    <p className="text-gold-500 text-base font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>{heading}</p>
                                                    <p className="text-earth-300 text-base leading-relaxed">{body}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Before You Request */}
                                    <div className="border border-earth-700/40 rounded-lg p-4 bg-earth-800/20">
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Before You Request a Residency</p>
                                        <p className="text-earth-300 text-base leading-relaxed mb-2">
                                            This format requires participants to be comfortable with minimal facilitation and extended silent or low-interaction periods.
                                        </p>
                                        <p className="text-earth-400 text-base mb-4">A short alignment conversation helps determine suitability and estate configuration.</p>
                                        <a href="/book-a-call" className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg border border-gold-500 text-gold-500 text-base font-medium hover:bg-gold-500 hover:text-earth-950 transition-all" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            Request a Conversation →
                                        </a>
                                    </div>
                                </div>
                            </div>
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
                        <div className="mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                {/* Left col */}
                                <div className="space-y-6">
                                    {/* Intro */}
                                    <div>
                                        <p className="text-gold-500 text-base font-medium mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Expert Residency | Thinking Partner Format</p>
                                        <p className="text-earth-300 text-base md:text-lg leading-relaxed">
                                            An invited speaker or domain expert is present during the residency.
                                        </p>
                                        <div className="mt-3 space-y-1 text-earth-400 text-base">
                                            <p className="text-earth-300 text-sm font-medium mb-1">There are:</p>
                                            {["No presentations", "No slides or projected material", "No seminar-style teaching"].map(item => (
                                                <div key={item} className="flex items-start gap-2">
                                                    <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-earth-400 text-base mt-3">Instead, participants engage in one-on-one or small-group discussions around their specific questions. The expert acts as a thinking partner rather than an instructor.</p>
                                    </div>

                                    {/* Experience blocks */}
                                    <div>
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>The Experience</p>
                                        <div className="space-y-4">
                                            <div className="border-l border-gold-500/30 pl-4 space-y-1">
                                                <p className="text-gold-500 text-base font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>Silence as the Default Condition</p>
                                                <p className="text-earth-300 text-base leading-relaxed">Outside defined interaction windows, silence remains the baseline. This allows deeper processing of conversations, independent reflection, reduced cognitive noise, and sharper decision clarity.</p>
                                            </div>
                                            <div className="border-l border-gold-500/30 pl-4 space-y-1">
                                                <p className="text-gold-500 text-base font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>One Anchoring Question</p>
                                                <p className="text-earth-300 text-base leading-relaxed">Each participant is encouraged to arrive with one important question or decision area. The residency structure supports exploring assumptions, stress-testing ideas, gaining perspective, and refining direction.</p>
                                            </div>
                                            <div className="border-l border-gold-500/30 pl-4 space-y-1">
                                                <p className="text-gold-500 text-base font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>Defined Engagement Boundaries</p>
                                                <div className="space-y-1 text-earth-300 text-base mt-1">
                                                    {["No open debates", "No performance pressure", "No stage dynamics", "No forced sharing"].map(item => (
                                                        <div key={item} className="flex items-start gap-2">
                                                            <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-earth-400 text-base mt-2">You engage only within designated interaction moments and otherwise remain in a calm, low-stimulation environment.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Who This Is For */}
                                    <div>
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Who This Is For</p>
                                        <div className="space-y-1 text-earth-300 text-base">
                                            {["Founders or leaders facing critical decisions", "Professionals navigating major career or financial transitions", "Creators or strategists needing deep perspective", "Individuals seeking high-quality thinking conversations rather than generic learning sessions"].map(item => (
                                                <div key={item} className="flex items-start gap-2">
                                                    <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right col */}
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
                                    {/* Duration & Format */}
                                    <div className="border border-earth-700/40 rounded-lg p-4 bg-earth-800/20">
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Duration &amp; Format</p>
                                        <div className="space-y-1 text-earth-300 text-base mb-3">
                                            {["Weekend residency format", "Typically 2 to 3 days immersion", "Maximum 10–12 participants", "Accommodation and meals included"].map(item => (
                                                <div key={item} className="flex items-start gap-2">
                                                    <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-gold-500 text-base">Pricing varies <span className="text-earth-400 text-sm">based on speaker profile, theme, and estate configuration.</span></p>
                                    </div>
                                    {/* Before You Apply */}
                                    <div className="border border-earth-700/40 rounded-lg p-4 bg-earth-800/20">
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Before You Apply</p>
                                        <p className="text-earth-300 text-base leading-relaxed mb-2">
                                            Residency requires mental readiness for silence, independent thinking, and honest inquiry.
                                        </p>
                                        <p className="text-earth-400 text-base mb-4">A short conversation helps assess alignment with the theme and cohort.</p>
                                        <a href="/book-a-call" className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg border border-gold-500 text-gold-500 text-base font-medium hover:bg-gold-500 hover:text-earth-950 transition-all" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            Request a Conversation →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section >

            <RequestConversation />
            <Footer />
        </main >
    );
}
