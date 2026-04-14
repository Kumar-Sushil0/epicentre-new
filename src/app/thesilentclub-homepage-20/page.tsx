"use client";

import { useEffect, useMemo, useState } from "react";

type DepthId = "silence" | "residency" | "solitude" | "creation";

const navLinks = ["Home", "About", "The Estate", "Journal"];

const whoMembers = [
  {
    type: "Writers & Thinkers",
    desc: "Those who need hours of unbroken time to hear themselves think — and finally put it into words.",
    reviews: [
      {
        quote:
          '"I wrote 40 pages here in three days. The only place I\'ve been able to disappear completely."',
        name: "Aarav M.",
      },
      {
        quote:
          '"I come when a decision is too important for the noise of the office. I\'ve never left without clarity."',
        name: "Rhea S.",
      },
      {
        quote:
          '"Four months as a member. More original work than in the previous two years combined."',
        name: "Kabir T.",
      },
    ],
  },
  {
    type: "Founders & Strategists",
    desc: "Those whose most consequential decisions deserve more than a 45-minute calendar slot.",
    reviews: [
      {
        quote:
          '"I come when a decision is too important for the noise of the office. I\'ve never left without clarity."',
        name: "Nikhil P.",
      },
      {
        quote:
          '"I wrote 40 pages here in three days. The only place I\'ve been able to disappear completely."',
        name: "Maya R.",
      },
      {
        quote:
          '"Four months as a member. More original work than in the previous two years combined."',
        name: "Dev K.",
      },
    ],
  },
  {
    type: "Artists & Designers",
    desc: "Those whose creative work requires a quality of attention that the world rarely permits.",
    reviews: [
      {
        quote:
          '"Four months as a member. More original work than in the previous two years combined."',
        name: "Ishita V.",
      },
      {
        quote:
          '"I come when a decision is too important for the noise of the office. I\'ve never left without clarity."',
        name: "Arjun L.",
      },
      {
        quote:
          '"I wrote 40 pages here in three days. The only place I\'ve been able to disappear completely."',
        name: "Tara N.",
      },
    ],
  },
];

const designedCards = [
  {
    title: "Designed Silence",
    desc: `Every space asks nothing of your senses.
Dedicated zones calibrated for different qualities of thought.
Silence here is structural - not a rule you have to remember to follow.`,
    icon: "M3 3l18 18M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8",
  },
  {
    title: "Designed Anonymity",
    desc: `No roles. No titles.
No one who knows what you do or what you've built.
You arrive as a person, not a position.
Nobody here wants anything from you.`,
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M17 11h6",
  },
  {
    title: "Designed Withdrawal",
    desc: `Far enough to interrupt the pattern.
Close enough to not feel like escape.
You step away long enough to finally see what you've been too close to notice.`,
    icon: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9",
  },
];

