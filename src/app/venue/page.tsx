import Header from "../components/Header";
import Footer from "../components/Footer";
import VenueHero from "../components/venue/VenueHero";
import VenueCategoryNav from "../components/venue/VenueCategoryNav";
import VenueSection from "../components/venue/VenueSection";
import ClosingSection from "../components/ClosingSection";

export default function VenuePage() {
  const venueCategories = [
    {
      id: "collective",
      title: "Collective Spaces",
      icon: "groups",
      venues: [
        {
          title: "Design Dome",
          description: "A central spherical structure designed for group cohesion and circular thinking sessions.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBZLscLeqaXM3WeLLKdo4n6I_KPLwimBzpxj6FfWhA0Tj1nnnNlUWpcX2O5r_A_Znd9KQKhJl4MmgBBlrnwhBV6OyALMYwVuWNx2_apOvsOeDznh9p1N6BXQvYnHbaGcQ6QpaDXxBUrpQbPtjMMsENDJEf1p9sOXdl4NJSmjGH0P5bovB_Tqkca_-lxSw1eQYDCYob6sCjcK3pC77zVRDrj9az7_buyOh-Od1xhkayKnENL_0B5Jr_9nk4OBnZJuBdJjJDliAp0Fgiu",
          imageAlt: "Futuristic geodesic dome structure glowing warmly at night",
          area: "2,000 sqft",
          capacity: "50 ppl",
          href: "/venue#collective",
        },
        {
          title: "Lazy Lounge",
          description: "Relaxed low-seating area optimized for casual interactions and unstructured downtime.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDihuxI523H6STIOJTiusyX823EQRHnvGdgm92Oy3HeVG1rev-PWuFIVtRhFzrIx-Iv2iQYjDzhZWjoJdtvf3rJ1jA4iQzvRD3mongIDOtMmi5Kwm3Q4MKRqr7WQH3zKIZpyiKKy3sKokFdJJBoK3z15gz53cpyFE85NnKrpg7XLsWKLELWgbnpyPP7nTAKt8Ten5QZhlUTKPRpi3G6i-cM1bVOxi6YPhrz4ECpxLkHU4RWjYCb7Az6gqLPaK006r-vCMKZgJHbIT1z",
          imageAlt: "Cozy lounge with low sofas and warm ambient lighting",
          area: "800 sqft",
          capacity: "20 ppl",
          href: "/venue#collective",
        },
        {
          title: "Front Lawn",
          description: "An expansive green space for outdoor gatherings, morning yoga, or starlit events.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBCDrqyukAeIBVkk_NnncUTeloGHka4z0ECUb4BGbAi5jJx3_xTnVLBDv4EzBQw5kQz98tZl5wRRY-siM391ePc0E5p_MsFnTHBy5Tsexozuse2lfrz1b7vwSm0HjzlSh5E3HhytzT3g2VUsDK-PGbw5OSWqu2JkpCh3VvlFv3B-S2Gx1cPYABLS029cK0k32Ro8U-1SblTNiPubHq3SQnGrDqJgN0Hd08cAm7C4l98FmWe2cbpL958B97C3GQeQ90L9So1ATTgc2do",
          imageAlt: "Expansive green lawn with stone paths at twilight",
          area: "5,000 sqft",
          capacity: "100 ppl",
          href: "/venue#collective",
        },
        {
          title: "Courtyard",
          description: "Stone-paved enclosure perfect for open-air meetings and sheltered conversations.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA3hCSIq6YyLJUHqpGr2Wg4gaAXkeGif46iSm3qp5DZGo6DLVYKmymc1_N1DFd_OGO4XEYu8bRJSWkR2BnNSraPdSo1n5NWsKGsIqvAuOB3rs6iwfPTcNlDSmNR9uXqxpyhuBNCgBFEe2dWcUZQIzOOUrcc7zSUe22-rYCe0u2CSw2ub38Zg4Sw1n2Nr3AYkEgcKAidHJ-0Yp5a5-Dxl8gKhNVSwsHaMgLBsiwztqYinoq54X1xwwJQKu4WU2NHYHk6fAZIOsbz7ug4",
          imageAlt: "Stone courtyard with fountain and benches",
          area: "1,500 sqft",
          capacity: "40 ppl",
          href: "/venue#collective",
        },
        {
          title: "Restaurant",
          description: "Farm-to-table dining hall with a rustic ambiance, fostering community through food.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBK3S7kM4WfRbYT3DQ2dbrBu_Ec-v8w5bmzRMiqJ8YK64BHMmbfjjSwKUdh2-9tulNlnrQhjBp2Y8frbS1TYIZc0VF6ycoHESSy7YJEk-Aelt8qwTwHaMkmcif_KE-Dr00ZPtJma9pjwkTmlZBlfJG4JRqbiwOMS8lZyOoS8KAXq5_QZ_jJXF8HBqHAtMXNkSR3ukbq6_PMGzvXYQA2ydD_NaFiRnRzA-geyLNtHRxQoAZzuRSjc_Jv2gDCW82WgLcvK-vAkiQxqhE-",
          imageAlt: "Rustic dining hall with long wooden tables and warm lighting",
          area: "2,500 sqft",
          capacity: "60 ppl",
          href: "/venue#collective",
        },
        {
          title: "Fireplace",
          description: "A warm, circular gathering spot for evening talks, storytelling, and reflection.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAjgb8DI9GnR4plTrszMk17y9UOD4DFz6CbZ7MNx0bO-3p3_Gm23VQp4LrFhc0Aq-FYcFHutDvPBNqjTSvBbnjGbTNCZc87t3wQSbR1yXjgjR_-IIrioxDxoeAOaPDJ1MZzCaSx3ATa428STW8t3yqf8VAWJOfAxI6I030JeQMpsLXp5iViq3kHPOzPJ-gCqOB64PErg9IS_2Gbr8DgTWSI-_QB9ZiVBdJg8evn8Lo4HCV_3EcrCvF6-Hj4CIxPy7AM6Y-ZD6mWozLN",
          imageAlt: "Outdoor fireplace surrounded by stone benches at night",
          area: "400 sqft",
          capacity: "10 ppl",
          href: "/venue#collective",
        },
      ],
    },
    {
      id: "intimate",
      title: "Intimate & Solo",
      icon: "self_improvement",
      venues: [
        {
          title: "Tree House",
          description: "Small, elevated spaces designed for absolute isolation and bird's eye perspective.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAUmMeozchs1cFu8aFeLhWXOwDbDtuJjTtH2wY7Utd_8BbWJIUCVKdnIhdRttSt21O0oq81EB0Tpux9IxAj0bRG2wpJ7BEBG53n-KfzfMxULjAdsNm_-PjptGl7jrEZMuBFhL2BHQKWoJF5pZ_nqx4HQ6L_s_DDpixcQgp5pWjX2BiaewbpJXkJZIqdii-cE7d0TytZtMM-_gTf1vJB5NiSb6_1YFxgxyZo3zc5HggGew9n5WJ7ixbHaC2nkf3QBgDyjWBur8c6Q3YY",
          imageAlt: "Small wooden treehouse nestled in a dense forest canopy",
          area: "100 sqft",
          capacity: "1 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Zen Garden",
          description: "A minimalist raked sand garden for meditation and mindfulness practices.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB1bQeVYi5t99mqZwnYZNIGyR0rLKfWde_Jf-Jztpirlwg03aeOZMOuoJNiyeE1-5iPGe0Ns9W1ZNli1-iCNNYbks1AVFvqjSD8eao6APxgb9CbTnUpr4SU1UpfatVIIP0RGbAYhlwyeygkgSjejI83Cp0rg-NvHTBwdv8z3AAMbWx4j0NwdsMn0jR4XdfvFu4TjCxgLnd0DmlQg_lLb5-EwYB9D-R7uCjdCCQPuOKN8bBlB71sXXRluP8AEvGuy5ynpUi93KAQA5Me",
          imageAlt: "Minimalist zen rock garden with raked sand",
          area: "600 sqft",
          capacity: "5 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Discussion Deck",
          description: "Private wooden platforms nestled in nature for deep 1-on-1 conversations.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA1mmt0qvHp6AVqZz4m_RcIw0R7vzQyoaZotlUZwO2iCHXzznLOmJsXMuaRTIV6hkBYHnnz2p_qPaEcr4fO7lo8fl-BvCwyEpcwoaQaSu28a00763b7lSM4q6VPF78E81GzIH2hl_7kH47YfGxkcmeIB3vsjOoFOSuyf_MAV3dwl0BzfkNvoyTUox_zkIP5G8_TxJb9v948nU6UoMa7olkeZQXWF8ptnYPJ35IvBs14PU7MfLtTwKmEsUBiuxLKokPgrESII_8-3Gvk",
          imageAlt: "Wooden deck overlooking a misty valley",
          area: "300 sqft",
          capacity: "4 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Reflection Corner",
          description: "A hidden nook designed for journaling and internal processing.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDdPU42Ez8j_ViABpU2L0iJaz9UDHRlY2DZdnogL5KWqQ3d0AQudq_b1HHTPTidCNifjh-Xyh0wdBKjxzEa2Rz308cDJHkohvs71lo1VZHCQDlvq8UHV_Un0bGn3qAPPbUdO7PCGUuOAGdbnMTwq0tPr1fz75I-zlSVw-8L1kUQuu2IDOXSkppm1huPSOCfKxvS7WYUgBVtFseyibb6-v7W-emGhnvVKev7yVttCqm8d5bcoBjG1LfSmacru9m4yDKqSkekZOXZIElM",
          imageAlt: "Secluded bench in a dark quiet corner of a garden",
          area: "150 sqft",
          capacity: "1 ppl",
          href: "/venue#intimate",
        },
        {
          title: "Compact Rooms",
          description: "Efficient, distraction-free indoor spaces for focused work or study.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5OVdnhPpsRfB3RpMuYF5je8gUD4m4rTcw4MUPI4UenAZxNfGlntk6Wdn3X6nomlCoHUe15ry529-UeZWczD1MgLfGckKf-pomE8gWaRAwGvAjsGEqAezgkR2BU9J1fTIR3B8q1m1r3QKi9JK4pZ4__3tokNCXaP7vZ9K920OjqyhtTB-AV5FfSvQyek79kmeBsnVfasZEEg7zPY84AHyLbMoSiD7GO-xBcqNRRDcfTAIgxu3eDDOX8kLx7jsPzoLSKkzRNnGvxCxs",
          imageAlt: "Small cozy room with a desk and window view",
          area: "200 sqft",
          capacity: "2 ppl",
          href: "/venue#intimate",
        },
      ],
    },
    {
      id: "physical",
      title: "Physical & Recovery",
      icon: "fitness_center",
      venues: [
        {
          title: "Sports Courts",
          description: "Multi-purpose courts for basketball, volleyball, and team physical activities.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAb9mmkF4lszIBmPkZntm6jACbA19rKcTuCe98ggy4bV2CA-7aUQQsQnoIULRyh-nZBZwP2z19ziis6nHIQ8iYigGapt_wwOfvkfcPdosm6GFVzv1j18fpfOl5Q-zRaX_gZT0TSsGWFHkZfPzSPwZaLHcM7N5EvZa560-IFh-BqkItS-rQe15TeKXP6MhKpEEshytL7-yB07jIwkRQoGTQEG9TxElWs4HEz9npvO7PB_Sghcc9VDVoD2Z6UUzNvtve4Dk9MUTZhy3Qc",
          imageAlt: "Basketball court with dramatic lighting",
          area: "3,000 sqft",
          capacity: "20 ppl",
          href: "/venue#physical",
        },
        {
          title: "Buzzer Zone",
          description: "High-energy zone for HIIT, cardio, and intense physical release.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBns21pBQcbEfJyIVeHYY8RIPEal_NbYd1hX3hjzG7wl2j6VjSHKZotXpTqIh9VLWEcXqarigo0odFHdvtFOTTg1hDpAaUnZrxg4KQDJsbPp1UTmpSGl7udHxMOOQyq3qwiWQMUOoBSgywU8MRBmU4ODXd-lG9SgkQYovdkAVoJZ_w65l_b1i-dYDO2GlLzCKBPXnmokHJmlC0tE3qQlAjO9uFCd1kEFSlclollGkgDMtequt5oilQ2PYhEzmZeX_TdaUY3PaQcR5Ou",
          imageAlt: "High intensity gym area with weights",
          area: "1,200 sqft",
          capacity: "15 ppl",
          href: "/venue#physical",
        },
        {
          title: "Contrast & Recovery",
          description: "Facilities for ice baths, saunas, and guided recovery sessions.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBL9FDH38P4jAq9NP_nPOXevptmXg_B10pEzBAElZIG_yMvoDQ7wWvnd-XVkILqXI4l6g4895NNbB8wWWUUWJ6ZQFnHEzxc8TpUE-fm1iwZLYj-4CAyKj_2n00AQdBpNmmSGRmPg2lFixql7TM11vckMkLeD2wZEX-Shq21J8xCUXTCqN2WpL3QFCcKQlBYHYbdMS5rYkSWyybh8NT_PoIePU8E9xiomDFCaaxmZKmRa9Kqg-pZ9pKTQnj39XDcHAqxkcn6RM2AmwjK",
          imageAlt: "Spa interior with sauna and plunge pool",
          area: "800 sqft",
          capacity: "8 ppl",
          href: "/venue#physical",
        },
      ],
    },
    {
      id: "creative",
      title: "Creative & Symbolic",
      icon: "brush",
      venues: [
        {
          title: "Tru Man's Walls",
          description: "A constantly evolving canvas for free expression and artistic collaboration.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDIiuRv3LHoCdwbXKNrpkzohoWX2MvwTOZ5lXr7ZJOJN4rtUB6lJ1qlZ-u2zCajLTcMLZTX15sYDB62IDqshV46VoFyn32DbTS-R6PeTU_3C2RKrUVrmxqRQFJ17pMOdIiaIuia9LpHEDrdBNfLcpNR9wrqiXEMTvyr0UCkr7BGsi72y02LS1hc3000i0Cqzbv_hYtveNrZXjbh8_Z4XfTOKoy3Y2rzGtgkTsddDMIibaa4Ytcg7j-IKPvRCPYwA_xkBv-U9a_tUlhb",
          imageAlt: "Large graffiti wall with colorful abstract art",
          area: "N/A",
          capacity: "Unlimited",
          href: "/venue#creative",
        },
        {
          title: "Identity Cemetery",
          description: "A symbolic space to bury old habits and ego, facilitating personal transformation.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCFZaWpuizZ4QgUWBdBBiqY2HvL5aFuSlaUx5mY1R2rZ8OrP11lmmWvGi3IqeMI2x-8nmKMYluhddFzzUFEIkL5e2coZExuj7bFnYTVX2rPvylVpkwqCFoEY6iiSTc9dQKDPjlNd12npaC8II_w1-H2qd_VPUyK6fTS7FdMi3rRkVbpZyZE_BpX6HJJxTkK52VgbrnZ-t4CWbmXqtWxkWeHRUkRbNpogrtl3I62yLEoBU-npaoqVgKezuwCSOHFV4EwqMDNiUnfsUzh",
          imageAlt: "Abstract sculpture garden with stone markers",
          area: "2,000 sqft",
          capacity: "30 ppl",
          href: "/venue#creative",
        },
        {
          title: "Moon Gate",
          description: "The threshold of The Silent Club, marking the transition from the outer world.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDLkKCbOoNiCh5GCaXKpDhhE61EuBWVMqfoDx1x_wyCJoA7PPkZmboVTkSD_1yjEjKPL0U6yCi1y95lu8MpShSApYpvBa-kH7le5gEg7sscNGWNucdUgeA-mCHvnuQyiiaKm7_dWnjuEJGruUnNYnReX02GjXcgpvs3zQENCaOm-XM1ooU-KamYXeXfrToETA6qvjaBp6TU6CG9s4sapxcYre2RGmVKISe7fG490J8Ru1kUvmvnvTo5WV1WDN6BWR-ijXSNkFgNnIM9",
          imageAlt: "Large imposing wooden gate entrance",
          area: "N/A",
          capacity: "N/A",
          href: "/venue#creative",
        },
      ],
    },
    {
      id: "living",
      title: "Living & Sustenance",
      icon: "bed",
      venues: [
        {
          title: "Spacious Dorms",
          description: "Comfortable shared living spaces that encourage camaraderie and shared experience.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYE7uQzqCPEUSx1PzSQvaNJcQur_MMIW0hlWNehK-OFDueDgUN7lYbLrTKCcFHpwgAgnc1VWNFhHTq7N4UITYxKAY3BjPsfNFQ8jxpqM0WaY0-2XQWEkef1LVUzXK83qSQa-FlCnmdCMui0DUfT7mqUeme6SDTsdQjp30zLpzdY2kJ9oMfEa6grHmfNxFPNz31Mt-_im9r1Li8DG-T0vHYjL48QPNl9dFL4STTKEs-C-hDp9lugle-UDaVx5AhapFJFnFBBWHVh_P",
          imageAlt: "Modern minimalist dormitory interior with bunk beds",
          area: "500 sqft",
          capacity: "12 ppl",
          href: "/venue#living",
        },
        {
          title: "Private Cabins",
          description: "Detached units offering privacy and a closer connection to the surrounding nature.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAZvB7dROLa44DAlcGJoRtqzbbwxWyyCNe3fUBZfM8D6c5CKq0WdORTws7ezr9vbFawAbXzrE-ZZSWYt3CHMyZq8l2blVHLd26TEQEzP4EVqAcZpKA39A84XoD9heaUCra8vcMxPcZJ9mOC5sCQpEkOd5L-H39YTm7hAH7kI0aiNS69razeZ3jCiDSmfFZ2v1_VJ34aTIw6bRX6MSvShGkI0mC3TUfjQ2ABus_MXRX_adQiqDmsLBTmQOyBVgvdnPeJWO5uCKQXJXqO",
          imageAlt: "Small wooden cabin in the woods",
          area: "400 sqft",
          capacity: "2 ppl",
          href: "/venue#living",
        },
        {
          title: "Outdoor Kitchen",
          description: "A communal cooking space under the open sky, perfect for group meal prep.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCqvrjbiNk16kuSjOdYFpXtempYrXm89EALbe3XqRvFXP-BVXZZ0QkKKO0gQDRqUVh5-YEmfUm0OlduKC5QSXRss6wVYioG8pDrHONJXmskFVQGB2irQ8UQxme2xhF2OZpnsOXmPVqNzONG7VwP7WO39Qv6Es_HlHnrBgvQ6g0X9cH3g8wbjKLvr8HV1-Md_re2ianXRvgviiPJukMIOWmjIIT_Ymw48XJieYgEQvGfNDxo_QUZjknlWvaLkih4WkYK55Cd3UHhwyiR",
          imageAlt: "Outdoor kitchen setup with stone oven",
          area: "600 sqft",
          capacity: "8 ppl",
          href: "/venue#living",
        },
        {
          title: "Self Serve Pantry",
          description: "24/7 access to snacks and essentials, promoting autonomy and trust.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCCrs3CWaQXPNPCzn-2Yu6zw3_BhwMdFIZ3V6lL8vKk_YXGKO3hGxPc7NzGcZU8MniT56_7aDMKLp8a3UlZjiZ0qqfBBBqi7AfWcDKlssA9PsirRmLIkbz5Cjz2vzwlerlVc1PKWOC7D3L68AjvDABGMpGYKfnUbMMbqpi5e_Z4tu0NBqrm7APkJgbLU7-23jUHGR2F0uSNWUE0XjXpEX1HWiQKE0a4IhN81qOs-cgFvTWhCofrZrGUKz90lh7sfbRzy5NgB6xLmGLc",
          imageAlt: "Well stocked pantry shelves with jars",
          area: "300 sqft",
          capacity: "3 ppl",
          href: "/venue#living",
        },
      ],
    },
    {
      id: "nature",
      title: "Land & Nature",
      icon: "forest",
      venues: [
        {
          title: "Casual Catch-up Loft",
          description: "An informal, semi-open loft space overlooking the farm for relaxed brainstorming.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCAvKrv7PJ8yvY9tCzrKD4Ld6ecRlBrHnJTmpt9_CuT36r7Z9KJ56X-d0YGJzmdkRZtfZNVcJT2G5ekxOOJICgNGqRjCfpCUjf-Hcw2C0ECufVJKfsTsa9Mn2OnJkfyA1HYMf0L_o5CaaDKt3nTa5AfEsDaR_zByxo58C895A47hHanaRG2agvIa8TeUmw87DlFupqXY9XV95FlXvw96hSUYZt_qtreb0-w-4rQrUkz0xlmuO3oRSWHdlzy7837wYL2CowYvnylfXH2",
          imageAlt: "Rustic loft space with bean bags and nature view",
          area: "500 sqft",
          capacity: "6 ppl",
          href: "/venue#nature",
        },
        {
          title: "The Farm",
          description: "Working permaculture farm providing fresh ingredients for the restaurant.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDmjCxE053gl8TfuUxj_eEd-BdXK92jRMjQIzEPbJ7y9f9nsW1V-N49QtEEULrZBIpP9qJUd_jJntCliZIVFyBPqGuEkALGVewuuNcbwN3Xstol-6T6G93VhvJxe2g8nt131lY-gq5_oHWKumdLyp2EaNhqDmt1dRZUBDdm6f-DxUZmfvBM3WJRwagGtMgzfd_Td13-yKsfxdA6XZEgup7YBUaOtLznV4kkZLdyEqZ0ujEQiCOavwhcSWXAZpKOAurXeZ9BQz1gcBZp",
          imageAlt: "Rows of crops in a vegetable farm at sunset",
          area: "2 Acres",
          capacity: "Unlimited",
          href: "/venue#nature",
        },
        {
          title: "Animal Shed",
          description: "Home to our resident animals, offering opportunities for grounding animal therapy.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAPEr5vCuDEzq8Tvmq02jyv3p26iLrVYAiGy9dX9WG6HlzBkB8gh_Zrz8ZDe5_dOlXLrQDCuRvtwEETBMdpGbVZYIOduD1aqWzWyLQ_56lnI19l7VLglrmZQXcs0GorNvLUPjXzFSPV0cjgCyVQ1oudUPZii0B2bpM8SaGwwAZf7YP4N37z3Jm6SUvh75otKCQvy2DKZmKVBLDNdyXchO8PaO0Q-dcoiBvkS-_xN2BdTthXTnHOw4hUdTuZ3VRaO7WenyLBiAnm28t5",
          imageAlt: "Wooden barn with farm animals nearby",
          area: "1,000 sqft",
          capacity: "5 ppl",
          href: "/venue#nature",
        },
        {
          title: "On the Edge",
          description: "A solitary viewpoint at the property's boundary for contemplating the horizon.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCKlFdEyPPzIA-FlpFM8Rgjhu2uEnKpKtbfuEd-jRKV06kZFUpwmZBoiFsTWp68VAeqJaFHBVso2oh-KYw0opn-yRVKHsjyEZaM3mVI9O3bs0_dElLlRGghfl0rU_uxFNbO6TjIYLOcq1g2AIxv0e93bsRa0c878XnR47-o0yPXcPaOZtmbf81-_JGTzb9ka0U6H2vuHlrwW9_w--esu1vHlTUnK2jfGqzGMJqL0Oz7LtE4Q7U1FZ924a_BRREdIMuWKtA3JRIyKos4",
          imageAlt: "Scenic cliff edge view with a single chair",
          area: "300 sqft",
          capacity: "10 ppl",
          href: "/venue#nature",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-earth-900 text-earth-100 pt-[94px]">
      <Header />
      <VenueHero />
      <VenueCategoryNav />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 py-12 flex flex-col gap-24">
        {venueCategories.map((category) => (
          <VenueSection key={category.id} {...category} />
        ))}
      </div>
      <ClosingSection />
      <Footer />
    </main>
  );
}
