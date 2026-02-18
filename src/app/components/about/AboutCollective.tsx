'use client';

import CarouselCard from '../CarouselCard';

interface CollectiveMember {
  id: number;
  quarter: string;
  name: string;
  image: string;
  focus: string;
  approach: string;
}

function MemberCard({ member }: { member: CollectiveMember }) {
  const formattedDescription = `${member.focus}\n${member.approach}`;
  const titleWithQuarter = `${member.name} ${member.quarter}`;

  const socialIcons = [
    {
      href: "#",
      icon: 'linkedin' as const,
      label: "LinkedIn Profile"
    },
    {
      href: "#",
      icon: 'website' as const,
      label: "Personal Website"
    }
  ];

  return (
    <div className="block">
      <CarouselCard
        title={member.name}
        hoverTitle={titleWithQuarter}
        description={formattedDescription}
        images={[member.image]}
        className="rounded-lg"
        overlayColor="gold-solid"
        overlayHeight={50}
        showBorderLine={false}
        titleSize="24px"
        socialIcons={socialIcons}
      />
    </div>
  );
}

export default function AboutCollective() {
  const collectiveMembers: CollectiveMember[] = [
    {
      id: 1,
      quarter: "",
      name: "Sushil Kumar",
      image: "/person1.jpg",
      focus: "Systems Development",
      approach: ""
    },
    {
      id: 2,
      quarter: "",
      name: "Manisha Lamba",
      image: "/person2.jpg",
      focus: "Brand Design",
      approach: ""
    },
    {
      id: 3,
      quarter: "",
      name: "Johith Gigu K",
      image: "/person3.jpg",
      focus: "Experience Design",
      approach: ""
    }
  ];

  return (
    <section className="py-16 bg-earth-900 border-b border-earth-800" id="collective">
      <div className="w-full px-16">
        <div className="mb-8">
          <h3 className="text-3xl font-normal mb-3 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Team</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectiveMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}