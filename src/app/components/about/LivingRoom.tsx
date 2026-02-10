"use client";

import React from 'react';

const features = [
    {
        title: "GO ON A LEGIT BRAIN VACATION®",
        percentage: "99% "
    },
    {
        title: "GROW AS A LEADER OF YOUR TEAM",
        percentage: "94%"
    },
    {
        title: "LEVEL UP YOUR VIBES & NETWORK",
        percentage: "91% "
    },
    {
        title: "GROW YOUR BUSINESS OR START ONE",
        percentage: "96% "
    },
    {
        title: "FIND COLLABORATORS TO CHANGE WORLD",
        percentage: "95% "
    },
    {
        title: "GATHER PERSPECTIVES THAT SERVE YOU",
        percentage: "97% "
    }
];

const LivingRoom = () => {
    return (
        <section className="bg-gold-500 py-20 text-earth-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold uppercase mb-4">
                    Step away from the noise. Step into the living room.
                </h2>
                <p className="max-w-2xl mx-auto mb-16">
                    BHX is where clarity outpaces chaos, when bravery beats burnout, when your dream shifts from maybe to inevitable.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {features.map((feature, index) => {
                        const percentageMatch = feature.percentage.match(/(\d+%)/);
                        const number = percentageMatch ? percentageMatch[0] : '';
                        const text = feature.percentage.replace(/\d+%\s*/, '');

                        return (
                            <div key={index} className="flex flex-col items-center text-center">
                                <span className="text-6xl font-bold">{number}</span>
                                <h3 className="text-sm font-bold uppercase mt-4 mb-2">{feature.title}</h3>
                                <p className="text-lg">{text}</p>
                            </div>
                        );
                    })}
                </div>
                
            </div>
        </section>
    );
};

export default LivingRoom;
