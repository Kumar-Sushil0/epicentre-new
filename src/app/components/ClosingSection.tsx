import Link from "next/link";
import Image from "next/image";

export default function ClosingSection() {
    return (
        <section className="py-24 bg-earth-950 overflow-hidden relative">
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#C5A065 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            ></div>

            <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto h-[500px] border border-earth-700">
                    <Image
                        alt="Peaceful sanctuary environment"
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        fill
                        className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-950 to-transparent"></div>
                    <div className="absolute bottom-10 left-10">
                        <p className="text-earth-50 font-display italic text-xl">The Silent Club</p>
                    </div>
                </div>
                
                <div>
                    <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-4 block">Experience Clarity</span>
                    <h2 className="text-3xl md:text-5xl font-display text-earth-100 mb-6 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Silence acts as a mirror.
                    </h2>
                    <p className="text-earth-300 leading-relaxed mb-8 font-body text-lg">
                        We invite you to experience the clarity that comes when the noise stops. Come see what it reflects.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-4 text-earth-100">
                            <span className="material-symbols-outlined text-gold-500">done_all</span>
                            <span className="font-body">Tech-free environment for deep focus</span>
                        </div>
                        <div className="flex items-center gap-4 text-earth-100">
                            <span className="material-symbols-outlined text-gold-500">done_all</span>
                            <span className="font-body">Guided practices for inner stillness</span>
                        </div>
                        <div className="flex items-center gap-4 text-earth-100">
                            <span className="material-symbols-outlined text-gold-500">done_all</span>
                            <span className="font-body">Peaceful sanctuary away from noise</span>
                        </div>
                    </div>
                    
                    <Link
                        href="/bookings"
                        className="group relative inline-flex items-center gap-4 bg-transparent border border-gold-500 text-gold-500 px-12 py-5 rounded-[10px] text-sm font-bold uppercase tracking-[0.2em] transition-all hover:bg-gold-500 hover:text-earth-950 hover:px-14"
                    >
                        Book Now
                        <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}