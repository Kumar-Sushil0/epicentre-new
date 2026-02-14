'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

export default function Settings() {
    const [activeTab, setActiveTab] = useState('general');

    // Form states
    const [generalSettings, setGeneralSettings] = useState({
        siteName: 'EPiCentre Resort',
        siteDescription: 'A luxury resort and wellness retreat',
        contactEmail: 'info@epicentre.com',
        contactPhone: '+91 98765 43210',
        address: 'Baramati, Maharashtra, India',
        timezone: 'Asia/Kolkata',
    });

    const [bookingSettings, setBookingSettings] = useState({
        minBookingDays: '1',
        maxBookingDays: '30',
        advanceBookingDays: '90',
        checkInTime: '14:00',
        checkOutTime: '11:00',
        cancellationHours: '24',
        depositPercentage: '30',
    });

    const [paymentSettings, setPaymentSettings] = useState({
        currency: 'INR',
        taxRate: '18',
        enableOnlinePayment: true,
        enableCashPayment: true,
        razorpayKey: '',
        stripeKey: '',
    });

    const [notificationSettings, setNotificationSettings] = useState({
        emailNotifications: true,
        smsNotifications: true,
        bookingConfirmation: true,
        paymentConfirmation: true,
        cancellationAlert: true,
        dailyReport: true,
    });

    const tabs = [
        { id: 'general', label: 'General', icon: 'settings' },
        { id: 'booking', label: 'Booking', icon: 'calendar_month' },
        { id: 'payment', label: 'Payment', icon: 'payments' },
        { id: 'notifications', label: 'Notifications', icon: 'notifications' },
        { id: 'security', label: 'Security', icon: 'shield' },
        { id: 'appearance', label: 'Appearance', icon: 'palette' },
    ];

    const handleSave = () => {
        // Handle save logic
        console.log('Saving settings...');
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
                            Settings
                        </h1>
                        <p className="text-earth-400">Manage your resort configuration</p>
                    </div>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all"
                    >
                        <span className="material-symbols-outlined">save</span>
                        Save Changes
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Tabs Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-4 space-y-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${activeTab === tab.id
                                            ? 'bg-gradient-to-r from-gold-500/20 to-gold-600/20 text-gold-500 border border-gold-500/30'
                                            : 'text-earth-300 hover:bg-earth-800/50 hover:text-gold-500'
                                        }`}
                                >
                                    <span className={`material-symbols-outlined ${activeTab === tab.id ? 'filled-icon' : ''}`}>
                                        {tab.icon}
                                    </span>
                                    <span className="font-medium">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Settings Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-8">

                            {/* General Settings */}
                            {activeTab === 'general' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            General Settings
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Site Name</label>
                                            <input
                                                type="text"
                                                value={generalSettings.siteName}
                                                onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Timezone</label>
                                            <select
                                                value={generalSettings.timezone}
                                                onChange={(e) => setGeneralSettings({ ...generalSettings, timezone: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            >
                                                <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                                                <option value="America/New_York">America/New_York (EST)</option>
                                                <option value="Europe/London">Europe/London (GMT)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-earth-300 mb-2">Site Description</label>
                                        <textarea
                                            value={generalSettings.siteDescription}
                                            onChange={(e) => setGeneralSettings({ ...generalSettings, siteDescription: e.target.value })}
                                            rows={3}
                                            className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all resize-none"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Contact Email</label>
                                            <input
                                                type="email"
                                                value={generalSettings.contactEmail}
                                                onChange={(e) => setGeneralSettings({ ...generalSettings, contactEmail: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Contact Phone</label>
                                            <input
                                                type="tel"
                                                value={generalSettings.contactPhone}
                                                onChange={(e) => setGeneralSettings({ ...generalSettings, contactPhone: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-earth-300 mb-2">Address</label>
                                        <input
                                            type="text"
                                            value={generalSettings.address}
                                            onChange={(e) => setGeneralSettings({ ...generalSettings, address: e.target.value })}
                                            className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Booking Settings */}
                            {activeTab === 'booking' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            Booking Settings
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Minimum Booking Days</label>
                                            <input
                                                type="number"
                                                value={bookingSettings.minBookingDays}
                                                onChange={(e) => setBookingSettings({ ...bookingSettings, minBookingDays: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Maximum Booking Days</label>
                                            <input
                                                type="number"
                                                value={bookingSettings.maxBookingDays}
                                                onChange={(e) => setBookingSettings({ ...bookingSettings, maxBookingDays: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Advance Booking Days</label>
                                            <input
                                                type="number"
                                                value={bookingSettings.advanceBookingDays}
                                                onChange={(e) => setBookingSettings({ ...bookingSettings, advanceBookingDays: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Cancellation Notice (Hours)</label>
                                            <input
                                                type="number"
                                                value={bookingSettings.cancellationHours}
                                                onChange={(e) => setBookingSettings({ ...bookingSettings, cancellationHours: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Check-in Time</label>
                                            <input
                                                type="time"
                                                value={bookingSettings.checkInTime}
                                                onChange={(e) => setBookingSettings({ ...bookingSettings, checkInTime: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Check-out Time</label>
                                            <input
                                                type="time"
                                                value={bookingSettings.checkOutTime}
                                                onChange={(e) => setBookingSettings({ ...bookingSettings, checkOutTime: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-earth-300 mb-2">Deposit Percentage (%)</label>
                                        <input
                                            type="number"
                                            value={bookingSettings.depositPercentage}
                                            onChange={(e) => setBookingSettings({ ...bookingSettings, depositPercentage: e.target.value })}
                                            className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Payment Settings */}
                            {activeTab === 'payment' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            Payment Settings
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Currency</label>
                                            <select
                                                value={paymentSettings.currency}
                                                onChange={(e) => setPaymentSettings({ ...paymentSettings, currency: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            >
                                                <option value="INR">INR (₹)</option>
                                                <option value="USD">USD ($)</option>
                                                <option value="EUR">EUR (€)</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-earth-300 mb-2">Tax Rate (%)</label>
                                            <input
                                                type="number"
                                                value={paymentSettings.taxRate}
                                                onChange={(e) => setPaymentSettings({ ...paymentSettings, taxRate: e.target.value })}
                                                className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={paymentSettings.enableOnlinePayment}
                                                onChange={(e) => setPaymentSettings({ ...paymentSettings, enableOnlinePayment: e.target.checked })}
                                                className="w-5 h-5 rounded border-gold-500/30 bg-earth-800/50 text-gold-500 focus:ring-gold-500/20"
                                            />
                                            <span className="text-earth-300 group-hover:text-earth-100 transition-colors">Enable Online Payment</span>
                                        </label>

                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={paymentSettings.enableCashPayment}
                                                onChange={(e) => setPaymentSettings({ ...paymentSettings, enableCashPayment: e.target.checked })}
                                                className="w-5 h-5 rounded border-gold-500/30 bg-earth-800/50 text-gold-500 focus:ring-gold-500/20"
                                            />
                                            <span className="text-earth-300 group-hover:text-earth-100 transition-colors">Enable Cash Payment</span>
                                        </label>
                                    </div>

                                    <div className="pt-6 border-t border-gold-500/20">
                                        <h3 className="text-lg font-semibold text-earth-100 mb-4">Payment Gateway Keys</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-earth-300 mb-2">Razorpay API Key</label>
                                                <input
                                                    type="password"
                                                    value={paymentSettings.razorpayKey}
                                                    onChange={(e) => setPaymentSettings({ ...paymentSettings, razorpayKey: e.target.value })}
                                                    className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                                    placeholder="rzp_live_xxxxxxxxxxxxx"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-earth-300 mb-2">Stripe API Key</label>
                                                <input
                                                    type="password"
                                                    value={paymentSettings.stripeKey}
                                                    onChange={(e) => setPaymentSettings({ ...paymentSettings, stripeKey: e.target.value })}
                                                    className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                                    placeholder="sk_live_xxxxxxxxxxxxx"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Notification Settings */}
                            {activeTab === 'notifications' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            Notification Settings
                                        </h2>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-earth-800/30 rounded-xl p-4">
                                            <h3 className="text-lg font-semibold text-earth-100 mb-4">Notification Channels</h3>
                                            <div className="space-y-3">
                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={notificationSettings.emailNotifications}
                                                        onChange={(e) => setNotificationSettings({ ...notificationSettings, emailNotifications: e.target.checked })}
                                                        className="w-5 h-5 rounded border-gold-500/30 bg-earth-800/50 text-gold-500 focus:ring-gold-500/20"
                                                    />
                                                    <span className="text-earth-300 group-hover:text-earth-100 transition-colors">Email Notifications</span>
                                                </label>

                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={notificationSettings.smsNotifications}
                                                        onChange={(e) => setNotificationSettings({ ...notificationSettings, smsNotifications: e.target.checked })}
                                                        className="w-5 h-5 rounded border-gold-500/30 bg-earth-800/50 text-gold-500 focus:ring-gold-500/20"
                                                    />
                                                    <span className="text-earth-300 group-hover:text-earth-100 transition-colors">SMS Notifications</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="bg-earth-800/30 rounded-xl p-4">
                                            <h3 className="text-lg font-semibold text-earth-100 mb-4">Event Notifications</h3>
                                            <div className="space-y-3">
                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={notificationSettings.bookingConfirmation}
                                                        onChange={(e) => setNotificationSettings({ ...notificationSettings, bookingConfirmation: e.target.checked })}
                                                        className="w-5 h-5 rounded border-gold-500/30 bg-earth-800/50 text-gold-500 focus:ring-gold-500/20"
                                                    />
                                                    <span className="text-earth-300 group-hover:text-earth-100 transition-colors">Booking Confirmation</span>
                                                </label>

                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={notificationSettings.paymentConfirmation}
                                                        onChange={(e) => setNotificationSettings({ ...notificationSettings, paymentConfirmation: e.target.checked })}
                                                        className="w-5 h-5 rounded border-gold-500/30 bg-earth-800/50 text-gold-500 focus:ring-gold-500/20"
                                                    />
                                                    <span className="text-earth-300 group-hover:text-earth-100 transition-colors">Payment Confirmation</span>
                                                </label>

                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={notificationSettings.cancellationAlert}
                                                        onChange={(e) => setNotificationSettings({ ...notificationSettings, cancellationAlert: e.target.checked })}
                                                        className="w-5 h-5 rounded border-gold-500/30 bg-earth-800/50 text-gold-500 focus:ring-gold-500/20"
                                                    />
                                                    <span className="text-earth-300 group-hover:text-earth-100 transition-colors">Cancellation Alert</span>
                                                </label>

                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={notificationSettings.dailyReport}
                                                        onChange={(e) => setNotificationSettings({ ...notificationSettings, dailyReport: e.target.checked })}
                                                        className="w-5 h-5 rounded border-gold-500/30 bg-earth-800/50 text-gold-500 focus:ring-gold-500/20"
                                                    />
                                                    <span className="text-earth-300 group-hover:text-earth-100 transition-colors">Daily Report</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Security Settings */}
                            {activeTab === 'security' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            Security Settings
                                        </h2>
                                    </div>

                                    <div className="bg-earth-800/30 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-earth-100 mb-4">Change Password</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-earth-300 mb-2">Current Password</label>
                                                <input
                                                    type="password"
                                                    className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-earth-300 mb-2">New Password</label>
                                                <input
                                                    type="password"
                                                    className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-earth-300 mb-2">Confirm New Password</label>
                                                <input
                                                    type="password"
                                                    className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                                />
                                            </div>
                                            <button className="px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all">
                                                Update Password
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-earth-800/30 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-earth-100 mb-4">Two-Factor Authentication</h3>
                                        <p className="text-earth-400 mb-4">Add an extra layer of security to your account</p>
                                        <button className="px-6 py-2 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all">
                                            Enable 2FA
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Appearance Settings */}
                            {activeTab === 'appearance' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-earth-100 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            Appearance Settings
                                        </h2>
                                    </div>

                                    <div className="bg-earth-800/30 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-earth-100 mb-4">Theme</h3>
                                        <div className="grid grid-cols-3 gap-4">
                                            {['Dark', 'Light', 'Auto'].map((theme) => (
                                                <button
                                                    key={theme}
                                                    className="p-4 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all"
                                                >
                                                    {theme}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-earth-800/30 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-earth-100 mb-4">Brand Colors</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-earth-300 mb-2">Primary Color</label>
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="color"
                                                        defaultValue="#C5A065"
                                                        className="w-12 h-12 rounded-lg border border-gold-500/20 cursor-pointer"
                                                    />
                                                    <input
                                                        type="text"
                                                        defaultValue="#C5A065"
                                                        className="flex-1 bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-earth-300 mb-2">Secondary Color</label>
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="color"
                                                        defaultValue="#1A120B"
                                                        className="w-12 h-12 rounded-lg border border-gold-500/20 cursor-pointer"
                                                    />
                                                    <input
                                                        type="text"
                                                        defaultValue="#1A120B"
                                                        className="flex-1 bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
