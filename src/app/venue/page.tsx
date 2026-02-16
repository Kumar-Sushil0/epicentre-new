"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VenueHero from "../components/venue/VenueHero";
import VenueCategoryNav from "../components/venue/VenueCategoryNav";
import VenueSection from "../components/venue/VenueSection";

export default function VenuePage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    collective: true,
    food: false,
    intimate: false,
    physical: false,
    creative: false,
    living: false,
    wildlife: false,
  });

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const venueCategories = [
    {
      id: "collective",
      title: "Quarters",
      icon: "bed",
      introText: "Living environments for restoration and sleep.",
      usedFor: "Deep rest. Extended silence. Sensory withdrawal. Private integration.",
      closingText: "Sleep is protected. Interruption is minimized.",
      venues: [
        {
          title: "Private Room",
          description: "Living environments for restoration and sleep.\n\nUsed for: Deep rest. Extended silence. Sensory withdrawal. Private integration.\n\nSleep is protected. Interruption is minimized.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBZLscLeqaXM3WeLLKdo4n6I_KPLwimBzpxj6FfWhA0Tj1nnnNlUWpcX2O5r_A_Znd9KQKhJl4MmgBBlrnwhBV6OyALMYwVuWNx2_apOvsOeDznh9p1N6BXQvYnHbaGcQ6QpaDXxBUrpQbPtjMMsENDJEf1p9sOXdl4NJSmjGH0P5bovB_Tqkca_-lxSw1eQYDCYob6sCjcK3pC77zVRDrj9az7_buyOh-Od1xhkayKnENL_0B5Jr_9nk4OBnZJuBdJjJDliAp0Fgiu",
          imageAlt: "Private sanctuary room",
          area: "King-size bed",
          capacity: "1-2 ppl",
          href: "/venue#collective",
        },
        {
          title: "Dark Room",
          description: "Living environments for restoration and sleep.\n\nUsed for: Deep rest. Extended silence. Sensory withdrawal. Private integration.\n\nSleep is protected. Interruption is minimized.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDihuxI523H6STIOJTiusyX823EQRHnvGdgm92Oy3HeVG1rev-PWuFIVtRhFzrIx-Iv2iQYjDzhZWjoJdtvf3rJ1jA4iQzvRD3mongIDOtMmi5Kwm3Q4MKRqr7WQH3zKIZpyiKKy3sKokFdJJBoK3z15gz53cpyFE85NnKrpg7XLsWKLELWgbnpyPP7nTAKt8Ten5QZhlUTKPRpi3G6i-cM1bVOxi6YPhrz4ECpxLkHU4RWjYCb7Az6gqLPaK006r-vCMKZgJHbIT1z",
          imageAlt: "Complete darkness room",
          area: "Total isolation",
          capacity: "1 ppl",
          href: "/venue#collective",
        },
        {
          title: "Shared Dorm",
          description: "Living environments for restoration and sleep.\n\nUsed for: Deep rest. Extended silence. Sensory withdrawal. Private integration.\n\nSleep is protected. Interruption is minimized.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBCDrqyukAeIBVkk_NnncUTeloGHka4z0ECUb4BGbAi5jJx3_xTnVLBDv4EzBQw5kQz98tZl5wRRY-siM391ePc0E5p_MsFnTHBy5Tsexozuse2lfrz1b7vwSm0HjzlSh5E3HhytzT3g2VUsDK-PGbw5OSWqu2JkpCh3VvlFv3B-S2Gx1cPYABLS029cK0k32Ro8U-1SblTNiPubHq3SQnGrDqJgN0Hd08cAm7C4l98FmWe2cbpL958B97C3GQeQ90L9So1ATTgc2do",
          imageAlt: "Shared dormitory",
          area: "Shared space",
          capacity: "4-6 ppl",
          href: "/venue#collective",
        },
        {
          title: "Minimalist Tents",
          description: "Living environments for restoration and sleep.\n\nUsed for: Deep rest. Extended silence. Sensory withdrawal. Private integration.\n\nSleep is protected. Interruption is minimized.",
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
      title: "Food",
      icon: "restaurant",
      introText: "Dining spaces and culinary experiences.",
      usedFor: "Shared meals. Mindful eating. Culinary workshops. Nutritional awareness.",
      closingText: "Food is prepared with intention. Meals are consumed in silence or conversation.",
      venues: [
        {
          title: "Satvik Indian Home Food",
          description: "Traditional Indian home-style cooking prepared with satvik principles.\n\nAvailable: Daily\n\nAuthentic, wholesome meals that nourish body and mind.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYE7uQzqCPEUSx1PzSQvaNJcQur_MMIW0hlWNehK-OFDueDgUN7lYbLrTKCcFHpwgAgnc1VWNFhHTq7N4UITYxKAY3BjPsfNFQ8jxpqM0WaY0-2XQWEkef1LVUzXK83qSQa-FlCnmdCMui0DUfT7mqUeme6SDTsdQjp30zLpzdY2kJ9oMfEa6grHmfNxFPNz31Mt-_im9r1Li8DG-T0vHYjL48QPNl9dFL4STTKEs-C-hDp9lugle-UDaVx5AhapFJFnFBBWHVh_P",
          imageAlt: "Satvik Indian home food",
          area: "Daily",
          capacity: "All guests",
          href: "/venue#food",
        },
        {
          title: "Salad Smoothies & Sandwiches",
          description: "Fresh, healthy options for light meals and refreshments.\n\nAvailable: Wednesday & Friday\n\nNutritious choices for sustained energy.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAZvB7dROLa44DAlcGJoRtqzbbwxWyyCNe3fUBZfM8D6c5CKq0WdORTws7ezr9vbFawAbXzrE-ZZSWYt3CHMyZq8l2blVHLd26TEQEzP4EVqAcZpKA39A84XoD9heaUCra8vcMxPcZJ9mOC5sCQpEkOd5L-H39YTm7hAH7kI0aiNS69razeZ3jCiDSmfFZ2v1_VJ34aTIw6bRX6MSvShGkI0mC3TUfjQ2ABus_MXRX_adQiqDmsLBTmQOyBVgvdnPeJWO5uCKQXJXqO",
          imageAlt: "Salads, smoothies and sandwiches",
          area: "Wed & Fri",
          capacity: "All guests",
          href: "/venue#food",
        },
        {
          title: "Barbecue Pizza and Sushi",
          description: "Wood-fired pizzas, barbecue specialties, and fresh sushi.\n\nAvailable: Sunday\n\nSpecial Sunday gathering with diverse culinary experiences.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCqvrjbiNk16kuSjOdYFpXtempYrXm89EALbe3XqRvFXP-BVXZZ0QkKKO0gQDRqUVh5-YEmfUm0OlduKC5QSXRss6wVYioG8pDrHONJXmskFVQGB2irQ8UQxme2xhF2OZpnsOXmPVqNzONG7VwP7WO39Qv6Es_HlHnrBgvQ6g0X9cH3g8wbjKLvr8HV1-Md_re2ianXRvgviiPJukMIOWmjIIT_Ymw48XJieYgEQvGfNDxo_QUZjknlWvaLkih4WkYK55Cd3UHhwyiR",
          imageAlt: "Barbecue, pizza and sushi",
          area: "Sunday",
          capacity: "All guests",
          href: "/venue#food",
        },
      ],
    },
    {
      id: "intimate",
      title: "Practice",
      icon: "fitness_center",
      introText: "Movement, recovery, and regulation.",
      usedFor: "Physical reset. Stress discharge. Endurance training. Body recalibration.",
      closingText: "Movement is self-paced. No coaching required.",
      venues: [
        {
          title: "Outdoor Gym",
          description: "Movement, recovery, and regulation.\n\nUsed for: Physical reset. Stress discharge. Endurance training. Body recalibration.\n\nMovement is self-paced. No coaching required.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAUmMeozchs1cFu8aFeLhWXOwDbDtuJjTtH2wY7Utd_8BbWJIUCVKdnIhdRttSt21O0oq81EB0Tpux9IxAj0bRG2wpJ7BEBG53n-KfzfMxULjAdsNm_-PjptGl7jrEZMuBFhL2BHQKWoJF5pZ_nqx4HQ6L_s_DDpixcQgp5pWjX2BiaewbpJXkJZIqdii-cE7d0TytZtMM-_gTf1vJB5NiSb6_1YFxgxyZo3zc5HggGew9n5WJ7ixbHaC2nkf3QBgDyjWBur8c6Q3YY",
          imageAlt: "Outdoor gym equipment",
          area: "1,200 sqft",
          capacity: "15 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Sports Court",
          description: "Movement, recovery, and regulation.\n\nUsed for: Physical reset. Stress discharge. Endurance training. Body recalibration.\n\nMovement is self-paced. No coaching required.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB1bQeVYi5t99mqZwnYZNIGyR0rLKfWde_Jf-Jztpirlwg03aeOZMOuoJNiyeE1-5iPGe0Ns9W1ZNli1-iCNNYbks1AVFvqjSD8eao6APxgb9CbTnUpr4SU1UpfatVIIP0RGbAYhlwyeygkgSjejI83Cp0rg-NvHTBwdv8z3AAMbWx4j0NwdsMn0jR4XdfvFu4TjCxgLnd0DmlQg_lLb5-EwYB9D-R7uCjdCCQPuOKN8bBlB71sXXRluP8AEvGuy5ynpUi93KAQA5Me",
          imageAlt: "Sports court",
          area: "3,000 sqft",
          capacity: "20 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Contrast Recovery",
          description: "Movement, recovery, and regulation.\n\nUsed for: Physical reset. Stress discharge. Endurance training. Body recalibration.\n\nMovement is self-paced. No coaching required.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA1mmt0qvHp6AVqZz4m_RcIw0R7vzQyoaZotlUZwO2iCHXzznLOmJsXMuaRTIV6hkBYHnnz2p_qPaEcr4fO7lo8fl-BvCwyEpcwoaQaSu28a00763b7lSM4q6VPF78E81GzIH2hl_7kH47YfGxkcmeIB3vsjOoFOSuyf_MAV3dwl0BzfkNvoyTUox_zkIP5G8_TxJb9v948nU6UoMa7olkeZQXWF8ptnYPJ35IvBs14PU7MfLtTwKmEsUBiuxLKokPgrESII_8-3Gvk",
          imageAlt: "Contrast recovery facilities",
          area: "800 sqft",
          capacity: "8 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Cycles",
          description: "Movement, recovery, and regulation.\n\nUsed for: Physical reset. Stress discharge. Endurance training. Body recalibration.\n\nMovement is self-paced. No coaching required.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDdPU42Ez8j_ViABpU2L0iJaz9UDHRlY2DZdnogL5KWqQ3d0AQudq_b1HHTPTidCNifjh-Xyh0wdBKjxzEa2Rz308cDJHkohvs71lo1VZHCQDlvq8UHV_Un0bGn3qAPPbUdO7PCGUuOAGdbnMTwq0tPr1fz75I-zlSVw-8L1kUQuu2IDOXSkppm1huPSOCfKxvS7WYUgBVtFseyibb6-v7W-emGhnvVKev7yVttCqm8d5bcoBjG1LfSmacru9m4yDKqSkekZOXZIElM",
          imageAlt: "Bicycles",
          area: "N/A",
          capacity: "Multiple",
          href: "/venue#intimate",
        },
        {
          title: "Kayaks",
          description: "Movement, recovery, and regulation.\n\nUsed for: Physical reset. Stress discharge. Endurance training. Body recalibration.\n\nMovement is self-paced. No coaching required.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5OVdnhPpsRfB3RpMuYF5je8gUD4m4rTcw4MUPI4UenAZxNfGlntk6Wdn3X6nomlCoHUe15ry529-UeZWczD1MgLfGckKf-pomE8gWaRAwGvAjsGEqAezgkR2BU9J1fTIR3B8q1m1r3QKi9JK4pZ4__3tokNCXaP7vZ9K920OjqyhtTB-AV5FfSvQyek79kmeBsnVfasZEEg7zPY84AHyLbMoSiD7GO-xBcqNRRDcfTAIgxu3eDDOX8kLx7jsPzoLSKkzRNnGvxCxs",
          imageAlt: "Kayaks on water",
          area: "N/A",
          capacity: "Multiple",
          href: "/venue#intimate",
        },
       
        {
          title: "Yoga & Meditation Hall",
          description: "Movement, recovery, and regulation.\n\nUsed for: Physical reset. Stress discharge. Endurance training. Body recalibration.\n\nMovement is self-paced. No coaching required.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5OVdnhPpsRfB3RpMuYF5je8gUD4m4rTcw4MUPI4UenAZxNfGlntk6Wdn3X6nomlCoHUe15ry529-UeZWczD1MgLfGckKf-pomE8gWaRAwGvAjsGEqAezgkR2BU9J1fTIR3B8q1m1r3QKi9JK4pZ4__3tokNCXaP7vZ9K920OjqyhtTB-AV5FfSvQyek79kmeBsnVfasZEEg7zPY84AHyLbMoSiD7GO-xBcqNRRDcfTAIgxu3eDDOX8kLx7jsPzoLSKkzRNnGvxCxs",
          imageAlt: "Yoga and meditation hall",
          area: "2,000 sqft",
          capacity: "30 ppl",
          href: "/venue#intimate",
        },
      ],
    },
    {
      id: "physical",
      title: "Solo",
      icon: "self_improvement",
      introText: "Spaces designed for withdrawal and reflection.",
      usedFor: "Writing. Focused thought. Personal reset. Quiet dialogue.",
      closingText: "Self-directed use. No programming required.",
      venues: [
        {
          title: "Tree House",
          description: "Spaces designed for withdrawal and reflection.\n\nUsed for: Writing. Focused thought. Personal reset. Quiet dialogue.\n\nSelf-directed use. No programming required.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAb9mmkF4lszIBmPkZntm6jACbA19rKcTuCe98ggy4bV2CA-7aUQQsQnoIULRyh-nZBZwP2z19ziis6nHIQ8iYigGapt_wwOfvkfcPdosm6GFVzv1j18fpfOl5Q-zRaX_gZT0TSsGWFHkZfPzSPwZaLHcM7N5EvZa560-IFh-BqkItS-rQe15TeKXP6MhKpEEshytL7-yB07jIwkRQoGTQEG9TxElWs4HEz9npvO7PB_Sghcc9VDVoD2Z6UUzNvtve4Dk9MUTZhy3Qc",
          imageAlt: "Tree house",
          area: "100 sqft",
          capacity: "1 ppl",
          href: "/venue#physical",
        },
        {
          title: "Lakeview Loft",
          description: "Spaces designed for withdrawal and reflection.\n\nUsed for: Writing. Focused thought. Personal reset. Quiet dialogue.\n\nSelf-directed use. No programming required.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBns21pBQcbEfJyIVeHYY8RIPEal_NbYd1hX3hjzG7wl2j6VjSHKZotXpTqIh9VLWEcXqarigo0odFHdvtFOTTg1hDpAaUnZrxg4KQDJsbPp1UTmpSGl7udHxMOOQyq3qwiWQMUOoBSgywU8MRBmU4ODXd-lG9SgkQYovdkAVoJZ_w65l_b1i-dYDO2GlLzCKBPXnmokHJmlC0tE3qQlAjO9uFCd1kEFSlclollGkgDMtequt5oilQ2PYhEzmZeX_TdaUY3PaQcR5Ou",
          imageAlt: "Lakeview loft",
          area: "500 sqft",
          capacity: "6 ppl",
          href: "/venue#physical",
        },
        {
          title: "Zen Garden",
          description: "Spaces designed for withdrawal and reflection.\n\nUsed for: Writing. Focused thought. Personal reset. Quiet dialogue.\n\nSelf-directed use. No programming required.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBL9FDH38P4jAq9NP_nPOXevptmXg_B10pEzBAElZIG_yMvoDQ7wWvnd-XVkILqXI4l6g4895NNbB8wWWUUWJ6ZQFnHEzxc8TpUE-fm1iwZLYj-4CAyKj_2n00AQdBpNmmSGRmPg2lFixql7TM11vckMkLeD2wZEX-Shq21J8xCUXTCqN2WpL3QFCcKQlBYHYbdMS5rYkSWyybh8NT_PoIePU8E9xiomDFCaaxmZKmRa9Kqg-pZ9pKTQnj39XDcHAqxkcn6RM2AmwjK",
          imageAlt: "Zen garden",
          area: "600 sqft",
          capacity: "5 ppl",
          href: "/venue#physical",
        },
        {
          title: "Discussion Deck",
          description: "Spaces designed for withdrawal and reflection.\n\nUsed for: Writing. Focused thought. Personal reset. Quiet dialogue.\n\nSelf-directed use. No programming required.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBL9FDH38P4jAq9NP_nPOXevptmXg_B10pEzBAElZIG_yMvoDQ7wWvnd-XVkILqXI4l6g4895NNbB8wWWUUWJ6ZQFnHEzxc8TpUE-fm1iwZLYj-4CAyKj_2n00AQdBpNmmSGRmPg2lFixql7TM11vckMkLeD2wZEX-Shq21J8xCUXTCqN2WpL3QFCcKQlBYHYbdMS5rYkSWyybh8NT_PoIePU8E9xiomDFCaaxmZKmRa9Kqg-pZ9pKTQnj39XDcHAqxkcn6RM2AmwjK",
          imageAlt: "Discussion deck",
          area: "300 sqft",
          capacity: "4 ppl",
          href: "/venue#physical",
        },
        {
          title: "Edge Platform",
          description: "Spaces designed for withdrawal and reflection.\n\nUsed for: Writing. Focused thought. Personal reset. Quiet dialogue.\n\nSelf-directed use. No programming required.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBL9FDH38P4jAq9NP_nPOXevptmXg_B10pEzBAElZIG_yMvoDQ7wWvnd-XVkILqXI4l6g4895NNbB8wWWUUWJ6ZQFnHEzxc8TpUE-fm1iwZLYj-4CAyKj_2n00AQdBpNmmSGRmPg2lFixql7TM11vckMkLeD2wZEX-Shq21J8xCUXTCqN2WpL3QFCcKQlBYHYbdMS5rYkSWyybh8NT_PoIePU8E9xiomDFCaaxmZKmRa9Kqg-pZ9pKTQnj39XDcHAqxkcn6RM2AmwjK",
          imageAlt: "Edge platform",
          area: "300 sqft",
          capacity: "10 ppl",
          href: "/venue#physical",
        },
      ],
    },
    {
      id: "creative",
      title: "Assembly",
      icon: "groups",
      introText: "Primary collective environments for structured or unstructured gathering.",
      usedFor: "Inquiry sessions. Intentional dialogue. Quiet collaboration. Shared silence.",
      closingText: "No performance required. No audience expected.",
      venues: [
        {
          title: "Design Dome",
          description: "Primary collective environments for structured or unstructured gathering.\n\nUsed for: Inquiry sessions. Intentional dialogue. Quiet collaboration. Shared silence.\n\nNo performance required. No audience expected.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDIiuRv3LHoCdwbXKNrpkzohoWX2MvwTOZ5lXr7ZJOJN4rtUB6lJ1qlZ-u2zCajLTcMLZTX15sYDB62IDqshV46VoFyn32DbTS-R6PeTU_3C2RKrUVrmxqRQFJ17pMOdIiaIuia9LpHEDrdBNfLcpNR9wrqiXEMTvyr0UCkr7BGsi72y02LS1hc3000i0Cqzbv_hYtveNrZXjbh8_Z4XfTOKoy3Y2rzGtgkTsddDMIibaa4Ytcg7j-IKPvRCPYwA_xkBv-U9a_tUlhb",
          imageAlt: "Design dome",
          area: "2,000 sqft",
          capacity: "50 ppl",
          href: "/venue#creative",
        },
        {
          title: "Library Lounge",
          description: "Primary collective environments for structured or unstructured gathering.\n\nUsed for: Inquiry sessions. Intentional dialogue. Quiet collaboration. Shared silence.\n\nNo performance required. No audience expected.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCFZaWpuizZ4QgUWBdBBiqY2HvL5aFuSlaUx5mY1R2rZ8OrP11lmmWvGi3IqeMI2x-8nmKMYluhddFzzUFEIkL5e2coZExuj7bFnYTVX2rPvylVpkwqCFoEY6iiSTc9dQKDPjlNd12npaC8II_w1-H2qd_VPUyK6fTS7FdMi3rRkVbpZyZE_BpX6HJJxTkK52VgbrnZ-t4CWbmXqtWxkWeHRUkRbNpogrtl3I62yLEoBU-npaoqVgKezuwCSOHFV4EwqMDNiUnfsUzh",
          imageAlt: "Library lounge",
          area: "800 sqft",
          capacity: "20 ppl",
          href: "/venue#creative",
        },
        
        {
          title: "Front Lawn",
          description: "Primary collective environments for structured or unstructured gathering.\n\nUsed for: Inquiry sessions. Intentional dialogue. Quiet collaboration. Shared silence.\n\nNo performance required. No audience expected.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDLkKCbOoNiCh5GCaXKpDhhE61EuBWVMqfoDx1x_wyCJoA7PPkZmboVTkSD_1yjEjKPL0U6yCi1y95lu8MpShSApYpvBa-kH7le5gEg7sscNGWNucdUgeA-mCHvnuQyiiaKm7_dWnjuEJGruUnNYnReX02GjXcgpvs3zQENCaOm-XM1ooU-KamYXeXfrToETA6qvjaBp6TU6CG9s4sapxcYre2RGmVKISe7fG490J8Ru1kUvmvnvTo5WV1WDN6BWR-ijXSNkFgNnIM9",
          imageAlt: "Front lawn",
          area: "5,000 sqft",
          capacity: "100 ppl",
          href: "/venue#creative",
        },
        {
          title: "Courtyard",
          description: "Primary collective environments for structured or unstructured gathering.\n\nUsed for: Inquiry sessions. Intentional dialogue. Quiet collaboration. Shared silence.\n\nNo performance required. No audience expected.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDLkKCbOoNiCh5GCaXKpDhhE61EuBWVMqfoDx1x_wyCJoA7PPkZmboVTkSD_1yjEjKPL0U6yCi1y95lu8MpShSApYpvBa-kH7le5gEg7sscNGWNucdUgeA-mCHvnuQyiiaKm7_dWnjuEJGruUnNYnReX02GjXcgpvs3zQENCaOm-XM1ooU-KamYXeXfrToETA6qvjaBp6TU6CG9s4sapxcYre2RGmVKISe7fG490J8Ru1kUvmvnvTo5WV1WDN6BWR-ijXSNkFgNnIM9",
          imageAlt: "Courtyard",
          area: "1,500 sqft",
          capacity: "40 ppl",
          href: "/venue#creative",
        },
      ],
    },
    {
      id: "living",
      title: "Symbols",
      icon: "brush",
      introText: "Architectural installations designed for psychological transition.",
      usedFor: "Identity reflection. Personal declaration. Letting go. Perspective shift.",
      closingText: "Interpretation is personal. Nothing is explained.",
      venues: [
        {
          title: "Identity Cemetery",
          description: "Architectural installations designed for psychological transition.\n\nUsed for: Identity reflection. Personal declaration. Letting go. Perspective shift.\n\nInterpretation is personal. Nothing is explained.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYE7uQzqCPEUSx1PzSQvaNJcQur_MMIW0hlWNehK-OFDueDgUN7lYbLrTKCcFHpwgAgnc1VWNFhHTq7N4UITYxKAY3BjPsfNFQ8jxpqM0WaY0-2XQWEkef1LVUzXK83qSQa-FlCnmdCMui0DUfT7mqUeme6SDTsdQjp30zLpzdY2kJ9oMfEa6grHmfNxFPNz31Mt-_im9r1Li8DG-T0vHYjL48QPNl9dFL4STTKEs-C-hDp9lugle-UDaVx5AhapFJFnFBBWHVh_P",
          imageAlt: "Identity cemetery",
          area: "2,000 sqft",
          capacity: "30 ppl",
          href: "/venue#living",
        },
        {
          title: "Moon Gate",
          description: "Architectural installations designed for psychological transition.\n\nUsed for: Identity reflection. Personal declaration. Letting go. Perspective shift.\n\nInterpretation is personal. Nothing is explained.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAZvB7dROLa44DAlcGJoRtqzbbwxWyyCNe3fUBZfM8D6c5CKq0WdORTws7ezr9vbFawAbXzrE-ZZSWYt3CHMyZq8l2blVHLd26TEQEzP4EVqAcZpKA39A84XoD9heaUCra8vcMxPcZJ9mOC5sCQpEkOd5L-H39YTm7hAH7kI0aiNS69razeZ3jCiDSmfFZ2v1_VJ34aTIw6bRX6MSvShGkI0mC3TUfjQ2ABus_MXRX_adQiqDmsLBTmQOyBVgvdnPeJWO5uCKQXJXqO",
          imageAlt: "Moon gate",
          area: "N/A",
          capacity: "N/A",
          href: "/venue#living",
        },
        {
          title: "Truman's Wall",
          description: "Architectural installations designed for psychological transition.\n\nUsed for: Identity reflection. Personal declaration. Letting go. Perspective shift.\n\nInterpretation is personal. Nothing is explained.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCqvrjbiNk16kuSjOdYFpXtempYrXm89EALbe3XqRvFXP-BVXZZ0QkKKO0gQDRqUVh5-YEmfUm0OlduKC5QSXRss6wVYioG8pDrHONJXmskFVQGB2irQ8UQxme2xhF2OZpnsOXmPVqNzONG7VwP7WO39Qv6Es_HlHnrBgvQ6g0X9cH3g8wbjKLvr8HV1-Md_re2ianXRvgviiPJukMIOWmjIIT_Ymw48XJieYgEQvGfNDxo_QUZjknlWvaLkih4WkYK55Cd3UHhwyiR",
          imageAlt: "Truman's wall",
          area: "N/A",
          capacity: "Unlimited",
          href: "/venue#living",
        },
        {
          title: "Thinking Man",
          description: "Architectural installations designed for psychological transition.\n\nUsed for: Identity reflection. Personal declaration. Letting go. Perspective shift.\n\nInterpretation is personal. Nothing is explained.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCCrs3CWaQXPNPCzn-2Yu6zw3_BhwMdFIZ3V6lL8vKk_YXGKO3hGxPc7NzGcZU8MniT56_7aDMKLp8a3UlZjiZ0qqfBBBqi7AfWcDKlssA9PsirRmLIkbz5Cjz2vzwlerlVc1PKWOC7D3L68AjvDABGMpGYKfnUbMMbqpi5e_Z4tu0NBqrm7APkJgbLU7-23jUHGR2F0uSNWUE0XjXpEX1HWiQKE0a4IhN81qOs-cgFvTWhCofrZrGUKz90lh7sfbRzy5NgB6xLmGLc",
          imageAlt: "Thinking man sculpture",
          area: "N/A",
          capacity: "1 ppl",
          href: "/venue#living",
        },
      ],
    },
    {
      id: "wildlife",
      title: "Wildlife & Nature",
      icon: "nature",
      introText: "Natural environments and wildlife observation areas.",
      usedFor: "Bird watching. Nature walks. Wildlife photography. Ecological observation.",
      closingText: "Respect the habitat. Observe without disturbing.",
      venues: [
        {
          title: "Forest Safari",
          description: "Natural environments and wildlife observation areas.\n\nUsed for: Bird watching. Nature walks. Wildlife photography. Ecological observation.\n\nRespect the habitat. Observe without disturbing.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYE7uQzqCPEUSx1PzSQvaNJcQur_MMIW0hlWNehK-OFDueDgUN7lYbLrTKCcFHpwgAgnc1VWNFhHTq7N4UITYxKAY3BjPsfNFQ8jxpqM0WaY0-2XQWEkef1LVUzXK83qSQa-FlCnmdCMui0DUfT7mqUeme6SDTsdQjp30zLpzdY2kJ9oMfEa6grHmfNxFPNz31Mt-_im9r1Li8DG-T0vHYjL48QPNl9dFL4STTKEs-C-hDp9lugle-UDaVx5AhapFJFnFBBWHVh_P",
          imageAlt: "Bird sanctuary trail",
          area: "3 km trail",
          capacity: "20 ppl",
          href: "/venue#wildlife",
        },
        {
          title: "Bird Watching",
          description: "Natural environments and wildlife observation areas.\n\nUsed for: Bird watching. Nature walks. Wildlife photography. Ecological observation.\n\nRespect the habitat. Observe without disturbing.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAZvB7dROLa44DAlcGJoRtqzbbwxWyyCNe3fUBZfM8D6c5CKq0WdORTws7ezr9vbFawAbXzrE-ZZSWYt3CHMyZq8l2blVHLd26TEQEzP4EVqAcZpKA39A84XoD9heaUCra8vcMxPcZJ9mOC5sCQpEkOd5L-H39YTm7hAH7kI0aiNS69razeZ3jCiDSmfFZ2v1_VJ34aTIw6bRX6MSvShGkI0mC3TUfjQ2ABus_MXRX_adQiqDmsLBTmQOyBVgvdnPeJWO5uCKQXJXqO",
          imageAlt: "Lakeside observation deck",
          area: "500 sqft",
          capacity: "15 ppl",
          href: "/venue#wildlife",
        },
        {
          title: "Night Boat Safari",
          description: "Natural environments and wildlife observation areas.\n\nUsed for: Bird watching. Nature walks. Wildlife photography. Ecological observation.\n\nRespect the habitat. Observe without disturbing.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCqvrjbiNk16kuSjOdYFpXtempYrXm89EALbe3XqRvFXP-BVXZZ0QkKKO0gQDRqUVh5-YEmfUm0OlduKC5QSXRss6wVYioG8pDrHONJXmskFVQGB2irQ8UQxme2xhF2OZpnsOXmPVqNzONG7VwP7WO39Qv6Es_HlHnrBgvQ6g0X9cH3g8wbjKLvr8HV1-Md_re2ianXRvgviiPJukMIOWmjIIT_Ymw48XJieYgEQvGfNDxo_QUZjknlWvaLkih4WkYK55Cd3UHhwyiR",
          imageAlt: "Forest walking path",
          area: "2 km trail",
          capacity: "25 ppl",
          href: "/venue#wildlife",
        },
        {
          title: "Grassland Safari",
          description: "Natural environments and wildlife observation areas.\n\nUsed for: Bird watching. Nature walks. Wildlife photography. Ecological observation.\n\nRespect the habitat. Observe without disturbing.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCCrs3CWaQXPNPCzn-2Yu6zw3_BhwMdFIZ3V6lL8vKk_YXGKO3hGxPc7NzGcZU8MniT56_7aDMKLp8a3UlZjiZ0qqfBBBqi7AfWcDKlssA9PsirRmLIkbz5Cjz2vzwlerlVc1PKWOC7D3L68AjvDABGMpGYKfnUbMMbqpi5e_Z4tu0NBqrm7APkJgbLU7-23jUHGR2F0uSNWUE0XjXpEX1HWiQKE0a4IhN81qOs-cgFvTWhCofrZrGUKz90lh7sfbRzy5NgB6xLmGLc",
          imageAlt: "Wetland viewing point",
          area: "300 sqft",
          capacity: "10 ppl",
          href: "/venue#wildlife",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 ">
      <Header />
      <VenueHero />
      <VenueCategoryNav />

      <div className="w-full px-16 py-12">
        {venueCategories.map((category) => (
          <section 
            key={category.id} 
            className={`transition-all duration-300 ${expandedSections[category.id] ? 'mb-24' : 'mb-6'}`}
          >
            <VenueSection 
              {...category} 
              expanded={expandedSections[category.id]}
              onToggle={() => toggleSection(category.id)}
            />
          </section>
        ))}
      </div>
      <Footer />
    </main>
  );
}
