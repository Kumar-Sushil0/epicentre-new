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
      // Add your newsletter subscription logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));

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
    } catch {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden
      />

      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative bg-earth-800/95 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6 md:p-8 max-w-md w-full shadow-2xl pointer-events-auto transform transition-all duration-300 scale-100"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="newsletter-popup-title"
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 text-earth-300 hover:text-gold-500 transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <div className="text-center mb-6">
            <h3
              id="newsletter-popup-title"
              className="text-2xl md:text-3xl font-normal text-gold-500 mb-3"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Stay Connected
            </h3>
            <p className="text-earth-300 text-sm md:text-base leading-relaxed">
              Receive updates on cycles, residencies, and occasional reflections on silence and attention.
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
                className="w-full px-4 py-3 bg-earth-900/50 border border-earth-700/50 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 transition-colors"
                style={{ fontFamily: "Outfit, sans-serif" }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gold-500 text-earth-950 rounded-lg font-medium hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>

            {submitMessage && (
              <p
                className={`text-center text-sm ${submitMessage.includes("Thank you") ? "text-gold-500" : "text-red-400"}`}
              >
                {submitMessage}
              </p>
            )}
          </form>

          <p className="text-earth-400 text-xs text-center mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </>
  );
}
