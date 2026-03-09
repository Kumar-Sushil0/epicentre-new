"use client";

import type { ApplicationReceivedProps } from "./ApplicationReceived.types";

const ApplicationReceived = ({
  applicantEmail,
  subject,
  from,
  body,
  onSeeReviewDemo,
}: ApplicationReceivedProps) => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 md:px-10 pb-16 text-earth-100">
      <div className="max-w-2xl w-full text-center">
        {/* Top rule */}
        <div className="w-12 h-px bg-gold-500 mx-auto mb-6" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-gold-500/50 bg-gold-500/5 px-3 py-1 rounded-full mb-6">
          <span className="text-[0.7rem] tracking-[0.18em] uppercase text-gold-200">
            Application Received
          </span>
        </div>

        {/* Heading & copy */}
        <h2
          className="text-2xl md:text-3xl font-normal text-earth-50 mb-3"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Your application is with D.D.
        </h2>

        <p className="text-[0.9rem] text-earth-200 mb-2">
          Responses are reviewed personally. You will hear back within 7 days.
        </p>
        <p className="text-[0.8rem] text-earth-500 mb-1">
          There is nothing to do now.
        </p>
        <p className="text-[0.8rem] text-earth-500 mb-8">
          No follow-up is required or expected.
        </p>

        {/* Email summary card */}
        <div className="mt-4 rounded-2xl border border-gold-500/25 bg-earth-900/80 text-left p-5 md:p-6">
          <div className="mb-3">
            <span className="block text-[0.75rem] tracking-[0.18em] uppercase text-earth-500 mb-2">
              Email confirmation sent to
            </span>
            <p className="text-[0.9rem] text-earth-100">{applicantEmail}</p>
          </div>

          <hr className="my-4 border-t border-white/10" />

          <div className="space-y-3 text-[0.8rem] leading-relaxed text-earth-300">
            <p>
              <span className="text-earth-200 font-medium">Subject:</span>{" "}
              {subject}
            </p>
            <p>
              <span className="text-earth-200 font-medium">From:</span> {from}
            </p>
            <p className="mt-2 text-earth-300 whitespace-pre-line">{body}</p>
          </div>
        </div>

        {/* Demo link */}
        <button
          type="button"
          onClick={onSeeReviewDemo}
          className="mt-6 text-[0.8rem] tracking-[0.12em] uppercase text-earth-500 hover:text-earth-100"
        >
          → See D.D.'s review (demo)
        </button>
      </div>
    </section>
  );
};

export default ApplicationReceived;

