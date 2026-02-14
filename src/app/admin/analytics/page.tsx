'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

export default function Analytics() {
    const [dateRange, setDateRange] = useState('7days');

    const revenueData = [
        { month: 'Jan', revenue: 85000, bookings: 45 },
        { month: 'Feb', revenue: 125000, bookings: 68 },
        { month: 'Mar', revenue: 95000, bookings: 52 },
        { month: 'Apr', revenue: 145000, bookings: 78 },
        { month: 'May', revenue: 165000, bookings: 89 },
        { month: 'Jun', revenue: 185000, bookings: 95 },
    ];

    const topRooms = [
        { name: 'Premium Villa', bookings: 156, revenue: '₹23.4L', occupancy: 92 },
        { name: 'Deluxe Suite', bookings: 234, revenue: '₹19.9L', occupancy: 87 },
        { name: 'Luxury Suite', bookings: 189, revenue: '₹22.7L', occupancy: 85 },
        { name: 'Garden View', bookings: 312, revenue: '₹18.7L', occupancy: 78 },
    ];

    const topActivities = [
        { name: 'Spa & Massage', bookings: 445, revenue: '₹11.1L' },
        { name: 'Sunrise Yoga', bookings: 234, revenue: '₹1.2L' },
        { name: 'Mountain Trekking', bookings: 156, revenue: '₹2.3L' },
        { name: 'Meditation', bookings: 312, revenue: '₹0.9L' },
    ];

    const guestDemographics = [
        { location: 'Mumbai', percentage: 35, count: 432 },
        { location: 'Pune', percentage: 28, count: 345 },
        { location: 'Bangalore', percentage: 18, count: 222 },
        { location: 'Delhi', percentage: 12, count: 148 },
        { location: 'Others', percentage: 7, count: 87 },
    ];

    return (
        <div className="min-h-screen bg-earth-950">
            <AdminSidebar />
            <AdminHeader />

            <main className="ml-64 pt-20 p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-earth-100 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Analytics & Reports
                        </h1>
                        <p className="text-earth-400">Insights and performance metrics</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <select
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="7days">Last 7 Days</option>
                            <option value="30days">Last 30 Days</option>
                            <option value="90days">Last 90 Days</option>
                            <option value="year">This Year</option>
                        </select>
                        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all">
                            <span className="material-symbols-outlined">download</span>
                            Export Report
                        </button>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Revenue', value: '₹12.5L', change: '+12.5%', icon: 'payments', color: 'from-emerald-500 to-emerald-600' },
                        { label: 'Total Bookings', value: '1,234', change: '+8.2%', icon: 'calendar_month', color: 'from-blue-500 to-blue-600' },
                        { label: 'Avg Booking Value', value: '₹10,125', change: '+5.3%', icon: 'trending_up', color: 'from-purple-500 to-purple-600' },
                        { label: 'Guest Satisfaction', value: '4.8/5', change: '+0.2', icon: 'star', color: 'from-gold-500 to-gold-600' },
                    ].map((metric, index) => (
                        <div key={index} className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color}`}>
                                    <span className="material-symbols-outlined text-2xl text-white">{metric.icon}</span>
                                </div>
                                <span className="text-emerald-500 text-sm font-semibold">{metric.change}</span>
                            </div>
                            <p className="text-earth-400 text-sm mb-1">{metric.label}</p>
                            <p className="text-3xl font-bold text-earth-100">{metric.value}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Revenue Chart */}
                    <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Revenue Trend
                        </h2>
                        <div className="space-y-4">
                            {revenueData.map((data, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-earth-300 font-medium">{data.month}</span>
                                        <div className="text-right">
                                            <span className="text-earth-100 font-bold">₹{(data.revenue / 1000).toFixed(0)}K</span>
                                            <span className="text-earth-400 text-sm ml-2">({data.bookings} bookings)</span>
                                        </div>
                                    </div>
                                    <div className="w-full bg-earth-800/50 rounded-full h-3">
                                        <div
                                            className="bg-gradient-to-r from-gold-500 to-gold-600 h-3 rounded-full transition-all duration-500"
                                            style={{ width: `${(data.revenue / 185000) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Guest Demographics */}
                    <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Guest Demographics
                        </h2>
                        <div className="space-y-4">
                            {guestDemographics.map((demo, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-earth-300 font-medium">{demo.location}</span>
                                        <div className="text-right">
                                            <span className="text-earth-100 font-bold">{demo.percentage}%</span>
                                            <span className="text-earth-400 text-sm ml-2">({demo.count} guests)</span>
                                        </div>
                                    </div>
                                    <div className="w-full bg-earth-800/50 rounded-full h-3">
                                        <div
                                            className={`h-3 rounded-full transition-all duration-500 ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                                                    index === 1 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                                                        index === 2 ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                                                            index === 3 ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                                                                'bg-gradient-to-r from-gold-500 to-gold-600'
                                                }`}
                                            style={{ width: `${demo.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Performing Rooms */}
                    <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Top Performing Rooms
                        </h2>
                        <div className="space-y-4">
                            {topRooms.map((room, index) => (
                                <div key={index} className="bg-earth-800/30 rounded-xl p-4 hover:bg-earth-800/50 transition-all">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-earth-100 font-semibold mb-1">{room.name}</h3>
                                            <p className="text-earth-400 text-sm">{room.bookings} bookings</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-gold-500 font-bold text-lg">{room.revenue}</p>
                                            <p className="text-earth-400 text-xs">Revenue</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1">
                                            <div className="w-full bg-earth-800/50 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-gold-500 to-gold-600 h-2 rounded-full"
                                                    style={{ width: `${room.occupancy}%` }}
                                                />
                                            </div>
                                        </div>
                                        <span className="text-earth-300 text-sm font-semibold">{room.occupancy}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Activities */}
                    <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Popular Activities
                        </h2>
                        <div className="space-y-4">
                            {topActivities.map((activity, index) => (
                                <div key={index} className="bg-earth-800/30 rounded-xl p-4 hover:bg-earth-800/50 transition-all">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-earth-950 font-bold">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-earth-100 font-semibold">{activity.name}</h3>
                                                <p className="text-earth-400 text-sm">{activity.bookings} bookings</p>
                                            </div>
                                        </div>
                                        <p className="text-gold-500 font-bold text-lg">{activity.revenue}</p>
                                    </div>
                                    <div className="w-full bg-earth-800/50 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full"
                                            style={{ width: `${(activity.bookings / 445) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {[
                        { label: 'Average Stay Duration', value: '3.2 days', icon: 'schedule', color: 'from-blue-500 to-blue-600' },
                        { label: 'Repeat Guest Rate', value: '42%', icon: 'refresh', color: 'from-purple-500 to-purple-600' },
                        { label: 'Cancellation Rate', value: '8%', icon: 'cancel', color: 'from-orange-500 to-orange-600' },
                    ].map((stat, index) => (
                        <div key={index} className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color}`}>
                                    <span className="material-symbols-outlined text-3xl text-white">{stat.icon}</span>
                                </div>
                                <div>
                                    <p className="text-earth-400 text-sm mb-1">{stat.label}</p>
                                    <p className="text-3xl font-bold text-earth-100">{stat.value}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
