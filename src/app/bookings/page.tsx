"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";

export default function BookingsPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 ADULTS");
  const [currency, setCurrency] = useState("₹ INR");
  return (
    <div className="relative min-h-screen">
      <BannerCarousel />
      <Header />
      <div className="flex min-h-screen">
      {/* Left Section - Image */}
      <div className="w-1/2 relative pl-8 pr-8 pt-8 pb-8 bg-white">
        <div className="w-full h-full rounded-lg overflow-hidden relative">
          <Image
            src="/banner.png"
            alt="EpiCentre Resort"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Right Section - Booking Form */}
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-5xl font-bold text-black mb-2" style={{ fontFamily: 'serif' }}>
          RESERVE YOUR STAY
        </h1>

        {/* Subtitle */}
        <p className="text-base text-black mb-8">
          LOREM IPSUM DOLOR SIT AMET,
        </p>

        {/* Booking Form */}
        <div className="space-y-4">
          {/* Check In / Check Out */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-[#D4A574] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="flex-1">
                <label className="text-xs text-gray-600 uppercase mb-1 block">CHECK IN</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent text-sm text-gray-700 focus:outline-none appearance-none"
                    placeholder="SELECT DATE"
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="flex-1">
                <label className="text-xs text-gray-600 uppercase mb-1 block">CHECK OUT</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn}
                    className="w-full bg-transparent text-sm text-gray-700 focus:outline-none appearance-none"
                    placeholder="SELECT DATE"
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Guests & Rooms */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-[#D4A574] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.196-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.196-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-600 uppercase mb-1 block">GUESTS & ROOMS</label>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-sm text-gray-700 focus:outline-none appearance-none pr-6"
                >
                  <option value="1 ADULT">1 ADULT</option>
                  <option value="2 ADULTS">2 ADULTS</option>
                  <option value="3 ADULTS">3 ADULTS</option>
                  <option value="4 ADULTS">4 ADULTS</option>
                  <option value="5+ ADULTS">5+ ADULTS</option>
                </select>
                <svg className="w-4 h-4 text-gray-400 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Currency */}
          <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-[#D4A574] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-600 uppercase mb-1 block">CURRENCY</label>
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full bg-transparent text-sm text-gray-700 focus:outline-none appearance-none pr-6"
                >
                  <option value="₹ INR">₹ INR</option>
                  <option value="$ USD">$ USD</option>
                  <option value="€ EUR">€ EUR</option>
                  <option value="£ GBP">£ GBP</option>
                </select>
                <svg className="w-4 h-4 text-gray-400 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <button className="w-full mt-8 px-8 py-4 bg-[#8B4513] text-white rounded-lg font-bold hover:bg-[#6B3410] transition-colors uppercase">
          BOOK NOW
        </button>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          By Proceeding You Agree To The Terms And Conditions
        </p>
      </div>
      </div>
      <Footer />
    </div>
  );
}
