export const FAQ_HTML = String.raw`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FAQ — The Silent Club</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap" rel="stylesheet">
<style>
:root {
  --bg:#0f0b08;--bg-2:#160f0a;--bg-3:#1c1410;
  --gold:#c5a065;--gold-dim:#8a6e42;--gold-pale:#e8d5b0;
  --text-2:#b09070;--text-3:#7a6048;
  --rule:#2a1f17;--rule-2:#3a2a1f;
  --serif:'Cormorant',Georgia,serif;
  --sans:'Jost',sans-serif;
  --ease:cubic-bezier(0.25,0.46,0.45,0.94);
  --g:6vw;--max:1200px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{font-size:16px;scroll-behavior:smooth;}
body{background:var(--bg);color:var(--gold-pale);font-family:var(--sans);font-weight:300;line-height:1.7;-webkit-font-smoothing:antialiased;}
body::after{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");pointer-events:none;z-index:9999;opacity:0.4;}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:900;background:rgba(15,11,8,0.94);backdrop-filter:blur(16px);border-bottom:1px solid var(--rule);}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:60px;max-width:var(--max);margin:0 auto;padding:0 var(--g);}
.nav-brand{font-family:var(--serif);font-size:1.1rem;font-weight:400;color:var(--gold-pale);letter-spacing:0.04em;cursor:pointer;text-decoration:none;}
.nav-links{display:flex;align-items:center;gap:32px;list-style:none;}
.nav-links a{font-size:0.68rem;font-weight:400;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);cursor:pointer;transition:color 0.2s;text-decoration:none;}
.nav-links a:hover{color:var(--gold);}
.nav-cta{font-size:0.65rem;font-weight:400;letter-spacing:0.16em;text-transform:uppercase;color:var(--bg);background:var(--gold);padding:9px 22px;border:none;cursor:pointer;font-family:var(--sans);transition:background 0.2s;}
.nav-cta:hover{background:var(--gold-pale);}
@media(max-width:860px){.nav-links{display:none;}}

/* HERO */
.faq-hero{
  padding:clamp(96px,12vw,140px) var(--g) clamp(64px,8vw,96px);
  padding-top:calc(60px + clamp(64px,8vw,96px));
  border-bottom:1px solid var(--rule);
  display:grid;grid-template-columns:1fr 1fr;
  gap:80px;align-items:end;
}
.faq-hero-label{font-size:0.6rem;font-weight:400;letter-spacing:0.24em;text-transform:uppercase;color:var(--text-3);margin-bottom:16px;}
.faq-hero-heading{font-family:var(--serif);font-weight:300;font-size:clamp(2.4rem,5vw,5rem);color:var(--gold-pale);line-height:0.95;letter-spacing:-0.02em;}
.faq-hero-heading em{font-style:italic;color:var(--gold);}
.faq-hero-intro{font-size:0.9rem;font-weight:300;line-height:1.85;color:var(--text-2);margin-bottom:32px;}
.faq-hero-intro em{font-family:var(--serif);font-style:italic;color:var(--gold-pale);}

/* SECTION NAV TABS */
.faq-tabs{
  display:flex;gap:1px;background:var(--rule);
  border-bottom:1px solid var(--rule);
  position:sticky;top:60px;z-index:100;
  overflow-x:auto;
  scrollbar-width:none;
  -ms-overflow-style:none;
}
.faq-tabs::-webkit-scrollbar{display:none;}
.faq-tab{
  flex:1;min-width:fit-content;
  background:var(--bg-2);border:none;
  padding:16px var(--g);
  font-family:var(--sans);font-size:0.62rem;
  font-weight:400;letter-spacing:0.16em;
  text-transform:uppercase;color:var(--text-3);
  cursor:pointer;transition:background 0.2s,color 0.2s;
  text-align:left;white-space:nowrap;
  border-bottom:2px solid transparent;
  position:relative;
}
.faq-tab:hover{color:var(--text-2);}
.faq-tab.active{background:var(--bg);color:var(--gold-pale);border-bottom-color:var(--gold);}

/* FAQ BODY */
.faq-body{
  display:grid;
  grid-template-columns:280px 1fr;
  gap:0;
  min-height:60vh;
}

/* LEFT — section index */
.faq-index{
  border-right:1px solid var(--rule);
  padding:clamp(40px,5vw,64px) clamp(24px,3vw,36px);
  position:sticky;top:calc(60px + 53px);
  align-self:start;
  height:calc(100vh - 113px);
  overflow-y:auto;
  scrollbar-width:none;
  -ms-overflow-style:none;
}
.faq-index::-webkit-scrollbar{display:none;}
.faq-index-section{
  margin-bottom:32px;
}
.faq-index-section.active .faq-index-heading{color:var(--gold);}
.faq-index-heading{
  font-size:0.58rem;font-weight:400;
  letter-spacing:0.22em;text-transform:uppercase;
  color:var(--text-3);margin-bottom:12px;
  transition:color 0.2s;
}
.faq-index-link{
  display:block;font-size:0.8rem;font-weight:300;
  color:var(--text-3);padding:4px 0;
  cursor:pointer;transition:color 0.2s;
  border:none;background:none;
  font-family:var(--sans);text-align:left;
  line-height:1.5;
}
.faq-index-link:hover{color:var(--gold);}
.faq-index-link.active{color:var(--gold-pale);}

/* RIGHT — questions */
.faq-sections{padding:0;}

.faq-section{
  border-bottom:1px solid var(--rule);
}

.faq-section-header{
  padding:clamp(48px,6vw,72px) clamp(40px,5vw,64px) clamp(24px,3vw,36px);
  border-bottom:1px solid var(--rule);
  background:var(--bg-2);
}
.faq-section-num{
  font-size:0.6rem;font-weight:400;
  letter-spacing:0.24em;text-transform:uppercase;
  color:var(--text-3);margin-bottom:12px;
}
.faq-section-title{
  font-family:var(--serif);font-weight:300;
  font-size:clamp(1.8rem,3vw,2.8rem);
  color:var(--gold-pale);line-height:1.1;
  letter-spacing:-0.01em;margin-bottom:12px;
}
.faq-section-desc{
  font-size:0.875rem;font-weight:300;
  line-height:1.8;color:var(--text-3);
  max-width:560px;
  font-family:var(--serif);font-style:italic;
}

/* ACCORDION */
.faq-list{display:flex;flex-direction:column;}

.faq-item{border-bottom:1px solid var(--rule);}
.faq-item:first-child{border-top:none;}

.faq-question{
  width:100%;background:none;border:none;
  padding:22px clamp(40px,5vw,64px);
  display:flex;align-items:flex-start;
  justify-content:space-between;gap:24px;
  cursor:pointer;
  font-family:var(--serif);font-size:1.1rem;
  font-weight:400;color:var(--text-2);
  text-align:left;transition:color 0.2s;
  line-height:1.4;
}
.faq-question:hover,.faq-item.open .faq-question{color:var(--gold-pale);}

.faq-icon{
  font-size:1rem;color:var(--gold-dim);
  flex-shrink:0;margin-top:4px;
  transition:transform 0.35s var(--ease),color 0.2s;
  line-height:1;
}
.faq-item.open .faq-icon{transform:rotate(45deg);color:var(--gold);}

.faq-answer{max-height:0;overflow:hidden;transition:max-height 0.45s var(--ease);}
.faq-answer-inner{
  padding:0 clamp(40px,5vw,64px) 28px;
  font-size:0.9rem;font-weight:300;
  line-height:1.85;color:#d4c4a8;
  max-width:640px;
}
.faq-item.open .faq-answer{max-height:400px;}

/* CTA BAND */
.faq-cta{
  padding:clamp(80px,10vw,120px) var(--g);
  background:var(--bg-2);text-align:center;
  border-top:1px solid var(--rule);
  position:relative;overflow:hidden;
}
.faq-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 60%,rgba(197,160,101,0.05) 0%,transparent 65%);pointer-events:none;}
.faq-cta-heading{font-family:var(--serif);font-weight:300;font-size:clamp(2rem,4vw,3.6rem);color:var(--gold-pale);line-height:1.15;letter-spacing:-0.01em;margin-bottom:16px;}
.faq-cta-heading em{font-style:italic;color:var(--gold);}
.faq-cta-sub{font-size:0.875rem;font-weight:300;color:var(--text-3);margin-bottom:36px;font-family:var(--serif);font-style:italic;}
.btn-gold{display:inline-block;background:var(--gold);color:var(--bg);font-size:0.65rem;font-weight:400;letter-spacing:0.18em;text-transform:uppercase;padding:14px 32px;border:none;cursor:pointer;font-family:var(--sans);transition:background 0.2s;}
.btn-gold:hover{background:var(--gold-pale);}

/* FOOTER */
.footer{background:var(--bg);border-top:1px solid var(--rule);}
.footer-inner{display:flex;align-items:center;justify-content:space-between;padding:20px var(--g);flex-wrap:wrap;gap:16px;}
.footer-brand{font-family:var(--serif);font-size:1rem;color:var(--gold-pale);}
.footer-copy{font-size:0.65rem;color:var(--text-3);letter-spacing:0.08em;}
.footer-back{font-size:0.65rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--gold-dim);cursor:pointer;background:none;border:none;font-family:var(--sans);transition:color 0.2s;}
.footer-back:hover{color:var(--gold);}

/* RESPONSIVE */
@media(max-width:900px){
  .faq-hero{grid-template-columns:1fr;gap:32px;}
  .faq-body{grid-template-columns:1fr;}
  .faq-index{display:none;}
  .faq-tabs{flex-wrap:nowrap;}
}
</style>
</head>
<body>
<!-- NAV -->
<nav class="nav">
  <div class="nav-inner">
    <a class="nav-brand" href="/thesilentclub/home">The Silent Club</a>
    <ul class="nav-links">
      <li><a href="/thesilentclub/home">Home</a></li>
      <li><a href="/thesilentclub/about">About</a></li>
      <li><a href="/thesilentclub/estate">The Estate</a></li>
      <li><a href="/thesilentclub/faq" class="active">FAQ</a></li>
      <li><a href="/blogs">Journal</a></li>
    </ul>
    <button class="nav-cta" onclick="openInvite()">Request Invite &rarr;</button>
  </div>
</nav>

<!-- HERO -->
<section class="faq-hero">
  <div>
    <div class="faq-hero-label">Frequently Asked Questions</div>
    <h1 class="faq-hero-heading">Most people arrive<br>with questions.<br><em>Few leave<br>with the same ones.</em></h1>
  </div>
  <div>
    <p class="faq-hero-intro">Everything you need to know before you arrive — from what to pack to what to expect on day four. Read through at your own pace. <em>If a question isn't answered here, it probably gets answered by the experience itself.</em></p>
  </div>
</section>

<!-- STICKY TABS -->
<div class="faq-tabs" id="faqTabs">
  <button class="faq-tab active" onclick="scrollToSection('decide')">Before you decide</button>
  <button class="faq-tab" onclick="scrollToSection('book')">Before you book</button>
  <button class="faq-tab" onclick="scrollToSection('bring')">What to bring</button>
  <button class="faq-tab" onclick="scrollToSection('arrive')">When you arrive</button>
  <button class="faq-tab" onclick="scrollToSection('experience')">The experience</button>
  <button class="faq-tab" onclick="scrollToSection('products')">The products</button>
</div>

<!-- BODY -->
<div class="faq-body">
  <!-- INDEX -->
  <div class="faq-index" id="faqIndex">
    <div class="faq-index-section" data-section="decide">
      <div class="faq-index-heading">Before you decide</div>
      <button class="faq-index-link" onclick="scrollToQ('q1')">Is this a meditation retreat?</button>
      <button class="faq-index-link" onclick="scrollToQ('q2')">Is this a co-working space?</button>
      <button class="faq-index-link" onclick="scrollToQ('q3')">Do I need a reason to come?</button>
      <button class="faq-index-link" onclick="scrollToQ('q4')">What kind of person comes here?</button>
      <button class="faq-index-link" onclick="scrollToQ('q5')">Is this only for introverts?</button>
      <button class="faq-index-link" onclick="scrollToQ('q6')">Do I need to be in transition?</button>
    </div>
    <div class="faq-index-section" data-section="book">
      <div class="faq-index-heading">Before you book</div>
      <button class="faq-index-link" onclick="scrollToQ('q7')">How does the invite process work?</button>
      <button class="faq-index-link" onclick="scrollToQ('q8')">Is everything included?</button>
      <button class="faq-index-link" onclick="scrollToQ('q9')">What is the minimum stay?</button>
      <button class="faq-index-link" onclick="scrollToQ('q10')">Can I come alone?</button>
      <button class="faq-index-link" onclick="scrollToQ('q11')">Can I bring a guest?</button>
      <button class="faq-index-link" onclick="scrollToQ('q12')">What is the cancellation policy?</button>
      <button class="faq-index-link" onclick="scrollToQ('q13')">Are children permitted?</button>
    </div>
    <div class="faq-index-section" data-section="bring">
      <div class="faq-index-heading">What to bring</div>
      <button class="faq-index-link" onclick="scrollToQ('q14')">What should I pack?</button>
      <button class="faq-index-link" onclick="scrollToQ('q15')">Why solid colours?</button>
      <button class="faq-index-link" onclick="scrollToQ('q16')">What should I leave at home?</button>
    </div>
    <div class="faq-index-section" data-section="arrive">
      <div class="faq-index-heading">When you arrive</div>
      <button class="faq-index-link" onclick="scrollToQ('q17')">What actually happens when I arrive?</button>
      <button class="faq-index-link" onclick="scrollToQ('q18')">What are the meal timings?</button>
      <button class="faq-index-link" onclick="scrollToQ('q19')">What food is served?</button>
      <button class="faq-index-link" onclick="scrollToQ('q20')">Is there parking?</button>
    </div>
    <div class="faq-index-section" data-section="experience">
      <div class="faq-index-heading">The experience</div>
      <button class="faq-index-link" onclick="scrollToQ('q21')">What do people actually do all day?</button>
      <button class="faq-index-link" onclick="scrollToQ('q22')">Can I work while I'm here?</button>
      <button class="faq-index-link" onclick="scrollToQ('q23')">What is the community talk window?</button>
      <button class="faq-index-link" onclick="scrollToQ('q24')">What about the farm animals?</button>
      <button class="faq-index-link" onclick="scrollToQ('q25')">Is there WiFi?</button>
      <button class="faq-index-link" onclick="scrollToQ('q26')">What about charging devices?</button>
      <button class="faq-index-link" onclick="scrollToQ('q27')">What are the quiet hours?</button>
      <button class="faq-index-link" onclick="scrollToQ('q28')">Can I meet the founder?</button>
      <button class="faq-index-link" onclick="scrollToQ('q29')">What if I want to leave mid-stay?</button>
      <button class="faq-index-link" onclick="scrollToQ('q30')">What about vendor activities?</button>
      <button class="faq-index-link" onclick="scrollToQ('q31')">Smoking and alcohol policy</button>
      <button class="faq-index-link" onclick="scrollToQ('q32')">What if I break the compact?</button>
      <button class="faq-index-link" onclick="scrollToQ('q33')">Is the estate accessible?</button>
      <button class="faq-index-link" onclick="scrollToQ('q34')">Medical and safety</button>
      <button class="faq-index-link" onclick="scrollToQ('q35')">Is it safe for solo women?</button>
    </div>
    <div class="faq-index-section" data-section="products">
      <div class="faq-index-heading">The products</div>
      <button class="faq-index-link" onclick="scrollToQ('q36')">Residency vs Solitude</button>
      <button class="faq-index-link" onclick="scrollToQ('q37')">Who is Silence for?</button>
      <button class="faq-index-link" onclick="scrollToQ('q38')">Can I extend my stay?</button>
      <button class="faq-index-link" onclick="scrollToQ('q39')">What is Creation?</button>
      <button class="faq-index-link" onclick="scrollToQ('q40')">Company or team offsite?</button>
      <button class="faq-index-link" onclick="scrollToQ('q41')">Residency weekend themes</button>
    </div>
  </div>

  <!-- QUESTIONS -->
  <div class="faq-sections">
    <div class="faq-section" id="section-decide">
      <div class="faq-section-header">
        <div class="faq-section-num">01</div>
        <div class="faq-section-title">Before you decide</div>
        <div class="faq-section-desc">The questions people ask when they're not sure this is for them. It probably is.</div>
      </div>
      <div class="faq-list">
        <div class="faq-item" id="q1"><button class="faq-question" onclick="toggleFaq(this)">Is this a meditation retreat?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">No. There is no programme, no facilitator, no spiritual framing. The Silent Club removes interference — noise, pace, expectation, performance. What you do with the silence that remains is entirely yours.</div></div></div>
        <div class="faq-item" id="q2"><button class="faq-question" onclick="toggleFaq(this)">Is this a co-working space?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">No. There is no WiFi in common areas, no networking, no performance of productivity. If you need a hot desk and fast internet, this is not for you.</div></div></div>
        <div class="faq-item" id="q3"><button class="faq-question" onclick="toggleFaq(this)">Do I need a reason to come?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">No. Many visitors are simply people with something important to think about — a decision, a project, a transition. You don't need a reason that sounds significant. You just need to need quiet.</div></div></div>
        <div class="faq-item" id="q4"><button class="faq-question" onclick="toggleFaq(this)">What kind of person actually comes here?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Writers finishing something. Founders between chapters. Designers before a new body of work. People who know their best thinking happens alone and haven't found the right conditions for it. Not any one profession — one state of mind.</div></div></div>
        <div class="faq-item" id="q5"><button class="faq-question" onclick="toggleFaq(this)">Is this only for introverts?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">No. Many members are deeply extroverted. The need for uninterrupted thinking is not a personality type. It is a condition of serious work.</div></div></div>
        <div class="faq-item" id="q6"><button class="faq-question" onclick="toggleFaq(this)">Do I need to be going through a transition?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">No. You can be mid-stride and simply need space to think clearly. The estate does not require a reason. It requires only that you respect the conditions that make it work for everyone else.</div></div></div>
      </div>
    </div>

    <div class="faq-section" id="section-book">
      <div class="faq-section-header">
        <div class="faq-section-num">02</div>
        <div class="faq-section-title">Before you book</div>
        <div class="faq-section-desc">Logistics, policies, and what to expect before you arrive.</div>
      </div>
      <div class="faq-list">
        <div class="faq-item" id="q7"><button class="faq-question" onclick="toggleFaq(this)">How does the invite process work?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Two questions. A 15-minute conversation with the founder. If it feels right on both sides, you receive your first invite. We are not selecting for impressive people — we are looking for people with a genuine relationship to solitude and quiet work.</div></div></div>
        <div class="faq-item" id="q8"><button class="faq-question" onclick="toggleFaq(this)">Is everything included in the price?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Yes. Accommodation, all meals, full estate access, all activities, all gear. The price you see is the price you pay. The only exceptions are vendor activities — boating, for example — which are pre-booked separately and paid directly to the vendor.</div></div></div>
        <div class="faq-item" id="q9"><button class="faq-question" onclick="toggleFaq(this)">What is the minimum stay?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">The Silence day cycle is 4 hours — our shortest experience and the natural entry point. Residency is 2 nights minimum. Solitude is 4 nights. We set minimums deliberately — one night is not enough to experience what this place actually does.</div></div></div>
        <div class="faq-item" id="q10"><button class="faq-question" onclick="toggleFaq(this)">Can I come alone?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Yes. Most people do. The estate is designed for solitude. Coming alone is not unusual here — it is the default.</div></div></div>
        <div class="faq-item" id="q11"><button class="faq-question" onclick="toggleFaq(this)">Can I bring a guest?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Fellow members may bring pre-approved guests. All guests agree to the same compact before entering. Guests are your responsibility for the duration of their stay.</div></div></div>
        <div class="faq-item" id="q12"><button class="faq-question" onclick="toggleFaq(this)">What is the cancellation policy?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">All bookings are final. There are no refunds. If you need to leave mid-stay, you are welcome to do so — but no refund will be issued. We ask that you consider this before booking.</div></div></div>
        <div class="faq-item" id="q13"><button class="faq-question" onclick="toggleFaq(this)">Are children permitted?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Children are not part of the standard experience. If you wish to bring a child, prior approval from management is required. Children remain the full responsibility of their parent or guardian at all times.</div></div></div>
      </div>
    </div>

    <div class="faq-section" id="section-bring">
      <div class="faq-section-header">
        <div class="faq-section-num">03</div>
        <div class="faq-section-title">What to bring</div>
        <div class="faq-section-desc">Less than you think. More intention than luggage.</div>
      </div>
      <div class="faq-list">
        <div class="faq-item" id="q14"><button class="faq-question" onclick="toggleFaq(this)">What should I pack?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Light. 5-6 changes of clothing in solid colours — no prints or bold patterns. One pair of shoes, one pair of slippers. Toiletries. Anything you need for your work. We provide laundry service so you do not need more than a few days of clothing.</div></div></div>
        <div class="faq-item" id="q15"><button class="faq-question" onclick="toggleFaq(this)">Why solid colours?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Printed and patterned clothing creates visual stimulation for others in shared spaces. The estate is designed to reduce sensory input wherever possible. This is a suggestion, not a hard rule — but we may gently request a change if needed.</div></div></div>
        <div class="faq-item" id="q16"><button class="faq-question" onclick="toggleFaq(this)">What should I leave at home?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Anything that makes noise. Bluetooth speakers. Anything that requires a signal to function beyond its basic purpose. The estate is not the place to catch up on a backlog of podcasts or calls.</div></div></div>
      </div>
    </div>

    <div class="faq-section" id="section-arrive">
      <div class="faq-section-header">
        <div class="faq-section-num">04</div>
        <div class="faq-section-title">When you arrive</div>
        <div class="faq-section-desc">What the first hours look like — and what they don't.</div>
      </div>
      <div class="faq-list">
        <div class="faq-item" id="q17"><button class="faq-question" onclick="toggleFaq(this)">What actually happens when I arrive?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Nothing is waiting for you. You check in, leave your phone in a designated drawer if you wish, and the day is yours. There is no orientation, no schedule, no one to report to. Meals are set out at fixed times. Spaces are open. The rest is silence.</div></div></div>
        <div class="faq-item" id="q18"><button class="faq-question" onclick="toggleFaq(this)">What are the meal timings?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Breakfast at 9am. Lunch at 12:30pm. High tea at 4pm. Dinner at 7:30pm. Community talk window at 9:30pm. These are fixed. The kitchen is accessible at all times — speak to the cook if you need something outside these hours or have specific requirements.</div></div></div>
        <div class="faq-item" id="q19"><button class="faq-question" onclick="toggleFaq(this)">What food is served?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Vegetarian, with egg options and select vegan choices. We do not serve meat. If you have specific dietary needs or allergies, inform us at least 36-48 hours in advance. Visitors may use the kitchen themselves on a pre-approved basis with advance notice. If you need specific ingredients delivered, request them at least 36-48 hours ahead — we coordinate with incoming visits whenever possible.</div></div></div>
        <div class="faq-item" id="q20"><button class="faq-question" onclick="toggleFaq(this)">Is there parking?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Yes. Uncovered parking is available within the premises. Vehicles are parked at the owner's risk. The estate does not accept responsibility for vehicles on the property.</div></div></div>
      </div>
    </div>

    <div class="faq-section" id="section-experience">
      <div class="faq-section-header">
        <div class="faq-section-num">05</div>
        <div class="faq-section-title">The experience</div>
        <div class="faq-section-desc">What the days actually look like. And what the estate asks of you in return.</div>
      </div>
      <div class="faq-list">
        <div class="faq-item" id="q21"><button class="faq-question" onclick="toggleFaq(this)">What do people actually do all day?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Whatever they came to do — or nothing at all. Write. Think. Walk the grounds. Sit by the lake. Fish. Watch birds at dawn. Use the gym. Read. Stare at the ceiling. The estate does not prescribe your time. It simply protects it.</div></div></div>
        <div class="faq-item" id="q22"><button class="faq-question" onclick="toggleFaq(this)">Can I work while I'm here?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Yes. The deep work library is designed for exactly this. What changes is not whether you can work — it is why. Members who arrive intending to work often find the first day produces very little output and considerably more clarity about what the work should actually be.</div></div></div>
        <div class="faq-item" id="q23"><button class="faq-question" onclick="toggleFaq(this)">What is the community talk window?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Every evening at 9:30pm, a 30-minute window opens in a designated common space where members may speak with one another. It is optional — you can participate, observe, or not attend. No agenda, no facilitation. You can also simply choose not to engage with anyone present.</div></div></div>
        <div class="faq-item" id="q24"><button class="faq-question" onclick="toggleFaq(this)">What about the farm animals on the property?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">The estate has domestic animals — dogs, chickens, goats, cows, buffalo. They are safe and part of the natural life of the property. You may encounter them going about their day. You can engage with them at your own discretion. This is a living farm environment, not a curated resort.</div></div></div>
        <div class="faq-item" id="q25"><button class="faq-question" onclick="toggleFaq(this)">Is there WiFi?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Not in common areas. Rooms have limited connectivity for genuine needs. The estate is not designed to keep you connected — it is designed to give you a reason not to be.</div></div></div>
        <div class="faq-item" id="q26"><button class="faq-question" onclick="toggleFaq(this)">What about charging devices?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Charging points are available in all rooms and at several points across the property. There is no generator — the estate runs on inverter backup during outages. Plan accordingly if uninterrupted power is critical to your work.</div></div></div>
        <div class="faq-item" id="q27"><button class="faq-question" onclick="toggleFaq(this)">What are the quiet hours?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">All hours. Common spaces are accessible 24 hours but silence is the default at all times — no unnecessary noise, no communication in shared spaces outside the community window. The compact does not switch off at night.</div></div></div>
        <div class="faq-item" id="q28"><button class="faq-question" onclick="toggleFaq(this)">Can I meet the founder?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Yes, by appointment. If you want to understand the vision or intent behind the estate, that conversation is available. For everything else — logistics, meals, activities — the site team is present and available at all times.</div></div></div>
        <div class="faq-item" id="q29"><button class="faq-question" onclick="toggleFaq(this)">What if I want to leave mid-stay?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">You are free to leave at any time. No questions will be asked. No refund will be issued.</div></div></div>
        <div class="faq-item" id="q30"><button class="faq-question" onclick="toggleFaq(this)">What about vendor activities like boating?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Activities involving external vendors — boat rides, for example — must be pre-booked at least 24 hours in advance. Pickup and drop is arranged from the estate. Payment is made directly to the vendor and is not included in your package price.</div></div></div>
        <div class="faq-item" id="q31"><button class="faq-question" onclick="toggleFaq(this)">What is the policy on smoking and alcohol?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Smoking is permitted in designated areas only. Alcohol consumption is not promoted — if you choose to drink, you do so in your room and at your own responsibility. Consumption of illegal substances is prohibited. One warning is given. Non-compliance results in removal from the property. The estate does not accept responsibility for any illegal activity conducted on the premises.</div></div></div>
        <div class="faq-item" id="q32"><button class="faq-question" onclick="toggleFaq(this)">What happens if I break the compact?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">One warning. If the behaviour continues, you will be asked to leave. The compact exists to protect every person on the property — not just you.</div></div></div>
        <div class="faq-item" id="q33"><button class="faq-question" onclick="toggleFaq(this)">Is the estate accessible for limited mobility?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Parts of the property are accessible. If you have specific mobility requirements, inform us before booking so we can assess whether the estate can accommodate you comfortably. Members are expected to be largely self-managed.</div></div></div>
        <div class="faq-item" id="q34"><button class="faq-question" onclick="toggleFaq(this)">What about medical emergencies?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">A first-aid trained staff member is on site at all times. The nearest hospital is in Bhigwan or Baramati. The nearest full-facility hospital is approximately 2 hours away in Pune. If you have a complex medical condition, please disclose it before arrival so we can prepare appropriately.</div></div></div>
        <div class="faq-item" id="q35"><button class="faq-question" onclick="toggleFaq(this)">Is it safe and comfortable for solo women?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Yes. The estate is as safe and comfortable for solo women as it is for anyone else. Staff are present at all times. The same compact applies to every member regardless of gender. No separate arrangements are required — or made.</div></div></div>
      </div>
    </div>

    <div class="faq-section" id="section-products">
      <div class="faq-section-header">
        <div class="faq-section-num">06</div>
        <div class="faq-section-title">The products</div>
        <div class="faq-section-desc">Understanding which experience is right for where you are right now.</div>
      </div>
      <div class="faq-list">
        <div class="faq-item" id="q36"><button class="faq-question" onclick="toggleFaq(this)">What is the difference between Residency and Solitude?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Residency is the weekend product — structured around a theme or collaboration, with other members present and a social dimension available. Solitude is the weekday product — strict silence, 30-minute communication limit per day, self-led activities. Residency is for people who want company around silence. Solitude is for people who want to be genuinely alone with their thoughts for an extended period.</div></div></div>
        <div class="faq-item" id="q37"><button class="faq-question" onclick="toggleFaq(this)">Who is the Silence day cycle for?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">First-time visitors. People who want to try before committing to an overnight stay. People who live close enough to come for half a day. At ₹1,000 with one meal and full estate access, it is the lowest-commitment way to understand what this place actually feels like.</div></div></div>
        <div class="faq-item" id="q38"><button class="faq-question" onclick="toggleFaq(this)">Can I extend my stay?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Subject to availability. Request an extension as early as possible — the estate operates with a maximum of 20 members at any time and availability is not always guaranteed.</div></div></div>
        <div class="faq-item" id="q39"><button class="faq-question" onclick="toggleFaq(this)">What is Creation and who is it for?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Creation is full estate access — noon to noon, all spaces, accommodation for up to 20 people. For private gatherings, team offsites, retreats, or creative productions that need the whole place. The silent compact does not apply for Creation bookings — the group sets its own terms, subject to prior approval from management.</div></div></div>
        <div class="faq-item" id="q40"><button class="faq-question" onclick="toggleFaq(this)">Can my company book the estate for a team offsite?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Yes. Creation is the right product. The estate has hosted private gatherings for founders, creative teams, and small organisations. The experience is whatever you make it — with the infrastructure of the estate and the silence of Bhigwan behind it.</div></div></div>
        <div class="faq-item" id="q41"><button class="faq-question" onclick="toggleFaq(this)">How do I know what the Residency weekend theme is?<span class="faq-icon">+</span></button><div class="faq-answer"><div class="faq-answer-inner">Themes are decided by the club and announced on our events page and social media channels in advance. Book the weekend that speaks to what you need.</div></div></div>
      </div>
    </div>
  </div>
</div>

<!-- CTA -->
<section class="faq-cta">
  <h2 class="faq-cta-heading">Still have a question?<br><em>The best answer is a visit.</em></h2>
  <p class="faq-cta-sub">Two questions. A short conversation. Your first invite.</p>
  <button class="btn-gold" onclick="openInvite()">Request Invite &rarr;</button>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">The Silent Club</div>
    <div class="footer-copy">&copy; 2026 The Silent Club &middot; Bhigwan, Maharashtra</div>
    <button class="footer-back" onclick="history.back()">&larr; Back to homepage</button>
  </div>
</footer>

<!-- INVITE MODAL -->
<div id="inviteModal" style="display:none;position:fixed;inset:0;z-index:9000;background:rgba(15,11,8,0.88);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:24px;">
  <div style="background:#160f0a;border:1px solid #3a2a1f;max-width:520px;width:100%;padding:48px;position:relative;max-height:90vh;overflow-y:auto;">
    <button onclick="closeInvite()" style="position:absolute;top:16px;right:20px;background:none;border:none;color:#7a6048;font-size:1.4rem;cursor:pointer;">&times;</button>
    <div style="font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;color:#7a6048;margin-bottom:14px;font-family:'Jost',sans-serif;">Request Invite</div>
    <h2 style="font-family:'Cormorant',serif;font-size:1.8rem;font-weight:300;color:#e8d5b0;margin-bottom:8px;">Two questions.<br>No pitch.</h2>
    <p style="font-size:0.84rem;font-weight:300;color:#7a6048;line-height:1.7;margin-bottom:32px;font-family:'Jost',sans-serif;">We respond within 72 hours.</p>
    <div style="margin-bottom:18px;"><label style="display:block;font-size:0.63rem;letter-spacing:0.16em;text-transform:uppercase;color:#7a6048;margin-bottom:8px;font-family:'Jost',sans-serif;">Your name</label><input type="text" style="width:100%;background:#1c1410;border:1px solid #2a1f17;padding:12px 14px;font-family:'Jost',sans-serif;font-size:0.875rem;color:#e8d5b0;outline:none;box-sizing:border-box;"></div>
    <div style="margin-bottom:18px;"><label style="display:block;font-size:0.63rem;letter-spacing:0.16em;text-transform:uppercase;color:#7a6048;margin-bottom:8px;font-family:'Jost',sans-serif;">Your email</label><input type="email" style="width:100%;background:#1c1410;border:1px solid #2a1f17;padding:12px 14px;font-family:'Jost',sans-serif;font-size:0.875rem;color:#e8d5b0;outline:none;box-sizing:border-box;"></div>
    <div style="margin-bottom:18px;"><label style="display:block;font-size:0.63rem;letter-spacing:0.16em;text-transform:uppercase;color:#7a6048;margin-bottom:8px;font-family:'Jost',sans-serif;">What do you do, and what kind of quiet do you need?</label><textarea rows="4" style="width:100%;background:#1c1410;border:1px solid #2a1f17;padding:12px 14px;font-family:'Jost',sans-serif;font-size:0.875rem;color:#e8d5b0;outline:none;resize:vertical;line-height:1.6;box-sizing:border-box;"></textarea></div>
    <div style="margin-bottom:24px;"><label style="display:block;font-size:0.63rem;letter-spacing:0.16em;text-transform:uppercase;color:#7a6048;margin-bottom:8px;font-family:'Jost',sans-serif;">Describe the last time you were truly alone with a thought.</label><textarea rows="4" style="width:100%;background:#1c1410;border:1px solid #2a1f17;padding:12px 14px;font-family:'Jost',sans-serif;font-size:0.875rem;color:#e8d5b0;outline:none;resize:vertical;line-height:1.6;box-sizing:border-box;"></textarea></div>
    <button onclick="submitInvite()" style="width:100%;background:#c5a065;color:#0f0b08;font-size:0.65rem;letter-spacing:0.18em;text-transform:uppercase;padding:14px;border:none;cursor:pointer;font-family:'Jost',sans-serif;">Submit &rarr;</button>
  </div>
</div>

<script>
function toggleFaq(btn) {
  var item = btn.parentElement;
  var wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i){ i.classList.remove('open'); });
  if(!wasOpen) {
    item.classList.add('open');
    if (item.id) setActiveQuestion(item.id);
  } else {
    setActiveQuestion('');
  }
}

function scrollToSection(id) {
  var el = document.getElementById('section-' + id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  setActiveSection(id);
}

function scrollToQ(id) {
  var el = document.getElementById(id);
  if(el) {
    el.scrollIntoView({behavior:'smooth', block:'center'});
    var sectionEl = el.closest('.faq-section');
    if (sectionEl && sectionEl.id) {
      setActiveSection(sectionEl.id.replace('section-', ''));
    }
    var btn = el.querySelector('.faq-question');
    if(btn) {
      var item = btn.parentElement;
      document.querySelectorAll('.faq-item.open').forEach(function(i){ i.classList.remove('open'); });
      item.classList.add('open');
      setActiveQuestion(id);
    }
  }
}

window.addEventListener('scroll', function() {
  var sections = ['decide','book','bring','arrive','experience','products'];
  var offset = 160;
  sections.forEach(function(id, i) {
    var el = document.getElementById('section-' + id);
    if(el) {
      var rect = el.getBoundingClientRect();
      if(rect.top <= offset && rect.bottom > offset) {
        setActiveSection(id);
      }
    }
  });

  var nav = document.querySelector('.nav');
  if(nav) nav.style.background = window.scrollY > 40 ? 'rgba(15,11,8,0.98)' : 'rgba(15,11,8,0.94)';
});

function setActiveSection(activeId) {
  var sections = ['decide','book','bring','arrive','experience','products'];
  var tabs = document.querySelectorAll('.faq-tab');
  var indexSections = document.querySelectorAll('.faq-index-section');
  var activeSectionEl = null;

  tabs.forEach(function(t){ t.classList.remove('active'); });
  indexSections.forEach(function(s){ s.classList.remove('active'); });

  var tabIdx = sections.indexOf(activeId);
  if (tabIdx >= 0 && tabs[tabIdx]) tabs[tabIdx].classList.add('active');

  indexSections.forEach(function(sectionEl){
    if (sectionEl.getAttribute('data-section') === activeId) {
      sectionEl.classList.add('active');
      activeSectionEl = sectionEl;
    }
  });

  if (activeSectionEl) {
    activeSectionEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function setActiveQuestion(activeQId) {
  var questionLinks = document.querySelectorAll('.faq-index-link');
  var activeLinkEl = null;
  questionLinks.forEach(function(link){
    link.classList.remove('active');
    var onclickAttr = link.getAttribute('onclick') || '';
    var match = onclickAttr.match(/scrollToQ\('([^']+)'\)/);
    if (match && match[1] === activeQId) {
      link.classList.add('active');
      activeLinkEl = link;
    }
  });

  if (activeLinkEl) {
    activeLinkEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function openInvite() {
  document.getElementById('inviteModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeInvite() {
  document.getElementById('inviteModal').style.display = 'none';
  document.body.style.overflow = '';
}
function submitInvite() {
  document.querySelector('#inviteModal > div').innerHTML = '<div style="text-align:center;padding:48px 0"><div style="font-family:Cormorant,serif;font-size:2.2rem;color:#e8d5b0;margin-bottom:16px">Thank you.</div><p style="font-size:0.875rem;color:#7a6048;line-height:1.7;max-width:300px;margin:0 auto;font-family:Jost,sans-serif">Your request has been received. We will be in touch within 72 hours.</p><button onclick="closeInvite()" style="margin-top:28px;background:none;border:1px solid #3a2a1f;padding:10px 24px;font-family:Jost,sans-serif;font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;cursor:pointer;color:#b09070">Close</button></div>';
}
document.getElementById('inviteModal').addEventListener('click', function(e) {
  if(e.target === this) closeInvite();
});
setActiveSection('decide');
setActiveQuestion('');
</script>
</body>
</html>`;
