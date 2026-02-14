'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

interface Room {
    id: string;
    name: string;
    type: string;
    capacity: number;
    price: string;
    status: 'Available' | 'Occupied' | 'Maintenance' | 'Reserved';
    amenities: string[];
    size: string;
    view: string;
    thumbnail: string;
    bookings: number;
    rating: number;
}

const rooms: Room[] = [
    {
        id: 'RM-001',
        name: 'Deluxe Suite',
        type: 'Suite',
        capacity: 2,
        price: '₹8,500',
        status: 'Available',
        amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Balcony'],
        size: '450 sq ft',
        view: 'Mountain View',
        thumbnail: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400',
        bookings: 45,
        rating: 4.8
    },
    {
        id: 'RM-002',
        name: 'Premium Villa',
        type: 'Villa',
        capacity: 4,
        price: '₹15,000',
        status: 'Occupied',
        amenities: ['WiFi', 'AC', 'TV', 'Kitchen', 'Private Pool', 'Garden'],
        size: '1200 sq ft',
        view: 'Garden View',
        thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400',
        bookings: 32,
        rating: 4.9
    },
    {
        id: 'RM-003',
        name: 'Garden View Room',
        type: 'Standard',
        capacity: 2,
        price: '₹6,000',
        status: 'Available',
        amenities: ['WiFi', 'AC', 'TV', 'Balcony'],
        size: '350 sq ft',
        view: 'Garden View',
        thumbnail: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400',
        bookings: 58,
        rating: 4.6
    },
    {
        id: 'RM-004',
        name: 'Luxury Suite',
        type: 'Suite',
        capacity: 3,
        price: '₹12,000',
        status: 'Reserved',
        amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Jacuzzi', 'Balcony'],
        size: '600 sq ft',
        view: 'Mountain View',
        thumbnail: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400',
        bookings: 38,
        rating: 4.9
    },
    {
        id: 'RM-005',
        name: 'Standard Room',
        type: 'Standard',
        capacity: 2,
        price: '₹5,000',
        status: 'Maintenance',
        amenities: ['WiFi', 'AC', 'TV'],
        size: '300 sq ft',
        view: 'City View',
        thumbnail: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400',
        bookings: 62,
        rating: 4.5
    },
    {
        id: 'RM-006',
        name: 'Executive Suite',
        type: 'Suite',
        capacity: 2,
        price: '₹10,000',
        status: 'Available',
        amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Work Desk', 'Balcony'],
        size: '500 sq ft',
        view: 'Mountain View',
        thumbnail: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400',
        bookings: 41,
        rating: 4.7
    },
];

