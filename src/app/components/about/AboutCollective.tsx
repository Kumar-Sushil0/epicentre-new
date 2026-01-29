"use client";

import Image from "next/image";

export default function AboutCollective() {
  const teamMembers = [
    {
      id: 1,
      name: "Team Member 1",
      role: "Role Title",
      image: "/person1.jpg",
      description: "Brief description about this team member and their contribution to The Silent Club."
    },
    {
      id: 2,
      name: "Team Member 2",
      role: "Role Title",
      image: "/person2.jpg",
      description: "Brief description about this team member and their contribution to The Silent Club."
    },
    {
      id: 3,
      name: "Team Member 3",
      role: "Role Title",
      image: "/person3.jpg",
      description: "Brief description about this team member and their contribution to The Silent Club."
    },
    {
      id: 4,
      name: "Team Member 4",
      role: "Role Title",
      image: "/person4.jpg",
      description: "Brief description about this team member and their contribution to The Silent Club."
    }
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 bg-earth-800 border-b border-earth-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 text-4xl font-medium mb-2" style={{ fontFamily: 'Trirong, serif' }}>
            Collective 001
          </h2>
          <p className="text-earth-50/60 text-lg font-body leading-relaxed max-w-3xl mx-auto">
            The individuals who steward this environment and maintain<br />the conditions that allow silence and clarity to emerge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] border border-earth-700">
                <Image
                  alt={member.name}
                  src={member.image}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950/90 via-earth-950/50 to-transparent group-hover:from-earth-950/80 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="text-center">
                    <h3 className="text-gold-500 text-xl font-medium mb-1" style={{ fontFamily: 'Trirong, serif' }}>
                      {member.name}
                    </h3>
                    <p className="text-earth-200 text-sm font-body mb-2">
                      {member.role}
                    </p>
                    <p className="text-earth-300 text-xs font-body leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}