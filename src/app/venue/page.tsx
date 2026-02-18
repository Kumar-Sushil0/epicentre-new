"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VenueHero from "../components/venue/VenueHero";
import VenueSection from "../components/venue/VenueSection";

export default function VenuePage() {
  const [expandedSection, setExpandedSection] = useState<string>("wildlife");
  const [viewModes, setViewModes] = useState<Record<string, 'grid' | 'carousel'>>({
    wildlife: 'grid',
    collective: 'grid',
    food: 'grid',
    intimate: 'grid',
    creative: 'grid',
    living: 'grid',
  });
  const [carouselIndices, setCarouselIndices] = useState<Record<string, number>>({
    wildlife: 0,
    collective: 0,
    food: 0,
    intimate: 0,
    creative: 0,
    living: 0,
  });

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

  const setViewMode = (id: string, mode: 'grid' | 'carousel') => {
    setViewModes(prev => ({ ...prev, [id]: mode }));
  };

  const setCarouselIndex = (id: string, index: number) => {
    setCarouselIndices(prev => ({ ...prev, [id]: index }));
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
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYE7uQzqCPEUSx1PzSQvaNJcQur_MMIW0hlWNehK-OFDueDgUN7lYbLrTKCcFHpwgAgnc1VWNFhHTq7N4UITYxKAY3BjPsfNFQ8jxpqM0WaY0-2XQWEkef1LVUzXK83qSQa-FlCnmdCMui0DUfT7mqUeme6SDTsdQjp30zLpzdY2kJ9oMfEa6grHmfNxFPNz31Mt-_im9r1Li8DG-T0vHYjL48QPNl9dFL4STTKEs-C-hDp9lugle-UDaVx5AhapFJFnFBBWHVh_P",
          imageAlt: "Forest safari trail",
          area: "3 km trail",
          capacity: "20 ppl",
          href: "/venue#wildlife",
        },
        {
          title: "Bird Watching",
          description: "Designated quiet observation areas near natural habitats.\n\nUsed for: Sustained attention. Pattern recognition. Auditory sensitivity. Stillness training.\n\nObservation without interference sharpens perception.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAZvB7dROLa44DAlcGJoRtqzbbwxWyyCNe3fUBZfM8D6c5CKq0WdORTws7ezr9vbFawAbXzrE-ZZSWYt3CHMyZq8l2blVHLd26TEQEzP4EVqAcZpKA39A84XoD9heaUCra8vcMxPcZJ9mOC5sCQpEkOd5L-H39YTm7hAH7kI0aiNS69razeZ3jCiDSmfFZ2v1_VJ34aTIw6bRX6MSvShGkI0mC3TUfjQ2ABus_MXRX_adQiqDmsLBTmQOyBVgvdnPeJWO5uCKQXJXqO",
          imageAlt: "Bird watching area",
          area: "500 sqft",
          capacity: "15 ppl",
          href: "/venue#wildlife",
        },
        {
          title: "Boat Joy Rides",
          description: "Slow-paced lake movement along open water.\n\nUsed for: Visual horizon reset. Rhythmic motion. Emotional settling. Perspective shift.\n\nWater environments reduce sensory fragmentation.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCqvrjbiNk16kuSjOdYFpXtempYrXm89EALbe3XqRvFXP-BVXZZ0QkKKO0gQDRqUVh5-YEmfUm0OlduKC5QSXRss6wVYioG8pDrHONJXmskFVQGB2irQ8UQxme2xhF2OZpnsOXmPVqNzONG7VwP7WO39Qv6Es_HlHnrBgvQ6g0X9cH3g8wbjKLvr8HV1-Md_re2ianXRvgviiPJukMIOWmjIIT_Ymw48XJieYgEQvGfNDxo_QUZjknlWvaLkih4WkYK55Cd3UHhwyiR",
          imageAlt: "Boat joy rides on lake",
          area: "Lake access",
          capacity: "6 ppl",
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
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBZLscLeqaXM3WeLLKdo4n6I_KPLwimBzpxj6FfWhA0Tj1nnnNlUWpcX2O5r_A_Znd9KQKhJl4MmgBBlrnwhBV6OyALMYwVuWNx2_apOvsOeDznh9p1N6BXQvYnHbaGcQ6QpaDXxBUrpQbPtjMMsENDJEf1p9sOXdl4NJSmjGH0P5bovB_Tqkca_-lxSw1eQYDCYob6sCjcK3pC77zVRDrj9az7_buyOh-Od1xhkayKnENL_0B5Jr_9nk4OBnZJuBdJjJDliAp0Fgiu",
          imageAlt: "Private room",
          area: "King-size bed",
          capacity: "1-2 ppl",
          href: "/venue#collective",
        },
        {
          title: "Dark Room",
          description: "Enclosed personal sleeping space with controlled light and sound.\n\nUsed for: Deep rest. Sensory withdrawal. Personal integration. Extended silence.\n\nSleep is protected. Interruption is minimized.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDihuxI523H6STIOJTiusyX823EQRHnvGdgm92Oy3HeVG1rev-PWuFIVtRhFzrIx-Iv2iQYjDzhZWjoJdtvf3rJ1jA4iQzvRD3mongIDOtMmi5Kwm3Q4MKRqr7WQH3zKIZpyiKKy3sKokFdJJBoK3z15gz53cpyFE85NnKrpg7XLsWKLELWgbnpyPP7nTAKt8Ten5QZhlUTKPRpi3G6i-cM1bVOxi6YPhrz4ECpxLkHU4RWjYCb7Az6gqLPaK006r-vCMKZgJHbIT1z",
          imageAlt: "Dark room",
          area: "Total isolation",
          capacity: "1 ppl",
          href: "/venue#collective",
        },
        {
          title: "Shared Dorm",
          description: "Structured shared sleeping space with quiet norms.\n\nUsed for: Collective silence. Budget stays. Group cycles. Rhythmic routine.\n\nShared space, protected quiet.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBCDrqyukAeIBVkk_NnncUTeloGHka4z0ECUb4BGbAi5jJx3_xTnVLBDv4EzBQw5kQz98tZl5wRRY-siM391ePc0E5p_MsFnTHBy5Tsexozuse2lfrz1b7vwSm0HjzlSh5E3HhytzT3g2VUsDK-PGbw5OSWqu2JkpCh3VvlFv3B-S2Gx1cPYABLS029cK0k32Ro8U-1SblTNiPubHq3SQnGrDqJgN0Hd08cAm7C4l98FmWe2cbpL958B97C3GQeQ90L9So1ATTgc2do",
          imageAlt: "Shared dormitory",
          area: "Shared space",
          capacity: "4-6 ppl",
          href: "/venue#collective",
        },
        {
          title: "Minimalist Tents",
          description: "Outdoor sleeping structures with minimal artificial input.\n\nUsed for: Ground connection. Environmental immersion. Sensory simplification. Early sleep cycles.\n\nCloser to land. Fewer barriers.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA3hCSIq6YyLJUHqpGr2Wg4gaAXkeGif46iSm3qp5DZGo6DLVYKmymc1_N1DFd_OGO4XEYu8bRJSWkR2BnNSraPdSo1n5NWsKGsIqvAuOB3rs6iwfPTcNlDSmNR9uXqxpyhuBNCgBFEe2dWcUZQIzOOUrcc7zSUe22-rYCe0u2CSw2ub38Zg4Sw1n2Nr3AYkEgcKAidHJ-0Yp5a5-Dxl8gKhNVSwsHaMgLBsiwztqYinoq54X1xwwJQKu4WU2NHYHk6fAZIOsbz7ug4",
          imageAlt: "Minimalist camping tents",
          area: "Canvas tent",
          capacity: "2 ppl",
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
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYE7uQzqCPEUSx1PzSQvaNJcQur_MMIW0hlWNehK-OFDueDgUN7lYbLrTKCcFHpwgAgnc1VWNFhHTq7N4UITYxKAY3BjPsfNFQ8jxpqM0WaY0-2XQWEkef1LVUzXK83qSQa-FlCnmdCMui0DUfT7mqUeme6SDTsdQjp30zLpzdY2kJ9oMfEa6grHmfNxFPNz31Mt-_im9r1Li8DG-T0vHYjL48QPNl9dFL4STTKEs-C-hDp9lugle-UDaVx5AhapFJFnFBBWHVh_P",
          imageAlt: "Satvik home food",
          area: "Dining hall",
          capacity: "30 ppl",
          href: "/venue#food",
        },
        {
          title: "Salads, Smoothies & Sandwiches",
          description: "Light meal options focused on simplicity and freshness.\n\nWed & Fri: Midday reset. Low digestive load. Active cycles. Clean nutrition.\n\nDesigned to sustain focus.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAZvB7dROLa44DAlcGJoRtqzbbwxWyyCNe3fUBZfM8D6c5CKq0WdORTws7ezr9vbFawAbXzrE-ZZSWYt3CHMyZq8l2blVHLd26TEQEzP4EVqAcZpKA39A84XoD9heaUCra8vcMxPcZJ9mOC5sCQpEkOd5L-H39YTm7hAH7kI0aiNS69razeZ3jCiDSmfFZ2v1_VJ34aTIw6bRX6MSvShGkI0mC3TUfjQ2ABus_MXRX_adQiqDmsLBTmQOyBVgvdnPeJWO5uCKQXJXqO",
          imageAlt: "Salads, smoothies and sandwiches",
          area: "Kitchen",
          capacity: "As needed",
          href: "/venue#food",
        },
        {
          title: "Pizza, Barbeque & Sushi",
          description: "Occasional communal meals prepared intentionally.\n\nAs required: Shared gathering. Social bonding. Celebration within structure. Moderated indulgence.\n\nEven stimulation is regulated.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCqvrjbiNk16kuSjOdYFpXtempYrXm89EALbe3XqRvFXP-BVXZZ0QkKKO0gQDRqUVh5-YEmfUm0OlduKC5QSXRss6wVYioG8pDrHONJXmskFVQGB2irQ8UQxme2xhF2OZpnsOXmPVqNzONG7VwP7WO39Qv6Es_HlHnrBgvQ6g0X9cH3g8wbjKLvr8HV1-Md_re2ianXRvgviiPJukMIOWmjIIT_Ymw48XJieYgEQvGfNDxo_QUZjknlWvaLkih4WkYK55Cd3UHhwyiR",
          imageAlt: "Pizza, barbecue and sushi",
          area: "Outdoor area",
          capacity: "40 ppl",
          href: "/venue#food",
        },
        {
          title: "Self-Serve Pantry",
          description: "Designated kitchen access for simple personal preparation.\n\nUsed for: Tea and coffee. Light snacks. Between-meal regulation. Dietary flexibility.\n\nAutonomy within rhythm.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYE7uQzqCPEUSx1PzSQvaNJcQur_MMIW0hlWNehK-OFDueDgUN7lYbLrTKCcFHpwgAgnc1VWNFhHTq7N4UITYxKAY3BjPsfNFQ8jxpqM0WaY0-2XQWEkef1LVUzXK83qSQa-FlCnmdCMui0DUfT7mqUeme6SDTsdQjp30zLpzdY2kJ9oMfEa6grHmfNxFPNz31Mt-_im9r1Li8DG-T0vHYjL48QPNl9dFL4STTKEs-C-hDp9lugle-UDaVx5AhapFJFnFBBWHVh_P",
          imageAlt: "Self-serve pantry",
          area: "Pantry",
          capacity: "Self-serve",
          href: "/venue#food",
        },
        {
          title: "Outdoor Kitchen",
          description: "Open-air cooking space used for occasional communal meals and curated events.\n\nUsed for: Structured shared cooking. Small-group gatherings. Seasonal meals. Experimental dining formats.\n\nFood can gather people without accelerating them.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAZvB7dROLa44DAlcGJoRtqzbbwxWyyCNe3fUBZfM8D6c5CKq0WdORTws7ezr9vbFawAbXzrE-ZZSWYt3CHMyZq8l2blVHLd26TEQEzP4EVqAcZpKA39A84XoD9heaUCra8vcMxPcZJ9mOC5sCQpEkOd5L-H39YTm7hAH7kI0aiNS69razeZ3jCiDSmfFZ2v1_VJ34aTIw6bRX6MSvShGkI0mC3TUfjQ2ABus_MXRX_adQiqDmsLBTmQOyBVgvdnPeJWO5uCKQXJXqO",
          imageAlt: "Outdoor kitchen",
          area: "Outdoor",
          capacity: "20 ppl",
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
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAUmMeozchs1cFu8aFeLhWXOwDbDtuJjTtH2wY7Utd_8BbWJIUCVKdnIhdRttSt21O0oq81EB0Tpux9IxAj0bRG2wpJ7BEBG53n-KfzfMxULjAdsNm_-PjptGl7jrEZMuBFhL2BHQKWoJF5pZ_nqx4HQ6L_s_DDpixcQgp5pWjX2BiaewbpJXkJZIqdii-cE7d0TytZtMM-_gTf1vJB5NiSb6_1YFxgxyZo3zc5HggGew9n5WJ7ixbHaC2nkf3QBgDyjWBur8c6Q3YY",
          imageAlt: "Outdoor gym equipment",
          area: "1,200 sqft",
          capacity: "15 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Sports Court",
          description: "Multi-use court for competitive or cooperative play.\n\nUsed for: Energy release. Group engagement. Motor coordination. Active recovery.\n\nMovement restores mental steadiness.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB1bQeVYi5t99mqZwnYZNIGyR0rLKfWde_Jf-Jztpirlwg03aeOZMOuoJNiyeE1-5iPGe0Ns9W1ZNli1-iCNNYbks1AVFvqjSD8eao6APxgb9CbTnUpr4SU1UpfatVIIP0RGbAYhlwyeygkgSjejI83Cp0rg-NvHTBwdv8z3AAMbWx4j0NwdsMn0jR4XdfvFu4TjCxgLnd0DmlQg_lLb5-EwYB9D-R7uCjdCCQPuOKN8bBlB71sXXRluP8AEvGuy5ynpUi93KAQA5Me",
          imageAlt: "Sports court",
          area: "3,000 sqft",
          capacity: "20 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Contrast Recovery",
          description: "Hot and cold exposure environments.\n\nUsed for: Circulation improvement. Inflammation reduction. Nervous system recalibration. Recovery cycles.\n\nPhysiological reset through contrast.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA1mmt0qvHp6AVqZz4m_RcIw0R7vzQyoaZotlUZwO2iCHXzznLOmJsXMuaRTIV6hkBYHnnz2p_qPaEcr4fO7lo8fl-BvCwyEpcwoaQaSu28a00763b7lSM4q6VPF78E81GzIH2hl_7kH47YfGxkcmeIB3vsjOoFOSuyf_MAV3dwl0BzfkNvoyTUox_zkIP5G8_TxJb9v948nU6UoMa7olkeZQXWF8ptnYPJ35IvBs14PU7MfLtTwKmEsUBiuxLKokPgrESII_8-3Gvk",
          imageAlt: "Contrast recovery facilities",
          area: "800 sqft",
          capacity: "8 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Cycles",
          description: "Manual & Motorized bicycles for on-land movement.\n\nUsed for: Cardio training. Solo reflection. Exploratory motion. Breath regulation.\n\nRepetition stabilizes thought.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDdPU42Ez8j_ViABpU2L0iJaz9UDHRlY2DZdnogL5KWqQ3d0AQudq_b1HHTPTidCNifjh-Xyh0wdBKjxzEa2Rz308cDJHkohvs71lo1VZHCQDlvq8UHV_Un0bGn3qAPPbUdO7PCGUuOAGdbnMTwq0tPr1fz75I-zlSVw-8L1kUQuu2IDOXSkppm1huPSOCfKxvS7WYUgBVtFseyibb6-v7W-emGhnvVKev7yVttCqm8d5bcoBjG1LfSmacru9m4yDKqSkekZOXZIElM",
          imageAlt: "Bicycles",
          area: "N/A",
          capacity: "Multiple",
          href: "/venue#intimate",
        },
        {
          title: "Kayaks",
          description: "Water-based manual rowing equipment.\n\nUsed for: Upper-body engagement. Rhythmic motion. Horizon focus. Controlled isolation.\n\nSteady motion supports steady thinking.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5OVdnhPpsRfB3RpMuYF5je8gUD4m4rTcw4MUPI4UenAZxNfGlntk6Wdn3X6nomlCoHUe15ry529-UeZWczD1MgLfGckKf-pomE8gWaRAwGvAjsGEqAezgkR2BU9J1fTIR3B8q1m1r3QKi9JK4pZ4__3tokNCXaP7vZ9K920OjqyhtTB-AV5FfSvQyek79kmeBsnVfasZEEg7zPY84AHyLbMoSiD7GO-xBcqNRRDcfTAIgxu3eDDOX8kLx7jsPzoLSKkzRNnGvxCxs",
          imageAlt: "Kayaks on water",
          area: "N/A",
          capacity: "Multiple",
          href: "/venue#intimate",
        },
        {
          title: "Yoga Loft",
          description: "Quiet outdoor loft for guided or self-directed practice.\n\nUsed for: Breath regulation. Postural reset. Focus training. Group stillness.\n\nStillness is trained, not assumed.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5OVdnhPpsRfB3RpMuYF5je8gUD4m4rTcw4MUPI4UenAZxNfGlntk6Wdn3X6nomlCoHUe15ry529-UeZWczD1MgLfGckKf-pomE8gWaRAwGvAjsGEqAezgkR2BU9J1fTIR3B8q1m1r3QKi9JK4pZ4__3tokNCXaP7vZ9K920OjqyhtTB-AV5FfSvQyek79kmeBsnVfasZEEg7zPY84AHyLbMoSiD7GO-xBcqNRRDcfTAIgxu3eDDOX8kLx7jsPzoLSKkzRNnGvxCxs",
          imageAlt: "Yoga loft",
          area: "2,000 sqft",
          capacity: "30 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Tree House",
          description: "Elevated solo structure with desk and minimal amenities.\n\nUsed for: Writing. Focused thinking. Creative work. Quiet isolation.\n\nWithdrawal within withdrawal.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAb9mmkF4lszIBmPkZntm6jACbA19rKcTuCe98ggy4bV2CA-7aUQQsQnoIULRyh-nZBZwP2z19ziis6nHIQ8iYigGapt_wwOfvkfcPdosm6GFVzv1j18fpfOl5Q-zRaX_gZT0TSsGWFHkZfPzSPwZaLHcM7N5EvZa560-IFh-BqkItS-rQe15TeKXP6MhKpEEshytL7-yB07jIwkRQoGTQEG9TxElWs4HEz9npvO7PB_Sghcc9VDVoD2Z6UUzNvtve4Dk9MUTZhy3Qc",
          imageAlt: "Tree house",
          area: "100 sqft",
          capacity: "1 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Zen Garden",
          description: "Minimalist stone and sand installation.\n\nUsed for: Visual stillness. Pattern contemplation. Micro-focus training. Grounded presence.\n\nAttention stabilizes through repetition.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBL9FDH38P4jAq9NP_nPOXevptmXg_B10pEzBAElZIG_yMvoDQ7wWvnd-XVkILqXI4l6g4895NNbB8wWWUUWJ6ZQFnHEzxc8TpUE-fm1iwZLYj-4CAyKj_2n00AQdBpNmmSGRmPg2lFixql7TM11vckMkLeD2wZEX-Shq21J8xCUXTCqN2WpL3QFCcKQlBYHYbdMS5rYkSWyybh8NT_PoIePU8E9xiomDFCaaxmZKmRa9Kqg-pZ9pKTQnj39XDcHAqxkcn6RM2AmwjK",
          imageAlt: "Zen garden",
          area: "600 sqft",
          capacity: "5 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Farm Work",
          description: "Hands-on agricultural tasks and land maintenance.\n\nUsed for: Physical labor. Grounding work. Rhythmic routine. Purposeful exertion.\n\nWork without performance pressure.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYE7uQzqCPEUSx1PzSQvaNJcQur_MMIW0hlWNehK-OFDueDgUN7lYbLrTKCcFHpwgAgnc1VWNFhHTq7N4UITYxKAY3BjPsfNFQ8jxpqM0WaY0-2XQWEkef1LVUzXK83qSQa-FlCnmdCMui0DUfT7mqUeme6SDTsdQjp30zLpzdY2kJ9oMfEa6grHmfNxFPNz31Mt-_im9r1Li8DG-T0vHYjL48QPNl9dFL4STTKEs-C-hDp9lugle-UDaVx5AhapFJFnFBBWHVh_P",
          imageAlt: "Farm work",
          area: "Variable",
          capacity: "Small groups",
          href: "/venue#intimate",
        },
        {
          title: "Practice Platform",
          description: "Stone deck under a neem tree overlooking open water.\n\nUsed for: Music rehearsal. Artistic practice. Sun exposure. Solo training. Focused repetition.\n\nSkill deepens when environment is undisturbed.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBL9FDH38P4jAq9NP_nPOXevptmXg_B10pEzBAElZIG_yMvoDQ7wWvnd-XVkILqXI4l6g4895NNbB8wWWUUWJ6ZQFnHEzxc8TpUE-fm1iwZLYj-4CAyKj_2n00AQdBpNmmSGRmPg2lFixql7TM11vckMkLeD2wZEX-Shq21J8xCUXTCqN2WpL3QFCcKQlBYHYbdMS5rYkSWyybh8NT_PoIePU8E9xiomDFCaaxmZKmRa9Kqg-pZ9pKTQnj39XDcHAqxkcn6RM2AmwjK",
          imageAlt: "Practice platform",
          area: "300 sqft",
          capacity: "5 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Silent Board Games",
          description: "Analog tabletop games designed for low-verbal interaction.\n\nUsed for: Strategic thinking. Pattern recognition. Cooperative play. Social presence without performance.\n\nEngagement without volume.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCFZaWpuizZ4QgUWBdBBiqY2HvL5aFuSlaUx5mY1R2rZ8OrP11lmmWvGi3IqeMI2x-8nmKMYluhddFzzUFEIkL5e2coZExuj7bFnYTVX2rPvylVpkwqCFoEY6iiSTc9dQKDPjlNd12npaC8II_w1-H2qd_VPUyK6fTS7FdMi3rRkVbpZyZE_BpX6HJJxTkK52VgbrnZ-t4CWbmXqtWxkWeHRUkRbNpogrtl3I62yLEoBU-npaoqVgKezuwCSOHFV4EwqMDNiUnfsUzh",
          imageAlt: "Silent board games",
          area: "Indoor",
          capacity: "4-8 ppl",
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
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDIiuRv3LHoCdwbXKNrpkzohoWX2MvwTOZ5lXr7ZJOJN4rtUB6lJ1qlZ-u2zCajLTcMLZTX15sYDB62IDqshV46VoFyn32DbTS-R6PeTU_3C2RKrUVrmxqRQFJ17pMOdIiaIuia9LpHEDrdBNfLcpNR9wrqiXEMTvyr0UCkr7BGsi72y02LS1hc3000i0Cqzbv_hYtveNrZXjbh8_Z4XfTOKoy3Y2rzGtgkTsddDMIibaa4Ytcg7j-IKPvRCPYwA_xkBv-U9a_tUlhb",
          imageAlt: "Design dome",
          area: "2,000 sqft",
          capacity: "50 ppl",
          href: "/venue#creative",
        },
        {
          title: "Library Lounge",
          description: "Multi-purpose enclosed hall adaptable across cycles.\n\nUsed for: Morning meditation. Focused co-working. Writing workshops. Curated exhibitions. Structured group inquiry.\n\nThe space adapts. The silence remains constant.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCFZaWpuizZ4QgUWBdBBiqY2HvL5aFuSlaUx5mY1R2rZ8OrP11lmmWvGi3IqeMI2x-8nmKMYluhddFzzUFEIkL5e2coZExuj7bFnYTVX2rPvylVpkwqCFoEY6iiSTc9dQKDPjlNd12npaC8II_w1-H2qd_VPUyK6fTS7FdMi3rRkVbpZyZE_BpX6HJJxTkK52VgbrnZ-t4CWbmXqtWxkWeHRUkRbNpogrtl3I62yLEoBU-npaoqVgKezuwCSOHFV4EwqMDNiUnfsUzh",
          imageAlt: "Library lounge",
          area: "800 sqft",
          capacity: "20 ppl",
          href: "/venue#creative",
        },
        {
          title: "Front Lawn",
          description: "Open grass field adjacent to the main structure.\n\nUsed for: Grounding. Informal sitting. Open-air screenings. Guided outdoor engagement. Unstructured picnics.\n\nHorizontal space reduces social pressure.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDLkKCbOoNiCh5GCaXKpDhhE61EuBWVMqfoDx1x_wyCJoA7PPkZmboVTkSD_1yjEjKPL0U6yCi1y95lu8MpShSApYpvBa-kH7le5gEg7sscNGWNucdUgeA-mCHvnuQyiiaKm7_dWnjuEJGruUnNYnReX02GjXcgpvs3zQENCaOm-XM1ooU-KamYXeXfrToETA6qvjaBp6TU6CG9s4sapxcYre2RGmVKISe7fG490J8Ru1kUvmvnvTo5WV1WDN6BWR-ijXSNkFgNnIM9",
          imageAlt: "Front lawn",
          area: "5,000 sqft",
          capacity: "100 ppl",
          href: "/venue#creative",
        },
        {
          title: "Courtyard",
          description: "Open grass field adjacent to the main structure.\n\nUsed for: Grounding. Informal sitting. Open-air screenings. Guided outdoor engagement. Unstructured pause.\n\nHorizontal space reduces social pressure.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDLkKCbOoNiCh5GCaXKpDhhE61EuBWVMqfoDx1x_wyCJoA7PPkZmboVTkSD_1yjEjKPL0U6yCi1y95lu8MpShSApYpvBa-kH7le5gEg7sscNGWNucdUgeA-mCHvnuQyiiaKm7_dWnjuEJGruUnNYnReX02GjXcgpvs3zQENCaOm-XM1ooU-KamYXeXfrToETA6qvjaBp6TU6CG9s4sapxcYre2RGmVKISe7fG490J8Ru1kUvmvnvTo5WV1WDN6BWR-ijXSNkFgNnIM9",
          imageAlt: "Courtyard",
          area: "1,500 sqft",
          capacity: "40 ppl",
          href: "/venue#creative",
        },
        {
          title: "Signal Deck",
          description: "Elevated semi-private outdoor cabins designed for limited external communication.\n\nUsed for: Essential calls. Scheduled briefings. Small-group dialogue (2–4 people). Controlled re-entry into external signal.\n\nCommunication is contained. Not expanded.\n\nThis is not a social space. It is a boundary space.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBL9FDH38P4jAq9NP_nPOXevptmXg_B10pEzBAElZIG_yMvoDQ7wWvnd-XVkILqXI4l6g4895NNbB8wWWUUWJ6ZQFnHEzxc8TpUE-fm1iwZLYj-4CAyKj_2n00AQdBpNmmSGRmPg2lFixql7TM11vckMkLeD2wZEX-Shq21J8xCUXTCqN2WpL3QFCcKQlBYHYbdMS5rYkSWyybh8NT_PoIePU8E9xiomDFCaaxmZKmRa9Kqg-pZ9pKTQnj39XDcHAqxkcn6RM2AmwjK",
          imageAlt: "Signal deck",
          area: "Multiple cabins",
          capacity: "2-4 ppl",
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
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYE7uQzqCPEUSx1PzSQvaNJcQur_MMIW0hlWNehK-OFDueDgUN7lYbLrTKCcFHpwgAgnc1VWNFhHTq7N4UITYxKAY3BjPsfNFQ8jxpqM0WaY0-2XQWEkef1LVUzXK83qSQa-FlCnmdCMui0DUfT7mqUeme6SDTsdQjp30zLpzdY2kJ9oMfEa6grHmfNxFPNz31Mt-_im9r1Li8DG-T0vHYjL48QPNl9dFL4STTKEs-C-hDp9lugle-UDaVx5AhapFJFnFBBWHVh_P",
          imageAlt: "Identity cemetery",
          area: "2,000 sqft",
          capacity: "30 ppl",
          href: "/venue#living",
        },
        {
          title: "Moon Gate",
          description: "Boundary installation referencing perceived reality.\n\nUsed for: Perspective inquiry. Assumption testing. Cognitive interruption. Awareness of constructed identity.\n\nInterpretation is personal.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAZvB7dROLa44DAlcGJoRtqzbbwxWyyCNe3fUBZfM8D6c5CKq0WdORTws7ezr9vbFawAbXzrE-ZZSWYt3CHMyZq8l2blVHLd26TEQEzP4EVqAcZpKA39A84XoD9heaUCra8vcMxPcZJ9mOC5sCQpEkOd5L-H39YTm7hAH7kI0aiNS69razeZ3jCiDSmfFZ2v1_VJ34aTIw6bRX6MSvShGkI0mC3TUfjQ2ABus_MXRX_adQiqDmsLBTmQOyBVgvdnPeJWO5uCKQXJXqO",
          imageAlt: "Moon gate",
          area: "N/A",
          capacity: "N/A",
          href: "/venue#living",
        },
        {
          title: "Truman's Wall",
          description: "Sculptural installation at entry.\n\nUsed for: Reflective pause. Cognitive priming. Symbolic confrontation. Intellectual stillness.\n\nThought is foregrounded before entry.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCqvrjbiNk16kuSjOdYFpXtempYrXm89EALbe3XqRvFXP-BVXZZ0QkKKO0gQDRqUVh5-YEmfUm0OlduKC5QSXRss6wVYioG8pDrHONJXmskFVQGB2irQ8UQxme2xhF2OZpnsOXmPVqNzONG7VwP7WO39Qv6Es_HlHnrBgvQ6g0X9cH3g8wbjKLvr8HV1-Md_re2ianXRvgviiPJukMIOWmjIIT_Ymw48XJieYgEQvGfNDxo_QUZjknlWvaLkih4WkYK55Cd3UHhwyiR",
          imageAlt: "Truman's wall",
          area: "N/A",
          capacity: "Unlimited",
          href: "/venue#living",
        },
        {
          title: "Thinking Man",
          description: "Perimeter platform facing open landscape.\n\nUsed for: Solitude. Sunset viewing. Boundary awareness. Spatial reset.\n\nStanding at the edge clarifies scale.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCCrs3CWaQXPNPCzn-2Yu6zw3_BhwMdFIZ3V6lL8vKk_YXGKO3hGxPc7NzGcZU8MniT56_7aDMKLp8a3UlZjiZ0qqfBBBqi7AfWcDKlssA9PsirRmLIkbz5Cjz2vzwlerlVc1PKWOC7D3L68AjvDABGMpGYKfnUbMMbqpi5e_Z4tu0NBqrm7APkJgbLU7-23jUHGR2F0uSNWUE0XjXpEX1HWiQKE0a4IhN81qOs-cgFvTWhCofrZrGUKz90lh7sfbRzy5NgB6xLmGLc",
          imageAlt: "Thinking man sculpture",
          area: "N/A",
          capacity: "1 ppl",
          href: "/venue#living",
        },
        {
          title: "Edgeless Gallery",
          description: "Perimeter gallery facing open landscape.\n\nUsed for: Solitude. Sunset viewing. Boundary awareness. Spatial reset.\n\nStanding at the edge clarifies scale.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBL9FDH38P4jAq9NP_nPOXevptmXg_B10pEzBAElZIG_yMvoDQ7wWvnd-XVkILqXI4l6g4895NNbB8wWWUUWJ6ZQFnHEzxc8TpUE-fm1iwZLYj-4CAyKj_2n00AQdBpNmmSGRmPg2lFixql7TM11vckMkLeD2wZEX-Shq21J8xCUXTCqN2WpL3QFCcKQlBYHYbdMS5rYkSWyybh8NT_PoIePU8E9xiomDFCaaxmZKmRa9Kqg-pZ9pKTQnj39XDcHAqxkcn6RM2AmwjK",
          imageAlt: "Edgeless gallery",
          area: "Perimeter",
          capacity: "Small groups",
          href: "/venue#living",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 ">
      <Header />
      <VenueHero />

      <div className="w-full px-16 py-12">
        {venueCategories.map((category) => (
          <section 
            key={category.id} 
            className={`transition-all duration-300 ${expandedSection === category.id ? 'mb-24' : 'mb-6'}`}
          >
            <VenueSection 
              {...category} 
              expanded={expandedSection === category.id}
              onToggle={() => toggleSection(category.id)}
              viewMode={viewModes[category.id]}
              onViewModeChange={(mode) => setViewMode(category.id, mode)}
              carouselIndex={carouselIndices[category.id]}
              onCarouselIndexChange={(index) => setCarouselIndex(category.id, index)}
            />
          </section>
        ))}
      </div>
      <Footer />
    </main>
  );
}
