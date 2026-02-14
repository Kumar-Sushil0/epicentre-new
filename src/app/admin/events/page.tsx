'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

interface Event {
    id: string;
    title: string;
    type: 'Workshop' | 'Retreat' | 'Festival' | 'Conference' | 'Celebration';
    date: string;
    endDate: string;
    time: string;
    venue: string;
    capacity: number;
    registered: number;
    price: string;
    status: 'Upcoming' | 'Ongoing' | 'Completed' | 'Cancelled';
    organizer: string;
    description: string;
    thumbnail: string;
}

const events: Event[] = [
    {
        id: 'EVT-001',
        title: 'Wellness Retreat Weekend',
        type: 'Retreat',
        date: '2026-03-15',
        endDate: '2026-03-17',
        time: '9:00 AM',
        venue: 'Main Hall',
        capacity: 50,
        registered: 42,
        price: '₹12,000',
        status: 'Upcoming',
        organizer: 'Priya Sharma',
        description: 'A transformative 3-day wellness retreat focusing on yoga, meditation, and holistic healing.',
        thumbnail: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400'
    },
    {
        id: 'EVT-002',
        title: 'Mountain Music Festival',
        type: 'Festival',
        date: '2026-04-20',
        endDate: '2026-04-22',
        time: '5:00 PM',
        venue: 'Outdoor Amphitheater',
        capacity: 200,
        registered: 156,
        price: '₹3,500',
        status: 'Upcoming',
        organizer: 'Vikram Singh',
        description: 'Three days of live music performances featuring local and international artists.',
        thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400'
    },
    {
        id: 'EVT-003',
        title: 'Pottery & Crafts Workshop',
        type: 'Workshop',
        date: '2026-02-28',
        endDate: '2026-02-28',
        time: '10:00 AM',
        venue: 'Art Studio',
        capacity: 15,
        registered: 12,
        price: '₹1,500',
        status: 'Upcoming',
        organizer: 'Rajesh Kumar',
        description: 'Learn traditional pottery techniques and create your own ceramic masterpieces.',
        thumbnail: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400'
    },
    {
        id: 'EVT-004',
        title: 'Mindfulness & Meditation Retreat',
        type: 'Retreat',
        date: '2026-02-10',
        endDate: '2026-02-12',
        time: '6:00 AM',
        venue: 'Meditation Hall',
        capacity: 30,
        registered: 30,
        price: '₹8,000',
        status: 'Completed',
        organizer: 'Ananya Iyer',
        description: 'Deepen your meditation practice with guided sessions and mindfulness exercises.',
        thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400'
    },
    {
        id: 'EVT-005',
        title: 'Farm-to-Table Culinary Experience',
        type: 'Workshop',
        date: '2026-03-05',
        endDate: '2026-03-05',
        time: '11:00 AM',
        venue: 'Restaurant Kitchen',
        capacity: 20,
        registered: 18,
        price: '₹2,500',
        status: 'Upcoming',
        organizer: 'Chef Sneha',
        description: 'Learn to cook seasonal dishes using fresh ingredients from our organic farm.',
        thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400'
    },
];

