"use client";

import { useEffect, useMemo, useState } from "react";
import { DepthSection } from "./components/DepthSection";
import { FaqSection } from "./components/FaqSection";
import { SiteFooter } from "../components/SiteFooter";
import { InviteModal } from "../components/InviteModal";
import { HeroSection } from "./components/HeroSection";
import { ProvidesSection } from "./components/ProvidesSection";
import { TopNav } from "./components/TopNav";
import { WhoBelongsSection } from "./components/WhoBelongsSection";
import { depthCards, designedCards, providesSlides, type DepthId, walkInRules, whoMembers, whoThisIsFor } from "./content";

export default function TheSilentClubHomepage20Page() {
  const [openModal, setOpenModal] = useState(false);
  const [openDrivesModal, setOpenDrivesModal] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [selectedDepth, setSelectedDepth] = useState<DepthId | null>(null);
  const [depthVariant, setDepthVariant] = useState<{
    residency: "dorm" | "room";
    solitude: "dorm" | "room";
    creation: "weekday" | "weekend";
  }>({
    residency: "dorm",
    solitude: "dorm",
    creation: "weekday",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [provideSlideIndex, setProvideSlideIndex] = useState({
    spaces: 0,
    food: 0,
    activities: 0,
  });
  const [whoReviewIndex, setWhoReviewIndex] = useState([0, 0, 0]);

  const depthLabel = useMemo(() => {
    if (!selectedDepth) return "Select a depth above to continue.";
    const map: Record<DepthId, string> = {
      silence: "Day Cycle",
      residency: "Weekend Cycle",
      solitude: "Weekday Cycle",
      creation: "Full Cycle",
    };
    return `You've selected : ${map[selectedDepth]}`;
  }, [selectedDepth]);

  const inviteCycleLabel = useMemo(() => {
    if (!selectedDepth) return "The Silent Club · Home";
    const card = depthCards.find((c) => c.id === selectedDepth);
    if (!card) return "The Silent Club · Home";
    return `${card.name} · ${card.cycle}`;
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

  const getDepthPrice = (id: DepthId): { price: string; note: string } => {
    const depth = depthCards.find((card) => card.id === id);
    if (!depth) return { price: "", note: "" };
    if ("basePrice" in depth) return { price: depth.basePrice ?? "", note: depth.note };
    if (id === "residency" || id === "solitude") {
      const selected =
        depth.toggles[depthVariant[id] as "dorm" | "room"] ?? depth.toggles.dorm;
      if (!selected) return { price: "", note: depth.note };
      return { price: selected.price ?? "", note: depth.note };
    }
    const selected =
      depth.toggles[depthVariant.creation as "weekday" | "weekend"] ?? depth.toggles.weekday;
    if (!selected) return { price: "", note: depth.note };
    return { price: selected.price ?? "", note: selected.note ?? depth.note };
  };

  const driversByRoute = {
    puneToBhigwan: [
      { num: "01", name: "Ramesh Pawar", phone: "+91 98220 11001" },
      { num: "02", name: "Suresh Shinde", phone: "+91 98220 11002" },
      { num: "03", name: "Amol Jadhav", phone: "+91 98220 11003" },
      { num: "04", name: "Vikram More", phone: "+91 98220 11004" },
      { num: "05", name: "Ganesh Bhosale", phone: "+91 98220 11005" },
    ],
    bhigwanToPune: [
      { num: "01", name: "Prakash Shitole", phone: "+91 98220 22001" },
      { num: "02", name: "Nitin Salunke", phone: "+91 98220 22002" },
      { num: "03", name: "Rohit Kale", phone: "+91 98220 22003" },
      { num: "04", name: "Santosh More", phone: "+91 98220 22004" },
      { num: "05", name: "Dhanraj Jadhav", phone: "+91 98220 22005" },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0f0b08] text-[#e8d5b0]">
      <TopNav />
      <HeroSection onOpenModal={() => setOpenModal(true)} />

      <section className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2a1f17] bg-[#160f0a] px-5 py-4 md:px-[56px]">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#b09070]">
          Follow the pollination
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="your@email.com"
            value={subscribeEmail}
            onChange={(e) => setSubscribeEmail(e.target.value)}
            className="w-40 border border-r-0 border-[#3a2a1f] bg-[#1c1410] px-3 py-2 text-sm text-[#e8d5b0] outline-none md:w-56"
          />
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("open-newsletter-popup", {
                  detail: { email: subscribeEmail.trim() },
                }),
              )
            }
            className="bg-[#c5a065] px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-[#0f0b08] font-bold hover:bg-[#d4b07a] transition-colors"
          >
            Subscribe
          </button>
        </div>
      </section>

      <section className="grid gap-10 border-b border-[#2a1f17] px-5 py-14 md:px-[56px] md:py-20 md:grid-cols-[200px,1fr]">
        <div>
          <div className="mb-4 h-px w-10 bg-[#8a6e42]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#b09070]">The case for quiet</p>
        </div>
        <div>
          <p className="font-serif text-3xl leading-[1.45] md:text-5xl">
            Your best thinking doesn't happen in meetings.<br /> It happens in the quiet moments{" "}
            <br/><em className="text-[#c5a065]">you can never quite find.</em>
          </p>
          <p className="mt-6 text-sm leading-8 text-[#b09070]">
            That's not a discipline problem.<br />It's a design problem.
          </p>
        </div>
      </section>

      <section className="grid gap-12 border-b border-[#2a1f17] bg-[#160f0a] px-5 py-14 md:px-[56px] md:py-20 md:grid-cols-[1fr,1.4fr]">
        <div>
          <h2 className="mb-2 font-serif text-4xl italic">Silence reveals direction.</h2>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#b09070]">The rest is up to you.</p>
        </div>
        <div className="space-y-4 text-[15px] leading-8 text-[#b09070]">
          <p>
            Most environments take your attention. This one returns it.
          </p>
          <p>
            The Silent Club is a private estate for people who no longer need more input,
            but cannot yet sit still without it. It removes what most environments add —
            noise, pace, expectation, performance.
          </p>
          <p>
            No programme. No facilitator. No one telling you what to do. Silence here is not
            an experience. It is a condition. Clarity doesn't arrive. It emerges when
            interference is removed.
          </p>
          <p className="border-t border-[#2a1f17] pt-5 font-serif text-xl italic text-[#e8d5b0]">
            The Silent Club is not for burnout. It is for what comes after.
          </p>
        </div>
      </section>

      <section className="px-5 py-10 text-center md:px-[56px]">
        <h2 className="font-serif text-4xl leading-none md:text-5xl lg:text-7xl">
          Silence <span className="text-base italic text-[#7a6048]">as a</span>{" "}
          <em className="italic text-[#c5a065]">Service.</em>
        </h2>
        <p className="mt-4 text-sm leading-8 text-[#b09070]">
          Silence, designed for. Structured around. Delivered reliably. That is the service.
        </p>
      </section>

      <WhoBelongsSection whoReviewIndex={whoReviewIndex} setWhoReviewIndex={setWhoReviewIndex} />

      <section className="border-b border-[#2a1f17] bg-[#160f0a] px-5 py-14 md:px-[56px] md:py-20">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl md:text-5xl">Designed Deliberately</h2>
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

      <section className="grid gap-10 border-y border-[#2a1f17] px-5 py-14 md:px-[56px] md:py-20 md:grid-cols-[280px,1fr]">
        <div>
          <div className="mb-4 h-px w-10 bg-[#8a6e42]" />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-[#b09070]">How it works here</p>
          
        </div>
        <div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <h3 className="mb-4 font-serif text-2xl text-[#e8d5b0]">Who this is for:</h3>
              {whoThisIsFor.map((rule, index) => (
                <div key={rule} className="border-b border-[#2a1f17] py-4">
                  <p className="text-sm leading-7 text-[#b09070]">
                    <span className="mr-2 font-serif text-sm font-bold text-[#c5a065]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    - {rule}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="mb-4 font-serif text-2xl text-[#e8d5b0]">What you agree to when you walk in:</h3>
              {walkInRules.map((rule, index) => (
                <div key={rule} className="border-b border-[#2a1f17] py-4">
                  <p className="text-sm leading-7 text-[#b09070]">
                    <span className="mr-2 font-serif text-sm font-bold text-[#c5a065]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    - {rule}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-2 flex items-center justify-center gap-2 text-center font-serif italic text-[#7a6048] md:col-span-2">
              <span className="text-[#c5a065]">★</span>
              <span>If these feel natural to you, you probably belong here.</span>
            </p>
          </div>
        </div>
      </section>

      <ProvidesSection
        provideSlideIndex={provideSlideIndex}
        setProvideSlideIndex={setProvideSlideIndex}
      />

      <DepthSection
        selectedDepth={selectedDepth}
        setSelectedDepth={setSelectedDepth}
        depthVariant={depthVariant}
        setDepthVariant={setDepthVariant}
        depthLabel={depthLabel}
        getDepthPrice={getDepthPrice}
        onOpenModal={() => setOpenModal(true)}
      />

      <section className="grid border-y border-[#2a1f17] bg-[#160f0a] md:grid-cols-2">
        <div className="flex h-full flex-col justify-between px-5 pb-5 pt-5 md:px-[56px]">
          <div className="space-y-5">
            <div className="h-px w-10 bg-[#8a6e42]" />
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#b09070]">Location</p>
            <h2 className="mt mb-10 font-serif text-4xl">
              You can reach it in hours.
              <br />
              <em className="text-[#c5a065]">Most people take years.</em>
            </h2>
            <p className="text-sm leading-8 text-[#b09070]">
              Bhigwan sits on the backwaters of Ujni Dam, one of Maharashtra's most significant
              bird sanctuaries.
            </p>
          </div>
          <div className="space-y-3 pt-6">
            {[
              ["From Pune", "2.5 hours via Pune–Solapur Highway"],
              ["From Mumbai", "5.5 hours via Mumbai–Pune Expressway, then Pune–Solapur Highway"],
              ["Getting here", "Taxi, bus, or train. Pickup arrangements available on request."],
            ].map(([label, value], index, arr) => (
              <div
                key={label}
                className={`grid grid-cols-[120px,1fr] py-3 ${
                  index === arr.length - 1 ? "" : "border-b border-[#2a1f17]"
                }`}
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#e8d5b0]">{label}</p>
                <p className="text-sm text-[#b09070]">{value}</p>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setOpenDrivesModal(true)}
              className="mt-3 border border-[#3a2a1f] bg-[#0f0b08] px-5 py-2 text-[10px] font-medium tracking-[0.16em] text-[#c5a065] transition-colors hover:border-[#8a6e42] hover:text-[#e8d5b0]"
            >
              Book your Drive with Associated Drivers Or you can book an ola or uber from Pune
            </button>
            
          </div>
        </div>
        <div className="border-l border-[#2a1f17]">
          <div className="border-b border-[#2a1f17] pl-4 pr-5 py-5 text-xs font-medium uppercase tracking-[0.24em] text-[#b09070] md:pr-[56px]">
            The Silent Club · Overlooking Ujni Lake · Bhigwan, Maharashtra
          </div>
          <iframe
            title="Bhigwan Map"
            className="h-[240px] w-full md:h-[360px]"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.8023952143494!2d74.78934330608215!3d18.264878020717468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc379a78540dae5%3A0x1887106e21d5085d!2sThe%20Silent%20Club!5e0!3m2!1sen!2sin!4v1772105560153!5m2!1sen!2sin"
          />
          <div className="border-t border-[#2a1f17] pl-4 pr-5 py-4 md:pr-[56px]">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#b09070]">
              Postal Address
            </p>
            <p className="text-sm text-[#b09070]">
              The Silent Club, Kumbhar Goan, Bird Sanctuary, Bhigwan, Maharashtra 413104 | Tel: +91 98903 22494
            </p>
          </div>
        </div>
      </section>

      <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />

      <section className="border-t border-[#2a1f17] bg-[#160f0a] px-5 py-16 text-center md:px-[56px] md:py-24">
        <h2 className="mx-auto mb-8 max-w-4xl font-serif text-3xl leading-tight md:text-5xl lg:text-7xl">
          The rarest luxury in modern life is <em className="italic text-[#c5a065]">uninterrupted time.</em>
        </h2>
        <button onClick={() => setOpenModal(true)} className="bg-[#c5a065] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0f0b08]">
          Request Invite →
        </button>
      </section>

      <SiteFooter />

      <InviteModal open={openModal} onClose={() => setOpenModal(false)} cycleLabel={inviteCycleLabel} />
      {openDrivesModal && (
        <div
          className="fixed inset-0 z-[9200] flex items-center justify-center bg-[#0f0b08]/90 p-6 backdrop-blur-sm"
          onClick={(e) => {
            if (e.currentTarget === e.target) setOpenDrivesModal(false);
          }}
        >
          <div className="w-full max-w-[980px] border border-[#3a2a1f] bg-[#160f0a] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-serif text-3xl text-[#e8d5b0]">Associated Drivers</h3>
              <button
                type="button"
                onClick={() => setOpenDrivesModal(false)}
                className="text-2xl text-[#8a6e42] transition-colors hover:text-[#c5a065]"
              >
                ×
              </button>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                { title: "Pune to Bhigwan", rows: driversByRoute.puneToBhigwan },
                { title: "Bhigwan to Pune", rows: driversByRoute.bhigwanToPune },
              ].map((group) => (
                <div key={group.title} className="border border-[#2a1f17] bg-[#0f0b08]">
                  <div className="border-b border-[#2a1f17] bg-[#1c1410] px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-[#e8d5b0]">
                    {group.title}
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full table-fixed border-collapse">
                      <thead>
                        <tr>
                          <th className="w-[58px] border-b border-r border-[#2a1f17] px-3 py-2 text-left text-[10px] font-normal uppercase tracking-[0.12em] text-[#8a6e42]">No</th>
                          <th className="w-[220px] border-b border-r border-[#2a1f17] px-3 py-2 text-left text-[10px] font-normal uppercase tracking-[0.12em] text-[#8a6e42]">Name</th>
                          <th className="w-[150px] border-b border-[#2a1f17] px-3 py-2 text-left text-[10px] font-normal uppercase tracking-[0.12em] text-[#8a6e42]">Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.rows.map((row) => (
                          <tr key={`${group.title}-${row.num}`}>
                            <td className="whitespace-nowrap border-r border-b border-[#2a1f17] px-3 py-2.5 text-xs text-[#c5a065]">{row.num}</td>
                            <td className="whitespace-nowrap border-r border-b border-[#2a1f17] px-3 py-2.5 text-sm text-[#e8d5b0]">{row.name}</td>
                            <td className="whitespace-nowrap border-b border-[#2a1f17] px-3 py-2.5 text-xs text-[#b09070]">{row.phone}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
