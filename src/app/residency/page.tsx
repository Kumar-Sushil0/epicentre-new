"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ResidencyPage() {
  const [activeDay, setActiveDay] = useState("DAY 1");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [occupancyType, setOccupancyType] = useState("Single");

  const tabs = ["Overview", "Practitioners", "Schedule", "Inclusions", "Prices", "Location"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

  const scheduleData = {
    "DAY 1": [
      { time: "2:00 PM", activity: "Arrival & Welcome Tea" },
      { time: "4:00 PM", activity: "Opening Circle" },
      { time: "5:00 PM", activity: "Personal time to explore the Estate & Wellness offerings" },
      { time: "6:00 PM", activity: "Yoga Nidra & Pranayama" },
      { time: "7:30 PM", activity: "Sound Healing Journey Begins" },
      { time: "8:30 PM", activity: "Dinner" },
    ],
    "DAY 2": [
      { time: "7:00 AM", activity: "Morning Meditation" },
      { time: "8:00 AM", activity: "Breakfast" },
      { time: "10:00 AM", activity: "Yoga Session" },
      { time: "12:00 PM", activity: "Lunch" },
      { time: "2:00 PM", activity: "Workshop Session" },
      { time: "4:00 PM", activity: "Free Time" },
      { time: "6:00 PM", activity: "Evening Practice" },
      { time: "8:00 PM", activity: "Dinner" },
    ],
    "DAY 3": [
      { time: "7:00 AM", activity: "Final Meditation" },
      { time: "8:00 AM", activity: "Breakfast" },
      { time: "10:00 AM", activity: "Closing Circle" },
      { time: "12:00 PM", activity: "Check-out" },
    ],
  };

  const singleRate = 30000;
  const doubleRate = 40000;
  const nights = 2;
  const gstRate = 0.18;
  const selectedRate = occupancyType === "Single" ? singleRate : doubleRate;
  const subtotal = selectedRate * nights;
  const gst = subtotal * gstRate;
  const total = subtotal + gst;

  return (
    <div className="relative min-h-screen bg-[#F5F5F0]">
      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/banner.png"
          alt="Residency Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-8 right-8 text-white text-2xl font-light">
          epicentre
        </div>
      </div>

      {/* Main Title Section */}
      <section className="bg-[#F5F5F0] py-12">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
            Sama: A Wellness Immersion
          </h1>
          <p className="text-base text-black mb-4 leading-relaxed">
            {loremIpsum}
          </p>
          <p className="text-base text-black mb-8 leading-relaxed">
            {loremIpsum}
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black bg-transparent text-black uppercase font-medium hover:bg-black hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            DOWNLOAD BROCHURE
          </button>
        </div>
      </section>

      {/* Main Content Area - Split Layout */}
      <div className="flex gap-8 max-w-7xl mx-auto px-8 pb-16">
        {/* Left Column - Content */}
        <div className="flex-1">
          {/* Navigation Tabs */}
          <div className="flex gap-6 border-b-2 border-gray-300 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab.toLowerCase())}
                className="pb-4 px-2 text-base font-medium transition-colors text-gray-600 hover:text-gray-900"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* All Content Sections */}
          <div className="space-y-16">
            {/* Overview Section */}
            <div id="overview" className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  Sama: A Sound Healing Retreat
                </h2>
                <p className="text-sm text-gray-600 mb-6">Duration: 2 nights, 3 days</p>
                <p className="text-base text-black mb-4 leading-relaxed">
                  {loremIpsum}
                </p>
                <p className="text-base text-black mb-4 leading-relaxed">
                  {loremIpsum}
                </p>
                <p className="text-base text-black mb-6 leading-relaxed">
                  Celebrate the Spring Equinox with Nyasa Wellbeing & Hormaad Siganporia.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
                  Who Is It For?
                </h3>
                <ul className="space-y-2 text-base text-black">
                  <li>• Renew and reset at the start of the year</li>
                  <li>• Cultivate inner clarity</li>
                  <li>• Experience deep somatic and mental relaxation</li>
                  <li>• Strengthen the connection between body, breath, and inner guidance</li>
                  <li>• Restore the nervous system through sound-based modalities</li>
                  <li>• Carry forward a sense of balance, purpose, and inner calm</li>
                  <li>• Bounce back from burn out</li>
                  <li>• Acquire a Reset mode</li>
                </ul>
              </div>
            </div>

            {/* Practitioners Section */}
            <div id="practitioners" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                Practitioners
              </h2>
              <div className="flex gap-6">
                <div className="w-48 h-48 bg-gray-300 rounded-lg flex-shrink-0">
                  <Image
                    src="/banner.png"
                    alt="Practitioner"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'serif' }}>
                    Hormazd Siganporia
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">The Retreat Leader</p>
                  <p className="text-base text-black mb-4 leading-relaxed">
                    With 23 years of experience, Hormazd brings a unique perspective to wellness and healing practices.
                  </p>
                  <a href="#" className="text-[#D4A574] underline text-sm">
                    READ MORE ABOUT HORMAZD
                  </a>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div id="schedule" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                Schedule
              </h2>
              <div className="flex gap-4 mb-6">
                {["DAY 1", "DAY 2", "DAY 3"].map((day) => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`px-6 py-2 border-2 ${
                      activeDay === day
                        ? "border-[#D4A574] bg-[#D4A574] text-white"
                        : "border-gray-300 text-black hover:border-gray-400"
                    } transition-colors`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-24 text-base text-black font-medium">{item.time}</div>
                    <div className="text-base text-black">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions Section */}
            <div id="inclusions" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                What's Included
              </h2>
              <ul className="space-y-3 text-base text-black">
                <li>• Retreat inclusions, mentioned in the schedule</li>
                <li>• Luxurious accommodations at Epicentre</li>
                <li>• Breakfast & Dinner at the Epicentre all-day dining restaurant</li>
                <li>• Complimentary access to all the hotel facilities – pool, jacuzzi, steam, sauna, etc.</li>
              </ul>
            </div>

            {/* Prices Section */}
            <div id="prices" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                Tranquility Rates
              </h2>
              <ul className="space-y-3 text-base text-black">
                <li>• INR 30,000 plus taxes per night for single occupancy</li>
                <li>• INR 40,000 plus taxes per night for double occupancy</li>
              </ul>
            </div>

            {/* Location Section */}
            <div id="location" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                How To Get There
              </h2>
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Map View</p>
                  <a href="#" className="text-[#D4A574] underline text-sm">
                    View larger map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Fixed Booking Form */}
        <div className="w-96 flex-shrink-0">
          <div className="sticky top-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
              Book Your Retreat
            </h2>

            {/* Form Fields */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D4A574]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D4A574]"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D4A574]"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Occupancy Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="occupancy"
                      value="Single"
                      checked={occupancyType === "Single"}
                      onChange={(e) => setOccupancyType(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-black">Single</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="occupancy"
                      value="Couple"
                      checked={occupancyType === "Couple"}
                      onChange={(e) => setOccupancyType(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-black">Couple</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Event Dates */}
            <div className="border-t border-gray-300 pt-4 mb-4">
              <div className="text-sm text-gray-600 mb-1">CHECK-IN</div>
              <div className="text-base text-black font-medium">March 20, 2026</div>
              <div className="text-sm text-gray-600 mb-1 mt-4">CHECK-OUT</div>
              <div className="text-base text-black font-medium">March 22, 2026</div>
            </div>

            {/* Pricing Summary */}
            <div className="border-t border-gray-300 pt-4 mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Rate (2 Nights)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>GST (18%)</span>
                <span>₹{gst.toLocaleString()}</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">
                {occupancyType} Occupancy Rate + {nights} Nights + 18% GST
              </div>
              <div className="flex justify-between text-lg font-bold text-black pt-2 border-t border-gray-300">
                <span>Total Amount</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Book Button */}
            <button className="w-full py-3 bg-[#D4A574] text-white rounded-lg font-medium hover:bg-[#B89564] transition-colors uppercase mb-4">
              PAY & BOOK RETREAT
            </button>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <a href="#" className="hover:underline">Terms & Conditions</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Cancellation & Refunds Policy</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
