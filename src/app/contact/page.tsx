"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RequestConversation from "../components/RequestConversation";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "general"
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
                setSubmitStatus({ type: 'success', message: 'Thank you for reaching out. We will get back to you soon.' });
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    inquiryType: "general"
                });
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit form. Please try again.' });
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
                    
                    {/* Contact Information */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-bold text-gold-500 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Connect With Us
                            </h2>
                            <p className="text-earth-300 text-lg leading-relaxed mb-8">
                                Whether you're interested in a residency, have questions about our practices, 
                                or simply want to learn more about EPiCentre, we'd love to hear from you.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-gold-500 text-xl">mail</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-earth-100 mb-2">Email</h3>
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
                                    <h3 className="text-xl font-semibold text-earth-100 mb-2">WhatsApp</h3>
                                    <a href="https://wa.me/919890322494" target="_blank" rel="noopener noreferrer" className="text-earth-300 hover:text-gold-500 transition-colors">+91 98903 22494</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-gold-500 text-xl">location_on</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-earth-100 mb-2">Location</h3>
                                    <a href="https://maps.google.com/?q=Bird+Sanctuary+Kumbhargaon+Bhigwan+Maharashtra" target="_blank" rel="noopener noreferrer" className="text-earth-300 hover:text-gold-500 transition-colors">
                                        Near Bird Sanctuary, Kumbhargaon,<br />Bhigwan, Maharashtra 413104
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-earth-100 mb-2">Instagram</h3>
                                    <a href="https://instagram.com/thesilent.club" target="_blank" rel="noopener noreferrer" className="text-earth-300 hover:text-gold-500 transition-colors">@thesilent.club</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
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
                            
                            {/* Inquiry Type */}
                            <div>
                                <label htmlFor="inquiryType" className="block text-sm font-medium text-earth-200 mb-2">
                                    Type of Inquiry
                                </label>
                                <select
                                    id="inquiryType"
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                >
                                    <option value="general">General Inquiry</option>
                                    <option value="residency">Residency Program</option>
                                    <option value="wellness">Wellness Practices</option>
                                    <option value="experiences">Experiences</option>
                                    <option value="expression">Expression Labs</option>
                                    <option value="solitude">Solitude Practices</option>
                                    <option value="booking">Booking & Reservations</option>
                                    <option value="partnership">Partnership</option>
                                </select>
                            </div>

                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-earth-200 mb-2">
                                    Name
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
                                    Email
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

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-earth-200 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="Brief subject line"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-earth-200 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={3}
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-vertical"
                                    placeholder="Tell us more about your inquiry, interests, or questions..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gold-500 hover:bg-gold-600 text-earth-900 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
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