const depthCards = [
  {
    id: "silence" as const,
    num: "01",
    name: "Silence",
    cycle: "Day Cycle · Any 4 Hours",
    forText: "For your first visit, or your next reset.",
    features: [
      "Any 4 continuous hours of your choosing",
      "Full estate access",
      "One meal included",
      "No schedule. Move at your own pace",
    ],
    basePrice: "₹1,000",
    note: "Per person · 1 meal · Taxes applicable",
  },
  {
    id: "residency" as const,
    num: "02",
    name: "Residency",
    cycle: "Weekend Cycle · 2N / 3D",
    forText: "For those who want structure and company around silence.",
    features: [
      "Structured or themed weekend experience",
      "Shared non-performative environment",
      "Full estate access + all meals",
      "Friday conversation circle included",
    ],
    toggles: {
      dorm: { label: "Dorm", price: "₹10,000" },
      room: { label: "Private Room", price: "₹15,000" },
    },
    note: "Per person · All meals · Taxes applicable",
  },
  {
    id: "solitude" as const,
    num: "03",
    name: "Solitude",
    cycle: "Weekday Cycle · 4N / 5D",
    forText: "For those between chapters who need to go deep.",
    features: [
      "Minimal communication — 30 min/day",
      "Self-guided activities + gear provided",
      "Curated resource library access",
      "Full estate access + all meals",
    ],
    toggles: {
      dorm: { label: "Dorm", price: "₹20,000" },
      room: { label: "Private Room", price: "₹30,000" },
    },
    note: "Per person · All meals · Taxes applicable",
  },
  {
    id: "creation" as const,
    num: "04",
    name: "Creation",
    cycle: "Noon to Noon Cycle · 24 Hours",
    forText: "For groups who want the whole place to themselves.",
    features: [
      "Full estate — noon to noon",
      "All rooms, dorms, decks + shared spaces",
      "Accommodation up to 20 people max",
      "Full access + all meals included",
    ],
    toggles: {
      weekday: {
        label: "Weekday",
        price: "₹1,00,000",
        note: "Per night · Full estate · Mon–Thu · Taxes applicable",
      },
      weekend: {
        label: "Weekend",
        price: "₹1,20,000",
        note: "Per night · Full estate · Fri–Sun · Taxes applicable",
      },
    },
    note: "Per night · Full estate · Mon–Thu · Taxes applicable",
  },
];

const howRules = [
  "Calls and video meetings in designated zones only. Not in shared spaces. Not in rooms others can hear.",
  "No unsolicited conversation with other members. A nod is enough. There is a 30-minute community window each evening if you want more.",
  "Devices in your room or personal desk only. Earphones are fine. No speakers, anywhere on the estate.",
  "No performance of working. Staring at the ceiling counts. You are here for yourself, not an audience.",
  "What you create here is entirely yours. We have no interest in your work, your process, or your results.",
  "What you witness here stays here. Don't seek out other members outside. Anonymity is something we protect together.",
];

const providesSlides = {
  spaces: [
    {
      name: "Private Room",
      desc: "Your own space. Bed, desk, attached bath. Designed for rest, not distraction.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/room3.png",
    },
    {
      name: "Shared Dorm",
      desc: "Communal sleeping. Personal locker. Shared in silence.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/dorm1.png",
    },
    {
      name: "Deep Work Library",
      desc: "The only space where laptops are permitted.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/hall.png",
    },
    {
      name: "Contemplation Garden",
      desc: "Open-air. Nothing to do. Nowhere to be.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/yogaloft.png",
    },
    {
      name: "Reading Parlour",
      desc: "Books, light, and the particular silence of an afternoon.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym3.png",
    },
  ],
  food: [
    {
      name: "Satvik Home Food",
      desc: "Seasonal, local. Prepared fresh each morning. No menu, no ordering.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/homefood1.png",
    },
    {
      name: "Salads, Smoothies & Sandwiches",
      desc: "Light meals that sustain focus without heaviness.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/sss1.png",
    },
    {
      name: "Barbecue & Pizza",
      desc: "Outdoor evenings. Shared in silence, or near it.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/pbs1.png",
    },
    {
      name: "Sushi & Light Bites",
      desc: "For evenings that ask for something quieter on the palate.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/pbs1.png",
    },
    {
      name: "High Tea",
      desc: "Set out at 4pm. No announcement made.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/homefood1.png",
    },
  ],
  activities: [
    {
      name: "Bird Watching",
      desc: "Ujni Lake at dawn. Flamingos, painted storks. Binoculars provided.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/yogaloft.png",
    },
    {
      name: "Gym & Sauna",
      desc: "Physical recovery. Open all day. No classes, no instructors.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym1.png",
    },
    {
      name: "Swimming Pool",
      desc: "Quiet laps. No lane rage.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym3.png",
    },
    {
      name: "Forest Trails",
      desc: "Self-guided. Trail maps provided. Walk alone.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/yogaloft.png",
    },
    {
      name: "Kayaking & Boat Rides",
      desc: "On Ujni Lake. Gear provided. No guide needed.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/hall.png",
    },
    {
      name: "Star Gazing",
      desc: "Telescope on the deck. No light pollution. No commentary.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/room3.png",
    },
  ],
};

