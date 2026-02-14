import AsSeenOn from './AsSeenOn';

export default function Philosophy() {
  return (
    <>
      {/* Philosophy Quote Section */}
      <section className="py-16 bg-gold-500 flex items-center" id="philosophy">
        <div className="max-w-5xl mx-auto px-4 md:px-16 text-center">
          <div className="relative py-8">
            <p className="text-[15px] leading-loose text-[#261B14] relative z-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
              "This is not a place for change.
              It is a place for clarity.<br />
              Nothing here tries to improve you.
              Nothing asks you to perform.<br />
              Designed to reduce interference.
              So attention can settle naturally."
            </p>
          </div>
        </div>
      </section>

      {/* As Seen On Section */}
      <section className="py-12 bg-earth-700 flex items-center">
        <div className="max-w-5xl mx-auto px-4 md:px-16 w-full">
          <AsSeenOn />
        </div>
      </section>
    </>
  );
}
