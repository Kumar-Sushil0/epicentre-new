'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

interface Booking {
    id: string;
    guestName: string;
    guestEmail: string;
    roomType: string;
    checkIn: string;
    checkOut: string;
    nights: number;
    guests: number;
    status: 'Confirmed' | 'Pending' | 'Checked-in' | 'Checked-out' | 'Cancelled';
    paymentStatus: 'Paid' | 'Pending' | 'Refunded';
    amount: string;
    activities: string[];
    specialRequests?: string;
}

const bookings: Booking[] = [
    {
        id: 'BK-001',
        guestName: 'Rajesh Kumar',
        guestEmail: 'rajesh.k@email.com',
        roomType: 'Deluxe Suite',
        checkIn: '2026-02-15',
        checkOut: '2026-02-18',
        nights: 3,
        guests: 2,
        status: 'Confirmed',
        paymentStatus: 'Paid',
        amount: '₹25,000',
        activities: ['Yoga', 'Spa'],
        specialRequests: 'Late checkout requested'
    },
    {
        id: 'BK-002',
        guestName: 'Priya Sharma',
        guestEmail: 'priya.s@email.com',
        roomType: 'Premium Villa',
        checkIn: '2026-02-16',
        checkOut: '2026-02-20',
        nights: 4,
        guests: 4,
        status: 'Pending',
        paymentStatus: 'Pending',
        amount: '₹45,000',
        activities: ['Trekking', 'Bird Watching'],
    },
    {
        id: 'BK-003',
        guestName: 'Amit Patel',
        guestEmail: 'amit.p@email.com',
        roomType: 'Garden View',
        checkIn: '2026-02-17',
        checkOut: '2026-02-19',
        nights: 2,
        guests: 2,
        status: 'Confirmed',
        paymentStatus: 'Paid',
        amount: '₹18,000',
        activities: ['Meditation'],
    },
    {
        id: 'BK-004',
        guestName: 'Sneha Reddy',
        guestEmail: 'sneha.r@email.com',
        roomType: 'Luxury Suite',
        checkIn: '2026-02-14',
        checkOut: '2026-02-16',
        nights: 2,
        guests: 2,
        status: 'Checked-in',
        paymentStatus: 'Paid',
        amount: '₹35,000',
        activities: ['Spa', 'Wellness'],
        specialRequests: 'Anniversary celebration'
    },
    {
        id: 'BK-005',
        guestName: 'Vikram Singh',
        guestEmail: 'vikram.s@email.com',
        roomType: 'Deluxe Room',
        checkIn: '2026-02-10',
        checkOut: '2026-02-12',
        nights: 2,
        guests: 1,
        status: 'Checked-out',
        paymentStatus: 'Paid',
        amount: '₹22,000',
        activities: ['Angling'],
    },
    {
        id: 'BK-006',
        guestName: 'Ananya Iyer',
        guestEmail: 'ananya.i@email.com',
        roomType: 'Standard Room',
        checkIn: '2026-02-20',
        checkOut: '2026-02-23',
        nights: 3,
        guests: 2,
        status: 'Cancelled',
        paymentStatus: 'Refunded',
        amount: '₹15,000',
        activities: [],
    },
];

