'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import AdminProtectedRoute from '../components/AdminProtectedRoute';
import { useAdminAuth } from '../context/AdminAuthContext';

type Subscriber = {
  email: string;
  source?: string;
  subscribedAt?: string;
};

export default function AdminNewsletterPage() {
  const { getAdminToken } = useAdminAuth();
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoadingSubscribers, setIsLoadingSubscribers] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const apiBase = useMemo(
    () => process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api',
    [],
  );

  useEffect(() => {
    const loadSubscribers = async () => {
      try {
        setIsLoadingSubscribers(true);
        const token = getAdminToken();
        const response = await fetch(`${apiBase}/newsletter/subscribers`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(payload?.error || payload?.message || 'Failed to load subscribers');
        }
        setSubscribers(Array.isArray(payload?.subscribers) ? payload.subscribers : []);
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to load subscribers';
        setStatusMessage({ type: 'error', text: message });
      } finally {
        setIsLoadingSubscribers(false);
      }
    };

    void loadSubscribers();
  }, [apiBase, getAdminToken]);

  const handleSend = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage(null);

    if (!subject.trim() || !content.trim()) {
      setStatusMessage({ type: 'error', text: 'Subject and content are required.' });
      return;
    }

    try {
      setIsSending(true);
      const token = getAdminToken();
      const response = await fetch(`${apiBase}/newsletter/broadcast`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          subject: subject.trim(),
          content: content.trim(),
        }),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload?.error || payload?.message || 'Failed to send newsletter');
      }

      setStatusMessage({
        type: 'success',
        text: `Broadcast sent. Delivered: ${payload?.sentCount ?? 0}, Failed: ${payload?.failedCount ?? 0}.`,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to send newsletter';
      setStatusMessage({ type: 'error', text: message });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AdminProtectedRoute>
      <div className="min-h-screen bg-earth-950">
        <AdminSidebar />
        <AdminHeader />

        <main className="ml-64 pt-20 p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-earth-100 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Newsletter Broadcast
            </h1>
            <p className="text-earth-400">Write a message and send it to all subscribed users.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className="lg:col-span-2 bg-earth-900/50 border border-gold-500/20 rounded-2xl p-6">
              <form onSubmit={handleSend} className="space-y-4">
                <div>
                  <label className="block text-sm text-earth-300 mb-2">Subject</label>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Newsletter subject"
                    className="w-full rounded-lg border border-earth-700 bg-earth-900 px-4 py-3 text-earth-100 outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-earth-300 mb-2">Content</label>
                  <textarea
                    rows={12}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write the email content..."
                    className="w-full rounded-lg border border-earth-700 bg-earth-900 px-4 py-3 text-earth-100 outline-none focus:border-gold-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-earth-950 px-6 py-3 rounded-lg font-semibold"
                >
                  {isSending ? 'Sending...' : 'Send to Subscribers'}
                </button>
              </form>
              {statusMessage && (
                <p className={`mt-4 text-sm ${statusMessage.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {statusMessage.text}
                </p>
              )}
            </section>

            <aside className="bg-earth-900/50 border border-gold-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-earth-100 mb-2">Subscribers</h2>
              <p className="text-earth-400 text-sm mb-4">
                {isLoadingSubscribers ? 'Loading...' : `${subscribers.length} active subscribers`}
              </p>
              <div className="max-h-[420px] overflow-auto space-y-2">
                {subscribers.slice(0, 50).map((subscriber) => (
                  <div key={subscriber.email} className="rounded-lg border border-earth-800 bg-earth-900 px-3 py-2">
                    <p className="text-sm text-earth-100">{subscriber.email}</p>
                    <p className="text-xs text-earth-500">{subscriber.source || 'unknown source'}</p>
                  </div>
                ))}
                {!isLoadingSubscribers && subscribers.length === 0 && (
                  <p className="text-sm text-earth-500">No subscribers found.</p>
                )}
              </div>
            </aside>
          </div>
        </main>
      </div>
    </AdminProtectedRoute>
  );
}
