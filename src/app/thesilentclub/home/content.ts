export type DepthId = "silence" | "residency" | "solitude" | "creation";

export const navLinks = [
  { label: "Home", href: "/thesilentclub/home" },
  { label: "About", href: "/thesilentclub/about" },
  { label: "The Estate", href: "/thesilentclub/estate" },
  { label: "FAQ", href: "/thesilentclub/faq" },
  { label: "Journal", href: "/blogs" },
];

export const whoMembers = [
  {
    type: "Writers & Thinkers",
    desc: "Those who need hours of unbroken time to hear themselves think and finally put it into words.",
    reviews: [
      {
        quote:
          "\"I wrote 40 pages here in three days. The only place I've been able to disappear completely.\"",
        name: "Aarav M.",
      },
      {
        quote:
          "\"I come when a decision is too important for the noise of the office. I've never left without clarity.\"",
        name: "Rhea S.",
      },
      {
        quote:
          "\"Four months as a member. More original work than in the previous two years combined.\"",
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
          "\"I come when a decision is too important for the noise of the office. I've never left without clarity.\"",
        name: "Nikhil P.",
      },
      {
        quote:
          "\"I wrote 40 pages here in three days. The only place I've been able to disappear completely.\"",
        name: "Maya R.",
      },
      {
        quote:
          "\"Four months as a member. More original work than in the previous two years combined.\"",
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
          "\"Four months as a member. More original work than in the previous two years combined.\"",
        name: "Ishita V.",
      },
      {
        quote:
          "\"I come when a decision is too important for the noise of the office. I've never left without clarity.\"",
        name: "Arjun L.",
      },
      {
        quote:
          "\"I wrote 40 pages here in three days. The only place I've been able to disappear completely.\"",
        name: "Tara N.",
      },
    ],
  },
];

export const designedCards = [
  {
    title: "Designed Silence",
    desc: "Every space asks nothing of your senses. Dedicated zones calibrated for different qualities of thought. Silence here is structural - not a rule you have to remember to follow.",
    icon: "M3 3l18 18M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8",
  },
  {
    title: "Designed Anonymity",
    desc: "No roles. No titles. No one who knows what you do or what you've built. You arrive as a person, not a position. Nobody here wants anything from you.",
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M17 11h6",
  },
  {
    title: "Designed Withdrawal",
    desc: "Far enough to interrupt the pattern. Close enough to not feel like escape. You step away long enough to finally see what you've been too close to notice.",
    icon: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9",
  },
];

export const depthCards = [
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
      "Minimal communication, 30 min/day",
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
      "Full estate, Full Cycle",
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

export const howRules = [
  "Calls and video meetings in designated zones only. Not in shared spaces. Not in rooms others can hear.",
  "No unsolicited conversation with other members. A nod is enough. There is a 30-minute community window each evening if you want more.",
  "Devices in your room or personal desk only. Earphones are fine. No speakers, anywhere on the estate.",
  "No performance of working. Staring at the ceiling counts. You are here for yourself, not an audience.",
  "What you create here is entirely yours. We have no interest in your work, your process, or your results.",
  "What you witness here stays here. Don't seek out other members outside. Anonymity is something we protect together.",
];

export const providesSlides = {
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
      name: "Minimalist Tents",
      desc: "Grounding. Closer to the land. Further from built comfort.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/tent1.png",
    },
  ],
  food: [
    {
      name: "Satvik Home Food",
      desc: "Seasonal, local. Prepared fresh each morning. No menu, no ordering.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/food1.png",
    },
    {
      name: "Salads, Smoothies & Sandwiches",
      desc: "Light meals that sustain focus without heaviness.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/food2.png",
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
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/food4.png",
    },
    {
      name: "High Tea",
      desc: "Set out at 4pm. No announcement made.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/food3.png",
    },
  ],
  activities: [
    {
      name: "Bird Watching",
      desc: "Ujni Lake at dawn. Flamingos, painted storks. Binoculars provided.",
      image:
        "https://static.punemirror.com/full/ecdf5da031e791031eb760d41d9be1bc471b4ad7.jpg",
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
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Activities/pool.png",
    },
    {
      name: "Forest Trails",
      desc: "Self-guided. Trail maps provided. Walk alone.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/grasslandsafari1.png",
    },
    {
      name: "Kayaking & Boat Rides",
      desc: "On Ujni Lake. Gear provided. No guide needed.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/boat1.png",
    },
    {
      name: "Star Gazing",
      desc: "Telescope on the deck. No light pollution. No commentary.",
      image:
        "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Experiences/Activities/star.png",
    },
  ],
};

export const stripItems = [
  { name: "Accommodation", desc: "Private rooms & shared dorms. Your choice at booking." },
  { name: "Meals", desc: "Breakfast, lunch, high tea, dinner. Always included." },
  { name: "Activities", desc: "Every activity and all gear. Nothing extra to pay." },
  
];

export const faqItems = [
  {
    q: "Is this a meditation retreat?",
    a: "No. There is no programme, no facilitator, no spiritual framing of any kind. The Silent Club is a private estate that removes interference: noise, pace, expectation, performance. What you do with the silence that remains is entirely yours.",
  },
  {
    q: "What actually happens when I arrive?",
    a: "Nothing is waiting for you. You check in, put your phone in a drawer, and the day is yours. Meals are prepared and set out. Spaces are open. There is no orientation, no schedule, no one to report to.",
  },
  {
    q: "Can I work while I'm here?",
    a: "Yes. The deep work library is designed for exactly this. What changes is not whether you can work, it is why you work. The estate removes the ambient conditions that make work compulsive rather than chosen.",
  },
  {
    q: "How does the invite process work?",
    a: "Two questions. No CV, no credentials, no pitch. A short 15-minute conversation with the founder. If it feels right on both sides, you receive your first invite.",
  },
  {
    q: "Is everything really included?",
    a: "Yes. Accommodation, all meals, full estate access, all activities, all gear. There is nothing to add, nothing to upgrade, and nothing to decide once you arrive.",
  },
];
