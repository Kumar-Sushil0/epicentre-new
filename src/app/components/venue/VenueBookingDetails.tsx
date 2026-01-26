export default function VenueBookingDetails() {
  const halfDayPricing = [
    { range: "Upto 25 guests", price: "25,000/-" },
    { range: "25 to 50 guests", price: "40,000/-" },
    { range: "50 to 100 guests", price: "60,000/-" },
    { range: "100 to 200 guests", price: "85,000/-" },
    { range: "200 to 350 guests", price: "1,20,000/-" },
    { range: "Above 350 guests", price: "1,60,000/-" },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 bg-earth-900">
      <div className="max-w-6xl mx-auto">
        {/* Venue Booking Details */}
        <div className="border border-earth-700 rounded-lg overflow-hidden mb-6">
          {/* Title */}
          <div className="border-b border-earth-700 py-3 px-4">
            <h2 className="text-earth-50 text-xl md:text-2xl font-bold uppercase tracking-wide text-center font-display">
              VENUE BOOKING DETAILS
            </h2>
          </div>

          {/* Half Day Section */}
          <div className="border-b border-earth-700">
            <div className="py-2 px-4 border-b border-earth-700">
              <p className="text-earth-300 text-sm italic text-center font-body">for half a day</p>
            </div>
            <div className="grid grid-cols-6 divide-x divide-earth-700 overflow-x-auto">
              {halfDayPricing.map((item, index) => (
                <div key={index} className="py-3 px-2 text-center min-w-[100px]">
                  <div className="flex flex-col gap-1">
                    <p className="text-earth-200 text-xs font-body leading-tight">{item.range}</p>
                    <p className="text-gold-500 text-sm font-bold font-body">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Entire Day Section */}
          <div>
            <div className="py-2 px-4 border-b border-earth-700">
              <p className="text-earth-300 text-sm italic text-center font-body">for the entire day</p>
            </div>
            <div className="py-3 px-4 text-center">
              <p className="text-gold-500 text-xl font-bold font-body">2,20,000/-</p>
            </div>
          </div>
        </div>

        {/* Things to Remember */}
        <div className="">
          <div className="py-3 px-4">
            <h2 className="text-earth-50 text-xl md:text-2xl font-bold uppercase tracking-wide text-center font-display">
              THINGS TO REMEMBER
            </h2>
            <p className="text-earth-300 text-sm text-center mt-2 italic font-body">
              Security deposit of ₹50,000 will be applicable to all venue rentals.
            </p>
          </div>
          <div className="py-4 px-4 md:px-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-earth-200 font-body text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">•</span>
                <span>18% GST applicable on all payments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">•</span>
                <span>All visits by prior reservation only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">•</span>
                <span>First half 9AM – 2PM and second half 3PM – 8PM</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">•</span>
                <span>Extended to 10PM with prior agreement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">•</span>
                <span className="text-earth-400 italic">Outside catering permitted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">•</span>
                <span className="text-earth-400 italic">Outside decorator permitted</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
