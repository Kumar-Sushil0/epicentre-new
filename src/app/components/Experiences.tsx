import Image from "next/image";

export default function Experiences() {
  return (
    <section className="py-24 bg-earth-800 border-t border-earth-700" id="experiences">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-2 block">Activities</span>
          <h2 className="text-3xl font-bold text-earth-50">Curated Experiences</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-4 aspect-[4/3] border border-earth-700">
              <Image
                alt="Pottery wheel hands"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiNXwR-f71rjheOZ5xX_x1JVhb4TkjVszbj6oLm9bghjt6Iggj4h4wMDIuuLKs9vHYz36yPflSYLX6pospR-PsI5qgC7JN8JdbNiQmk3RpwaxqayFzgobu5cjdUT5Q9l_xR55dWeLw224PFLkhmygupfXClt25LulZRM91JsWpfolCkKy1_ZgEoncPEgBUImHEDs3EK4v03sdCiGj89J644UBc_Uf6_xjyElyU4z4YEEm5SyuhUQlQCDVvxPRbPzz89xDc0DyKYah8"
                width={400}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-earth-100 group-hover:text-gold-500 transition-colors">Material Play</h3>
            <p className="text-sm text-earth-300 font-body">Connect with the earth literally through pottery and clay modeling sessions.</p>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-4 aspect-[4/3] border border-earth-700">
              <Image
                alt="Meditation cushion"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnwCob9OLts6qzhSrAp3eGecAESNXcyBepcvKiD43IYeSQeZnKWVuCMxf2Em1PtMNEYmxk31bHbccgtnM7PlImtP3GGqHD8EkAwnRQ-0xJaDkpbAZlq87zjDkcVEyia-I8Qof9KGapcrL8UBqCCp5MUlsZ_xwtnbC3yH02WXO6nOH4VaPmqgUhGy5ji8U2Kd_cROe0lJLPalg7mRvnccU_ZlrTAQuU9IuFXmr4DuqqLNotB-Ey-0kbqiReB8HUzw2-yYrArpRYEVc-"
                width={400}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-earth-100 group-hover:text-gold-500 transition-colors">Guided Solitude</h3>
            <p className="text-sm text-earth-300 font-body">Structured silent hours and guided meditation to help declutter the mind.</p>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-4 aspect-[4/3] border border-earth-700">
              <Image
                alt="Organic farming"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAcpQ1g0Y5_gIEmmc6JfeAIJDG39cPupOcBagzPdTVua8C2qlIGHkELQ-uC0JJDaAgRYMVI7A-yPVCHtD47-_ZukihQDYtC5AabJoFXR2AkQiPPFJ3u-tWjqrN0FK4aZZmENbVrA5hSt9kPO3HFb9VqfQovnBsTJ7g6ENgf9oroEyF0dCbw6nvZBC3FtadGZ9nh_dltLL97Q2MeJkr6kTI02nptU2fGpK7NU6CCLLl1r1yeGVt_JPiX0iweBGJcPIlGsSDPuUKqwxZ"
                width={400}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-earth-100 group-hover:text-gold-500 transition-colors">Seasonal Living</h3>
            <p className="text-sm text-earth-300 font-body">Participate in our organic garden, harvesting the food you will eat later.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
