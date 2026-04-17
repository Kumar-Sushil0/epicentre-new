"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";

type EventStatus = "open" | "invite" | "soon";

type EventItem = {
  name: string;
  date: string;
  type: string;
  desc: string;
  capacity: string;
  duration: string;
  status: EventStatus;
};

type Month = {
  key: string;
  name: string;
  year: string;
};

const EVENTS: Record<string, EventItem[]> = {
  "2026-5": [
    {
      name: "The Stillness Sessions",
      date: "Sat, 9 May 2026",
      type: "Sound and Breathwork",
      desc: "A guided evening of sound bath and breathwork. No experience required. Just a willingness to stop moving for two hours and notice what happens.",
      capacity: "12 guests",
      duration: "1 evening",
      status: "open",
    },
    {
      name: "Letters to Your Future Self",
      date: "Sat, 23 May 2026",
      type: "Writing Workshop",
      desc: "A structured writing evening. You arrive with no brief and leave with a letter you will not open for a year. One of the simplest and most disorienting things you can do.",
      capacity: "16 guests",
      duration: "1 evening",
      status: "open",
    },
  ],
  "2026-6": [
    {
      name: "The Silent Supper",
      date: "Sat, 6 June 2026",
      type: "Communal Experience",
      desc: "A full dinner in complete silence. No phones. No conversation. Just food, presence, and the strange intimacy of sharing a meal with strangers who are all trying the same thing.",
      capacity: "20 guests",
      duration: "1 evening",
      status: "invite",
    },
    {
      name: "Dawn Photography Walk",
      date: "Sun, 14 June 2026",
      type: "Photography",
      desc: "Ujni Lake at first light with a photographer who knows when to stop talking. The brief: one image that required patience.",
      capacity: "8 guests",
      duration: "Dawn to Breakfast",
      status: "open",
    },
    {
      name: "Spoken Word Under Stars",
      date: "Sat, 28 June 2026",
      type: "Performance Evening",
      desc: "An intimate performance evening on the estate grounds. Three voices, an open sky, and an audience that came here already prepared to listen.",
      capacity: "24 guests",
      duration: "1 evening",
      status: "soon",
    },
  ],
  "2026-7": [
    {
      name: "The Thinking Room",
      date: "Sat-Sun, 11-12 July 2026",
      type: "Deep Work Weekend",
      desc: "A structured solo weekend. You bring one project, one question, or one decision. The estate provides everything else. No programme. No output required.",
      capacity: "10 guests",
      duration: "Full weekend",
      status: "invite",
    },
    {
      name: "Clay and Quiet",
      date: "Sat, 25 July 2026",
      type: "Making Workshop",
      desc: "A pottery workshop with no instruction. Clay, tools, time. A facilitator present but not directing. What you make is yours. The process is the point.",
      capacity: "10 guests",
      duration: "1 day",
      status: "open",
    },
  ],
  "2026-8": [
    {
      name: "Filmmaker's Residency",
      date: "Sat-Sun, 8-9 Aug 2026",
      type: "Creative Residency",
      desc: "A weekend for one filmmaker and their lens. Full estate access. No brief, no audience, no deliverable. Just the place and the light and two days to see what happens.",
      capacity: "1 filmmaker",
      duration: "Full weekend",
      status: "invite",
    },
    {
      name: "The Last Sunday",
      date: "Sun, 30 Aug 2026",
      type: "Open Gathering",
      desc: "An open-format creative gathering to close the season. Artists, makers, thinkers, writers. No agenda. Doors open at noon. The estate does the rest.",
      capacity: "30 guests",
      duration: "Noon to night",
      status: "soon",
    },
  ],
};

const MONTHS: Month[] = [
  { key: "2026-5", name: "May", year: "2026" },
  { key: "2026-6", name: "June", year: "2026" },
  { key: "2026-7", name: "July", year: "2026" },
  { key: "2026-8", name: "August", year: "2026" },
  { key: "2026-9", name: "September", year: "2026" },
  { key: "2026-10", name: "October", year: "2026" },
  { key: "2026-11", name: "November", year: "2026" },
  { key: "2026-12", name: "December", year: "2026" },
];

