"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FullEstatePage() {
  const [formData, setFormData] = useState({
    purpose: "",
    concept: "",
    alignment: "",
    participants: "",
    preferredDates: "",
    amplifiedSound: "",
    confirmation: false,
    name: "",
    phone: "",
    email: "",
    organization: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/full-estate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          purpose: formData.purpose,
          concept: formData.concept,
          alignment: formData.alignment,
          amplifiedSound: formData.amplifiedSound,
          participants: formData.participants,
          preferredDates: formData.preferredDates,
          confirmed: formData.confirmation,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          organization: formData.organization
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Your full estate request has been submitted. We will review and get back to you soon.' });
        setFormData({
          purpose: "",
          concept: "",
          alignment: "",
          participants: "",
          preferredDates: "",
          amplifiedSound: "",
          confirmation: false,
          name: "",
          phone: "",
          email: "",
          organization: ""
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit request. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-earth-950">
      <Header />
      
      <div className="max-w-full mx-auto px-6 md:px-10 lg:px-16 py-20">
        {/* Header and Pricing Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-medium text-earth-100 mb-3">Form - Full Estate Use</h1>
            <div className="space-y-2 text-earth-300 text-sm leading-relaxed">
              <p>The Silent Club may be reserved in its<br/> entirety for aligned, low-stimulation gatherings.<br/> Use is conditional and approved after review.</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-1.5 text-earth-300 text-sm">
            <h2 className="text-2xl font-medium text-earth-100 mb-2">Pricing</h2>
            <p>Weekday (Mon–Thu): ₹75,000 per night</p>
            <p>Weekend (Fri–Sun): ₹1,00,000 per night</p>
            <p>Security Deposit: ₹25,000 (refundable upon inspection)</p>
            <p className="text-xs pt-1">Includes full estate access, accommodation, basic meals, and staff support.</p>
          </div>
        </div>

        {/* Form */}
        <div className="border-t border-earth-800 pt-8">
          <h2 className="text-2xl font-medium text-earth-100 mb-6">Full Estate Request Form</h2>

          {submitStatus && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                : 'bg-red-500/10 border border-red-500/30 text-red-400'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Three Column Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div>
                <label className="block text-earth-300 mb-1 text-xs">What is the purpose of your gathering?</label>
                <textarea 
                  name="purpose" 
                  value={formData.purpose} 
                  onChange={handleChange} 
                  required 
                  rows={2}
                  className="w-full bg-earth-900/30 border border-earth-800 rounded px-3 py-1.5 text-earth-100 text-xs focus:outline-none focus:border-earth-700"
                />
              </div>

              <div>
                <label className="block text-earth-300 mb-1 text-xs">Describe the concept in 3–5 sentences.</label>
                <textarea 
                  name="concept" 
                  value={formData.concept} 
                  onChange={handleChange} 
                  required 
                  rows={2}
                  className="w-full bg-earth-900/30 border border-earth-800 rounded px-3 py-1.5 text-earth-100 text-xs focus:outline-none focus:border-earth-700"
                />
              </div>

              <div>
                <label className="block text-earth-300 mb-1 text-xs">Why does The Silent Club feel aligned with this idea?</label>
                <textarea 
                  name="alignment" 
                  value={formData.alignment} 
                  onChange={handleChange} 
                  required 
                  rows={2}
                  className="w-full bg-earth-900/30 border border-earth-800 rounded px-3 py-1.5 text-earth-100 text-xs focus:outline-none focus:border-earth-700"
                />
              </div>

              <div>
                <label className="block text-earth-300 mb-1 text-xs">Will there be amplified sound, branding, or media documentation?</label>
                <textarea 
                  name="amplifiedSound" 
                  value={formData.amplifiedSound} 
                  onChange={handleChange} 
                  required 
                  rows={2}
                  className="w-full bg-earth-900/30 border border-earth-800 rounded px-3 py-1.5 text-earth-100 text-xs focus:outline-none focus:border-earth-700"
                />
              </div>

              <div>
                <label className="block text-earth-300 mb-1 text-xs">Expected number of participants?</label>
                <textarea 
                  name="participants" 
                  value={formData.participants} 
                  onChange={handleChange} 
                  required 
                  rows={2}
                  className="w-full bg-earth-900/30 border border-earth-800 rounded px-3 py-1.5 text-earth-100 text-xs focus:outline-none focus:border-earth-700"
                />
              </div>

              <div>
                <label className="block text-earth-300 mb-1 text-xs">Preferred dates and number of nights?</label>
                <textarea 
                  name="preferredDates" 
                  value={formData.preferredDates} 
                  onChange={handleChange} 
                  required
                  rows={2}
                  className="w-full bg-earth-900/30 border border-earth-800 rounded px-3 py-1.5 text-earth-100 text-xs focus:outline-none focus:border-earth-700"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="border-t border-earth-800 pt-3 mt-3">
              <h3 className="text-2xl font-medium text-earth-100 mb-2">Contact Details</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div>
                  <label className="block text-earth-300 mb-1 text-xs">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-3 py-1.5 text-earth-100 text-xs focus:outline-none focus:border-earth-700"
                  />
                </div>

                <div>
                  <label className="block text-earth-300 mb-1 text-xs">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-3 py-1.5 text-earth-100 text-xs focus:outline-none focus:border-earth-700"
                  />
                </div>

                <div>
                  <label className="block text-earth-300 mb-1 text-xs">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-3 py-1.5 text-earth-100 text-xs focus:outline-none focus:border-earth-700"
                  />
                </div>

                <div>
                  <label className="block text-earth-300 mb-1 text-xs">Organization (if any)</label>
                  <input 
                    type="text" 
                    name="organization" 
                    value={formData.organization} 
                    onChange={handleChange}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-3 py-1.5 text-earth-100 text-xs focus:outline-none focus:border-earth-700"
                  />
                </div>
              </div>
            </div>

            {/* Confirmation Row */}
            <div className="pt-2">
              <label className="flex items-center gap-2 text-earth-300 text-xs">
                <span>Do you confirm your event will operate within low-noise, high-attention conditions?</span>
                <input 
                  type="checkbox" 
                  name="confirmation" 
                  checked={formData.confirmation} 
                  onChange={handleChange} 
                  required
                />
                <span>I Confirm.</span>
              </label>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-500 hover:bg-gold-400 text-earth-950 font-medium py-2.5 rounded transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
