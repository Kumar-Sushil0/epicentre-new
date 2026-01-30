"use client";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 18, 11, 0.6), rgba(26, 18, 11, 0.7)), url("/banner.jpg")`,
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      </div>
    </section>
  );
}