export default function EventsManagement() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState<string>('All');
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [showAddModal, setShowAddModal] = useState(false);

    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = filterType === 'All' || event.type === filterType;
        const matchesStatus = filterStatus === 'All' || event.status === filterStatus;
        return matchesSearch && matchesType && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-earth-950">
            <AdminSidebar />
            <AdminHeader />

            <main className="ml-64 pt-20 p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-earth-100 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Events Management
                        </h1>
                        <p className="text-earth-400">Organize and manage resort events</p>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all"
                    >
                        <span className="material-symbols-outlined">add</span>
                        Create Event
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Events', value: '24', icon: 'event', color: 'from-blue-500 to-blue-600' },
                        { label: 'Upcoming', value: '8', icon: 'upcoming', color: 'from-emerald-500 to-emerald-600' },
                        { label: 'Total Attendees', value: '1,245', icon: 'group', color: 'from-purple-500 to-purple-600' },
                        { label: 'Revenue', value: '₹8.5L', icon: 'payments', color: 'from-gold-500 to-gold-600' },
                    ].map((stat, index) => (
                        <div key={index} className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                                    <span className="material-symbols-outlined text-2xl text-white">{stat.icon}</span>
                                </div>
                                <div>
                                    <p className="text-earth-400 text-sm">{stat.label}</p>
                                    <p className="text-2xl font-bold text-earth-100">{stat.value}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filters */}
                <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6 mb-6">
                    <div className="flex flex-wrap gap-4">
                        <div className="flex-1 min-w-[300px]">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/60">
                                    search
                                </span>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search events..."
                                    className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl pl-12 pr-4 py-2.5 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                />
                            </div>
                        </div>

                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Types</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Retreat">Retreat</option>
                            <option value="Festival">Festival</option>
                            <option value="Conference">Conference</option>
                            <option value="Celebration">Celebration</option>
                        </select>

                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Status</option>
                            <option value="Upcoming">Upcoming</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>
                </div>

                {/* Events List */}
                <div className="space-y-6">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="group bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row">
                                {/* Thumbnail */}
                                <div className="relative md:w-80 h-64 md:h-auto overflow-hidden flex-shrink-0">
                                    <div
                                        className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: `url(${event.thumbnail})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 to-transparent" />

                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${event.status === 'Upcoming' ? 'bg-blue-500/80 text-white' :
                                                event.status === 'Ongoing' ? 'bg-emerald-500/80 text-white' :
                                                    event.status === 'Completed' ? 'bg-purple-500/80 text-white' :
                                                        'bg-red-500/80 text-white'
                                            }`}>
                                            {event.status}
                                        </span>
                                    </div>

                                    {/* Type Badge */}
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-4 py-2 bg-gold-500/20 backdrop-blur-sm text-gold-500 rounded-full text-sm font-semibold">
                                            {event.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-earth-100 mb-2 group-hover:text-gold-500 transition-colors">
                                                {event.title}
                                            </h3>
                                            <p className="text-earth-400 text-sm font-mono">{event.id}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-earth-400 text-sm">Price</p>
                                            <p className="text-2xl font-bold text-gold-500">{event.price}</p>
                                        </div>
                                    </div>

                                    <p className="text-earth-300 mb-6 line-clamp-2">{event.description}</p>

                                    {/* Event Details Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        <div className="flex items-center gap-2 text-earth-300">
                                            <span className="material-symbols-outlined text-gold-500">calendar_today</span>
                                            <div>
                                                <p className="text-xs text-earth-400">Date</p>
                                                <p className="text-sm font-semibold">{event.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-earth-300">
                                            <span className="material-symbols-outlined text-gold-500">schedule</span>
                                            <div>
                                                <p className="text-xs text-earth-400">Time</p>
                                                <p className="text-sm font-semibold">{event.time}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-earth-300">
                                            <span className="material-symbols-outlined text-gold-500">location_on</span>
                                            <div>
                                                <p className="text-xs text-earth-400">Venue</p>
                                                <p className="text-sm font-semibold">{event.venue}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-earth-300">
                                            <span className="material-symbols-outlined text-gold-500">person</span>
                                            <div>
                                                <p className="text-xs text-earth-400">Organizer</p>
                                                <p className="text-sm font-semibold">{event.organizer}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Registration Progress */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-earth-400 text-sm">Registration</span>
                                            <span className="text-earth-100 text-sm font-semibold">
                                                {event.registered} / {event.capacity}
                                            </span>
                                        </div>
                                        <div className="w-full bg-earth-800/50 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-gold-500 to-gold-600 h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3">
                                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all">
                                            <span className="material-symbols-outlined">visibility</span>
                                            View Details
                                        </button>
                                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-blue-500 hover:border-blue-500/40 transition-all">
                                            <span className="material-symbols-outlined">edit</span>
                                            Edit Event
                                        </button>
                                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-emerald-500 hover:border-emerald-500/40 transition-all">
                                            <span className="material-symbols-outlined">group</span>
                                            Attendees
                                        </button>
                                        <button className="p-2 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-red-500 hover:border-red-500/40 transition-all">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
