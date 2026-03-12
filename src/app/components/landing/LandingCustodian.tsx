export default function LandingCustodian() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-16 bg-earth-900">
      <div className="w-full max-w-3xl mx-auto text-center space-y-6">
        <h2
          className="text-2xl md:text-3xl font-normal text-gold-500 mb-6"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          CUSTODIAN OF THE ENVIRONMENT
        </h2>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <p
              className="text-xl md:text-2xl text-gold-500 font-normal"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              D.D.
            </p>
            <p className="text-earth-300 text-sm md:text-base font-body">
              Liberation Designer
            </p>
          </div>
          
          <p className="text-earth-100 text-base md:text-lg font-body leading-relaxed">
            The role is not to guide members.
          </p>
          
          <p className="text-earth-100 text-base md:text-lg font-body leading-relaxed">
            The role is to protect the conditions where individuals can think without interference.
          </p>
        </div>
      </div>
    </section>
  );
}
