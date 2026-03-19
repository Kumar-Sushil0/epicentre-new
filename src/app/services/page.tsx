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
                                    {/* Suggested Daily Rhythm */}
                                    <div>
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Suggested Daily Rhythm</p>
                                        <p className="text-earth-400 text-sm mb-2">This is a flexible structure to help you ease into the cycle.</p>
                                        <p className="text-gold-500 text-sm font-medium mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Day 1 — Arrival &amp; Settling In</p>
                                        <div className="border border-earth-700/50 rounded-lg overflow-hidden">
                                            <div className="grid grid-cols-2 bg-earth-800/60 text-earth-400 text-sm px-4 py-2">
                                                <span>Time</span>
                                                <span>Activity</span>
                                            </div>
                                            {[
                                                ["11:00 – 13:00", "Check-in Window"],
                                                ["13:00 – 16:00", "Personal Setup & Water Familiarisation"],
                                                ["16:00 – 17:30", "Orientation (Safety & Estate Basics)"],
                                                ["18:00 – 19:00", "Gentle Mobility / Fascia Work"],
                                                ["19:00 – 20:00", "Dinner"],
                                                ["20:30 – 21:00", "Optional Stillness or Star Observation"],
                                            ].map(([time, activity], i) => (
                                                <div key={i} className={`grid grid-cols-2 px-4 py-2 text-earth-300 ${i % 2 === 0 ? 'bg-earth-800/20' : ''}`}>
                                                    <span className="text-earth-400 text-sm">{time}</span>
                                                    <span className="text-sm">{activity}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-earth-500 text-sm mt-2 italic">The remaining days follow a similar open rhythm.</p>
                                    </div>

                                    {/* Duration & Stay */}
                                    <div>
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Duration &amp; Stay Options</p>
                                        <p className="text-gold-500 text-base font-medium mb-1">Weekday Cycle — 4 Nights / 5 Days</p>
                                        <div className="space-y-1 text-earth-300 text-base mb-2">
                                            <div className="flex items-center gap-2"><span className="text-gold-500">•</span><span>Shared Dorm</span></div>
                                            <div className="flex items-center gap-2"><span className="text-gold-500">•</span><span>Private Room</span></div>
                                        </div>
                                        <p className="text-gold-500 text-base">Starting from ₹20,000 <span className="text-earth-400 text-sm">+ applicable taxes</span></p>
                                    </div>

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

                        {/* Grid View */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solitudePractices.map((practice, index) => (
                                <CarouselCard
                                    key={index}
                                    title={practice.title}
                                    description={practice.description}
                                    images={practice.images}
                                    icon={practice.icon}
                                    category={practice.category}
                                    href={`/solitude/details?id=${practice.practiceId}`}
                                />
                            ))}
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
                                </div>

                                {/* Right col */}
                                <div className="space-y-6">
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

                                    {/* Duration & Booking */}
                                    <div>
                                        <p className="text-[#e7dfd3] font-semibold text-base mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Duration &amp; Booking</p>
                                        <p className="text-earth-300 text-base mb-2">Estate can be reserved for 2 to 7 days or longer based on availability.</p>
                                        <p className="text-earth-400 text-sm mb-1">Suitable for:</p>
                                        <div className="space-y-1 text-earth-300 text-base mb-3">
                                            {["Founders and leadership teams", "Creative collaborators", "Athletes or performance practitioners", "Researchers and independent thinkers"].map(item => (
                                                <div key={item} className="flex items-start gap-2">
                                                    <span className="text-gold-500 mt-0.5">•</span><span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-earth-400 text-base">Accommodation formats include dorm, private rooms, and nature-integrated stay options.</p>
                                        <p className="text-gold-500 text-base mt-1">Custom pricing shared after understanding group size and duration.</p>
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

                        {/* Grid View */}
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
                                </div>

                                {/* Right col */}
                                <div className="space-y-6">
                                    {/* Duration & Format */}
                                    <div>
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

                        {/* Grid View */}
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
                    </div>
                )}
            </section >

            <RequestConversation />
            <Footer />
        </main >
    );
}
