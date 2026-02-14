'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: 'Guest' | 'Member' | 'VIP';
    status: 'Active' | 'Inactive' | 'Suspended';
    joinDate: string;
    totalBookings: number;
    totalSpent: string;
    avatar: string;
}

const users: User[] = [
    { id: 'USR-001', name: 'Rajesh Kumar', email: 'rajesh.k@email.com', phone: '+91 98765 43210', role: 'VIP', status: 'Active', joinDate: '2025-01-15', totalBookings: 12, totalSpent: '₹2,45,000', avatar: 'RK' },
    { id: 'USR-002', name: 'Priya Sharma', email: 'priya.s@email.com', phone: '+91 98765 43211', role: 'Member', status: 'Active', joinDate: '2025-03-22', totalBookings: 5, totalSpent: '₹85,000', avatar: 'PS' },
    { id: 'USR-003', name: 'Amit Patel', email: 'amit.p@email.com', phone: '+91 98765 43212', role: 'Guest', status: 'Active', joinDate: '2025-11-10', totalBookings: 2, totalSpent: '₹42,000', avatar: 'AP' },
    { id: 'USR-004', name: 'Sneha Reddy', email: 'sneha.r@email.com', phone: '+91 98765 43213', role: 'VIP', status: 'Active', joinDate: '2024-08-05', totalBookings: 18, totalSpent: '₹4,20,000', avatar: 'SR' },
    { id: 'USR-005', name: 'Vikram Singh', email: 'vikram.s@email.com', phone: '+91 98765 43214', role: 'Member', status: 'Inactive', joinDate: '2025-06-18', totalBookings: 3, totalSpent: '₹65,000', avatar: 'VS' },
    { id: 'USR-006', name: 'Ananya Iyer', email: 'ananya.i@email.com', phone: '+91 98765 43215', role: 'Guest', status: 'Active', joinDate: '2026-01-02', totalBookings: 1, totalSpent: '₹18,000', avatar: 'AI' },
    { id: 'USR-007', name: 'Karan Malhotra', email: 'karan.m@email.com', phone: '+91 98765 43216', role: 'Member', status: 'Suspended', joinDate: '2025-09-14', totalBookings: 4, totalSpent: '₹72,000', avatar: 'KM' },
    { id: 'USR-008', name: 'Divya Nair', email: 'divya.n@email.com', phone: '+91 98765 43217', role: 'VIP', status: 'Active', joinDate: '2024-12-20', totalBookings: 15, totalSpent: '₹3,80,000', avatar: 'DN' },
];

export default function UsersManagement() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterRole, setFilterRole] = useState<string>('All');
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRole = filterRole === 'All' || user.role === filterRole;
        const matchesStatus = filterStatus === 'All' || user.status === filterStatus;
        return matchesSearch && matchesRole && matchesStatus;
    });

    const toggleUserSelection = (userId: string) => {
        setSelectedUsers(prev =>
            prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
        );
    };

    const toggleSelectAll = () => {
        setSelectedUsers(selectedUsers.length === filteredUsers.length ? [] : filteredUsers.map(u => u.id));
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
                            User Management
                        </h1>
                        <p className="text-earth-400">Manage and monitor all registered users</p>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all"
                    >
                        <span className="material-symbols-outlined">person_add</span>
                        Add New User
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Users', value: '1,234', icon: 'group', color: 'from-blue-500 to-blue-600' },
                        { label: 'Active Users', value: '892', icon: 'person_check', color: 'from-emerald-500 to-emerald-600' },
                        { label: 'VIP Members', value: '156', icon: 'workspace_premium', color: 'from-purple-500 to-purple-600' },
                        { label: 'New This Month', value: '48', icon: 'trending_up', color: 'from-orange-500 to-orange-600' },
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
                                    placeholder="Search by name or email..."
                                    className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl pl-12 pr-4 py-2.5 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                />
                            </div>
                        </div>

                        {/* Role Filter */}
                        <select
                            value={filterRole}
                            onChange={(e) => setFilterRole(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Roles</option>
                            <option value="Guest">Guest</option>
                            <option value="Member">Member</option>
                            <option value="VIP">VIP</option>
                        </select>

                        {/* Status Filter */}
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Suspended">Suspended</option>
                        </select>

                        {/* Bulk Actions */}
                        {selectedUsers.length > 0 && (
                            <div className="flex items-center gap-2">
                                <span className="text-earth-400 text-sm">{selectedUsers.length} selected</span>
                                <button className="px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all">
                                    Export
                                </button>
                                <button className="px-4 py-2 bg-red-500/20 border border-red-500/20 rounded-xl text-red-500 hover:bg-red-500/30 transition-all">
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-earth-800/50">
                                <tr className="border-b border-gold-500/20">
                                    <th className="py-4 px-6">
                                        <input
                                            type="checkbox"
                                            checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                                            onChange={toggleSelectAll}
                                            className="w-4 h-4 rounded border-gold-500/30 bg-earth-800/50 text-gold-500 focus:ring-gold-500/20"
                                        />
                                    </th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">User</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Contact</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Role</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Status</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Bookings</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Total Spent</th>
                                    <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Join Date</th>
                                    <th className="text-right py-4 px-6 text-earth-400 font-semibold text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="border-b border-gold-500/10 hover:bg-earth-800/30 transition-colors">
                                        <td className="py-4 px-6">
                                            <input
                                                type="checkbox"
                                                checked={selectedUsers.includes(user.id)}
                                                onChange={() => toggleUserSelection(user.id)}
                                                className="w-4 h-4 rounded border-gold-500/30 bg-earth-800/50 text-gold-500 focus:ring-gold-500/20"
                                            />
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-earth-950 font-bold text-sm">
                                                    {user.avatar}
                                                </div>
                                                <div>
                                                    <p className="text-earth-100 font-medium">{user.name}</p>
                                                    <p className="text-earth-400 text-sm font-mono">{user.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <p className="text-earth-300">{user.email}</p>
                                            <p className="text-earth-400 text-sm">{user.phone}</p>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.role === 'VIP' ? 'bg-purple-500/20 text-purple-500' :
                                                    user.role === 'Member' ? 'bg-blue-500/20 text-blue-500' :
                                                        'bg-earth-700/50 text-earth-300'
                                                }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${user.status === 'Active' ? 'bg-emerald-500/20 text-emerald-500' :
                                                    user.status === 'Inactive' ? 'bg-orange-500/20 text-orange-500' :
                                                        'bg-red-500/20 text-red-500'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-earth-100 font-semibold">{user.totalBookings}</td>
                                        <td className="py-4 px-6 text-earth-100 font-semibold">{user.totalSpent}</td>
                                        <td className="py-4 px-6 text-earth-300">{user.joinDate}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-gold-500 transition-all">
                                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-blue-500 transition-all">
                                                    <span className="material-symbols-outlined text-xl">edit</span>
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-red-500 transition-all">
                                                    <span className="material-symbols-outlined text-xl">delete</span>
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
                            Showing {filteredUsers.length} of {users.length} users
                        </p>
                        <div className="flex items-center gap-2">
                            <button className="px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-lg text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all">
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-gold-500/20 border border-gold-500/40 rounded-lg text-gold-500 font-semibold">
                                1
                            </button>
                            <button className="px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-lg text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all">
                                2
                            </button>
                            <button className="px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-lg text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all">
                                3
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
