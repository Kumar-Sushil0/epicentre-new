export function DayDesignerStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0');
      .material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:inherit;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;}
      :root{--bg:#0f0b08;--bg-2:#160f0a;--bg-3:#1c1410;--gold:#c5a065;--gold-dim:#8a6e42;--gold-pale:#e8d5b0;--text-2:#b09070;--text-3:#7a6048;--rule:#2a1f17;--rule-2:#3a2a1f;--serif:'Cormorant',Georgia,serif;--sans:'Jost',sans-serif;}
      body{background:var(--bg);color:var(--gold-pale);font-family:var(--sans);font-weight:300;overflow:hidden;font-size:14px}
      .hdr{height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 6vw;background:var(--bg-2);border-bottom:1px solid var(--rule)}
      .steps{display:flex;border-bottom:1px solid var(--rule)}
      .step{flex:1;padding:12px 20px;border-right:1px solid var(--rule);font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;color:var(--text-3);display:flex;align-items:center;gap:10px}
      .step.active{color:var(--gold-pale);background:var(--bg-2)} .step.done{color:var(--gold-dim)}
      .step-n{width:22px;height:22px;border-radius:50%;border:1px solid var(--rule-2);display:grid;place-items:center;font-size:.7rem}
      .step.active .step-n{background:var(--gold);color:var(--bg)} .step.done .step-n{background:var(--gold-dim);color:var(--bg)}
      .p-inner{padding:24px 6vw;height:calc(100vh - 108px);overflow:auto}
      .p-grid,.c-grid{display:grid;gap:1px;background:var(--rule)}
      .p-grid{grid-template-columns:repeat(4,1fr)} .c-grid{grid-template-columns:1fr 1fr}
      .pc,.cc{background:var(--bg-2);cursor:pointer;transition:.2s}
      .pc{padding:20px 22px;border-bottom:2px solid transparent}.cc{padding:24px 26px;border-bottom:2px solid transparent;position:relative}
      .pc:hover,.cc:hover{background:var(--bg-3)} .pc.sel,.cc.sel{background:var(--bg-3);border-bottom-color:var(--gold)}
      .btn{background:var(--gold);color:var(--bg);font-size:.8rem;letter-spacing:.16em;text-transform:uppercase;padding:12px 28px;border:none;cursor:pointer;font-weight:500}
      .btn-g{background:none;color:var(--text-3);font-size:.8rem;letter-spacing:.16em;text-transform:uppercase;padding:12px 22px;border:1px solid var(--rule-2);cursor:pointer}
      .btn:disabled{opacity:.4;cursor:not-allowed}
      .btn-g:hover{color:var(--gold-pale);border-color:var(--gold-dim)}
      .cal-wrap{display:grid;grid-template-columns:1fr 220px;gap:24px;margin-top:16px}
      .cal-box{background:var(--bg-2);border:1px solid var(--rule);padding:18px 20px}
      .cal-days-hdr,.cal-days{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}
      .cal-dh{text-align:center;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--text-3);padding:5px 0}
      .ai-opt{background:var(--bg-3);border:1px solid var(--rule-2);padding:6px 14px;font-size:.82rem;color:var(--text-3);cursor:pointer}
      .ai-opt.on{background:rgba(197,160,101,.1);border-color:var(--gold-dim);color:var(--gold-pale)}
      .s3{display:flex;flex-direction:column;height:calc(100vh - 108px)}
      .pal{flex-shrink:0;border-bottom:1px solid var(--rule);background:var(--bg);overflow:hidden}
      .pal-cats{display:grid;grid-template-columns:repeat(6,1fr);gap:1px;background:var(--rule);margin:0 6vw}
      .pal-cat{background:var(--bg)}
      .pal-cat-n{padding:7px 10px 7px 78px;font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;border-bottom:1px solid var(--rule);background:var(--bg);font-weight:500}
      .pal-items{padding:6px 10px 6px 78px;display:flex;flex-direction:column;gap:2px}
      .pill{font-size:.82rem;color:var(--text-2);padding:4px 8px 4px 4px;border:1px solid transparent;cursor:pointer;text-align:left;display:flex;align-items:center;gap:5px;background:none;width:100%}
      .pill:hover{color:var(--gold-pale)}
      .arrow-slot{
        min-height:48px;display:flex;align-items:center;justify-content:center;padding:0 8px;position:relative;
        --arrow-border:#3a2a1f;--arrow-fill:#1c1410;color:#e8d5b0;
      }
      .arrow-slot::before,
      .arrow-slot::after{
        content:"";position:absolute;top:0;left:0;right:0;bottom:0;
        clip-path:polygon(0 0,84% 0,100% 50%,84% 100%,0 100%,10% 50%);
        pointer-events:none;
      }
      .arrow-slot::before{background:var(--arrow-border);}
      .arrow-slot::after{top:1px;left:1px;right:1px;bottom:1px;background:var(--arrow-fill);}
      .arrow-slot > *{position:relative;z-index:2}
      .arrow-empty{--arrow-border:#3a2a1f;--arrow-fill:#160f0a;color:#7a6048}
      .arrow-empty.drag-over{--arrow-border:var(--gold);--arrow-fill:rgba(197,160,101,.14);color:#e8d5b0}
      .arrow-filled{--arrow-border:#5a3e28;--arrow-fill:#1c1410;color:#e8d5b0}
      .arrow-fixed{--arrow-border:#5a3e28;--arrow-fill:#1c1410;color:#c5a065}
      .arrow-checkin{--arrow-border:#c5a065;--arrow-fill:#c5a065;color:#3a1f08}
      .arrow-checkout{--arrow-border:#c5a065;--arrow-fill:#c5a065;color:#3a1f08}
      .arrow-locked{--arrow-border:#2a1f17;--arrow-fill:#0f0b08;color:#3a2a1f;opacity:.7}
      .date-col{width:90px;flex-shrink:0;display:flex;align-items:center;padding-right:10px}
      .date-label{font-size:.72rem;color:var(--text-2);line-height:1.4;text-align:right;width:100%}
      .tl-wrap{flex:1;overflow:hidden;display:flex;flex-direction:column}
      .tl-scroll{flex:1;overflow:auto;padding:0}
      .cta-bar{flex-shrink:0;border-top:1px solid var(--rule);background:var(--bg-2);padding:16px 6vw;display:flex;align-items:center;justify-content:space-between;gap:16px}
      .modal{position:fixed;inset:0;background:rgba(15,11,8,.88);display:grid;place-items:center}
    `}</style>
  );
}