const stripItems = [
  { name: "Accommodation", desc: "Private rooms & shared dorms. Your choice at booking." },
  { name: "All Meals", desc: "Breakfast, lunch, high tea, dinner. Always included." },
  { name: "All Activities", desc: "Every activity and all gear. Nothing extra to pay." },
  { name: "Full Estate Access", desc: "Every space, every hour. No restrictions, no upgrades." },
];

const faqItems = [
  {
    q: "Is this a meditation retreat?",
    a: "No. There is no programme, no facilitator, no spiritual framing of any kind. The Silent Club is a private estate that removes interference — noise, pace, expectation, performance. What you do with the silence that remains is entirely yours.",
  },
  {
    q: "What actually happens when I arrive?",
    a: "Nothing is waiting for you. You check in, put your phone in a drawer, and the day is yours. Meals are prepared and set out. Spaces are open. There is no orientation, no schedule, no one to report to.",
  },
  {
    q: "Can I work while I'm here?",
    a: "Yes. The deep work library is designed for exactly this. What changes is not whether you can work — it is why you work. The estate removes the ambient conditions that make work compulsive rather than chosen.",
  },
  {
    q: "How does the invite process work?",
    a: "Two questions. No CV, no credentials, no pitch. A short conversation with the founder — 15 minutes. If it feels right on both sides, you receive your first invite.",
  },
  {
    q: "Is everything really included?",
    a: "Yes. Accommodation, all meals, full estate access, all activities, all gear. There is nothing to add, nothing to upgrade, and nothing to decide once you arrive.",
  },
];

