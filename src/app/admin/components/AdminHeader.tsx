'use client';

import { useState } from 'react';

export default function AdminHeader() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="fixed top-0 right-0 left-64 h-20 bg-earth-900/80 backdrop-blur-xl border-b border-gold-500/20 z-40">
            <div className="h-full px-8 flex items-center justify-between">
                {/* Search Bar */}
                <div className="flex-1 max-w-xl">
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/60">
                            search
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search users, bookings, activities..."
                            className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl pl-12 pr-4 py-2.5 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Notifications */}
                    <button className="relative p-2 rounded-xl hover:bg-earth-800/50 text-earth-300 hover:text-gold-500 transition-all">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    </button>

                    {/* Messages */}
                    <button className="relative p-2 rounded-xl hover:bg-earth-800/50 text-earth-300 hover:text-gold-500 transition-all">
                        <span className="material-symbols-outlined">mail</span>
                        <span className="absolute top-1 right-1 px-1.5 py-0.5 text-[10px] font-bold bg-gold-500 text-earth-950 rounded-full">
                            3
                        </span>
                    </button>

                    {/* Quick Actions */}
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all">
                        <span className="material-symbols-outlined text-xl">add</span>
                        <span>New Booking</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
