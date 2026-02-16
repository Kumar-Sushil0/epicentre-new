"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FullEstatePage() {
  const [formData, setFormData] = useState({
    purpose: "",
    coreIdea: "",
    alignment: "",
    outcome: "",
    participants: "",
    dailyStructure: "",
    speakerDetails: "",
    soundDetails: "",
    brandingDetails: "",
    preferredDates: "",
    numberOfNights: "",
    participantsDetails: "",
    foodManagement: "",
    lowStimulation: "",
    silenceProtocols: "",
    liabilityWaiver: "",
    previousDetails: "",
    conceptAlignment: false,
    name: "",
    phone: "",
    email: "",
    organization: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-earth-950">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Simple Text Content */}
        <div className="space-y-6 mb-16 text-earth-300 leading-relaxed max-w-4xl">
          <h1 className="text-4xl font-medium text-earth-100 mb-8">Full-estate use available by approval</h1>
          
          <p>The Silent Club may be reserved in its entirety for aligned, low-stimulation gatherings.</p>
          <p>Use is conditional.<br />Approval follows review.</p>
          
          <div className="my-8">
            <h2 className="text-2xl font-medium text-earth-100 mb-4">Full Estate — Private Use</h2>
            <p>Weekday (Mon–Thu): ₹75,000 per night</p>
            <p>Weekend (Fri–Sun): ₹1,00,000 per night</p>
            <p>Security Deposit: ₹25,000 refundable upon inspection.</p>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-medium text-earth-100 mb-4">Not Suited For</h2>
            <p>Weddings • Loud celebrations • Promotional events • High-stimulation formats • Influencer-driven gatherings</p>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-medium text-earth-100 mb-4">Includes</h2>
            <p>Exclusive access to the full estate • All accommodation units • Basic meal provisioning • On-site staff support • Silence protocol enforcement</p>
            <p className="mt-4 text-sm">External catering, amplified sound, and branding elements require prior disclosure and approval.</p>
          </div>
        </div>

        {/* Form */}
        <div className="border-t border-earth-800 pt-16">
          <h2 className="text-3xl font-medium text-earth-100 mb-4">Full Estate Request Form</h2>
          <p className="text-earth-300 mb-12">Before submitting, ensure your concept aligns with a low-noise, high-attention environment.</p>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Intent & Concept */}
            <div>
              <h3 className="text-xl font-medium text-earth-100 mb-6">Intent & Concept</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-earth-300 mb-2 text-sm">1. What is the purpose of your gathering?</label>
                  <textarea name="purpose" value={formData.purpose} onChange={handleChange} required rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">
                    2. Describe the core idea or concept of your event.<br />
                    What question, theme, or objective brings you here?
                  </label>
                  <textarea name="coreIdea" value={formData.coreIdea} onChange={handleChange} required rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">3. Why does The Silent Club feel aligned with this idea?</label>
                  <textarea name="alignment" value={formData.alignment} onChange={handleChange} required rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">4. What outcome should participants leave with?</label>
                  <textarea name="outcome" value={formData.outcome} onChange={handleChange} required rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>
              </div>
            </div>

            {/* Structure & Format */}
            <div>
              <h3 className="text-xl font-medium text-earth-100 mb-6">Structure & Format</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-earth-300 mb-2 text-sm">5. Expected number of participants?</label>
                  <input type="number" name="participants" value={formData.participants} onChange={handleChange} required min="2" max="50"
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">6. What will the daily structure look like?</label>
                  <textarea name="dailyStructure" value={formData.dailyStructure} onChange={handleChange} required rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">
                    7. Will there be external speakers or facilitators?<br />
                    If yes, provide: Names, Years of experience, Nature of involvement
                  </label>
                  <textarea name="speakerDetails" value={formData.speakerDetails} onChange={handleChange} rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">
                    8. Will there be amplified sound, music, or performance elements?<br />
                    If yes, explain.
                  </label>
                  <textarea name="soundDetails" value={formData.soundDetails} onChange={handleChange} rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-earth-300 mb-2 text-sm">
                    9. Will branding, signage, or media documentation be involved?<br />
                    If yes, describe.
                  </label>
                  <textarea name="brandingDetails" value={formData.brandingDetails} onChange={handleChange} rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>
              </div>
            </div>

            {/* Logistics */}
            <div>
              <h3 className="text-xl font-medium text-earth-100 mb-6">Logistics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-earth-300 mb-2 text-sm">10. Preferred dates</label>
                  <input type="text" name="preferredDates" value={formData.preferredDates} onChange={handleChange} required
                    placeholder="e.g., March 15-17, 2024"
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">
                    11. Overnight stay required?<br />
                    If yes, number of nights.
                  </label>
                  <input type="text" name="numberOfNights" value={formData.numberOfNights} onChange={handleChange}
                    placeholder="e.g., 2 nights"
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">
                    12. Will all participants stay on-site?<br />
                    If no, explain.
                  </label>
                  <textarea name="participantsDetails" value={formData.participantsDetails} onChange={handleChange} rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">13. Food management</label>
                  <div className="space-y-3 pt-2">
                    <label className="flex items-center gap-3 text-earth-300 text-sm">
                      <input type="radio" name="foodManagement" value="estate" checked={formData.foodManagement === "estate"} onChange={handleChange} required />
                      Estate provision
                    </label>
                    <label className="flex items-center gap-3 text-earth-300 text-sm">
                      <input type="radio" name="foodManagement" value="external" checked={formData.foodManagement === "external"} onChange={handleChange} required />
                      External catering
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Alignment */}
            <div>
              <h3 className="text-xl font-medium text-earth-100 mb-6">Cultural Alignment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-earth-300 mb-2 text-sm">14. Are you prepared to maintain low-stimulation conditions after 10 PM?</label>
                  <textarea name="lowStimulation" value={formData.lowStimulation} onChange={handleChange} required rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">15. Are you willing to operate within weekday silence protocols?</label>
                  <textarea name="silenceProtocols" value={formData.silenceProtocols} onChange={handleChange} required rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">16. Are you prepared to sign a liability waiver for unsupervised activities?</label>
                  <textarea name="liabilityWaiver" value={formData.liabilityWaiver} onChange={handleChange} required rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">
                    17. Have you hosted similar gatherings before?<br />
                    If yes, describe briefly.
                  </label>
                  <textarea name="previousDetails" value={formData.previousDetails} onChange={handleChange} rows={4}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>
              </div>
            </div>

            {/* Final Confirmation */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-earth-100">Final Confirmation</h3>
              <p className="text-earth-300 text-sm">The Silent Club is not suited for high-stimulus gatherings.</p>
              <label className="flex items-start gap-3 text-earth-300 text-sm">
                <input type="checkbox" name="conceptAlignment" checked={formData.conceptAlignment} onChange={handleChange} required className="mt-1" />
                I confirm our concept aligns with a low-noise, high-attention environment.
              </label>
            </div>

            {/* Primary Contact */}
            <div>
              <h3 className="text-xl font-medium text-earth-100 mb-6">Primary Contact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-earth-300 mb-2 text-sm">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>

                <div>
                  <label className="block text-earth-300 mb-2 text-sm">Organization (if applicable)</label>
                  <input type="text" name="organization" value={formData.organization} onChange={handleChange}
                    className="w-full bg-earth-900/30 border border-earth-800 rounded px-4 py-3 text-earth-100 focus:outline-none focus:border-earth-700" />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 text-earth-950 font-medium py-3 rounded transition-colors">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
