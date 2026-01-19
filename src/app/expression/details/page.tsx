"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ExpressionDetailsPage() {
  const searchParams = useSearchParams();
  const expressionId = parseInt(searchParams.get("id") || "1");
  const [activeDay, setActiveDay] = useState("DAY 1");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [occupancyType, setOccupancyType] = useState("Single");

  const tabs = ["Overview", "Features", "Schedule", "Inclusions", "Prices", "Location"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const expressionData: Record<number, any> = {
    1: {
      title: "Expression 1",
      subtitle: "A creative space for artistic exploration",
      description: "A dedicated space designed for artists, writers, and creators to explore their craft. This expression area provides the perfect environment for creative work with natural light, inspiring views, and all the tools needed for artistic expression.",
      features: [
        "Large studio space",
        "Natural north-facing light",
        "Art supplies and materials",
        "Display walls for work",
        "Comfortable work area",
        "Private creative space"
      ],
      checkIn: "March 20, 2026",
      checkOut: "March 22, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Studio Tour" },
          { time: "4:00 PM", activity: "Materials Setup" },
          { time: "6:00 PM", activity: "Creative Exploration" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "9:00 AM", activity: "Morning Creative Session" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Afternoon Work Session" },
          { time: "4:00 PM", activity: "Inspiration Walk" },
          { time: "6:00 PM", activity: "Evening Creative Work" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "9:00 AM", activity: "Final Creative Session" },
          { time: "11:00 AM", activity: "Work Review & Reflection" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    2: {
      title: "Expression 2",
      subtitle: "A creative space for artistic exploration",
      description: "An inspiring workspace for musicians, performers, and sound artists. This expression area features acoustic treatment, recording capabilities, and performance space. Perfect for those who need a dedicated environment for musical or performance-based creative work.",
      features: [
        "Acoustic treatment",
        "Recording equipment",
        "Performance space",
        "Musical instruments",
        "Soundproof walls",
        "Professional lighting"
      ],
      checkIn: "April 15, 2026",
      checkOut: "April 17, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Studio Tour" },
          { time: "4:00 PM", activity: "Equipment Setup" },
          { time: "6:00 PM", activity: "Sound Check & Exploration" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "9:00 AM", activity: "Morning Practice Session" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Recording Session" },
          { time: "4:00 PM", activity: "Break & Reflection" },
          { time: "6:00 PM", activity: "Evening Performance Practice" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "9:00 AM", activity: "Final Recording Session" },
          { time: "11:00 AM", activity: "Review & Reflection" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    3: {
      title: "Expression 3",
      subtitle: "A creative space for artistic exploration",
      description: "A versatile creative space designed for writers, poets, and literary artists. This expression area provides a quiet, contemplative environment with extensive library access, writing tools, and spaces for both solo work and collaborative sessions.",
      features: [
        "Writing desk and chair",
        "Extensive library",
        "Quiet reading nook",
        "Typewriter and writing tools",
        "Collaboration space",
        "Outdoor writing area"
      ],
      checkIn: "May 10, 2026",
      checkOut: "May 12, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Space Orientation" },
          { time: "4:00 PM", activity: "Library Exploration" },
          { time: "6:00 PM", activity: "Evening Writing Session" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "9:00 AM", activity: "Morning Writing Block" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Reading & Research" },
          { time: "4:00 PM", activity: "Outdoor Writing Time" },
          { time: "6:00 PM", activity: "Evening Writing Session" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "9:00 AM", activity: "Final Writing Session" },
          { time: "11:00 AM", activity: "Work Review & Sharing" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    },
    4: {
      title: "Expression 4",
      subtitle: "A creative space for artistic exploration",
      description: "A dynamic multi-purpose creative space for visual artists, photographers, and digital creators. This expression area features professional lighting, backdrop systems, digital workstations, and gallery space for displaying completed work.",
      features: [
        "Professional lighting setup",
        "Backdrop systems",
        "Digital workstations",
        "Gallery display area",
        "Photography equipment",
        "Printing facilities"
      ],
      checkIn: "June 25, 2026",
      checkOut: "June 27, 2026",
      schedule: {
        "DAY 1": [
          { time: "2:00 PM", activity: "Arrival & Studio Tour" },
          { time: "4:00 PM", activity: "Equipment Setup" },
          { time: "6:00 PM", activity: "Creative Exploration" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 2": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "9:00 AM", activity: "Morning Creative Session" },
          { time: "12:00 PM", activity: "Lunch" },
          { time: "2:00 PM", activity: "Photography/Visual Work" },
          { time: "4:00 PM", activity: "Digital Editing Session" },
          { time: "6:00 PM", activity: "Gallery Setup" },
          { time: "8:00 PM", activity: "Dinner" },
        ],
        "DAY 3": [
          { time: "8:00 AM", activity: "Breakfast" },
          { time: "9:00 AM", activity: "Final Creative Session" },
          { time: "11:00 AM", activity: "Work Presentation & Review" },
          { time: "12:00 PM", activity: "Check-out" },
        ],
      }
    }
  };

  const currentExpression = expressionData[expressionId] || expressionData[1];

  const scheduleData = currentExpression.schedule;

  const singleRate = 28000;
  const doubleRate = 38000;
  const nights = 2;
  const gstRate = 0.18;
  const selectedRate = occupancyType === "Single" ? singleRate : doubleRate;
  const subtotal = selectedRate * nights;
  const gst = subtotal * gstRate;
  const total = subtotal + gst;

  return (
    <div className="relative min-h-screen bg-[#F5F5F0]">
      <Header />
      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/banner.png"
          alt="Expression Hero"
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
          <h1 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'serif' }}>
            {currentExpression.title}
          </h1>
          <p className="text-base text-black mb-8 italic leading-relaxed">
            {currentExpression.subtitle}
          </p>

          {/* Bullet Points Grid */}
          <div className="grid grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto text-left">
            <div className="space-y-3">
              <p className="text-base text-black">• Premium accommodation facilities</p>
              <p className="text-base text-black">• Exclusive access to private spaces</p>
              <p className="text-base text-black">• Personalized wellness programs</p>
            </div>
            <div className="space-y-3">
              <p className="text-base text-black">• Gourmet dining experiences</p>
              <p className="text-base text-black">• Curated cultural activities</p>
              <p className="text-base text-black">• Professional guidance and support</p>
            </div>
            <div className="space-y-3">
              <p className="text-base text-black">• Serene natural surroundings</p>
              <p className="text-base text-black">• State-of-the-art amenities</p>
              <p className="text-base text-black">• Transformative retreat experience</p>
            </div>
          </div>

          {/* Closing Text */}
          <p className="text-base text-black mb-8 leading-relaxed max-w-3xl mx-auto">
            Experience a journey of transformation and renewal in our carefully curated spaces designed for reflection, creativity, and personal growth.
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
                  Overview
                </h2>
                <p className="text-base text-black mb-6 leading-relaxed">
                  {currentExpression.description}
                </p>
              </div>
            </div>

            {/* Features Section */}
            <div id="features" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                Features
              </h2>
              <ul className="grid grid-cols-2 gap-3 text-base text-black">
                {currentExpression.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
                    className={`px-6 py-2 border-2 ${activeDay === day
                        ? "border-[#D4A574] bg-[#D4A574] text-white"
                        : "border-gray-300 text-black hover:border-gray-400"
                      } transition-colors`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {scheduleData[activeDay as keyof typeof scheduleData].map((item: { time: string; activity: string }, index: number) => (
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
                <li>• Accommodation in {currentExpression.title}</li>
                <li>• All meals (breakfast, lunch, dinner)</li>
                <li>• Access to creative studio and equipment</li>
                <li>• Complimentary art supplies and materials</li>
                <li>• Access to shared creative spaces</li>
              </ul>
            </div>

            {/* Prices Section */}
            <div id="prices" className="space-y-8">
              <h2 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: 'serif' }}>
                Pricing
              </h2>
              <ul className="space-y-3 text-base text-black">
                <li>• INR 28,000 plus taxes per night for single occupancy</li>
                <li>• INR 38,000 plus taxes per night for double occupancy</li>
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
              Book Your Stay
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
              <div className="text-base text-black font-medium">{currentExpression.checkIn}</div>
              <div className="text-sm text-gray-600 mb-1 mt-4">CHECK-OUT</div>
              <div className="text-base text-black font-medium">{currentExpression.checkOut}</div>
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
              PAY & BOOK STAY
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
