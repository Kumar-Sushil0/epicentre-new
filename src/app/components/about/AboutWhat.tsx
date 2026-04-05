export default function AboutWhat() {
  return (
    <section className="py-16 md:py-20 bg-earth-950 border-b border-earth-800">
      <div className="w-full px-4 md:px-16">
        {/* Title at top */}
        <div className="mb-8 md:mb-10">
          <h2
            className="text-3xl md:text-4xl font-normal mb-3 text-gold-500"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            What is The Silent Club
          </h2>
        </div>

        {/* Combined content */}
        <div className="space-y-4 text-earth-300 font-body text-base md:text-lg leading-relaxed">
          <p>The Silent Club is a private estate designed for people who no longer need more input, but cannot yet sit still without it.</p>
          <p>It removes what most environments add: noise, pace, expectation, performance.</p>
          <p>No programme. No facilitator. No one telling you what to do with your time.<br />Because if you still need that, this is not for you.</p>
          <p>This is for those in-between chapters.<br />You've built something real. It ended, not in failure, but in completion.<br />The calendar is lighter. The pressure is gone. But the mind hasn't caught up.</p>
          <p>Silence here is not an experience. It is a condition.<br />Clarity is not delivered. It emerges, when interference is removed.</p>
          <p className="pt-2 text-earth-100">The Silent Club is not for burnout.<br />It is for what comes after.</p>
        </div>
      </div>
    </section>
  );
}

