"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import VenueHero from "../components/venue/VenueHero";
import VenueSection from "../components/venue/VenueSection";
import RequestConversation from "../components/RequestConversation";

const breadcrumbItems = [
  { label: "Estate", href: "/venue" }
];

export default function VenuePage() {
  const [expandedSection, setExpandedSection] = useState<string>("wildlife");

  const toggleSection = (id: string) => {
    const newSection = expandedSection === id ? "" : id;
    setExpandedSection(newSection);
    
    // Scroll to the section header when expanding
    if (newSection) {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 120; // Account for sticky header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  };

  const venueCategories = [
    {
      id: "wildlife",
      number: "01",
      title: "Wildlife & Nature",
      subtitle: "The Land Reduces Noise",
      icon: "nature",
      introText: "Natural environments and wildlife observation areas.",
      singleLine: "Open Land | Natural Silence — The surrounding terrain lowers visual and auditory interference without deliberate intervention.",
      usedFor: ["Horizon exposure", "Nature walks", "Ecological awareness", "Nervous system decompression"],
      closingText: "",
      venues: [
        {
          title: "Forest Safari",
          description: "Guided passage through natural habitat and open terrain.\n\nYou are present in the wild, not in control of it.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/grasslandsafari1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/grasslandsafari2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/grasslandsafari3.png"
          ],
          imageAlt: "Forest Safari - Guided walking trails across open grassland terrain at The Silent Club",
          area: "3 km trail",
          capacity: "20 ppl",
          icon: "forest",
          category: "Wildlife Observation",
          href: "/venue#wildlife",
        },
        {
          title: "Bird Watching",
          description: "Designated quiet observation areas near natural habitats.\n\nObservation without interference sharpens perception.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/bird1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/bird2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/bird3.png"
          ],
          imageAlt: "Bird Watching - Quiet observation areas near natural bird habitats",
          area: "500 sqft",
          capacity: "15 ppl",
          icon: "flutter",
          category: "Wildlife Observation",
          href: "/venue#wildlife",
        },
        {
          title: "Boat Joyrides",
          description: "Slow-paced lake movement along open water.\n\nWater environments reduce sensory fragmentation.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/boat1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/boat2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/boat3.png"
          ],
          imageAlt: "Boat Joy Rides - Slow-paced boat rides on the lake for visual horizon reset",
          area: "Lake access",
          capacity: "6 ppl",
          icon: "sailing",
          category: "Water Activity",
          href: "/venue#wildlife",
        },
      ],
    },
    {
      id: "collective",
      number: "02",
      title: "Accommodation",
      subtitle: "Sleep Is Non-Negotiable",
      icon: "bed",
      introText: "Living environments for restoration and sleep.",
      singleLine: "Private Rooms | Protected Sleep — Environments designed to remove stimulation and preserve uninterrupted rest.",
      usedFor: ["Deep rest", "Extended silence", "Sensory withdrawal", "Private integration"],
      closingText: "",
      venues: [
        {
          title: "Private Room",
          description: "Enclosed room designed for rest, work, and quiet reflection.\n\nHere, withdrawal can happen without concern for others.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/room1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/room2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/room3.png"
          ],
          imageAlt: "Private Room - Enclosed personal sleeping space with king-size bed for deep rest",
          area: "King-size bed",
          capacity: "1-2 ppl",
          icon: "bed",
          category: "Private Accommodation",
          href: "/venue#collective",
        },
        {
          title: "Dark Room",
          description: "Light- and sound-controlled chamber for uninterrupted withdrawal.\n\nFood and essentials are provided without breaking isolation.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/darkroom.png",
          imageAlt: "Dark Room - Total light isolation space for sensory withdrawal and deep rest",
          area: "Total isolation",
          capacity: "1 ppl",
          icon: "dark_mode",
          category: "Sensory Isolation",
          href: "/venue#collective",
        },
        {
          title: "Shared Dorm",
          description: "Quiet dormitory with individual beds and personal desks.\n\nA shared room designed for solitary work and reflection.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/dorm1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/dorm2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/dorm3.png"
          ],
          imageAlt: "Shared Dorm - Structured shared sleeping space with quiet norms for collective silence",
          area: "Shared space",
          capacity: "4-6 ppl",
          icon: "bed",
          category: "Shared Accommodation",
          href: "/venue#collective",
        },
        {
          title: "Minimalist Tents",
          description: "Lightweight sleeping tents placed directly on the land.\n\nSleep closer to the ground and away from built comfort.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/tent1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/tent2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/tent3.png"
          ],
          imageAlt: "Minimalist Tents - Outdoor canvas tents for ground connection and environmental immersion",
          area: "Canvas tent",
          capacity: "2 ppl",
          icon: "camping",
          category: "Outdoor Accommodation",
          href: "/venue#collective",
        },
        {
          title: "Community Hall",
          description: "Indoor hall for shared meals, conversation, and informal gathering.\n\nA simple shelter where the estate occasionally comes together.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/hall.png",
          imageAlt: "Community Hall - Large gathering space for group activities and communal events",
          area: "Canvas tent",
          capacity: "2 ppl",
          icon: "meeting_room",
          category: "Community Space",
          href: "/venue#collective",
        },
      ],
    },
    {
      id: "food",
      number: "03",
      title: "Food",
      subtitle: "Stability Over Stimulation",
      icon: "restaurant",
      introText: "Dining spaces and culinary environments.",
      singleLine: "Simple Meals | Stable Energy — Food structured to regulate energy and support sustained mental clarity.",
      usedFor: ["Shared meals", "Mindful eating", "Nutritional awareness", "Rhythmic reset"],
      closingText: "",
      venues: [
        {
          title: "Satvik Home Food",
          description: "Traditional Indian meals prepared with low-stimulation ingredients.\n\nMeals support clarity, not indulgence.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/homefood1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/homefood2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/homefood3.png"
          ],
          imageAlt: "Satvik Home Food - Traditional Indian vegetarian meals for stable energy and digestive ease",
          area: "Dining hall",
          capacity: "30 ppl",
          icon: "restaurant",
          category: "Daily Meals",
          href: "/venue#food",
        },
        {
          title: "Salads, Smoothies & Sandwiches",
          description: "Light meal options focused on simplicity and freshness.\n\nDesigned to sustain focus.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/sss1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/sss2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/sss3.png"
          ],
          imageAlt: "Salads, Smoothies & Sandwiches - Light meal options for midday reset and clean nutrition",
          area: "Kitchen",
          capacity: "As needed",
          icon: "nutrition",
          category: "Light Meals",
          href: "/venue#food",
        },
        {
          title: "Barbeque, Pizzas & Sushi",
          description: "Occasional shared meals prepared intentionally.\n\nMoments where the estate briefly gathers.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/pbs1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/pbs2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/pbs3.png"
          ],
          imageAlt: "Pizza, Barbecue & Sushi - Occasional communal meals for shared gathering and social bonding",
          area: "Outdoor area",
          capacity: "40 ppl",
          icon: "local_pizza",
          category: "Special Meals",
          href: "/venue#food",
        },
        {
          title: "Fruits, Juices & Fresh Bites",
          description: "Fresh fruit and juices for light, flexible nourishment.\n\nSome eat. Some fast. The body decides.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/fjs1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/fjs2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/fjs3.png"
          ],
          imageAlt: "Fruit Juices & Fresh Bites - Fresh beverages and light snacks for energy and hydration",
          area: "Outdoor area",
          capacity: "40 ppl",
          icon: "blender",
          category: "Light Nourishment",
          href: "/venue#food",
        },
        {
          title: "Self Serve Pantry",
          description: "Designated kitchen access for simple personal preparation.\n\nAutonomy within rhythm.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ssp1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ssp2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ssp3.png"
          ],
          imageAlt: "Self-Serve Pantry - Kitchen access for tea, coffee and light snacks with dietary flexibility",
          area: "Pantry",
          capacity: "Self-serve",
          icon: "kitchen",
          category: "Self-Service",
          href: "/venue#food",
        },
        {
          title: "Outdoor Kitchen",
          description: "Open-air cooking space used for occasional communal meals and curated events.\n\nFood can gather people without accelerating them.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ok1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ok2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ok3.png"
          ],
          imageAlt: "Outdoor Kitchen - Open-air cooking space for communal meals and small-group gatherings",
          area: "Outdoor",
          capacity: "20 ppl",
          icon: "outdoor_grill",
          category: "Communal Cooking",
          href: "/venue#food",
        },
      ],
    },
    {
      id: "intimate",
      number: "04",
      title: "Practice",
      subtitle: "The Body Must Discharge",
      icon: "fitness_center",
      introText: "Movement, recovery, and regulation environments.",
      singleLine: "Movement Spaces | Physical Reset — Areas designed for effort that clears residual tension from the nervous system.",
      usedFor: ["Physical reset", "Stress discharge", "Endurance training", "Body recalibration"],
      closingText: "",
      venues: [
        {
          title: "Outdoor Gym",
          description: "Open-air strength and conditioning space.\n\nEffort clears residual tension.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym3.png"
          ],
          imageAlt: "Outdoor Gym - Open-air strength and conditioning space for physical training and stress discharge",
          area: "1,200 sqft",
          capacity: "15 ppl",
          icon: "fitness_center",
          category: "Strength Training",
          href: "/venue#intimate",
        },
        {
          title: "Sports Courts",
          description: "Multi-use court for competitive or cooperative play.\n\nMovement restores mental steadiness.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/sc1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/sc2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/sc3.png"
          ],
          imageAlt: "Sports Court - Multi-use court for competitive play, energy release and group engagement",
          area: "3,000 sqft",
          capacity: "20 ppl",
          icon: "sports_basketball",
          category: "Sports & Play",
          href: "/venue#intimate",
        },
        {
          title: "Contrast Recovery",
          description: "Hot and cold exposure environments.\n\nPhysiological reset through contrast.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/hot.png",
          imageAlt: "Contrast Recovery - Hot and cold therapy facilities for nervous system recalibration",
          area: "800 sqft",
          capacity: "8 ppl",
          icon: "thermostat",
          category: "Recovery",
          href: "/venue#intimate",
        },
        {
          title: "Cycles",
          description: "Manual & Motorized bicycles for on-land movement.\n\nRepetition stabilizes thought.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/cycle.png",
          imageAlt: "Cycles - Manual and motorized bicycles for cardio training and solo reflection",
          area: "N/A",
          capacity: "Multiple",
          icon: "pedal_bike",
          category: "Cardio",
          href: "/venue#intimate",
        },
        {
          title: "Kayaks",
          description: "Water-based manual rowing equipment.\n\nSteady motion supports steady thinking.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/kayak.png",
          imageAlt: "Kayaks - Water-based rowing equipment for upper-body engagement and rhythmic motion",
          area: "N/A",
          capacity: "Multiple",
          icon: "kayaking",
          category: "Water Sport",
          href: "/venue#intimate",
        },
        {
          title: "Yoga Loft",
          description: "Quiet outdoor loft for guided or self-directed practice.\n\nStillness is trained, not assumed.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/yogaloft.png",
          imageAlt: "Yoga Loft - Quiet outdoor space for breath regulation and mindful movement practice",
          area: "2,000 sqft",
          capacity: "30 ppl",
          icon: "self_improvement",
          category: "Mindful Movement",
          href: "/venue#intimate",
        },
        {
          title: "Tree houses",
          description: "Elevated solo structure with desk and minimal amenities.\n\nWithdrawal within withdrawal.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/treehouse.jpeg",
          imageAlt: "Tree House - Elevated solo workspace for writing, focused thinking and creative work",
          area: "100 sqft",
          capacity: "1 ppl",
          icon: "cottage",
          category: "Solo Workspace",
          href: "/venue#intimate",
        },
        {
          title: "Zen Garden",
          description: "Minimalist stone and sand installation.\n\nAttention stabilizes through repetition.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/zen1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/zen2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/zen3.png"
          ],
          imageAlt: "Zen Garden - Minimalist stone and sand installation for visual stillness and contemplation",
          area: "600 sqft",
          capacity: "5 ppl",
          icon: "spa",
          category: "Contemplation",
          href: "/venue#intimate",
        },
        {
          title: "Ground Work",
          description: "Hands-on agricultural tasks and land maintenance.\n\nWork without performance pressure.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/farm.jpeg",
          imageAlt: "Ground Work - Hands-on agricultural tasks and land maintenance for grounding and physical labor",
          area: "Variable",
          capacity: "Small groups",
          icon: "agriculture",
          category: "Land Work",
          href: "/venue#intimate",
        },
        {
          title: "Practice Platform",
          description: "Stone deck under a neem tree overlooking open water.\n\nSkill deepens when environment is undisturbed.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/pp1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/pp2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/pp3.png"
          ],
          imageAlt: "Practice Platform - Stone deck under neem tree for music rehearsal and artistic practice",
          area: "300 sqft",
          capacity: "5 ppl",
          icon: "music_note",
          category: "Creative Practice",
          href: "/venue#intimate",
        },
        {
          title: "Silent board Games",
          description: "Analog tabletop games designed for low-verbal interaction.\n\nEngagement without volume.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/boardgame.png",
          imageAlt: "Silent Board Games - Analog tabletop games for strategic thinking and cooperative play",
          area: "Indoor",
          capacity: "4-8 ppl",
          icon: "casino",
          category: "Strategic Play",
          href: "/venue#intimate",
        },
      ],
    },
    {
      id: "creative",
      number: "05",
      title: "Assembly",
      subtitle: "Interaction Is Intentional",
      icon: "groups",
      introText: "Primary collective environments for structured or unstructured gathering.",
      singleLine: "Shared Rooms | Contained Dialogue — Spaces where interaction happens deliberately within defined limits.",
      usedFor: ["Inquiry sessions", "Intentional dialogue", "Quiet collaboration", "Shared silence"],
      closingText: "",
      venues: [
        {
          title: "Design Dome",
          description: "Central dome used for meditation, work, and exhibition.\n\nThe space adapts as the day unfolds.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Assembly/designdome.png",
          imageAlt: "Design Dome - Architectural installation for identity examination and transitional awareness",
          area: "2,000 sqft",
          capacity: "50 ppl",
          icon: "architecture",
          category: "Gathering Space",
          href: "/venue#creative",
        },
        {
          title: "Library Lounge",
          description: "Glasshouse lounge with pool, books, and horizon views.\n\nThe space invites reading, resting, and quiet observation.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Assembly/library.png",
          imageAlt: "Library Lounge - Multi-purpose hall for meditation, co-working and writing workshops",
          area: "800 sqft",
          capacity: "20 ppl",
          icon: "local_library",
          category: "Observation & Reset",
          href: "/venue#creative",
        },
        {
          title: "Front Lawn",
          description: "Wide grass lawn shaded by mango trees.\n\nHere, time is spent slowly and without instruction.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Assembly/lawn.jpeg",
          imageAlt: "Front Lawn - Open grass field for grounding, informal sitting and open-air screenings",
          area: "5,000 sqft",
          capacity: "100 ppl",
          icon: "grass",
          category: "Open Space",
          href: "/venue#creative",
        },
        {
          title: "Central Courtyard",
          description: "Central ground connecting the estate's structures.\n\nEveryone passes through, yet silence remains intact.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Assembly/courtyard.png",
          imageAlt: "Courtyard - Central open space for grounding and informal outdoor engagement",
          area: "1,500 sqft",
          capacity: "40 ppl",
          icon: "yard",
          category: "Courtyard",
          href: "/venue#creative",
        },
        {
          title: "Signal Deck",
          description: "Elevated semi-private outdoor cabins designed for limited external communication.\n\nThis is not a social space. It is a boundary space.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/treehouse.jpeg",
          imageAlt: "Signal Deck - Elevated cabins for essential calls and controlled external communication",
          area: "Multiple cabins",
          capacity: "2-4 ppl",
          icon: "wifi",
          category: "Communication Zone",
          href: "/venue#creative",
        },
      ],
    },
    {
      id: "living",
      number: "06",
      title: "Symbolic",
      subtitle: "Identity Is Interrupted",
      icon: "brush",
      introText: "Architectural structures designed for reflection and declaration.",
      singleLine: "Architectural Markers | Perspective Shift — Spatial cues that interrupt routine perception without imposing interpretation.",
      usedFor: ["Identity examination", "Personal release", "Perspective shift"],
      closingText: "",
      venues: [
        {
          title: "Identity Cemetery",
          description: "Graves at the entrance of the estate.\n\nPast identities that no longer serve may be buried here.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/cemetary.jpg",
          imageAlt: "Identity Cemetery - Circular threshold structure for psychological transition and symbolic crossing",
          area: "2,000 sqft",
          capacity: "30 ppl",
          icon: "door_front",
          category: "Threshold",
          href: "/venue#living",
        },
        {
          title: "Moon Gate",
          description: "Moon gate framing the entrance to the estate.\n\nSilence begins on one side. A different person may return on the other.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/moongate.png",
          imageAlt: "Moon Gate - Boundary installation for perspective inquiry and cognitive interruption",
          area: "N/A",
          capacity: "N/A",
          icon: "circle",
          category: "Ritualistic Portal",
          href: "/venue#living",
        },
        {
          title: "Truman's Wall",
          description: "Wall installation referencing constructed reality.\n\nCrossing it marks the end of performative life.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/trumanwall.png",
          imageAlt: "Truman's Wall - Sculptural installation for reflective pause and cognitive priming",
          area: "N/A",
          capacity: "Unlimited",
          icon: "account_balance",
          category: "Installation",
          href: "/venue#living",
        },
        {
          title: "Thinking Man",
          description: "Sculptural marker at the entrance of the estate.\n\nIt marks a place where thinking resumes without interference.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/thinkingman.png",
          imageAlt: "Thinking Man - Perimeter platform for solitude, sunset viewing and boundary awareness",
          area: "N/A",
          capacity: "1 ppl",
          icon: "person",
          category: "Contemplation Point",
          href: "/venue#living",
          objectPosition: "center 30%",
        },
        {
          title: "Edgeless Gallery",
          description: "Open platform overlooking the Ujni landscape.\n\nHere the horizon is unobstructed and unguarded.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/edgelessgallery.jpeg",
          imageAlt: "Edgeless Gallery - Perimeter viewing platform facing open landscape for spatial reset",
          area: "Perimeter",
          capacity: "Small groups",
          icon: "gallery_thumbnail",
          category: "Viewing Platform",
          href: "/venue#living",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 ">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <VenueHero />

      <div className="w-full px-4 md:px-16 py-12">
        {venueCategories.map((category) => (
          <section 
            key={category.id} 
            className={`transition-all duration-300 ${expandedSection === category.id ? 'mb-24' : 'mb-6'}`}
          >
            <VenueSection 
              {...category} 
              expanded={expandedSection === category.id}
              onToggle={() => toggleSection(category.id)}
            />
          </section>
        ))}
      </div>
      <RequestConversation />
      <Footer />
    </main>
  );
}
