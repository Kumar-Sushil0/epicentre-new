export function AboutStyles() {
  return (
    <style dangerouslySetInnerHTML={{__html: `
      :root{--bg:#0f0b08;--bg-2:#160f0a;--bg-3:#1c1410;--gold:#c5a065;--gold-dim:#8a6e42;--gold-pale:#e8d5b0;--text-2:#b09070;--text-3:#7a6048;--rule:#2a1f17;--rule-2:#3a2a1f;--serif:'Cormorant',Georgia,serif;--sans:'Jost',sans-serif;--g:6vw;--ease:cubic-bezier(.25,.46,.45,.94)}
      *{box-sizing:border-box} html{font-size:16px;scroll-behavior:smooth}
      body{margin:0;background:var(--bg);color:var(--gold-pale);font-family:var(--sans);font-weight:300;-webkit-font-smoothing:antialiased}
      .nav{position:fixed;top:0;left:0;right:0;z-index:900;background:rgba(15,11,8,.94);backdrop-filter:blur(16px);border-bottom:1px solid var(--rule)}
      .nav.scrolled{background:rgba(15,11,8,.98)}
      .nav-inner{display:flex;align-items:center;justify-content:space-between;height:60px;max-width:1200px;margin:0 auto;padding:0 var(--g)}
      .nav-brand{font-family:var(--serif);font-size:1.1rem;color:var(--gold-pale);letter-spacing:.04em;text-decoration:none}
      .nav-links{display:flex;align-items:center;gap:32px;list-style:none}
      .nav-links a{font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--text-3);text-decoration:none}
      .nav-links a.active,.nav-links a:hover{color:var(--gold)}
      .nav-cta{font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:var(--bg);background:var(--gold);padding:9px 22px;border:none;cursor:pointer}
      .hero{position:relative;min-height:100vh;display:flex;align-items:flex-end;border-bottom:1px solid var(--rule);overflow:hidden}
      .hero-bg{position:absolute;inset:0;background-image:url('/banner/6.png');background-size:cover;background-position:center;background-repeat:no-repeat;transform:scale(1.05)}
      .hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(15,11,8,.95),rgba(15,11,8,.45),rgba(15,11,8,.2))}
      .hero-left{position:relative;z-index:2;padding:clamp(56px,8vw,96px) var(--g);display:flex;flex-direction:column;justify-content:flex-end}
      .hero-badge{display:flex;align-items:center;gap:12px;font-size:.625rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);margin-bottom:20px}
      .hero-badge-dot{width:6px;height:6px;border-radius:50%;background:var(--gold);animation:pulse 2s infinite}
      @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
      .hero-heading{font-family:var(--serif);font-size:clamp(2.2rem,6vw,6rem);font-weight:700;line-height:.92;margin:0 0 28px;max-width:none;width:100%}
      .hero-sub{font-size:.875rem;color:var(--text-2);line-height:2;max-width:none;width:100%;font-family:var(--sans)}
      .why-header{padding:clamp(56px,7vw,88px) var(--g) clamp(32px,4vw,48px);display:grid;grid-template-columns:1fr 1.6fr;gap:80px;align-items:end;border-bottom:1px solid var(--rule)}
      .why-header-main{grid-column:1 / -1;max-width:none}
      .why-tag-line{margin-bottom:16px;height:1px;width:40px;background:#8a6e42}
      .why-label{font-size:.75rem;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:#b09070}
      .founder-label,.stf-label,.footer-col-label{font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:var(--text-3)}
      .why-heading{font-family:var(--serif);font-size:clamp(1.8rem,3vw,3rem);font-weight:300;line-height:1.1}
      .why-intro{font-size:.9rem;line-height:1.85;color:var(--text-2);font-family:var(--serif);font-style:italic}
      .acc-item{border-bottom:1px solid var(--rule)}
      .acc-trigger{width:100%;background:none;border:none;padding:clamp(40px,5vw,56px) var(--g);display:flex;justify-content:space-between;gap:20px;text-align:left;cursor:pointer;align-items:center}
      .acc-trigger:hover,.acc-item.open .acc-trigger{background:var(--bg-2)}
      .acc-num-title{display:flex;align-items:center;gap:12px}
      .acc-num{font-family:var(--serif);font-size:clamp(1.5rem,3vw,2.7rem);font-weight:600;letter-spacing:.2em;color:var(--text-3);display:flex;align-items:center;line-height:1}
      .acc-sep{font-family:var(--serif);font-size:clamp(1.5rem,3vw,2.7rem);font-weight:600;color:var(--text-3);line-height:1}
      .acc-title{font-family:var(--serif);font-size:clamp(1.5rem,3vw,2.7rem);line-height:1;color:var(--text-2)}
      .acc-item.open .acc-title,.acc-trigger:hover .acc-title{color:var(--gold-pale)}
      .acc-icon{font-size:2rem;color:var(--gold-dim);transition:transform .35s var(--ease);display:flex;align-items:center;line-height:1}
      .acc-item.open .acc-icon{transform:rotate(45deg)}
      .acc-body{max-height:0;overflow:hidden;transition:max-height .5s var(--ease)}
      .acc-item.open .acc-body{max-height:700px}
      .acc-body-inner{padding:0 var(--g) 36px}
      .acc-body-text{font-size:.9rem;line-height:1.9;color:#d4c4a8}
      .founder{display:grid;grid-template-columns:1fr 1.6fr;border-bottom:1px solid var(--rule)}
      .founder-left{border-right:1px solid var(--rule);padding:clamp(56px,7vw,88px) var(--g);background:var(--bg-2);display:flex;flex-direction:column}
      .founder-card{position:relative;width:100%;flex:1;background:var(--bg-3);border:1px solid var(--rule);overflow:hidden;min-height:520px}
      .founder-photo{position:absolute;inset:0}
      .founder-photo img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1);transition:transform 900ms var(--ease)}
      .founder-photo-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.88),rgba(0,0,0,.26),transparent)}
      .founder-gold-rise{position:absolute;left:0;right:0;bottom:0;height:22%;background:var(--gold);transform:translateY(100%);opacity:0;transition:all 700ms var(--ease);z-index:2}
      .founder-socials{position:absolute;right:20px;bottom:20px;display:flex;gap:10px;opacity:0;transition:opacity 700ms var(--ease);z-index:3}
      .founder-socials a{color:#20150b}
      .founder-socials svg{width:22px;height:22px}
      .founder-socials .material-symbols-outlined{font-size:22px;line-height:1}
      .founder-meta{position:relative;z-index:3}
      .founder-meta-in-card{position:absolute;left:20px;bottom:20px}
      .founder-tag{font-size:.58rem;letter-spacing:.2em;text-transform:uppercase;color:#c7b69c;opacity:.88;margin-bottom:6px;transition:color 700ms var(--ease),opacity 700ms var(--ease)}
      .founder-name{font-family:var(--serif);font-size:1.9rem;line-height:1;margin-bottom:6px;color:#e7dfd3;transition:color 700ms var(--ease)}
      .founder-title{font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:#d6c8b1;transition:color 700ms var(--ease),opacity 700ms var(--ease);opacity:.92}
      .founder-left:hover .founder-photo img{transform:scale(1.1)}
      .founder-left:hover .founder-gold-rise{transform:translateY(0);opacity:1}
      .founder-left:hover .founder-socials{opacity:1}
      .founder-left:hover .founder-tag{color:#20150b;opacity:1}
      .founder-left:hover .founder-name{color:#20150b}
      .founder-left:hover .founder-title{color:#20150b;opacity:1}
      .founder-right{padding:clamp(56px,7vw,88px) var(--g);background:#160f0a;display:flex;flex-direction:column;justify-content:space-between}
      .founder-statement{font-family:var(--serif);font-size:clamp(.9rem,1.2vw,1rem);line-height:1.85;color:var(--text-2);font-weight:400;margin:28px 0;flex:1}
      .founder-bridge{margin-top:36px;padding-top:28px;border-top:1px solid var(--rule);font-family:var(--serif);font-size:1.1rem;font-style:italic;color:var(--gold)}
      .stf{display:flex;flex-direction:column;border-bottom:1px solid var(--rule)}
      .stf-idea{display:grid;grid-template-columns:1fr 1.6fr;border-bottom:1px solid var(--rule)}
      .stf-idea-left{padding:clamp(48px,6vw,72px) var(--g);border-right:1px solid var(--rule);background:#0f0b08}
      .stf-idea-right,.stf-cycle-wrap{padding:clamp(48px,6vw,72px) var(--g)}
      .stf-heading{font-family:var(--serif);font-size:clamp(1.6rem,2.5vw,2.4rem);font-weight:300;line-height:1.1}
      .stf-desc{font-size:.875rem;line-height:1.85;color:var(--text-2)}
      .stf-download{display:inline-flex;border:1px solid var(--rule-2);padding:10px 20px;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--gold-dim);background:none}
      .stf-cycle-heading{font-family:var(--serif);font-size:clamp(1.4rem,2.2vw,2rem);font-weight:300;margin-bottom:12px}
      .stf-cycle-desc{font-size:.84rem;color:var(--text-3);line-height:1.75;margin-bottom:36px;max-width:600px}
      .stf-cohorts-h{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--rule)}
      .stf-cohort-h{background:#0f0b08;padding:20px 20px 24px;border-top:2px solid var(--rule-2)}
      .stf-cohort-year-h{font-family:var(--serif);font-size:1.6rem;color:var(--gold)}
      .stf-cohort-year-row{display:flex;align-items:center;gap:10px;margin-bottom:12px}
      .stf-cohort-dot{width:8px;height:8px;border-radius:50%;background:var(--rule-2);flex-shrink:0}
      .stf-cohort-dot.open{background:var(--gold)}
      .stf-cohort-dot.open{background:var(--gold)}
      .stf-cohort-box-name{font-family:var(--serif);font-size:.95rem;color:var(--gold-pale);margin-bottom:6px}
      .stf-cohort-box-desc{font-size:.62rem;color:var(--text-3)}
      .closing-cta{padding:clamp(80px,10vw,120px) var(--g);text-align:center;border-bottom:1px solid var(--rule);background:var(--bg-2)}
      .closing-quote{font-family:var(--serif);font-size:clamp(1.5rem,3vw,2.8rem);line-height:1.3;margin-bottom:40px}
      .closing-btn{background:var(--gold);color:var(--bg);padding:14px 36px;border:none;font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;font-weight:bold;text-decoration:none;display:inline-block}
      .closing-sub{margin-top:16px;font-family:var(--serif);font-style:italic;font-size:1.05rem;color:var(--text-3)}
      .footer{background:var(--bg);border-top:1px solid var(--rule)}
      .footer-top{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:1px;background:var(--rule);border-bottom:1px solid var(--rule)}
      .footer-col{background:var(--bg);padding:clamp(36px,4vw,52px) clamp(24px,3vw,36px)}
      .footer-brand{font-family:var(--serif);font-size:1.1rem;margin-bottom:4px}
      .footer-tagline{font-size:.66rem;color:var(--text-3);margin-bottom:24px}
      .footer-collab{padding:14px 18px;border:1px solid var(--rule-2)}
      .footer-link{display:block;font-size:.78rem;color:var(--text-3);padding:3px 0;text-decoration:none}
      .footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:16px var(--g);flex-wrap:wrap}
      .footer-copy{font-size:.62rem;color:var(--text-3)}
      .modal{display:none;position:fixed;inset:0;z-index:9000;background:rgba(15,11,8,.88);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:24px}
      .modal.show{display:flex}
      .modal-box{background:#160f0a;border:1px solid #3a2a1f;max-width:480px;width:100%;padding:44px;position:relative}
      .modal-x{position:absolute;top:14px;right:18px;background:none;border:none;color:#7a6048;font-size:1.3rem;cursor:pointer}
      @media(max-width:860px){.nav-links{display:none}.hero{grid-template-columns:1fr}.hero-right{display:none}.why-header,.founder,.stf-idea{grid-template-columns:1fr;gap:24px}.founder-left,.stf-idea-left{border-right:none;border-bottom:1px solid var(--rule)}.founder-card{min-height:460px}.founder-meta-in-card{bottom:30px}.founder-socials{bottom:30px}.founder-gold-rise{height:30%}.acc-trigger{gap:20px}.acc-body-inner{grid-template-columns:1fr}.acc-body-text{grid-column:1}.stf-cohorts-h{grid-template-columns:1fr 1fr}.stf-cohort-h{padding:16px 16px 20px}.footer-top{grid-template-columns:1fr 1fr}.footer-bottom{flex-direction:column;gap:8px}}
      @media(max-width:480px){.founder-card{min-height:380px}.founder-meta-in-card{bottom:34px}.founder-socials{bottom:34px}.founder-gold-rise{height:34%}.stf-cohorts-h{grid-template-columns:1fr}.stf-cohort-h{padding:16px 16px 20px}.footer-top{grid-template-columns:1fr}}
    `}} />
  );
}