export default function RoomsManagement() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [filterType, setFilterType] = useState<string>('All');
    const [showAddModal, setShowAddModal] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const filteredRooms = rooms.filter(room => {
        const matchesSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            room.id.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'All' || room.status === filterStatus;
        const matchesType = filterType === 'All' || room.type === filterType;
        return matchesSearch && matchesStatus && matchesType;
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
                            Room Management
                        </h1>
                        <p className="text-earth-400">Manage rooms and accommodations</p>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all"
                    >
                        <span className="material-symbols-outlined">add_home</span>
                        Add New Room
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                    {[
                        { label: 'Total Rooms', value: '24', icon: 'bed', color: 'from-blue-500 to-blue-600' },
                        { label: 'Available', value: '12', icon: 'check_circle', color: 'from-emerald-500 to-emerald-600' },
                        { label: 'Occupied', value: '8', icon: 'person', color: 'from-purple-500 to-purple-600' },
                        { label: 'Maintenance', value: '2', icon: 'build', color: 'from-orange-500 to-orange-600' },
                        { label: 'Occupancy', value: '67%', icon: 'trending_up', color: 'from-gold-500 to-gold-600' },
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
                    <div className="flex flex-wrap gap-4 items-center">
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
                                    placeholder="Search rooms..."
                                    className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl pl-12 pr-4 py-2.5 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                />
                            </div>
                        </div>

                        {/* Type Filter */}
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Types</option>
                            <option value="Standard">Standard</option>
                            <option value="Suite">Suite</option>
                            <option value="Villa">Villa</option>
                        </select>

                        {/* Status Filter */}
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Status</option>
                            <option value="Available">Available</option>
                            <option value="Occupied">Occupied</option>
                            <option value="Reserved">Reserved</option>
                            <option value="Maintenance">Maintenance</option>
                        </select>

                        {/* View Toggle */}
                        <div className="flex items-center gap-2 bg-earth-800/50 border border-gold-500/20 rounded-xl p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gold-500/20 text-gold-500' : 'text-earth-400 hover:text-gold-500'
                                    }`}
                            >
                                <span className="material-symbols-outlined">grid_view</span>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gold-500/20 text-gold-500' : 'text-earth-400 hover:text-gold-500'
                                    }`}
                            >
                                <span className="material-symbols-outlined">view_list</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Rooms Grid/List */}
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredRooms.map((room) => (
                            <div
                                key={room.id}
                                className="group bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300"
                            >
                                {/* Thumbnail */}
                                <div className="relative h-48 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                                        style={{ backgroundImage: `url(${room.thumbnail})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-earth-950 to-transparent" />

                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${room.status === 'Available' ? 'bg-emerald-500/80 text-white' :
                                                room.status === 'Occupied' ? 'bg-purple-500/80 text-white' :
                                                    room.status === 'Reserved' ? 'bg-blue-500/80 text-white' :
                                                        'bg-orange-500/80 text-white'
                                            }`}>
                                            {room.status}
                                        </span>
                                    </div>

                                    {/* Rating */}
                                    <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-earth-950/80 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="material-symbols-outlined text-gold-500 text-sm filled-icon">star</span>
                                        <span className="text-earth-100 text-sm font-semibold">{room.rating}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Type Badge */}
                                    <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-500 rounded-full text-xs font-semibold mb-3">
                                        {room.type}
                                    </span>

                                    {/* Name & ID */}
                                    <h3 className="text-xl font-bold text-earth-100 mb-1 group-hover:text-gold-500 transition-colors">
                                        {room.name}
                                    </h3>
                                    <p className="text-earth-400 text-sm font-mono mb-4">{room.id}</p>

                                    {/* Details */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="flex items-center gap-2 text-earth-300 text-sm">
                                            <span className="material-symbols-outlined text-gold-500 text-lg">group</span>
                                            {room.capacity} Guests
                                        </div>
                                        <div className="flex items-center gap-2 text-earth-300 text-sm">
                                            <span className="material-symbols-outlined text-gold-500 text-lg">square_foot</span>
                                            {room.size}
                                        </div>
                                        <div className="flex items-center gap-2 text-earth-300 text-sm">
                                            <span className="material-symbols-outlined text-gold-500 text-lg">landscape</span>
                                            {room.view}
                                        </div>
                                        <div className="flex items-center gap-2 text-earth-300 text-sm">
                                            <span className="material-symbols-outlined text-gold-500 text-lg">calendar_month</span>
                                            {room.bookings} Bookings
                                        </div>
                                    </div>

                                    {/* Amenities */}
                                    <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-gold-500/10">
                                        {room.amenities.slice(0, 3).map((amenity, index) => (
                                            <span key={index} className="px-2 py-1 bg-earth-800/50 text-earth-300 rounded text-xs">
                                                {amenity}
                                            </span>
                                        ))}
                                        {room.amenities.length > 3 && (
                                            <span className="px-2 py-1 bg-earth-800/50 text-earth-300 rounded text-xs">
                                                +{room.amenities.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Price & Actions */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-earth-400 text-xs">Per Night</p>
                                            <p className="text-2xl font-bold text-gold-500">{room.price}</p>
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
                ) : (
                    <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-earth-800/50">
                                    <tr className="border-b border-gold-500/20">
                                        <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Room</th>
                                        <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Type</th>
                                        <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Capacity</th>
                                        <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Size</th>
                                        <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">View</th>
                                        <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Status</th>
                                        <th className="text-left py-4 px-6 text-earth-400 font-semibold text-sm">Rating</th>
                                        <th className="text-right py-4 px-6 text-earth-400 font-semibold text-sm">Price</th>
                                        <th className="text-right py-4 px-6 text-earth-400 font-semibold text-sm">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredRooms.map((room) => (
                                        <tr key={room.id} className="border-b border-gold-500/10 hover:bg-earth-800/30 transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="w-16 h-16 rounded-lg bg-cover bg-center"
                                                        style={{ backgroundImage: `url(${room.thumbnail})` }}
                                                    />
                                                    <div>
                                                        <p className="text-earth-100 font-medium">{room.name}</p>
                                                        <p className="text-earth-400 text-sm font-mono">{room.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-earth-300">{room.type}</td>
                                            <td className="py-4 px-6 text-earth-300">{room.capacity} Guests</td>
                                            <td className="py-4 px-6 text-earth-300">{room.size}</td>
                                            <td className="py-4 px-6 text-earth-300">{room.view}</td>
                                            <td className="py-4 px-6">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${room.status === 'Available' ? 'bg-emerald-500/20 text-emerald-500' :
                                                        room.status === 'Occupied' ? 'bg-purple-500/20 text-purple-500' :
                                                            room.status === 'Reserved' ? 'bg-blue-500/20 text-blue-500' :
                                                                'bg-orange-500/20 text-orange-500'
                                                    }`}>
                                                    {room.status}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-gold-500 text-sm filled-icon">star</span>
                                                    <span className="text-earth-100 font-semibold">{room.rating}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-right text-gold-500 font-semibold">{room.price}</td>
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
                    </div>
                )}
            </main>
        </div>
    );
}