export default function BookingsManagement() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [filterPayment, setFilterPayment] = useState<string>('All');
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const filteredBookings = bookings.filter(booking => {
        const matchesSearch = booking.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.id.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'All' || booking.status === filterStatus;
        const matchesPayment = filterPayment === 'All' || booking.paymentStatus === filterPayment;
        return matchesSearch && matchesStatus && matchesPayment;
    });

    const viewBookingDetails = (booking: Booking) => {
        setSelectedBooking(booking);
        setShowDetailsModal(true);
    };

    return (
        <div className="min-h-screen bg-earth-950">
            <AdminSidebar />
            <AdminHeader />

            <main className="ml-64 pt-20 p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-earth-100 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Booking Management
                        </h1>
                        <p className="text-earth-400">Track and manage all reservations</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all">
                        <span className="material-symbols-outlined">add</span>
                        New Booking
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                    {[
                        { label: 'Total Bookings', value: '156', icon: 'calendar_month', color: 'from-blue-500 to-blue-600' },
                        { label: 'Confirmed', value: '89', icon: 'check_circle', color: 'from-emerald-500 to-emerald-600' },
                        { label: 'Checked-in', value: '24', icon: 'login', color: 'from-purple-500 to-purple-600' },
                        { label: 'Pending', value: '18', icon: 'pending', color: 'from-orange-500 to-orange-600' },
                        { label: 'Revenue', value: '₹12.5L', icon: 'payments', color: 'from-gold-500 to-gold-600' },
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
                        {/* Search */}
                        <div className="flex-1 min-w-[300px]">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gold-500/60">
                                    search
                                </span>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by booking ID or guest name..."
                                    className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl pl-12 pr-4 py-2.5 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                />
                            </div>
                        </div>

                        {/* Status Filter */}
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Status</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Pending">Pending</option>
                            <option value="Checked-in">Checked-in</option>
                            <option value="Checked-out">Checked-out</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>

                        {/* Payment Filter */}
                        <select
                            value={filterPayment}
                            onChange={(e) => setFilterPayment(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Payments</option>
                            <option value="Paid">Paid</option>
                            <option value="Pending">Pending</option>
                            <option value="Refunded">Refunded</option>
                        </select>

                        {/* Export */}
                        <button className="flex items-center gap-2 px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all">
                            <span className="material-symbols-outlined">download</span>
                            Export
                        </button>
                    </div>
                </div>

                {/* Bookings Table */}
                <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-earth-800/50">
                                <tr className="border-b border-gold-500/20">
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Booking ID</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Guest</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Room</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Check-in</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Check-out</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Guests</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Status</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Payment</th>
                                    <th className="text-right py-4 px-6 text-earth-400 font-semibold text-sm">Amount</th>
                                    <th className="text-right py-4 px-6 text-earth-400 font-semibold text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBookings.map((booking) => (
                                    <tr key={booking.id} className="border-b border-gold-500/10 hover:bg-earth-800/30 transition-colors">
                                        <td className="py-4 px-6 text-earth-100 font-mono font-semibold">{booking.id}</td>
                                        <td className="py-4 px-6">
                                            <p className="text-earth-100 font-medium">{booking.guestName}</p>
                                            <p className="text-earth-400 text-sm">{booking.guestEmail}</p>
                                        </td>
                                        <td className="py-4 px-6 text-earth-300">{booking.roomType}</td>
                                        <td className="py-4 px-6 text-earth-300">{booking.checkIn}</td>
                                        <td className="py-4 px-6 text-earth-300">{booking.checkOut}</td>
                                        <td className="py-4 px-6 text-earth-300">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-gold-500 text-sm">group</span>
                                                {booking.guests}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-500' :
                                                    booking.status === 'Pending' ? 'bg-orange-500/20 text-orange-500' :
                                                        booking.status === 'Checked-in' ? 'bg-blue-500/20 text-blue-500' :
                                                            booking.status === 'Checked-out' ? 'bg-purple-500/20 text-purple-500' :
                                                                'bg-red-500/20 text-red-500'
                                                }`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.paymentStatus === 'Paid' ? 'bg-emerald-500/20 text-emerald-500' :
                                                    booking.paymentStatus === 'Pending' ? 'bg-orange-500/20 text-orange-500' :
                                                        'bg-red-500/20 text-red-500'
                                                }`}>
                                                {booking.paymentStatus}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right text-earth-100 font-semibold">{booking.amount}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => viewBookingDetails(booking)}
                                                    className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-gold-500 transition-all"
                                                >
                                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-blue-500 transition-all">
                                                    <span className="material-symbols-outlined text-xl">edit</span>
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-red-500 transition-all">
                                                    <span className="material-symbols-outlined text-xl">cancel</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between px-6 py-4 border-t border-gold-500/20 bg-earth-800/30">
                        <p className="text-earth-400 text-sm">
                            Showing {filteredBookings.length} of {bookings.length} bookings
                        </p>
                        <div className="flex items-center gap-2">
                            <button className="px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-lg text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all">
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-gold-500/20 border border-gold-500/40 rounded-lg text-gold-500 font-semibold">
                                1
                            </button>
                            <button className="px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-lg text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all">
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                {/* Booking Details Modal */}
                {showDetailsModal && selectedBooking && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-earth-900 border border-gold-500/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gold-500/20">
                                <h2 className="text-2xl font-bold text-earth-100" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    Booking Details
                                </h2>
                                <button
                                    onClick={() => setShowDetailsModal(false)}
                                    className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-gold-500 transition-all"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 space-y-6">
                                {/* Booking Info */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-earth-400 text-sm mb-1">Booking ID</p>
                                        <p className="text-earth-100 font-semibold font-mono">{selectedBooking.id}</p>
                                    </div>
                                    <div>
                                        <p className="text-earth-400 text-sm mb-1">Status</p>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${selectedBooking.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-500' :
                                                selectedBooking.status === 'Pending' ? 'bg-orange-500/20 text-orange-500' :
                                                    'bg-red-500/20 text-red-500'
                                            }`}>
                                            {selectedBooking.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Guest Info */}
                                <div className="bg-earth-800/30 rounded-xl p-4">
                                    <h3 className="text-lg font-semibold text-earth-100 mb-3">Guest Information</h3>
                                    <div className="space-y-2">
                                        <p className="text-earth-300"><span className="text-earth-400">Name:</span> {selectedBooking.guestName}</p>
                                        <p className="text-earth-300"><span className="text-earth-400">Email:</span> {selectedBooking.guestEmail}</p>
                                        <p className="text-earth-300"><span className="text-earth-400">Guests:</span> {selectedBooking.guests} persons</p>
                                    </div>
                                </div>

                                {/* Stay Details */}
                                <div className="bg-earth-800/30 rounded-xl p-4">
                                    <h3 className="text-lg font-semibold text-earth-100 mb-3">Stay Details</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-earth-400 text-sm mb-1">Room Type</p>
                                            <p className="text-earth-100 font-semibold">{selectedBooking.roomType}</p>
                                        </div>
                                        <div>
                                            <p className="text-earth-400 text-sm mb-1">Nights</p>
                                            <p className="text-earth-100 font-semibold">{selectedBooking.nights} nights</p>
                                        </div>
                                        <div>
                                            <p className="text-earth-400 text-sm mb-1">Check-in</p>
                                            <p className="text-earth-100 font-semibold">{selectedBooking.checkIn}</p>
                                        </div>
                                        <div>
                                            <p className="text-earth-400 text-sm mb-1">Check-out</p>
                                            <p className="text-earth-100 font-semibold">{selectedBooking.checkOut}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Activities */}
                                {selectedBooking.activities.length > 0 && (
                                    <div className="bg-earth-800/30 rounded-xl p-4">
                                        <h3 className="text-lg font-semibold text-earth-100 mb-3">Activities</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedBooking.activities.map((activity, index) => (
                                                <span key={index} className="px-3 py-1 bg-gold-500/20 text-gold-500 rounded-full text-sm font-semibold">
                                                    {activity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Special Requests */}
                                {selectedBooking.specialRequests && (
                                    <div className="bg-earth-800/30 rounded-xl p-4">
                                        <h3 className="text-lg font-semibold text-earth-100 mb-3">Special Requests</h3>
                                        <p className="text-earth-300">{selectedBooking.specialRequests}</p>
                                    </div>
                                )}

                                {/* Payment */}
                                <div className="bg-earth-800/30 rounded-xl p-4">
                                    <h3 className="text-lg font-semibold text-earth-100 mb-3">Payment Information</h3>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-earth-400 text-sm mb-1">Total Amount</p>
                                            <p className="text-2xl font-bold text-gold-500">{selectedBooking.amount}</p>
                                        </div>
                                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${selectedBooking.paymentStatus === 'Paid' ? 'bg-emerald-500/20 text-emerald-500' :
                                                selectedBooking.paymentStatus === 'Pending' ? 'bg-orange-500/20 text-orange-500' :
                                                    'bg-red-500/20 text-red-500'
                                            }`}>
                                            {selectedBooking.paymentStatus}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Actions */}
                            <div className="flex items-center justify-end gap-3 p-6 border-t border-gold-500/20">
                                <button
                                    onClick={() => setShowDetailsModal(false)}
                                    className="px-6 py-2 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all"
                                >
                                    Close
                                </button>
                                <button className="px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all">
                                    Edit Booking
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
