export default function StoriesBookingDetails() {
  const halfDayPricing = [
    { range: "Upto 25 guests", price: "25,000/-" },
    { range: "25 to 50 guests", price: "40,000/-" },
    { range: "50 to 100 guests", price: "60,000/-" },
    { range: "100 to 200 guests", price: "85,000/-" },
    { range: "200 to 350 guests", price: "1,20,000/-" },
    { range: "Above 350 guests", price: "1,60,000/-" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-earth-900">
      <div className="max-w-6xl mx-auto">
        {/* Stories Booking Details */}
        <div className="border border-earth-700 rounded-lg overflow-hidden mb-12">
          {/* Title */}
          <div className="border-b border-earth-700 py-6 px-6">
            <h2 className="text-earth-50 text-2xl md:text-3xl font-bold uppercase tracking-wide text-center font-display">
              STORIES BOOKING DETAILS
            </h2>
          </div>

          {/* Half Day Section */}
          <div className="border-b border-earth-700">
            <div className="py-4 px-6 border-b border-earth-700">
              <p className="text-earth-300 text-lg italic text-center font-body">for half a day</p>
            </div>
            <div className="grid grid-cols-6 divide-x divide-earth-700 overflow-x-auto">
              {halfDayPricing.map((item, index) => (
                <div key={index} className="py-6 px-2 sm:px-3 text-center min-w-[120px]">
                  <div className="flex flex-col gap-2">
                    <p className="text-earth-200 text-xs sm:text-sm font-body leading-tight">{item.range}</p>
                    <p className="text-gold-500 text-sm sm:text-base font-bold font-body">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Entire Day Section */}
          <div>
            <div className="py-4 px-6 border-b border-earth-700">
              <p className="text-earth-300 text-lg italic text-center font-body">for the entire day</p>
            </div>
            <div className="py-6 px-6 text-center">
              <p className="text-gold-500 text-2xl font-bold font-body">2,20,000/-</p>
            </div>
          </div>
        </div>

        {/* Things to Remember */}
        <div className="border border-earth-700 rounded-lg overflow-hidden">
          <div className="border-b border-earth-700 py-6 px-6">
            <h2 className="text-earth-50 text-2xl md:text-3xl font-bold uppercase tracking-wide text-center font-display">
              THINGS TO REMEMBER
            </h2>
          </div>
          <div className="py-6 px-6 md:px-12">
            <ul className="space-y-3 text-earth-200 font-body">
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
                <div className="flex flex-col gap-1">
                  <span>Security deposit of ₹50,000 will be applicable to all venue rentals.</span>
                  <span className="text-earth-400 italic text-sm ml-4">
                    (Extended to 10PM with prior agreement)
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">*</span>
                <span className="text-earth-400 italic">Outside catering permitted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-1">*</span>
                <span className="text-earth-400 italic">Outside decorator permitted</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
