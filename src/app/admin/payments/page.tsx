'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

interface Payment {
    id: string;
    transactionId: string;
    guestName: string;
    bookingId: string;
    amount: string;
    method: 'Card' | 'UPI' | 'Net Banking' | 'Cash' | 'Wallet';
    status: 'Success' | 'Pending' | 'Failed' | 'Refunded';
    date: string;
    time: string;
    type: 'Booking' | 'Activity' | 'Event' | 'Dining';
}

const payments: Payment[] = [
    {
        id: 'PAY-001',
        transactionId: 'TXN2026021201234',
        guestName: 'Rajesh Kumar',
        bookingId: 'BK-001',
        amount: '₹25,000',
        method: 'Card',
        status: 'Success',
        date: '2026-02-12',
        time: '10:30 AM',
        type: 'Booking'
    },
    {
        id: 'PAY-002',
        transactionId: 'TXN2026021201235',
        guestName: 'Priya Sharma',
        bookingId: 'BK-002',
        amount: '₹45,000',
        method: 'UPI',
        status: 'Pending',
        date: '2026-02-12',
        time: '11:15 AM',
        type: 'Booking'
    },
    {
        id: 'PAY-003',
        transactionId: 'TXN2026021201236',
        guestName: 'Amit Patel',
        bookingId: 'ACT-003',
        amount: '₹1,500',
        method: 'Net Banking',
        status: 'Success',
        date: '2026-02-12',
        time: '12:00 PM',
        type: 'Activity'
    },
    {
        id: 'PAY-004',
        transactionId: 'TXN2026021201237',
        guestName: 'Sneha Reddy',
        bookingId: 'EVT-001',
        amount: '₹12,000',
        method: 'Card',
        status: 'Success',
        date: '2026-02-12',
        time: '2:45 PM',
        type: 'Event'
    },
    {
        id: 'PAY-005',
        transactionId: 'TXN2026021201238',
        guestName: 'Vikram Singh',
        bookingId: 'BK-005',
        amount: '₹22,000',
        method: 'Cash',
        status: 'Failed',
        date: '2026-02-11',
        time: '4:20 PM',
        type: 'Booking'
    },
    {
        id: 'PAY-006',
        transactionId: 'TXN2026021201239',
        guestName: 'Ananya Iyer',
        bookingId: 'BK-006',
        amount: '₹15,000',
        method: 'UPI',
        status: 'Refunded',
        date: '2026-02-11',
        time: '5:30 PM',
        type: 'Booking'
    },
];

