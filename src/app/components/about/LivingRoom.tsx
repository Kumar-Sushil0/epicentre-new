"use client";

import React, { useState } from 'react';

const research = [
    {
        title: "Attention Restoration Theory — Directed Attention Fatigue",
        author: "Kaplan, S. (1995). The Restorative Benefits of Nature: Toward an Integrative Framework. Journal of Environmental Psychology.",
        description: "Research shows that environments with reduced sensory demand restore directed attention capacity and reduce cognitive fatigue.",
        link: "https://doi.org/10.1016/0272-4944(95)90001-2"
    },
    {
        title: "Systematic Review — Attention Restoration Theory",
        author: "Ohly, H. et al. (2016). Attention Restoration Theory: A systematic review. Journal of Toxicology and Environmental Health, Part B.",
        description: "Meta-analysis confirming that natural, low-stimulation environments improve executive attention and cognitive performance.",
        link: "https://pubmed.ncbi.nlm.nih.gov/27668460/"
    },
    {
        title: "Default Mode Network — Internal Self-Referential Processing",
        author: "Raichle, M. E. et al. (2001). A Default Mode of Brain Function. Proceedings of the National Academy of Sciences (PNAS).",
        description: "Identifies the Default Mode Network (DMN), active during rest and internally directed thought, including self-reflection and identity processing.",
        link: "https://doi.org/10.1073/pnas.98.2.676"
    },
    {
        title: "Self-Determination Theory — Autonomy & Self-Authorship",
        author: "Ryan, R. M., & Deci, E. L. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being. American Psychologist.",
        description: "Demonstrates that autonomy is a core psychological need and foundational to self-directed behavior and internal motivation.",
        link: "https://doi.org/10.1037/0003-066X.55.1.68"
    },
    {
        title: "Directed Attention & Self-Regulation — Directed Attention & Behavioral Control",
        author: "Kaplan, S., & Berman, M. G. (2010). Directed Attention as a Common Resource for Executive Functioning and Self-Regulation. Perspectives on Psychological Science.",
        description: "Shows that restoring directed attention improves executive control and self-regulatory capacity.",
        link: "https://doi.org/10.1177/1745691610385554"
    },
    {
        title: "Locus of Control — Agency & Responsibility",
        author: "Rotter, J. B. (1966). Generalized Expectancies for Internal versus External Control of Reinforcement. Psychological Monographs.",
        description: "Introduces internal locus of control as a predictor of responsibility-taking and adaptive behavior.",
        link: "https://doi.org/10.1037/h0092976"
    }
];

const ResearchItem = ({ item, index }: { item: typeof research[0], index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Split title at the dash and add line break
    const formatTitle = (title: string) => {
        const parts = title.split(' — ');
        if (parts.length === 2) {
            return (
                <>
                    {parts[0]}
                    <br />
                    — {parts[1]}
                </>
            );
        }
        return title;
    };

    return (
        <div className="border border-earth-900/20 rounded-lg overflow-hidden flex flex-col">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-earth-900/5 transition-colors"
            >
                <h3 className="text-lg font-normal pr-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {formatTitle(item.title)}
                </h3>
                <span className="material-symbols-outlined text-2xl flex-shrink-0 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    expand_more
                </span>
            </button>
            
            <div 
                className="transition-all duration-300 ease-in-out overflow-hidden"
                style={{
                    maxHeight: isOpen ? '500px' : '0px'
                }}
            >
                <div className="p-4 pt-0 space-y-3">
                    <p className="text-sm italic font-body">
                        {item.author}
                    </p>
                    <p className="text-sm font-body">
                        {item.description}
                    </p>
                    <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-normal underline hover:no-underline transition-all"
                    >
                        Click here
                    </a>
                </div>
            </div>
        </div>
    );
};

const LivingRoom = () => {
    return (
        <section className="bg-gold-500 py-20 text-earth-900">
            <div className="px-4 md:px-16">
                <div className="text-left mb-16">
                    <h2 className="text-3xl font-normal mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Evidence
                    </h2>
                    <p className="text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        This is not ideology.<br />It is informed by research in cognitive science and psychology.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {research.map((item, index) => (
                        <ResearchItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LivingRoom;
