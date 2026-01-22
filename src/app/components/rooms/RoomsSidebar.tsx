"use client";

export default function RoomsSidebar() {
  return (
    <aside className="hidden lg:block lg:col-span-3 relative">
      <div className="sticky top-32 flex flex-col gap-8 pr-8 border-r border-earth-700/30 min-h-[50vh]">
        <div className="flex flex-col gap-2">
          <h1 className="text-earth-50 text-2xl font-medium leading-tight mb-2">Accommodations</h1>
          <p className="text-earth-300 text-sm font-normal italic opacity-80 font-body">Select a room type to view details.</p>
        </div>
        <nav className="flex flex-col gap-1">
          <a
            className="group flex items-center justify-between p-3 rounded-lg hover:bg-earth-700/20 transition-all border-l-2 border-gold-500 bg-earth-700/10"
            href="#private-rooms"
          >
            <span className="text-earth-50 text-base font-medium">Private Rooms</span>
            <span className="material-symbols-outlined text-gold-500 text-sm opacity-100 transition-opacity">arrow_forward</span>
          </a>
          <a
            className="group flex items-center justify-between p-3 rounded-lg hover:bg-earth-700/20 transition-all border-l-2 border-transparent hover:border-gold-500/50 text-earth-300 hover:text-earth-50"
            href="#shared-dorms"
          >
            <span className="text-base font-medium">Shared Dorms</span>
            <span className="material-symbols-outlined text-gold-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </a>
          <a
            className="group flex items-center justify-between p-3 rounded-lg hover:bg-earth-700/20 transition-all border-l-2 border-transparent hover:border-gold-500/50 text-earth-300 hover:text-earth-50"
            href="#minimalist-tents"
          >
            <span className="text-base font-medium">Minimalist Tents</span>
            <span className="material-symbols-outlined text-gold-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </a>
          <a
            className="group flex items-center justify-between p-3 rounded-lg hover:bg-earth-700/20 transition-all border-l-2 border-transparent hover:border-gold-500/50 text-earth-300 hover:text-earth-50"
            href="#community-hall"
          >
            <span className="text-base font-medium">Community Hall</span>
            <span className="material-symbols-outlined text-gold-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </a>
        </nav>
        <div className="mt-8 p-6 bg-earth-700/10 rounded-xl border border-earth-700/30">
          <span className="material-symbols-outlined text-gold-500 mb-3 text-3xl">self_improvement</span>
          <p className="text-sm text-earth-300 italic leading-relaxed font-body">
            "Silence is not the absence of noise, but the beginning of listening."
          </p>
        </div>
      </div>
    </aside>
  );
}
