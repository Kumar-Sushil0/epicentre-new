export default function PrinciplesAndEnvironment() {
  return (
    <section className="relative py-24 px-6 md:px-12 bg-earth-900 border-b border-earth-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          
          <h2 className="text-gold-500 text-4xl font-medium mb-2" style={{ fontFamily: 'Trirong, serif' }}>Operating Principles</h2>
          <p className="text-earth-50/60 text-lg">These are constraints, not values.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-earth-700 bg-earth-950/50 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-gold-500 font-display text-2xl opacity-50">01</span>
              <div>
                <h4 className="text-earth-50 font-bold text-lg mb-3">Silence Is Designed</h4>
                <p className="text-earth-50/70 text-sm leading-relaxed">Sound, movement, and stimulation are intentionally shaped. Silence is produced through structure, not enforced through rules.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 border border-earth-700 bg-earth-950/50 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-gold-500 font-display text-2xl opacity-50">02</span>
              <div>
                <h4 className="text-earth-50 font-bold text-lg mb-3">Nothing Demands Performance</h4>
                <p className="text-earth-50/70 text-sm leading-relaxed">There is no obligation to speak, share, participate, or explain. Presence is sufficient.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 border border-earth-700 bg-earth-950/50 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-gold-500 font-display text-2xl opacity-50">03</span>
              <div>
                <h4 className="text-earth-50 font-bold text-lg mb-3">Environment Leads, Behavior Follows</h4>
                <p className="text-earth-50/70 text-sm leading-relaxed">Land, architecture, and rhythm set the pace. Human behavior adapts to place.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 border border-earth-700 bg-earth-950/50 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-gold-500 font-display text-2xl opacity-50">04</span>
              <div>
                <h4 className="text-earth-50 font-bold text-lg mb-3">Choice Is Reduced Deliberately</h4>
                <p className="text-earth-50/70 text-sm leading-relaxed">Fewer options create clarity. Anything unnecessary is removed.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 border border-earth-700 bg-earth-950/50 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-gold-500 font-display text-2xl opacity-50">05</span>
              <div>
                <h4 className="text-earth-50 font-bold text-lg mb-3">Use Is Conditional, Not Guaranteed</h4>
                <p className="text-earth-50/70 text-sm leading-relaxed">Access depends on alignment with the nature of the space. Scale, urgency, or money do not override intent.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 border border-earth-700 bg-earth-950/50 rounded-lg">
            <div className="flex items-start gap-4">
              <span className="text-gold-500 font-display text-2xl opacity-50">06</span>
              <div>
                <h4 className="text-earth-50 font-bold text-lg mb-3">Pace Is Protected</h4>
                <p className="text-earth-50/70 text-sm leading-relaxed">Nothing is rushed, compressed, or accelerated. Time is treated as part of the environment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}