const INVITE_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const INVITE_TIMES = ["09:00", "10:30", "12:00", "14:00", "16:00", "18:00"];

const WEEK_DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function ExxacPage() {
  const [calOffset, setCalOffset] = useState(0);
  const [openEventKey, setOpenEventKey] = useState<string | null>(null);
  const [showCollabModal, setShowCollabModal] = useState(false);
  const [collabSubmitted, setCollabSubmitted] = useState(false);

  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteStep, setInviteStep] = useState(1);
  const [invQ1, setInvQ1] = useState("");
  const [invQ2, setInvQ2] = useState("");
  const [invDate, setInvDate] = useState<Date | null>(null);
  const [invTime, setInvTime] = useState<string | null>(null);
  const now = new Date();
  const [invCalY, setInvCalY] = useState(now.getFullYear());
  const [invCalM, setInvCalM] = useState(now.getMonth());
  const [invName, setInvName] = useState("");
  const [invEmail, setInvEmail] = useState("");
  const [invPhone, setInvPhone] = useState("");

  const visibleMonths = useMemo(() => MONTHS.slice(calOffset, calOffset + 4), [calOffset]);
  const calRange = `${visibleMonths[0]?.name ?? ""} - ${visibleMonths[3]?.name ?? ""} ${visibleMonths[3]?.year ?? ""}`;

  const openInviteModal = () => {
    const today = new Date();
    setInviteStep(1);
    setInvQ1("");
    setInvQ2("");
    setInvDate(null);
    setInvTime(null);
    setInvName("");
    setInvEmail("");
    setInvPhone("");
    setInvCalY(today.getFullYear());
    setInvCalM(today.getMonth());
    setShowInviteModal(true);
  };

  const closeInviteModal = () => {
    setShowInviteModal(false);
    setInviteStep(1);
  };

  const onInviteContinue = () => {
    if (inviteStep === 1) {
      if (!invQ1.trim()) return;
      setInviteStep(2);
      return;
    }
    if (inviteStep === 2) {
      if (!invDate || !invTime) return;
      setInviteStep(3);
      return;
    }
    if (inviteStep === 3) {
      if (!invName.trim() || !invEmail.trim()) return;
      setInviteStep(99);
    }
  };

  const onInviteBack = () => {
    if (inviteStep > 1 && inviteStep < 99) {
      setInviteStep(inviteStep - 1);
    }
  };

  const changeInviteMonth = (dir: -1 | 1) => {
    let month = invCalM + dir;
    let year = invCalY;
    if (month < 0) {
      month = 11;
      year -= 1;
    } else if (month > 11) {
      month = 0;
      year += 1;
    }
    setInvCalM(month);
    setInvCalY(year);
  };

  const calendarDays = useMemo(() => {
    const firstDay = new Date(invCalY, invCalM, 1).getDay();
    const daysInMonth = new Date(invCalY, invCalM + 1, 0).getDate();
    const cells: (Date | null)[] = [];

    for (let i = 0; i < firstDay; i += 1) {
      cells.push(null);
    }
    for (let day = 1; day <= daysInMonth; day += 1) {
      cells.push(new Date(invCalY, invCalM, day));
    }
    return cells;
  }, [invCalY, invCalM]);

  const inviteSelectionText =
    invDate && invTime
      ? `${WEEK_DAYS_SHORT[invDate.getDay()]} ${invDate.getDate()} ${MONTHS_SHORT[invDate.getMonth()]} - ${invTime}`
      : "";

  const stepDotClass = (dotStep: number) => {
    if (inviteStep === 99 || dotStep < inviteStep) return "step-dot complete";
    if (dotStep === inviteStep) return "step-dot current";
    return "step-dot";
  };

  const statusClassMap: Record<EventStatus, string> = {
    open: "s-open",
    invite: "s-invite",
    soon: "s-soon",
  };

  const statusLabelMap: Record<EventStatus, string> = {
    open: "Open",
    invite: "Invite Only",
    soon: "Coming Soon",
  };

  const dotClassMap: Record<EventStatus, string> = {
    open: "event-dot open",
    invite: "event-dot",
    soon: "event-dot soon",
  };

  const onCollabSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCollabSubmitted(true);
  };

  return (
    <>
      <SiteHeader active="events" />

      <div className="page">
        <div className="cal-header">
          <div>
            <div className="cal-label">Weekend Events</div>
            <div className="cal-title">What&apos;s happening here</div>
          </div>
          <div className="cal-nav">
            <button className="cal-nav-btn" type="button" onClick={() => setCalOffset((v) => Math.max(0, v - 1))}>
              &#8249;
            </button>
            <div className="cal-range">{calRange}</div>
            <button
              className="cal-nav-btn"
              type="button"
              onClick={() => setCalOffset((v) => Math.min(MONTHS.length - 4, v + 1))}
            >
              &#8250;
            </button>
          </div>
        </div>

        <div className="calendar">
          {visibleMonths.map((month) => {
            const monthEvents = EVENTS[month.key] ?? [];
            const monthCount =
              monthEvents.length > 0
                ? `${monthEvents.length} event${monthEvents.length > 1 ? "s" : ""}`
                : "Nothing scheduled";

            return (
              <div className="month-col" key={month.key}>
                <div className="month-header">
                  <div className="month-name">{month.name}</div>
                  <div className="month-year">{month.year}</div>
                  <div className="month-count">{monthCount}</div>
                </div>
                <div className="month-body">
                  {monthEvents.length === 0 ? (
                    <div className="month-empty">
                      No events this month.
                      <br />
                      Could be yours.
                    </div>
                  ) : (
                    monthEvents.map((ev, idx) => {
                      const eventKey = `${month.key}-${idx}`;
                      const isOpen = openEventKey === eventKey;
                      return (
                        <div className={`event-item ${isOpen ? "open" : ""}`} key={eventKey}>
                          <button
                            className="event-trigger"
                            type="button"
                            onClick={() => setOpenEventKey(isOpen ? null : eventKey)}
                          >
                            <div className={dotClassMap[ev.status]} />
                            <div className="event-info">
                              <div className="event-name">{ev.name}</div>
                              <div className="event-date">{ev.date}</div>
                            </div>
                            <div className="event-chevron">&#9662;</div>
                          </button>

                          <div className="event-body">
                            <div className="event-body-inner">
                              <div className="event-type-tag">{ev.type}</div>
                              <p className="event-desc">{ev.desc}</p>
                              <div className="event-meta-row">
                                <div className="event-meta-item">
                                  Capacity <span>{ev.capacity}</span>
                                </div>
                                <div className="event-meta-item">
                                  Duration <span>{ev.duration}</span>
                                </div>
                              </div>
                              <div className={`event-status ${statusClassMap[ev.status]}`}>{statusLabelMap[ev.status]}</div>
                              <br />
                              <button className="event-cta" type="button" onClick={openInviteModal}>
                                Express interest
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="creator-cta">
          <div>
            <div className="creator-cta-label">For creators and experience designers</div>
            <h2 className="creator-cta-heading">
              Have something in mind?
              <br />
              <em>Bring it here.</em>
            </h2>
            <p className="creator-cta-desc">
              The Silent Club on weekends is a blank canvas. The right space, the right silence, and an audience that came
              here to feel something. If you are a musician, artist, filmmaker, facilitator or experience designer, we would
              love to hear what you are thinking.
            </p>
          </div>
          <button
            className="creator-cta-btn"
            type="button"
            onClick={() => {
              setCollabSubmitted(false);
              setShowCollabModal(true);
            }}
          >
            Collaborate with us
          </button>
        </div>
      </div>

      {showCollabModal && (
        <div className="cmodal" onClick={() => setShowCollabModal(false)}>
          <div className="cmodal-box" onClick={(e) => e.stopPropagation()}>
            <button className="cmodal-x" type="button" onClick={() => setShowCollabModal(false)}>
              &times;
            </button>
            {!collabSubmitted ? (
              <>
                <div className="cmodal-label">Collaboration Inquiry</div>
                <h2 className="cmodal-heading">Tell us what you&apos;re building.</h2>
                <p className="cmodal-sub">No brief required. Just tell us what you&apos;re imagining.</p>
                <form className="cmodal-form" onSubmit={onCollabSubmit}>
                  <div className="cmodal-row">
                    <div className="cmodal-field">
                      <label htmlFor="col-name">Your name</label>
                      <input id="col-name" type="text" placeholder="Full name" />
                    </div>
                    <div className="cmodal-field">
                      <label htmlFor="col-email">Email</label>
                      <input id="col-email" type="email" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div className="cmodal-field">
                    <label htmlFor="col-type">Type of experience</label>
                    <select id="col-type" defaultValue="">
                      <option value="">Select type</option>
                      <option>Music performance</option>
                      <option>Art installation</option>
                      <option>Film screening</option>
                      <option>Workshop or facilitation</option>
                      <option>Creative residency</option>
                      <option>Spoken word / poetry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="cmodal-row">
                    <div className="cmodal-field">
                      <label htmlFor="col-audience">Expected audience size</label>
                      <input id="col-audience" type="text" placeholder="e.g. 15-20 people" />
                    </div>
                    <div className="cmodal-field">
                      <label htmlFor="col-timeframe">Preferred timeframe</label>
                      <input id="col-timeframe" type="text" placeholder="e.g. July 2026" />
                    </div>
                  </div>
                  <div className="cmodal-field">
                    <label htmlFor="col-idea">Tell us what you&apos;re imagining</label>
                    <textarea id="col-idea" rows={4} placeholder="A paragraph is enough..." />
                  </div>
                  <button className="cmodal-submit" type="submit">
                    Send inquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="cmodal-success show">
                <div className="cmodal-success-title">Received.</div>
                <p className="cmodal-success-copy">We will be in touch within 48 hours.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {showInviteModal && (
        <div className="invite-modal-wrap" onClick={closeInviteModal}>
          <div className="invite-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="invite-top">
              <div className="invite-steps">
                <div className={stepDotClass(1)}>{inviteStep > 1 || inviteStep === 99 ? "✓" : "1"}</div>
                <div className="step-line" />
                <div className={stepDotClass(2)}>{inviteStep > 2 || inviteStep === 99 ? "✓" : "2"}</div>
                <div className="step-line" />
                <div className={stepDotClass(3)}>{inviteStep === 99 ? "✓" : "3"}</div>
              </div>
              <button className="invite-close" type="button" onClick={closeInviteModal}>
                &times;
              </button>
            </div>

            <div className="invite-main">
              {inviteStep === 1 && (
                <div className="inv-step">
                  <div className="inv-eyebrow">Before we speak</div>
                  <h2 className="inv-heading">Two questions</h2>
                  <div className="inv-fields">
                    <div>
                      <label className="inv-label" htmlFor="inv_q1">
                        What are you hoping to get from this stay?
                      </label>
                      <textarea
                        id="inv_q1"
                        rows={3}
                        placeholder="Take your time..."
                        value={invQ1}
                        onChange={(e) => setInvQ1(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="inv-label" htmlFor="inv_q2">
                        Anything we should know before we speak?
                      </label>
                      <textarea
                        id="inv_q2"
                        rows={3}
                        placeholder="Share any context..."
                        value={invQ2}
                        onChange={(e) => setInvQ2(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {inviteStep === 2 && (
                <div className="inv-step">
                  <div className="inv-eyebrow">Pick a time</div>
                  <h2 className="inv-heading">15-minute conversation</h2>
                  <div className="inv-cal-wrap">
                    <div className="inv-cal-head">
                      <button type="button" onClick={() => changeInviteMonth(-1)}>
                        &lsaquo;
                      </button>
                      <span>{`${INVITE_MONTHS[invCalM]} ${invCalY}`}</span>
                      <button type="button" onClick={() => changeInviteMonth(1)}>
                        &rsaquo;
                      </button>
                    </div>
                    <div className="inv-day-row">
                      <div>S</div>
                      <div>M</div>
                      <div>T</div>
                      <div>W</div>
                      <div>T</div>
                      <div>F</div>
                      <div>S</div>
                    </div>
                    <div className="inv-grid">
                      {calendarDays.map((date, i) => {
                        if (!date) return <div key={`blank-${i}`} />;

                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        const past = date < today;
                        const selected = !!invDate && invDate.toDateString() === date.toDateString();

                        return (
                          <button
                            key={date.toISOString()}
                            type="button"
                            disabled={past}
                            className={`inv-day ${selected ? "selected" : ""}`}
                            onClick={() => {
                              setInvDate(new Date(date));
                              setInvTime(null);
                            }}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="inv-slot-label">Choose a slot</div>
                  <div className="inv-slots">
                    {INVITE_TIMES.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`inv-slot ${invTime === time ? "selected" : ""}`}
                        onClick={() => setInvTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {!!inviteSelectionText && <div className="inv-selection">{inviteSelectionText}</div>}
                </div>
              )}

              {inviteStep === 3 && (
                <div className="inv-step">
                  <div className="inv-eyebrow">Your details</div>
                  <h2 className="inv-heading">Almost done</h2>
                  <p className="inv-copy">We will confirm your conversation within 24 hours.</p>
                  <div className="inv-fields">
                    <div>
                      <label className="inv-label" htmlFor="inv_name">
                        Full name
                      </label>
                      <input
                        id="inv_name"
                        type="text"
                        placeholder="Your full name"
                        value={invName}
                        onChange={(e) => setInvName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="inv-label" htmlFor="inv_email">
                        Email
                      </label>
                      <input
                        id="inv_email"
                        type="email"
                        placeholder="email@example.com"
                        value={invEmail}
                        onChange={(e) => setInvEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="inv-label" htmlFor="inv_phone">
                        Phone
                      </label>
                      <input
                        id="inv_phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={invPhone}
                        onChange={(e) => setInvPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {inviteStep === 99 && (
                <div className="inv-thanks">
                  <div className="inv-check">&#10003;</div>
                  <div className="inv-thanks-title">Thank you.</div>
                  <p>Application received. We will confirm within 24 hours.</p>
                  <button type="button" onClick={closeInviteModal}>
                    Close
                  </button>
                </div>
              )}
            </div>

            {inviteStep !== 99 && (
              <div className="invite-footer">
                {inviteStep > 1 && (
                  <button className="inv-back" type="button" onClick={onInviteBack}>
                    Back
                  </button>
                )}
                <button className="inv-next" type="button" onClick={onInviteContinue}>
                  {inviteStep === 3 ? "Submit" : "Continue"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        :global(body) {
          background: #0f0b08;
          color: #e8d5b0;
          font-family: "Jost", sans-serif;
          font-weight: 300;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }
        :global(body)::after {
          content: "";
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          opacity: 0.4;
        }
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 900;
          background: rgba(15, 11, 8, 0.96);
          border-bottom: 1px solid #2a1f17;
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 6vw;
        }
        .nav-brand {
          font-family: "Cormorant", Georgia, serif;
          font-size: 1.1rem;
          color: #e8d5b0;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }
        .nav-links a,
        .nav-links span {
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #7a6048;
          text-decoration: none;
        }
        .nav-links .active {
          color: #c5a065;
        }
        .nav-cta {
          font-size: 0.65rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0f0b08;
          background: #c5a065;
          padding: 9px 22px;
          border: none;
          cursor: pointer;
          font-family: "Jost", sans-serif;
        }
        .page {
          padding-top: 60px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .cal-header {
          padding: clamp(32px, 4vw, 48px) 6vw clamp(20px, 3vw, 32px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #2a1f17;
          background: #160f0a;
        }
        .cal-label {
          font-size: 0.58rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #7a6048;
          margin-bottom: 8px;
        }
        .cal-title {
          font-family: "Cormorant", Georgia, serif;
          font-weight: 300;
          font-size: clamp(1.6rem, 3vw, 2.8rem);
          color: #e8d5b0;
          line-height: 1;
        }
        .cal-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cal-nav-btn {
          width: 36px;
          height: 36px;
          border: 1px solid #3a2a1f;
          background: none;
          color: #7a6048;
          cursor: pointer;
          font-size: 1.2rem;
        }
        .cal-range {
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7a6048;
          padding: 0 12px;
        }
        .calendar {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #2a1f17;
          border-bottom: 1px solid #2a1f17;
        }
        .month-col {
          background: #0f0b08;
          display: flex;
          flex-direction: column;
        }
        .month-header {
          padding: 20px 20px 16px;
          border-bottom: 1px solid #2a1f17;
          background: #160f0a;
          position: sticky;
          top: 60px;
          z-index: 10;
        }
        .month-name {
          font-family: "Cormorant", Georgia, serif;
          font-size: 1.2rem;
          color: #c5a065;
          line-height: 1;
        }
        .month-year,
        .month-count {
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #7a6048;
          margin-top: 6px;
        }
        .month-empty {
          padding: 28px 20px;
          font-family: "Cormorant", Georgia, serif;
          font-style: italic;
          color: #3a2a1f;
        }
        .event-item {
          border-bottom: 1px solid #2a1f17;
        }
        .event-item.open {
          background: #160f0a;
        }
        .event-trigger {
          width: 100%;
          background: none;
          border: none;
          padding: 14px 20px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
          text-align: left;
        }
        .event-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #8a6e42;
          margin-top: 5px;
          flex-shrink: 0;
        }
        .event-dot.open {
          background: #c5a065;
        }
        .event-dot.soon {
          background: #7a6048;
        }
        .event-name {
          font-family: "Cormorant", Georgia, serif;
          font-size: 1rem;
          color: #e8d5b0;
        }
        .event-date {
          font-size: 0.62rem;
          letter-spacing: 0.08em;
          color: #7a6048;
        }
        .event-chevron {
          color: #7a6048;
          font-size: 0.75rem;
          transition: transform 0.3s;
          margin-top: 4px;
        }
        .event-item.open .event-chevron {
          transform: rotate(180deg);
        }
        .event-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .event-item.open .event-body {
          max-height: 400px;
        }
        .event-body-inner {
          padding: 0 20px 20px 39px;
        }
        .event-type-tag {
          display: inline-block;
          font-size: 0.52rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #8a6e42;
          border: 1px solid #3a2a1f;
          padding: 3px 9px;
          margin-bottom: 10px;
        }
        .event-desc {
          font-family: "Cormorant", Georgia, serif;
          font-size: 0.9rem;
          color: #b09070;
          line-height: 1.7;
          margin-bottom: 12px;
        }
        .event-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 10px;
        }
        .event-meta-item {
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #7a6048;
        }
        .event-meta-item span {
          color: #b09070;
        }
        .event-status {
          display: inline-block;
          font-size: 0.52rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 3px 9px;
          margin-bottom: 14px;
        }
        .s-open {
          background: rgba(197, 160, 101, 0.08);
          color: #c5a065;
          border: 1px solid rgba(197, 160, 101, 0.2);
        }
        .s-invite {
          background: rgba(138, 110, 66, 0.08);
          color: #8a6e42;
          border: 1px solid #3a2a1f;
        }
        .s-soon {
          background: rgba(122, 96, 72, 0.08);
          color: #7a6048;
          border: 1px solid #2a1f17;
        }
        .event-cta {
          display: inline-block;
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0f0b08;
          background: #c5a065;
          padding: 8px 18px;
          border: none;
          cursor: pointer;
          font-family: "Jost", sans-serif;
        }
        .creator-cta {
          padding: clamp(48px, 6vw, 72px) 6vw;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
          background: #160f0a;
          border-top: 1px solid #2a1f17;
        }
        .creator-cta-label {
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #7a6048;
          margin-bottom: 10px;
        }
        .creator-cta-heading {
          font-family: "Cormorant", Georgia, serif;
          font-weight: 300;
          font-size: clamp(1.4rem, 2.5vw, 2.2rem);
          color: #e8d5b0;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .creator-cta-heading em {
          font-style: italic;
          color: #c5a065;
        }
        .creator-cta-desc {
          font-size: 0.84rem;
          color: #7a6048;
          line-height: 1.7;
          max-width: 520px;
        }
        .creator-cta-btn {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0f0b08;
          background: #c5a065;
          padding: 14px 28px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }
        .cmodal {
          position: fixed;
          inset: 0;
          z-index: 8000;
          background: rgba(15, 11, 8, 0.88);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .cmodal-box {
          background: #160f0a;
          border: 1px solid #3a2a1f;
          max-width: 520px;
          width: 100%;
          padding: 44px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }
        .cmodal-x {
          position: absolute;
          top: 14px;
          right: 18px;
          background: none;
          border: 1px solid #2a1f17;
          color: #7a6048;
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
        .cmodal-label,
        .inv-eyebrow {
          font-size: 0.56rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7a6048;
          margin-bottom: 12px;
        }
        .cmodal-heading,
        .inv-heading {
          font-family: "Cormorant", Georgia, serif;
          font-size: 1.8rem;
          font-weight: 300;
          color: #e8d5b0;
          margin-bottom: 8px;
        }
        .cmodal-sub {
          font-size: 0.8rem;
          color: #7a6048;
          line-height: 1.65;
          margin-bottom: 24px;
        }
        .cmodal-form,
        .inv-fields {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .cmodal-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .cmodal-field label,
        .inv-label {
          display: block;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #7a6048;
          margin-bottom: 6px;
        }
        .cmodal-field input,
        .cmodal-field textarea,
        .cmodal-field select,
        .inv-step input,
        .inv-step textarea {
          width: 100%;
          background: #1c1410;
          border: 1px solid #2a1f17;
          padding: 10px 12px;
          font-size: 0.84rem;
          color: #e8d5b0;
          outline: none;
        }
        .cmodal-submit {
          background: #c5a065;
          color: #0f0b08;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 12px;
          border: none;
          cursor: pointer;
          margin-top: 4px;
        }
        .cmodal-success {
          text-align: center;
          padding: 32px 0;
        }
        .cmodal-success-title {
          font-family: "Cormorant", Georgia, serif;
          font-size: 2rem;
          font-weight: 300;
          color: #e8d5b0;
          margin-bottom: 10px;
        }
        .cmodal-success-copy {
          font-size: 0.84rem;
          color: #7a6048;
          line-height: 1.7;
          max-width: 280px;
          margin: 0 auto;
        }
        .invite-modal-wrap {
          position: fixed;
          inset: 0;
          z-index: 9000;
          background: rgba(15, 11, 8, 0.88);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .invite-modal-box {
          background: #160f0a;
          border: 1px solid #3a2a1f;
          max-width: 500px;
          width: 100%;
          max-height: 92vh;
          overflow: hidden;
        }
        .invite-top {
          padding: 16px 20px;
          border-bottom: 1px solid #2a1f17;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .invite-steps {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .step-line {
          height: 1px;
          width: 20px;
          background: #2a1f17;
        }
        .step-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid #2a1f17;
          color: #7a6048;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
        }
        .step-dot.current {
          background: rgba(197, 160, 101, 0.15);
          border: none;
          color: #c5a065;
        }
        .step-dot.complete {
          background: rgba(107, 155, 94, 0.15);
          border: none;
          color: #6b9b5e;
        }
        .invite-close {
          border: 1px solid #2a1f17;
          background: none;
          color: #7a6048;
          width: 30px;
          height: 30px;
          cursor: pointer;
          font-size: 1rem;
        }
        .invite-main {
          height: 420px;
          overflow-y: auto;
          padding: 24px 20px 0;
        }
        .inv-copy {
          font-size: 0.78rem;
          color: #7a6048;
          margin-bottom: 20px;
        }
        .inv-cal-wrap {
          border: 1px solid #2a1f17;
          margin-bottom: 12px;
        }
        .inv-cal-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: #1c1410;
          border-bottom: 1px solid #2a1f17;
        }
        .inv-cal-head button {
          border: 1px solid #2a1f17;
          background: none;
          color: #7a6048;
          width: 26px;
          height: 26px;
          cursor: pointer;
          font-size: 1.1rem;
        }
        .inv-cal-head span {
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b09070;
        }
        .inv-day-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          padding: 6px 8px 2px;
          background: #160f0a;
        }
        .inv-day-row div {
          text-align: center;
          font-size: 0.5rem;
          color: #7a6048;
          padding: 3px 0;
        }
        .inv-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          padding: 2px 8px 8px;
          background: #160f0a;
          gap: 2px;
        }
        .inv-day {
          text-align: center;
          padding: 5px 2px;
          font-size: 0.78rem;
          border: none;
          border-radius: 2px;
          background: none;
          color: #e8d5b0;
          cursor: pointer;
        }
        .inv-day:disabled {
          color: #3a2a1f;
          cursor: default;
        }
        .inv-day.selected {
          background: #c5a065;
          color: #0f0b08;
        }
        .inv-slot-label {
          font-size: 0.58rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #7a6048;
          margin-bottom: 8px;
        }
        .inv-slots {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin-bottom: 10px;
        }
        .inv-slot {
          padding: 8px 4px;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          cursor: pointer;
          border: 1px solid #2a1f17;
          background: #1c1410;
          color: #b09070;
        }
        .inv-slot.selected {
          border-color: #8a6e42;
          background: rgba(197, 160, 101, 0.1);
          color: #e8d5b0;
        }
        .inv-selection {
          padding: 8px 12px;
          background: #1c1410;
          border: 1px solid #2a1f17;
          font-size: 0.78rem;
          color: #b09070;
        }
        .invite-footer {
          padding: 16px 20px;
          border-top: 1px solid #2a1f17;
          display: flex;
          gap: 8px;
        }
        .inv-back,
        .inv-next {
          padding: 12px;
          font-size: 0.62rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: "Jost", sans-serif;
        }
        .inv-back {
          flex: 1;
          border: 1px solid #2a1f17;
          background: none;
          color: #7a6048;
        }
        .inv-next {
          flex: 2;
          border: none;
          background: #c5a065;
          color: #0f0b08;
        }
        .inv-thanks {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px 20px;
        }
        .inv-check {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #8a6e42;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 1.2rem;
          color: #c5a065;
        }
        .inv-thanks-title {
          font-family: "Cormorant", Georgia, serif;
          font-size: 2rem;
          font-weight: 300;
          color: #e8d5b0;
          margin-bottom: 10px;
        }
        .inv-thanks p {
          font-size: 0.82rem;
          color: #7a6048;
          line-height: 1.7;
          max-width: 300px;
          margin: 0 auto 24px;
        }
        .inv-thanks button {
          border: 1px solid #2a1f17;
          background: none;
          padding: 9px 22px;
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          color: #b09070;
        }
        @media (max-width: 860px) {
          .nav-links {
            display: none;
          }
          .calendar {
            grid-template-columns: 1fr 1fr;
          }
          .creator-cta {
            grid-template-columns: 1fr;
          }
          .cmodal-row {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 540px) {
          .calendar {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
