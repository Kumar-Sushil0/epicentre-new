import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | The Silent Club",
  description: "Read The Silent Club's terms of service to understand the rules, guidelines, and legal agreements for using our services, booking stays, and participating in programs at our estate.",
  keywords: ["terms of service", "terms and conditions", "user agreement", "booking terms", "service guidelines"],
  alternates: {
    canonical: "https://thesilent.club/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | The Silent Club",
    description: "Read our terms of service and user agreements.",
    url: "https://thesilent.club/terms-of-service",
    siteName: "The Silent Club",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-earth-50 py-16 px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display text-earth-950 mb-8">Terms of Service</h1>
        <p className="text-sm text-earth-600 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-earth max-w-none space-y-8 text-earth-800 font-body">
          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using The Silent Club website and services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials (information or software) on The Silent Club's 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer 
              of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on The Silent Club's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">3. Booking and Reservations</h2>
            <p>
              All bookings are subject to availability and confirmation. We reserve the right to refuse service to anyone 
              for any reason at any time. Prices are subject to change without notice.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Full payment is required at the time of booking unless otherwise specified</li>
              <li>Cancellation policies vary by service type and will be communicated at the time of booking</li>
              <li>Guests are responsible for any damages to property during their stay</li>
              <li>Check-in and check-out times must be adhered to as specified</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">4. Guest Conduct</h2>
            <p>Guests are expected to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Respect the silence and tranquility of the space</li>
              <li>Follow all house rules and guidelines provided</li>
              <li>Respect other guests and staff members</li>
              <li>Not engage in any illegal activities on the premises</li>
              <li>Take responsibility for their personal belongings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">5. Liability</h2>
            <p>
              The Silent Club and its operators shall not be liable for any injury, loss, claim, damage, or any special, 
              exemplary, punitive, indirect, incidental or consequential damages of any kind, whether based in contract, 
              tort, strict liability or otherwise, which arises out of or is in any way connected with your use of our 
              services or facilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">6. Intellectual Property</h2>
            <p>
              All content included on this site, such as text, graphics, logos, images, audio clips, video, data, music, 
              software, and other material (collectively "Content") is the property of The Silent Club or its content 
              suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">7. Modifications to Service</h2>
            <p>
              We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) 
              with or without notice at any time. We shall not be liable to you or to any third party for any modification, 
              suspension or discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India and you 
              irrevocably submit to the exclusive jurisdiction of the courts in Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-earth-950 mb-4">9. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at:
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
