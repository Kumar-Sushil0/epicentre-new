export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-earth-50 py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display text-earth-950 mb-8">Privacy Policy</h1>
        <p className="text-sm text-earth-600 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-earth max-w-none space-y-8 text-earth-800 font-body">
          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">1. Introduction</h2>
            <p>
              Welcome to The Silent Club. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">2. Information We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website and services</li>
              <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">3. How We Use Your Information</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To process and manage your bookings and reservations</li>
              <li>To communicate with you about our services</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those 
              employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">5. Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you 
              with a good experience when you browse our website and also allows us to improve our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-earth-100 rounded">
              <p><strong>Email:</strong> hello@thesilent.club</p>
              <p><strong>Phone:</strong> +91 98903 22494</p>
              <p><strong>Address:</strong> Bird Sanctuary, Kumbhargaon, Bhigwan, Maharashtra</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
