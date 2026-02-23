"use client";

import { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [hasShownOnScroll, setHasShownOnScroll] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("hasSeenNewsletterPopup");
    
    if (hasSeenPopup) {
      return;
    }

    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    // Show popup when user scrolls to bottom (only once per page)
    const handleScroll = () => {
      if (hasShownOnScroll) return; // Don't show again if already shown on this page
      
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If user is within 100px of the bottom
      if (documentHeight - scrollPosition < 100) {
        setIsVisible(true);
        setHasShownOnScroll(true); // Mark as shown for this page
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShownOnScroll]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenNewsletterPopup", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Add your newsletter subscription logic here
      // For now, just simulate a submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage("Thank you for subscribing!");
      setEmail("");
      
      // Close popup after 2 seconds
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-earth-800/95 backdrop-blur-sm border border-earth-700/50 rounded-lg p-6 md:p-8 max-w-md w-full shadow-2xl pointer-events-auto transform transition-all duration-300 scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-earth-300 hover:text-gold-500 transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Content */}
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-normal text-gold-500 mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Stay Connected
            </h3>
            <p className="text-earth-300 text-sm md:text-base leading-relaxed">
              Receive updates on cycles, residencies, and occasional reflections on silence and attention.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-earth-900/50 border border-earth-700/50 rounded-lg text-earth-100 placeholder-earth-400 focus:outline-none focus:border-gold-500 transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gold-500 text-earth-950 rounded-lg font-medium hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>

            {submitMessage && (
              <p className={`text-center text-sm ${submitMessage.includes('Thank you') ? 'text-gold-500' : 'text-red-400'}`}>
                {submitMessage}
              </p>
            )}
          </form>

          {/* Footer Note */}
          <p className="text-earth-400 text-xs text-center mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </>
  );
}
