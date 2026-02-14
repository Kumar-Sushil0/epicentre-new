'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

interface Activity {
    id: string;
    name: string;
    category: 'Wellness' | 'Adventure' | 'Solitude' | 'Expression';
    duration: string;
    capacity: number;
    price: string;
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
    status: 'Active' | 'Inactive' | 'Seasonal';
    bookings: number;
    rating: number;
    instructor: string;
    schedule: string[];
    thumbnail: string;
}

const activities: Activity[] = [
    {
        id: 'ACT-001',
        name: 'Sunrise Yoga',
        category: 'Wellness',
        duration: '1 hour',
        capacity: 15,
        price: '₹500',
        difficulty: 'Easy',
        status: 'Active',
        bookings: 234,
        rating: 4.9,
        instructor: 'Priya Sharma',
        schedule: ['6:00 AM', '7:00 AM'],
        thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400'
    },
    {
        id: 'ACT-002',
        name: 'Mountain Trekking',
        category: 'Adventure',
        duration: '4 hours',
        capacity: 10,
        price: '₹1,500',
        difficulty: 'Challenging',
        status: 'Active',
        bookings: 156,
        rating: 4.8,
        instructor: 'Vikram Singh',
        schedule: ['7:00 AM', '2:00 PM'],
        thumbnail: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400'
    },
    {
        id: 'ACT-003',
        name: 'Meditation Session',
        category: 'Solitude',
        duration: '45 minutes',
        capacity: 20,
        price: '₹300',
        difficulty: 'Easy',
        status: 'Active',
        bookings: 312,
        rating: 4.9,
        instructor: 'Ananya Iyer',
        schedule: ['6:30 AM', '5:00 PM', '7:00 PM'],
        thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400'
    },
    {
        id: 'ACT-004',
        name: 'Pottery Workshop',
        category: 'Expression',
        duration: '2 hours',
        capacity: 8,
        price: '₹800',
        difficulty: 'Moderate',
        status: 'Active',
        bookings: 89,
        rating: 4.7,
        instructor: 'Rajesh Kumar',
        schedule: ['10:00 AM', '3:00 PM'],
        thumbnail: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400'
    },
    {
        id: 'ACT-005',
        name: 'Bird Watching',
        category: 'Solitude',
        duration: '3 hours',
        capacity: 12,
        price: '₹600',
        difficulty: 'Easy',
        status: 'Seasonal',
        bookings: 67,
        rating: 4.6,
        instructor: 'Amit Patel',
        schedule: ['5:30 AM'],
        thumbnail: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400'
    },
    {
        id: 'ACT-006',
        name: 'Spa & Massage',
        category: 'Wellness',
        duration: '90 minutes',
        capacity: 4,
        price: '₹2,500',
        difficulty: 'Easy',
        status: 'Active',
        bookings: 445,
        rating: 4.9,
        instructor: 'Sneha Reddy',
        schedule: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
        thumbnail: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400'
    },
];

export default function ActivitiesManagement() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState<string>('All');
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [showAddModal, setShowAddModal] = useState(false);

    const filteredActivities = activities.filter(activity => {
        const matchesSearch = activity.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = filterCategory === 'All' || activity.category === filterCategory;
        const matchesStatus = filterStatus === 'All' || activity.status === filterStatus;
        return matchesSearch && matchesCategory && matchesStatus;
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
                            Activities Management
                        </h1>
                        <p className="text-earth-400">Manage resort activities and experiences</p>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all"
                    >
                        <span className="material-symbols-outlined">add</span>
                        Add New Activity
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Activities', value: '32', icon: 'hiking', color: 'from-blue-500 to-blue-600' },
                        { label: 'Active', value: '28', icon: 'check_circle', color: 'from-emerald-500 to-emerald-600' },
                        { label: 'Total Bookings', value: '1,303', icon: 'calendar_month', color: 'from-purple-500 to-purple-600' },
                        { label: 'Avg Rating', value: '4.8', icon: 'star', color: 'from-gold-500 to-gold-600' },
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
                                    placeholder="Search activities..."
                                    className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl pl-12 pr-4 py-2.5 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                />
                            </div>
                        </div>

                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Categories</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Solitude">Solitude</option>
                            <option value="Expression">Expression</option>
                        </select>

                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Seasonal">Seasonal</option>
                        </select>
                    </div>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredActivities.map((activity) => (
                        <div
                            key={activity.id}
                            className="group bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundImage: `url(${activity.thumbnail})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-earth-950 to-transparent" />

                                {/* Status & Rating */}
                                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${activity.status === 'Active' ? 'bg-emerald-500/80 text-white' :
                                            activity.status === 'Seasonal' ? 'bg-blue-500/80 text-white' :
                                                'bg-orange-500/80 text-white'
                                        }`}>
                                        {activity.status}
                                    </span>
                                    <div className="flex items-center gap-1 bg-earth-950/80 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="material-symbols-outlined text-gold-500 text-sm filled-icon">star</span>
                                        <span className="text-earth-100 text-sm font-semibold">{activity.rating}</span>
                                    </div>
                                </div>

                                {/* Category */}
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-3 py-1 bg-gold-500/20 backdrop-blur-sm text-gold-500 rounded-full text-xs font-semibold">
                                        {activity.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-earth-100 mb-1 group-hover:text-gold-500 transition-colors">
                                    {activity.name}
                                </h3>
                                <p className="text-earth-400 text-sm font-mono mb-4">{activity.id}</p>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="flex items-center gap-2 text-earth-300 text-sm">
                                        <span className="material-symbols-outlined text-gold-500 text-lg">schedule</span>
                                        {activity.duration}
                                    </div>
                                    <div className="flex items-center gap-2 text-earth-300 text-sm">
                                        <span className="material-symbols-outlined text-gold-500 text-lg">group</span>
                                        {activity.capacity} Max
                                    </div>
                                    <div className="flex items-center gap-2 text-earth-300 text-sm">
                                        <span className="material-symbols-outlined text-gold-500 text-lg">trending_up</span>
                                        {activity.difficulty}
                                    </div>
                                    <div className="flex items-center gap-2 text-earth-300 text-sm">
                                        <span className="material-symbols-outlined text-gold-500 text-lg">calendar_month</span>
                                        {activity.bookings} Bookings
                                    </div>
                                </div>

                                {/* Instructor */}
                                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gold-500/10">
                                    <span className="material-symbols-outlined text-gold-500 text-lg">person</span>
                                    <span className="text-earth-300 text-sm">{activity.instructor}</span>
                                </div>

                                {/* Schedule */}
                                <div className="mb-4">
                                    <p className="text-earth-400 text-xs mb-2">Available Times</p>
                                    <div className="flex flex-wrap gap-2">
                                        {activity.schedule.map((time, index) => (
                                            <span key={index} className="px-2 py-1 bg-earth-800/50 text-earth-300 rounded text-xs">
                                                {time}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Price & Actions */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-earth-400 text-xs">Price</p>
                                        <p className="text-2xl font-bold text-gold-500">{activity.price}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 bg-earth-800/50 border border-gold-500/20 rounded-lg text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all">
                                            <span className="material-symbols-outlined text-lg">edit</span>
                                        </button>
                                        <button className="p-2 bg-earth-800/50 border border-gold-500/20 rounded-lg text-earth-300 hover:text-blue-500 hover:border-blue-500/40 transition-all">
                                            <span className="material-symbols-outlined text-lg">visibility</span>
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
