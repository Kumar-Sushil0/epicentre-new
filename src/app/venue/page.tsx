"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VenueHero from "../components/venue/VenueHero";
import VenueSection from "../components/venue/VenueSection";
import RequestConversation from "../components/RequestConversation";

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
      subtitle: "The Land Carries Weight",
      icon: "nature",
      introText: "Natural environments and wildlife observation areas.",
      usedFor: ["Horizon exposure", "Nature walks", "Ecological awareness", "Nervous system decompression"],
      closingText: "",
      venues: [
        {
          title: "Forest Safari",
          description: "Guided walking trails across open land and low-density terrain.\n\nUsed for: Horizon exposure. Light movement. Ecological awareness. Nervous system decompression.\n\nDistance from built environments reduces cognitive load.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/grasslandsafari1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/grasslandsafari2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/grasslandsafari3.png"
          ],
          imageAlt: "Forest safari trail",
          area: "3 km trail",
          capacity: "20 ppl",
          icon: "forest",
          category: "Nature Walk",
          href: "/venue#wildlife",
        },
        {
          title: "Bird Watching",
          description: "Designated quiet observation areas near natural habitats.\n\nUsed for: Sustained attention. Pattern recognition. Auditory sensitivity. Stillness training.\n\nObservation without interference sharpens perception.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/bird1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/bird2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/bird3.png"
          ],
          imageAlt: "Bird watching area",
          area: "500 sqft",
          capacity: "15 ppl",
          icon: "flutter",
          category: "Wildlife Observation",
          href: "/venue#wildlife",
        },
        {
          title: "Boat Joy Rides",
          description: "Slow-paced lake movement along open water.\n\nUsed for: Visual horizon reset. Rhythmic motion. Emotional settling. Perspective shift.\n\nWater environments reduce sensory fragmentation.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/boat1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/boat2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Wildlife/boat3.png"
          ],
          imageAlt: "Boat joy rides on lake",
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
      usedFor: ["Deep rest", "Extended silence", "Sensory withdrawal", "Private integration"],
      closingText: "",
      venues: [
        {
          title: "Private Room",
          description: "Enclosed personal sleeping space with controlled light and sound.\n\nUsed for: Deep rest. Sensory withdrawal. Personal integration. Extended silence.\n\nSleep is protected. Interruption is minimized.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/room1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/room2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/room3.png"
          ],
          imageAlt: "Private room",
          area: "King-size bed",
          capacity: "1-2 ppl",
          icon: "bed",
          category: "Private Accommodation",
          href: "/venue#collective",
        },
        {
          title: "Dark Room",
          description: "Enclosed personal sleeping space with controlled light and sound.\n\nUsed for: Deep rest. Sensory withdrawal. Personal integration. Extended silence.\n\nSleep is protected. Interruption is minimized.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/darkroom.png",
          imageAlt: "Dark room",
          area: "Total isolation",
          capacity: "1 ppl",
          icon: "dark_mode",
          category: "Sensory Isolation",
          href: "/venue#collective",
        },
        {
          title: "Shared Dorm",
          description: "Structured shared sleeping space with quiet norms.\n\nUsed for: Collective silence. Budget stays. Group cycles. Rhythmic routine.\n\nShared space, protected quiet.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/dorm1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/dorm2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/dorm3.png"
          ],
          imageAlt: "Shared dormitory",
          area: "Shared space",
          capacity: "4-6 ppl",
          icon: "bunk_bed",
          category: "Shared Accommodation",
          href: "/venue#collective",
        },
        {
          title: "Minimalist Tents",
          description: "Outdoor sleeping structures with minimal artificial input.\n\nUsed for: Ground connection. Environmental immersion. Sensory simplification. Early sleep cycles.\n\nCloser to land. Fewer barriers.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/tent1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/tent2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/rooms/tent3.png"
          ],
          imageAlt: "Minimalist camping tents",
          area: "Canvas tent",
          capacity: "2 ppl",
          icon: "camping",
          category: "Outdoor Accommodation",
          href: "/venue#collective",
        },
        {
          title: "Community Hall",
          description: "Outdoor sleeping structures with minimal artificial input.\n\nUsed for: Ground connection. Environmental immersion. Sensory simplification. Early sleep cycles.\n\nCloser to land. Fewer barriers.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/hall.png",
          imageAlt: "Minimalist camping tents",
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
      subtitle: "Food Stabilizes, Not Stimulates",
      icon: "restaurant",
      introText: "Dining spaces and culinary environments.",
      usedFor: ["Shared meals", "Mindful eating", "Nutritional awareness", "Rhythmic reset"],
      closingText: "",
      venues: [
        {
          title: "Satvik Home Food",
          description: "Traditional Indian meals prepared with low-stimulation ingredients.\n\nEveryday: Stable energy. Digestive ease. Rhythmic eating. Nutritional awareness.\n\nMeals support clarity, not indulgence.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/homefood1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/homefood2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/homefood3.png"
          ],
          imageAlt: "Satvik home food",
          area: "Dining hall",
          capacity: "30 ppl",
          icon: "restaurant",
          category: "Daily Meals",
          href: "/venue#food",
        },
        {
          title: "Salads, Smoothies & Sandwiches",
          description: "Light meal options focused on simplicity and freshness.\n\nWed & Fri: Midday reset. Low digestive load. Active cycles. Clean nutrition.\n\nDesigned to sustain focus.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/sss1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/sss2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/sss3.png"
          ],
          imageAlt: "Salads, smoothies and sandwiches",
          area: "Kitchen",
          capacity: "As needed",
          icon: "nutrition",
          category: "Light Meals",
          href: "/venue#food",
        },
        {
          title: "Pizza, Barbeque & Sushi",
          description: "Occasional communal meals prepared intentionally.\n\nAs required: Shared gathering. Social bonding. Celebration within structure. Moderated indulgence.\n\nEven stimulation is regulated.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/pbs1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/pbs2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/pbs3.png"
          ],
          imageAlt: "Pizza, barbecue and sushi",
          area: "Outdoor area",
          capacity: "40 ppl",
          icon: "local_pizza",
          category: "Special Meals",
          href: "/venue#food",
        },
        {
          title: "Fruits Juices & Fresh Bites",
          description: "Occasional communal meals prepared intentionally.\n\nAs required: Shared gathering. Social bonding. Celebration within structure. Moderated indulgence.\n\nEven stimulation is regulated.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/fjs1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/fjs2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/fjs3.png"
          ],
          imageAlt: "Pizza, barbecue and sushi",
          area: "Outdoor area",
          capacity: "40 ppl",
          icon: "blender",
          category: "Fresh Beverages",
          href: "/venue#food",
        },
        {
          title: "Self-Serve Pantry",
          description: "Designated kitchen access for simple personal preparation.\n\nUsed for: Tea and coffee. Light snacks. Between-meal regulation. Dietary flexibility.\n\nAutonomy within rhythm.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ssp1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ssp2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ssp3.png"
          ],
          imageAlt: "Self-serve pantry",
          area: "Pantry",
          capacity: "Self-serve",
          icon: "kitchen",
          category: "Self-Service",
          href: "/venue#food",
        },
        {
          title: "Outdoor Kitchen",
          description: "Open-air cooking space used for occasional communal meals and curated events.\n\nUsed for: Structured shared cooking. Small-group gatherings. Seasonal meals. Experimental dining formats.\n\nFood can gather people without accelerating them.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ok1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ok2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Food/ok3.png"
          ],
          imageAlt: "Outdoor kitchen",
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
      usedFor: ["Physical reset", "Stress discharge", "Endurance training", "Body recalibration"],
      closingText: "",
      venues: [
        {
          title: "Outdoor Gym",
          description: "Open-air strength and conditioning space.\n\nUsed for: Stress discharge. Physical training. Hormonal regulation. Structured exertion.\n\nEffort clears residual tension.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/gym3.png"
          ],
          imageAlt: "Outdoor gym equipment",
          area: "1,200 sqft",
          capacity: "15 ppl",
          icon: "fitness_center",
          category: "Strength Training",
          href: "/venue#intimate",
        },
        {
          title: "Sports Court",
          description: "Multi-use court for competitive or cooperative play.\n\nUsed for: Energy release. Group engagement. Motor coordination. Active recovery.\n\nMovement restores mental steadiness.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/sc1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/sc2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/sc3.png"
          ],
          imageAlt: "Sports court",
          area: "3,000 sqft",
          capacity: "20 ppl",
          icon: "sports_basketball",
          category: "Sports & Play",
          href: "/venue#intimate",
        },
        {
          title: "Contrast Recovery",
          description: "Hot and cold exposure environments.\n\nUsed for: Circulation improvement. Inflammation reduction. Nervous system recalibration. Recovery cycles.\n\nPhysiological reset through contrast.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/hot.png",
          imageAlt: "Contrast recovery facilities",
          area: "800 sqft",
          capacity: "8 ppl",
          icon: "thermostat",
          category: "Recovery",
          href: "/venue#intimate",
        },
        {
          title: "Cycles",
          description: "Manual & Motorized bicycles for on-land movement.\n\nUsed for: Cardio training. Solo reflection. Exploratory motion. Breath regulation.\n\nRepetition stabilizes thought.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/cycle.png",
          imageAlt: "Bicycles",
          area: "N/A",
          capacity: "Multiple",
          icon: "pedal_bike",
          category: "Cardio",
          href: "/venue#intimate",
        },
        {
          title: "Kayaks",
          description: "Water-based manual rowing equipment.\n\nUsed for: Upper-body engagement. Rhythmic motion. Horizon focus. Controlled isolation.\n\nSteady motion supports steady thinking.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/kayak.png",
          imageAlt: "Kayaks on water",
          area: "N/A",
          capacity: "Multiple",
          icon: "kayaking",
          category: "Water Sport",
          href: "/venue#intimate",
        },
        {
          title: "Yoga Loft",
          description: "Quiet outdoor loft for guided or self-directed practice.\n\nUsed for: Breath regulation. Postural reset. Focus training. Group stillness.\n\nStillness is trained, not assumed.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/yogaloft.png",
          imageAlt: "Yoga loft",
          area: "2,000 sqft",
          capacity: "30 ppl",
          icon: "self_improvement",
          category: "Mindful Movement",
          href: "/venue#intimate",
        },
        {
          title: "Tree House",
          description: "Elevated solo structure with desk and minimal amenities.\n\nUsed for: Writing. Focused thinking. Creative work. Quiet isolation.\n\nWithdrawal within withdrawal.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/treehouse.jpeg",
          imageAlt: "Tree house",
          area: "100 sqft",
          capacity: "1 ppl",
          icon: "cottage",
          category: "Solo Workspace",
          href: "/venue#intimate",
        },
        {
          title: "Zen Garden",
          description: "Minimalist stone and sand installation.\n\nUsed for: Visual stillness. Pattern contemplation. Micro-focus training. Grounded presence.\n\nAttention stabilizes through repetition.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/zen1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/zen2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/zen3.png"
          ],
          imageAlt: "Zen garden",
          area: "600 sqft",
          capacity: "5 ppl",
          icon: "spa",
          category: "Contemplation",
          href: "/venue#intimate",
        },
        {
          title: " Ground Work ",
          description: "Hands-on agricultural tasks and land maintenance.\n\nUsed for: Physical labor. Grounding work. Rhythmic routine. Purposeful exertion.\n\nWork without performance pressure.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/farm.jpeg",
          imageAlt: " Ground Work ",
          area: "Variable",
          capacity: "Small groups",
          icon: "agriculture",
          category: "Land Work",
          href: "/venue#intimate",
        },
        {
          title: "Practice Platform",
          description: "Stone deck under a neem tree overlooking open water.\n\nUsed for: Music rehearsal. Artistic practice. Sun exposure. Solo training. Focused repetition.\n\nSkill deepens when environment is undisturbed.",
          image: [
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/pp1.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/pp2.png",
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/pp3.png"
          ],
          imageAlt: "Practice platform",
          area: "300 sqft",
          capacity: "5 ppl",
          icon: "music_note",
          category: "Creative Practice",
          href: "/venue#intimate",
        },
        {
          title: "Silent Board Games",
          description: "Analog tabletop games designed for low-verbal interaction.\n\nUsed for: Strategic thinking. Pattern recognition. Cooperative play. Social presence without performance.\n\nEngagement without volume.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/boardgame.png",
          imageAlt: "Silent board games",
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
      usedFor: ["Inquiry sessions", "Intentional dialogue", "Quiet collaboration", "Shared silence"],
      closingText: "",
      venues: [
        {
          title: "Design Dome",
          description: "Architectural installation near the entrance.\n\nUsed for: Identity examination. Role suspension. Personal release. Transitional awareness.\n\nEntry marks a shift in self-perception.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Assembly/designdome.png",
          imageAlt: "Design dome",
          area: "2,000 sqft",
          capacity: "50 ppl",
          icon: "architecture",
          category: "Gathering Space",
          href: "/venue#creative",
        },
        {
          title: "Library Lounge",
          description: "Multi-purpose enclosed hall adaptable across cycles.\n\nUsed for: Morning meditation. Focused co-working. Writing workshops. Curated exhibitions. Structured group inquiry.\n\nThe space adapts. The silence remains constant.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Assembly/library.png",
          imageAlt: "Library lounge",
          area: "800 sqft",
          capacity: "20 ppl",
          icon: "local_library",
          category: "Multi-Purpose Hall",
          href: "/venue#creative",
        },
        {
          title: "Front Lawn",
          description: "Open grass field adjacent to the main structure.\n\nUsed for: Grounding. Informal sitting. Open-air screenings. Guided outdoor engagement. Unstructured picnics.\n\nHorizontal space reduces social pressure.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Assembly/lawn.jpeg",
          imageAlt: "Front lawn",
          area: "5,000 sqft",
          capacity: "100 ppl",
          icon: "grass",
          category: "Open Space",
          href: "/venue#creative",
        },
        {
          title: "Courtyard",
          description: "Open grass field adjacent to the main structure.\n\nUsed for: Grounding. Informal sitting. Open-air screenings. Guided outdoor engagement. Unstructured pause.\n\nHorizontal space reduces social pressure.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Assembly/courtyard.png",
          imageAlt: "Courtyard",
          area: "1,500 sqft",
          capacity: "40 ppl",
          icon: "yard",
          category: "Courtyard",
          href: "/venue#creative",
        },
        {
          title: "Signal Deck",
          description: "Elevated semi-private outdoor cabins designed for limited external communication.\n\nUsed for: Essential calls. Scheduled briefings. Small-group dialogue (2–4 people). Controlled re-entry into external signal.\n\nCommunication is contained. Not expanded.\n\nThis is not a social space. It is a boundary space.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Practice/treehouse.jpeg",
          imageAlt: "Signal deck",
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
      usedFor: ["Identity examination", "Personal release", "Perspective shift"],
      closingText: "",
      venues: [
        {
          title: "Identity Cemetery",
          description: "Circular threshold structure at entry/exit.\n\nUsed for: Psychological transition. Symbolic crossing. Arrival awareness. Exit reflection.\n\nThe person entering and leaving may not be identical.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/cemetary.jpg",
          imageAlt: "Identity cemetery",
          area: "2,000 sqft",
          capacity: "30 ppl",
          icon: "door_front",
          category: "Threshold",
          href: "/venue#living",
        },
        {
          title: "Moon Gate",
          description: "Boundary installation referencing perceived reality.\n\nUsed for: Perspective inquiry. Assumption testing. Cognitive interruption. Awareness of constructed identity.\n\nInterpretation is personal.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/moongate.png",
          imageAlt: "Moon gate",
          area: "N/A",
          capacity: "N/A",
          icon: "circle",
          category: "Symbolic Structure",
          href: "/venue#living",
        },
        {
          title: "Truman's Wall",
          description: "Sculptural installation at entry.\n\nUsed for: Reflective pause. Cognitive priming. Symbolic confrontation. Intellectual stillness.\n\nThought is foregrounded before entry.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/trumanwall.png",
          imageAlt: "Truman's wall",
          area: "N/A",
          capacity: "Unlimited",
          icon: "wall",
          category: "Installation",
          href: "/venue#living",
        },
        {
          title: "Thinking Man",
          description: "Perimeter platform facing open landscape.\n\nUsed for: Solitude. Sunset viewing. Boundary awareness. Spatial reset.\n\nStanding at the edge clarifies scale.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/thinkingman.png",
          imageAlt: "Thinking man sculpture",
          area: "N/A",
          capacity: "1 ppl",
          icon: "person",
          category: "Contemplation Point",
          href: "/venue#living",
        },
        {
          title: "Edgeless Gallery",
          description: "Perimeter gallery facing open landscape.\n\nUsed for: Solitude. Sunset viewing. Boundary awareness. Spatial reset.\n\nStanding at the edge clarifies scale.",
          image:
            "https://lidbucketnew.s3.ap-south-1.amazonaws.com/TheSilentClub/Symbolic/edgelessgallery.jpeg",
          imageAlt: "Edgeless gallery",
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
