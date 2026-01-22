export default function ResidencyMobileBooking() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-earth-900 border-t border-earth-700 lg:hidden z-40 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div>
        <p className="text-xs text-earth-300 uppercase tracking-wider font-body">Total</p>
        <p className="text-lg font-bold text-gold-500">₹70,800</p>
      </div>
      <button className="bg-gold-500 text-earth-950 font-bold py-2.5 px-6 rounded-lg shadow-sm">Book Now</button>
    </div>
  );
}
