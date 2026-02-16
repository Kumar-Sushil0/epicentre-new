"use client";

import { useState } from "react";

export default function ServicesOffering() {
  const [accommodationType, setAccommodationType] = useState<'dorm' | 'room'>('dorm');
  const [formData, setFormData] = useState({
    bookingType: "",
    name: "",
    email: "",
    phone: "",
    message: ""
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
      const response = await fetch('/api/booking-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your request. We will get back to you soon.' });
        setFormData({
          bookingType: "",
          name: "",
          email: "",
          phone: "",
          message: ""
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
    <section id="cycles-section" className="relative py-24 px-6 md:px-16 bg-earth-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-gold-500 mb-8 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Cycles
        </h2>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-earth-800/50 rounded-lg p-1 border border-earth-700/50">
            <button
              onClick={() => setAccommodationType('dorm')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                accommodationType === 'dorm'
                  ? 'bg-gold-500 text-earth-950'
                  : 'text-earth-300 hover:text-gold-500'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Dorm
            </button>
            <button
              onClick={() => setAccommodationType('room')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                accommodationType === 'room'
                  ? 'bg-gold-500 text-earth-950'
                  : 'text-earth-300 hover:text-gold-500'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Private Room
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Day Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Day Cycle
            </h3>
            
            <p className="text-earth-300 text-sm leading-relaxed mb-6 h-12">
              Designed for short-duration recalibration and focused decision clarity.
            </p>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">9AM–2PM</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Includes 1 meal</span>
              </div>
            </div>

            <div className="text-gold-500 text-lg font-semibold mt-auto">
              ₹1,000
            </div>
          </div>

          {/* Weekend Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekend Cycle
            </h3>
            
            <p className="text-earth-300 text-sm leading-relaxed mb-6 h-12">
              Designed for structured withdrawal with optional experimental interaction.
            </p>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">2 nights / 3 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Meals Included </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Full access</span>
              </div>
            </div>

            <div className="text-gold-500 text-lg font-semibold mt-auto">
              {accommodationType === 'dorm' ? '₹10,000' : '₹15,000'}
            </div>
          </div>

          {/* Weekday Cycle Card */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gold-500 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Weekday Cycle
            </h3>
            
            <p className="text-earth-300 text-sm leading-relaxed mb-6 h-12">
              Designed for uninterrupted deep work or identity reset.
            </p>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">4 nights / 5 days</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Meals Included</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">No event overlap</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-500">•</span>
                <span className="text-earth-300 text-sm">Full access</span>
              </div>
            </div>

            <div className="text-gold-500 text-lg font-semibold mt-auto">
              {accommodationType === 'dorm' ? '₹20,000' : '₹30,000'}
            </div>
          </div>

        </div>

        {/* Bottom Notice */}
        <div className="text-center space-y-4 mb-8">
          <p className="text-earth-300 text-sm leading-relaxed max-w-full mx-auto">
            This space is not suited for high-stimulus gatherings.
            Access depends on alignment with the nature of the estate.
            Scale, urgency, or money do not override intent.
          </p>
        </div>

        {/* Request Conversation Section */}
        <div className="space-y-6">
          
          {/* Title - Above Form */}
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold text-gold-500 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Request Conversation
            </h3>
          </div>

          {/* Booking Form */}
          <div className="bg-earth-800/40 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6">
            {submitStatus && (
              <div className={`mb-4 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* 4 Column Grid for Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Booking Type Dropdown */}
                <div>
                  <label htmlFor="bookingType" className="block text-earth-300 mb-2 text-sm">
                    Booking Type
                  </label>
                  <select
                    id="bookingType"
                    name="bookingType"
                    value={formData.bookingType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-earth-900/50 border border-earth-600 rounded-lg text-earth-100 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    <option value="">Select booking type</option>
                    <option value="cycle">Cycle Booking</option>
                    <option value="membership">Membership</option>
                    <option value="full-estate">Full Estate Booking</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-earth-300 mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-earth-900/50 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-earth-300 mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-earth-900/50 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-earth-300 mb-2 text-sm">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-earth-900/50 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  />
                </div>

              </div>

              {/* Message - Full Width */}
              <div>
                <label htmlFor="message" className="block text-earth-300 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-earth-900/50 border border-earth-600 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-vertical"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-500 hover:bg-gold-600 text-earth-950 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
