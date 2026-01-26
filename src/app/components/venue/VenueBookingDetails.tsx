export default function VenueBookingDetails() {
  const halfDayPricing = [
    { range: "Up to 25 guests", price: "₹25,000" },
    { range: "25 to 50 guests", price: "₹40,000" },
    { range: "50 to 100 guests", price: "₹60,000" },
    { range: "100 to 200 guests", price: "₹85,000" },
    { range: "200 to 350 guests", price: "₹1,20,000" },
    { range: "Above 350 guests", price: "₹1,60,000" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 bg-earth-900">
      <div className="max-w-6xl mx-auto">
        {/* Venue Booking Details */}
        <div className="border border-earth-700 rounded-lg overflow-hidden mb-8">
          {/* Title */}
          <div className="border-b border-earth-700 py-4 px-6 bg-earth-800">
            <h2 className="text-earth-50 text-xl md:text-2xl font-bold uppercase tracking-wide text-center font-display">
              VENUE BOOKING DETAILS
            </h2>
          </div>

          {/* Half Day Section */}
          <div className="border-b border-earth-700">
            <div className="py-3 px-6 border-b border-earth-700 bg-earth-800">
              <p className="text-gold-500 text-base font-semibold text-center font-display uppercase tracking-wide">Half Day Booking</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-earth-700">
              {halfDayPricing.map((item, index) => (
                <div key={index} className="py-4 px-3 text-center hover:bg-earth-800 transition-colors">
                  <p className="text-earth-200 text-xs font-body leading-tight mb-2">{item.range}</p>
                  <p className="text-gold-500 text-sm font-bold font-body">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Entire Day Section */}
          <div>
            <div className="py-3 px-6 border-b border-earth-700 bg-earth-800">
              <p className="text-gold-500 text-base font-semibold text-center font-display uppercase tracking-wide">Full Day Booking</p>
            </div>
            <div className="py-4 px-6 text-center hover:bg-earth-800 transition-colors">
              <p className="text-gold-500 text-xl font-bold font-body">₹2,20,000</p>
            </div>
          </div>
        </div>

        {/* Things to Remember */}
        <div className="border border-earth-700 rounded-lg overflow-hidden">
          <div className="border-b border-earth-700 py-4 px-6 bg-earth-800">
            <h3 className="text-earth-50 text-xl font-bold uppercase tracking-wide text-center font-display">
              THINGS TO REMEMBER
            </h3>
          </div>
          
          <div className="py-6 px-6">
            {/* Security Deposit */}
            <div className="text-center mb-6 pb-6 border-b border-earth-700">
              <p className="text-earth-300 text-sm font-body">
                Security deposit of <span className="text-gold-500 font-semibold">₹50,000</span> applicable to all venue rentals
              </p>
            </div>

            {/* Rules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-earth-200 font-body text-sm">
              <div className="flex items-start gap-3">
                <span className="text-gold-500 mt-1 text-xs">•</span>
                <span>18% GST applicable on all payments</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold-500 mt-1 text-xs">•</span>
                <span>All visits by prior reservation only</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold-500 mt-1 text-xs">•</span>
                <span>First half: 9AM – 2PM | Second half: 3PM – 8PM</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold-500 mt-1 text-xs">•</span>
                <span>Extended to 10PM with prior agreement</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 text-xs">•</span>
                <span className="text-earth-300">Outside catering permitted</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1 text-xs">•</span>
                <span className="text-earth-300">Outside decorator permitted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
