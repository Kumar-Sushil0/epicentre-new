'use client';

import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    author: string;
    category: string;
    status: 'Published' | 'Draft' | 'Scheduled';
    publishDate: string;
    views: number;
    likes: number;
    comments: number;
    excerpt: string;
    thumbnail: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 'POST-001',
        title: 'Finding Peace in the Mountains: A Wellness Journey',
        slug: 'finding-peace-mountains-wellness',
        author: 'Admin',
        category: 'Wellness',
        status: 'Published',
        publishDate: '2026-02-10',
        views: 1245,
        likes: 89,
        comments: 23,
        excerpt: 'Discover how our mountain retreat offers the perfect escape for mindfulness and rejuvenation...',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
    },
    {
        id: 'POST-002',
        title: 'Top 10 Activities for Adventure Seekers',
        slug: 'top-10-activities-adventure',
        author: 'Admin',
        category: 'Activities',
        status: 'Published',
        publishDate: '2026-02-08',
        views: 2156,
        likes: 145,
        comments: 34,
        excerpt: 'From trekking to paragliding, explore the most thrilling experiences at EPiCentre...',
        thumbnail: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400'
    },
    {
        id: 'POST-003',
        title: 'The Art of Mindful Living',
        slug: 'art-mindful-living',
        author: 'Admin',
        category: 'Lifestyle',
        status: 'Draft',
        publishDate: '2026-02-15',
        views: 0,
        likes: 0,
        comments: 0,
        excerpt: 'Learn how to incorporate mindfulness practices into your daily routine...',
        thumbnail: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400'
    },
    {
        id: 'POST-004',
        title: 'Seasonal Delights: Farm-to-Table Dining Experience',
        slug: 'seasonal-farm-to-table',
        author: 'Admin',
        category: 'Dining',
        status: 'Scheduled',
        publishDate: '2026-02-20',
        views: 0,
        likes: 0,
        comments: 0,
        excerpt: 'Experience the freshest ingredients sourced from local farms in our curated menu...',
        thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400'
    },
];