export default function TheSilentClubHomepage20Page() {
  const [selectedDepth, setSelectedDepth] = useState<DepthId | null>(null);
  const [depthVariant, setDepthVariant] = useState({
    residency: "dorm",
    solitude: "dorm",
    creation: "weekday",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [provideSlideIndex, setProvideSlideIndex] = useState({
    spaces: 0,
    food: 0,
    activities: 0,
  });
  const [whoReviewIndex, setWhoReviewIndex] = useState([0, 0, 0]);

  const depthLabel = useMemo(() => {
    if (!selectedDepth) return "Select a depth above to continue.";
    const map: Record<DepthId, string> = {
      silence: "Silence — Day Cycle",
      residency: "Residency — Weekend",
      solitude: "Solitude — Weekday",
      creation: "Creation — Full Estate",
    };
    return `You've selected ${map[selectedDepth]}`;
  }, [selectedDepth]);

  useEffect(() => {
    const timers = [
      setInterval(() => {
        setProvideSlideIndex((prev) => ({
          ...prev,
          spaces: (prev.spaces + 1) % providesSlides.spaces.length,
        }));
      }, 4200),
      setInterval(() => {
        setProvideSlideIndex((prev) => ({
          ...prev,
          food: (prev.food + 1) % providesSlides.food.length,
        }));
      }, 4600),
      setInterval(() => {
        setProvideSlideIndex((prev) => ({
          ...prev,
          activities: (prev.activities + 1) % providesSlides.activities.length,
        }));
      }, 5000),
    ];

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setWhoReviewIndex((prev) =>
        prev.map((value, idx) => (value + 1) % whoMembers[idx].reviews.length),
      );
    }, 4800);
    return () => clearInterval(timer);
  }, []);

  const getDepthPrice = (id: DepthId) => {
    const depth = depthCards.find((card) => card.id === id);
    if (!depth) return { price: "", note: "" };
    if ("basePrice" in depth) return { price: depth.basePrice, note: depth.note };
    if (id === "residency" || id === "solitude") {
      const selected =
        depth.toggles[depthVariant[id] as "dorm" | "room"] ?? depth.toggles.dorm;
      if (!selected) return { price: "", note: depth.note };
      return { price: selected.price, note: depth.note };
    }
    const selected =
      depth.toggles[depthVariant.creation as "weekday" | "weekend"] ?? depth.toggles.weekday;
    if (!selected) return { price: "", note: depth.note };
    return { price: selected.price, note: selected.note ?? depth.note };
  };

  return (
    <main className="min-h-screen bg-[#0f0b08] text-[#e8d5b0]">
      <nav className="sticky top-0 z-50 border-b border-[#2a1f17] bg-[#0f0b08]/95 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between px-6">
          <div className="font-serif text-lg">The Silent Club</div>
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link} className="text-xs uppercase tracking-[0.16em] text-[#7a6048]">
                {link}
              </li>
            ))}
          </ul>
          <button className="bg-[#c5a065] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[#0f0b08]">
            Request Invite →
          </button>
        </div>
      </nav>

      <section className="relative grid overflow-hidden border-b border-[#2a1f17] md:min-h-[calc(100vh-56px)] md:grid-cols-2">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/hero.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0b08]/90 via-[#0f0b08]/45 to-[#0f0b08]/70" />
        <div className="relative z-10 flex flex-col justify-end gap-6 border-b border-[#2a1f17]/50 px-6 py-12 md:border-b-0 md:px-10">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#7a6048]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c5a065]" />
            <span>Private Estate · Bhigwan, Pune · Invite Only</span>
          </div>
          <h1 className="font-serif text-6xl leading-[0.92] md:text-8xl">
            <span className="block">A place</span>
            <span className="block">to think</span>
            <span className="block italic text-[#c5a065]">without</span>
            <span className="block">interruption.</span>
          </h1>
          <p className="max-w-xl text-sm leading-8 text-[#b09070]">
            The Silent Club is an invite-only estate for thinkers, artists, and entrepreneurs who
            do their best work in quiet. No meetings. No notifications. No noise. Just the rarest
            luxury in modern life — uninterrupted time with your own mind.
          </p>
          <div className="flex max-w-xs flex-col gap-2">
            <button className="bg-[#c5a065] px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-[#0f0b08]">
              Request Invite →
            </button>
            <button className="border border-[#3a2a1f] bg-[#0f0b08] px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-[#b09070]">
              See what a day looks like
            </button>
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-end px-6 py-12 md:px-10" />
      </section>

      <section className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2a1f17] bg-[#160f0a] px-6 py-4">
        <p className="text-xs uppercase tracking-[0.14em] text-[#7a6048]">
          Founding memberships open — not ready yet? Stay close.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-56 border border-r-0 border-[#3a2a1f] bg-[#1c1410] px-3 py-2 text-sm text-[#e8d5b0] outline-none"
          />
          <button className="bg-[#8a6e42] px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-[#0f0b08]">
            Notify me
          </button>
        </div>
      </section>

      <section className="grid gap-10 border-b border-[#2a1f17] px-6 py-20 md:grid-cols-[200px,1fr] md:px-10">
        <div>
          <div className="mb-4 h-px w-10 bg-[#8a6e42]" />
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#7a6048]">The case for quiet</p>
        </div>
        <p className="max-w-4xl font-serif text-3xl leading-[1.45] md:text-5xl">
          Your best thinking doesn't happen in meetings. It happens in the quiet moments{" "}
          <em className="text-[#c5a065]">you can never quite find</em><br/> — until now.
        </p>
      </section>

      <section className="grid gap-12 border-b border-[#2a1f17] bg-[#160f0a] px-6 py-20 md:grid-cols-[1fr,1.4fr] md:px-10">
        <div>
          <h2 className="mb-2 font-serif text-4xl italic">Silence reveals direction.</h2>
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#7a6048]">The rest is up to you.</p>
        </div>
        <div className="space-y-4 text-[15px] leading-8 text-[#b09070]">
          <p>
            The Silent Club is a private estate designed for people who no longer need more input,
            but cannot yet sit still without it.
          </p>
          <p>
            No programme. No facilitator. No one telling you what to do with your time. Because if
            you still need that, this is not for you.
          </p>
          <p className="border-t border-[#2a1f17] pt-5 font-serif text-xl italic text-[#e8d5b0]">
            The Silent Club is not for burnout. It is for what comes after.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 text-center md:px-10">
        <h2 className="font-serif text-5xl leading-none md:text-7xl">
          Silence <span className="text-base italic text-[#7a6048]">as a</span>{" "}
          <em className="italic text-[#c5a065]">Service.</em>
        </h2>
      </section>

      <section className="border-b border-[#2a1f17]">
        <div className="grid gap-8 px-6 py-16 md:grid-cols-2 md:px-10">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#7a6048]">
              Who belongs here
            </p>
            <h2 className="font-serif text-4xl">Built for people whose<br/> best work requires solitude</h2>
          </div>
          <p className="text-sm leading-8 text-[#b09070]">
            We are not a co-working space.<br/> We are not a wellness retreat.<br/> We are the place that
            serious people have always needed<br/>  A private estate calibrated to produce conditions
            for deep, original thought.
          </p>
        </div>
        <div className="grid gap-px bg-[#2a1f17] md:grid-cols-3">
          {whoMembers.map((member, memberIndex) => (
            <article key={member.type} className="flex flex-col bg-[#0f0b08] p-8">
              <h3 className="mb-3 font-serif text-3xl">{member.type}</h3>
              <p className="mb-7 flex-1 text-sm leading-7 text-[#b09070]">{member.desc}</p>
              <div className="rounded-sm border border-[#2a1f17] bg-[#160f0a] p-4">
                <p className="min-h-[88px] font-serif text-sm italic leading-7 text-[#e8d5b0]">
                  {member.reviews[whoReviewIndex[memberIndex]].quote}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[#8a6e42]">
                  {member.reviews[whoReviewIndex[memberIndex]].name}
                </p>
                <div className="mt-4 flex gap-2">
                  {member.reviews.map((review, reviewIndex) => (
                    <button
                      key={review.quote}
                      onClick={() =>
                        setWhoReviewIndex((prev) =>
                          prev.map((value, idx) =>
                            idx === memberIndex ? reviewIndex : value,
                          ),
                        )
                      }
                      className={`h-2 w-2 rounded-full transition-all ${
                        whoReviewIndex[memberIndex] === reviewIndex
                          ? "scale-125 bg-[#8a6e42]"
                          : "bg-[#3a2a1f] hover:bg-[#7a6048]"
                      }`}
                      aria-label={`Show review ${reviewIndex + 1} for ${member.type}`}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-[#2a1f17] bg-[#160f0a] px-6 py-20 md:px-10">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-5xl">Designed Deliberately</h2>
          <p className="mt-2 font-serif italic text-[#7a6048]">
            Three conditions. Removed by design, not willpower.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {designedCards.map((card) => (
            <article key={card.title} className="border-t border-[#3a2a1f] pt-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#3a2a1f]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="#8a6e42"
                  strokeWidth={1.5}
                >
                  <path d={card.icon} />
                </svg>
              </div>
              <h3 className="mb-2 font-serif text-3xl">{card.title}</h3>
              <p className="whitespace-pre-line text-sm leading-8 text-[#7a6048]">{card.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#2a1f17]">
        <div className="border-b border-[#2a1f17] px-6 py-16 text-center md:px-10">
          <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#7a6048]">
            Choose your depth
          </p>
          <h2 className="font-serif text-4xl">The environment stays the same. The depth changes.</h2>
        </div>
        <div className="grid gap-px bg-[#2a1f17] lg:grid-cols-4">
          {depthCards.map((card) => {
            const selected = selectedDepth === card.id;
            const pricing = getDepthPrice(card.id);
            return (
              <article
                key={card.id}
                onClick={() => setSelectedDepth(card.id)}
                className={`cursor-pointer border-b-2 p-7 transition ${
                  selected ? "border-[#c5a065] bg-[#160f0a]" : "border-transparent bg-[#0f0b08]"
                }`}
              >
                <p className="mb-4 font-serif text-4xl text-[#3a2a1f]">{card.num}</p>
                <h3 className="font-serif text-3xl">{card.name}</h3>
                <p className="mb-3 text-[10px] uppercase tracking-[0.14em] text-[#8a6e42]">{card.cycle}</p>
                <p className="mb-5 text-sm text-[#7a6048]">{card.forText}</p>
                <ul className="mb-5 space-y-2 text-sm text-[#7a6048]">
                  {card.features.map((feature) => (
                    <li key={feature} className="border-b border-[#2a1f17] pb-2">
                      — {feature}
                    </li>
                  ))}
                </ul>
                {card.id === "residency" && (
                  <div className="mb-5 grid grid-cols-2 gap-px bg-[#2a1f17]">
                    {(["dorm", "room"] as const).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setDepthVariant((state) => ({ ...state, residency: key }));
                        }}
                        className={`px-2 py-2 text-[10px] uppercase tracking-[0.1em] ${
                          depthVariant.residency === key
                            ? "bg-[#8a6e42] text-[#0f0b08]"
                            : "bg-[#1c1410] text-[#7a6048]"
                        }`}
                      >
                        {card.toggles[key].label}
                      </button>
                    ))}
                  </div>
                )}
                {card.id === "solitude" && (
                  <div className="mb-5 grid grid-cols-2 gap-px bg-[#2a1f17]">
                    {(["dorm", "room"] as const).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setDepthVariant((state) => ({ ...state, solitude: key }));
                        }}
                        className={`px-2 py-2 text-[10px] uppercase tracking-[0.1em] ${
                          depthVariant.solitude === key
                            ? "bg-[#8a6e42] text-[#0f0b08]"
                            : "bg-[#1c1410] text-[#7a6048]"
                        }`}
                      >
                        {card.toggles[key].label}
                      </button>
                    ))}
                  </div>
                )}
                {card.id === "creation" && (
                  <div className="mb-5 grid grid-cols-2 gap-px bg-[#2a1f17]">
                    {(["weekday", "weekend"] as const).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setDepthVariant((state) => ({ ...state, creation: key }));
                        }}
                        className={`px-2 py-2 text-[10px] uppercase tracking-[0.1em] ${
                          depthVariant.creation === key
                            ? "bg-[#8a6e42] text-[#0f0b08]"
                            : "bg-[#1c1410] text-[#7a6048]"
                        }`}
                      >
                        {card.toggles[key].label}
                      </button>
                    ))}
                  </div>
                )}
                <p className="font-serif text-3xl text-[#c5a065]">{pricing.price}</p>
                <p className="text-[11px] text-[#7a6048]">{pricing.note}</p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#160f0a] px-6 py-6 md:px-10">
          <p className="font-serif italic text-[#7a6048]">
            {selectedDepth ? (
              <>
                You've selected <span className="not-italic text-[#e8d5b0]">{depthLabel.replace("You've selected ", "")}</span>
              </>
            ) : (
              depthLabel
            )}
          </p>
          <button
            disabled={!selectedDepth}
            className="bg-[#c5a065] px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-[#0f0b08] disabled:cursor-not-allowed disabled:bg-[#3a2a1f] disabled:text-[#7a6048]"
          >
            Request Invite →
          </button>
        </div>
      </section>

      <section className="grid gap-10 border-y border-[#2a1f17] px-6 py-20 md:grid-cols-[1fr,1.6fr] md:px-10">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#7a6048]">How it works here</p>
          <h2 className="mb-4 font-serif text-4xl">What you agree to when you walk in</h2>
        </div>
        <div>
          {howRules.map((rule, index) => (
            <div key={rule} className="border-b border-[#2a1f17] py-5">
              <p className="text-sm leading-7 text-[#b09070]">
                <span className="mr-2 font-serif text-sm text-[#7a6048]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                - {rule}
              </p>
            </div>
          ))}
          <p className="mt-6 font-serif italic text-[#7a6048]">
            If these feel natural to you, you probably belong here.
          </p>
        </div>
      </section>

      <section className="border-y border-[#2a1f17]">
        <div className="grid gap-8 border-b border-[#2a1f17] px-6 py-16 md:grid-cols-2 md:px-10">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-[#7a6048]">
              What the estate provides
            </p>
            <h2 className="font-serif text-4xl">
              Everything included.
              <br />
              Nothing to decide.
            </h2>
          </div>
          <p className="text-sm leading-8 text-[#b09070]">
            Every stay includes accommodation, all meals, and full access to the estate and
            activities.<br/> <em className="font-serif text-[#e8d5b0]">There is nothing to add.</em>
          </p>
        </div>
        <div className="grid gap-6 px-6 py-8 md:px-10 lg:grid-cols-3">
          {[
            {
              key: "spaces" as const,
              heading: "Spaces to sit, think & withdraw",
              cards: providesSlides.spaces,
            },
            {
              key: "food" as const,
              heading: "Food that doesn't demand attention",
              cards: providesSlides.food,
            },
            {
              key: "activities" as const,
              heading: "Environments that regulate, not stimulate",
              cards: providesSlides.activities,
            },
          ].map(({ key, heading, cards }) => {
            const activeIndex = provideSlideIndex[key];
            const card = cards[activeIndex];
            return (
            <div key={heading} className="overflow-hidden rounded-sm border border-[#2a1f17] bg-[#0f0b08]">
              <p className="border-b border-[#2a1f17] px-6 py-4 font-serif text-lg">{heading}</p>
              <div className="relative aspect-[4/3] bg-[#1c1410]">
                <img src={card.image} alt={card.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b08]/90 via-[#0f0b08]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-serif text-2xl">{card.name}</p>
                  <p className="mt-1 text-xs text-[#b09070]">{card.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 border-t border-[#2a1f17] px-6 py-3">
                {cards.map((slide, idx) => (
                  <button
                    key={slide.name}
                    onClick={() =>
                      setProvideSlideIndex((prev) => ({
                        ...prev,
                        [key]: idx,
                      }))
                    }
                    className={`h-2 w-2 rounded-full transition-all ${
                      idx === activeIndex ? "scale-125 bg-[#8a6e42]" : "bg-[#3a2a1f]"
                    }`}
                    aria-label={`Show ${slide.name}`}
                  />
                ))}
              </div>
            </div>
            );
          })}
        </div>
        <div className="grid gap-px bg-[#2a1f17] sm:grid-cols-2 lg:grid-cols-4">
          {stripItems.map((item) => (
            <div key={item.name} className="bg-[#160f0a] p-6">
              <p className="mb-1 font-serif text-xl">{item.name}</p>
              <p className="text-xs text-[#7a6048]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid border-y border-[#2a1f17] bg-[#160f0a] md:grid-cols-2">
        <div className="flex h-full flex-col justify-between px-6 pb-5 pt-5 md:px-10">
          <div className="space-y-5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#7a6048]">Location</p>
            <h2 className="mt-12 mb-10 font-serif text-4xl">
              You can reach it in hours.
              <br />
              <em className="text-[#c5a065]">Most people take years.</em>
            </h2>
            <p className="text-sm leading-8 text-[#b09070]">
              Bhigwan sits on the backwaters of Ujni Dam — one of Maharashtra's most significant
              bird sanctuaries.
            </p>
          </div>
          <div className="space-y-3 pt-6">
            {[
              ["From Pune", "2.5 hours via Pune–Solapur Highway"],
              ["From Mumbai", "5.5 hours via Mumbai–Pune Expressway"],
              ["Getting here", "Taxi, bus, or train. Pickup arrangements available on request."],
            ].map(([label, value], index, arr) => (
              <div
                key={label}
                className={`grid grid-cols-[120px,1fr] py-3 ${
                  index === arr.length - 1 ? "" : "border-b border-[#2a1f17]"
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#7a6048]">{label}</p>
                <p className="text-sm text-[#b09070]">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-l border-[#2a1f17]">
          <div className="border-b border-[#2a1f17] px-6 py-5 text-[10px] uppercase tracking-[0.24em] text-[#7a6048]">
            The Silent Club · Overlooking Ujni Lake · Bhigwan, Maharashtra
          </div>
          <iframe
            title="Bhigwan Map"
            className="h-[360px] w-full grayscale"
            loading="lazy"
            src="https://www.google.com/maps?q=Bhigwan,%20Maharashtra&output=embed"
          />
          <div className="border-t border-[#2a1f17] px-6 py-4">
            <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-[#7a6048]">
              Postal Address
            </p>
            <p className="text-sm text-[#b09070]">
              The Silent Club, Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-y-12 border-y border-[#2a1f17] px-6 py-20 md:grid-cols-[1fr,1.8fr] md:gap-x-[100px] md:px-10">
        <div className="md:sticky md:top-20 md:self-start">
          <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-[#7a6048]">Before you come</p>
          <h2 className="mb-5 font-serif text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.1]">
            What people ask before they apply
          </h2>
          <p className="text-sm leading-[1.8] text-[#7a6048]">
            Most people arrive with questions. Few leave with the same ones.
          </p>
        </div>
        <div>
          {faqItems.map((item, index) => {
            const open = openFaq === index;
            return (
              <div key={item.q} className="border-b border-[#2a1f17] first:border-t first:border-[#2a1f17]">
                <button
                  className={`flex w-full items-start justify-between gap-6 py-5 text-left font-serif text-[1.15rem] leading-[1.3] transition-colors ${
                    open ? "text-[#e8d5b0]" : "text-[#b09070] hover:text-[#e8d5b0]"
                  }`}
                  onClick={() => setOpenFaq(open ? null : index)}
                >
                  <span>{item.q}</span>
                  <span className={`mt-1 text-[#8a6e42] transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`${open ? "max-h-80" : "max-h-0"} overflow-hidden transition-all duration-300`}>
                  <p className="pb-6 pr-6 text-[0.9rem] leading-[1.85] text-[#d4c4a8] md:pr-12">{item.a}</p>
                </div>
              </div>
            );
          })}
          <div className="mt-8">
            <button className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#8a6e42] transition-colors hover:text-[#c5a065]">
              More FAQ
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-[#2a1f17] bg-[#160f0a] px-6 py-24 text-center md:px-10">
        <h2 className="mx-auto mb-8 max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
          The rarest luxury in modern life is <em className="italic text-[#c5a065]">uninterrupted time.</em>
        </h2>
        <button className="bg-[#c5a065] px-7 py-3 text-[11px] uppercase tracking-[0.16em] text-[#0f0b08]">
          Request Invite →
        </button>
      </section>

      <footer className="border-t border-[#2a1f17]">
        <div className="grid gap-px border-b border-[#2a1f17] bg-[#2a1f17] md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#0f0b08] p-8">
            <p className="font-serif text-2xl">The Silent Club</p>
            <p className="mt-1 text-xs text-[#7a6048]">Silence as a Service · Bhigwan, Pune</p>
          </div>
          {[
            ["Explore", "Home", "About", "The Estate", "Journal", "FAQ"],
            [
              "Stay",
              "Silence — Day Cycle",
              "Residency — Weekend",
              "Solitude — Weekday",
              "Creation — Full Estate",
            ],
            ["Connect", "Instagram", "Substack", "Request Invite", "Host an Event"],
          ].map(([heading, ...items]) => (
            <div key={heading} className="bg-[#0f0b08] p-8">
              <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#7a6048]">{heading}</p>
              <div className="space-y-1">
                {items.map((item) => (
                  <p key={item} className="text-sm text-[#7a6048]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 px-6 py-5 text-xs text-[#7a6048] md:px-10">
          <p>© 2026 The Silent Club. All rights reserved.</p>
          <p>The Silent Club, Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104</p>
        </div>
      </footer>
    </main>
  );
}
