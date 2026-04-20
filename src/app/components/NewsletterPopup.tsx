"use client";

import { useState, useEffect } from "react";

const SUBSCRIBED_KEY = "hasSubscribedNewsletter";
/** Legacy key — permanently blocked dismiss; migrated on read */
const LEGACY_SEEN_KEY = "hasSeenNewsletterPopup";
const DISMISS_AT_KEY = "newsletterDismissedAt";
/** Don’t show again after dismiss until this many days */
const DISMISS_COOLDOWN_DAYS = 14;

function readSuppressState(): { suppress: boolean } {
  if (typeof window === "undefined") return { suppress: true };
  try {
    if (localStorage.getItem(SUBSCRIBED_KEY) === "true") {
      return { suppress: true };
    }

    // One-time migration: old logic set "seen" forever without subscribe — unblock those users
    if (localStorage.getItem(LEGACY_SEEN_KEY) === "true") {
      localStorage.removeItem(LEGACY_SEEN_KEY);
    }

    const raw = localStorage.getItem(DISMISS_AT_KEY);
    if (!raw) return { suppress: false };
    const dismissedAt = parseInt(raw, 10);
    if (Number.isNaN(dismissedAt)) return { suppress: false };
    const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24);
    return { suppress: daysSince < DISMISS_COOLDOWN_DAYS };
  } catch {
    return { suppress: false };
  }
}

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const { suppress } = readSuppressState();
    if (suppress) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const openFromStrip = (event: Event) => {
      const custom = event as CustomEvent<{ email?: string }>;
      const incomingEmail = custom.detail?.email?.trim();
      if (incomingEmail) setEmail(incomingEmail);
      setSubmitMessage("");
      setIsVisible(true);
    };

    window.addEventListener("open-newsletter-popup", openFromStrip as EventListener);
    return () => {
      window.removeEventListener("open-newsletter-popup", openFromStrip as EventListener);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    try {
      localStorage.setItem(DISMISS_AT_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.error || "Failed to subscribe");
      }

      setSubmitMessage("Thank you for subscribing!");
      setEmail("");

      try {
        localStorage.setItem(SUBSCRIBED_KEY, "true");
        localStorage.removeItem(DISMISS_AT_KEY);
        localStorage.removeItem(LEGACY_SEEN_KEY);
      } catch {
        /* ignore */
      }

      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setSubmitMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden
      />

      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative w-full max-w-md border border-[#3a2a1f] bg-[#160f0a] p-6 md:p-8 shadow-2xl pointer-events-auto transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="newsletter-popup-title"
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-4 top-4 text-[#7a6048] transition-colors hover:text-[#c5a065]"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <div className="text-center mb-6">
            <h3
              id="newsletter-popup-title"
              className="mb-2 font-serif text-3xl font-light text-[#e8d5b0]"
            >
              Follow the pollination
            </h3>
            <p className="font-serif text-sm leading-7 text-[#b09070]">
              Receive updates on cycles, residencies, and occasional reflections on silence and
              attention.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full border border-[#3a2a1f] bg-[#1c1410] px-4 py-3 text-center text-sm text-[#e8d5b0] outline-none transition-colors placeholder:text-center placeholder:text-[#7a6048] focus:border-[#8a6e42]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#c5a065] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0f0b08] transition-colors hover:bg-[#d4b07a] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>

            {submitMessage && (
              <p
                className={`text-center text-sm ${
                  submitMessage.includes("Thank you") ? "text-[#c5a065]" : "text-red-400"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>

          <p className="mt-4 text-center font-serif text-xs italic text-[#7a6048]">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </>
  );
}
