"use client";

import Image from "next/image";

export default function AboutCollective() {
  const teamMembers = [
    {
      id: 1,
      name: "Team Member 1",
      role: "Role Title",
      image: "/person1.jpg",
      description: "Brief description about this team member."
    },
    {
      id: 2,
      name: "Team Member 2",
      role: "Role Title",
      image: "/person2.jpg",
      description: "Brief description about this team member."
    },
    {
      id: 3,
      name: "Team Member 3",
      role: "Role Title",
      image: "/person3.jpg",
      description: "Brief description about this team member."
    },
    {
      id: 4,
      name: "Team Member 4",
      role: "Role Title",
      image: "/person4.jpg",
      description: "Brief description about this team member."
    }
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 bg-earth-900 border-b border-earth-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="md:w-1/3">
            <h2 className="text-gold-500 text-4xl font-medium font-serif" style={{ fontFamily: 'Outfit, sans-serif' }}>
              The Team
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-earth-100 text-xl md:text-2xl font-light font-body leading-relaxed">
              The individuals who steward this environment and maintain the conditions that allow silence and clarity to emerge.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden aspect-[3/4] bg-earth-950 mb-6 border border-earth-800 group-hover:border-gold-500/30 transition-colors">
                <Image
                  alt={member.name}
                  src={member.image}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 scale-100 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-earth-50 text-lg font-bold mb-1 font-serif group-hover:text-gold-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-earth-400 text-xs font-bold uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <p className="text-earth-300/50 text-sm font-body leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}