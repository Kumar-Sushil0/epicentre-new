'use client';

import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

interface StatCard {
    title: string;
    value: string;
    change: string;
    icon: string;
    trend: 'up' | 'down';
    color: string;
}

const stats: StatCard[] = [
    { title: 'Total Revenue', value: '₹12.5L', change: '+12.5%', icon: 'payments', trend: 'up', color: 'from-emerald-500 to-emerald-600' },
    { title: 'Active Bookings', value: '48', change: '+8.2%', icon: 'calendar_month', trend: 'up', color: 'from-blue-500 to-blue-600' },
    { title: 'Total Users', value: '1,234', change: '+23.1%', icon: 'group', trend: 'up', color: 'from-purple-500 to-purple-600' },
    { title: 'Occupancy Rate', value: '87%', change: '-2.4%', icon: 'hotel', trend: 'down', color: 'from-orange-500 to-orange-600' },
];

const recentBookings = [
    { id: 'BK-001', guest: 'Rajesh Kumar', room: 'Deluxe Suite', checkIn: '2026-02-15', status: 'Confirmed', amount: '₹25,000' },
    { id: 'BK-002', guest: 'Priya Sharma', room: 'Premium Villa', checkIn: '2026-02-16', status: 'Pending', amount: '₹45,000' },
    { id: 'BK-003', guest: 'Amit Patel', room: 'Garden View', checkIn: '2026-02-17', status: 'Confirmed', amount: '₹18,000' },
    { id: 'BK-004', guest: 'Sneha Reddy', room: 'Luxury Suite', checkIn: '2026-02-18', status: 'Confirmed', amount: '₹35,000' },
    { id: 'BK-005', guest: 'Vikram Singh', room: 'Deluxe Room', checkIn: '2026-02-19', status: 'Cancelled', amount: '₹22,000' },
];

const activities = [
    { user: 'Admin', action: 'Created new blog post', time: '2 minutes ago', icon: 'article' },
    { user: 'Priya Sharma', action: 'Completed booking payment', time: '15 minutes ago', icon: 'payments' },
    { user: 'System', action: 'Automated backup completed', time: '1 hour ago', icon: 'backup' },
    { user: 'Rajesh Kumar', action: 'Updated profile information', time: '2 hours ago', icon: 'person' },
    { user: 'Admin', action: 'Added new activity package', time: '3 hours ago', icon: 'hiking' },
];

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-earth-950">
            <AdminSidebar />
            <AdminHeader />

            <main className="ml-64 pt-20 p-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-earth-100 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Welcome back, Admin
                    </h1>
                    <p className="text-earth-400">Here's what's happening with your resort today</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6 hover:border-gold-500/40 transition-all duration-300"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                                        <span className="material-symbols-outlined text-2xl text-white">
                                            {stat.icon}
                                        </span>
                                    </div>
                                    <div className={`flex items-center gap-1 text-sm font-semibold ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
                                        }`}>
                                        <span className="material-symbols-outlined text-base">
                                            {stat.trend === 'up' ? 'trending_up' : 'trending_down'}
                                        </span>
                                        {stat.change}
                                    </div>
                                </div>
                                <h3 className="text-earth-400 text-sm font-medium mb-1">{stat.title}</h3>
                                <p className="text-3xl font-bold text-earth-100">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Bookings */}
                    <div className="lg:col-span-2 bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-earth-100" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Recent Bookings
                            </h2>
                            <button className="text-gold-500 hover:text-gold-400 text-sm font-semibold flex items-center gap-1">
                                View All
                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gold-500/20">
                                        <th className="text-left py-3 px-4 text-earth-400 font-semibold text-sm">ID</th>
                                        <th className="text-left py-3 px-4 text-earth-400 font-semibold text-sm">Guest</th>
                                        <th className="text-left py-3 px-4 text-earth-400 font-semibold text-sm">Room</th>
                                        <th className="text-left py-3 px-4 text-earth-400 font-semibold text-sm">Check-in</th>
                                        <th className="text-left py-3 px-4 text-earth-400 font-semibold text-sm">Status</th>
                                        <th className="text-right py-3 px-4 text-earth-400 font-semibold text-sm">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentBookings.map((booking) => (
                                        <tr key={booking.id} className="border-b border-gold-500/10 hover:bg-earth-800/30 transition-colors">
                                            <td className="py-4 px-4 text-earth-300 font-mono text-sm">{booking.id}</td>
                                            <td className="py-4 px-4 text-earth-100 font-medium">{booking.guest}</td>
                                            <td className="py-4 px-4 text-earth-300">{booking.room}</td>
                                            <td className="py-4 px-4 text-earth-300">{booking.checkIn}</td>
                                            <td className="py-4 px-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-500' :
                                                        booking.status === 'Pending' ? 'bg-orange-500/20 text-orange-500' :
                                                            'bg-red-500/20 text-red-500'
                                                    }`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-right text-earth-100 font-semibold">{booking.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Recent Activity
                        </h2>
                        <div className="space-y-4">
                            {activities.map((activity, index) => (
                                <div key={index} className="flex gap-4 pb-4 border-b border-gold-500/10 last:border-0">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-gold-500 text-xl">
                                            {activity.icon}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-earth-100 text-sm font-medium">{activity.user}</p>
                                        <p className="text-earth-400 text-sm">{activity.action}</p>
                                        <p className="text-earth-500 text-xs mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: 'Add New Room', icon: 'add_home', color: 'from-blue-500 to-blue-600' },
                        { label: 'Create Event', icon: 'event', color: 'from-purple-500 to-purple-600' },
                        { label: 'New Blog Post', icon: 'article', color: 'from-emerald-500 to-emerald-600' },
                        { label: 'View Reports', icon: 'assessment', color: 'from-orange-500 to-orange-600' },
                    ].map((action, index) => (
                        <button
                            key={index}
                            className="group relative overflow-hidden bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-xl p-4 hover:border-gold-500/40 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`p-3 rounded-lg bg-gradient-to-br ${action.color}`}>
                                    <span className="material-symbols-outlined text-white">
                                        {action.icon}
                                    </span>
                                </div>
                                <span className="text-earth-100 font-semibold">{action.label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
}