export default function BlogsManagement() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [filterCategory, setFilterCategory] = useState<string>('All');
    const [showEditor, setShowEditor] = useState(false);
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

    // Form states for blog editor
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        category: 'Wellness',
        status: 'Draft' as 'Published' | 'Draft' | 'Scheduled',
        publishDate: '',
        excerpt: '',
        content: '',
        thumbnail: '',
    });

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'All' || post.status === filterStatus;
        const matchesCategory = filterCategory === 'All' || post.category === filterCategory;
        return matchesSearch && matchesStatus && matchesCategory;
    });

    const openEditor = (post?: BlogPost) => {
        if (post) {
            setEditingPost(post);
            setFormData({
                title: post.title,
                slug: post.slug,
                category: post.category,
                status: post.status,
                publishDate: post.publishDate,
                excerpt: post.excerpt,
                content: '',
                thumbnail: post.thumbnail,
            });
        } else {
            setEditingPost(null);
            setFormData({
                title: '',
                slug: '',
                category: 'Wellness',
                status: 'Draft',
                publishDate: '',
                excerpt: '',
                content: '',
                thumbnail: '',
            });
        }
        setShowEditor(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Submitting blog post:', formData);
        setShowEditor(false);
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
                            Blog Management
                        </h1>
                        <p className="text-earth-400">Create and manage blog posts</p>
                    </div>
                    <button
                        onClick={() => openEditor()}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all"
                    >
                        <span className="material-symbols-outlined">add</span>
                        New Blog Post
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Posts', value: '48', icon: 'article', color: 'from-blue-500 to-blue-600' },
                        { label: 'Published', value: '32', icon: 'check_circle', color: 'from-emerald-500 to-emerald-600' },
                        { label: 'Drafts', value: '12', icon: 'draft', color: 'from-orange-500 to-orange-600' },
                        { label: 'Total Views', value: '12.5K', icon: 'visibility', color: 'from-purple-500 to-purple-600' },
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
                                    placeholder="Search blog posts..."
                                    className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl pl-12 pr-4 py-2.5 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Categories</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Activities">Activities</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Dining">Dining</option>
                            <option value="Events">Events</option>
                        </select>

                        {/* Status Filter */}
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-2.5 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                        >
                            <option value="All">All Status</option>
                            <option value="Published">Published</option>
                            <option value="Draft">Draft</option>
                            <option value="Scheduled">Scheduled</option>
                        </select>
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                        <div
                            key={post.id}
                            className="group bg-earth-900/50 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundImage: `url(${post.thumbnail})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-earth-950 to-transparent" />

                                {/* Status Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${post.status === 'Published' ? 'bg-emerald-500/80 text-white' :
                                            post.status === 'Draft' ? 'bg-orange-500/80 text-white' :
                                                'bg-blue-500/80 text-white'
                                        }`}>
                                        {post.status}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Category */}
                                <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-500 rounded-full text-xs font-semibold mb-3">
                                    {post.category}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-earth-100 mb-2 line-clamp-2 group-hover:text-gold-500 transition-colors">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-earth-400 text-sm mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center gap-4 text-earth-400 text-sm mb-4">
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-base">visibility</span>
                                        {post.views}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-base">favorite</span>
                                        {post.likes}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-base">comment</span>
                                        {post.comments}
                                    </div>
                                </div>

                                {/* Author & Date */}
                                <div className="flex items-center justify-between text-earth-400 text-sm mb-4 pb-4 border-b border-gold-500/10">
                                    <span>{post.author}</span>
                                    <span>{post.publishDate}</span>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => openEditor(post)}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all"
                                    >
                                        <span className="material-symbols-outlined text-lg">edit</span>
                                        Edit
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-blue-500 hover:border-blue-500/40 transition-all">
                                        <span className="material-symbols-outlined text-lg">visibility</span>
                                        View
                                    </button>
                                    <button className="p-2 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-red-500 hover:border-red-500/40 transition-all">
                                        <span className="material-symbols-outlined text-lg">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Blog Editor Modal */}
                {showEditor && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
                        <div className="bg-earth-900 border border-gold-500/20 rounded-2xl max-w-4xl w-full my-8">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gold-500/20">
                                <h2 className="text-2xl font-bold text-earth-100" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                    {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
                                </h2>
                                <button
                                    onClick={() => setShowEditor(false)}
                                    className="p-2 rounded-lg hover:bg-earth-800/50 text-earth-300 hover:text-gold-500 transition-all"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            {/* Modal Content */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-earth-300 mb-2">Title</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                        placeholder="Enter blog post title..."
                                        required
                                    />
                                </div>

                                {/* Slug */}
                                <div>
                                    <label className="block text-sm font-medium text-earth-300 mb-2">Slug (URL)</label>
                                    <input
                                        type="text"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                        className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                        placeholder="blog-post-url-slug"
                                        required
                                    />
                                </div>

                                {/* Category & Status */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-earth-300 mb-2">Category</label>
                                        <select
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                        >
                                            <option value="Wellness">Wellness</option>
                                            <option value="Activities">Activities</option>
                                            <option value="Lifestyle">Lifestyle</option>
                                            <option value="Dining">Dining</option>
                                            <option value="Events">Events</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-earth-300 mb-2">Status</label>
                                        <select
                                            value={formData.status}
                                            onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                                            className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                        >
                                            <option value="Draft">Draft</option>
                                            <option value="Published">Published</option>
                                            <option value="Scheduled">Scheduled</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Publish Date */}
                                <div>
                                    <label className="block text-sm font-medium text-earth-300 mb-2">Publish Date</label>
                                    <input
                                        type="date"
                                        value={formData.publishDate}
                                        onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                                        className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                        required
                                    />
                                </div>

                                {/* Thumbnail URL */}
                                <div>
                                    <label className="block text-sm font-medium text-earth-300 mb-2">Thumbnail URL</label>
                                    <input
                                        type="url"
                                        value={formData.thumbnail}
                                        onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                                        className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <label className="block text-sm font-medium text-earth-300 mb-2">Excerpt</label>
                                    <textarea
                                        value={formData.excerpt}
                                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                        rows={3}
                                        className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all resize-none"
                                        placeholder="Brief description of the blog post..."
                                        required
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <label className="block text-sm font-medium text-earth-300 mb-2">Content</label>
                                    <textarea
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        rows={12}
                                        className="w-full bg-earth-800/50 border border-gold-500/20 rounded-xl px-4 py-3 text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all resize-none font-mono text-sm"
                                        placeholder="Write your blog post content here... (Markdown supported)"
                                        required
                                    />
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gold-500/20">
                                    <button
                                        type="button"
                                        onClick={() => setShowEditor(false)}
                                        className="px-6 py-3 bg-earth-800/50 border border-gold-500/20 rounded-xl text-earth-300 hover:text-gold-500 hover:border-gold-500/40 transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-earth-950 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all"
                                    >
                                        {editingPost ? 'Update Post' : 'Create Post'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
