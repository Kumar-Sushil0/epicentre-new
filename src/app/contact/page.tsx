"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RequestConversation from "../components/RequestConversation";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        availability: "",
        skills: "",
        experience: "",
        motivation: "",
        duration: "3-6 months",
        cv: null as File | null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({
            ...prev,
            cv: file
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Thank you for your interest! We will review your application and get back to you soon.' });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    location: "",
                    availability: "",
                    skills: "",
                    experience: "",
                    motivation: "",
                    duration: "3-6 months",
                    cv: null
                });
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit application. Please try again.' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-earth-900 text-earth-100">
            <Header />
            
            {/* Contact Form Section */}
            <section className="px-4 md:px-10 py-20 pt-32 max-w-[1200px] mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Volunteer Information */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-bold text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Work as Volunteer
                            </h2>
                            <p className="text-earth-400 text-sm mb-8 italic">Minimum participation: 3 months</p>
                            <div className="bg-earth-800/30 border border-earth-700 rounded-lg p-6 space-y-4 mb-6">
                                <h3 className="text-xl font-semibold text-gold-500">Exchange Includes</h3>
                                <ul className="space-y-3 text-earth-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Food and accommodation during your volunteer period</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Full access to entire estate facility</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Immersive experience in silence practices</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Opportunity to learn and grow in a unique environment</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="bg-earth-800/30 border border-earth-700 rounded-lg p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-gold-500">Volunteer Roles</h3>
                                <ul className="space-y-3 text-earth-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Facility management</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Vendor Communication</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Guest hospitality and Communiaction</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>Content creation and documentation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-earth-100">Questions?</h3>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-gold-500 text-xl">mail</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-earth-100 mb-1">Email</h4>
                                    <a href="mailto:hello@thesilent.club" className="text-earth-300 hover:text-gold-500 transition-colors">hello@thesilent.club</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-earth-100 mb-1">WhatsApp</h4>
                                    <a href="https://wa.me/919890322494" target="_blank" rel="noopener noreferrer" className="text-earth-300 hover:text-gold-500 transition-colors">+91 98903 22494</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Volunteer Application Form */}
                    <div className="bg-earth-800/30 border border-earth-700 rounded-lg p-8">
                        {submitStatus && (
                            <div className={`mb-6 p-4 rounded-lg ${
                                submitStatus.type === 'success' 
                                    ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                            }`}>
                                {submitStatus.message}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-earth-200 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="Your full name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-earth-200 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-earth-200 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-earth-200 mb-2">
                                    Current Location *
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="City, Country"
                                />
                            </div>

                            {/* Duration */}
                            <div>
                                <label htmlFor="duration" className="block text-sm font-medium text-earth-200 mb-2">
                                    Preferred Duration *
                                </label>
                                <select
                                    id="duration"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                >
                                    <option value="3-6 months">3-6 months</option>
                                    <option value="6-12 months">6-12 months</option>
                                    <option value="12+ months">12+ months</option>
                                    <option value="flexible">Flexible (minimum 3 months)</option>
                                </select>
                            </div>

                            {/* Availability */}
                            <div>
                                <label htmlFor="availability" className="block text-sm font-medium text-earth-200 mb-2">
                                    When can you start? *
                                </label>
                                <input
                                    type="text"
                                    id="availability"
                                    name="availability"
                                    value={formData.availability}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="e.g., Immediately, Next month, After June 2026"
                                />
                            </div>

                            {/* Skills */}
                            <div>
                                <label htmlFor="skills" className="block text-sm font-medium text-earth-200 mb-2">
                                    Relevant Skills *
                                </label>
                                <textarea
                                    id="skills"
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleInputChange}
                                    required
                                    rows={3}
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-vertical"
                                    placeholder="e.g., Gardening, cooking, maintenance, hospitality, content creation, photography, etc."
                                />
                            </div>

                            {/* Experience */}
                            <div>
                                <label htmlFor="experience" className="block text-sm font-medium text-earth-200 mb-2">
                                    Previous Experience
                                </label>
                                <textarea
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-vertical"
                                    placeholder="Any relevant volunteer or work experience..."
                                />
                            </div>

                            {/* Motivation */}
                            <div>
                                <label htmlFor="motivation" className="block text-sm font-medium text-earth-200 mb-2">
                                    Why do you want to volunteer with us? *
                                </label>
                                <textarea
                                    id="motivation"
                                    name="motivation"
                                    value={formData.motivation}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-vertical"
                                    placeholder="Tell us what draws you to The Silent Club and what you hope to contribute and gain from this experience..."
                                />
                            </div>

                            {/* CV Upload */}
                            <div>
                                <label htmlFor="cv" className="block text-sm font-medium text-earth-200 mb-2">
                                    Attach CV/Resume
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="cv"
                                        name="cv"
                                        onChange={handleFileChange}
                                        accept=".pdf,.doc,.docx"
                                        className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gold-500 file:text-earth-900 hover:file:bg-gold-600 file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    />
                                    {formData.cv && (
                                        <p className="mt-2 text-sm text-earth-400">
                                            Selected: {formData.cv.name}
                                        </p>
                                    )}
                                </div>
                                <p className="mt-1 text-xs text-earth-400">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gold-500 hover:bg-gold-600 text-earth-900 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
                                {!isSubmitting && <span className="material-symbols-outlined text-xl">send</span>}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <RequestConversation />
            <Footer />
        </main>
    );
}