'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
    label: string;
    icon: string;
    href: string;
    badge?: string;
}

const navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', href: '/admin/dashboard' },
    { label: 'Users', icon: 'group', href: '/admin/users', badge: '24' },
    { label: 'Bookings', icon: 'calendar_month', href: '/admin/bookings', badge: '12' },
    { label: 'Rooms', icon: 'bed', href: '/admin/rooms' },
    { label: 'Activities', icon: 'hiking', href: '/admin/activities' },
    { label: 'Blogs', icon: 'article', href: '/admin/blogs' },
    { label: 'Events', icon: 'event', href: '/admin/events' },
    { label: 'Payments', icon: 'payments', href: '/admin/payments' },
    { label: 'Analytics', icon: 'analytics', href: '/admin/analytics' },
    { label: 'Settings', icon: 'settings', href: '/admin/settings' },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-earth-900/95 backdrop-blur-xl border-r border-gold-500/20 transition-all duration-300 z-50 ${isCollapsed ? 'w-20' : 'w-64'
                }`}
        >
            {/* Logo */}
            <div className="h-20 flex items-center justify-between px-6 border-b border-gold-500/20">
                {!isCollapsed && (
                    <h1 className="text-2xl font-bold text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        EPiCentre
                    </h1>
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 rounded-lg hover:bg-earth-800/50 text-gold-500 transition-colors"
                >
                    <span className="material-symbols-outlined">
                        {isCollapsed ? 'chevron_right' : 'chevron_left'}
                    </span>
                </button>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-10rem)]">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative ${isActive
                                    ? 'bg-gradient-to-r from-gold-500/20 to-gold-600/20 text-gold-500 border border-gold-500/30'
                                    : 'text-earth-300 hover:bg-earth-800/50 hover:text-gold-500'
                                }`}
                        >
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gold-500 rounded-r-full" />
                            )}
                            <span className={`material-symbols-outlined ${isActive ? 'filled-icon' : ''}`}>
                                {item.icon}
                            </span>
                            {!isCollapsed && (
                                <>
                                    <span className="flex-1 font-medium">{item.label}</span>
                                    {item.badge && (
                                        <span className="px-2 py-0.5 text-xs font-semibold bg-gold-500 text-earth-950 rounded-full">
                                            {item.badge}
                                        </span>
                                    )}
                                </>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gold-500/20 bg-earth-900/95">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-earth-950 font-bold">
                        A
                    </div>
                    {!isCollapsed && (
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-earth-100">Admin User</p>
                            <p className="text-xs text-earth-400">admin@epicentre.com</p>
                        </div>
                    )}
                    <button className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-gold-500 transition-colors">
                        <span className="material-symbols-outlined text-xl">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
