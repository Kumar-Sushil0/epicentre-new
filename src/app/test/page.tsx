"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselCard from "../components/CarouselCard";
import TestHero from "../components/test/TestHero";
import TestPhilosophy from "../components/test/TestPhilosophy";

export default function TestPage() {
    // Wellness Section Data
    const wellnessPractices = [
        {
            title: "Self-Paced Physical Training",
            description: "Quiet movement without mirrors or metrics.\nStrength and exertion on your own terms.",
            category: "Self-Paced",
            icon: "fitness_center",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBs-hb7o4jNTYxKGveJrfp7t9OjuheyFrl6975031WiGmob3tmuoKzo9e2Gi5gfjM2WmcObIeJRsPLgmRU5lBfL7W78uunGYn_oc94_vQrdsZ1BjmCDRi9ZxSTde7PluowM0B9IEifnGvy1rLS3ysNmjoRiMZS8YRu_xL2Xp4IpulOke15P3reMJbLN2dYFGAbVe9q8f6FFx6X_KZoJ7O_EJvbTRGc45bGfCOWnlsHH2_6uy6yvEum6rEOuMrf4jW3NfWk49g1EY9L5",
            ],
        },
        {
            title: "Yoga & Meditation",
            description: "Low-light spaces for stillness and breath.\nSelf-led, informal, and unstructured.",
            category: "Mindfulness",
            icon: "self_improvement",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBpZOvr0qjgBHYFzGTiTaPYUUfxtRTTng4Mwyz1Y1DWNZJ_1bIkfqJ3exaDYGFmGQH0kEFlJ--2x9K7P2_gWe-POWZpboure-tmEfUlOPBXEahy3y3fJM4Yf1VShZ5WCMnIOQRgohRnU1MHh9dBz_RMPXnR6lgAzzpCeWWqxfY1jj5rO29e1v-so6AiyI_-y3kx2qdK_n4hThx3ugUPOZty1UBFhhmRzm7Lds78A7DSjpxT19FH5wa-UqsVvRcWUBB5wtZ4-NGFFouA",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
            ],
        },
        {
            title: "Leisure & Board Games",
            description: "Analog play without competition.\nEasy to begin, easy to leave.",
            category: "Leisure",
            icon: "casino",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDpLgNIXCBBA7cPpXwO9csLOqZrHsSadnHbb7Q-s24LEXvnrtHwATVxM-rgQthaw7HXT23Wv2Vj4M0QHf7vMXlnFxVR_3527JHh44DEYoHmp9RAiTjj5UKVQsSpgDXnPAtpKFwBRYkq1brPYGQAyalnn8lw1Ew3ezLh9zoRAIiS58I2gC8YpIP3e3Vx-QSnJvTJzmVneD0Kah0f9YnTcUovk_mk9mNLTdZ2PEgiloIzz1gOrdmvtvnxrXR2idxdg2P4IVZ0jM6IqpKT",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAG8sRV16GeDF6s3Aix4GpETZ3eauYTdeaL5IlWaBQHdmLaEUl8HwITF-icK7rBJH3rs4_eyRc0OnTyudHniz8NCe3oRC2k5_KcTRLReqJdws9zmY25stjYSrFvYvnbb4fxetbYlgcqCJDWwMaBr_6UB09wT864MpT6mLPkqnqxG3JPy_DNNFOMUqcmW8iZWOE4etCbj4TW4EEkBzJss4y7vWzlNmUWjLyUiZaka0GRqyef8OxRV6v8-KYfO5Y2EoBHFW0f3nVZFV6T",
            ],
        },
    ];

    // Experiences Section Data
    const experiences = [
        {
            title: "Boat Safari",
            description: "Guided movement through water alongside\n bird life. Experience: Observation, rhythm, quiet.",
            icon: "sailing",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBzQUBgomUJe6e1OB_6dmTVcgR_GYt5k-UgoretbmfZ_izouiCOaK8YYEWLDt_QTV_ISyTECnULI_O5W2HYPqj6w163bSvDPTOBZHjRl7FljH8xAlUWQIAfo5Eosj0EPZTfwiMtkXcjRL7RThN1FokJa4gSqWamw681YNKmVWdMcKtTZpKktdALEho3axfgg38XvTVTyHnF8634k552ETsVCipetwOV8NQ9ujUeRJusTOeygeyE16mtVKBxnTDmtPIEduKGAtXfTURb",
            ],
            price: "1000 INR",
            userCount: "2-5",
        },
        {
            title: "Lake Camping",
            description: "Staying close to water and weather.\nExperience: Exposure, continuity, rest.",
            icon: "camping",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdeEUhl309Gu2oZN0GhIAVH2l8s3vv94ApUE-B6IGCw9iIvASGUtpseKwR8a41lo7fnjVBtSoxTqXUEaEbfZJMPlRLjrsT3gZ6H_4EcN3OO9WdF-WcJQez51O2kEx4IAtenZ4GV4ZVZtFAjcFZWGtsWzbyB-IVweW31304V3gZAf1pYXeR6Ik-f66OZWQiNAnpe7OXRHn8xea79ZUVoSZNwFLGO46Y2NpGCDqWpP6jrw3m8vznKRCe9U6R2fqNdl40yZkOnKu2ZyL",
            ],
            price: "2000 INR",
            userCount: "2-5",
        },
        {
            title: "Painting",
            description: "Bringing color into form without instruction.\nExperience: Presence, intuition, flow.",
            icon: "palette",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7r_EfdzJXByVkgj8b1NMj-ZAtICOd-7f0nIhoxkQIxwBXH598TGdlFxtN24GiUoEphwYF0zIlhdvgru9oSMfTu9oihv5xP2V32qk72jVhmmMD13Pcuc1s0mmIW9z0PwjwSoqpRfVVjN7zXydMqkaSSiGcvxYcCH0nmyLUFMqAU494-rLxIKe2FG8GvN3X8ki91b9auaQ6g5uK2zpi_NeVNIbCo2enuZdmqIXYer0VC9t9T7g6Bxyw44xX4oXh4-0yrKVSoFNsFSS",
            ],
            price: "500 INR",
            userCount: "Per Canvas",
        },
    ];

    // Expression Section Data
    const expressionPillars = [
        {
            title: "Process Experiments",
            description: "Testing how you work, not what you produce.\nExamine method, rhythm, and sequence before committing to outcomes.",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
            ],
            icon: "science",
        },
        {
            title: "Writing experiments",
            description: "Channeling thoughts through the rhythm of keys.\nFocused sessions for drafting, editing, and finding flow.",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAKzLVQHfKO6fVCwz_bbCF3sUZndGv5siIr8bEoBG89SMFxRE0TF5k1L_QJMRXIiNlj0-bkP0NEy5Dd40ZsQrG8Pz8IA3_FIH4-fUrU9kwhzYPpfkoeCi_cChlNmmX-UOo62Dpwf56h80orphiCxMzAb7h0S8XFPrFFU4kdVCTHQNNZLDYJhDYh1W0tvt4o4jr9VdvuTeuc0uJCPIko1WRGysJzvtzn4HG3S3c1p762-ustfuEvWZQvv1VAUjL8Wy-mRFFdTExKAu",
            ],
            icon: "history_edu",
        },
        {
            title: "Audio Visual Experiments",
            description: "Testing conditions, not individuals.\nExplore rules, structures, and constraints to understand how conditions shape behavior.",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
            ],
            icon: "settings_suggest",
        },
    ];

    // Solitude Section Data
    const solitudePractices = [
        {
            title: "Angling",
            description: "Repetition and still attention. A meditative practice of patience and presence by the water's edge. Let the rhythm of the cast soothe the restless mind.",
            category: "Focus",
            icon: "arrow_forward",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuA0HsBN67MCfII7SFbyoe1CuEbEDrqaYf7kqJpp72tE8oPKovG1zztOo__0OQzzELS2oQ_DGIuO1KS_1IVBucK8qj3FwvhRqbMhDhMbqm1ocMzXlUZu5zJy0ltLGZMhF5nbdxBiOOkVb0CbxNMhe3JUOqBjg4wMOeojwjaZBLtOtIZGd0bfLsFeA9XysJv44KgWPDDw2dfGb8kuCIadFmbgCYe5XTjiZwGX0My_VA7VqMgybDzGRzIgV_DDxQrBvxv58qq8EQmUqBNd",
            ],
        },
        {
            title: "Bird Watching",
            description: "Looking without pursuit. Soft observation of local wildlife in their natural habitat. Train your eye to notice the subtle movements of life around you.",
            category: "Observe",
            icon: "map",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDsP2PVMAnzEeQANwyaypvuhQWIt86oMF9re2yM2NG7_BzlSLrJN65CWOxusQWunAJmE3QFO5KI0y_wRzwx06Hf1pN5gjTvHjrhusUKu6KLAiYJdg5UqyuiV3Exg2Gx20sI1_BmDSyvmNahXSAiqdL9jtzB8c6xwHed0IyPo0Bs-jEZouWM4TARhZMON7EHMpCXGgxuD-xj1WpOkwIEH6Q_rSiGChRmBpn5iA7_qxdQcU6lzE12bqOVEBm59P0h2vHi_VoV3OLtsjnM",
            ],
        },
        {
            title: "Star Gazing",
            description: "Observation without urgency. Reconnecting with the cosmos under our clear, protected night skies. Feel the scale of the universe in silence.",
            category: "Wonder",
            icon: "star",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAfUEFkuPsDcRrwomNpV_HwfuHf9O-A4L4U6MKLljPvLYJJwCUlXXxY2mjgE-er6h_jG_PklBuvKzJnEWMoUJTBEFnfYdbWj0UoS3cNXdzuBn3c88huWQsb9L1tETDwGKjEr-JXTFe2AZ17ij8blc4Ins9QdK95sIdIr8UwQdYwnWrcQj1lZakOp8Ym0eJLoProiY8a7Mgr0ih-iysVaPtnEnXgmXEjcYNY-jgM_8kZIOdBMKHtMR5R46CeAnA6rA3Z00VVJIJkJdLa",
            ],
        },
    ];

    // Residency Section Data
    const residencies = [
        {
            title: "AI Sense-Making Residency",
            description: "A 5-day retreat to navigate the existential and practical shifts of the machine age through shared dialogue and deep reading.",
            category: "Future Studies",
            icon: "psychology",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCo3MJhZ2Vq9-Ga2Ea74ot7K3svtpwhjBfDSCrXUYnFOYTuKa0AlDwQhdZ8BxihuYNAXOpSdB-tTtKdMZs3cGX8b9BvyVJ0f7v10BnyVYkQEHkFN4-JvUnOV3TtcfaasbCLOtA1FJ36Hww-91OBUlDJHTpWkvWgfKLGDdNvhDccKPCHKxSre2HqIJDUmAdVeuaFlpLJWz1rQnuz4k27-rXUV4Tm2jrPtpK6Sxr5anLKPzQwalZ-iwFuH6pQqNpaJADP6WWqN2Pu-Yd4",
            ],
        },
        {
            title: "Tech Sabbatical Lite",
            description: "A gentle re-entry into the physical world. 3 days of analog interaction, paper maps, and mechanical watches.",
            category: "Wellness",
            icon: "devices_off",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAKzLVQHfKO6fVCwz_bbCF3sUZndGv5siIr8bEoBG89SMFxRE0TF5k1L_QJMRXIiNlj0-bkP0NEy5Dd40ZsQrG8Pz8IA3_FIH4-fUrU9kwhzYPpfkoeCi_cChlNmmX-UOo62Dpwf56h80orphiCxMzAb7h0S8XFPrFFU4kdVCTHQNNZLDYJhDYh1W0tvt4o4jr9VdvuTeuc0uJCPIko1WRGysJzvtzn4HG3S3c1p762-ustfuEvWZQvv1VAUjL8Wy-mRFFdTExKAu",
            ],
        },
        {
            title: "Silent Writing Residency",
            description: "No workshops, no feedback, no critique. Just 7 days of shared silence and 8 hours of daily writing time.",
            category: "Literature",
            icon: "edit_note",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuABDtELNVZFlmNhezKAvfaFfbvOYFwMzeiLScpWnRzmifqd-QuQRWU1RZ2D4QNv2Uk_wl5jaZF-YAkvAk0_gh2fJSys3XF90IKlYUpHYOuW6ppEjRBhWDPVJCScTGuZ5SPQA6R5ZYDrGuCw1kvgNrHXWZW6e67U1QWhvc6TkRDxQkWoM79vuQ7ka0Xm8UsR3uczDJj_-FGcqA7r_1uIUoVI0fxKKvYX0broLqXmM0S74MHkHML23rj6FjUVaFEDDtSNY6qqvynhexYk",
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100">
            <Header />
            <TestHero />
            <TestPhilosophy />

            {/* Wellness Section */}
            <section className="px-4 md:px-10 py-16 max-w-[1400px] mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Wellness
                    </h2>
                    <p className="text-earth-300 text-lg font-body">
                        Practices for physical and mental well-being
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {wellnessPractices.map((practice, index) => (
                        <CarouselCard
                            key={index}
                            title={practice.title}
                            description={practice.description}
                            images={practice.images}
                            icon={practice.icon}
                            category={practice.category}
                        />
                    ))}
                </div>
            </section>

            {/* Experiences Section */}
            <section className="px-4 md:px-10 py-16 max-w-[1400px] mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Experiences
                    </h2>
                    <p className="text-earth-300 text-lg font-body">
                        Curated activities and adventures
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <CarouselCard
                            key={index}
                            title={exp.title}
                            description={exp.description}
                            images={exp.images}
                            icon={exp.icon}
                            price={exp.price}
                            userCount={exp.userCount}
                        />
                    ))}
                </div>
            </section>

            {/* Expression Section */}
            <section className="px-4 md:px-10 py-16 max-w-[1400px] mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Expression
                    </h2>
                    <p className="text-earth-300 text-lg font-body">
                        Creative experiments and artistic exploration
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expressionPillars.map((pillar, index) => (
                        <CarouselCard
                            key={index}
                            title={pillar.title}
                            description={pillar.description}
                            images={pillar.images}
                            icon={pillar.icon}
                        />
                    ))}
                </div>
            </section>

            {/* Solitude Section */}
            <section className="px-4 md:px-10 py-16 max-w-[1400px] mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Solitude
                    </h2>
                    <p className="text-earth-300 text-lg font-body">
                        Practices for introspection and quiet contemplation
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solitudePractices.map((practice, index) => (
                        <CarouselCard
                            key={index}
                            title={practice.title}
                            description={practice.description}
                            images={practice.images}
                            icon={practice.icon}
                            category={practice.category}
                        />
                    ))}
                </div>
            </section>

            {/* Residency Section */}
            <section className="px-4 md:px-10 py-16 pb-32 max-w-[1400px] mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Residency
                    </h2>
                    <p className="text-earth-300 text-lg font-body">
                        Immersive programs and learning retreats
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {residencies.map((residency, index) => (
                        <CarouselCard
                            key={index}
                            title={residency.title}
                            description={residency.description}
                            images={residency.images}
                            icon={residency.icon}
                            category={residency.category}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
