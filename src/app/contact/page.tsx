"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "general"
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
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
                                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-gold-500 text-xl">mail</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-earth-100 mb-2">Email</h3>
                                    <p className="text-earth-300">hello@epicentre.com</p>
                                    <p className="text-earth-400 text-sm mt-1">We typically respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-gold-500 text-xl">call</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-earth-100 mb-2">Phone</h3>
                                    <p className="text-earth-300">+91 [phone_number]</p>
                                    <p className="text-earth-400 text-sm mt-1">Available 9 AM - 6 PM IST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-gold-500 text-xl">location_on</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-earth-100 mb-2">Location</h3>
                                    <p className="text-earth-300">Coorg, Karnataka, India</p>
                                    <p className="text-earth-400 text-sm mt-1">Nestled in the Western Ghats</p>
                                </div>
                            </div>
                        </div>

                        {/* Response Time Notice */}
                        <div className="bg-earth-800/50 border border-gold-500/20 rounded-lg p-6">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-gold-500 text-xl mt-1">schedule</span>
                                <div>
                                    <h4 className="text-lg font-semibold text-earth-100 mb-2">Our Response Approach</h4>
                                    <p className="text-earth-300 text-sm leading-relaxed">
                                        We believe in thoughtful communication. Each inquiry receives personal attention, 
                                        and we take time to provide meaningful responses rather than quick automated replies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-earth-800/30 border border-earth-700 rounded-lg p-8">
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
                                    rows={6}
                                    className="w-full px-4 py-3 bg-earth-900 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-vertical"
                                    placeholder="Tell us more about your inquiry, interests, or questions..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gold-500 hover:bg-gold-600 text-earth-900 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                <span>Send Message</span>
                                <span className="material-symbols-outlined text-xl">send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}