export function EstateStyles() {
  return (
    <style jsx global>{`
      :root{--bg:#0f0b08;--bg-2:#160f0a;--bg-3:#1c1410;--bg-4:#221814;--gold:#c5a065;--gold-dim:#8a6e42;--gold-pale:#e8d5b0;--text-2:#b09070;--text-3:#7a6048;--rule:#2a1f17;--rule-2:#3a2a1f;--serif:'Cormorant',Georgia,serif;--sans:'Jost',sans-serif;--g:6vw}
      *{box-sizing:border-box} body{margin:0;background:var(--bg);color:var(--gold-pale);font-family:var(--sans);font-weight:300}
      .nav{position:fixed;top:0;left:0;right:0;z-index:900;background:rgba(15,11,8,0);backdrop-filter:blur(0);border-bottom:1px solid transparent;transition:all .4s}
      .nav.scrolled{background:rgba(15,11,8,.96);backdrop-filter:blur(16px);border-bottom-color:var(--rule)}
      .nav-inner{display:flex;align-items:center;justify-content:space-between;height:60px;max-width:1400px;margin:0 auto;padding:0 var(--g)}
      .nav-brand{font-family:var(--serif);font-size:1.1rem;color:var(--gold-pale);text-decoration:none}
      .nav-links{display:flex;gap:32px;list-style:none}.nav-links a{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(232,213,176,.6);text-decoration:none}
      .nav-links a.active,.nav-links a:hover{color:var(--gold-pale)}
      .nav-cta{font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:var(--bg);background:var(--gold);padding:9px 22px;border:none}
      .hero{position:relative;height:100vh;display:flex;align-items:flex-end;overflow:hidden}
      .hero-bg{position:absolute;inset:0;background:var(--bg-3);display:flex;align-items:center;justify-content:center}
      .hero-bg img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
      .hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(15,11,8,.75) 0%,rgba(15,11,8,.1) 50%,transparent 100%)}
      .hero-content{position:relative;z-index:2;padding:clamp(48px,6vw,80px) var(--g);display:flex;align-items:flex-end;gap:24px}
      .hero-rule{width:2px;height:clamp(60px,8vw,100px);background:var(--gold)}
      .hero-headline{font-family:var(--serif);font-style:italic;font-size:clamp(2.4rem,5.5vw,5.5rem);color:var(--gold);line-height:1;margin:0 0 10px}
      .hero-sub{font-size:clamp(.875rem,1.2vw,1rem);color:var(--gold-pale);opacity:.85}
      .intro{padding:clamp(56px,7vw,88px) var(--g);display:grid;grid-template-columns:1fr 1.8fr;gap:0 100px;align-items:center;border-bottom:1px solid var(--rule);background:var(--bg-2)}
      .intro-label{font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--text-3)}
      .intro-body{font-family:var(--serif);font-size:clamp(1.1rem,1.8vw,1.5rem);line-height:1.65;color:var(--text-2)}
      .numbers{display:grid;grid-template-columns:repeat(6,1fr);gap:1px;background:var(--rule);border-bottom:1px solid var(--rule)}
      .number-item{background:var(--bg-2);padding:28px 24px}.number-val{font-family:var(--serif);font-size:2.4rem;color:var(--gold)}
      .number-label{font-size:.62rem;color:var(--text-3)}
      .cat-section{border-bottom:1px solid var(--rule)} .cat-header{padding:clamp(48px,6vw,72px) var(--g) clamp(28px,3.5vw,40px);display:grid;grid-template-columns:1fr 1.8fr;gap:0 100px;align-items:end;border-bottom:1px solid var(--rule)}
      .cat-trigger{width:100%;background:none;border:none;color:inherit;text-align:left;cursor:pointer;padding:0}
      .cat-header-wrap{position:relative}
      .cat-toggle{position:absolute;right:var(--g);top:50%;transform:translateY(-50%);font-size:1.15rem;color:var(--gold-dim);transition:transform .25s ease}
      .cat-toggle.open{transform:translateY(-50%) rotate(45deg);color:var(--gold)}
      .cat-body{max-height:2000px;overflow:hidden;transition:max-height .45s ease}
      .cat-body.closed{max-height:0}
      .cat-num{font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--text-3);margin-bottom:14px}
      .cat-title{font-family:var(--serif);font-size:clamp(2rem,4vw,3.6rem);line-height:1}
      .cat-desc{font-size:.875rem;line-height:1.85;color:var(--text-2);font-family:var(--serif);font-style:italic}
      .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:28px var(--g);background:transparent}
      .cards.four-col{grid-template-columns:repeat(4,1fr)}
      .card{background:#0f0b08;display:flex;flex-direction:column;border:1px solid var(--rule);border-radius:2px;overflow:hidden}
      .card-img{aspect-ratio:4/3;background:var(--bg-3);position:relative;overflow:hidden}
      .card-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
      .card-img-placeholder{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-style:italic;color:var(--rule-2)}
      .card-body{padding:20px 22px 24px}.card-name{font-family:var(--serif);font-size:1.1rem;margin-bottom:6px}.card-desc{font-size:.76rem;color:var(--text-3);line-height:1.65}
      .symbolica{background:var(--bg-2)} .symbolica .card{background:var(--bg-3)} .symbolica .cat-title{font-style:italic}
      .cta-band{padding:clamp(80px,10vw,120px) var(--g);text-align:center;border-bottom:1px solid var(--rule);background:var(--bg-2)}
      .cta-headline{font-family:var(--serif);font-size:clamp(2rem,4vw,4rem);line-height:1.15;margin-bottom:36px}.btn-gold{background:var(--gold);color:var(--bg);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;padding:14px 36px;border:none}
      .cta-sub{margin-top:16px;font-family:var(--serif);font-style:italic;font-size:.9rem;color:var(--text-3)}
      .footer{background:var(--bg);border-top:1px solid var(--rule)} .footer-top{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:1px;background:var(--rule);border-bottom:1px solid var(--rule)}
      .footer-col{background:var(--bg);padding:clamp(36px,4vw,52px) clamp(24px,3vw,36px)} .footer-brand{font-family:var(--serif);font-size:1.1rem}
      .footer-tagline,.footer-copy,.footer-link{color:var(--text-3)} .footer-link{text-decoration:none;display:block;padding:3px 0}
      .footer-col-label{font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:var(--text-3);margin-bottom:14px}
      .footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px var(--g);flex-wrap:wrap}.footer-copy{font-size:.62rem}
      .modal{display:none;position:fixed;inset:0;z-index:9000;background:rgba(15,11,8,.88);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:24px}
      .modal.show{display:flex}.modal-box{background:#160f0a;border:1px solid #3a2a1f;max-width:480px;width:100%;padding:44px;position:relative}
      .modal-x{position:absolute;top:14px;right:18px;background:none;border:none;color:#7a6048;font-size:1.3rem}
      @media(max-width:900px){.numbers{grid-template-columns:repeat(3,1fr)}.cards,.cards.four-col{grid-template-columns:repeat(2,1fr)}.footer-top{grid-template-columns:1fr 1fr}}
      @media(max-width:860px){.nav-links{display:none}.intro,.cat-header{grid-template-columns:1fr;gap:16px}}
      @media(max-width:540px){.numbers{grid-template-columns:repeat(2,1fr)}.cards,.cards.four-col{grid-template-columns:1fr}.footer-top{grid-template-columns:1fr}}
    `}</style>
  );
}
