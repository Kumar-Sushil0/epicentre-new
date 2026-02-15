"use client";

import { useState } from "react";

export default function CycleInquiryForm() {
  const [formData, setFormData] = useState({
    whatBringsYou: "",
    cycle: "",
    focus: "",
    silenceExperience: "",
    selfDirected: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-earth-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-gold-500 mb-4 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Request Conversation
        </h2>
        <p className="text-earth-300 text-center mb-12">
          Share your intent. We'll respond within 48 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* What brings you here? */}
          <div>
            <label htmlFor="whatBringsYou" className="block text-gold-500 text-sm font-medium mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              What brings you here?
            </label>
            <textarea
              id="whatBringsYou"
              name="whatBringsYou"
              value={formData.whatBringsYou}
              onChange={handleChange}
              rows={4}
              className="w-full bg-earth-800/40 border border-earth-700/50 rounded-md px-4 py-3 text-earth-100 placeholder-earth-500 focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="Share what draws you to this space..."
              required
            />
          </div>

          {/* Which cycle are you considering? */}
          <div>
            <label htmlFor="cycle" className="block text-gold-500 text-sm font-medium mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Which cycle are you considering?
            </label>
            <select
              id="cycle"
              name="cycle"
              value={formData.cycle}
              onChange={handleChange}
              className="w-full bg-earth-800/40 border border-earth-700/50 rounded-md px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 transition-colors"
              required
            >
              <option value="">Select a cycle</option>
              <option value="day">Day Cycle</option>
              <option value="weekend">Weekend Cycle</option>
              <option value="weekday">Weekday Cycle</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>

          {/* What are you seeking to focus on? */}
          <div>
            <label htmlFor="focus" className="block text-gold-500 text-sm font-medium mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              What are you seeking to focus on?
            </label>
            <textarea
              id="focus"
              name="focus"
              value={formData.focus}
              onChange={handleChange}
              rows={4}
              className="w-full bg-earth-800/40 border border-earth-700/50 rounded-md px-4 py-3 text-earth-100 placeholder-earth-500 focus:outline-none focus:border-gold-500 transition-colors"
              placeholder="Describe your intention or area of focus..."
              required
            />
          </div>

          {/* Have you experienced extended silence before? */}
          <div>
            <label className="block text-gold-500 text-sm font-medium mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Have you experienced extended silence before?
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="silenceExperience"
                  value="yes"
                  checked={formData.silenceExperience === "yes"}
                  onChange={handleChange}
                  className="w-4 h-4 text-gold-500 border-earth-700 focus:ring-gold-500"
                  required
                />
                <span className="text-earth-300 text-sm">Yes, I have experience with extended silence</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="silenceExperience"
                  value="no"
                  checked={formData.silenceExperience === "no"}
                  onChange={handleChange}
                  className="w-4 h-4 text-gold-500 border-earth-700 focus:ring-gold-500"
                />
                <span className="text-earth-300 text-sm">No, this would be my first time</span>
              </label>
            </div>
          </div>

          {/* Can you remain self-directed? */}
          <div>
            <label className="block text-gold-500 text-sm font-medium mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Can you remain self-directed without instruction, guidance, or ongoing interaction?
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="selfDirected"
                  value="yes"
                  checked={formData.selfDirected === "yes"}
                  onChange={handleChange}
                  className="w-4 h-4 text-gold-500 border-earth-700 focus:ring-gold-500"
                  required
                />
                <span className="text-earth-300 text-sm">Yes, I can work independently</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="selfDirected"
                  value="no"
                  checked={formData.selfDirected === "no"}
                  onChange={handleChange}
                  className="w-4 h-4 text-gold-500 border-earth-700 focus:ring-gold-500"
                />
                <span className="text-earth-300 text-sm">No, I prefer structured guidance</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="selfDirected"
                  value="unsure"
                  checked={formData.selfDirected === "unsure"}
                  onChange={handleChange}
                  className="w-4 h-4 text-gold-500 border-earth-700 focus:ring-gold-500"
                />
                <span className="text-earth-300 text-sm">Unsure</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-earth-950 px-8 py-4 rounded-md font-semibold transition-all duration-300 uppercase tracking-wider text-sm"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Submit Request
              <span className="text-lg">→</span>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