export default function PaymentsManagement() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterMethod, setFilterMethod] = useState<string>('All');
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [filterType, setFilterType] = useState<string>('All');

    const filteredPayments = payments.filter(payment => {
        const matchesSearch = payment.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            payment.bookingId.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMethod = filterMethod === 'All' || payment.method === filterMethod;
        const matchesStatus = filterStatus === 'All' || payment.status === filterStatus;
        const matchesType = filterType === 'All' || payment.type === filterType;
        return matchesSearch && matchesMethod && matchesStatus && matchesType;
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
                            Payment Management
                        </h1>
                        <p className="text-earth-400">Track and manage all transactions</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all">
                        <span className="material-symbols-outlined">download</span>
                        Export Report
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                    {[
                        { label: 'Total Revenue', value: '₹12.5L', icon: 'payments', color: 'from-emerald-500 to-emerald-600', change: '+12.5%' },
                        { label: 'Successful', value: '₹10.8L', icon: 'check_circle', color: 'from-blue-500 to-blue-600', change: '+8.2%' },
                        { label: 'Pending', value: '₹1.2L', icon: 'pending', color: 'from-orange-500 to-orange-600', change: '+5.1%' },
                        { label: 'Failed', value: '₹0.3L', icon: 'cancel', color: 'from-red-500 to-red-600', change: '-2.3%' },
                        { label: 'Refunded', value: '₹0.2L', icon: 'undo', color: 'from-purple-500 to-purple-600', change: '+1.2%' },
                    ].map((stat, index) => (
                        <div key={index} className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-6">
                            <div className="flex items-start justify-between mb-3">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                                    <span className="material-symbols-outlined text-2xl text-white">{stat.icon}</span>
                                </div>
                                <span className={`text-xs font-semibold ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'
                                    }`}>
                                    {stat.change}
                                </span>
                            </div>
                            <p className="text-earth-400 text-sm mb-1">{stat.label}</p>
                            <p className="text-2xl font-bold text-earth-100">{stat.value}</p>
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
                                    placeholder="Search by transaction ID, guest name, or booking ID..."
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
                            <option value="Booking">Booking</option>
                            <option value="Activity">Activity</option>
                            <option value="Event">Event</option>
                            <option value="Dining">Dining</option>
                        </select>

                        <select
                            value={filterMethod}
                            onChange={(e) => setFilterMethod(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Methods</option>
                            <option value="Card">Card</option>
                            <option value="UPI">UPI</option>
                            <option value="Net Banking">Net Banking</option>
                            <option value="Cash">Cash</option>
                            <option value="Wallet">Wallet</option>
                        </select>

                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Status</option>
                            <option value="Success">Success</option>
                            <option value="Pending">Pending</option>
                            <option value="Failed">Failed</option>
                            <option value="Refunded">Refunded</option>
                        </select>
                    </div>
                </div>

                {/* Payments Table */}
                <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-earth-800/50">
                                <tr className="border-b border-gold-500/20">
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Transaction ID</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Guest</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Booking ID</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Type</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Method</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Date & Time</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Status</th>
                                    <th className="text-right py-4 px-6 text-earth-400 font-semibold text-sm">Amount</th>
                                    <th className="text-right py-4 px-6 text-earth-400 font-semibold text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPayments.map((payment) => (
                                    <tr key={payment.id} className="border-b border-gold-500/10 hover:bg-earth-800/30 transition-colors">
                                        <td className="py-4 px-6 text-earth-100 font-mono text-sm">{payment.transactionId}</td>
                                        <td className="py-4 px-6 text-earth-100 font-medium">{payment.guestName}</td>
                                        <td className="py-4 px-6 text-earth-300 font-mono">{payment.bookingId}</td>
                                        <td className="py-4 px-6">
                                            <span className="px-3 py-1 bg-gold-500/20 text-gold-500 rounded-full text-xs font-semibold">
                                                {payment.type}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-earth-300">
                                                <span className="material-symbols-outlined text-gold-500 text-lg">
                                                    {payment.method === 'Card' ? 'credit_card' :
                                                        payment.method === 'UPI' ? 'qr_code' :
                                                            payment.method === 'Cash' ? 'payments' :
                                                                payment.method === 'Wallet' ? 'account_balance_wallet' :
                                                                    'account_balance'}
                                                </span>
                                                {payment.method}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <p className="text-earth-100 text-sm">{payment.date}</p>
                                            <p className="text-earth-400 text-xs">{payment.time}</p>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${payment.status === 'Success' ? 'bg-emerald-500/20 text-emerald-500' :
                                                    payment.status === 'Pending' ? 'bg-orange-500/20 text-orange-500' :
                                                        payment.status === 'Failed' ? 'bg-red-500/20 text-red-500' :
                                                            'bg-purple-500/20 text-purple-500'
                                                }`}>
                                                {payment.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right text-earth-100 font-bold text-lg">{payment.amount}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-gold-500 transition-all">
                                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-blue-500 transition-all">
                                                    <span className="material-symbols-outlined text-xl">download</span>
                                                </button>
                                                {payment.status === 'Success' && (
                                                    <button className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-purple-500 transition-all">
                                                        <span className="material-symbols-outlined text-xl">undo</span>
                                                    </button>
                                                )}
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
                            Showing {filteredPayments.length} of {payments.length} transactions
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
            </main>
        </div>
    );
}
