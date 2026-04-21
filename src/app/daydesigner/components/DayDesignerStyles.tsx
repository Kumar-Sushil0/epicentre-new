export function DayDesignerStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0');
      .material-symbols-outlined{font-family:'Material Symbols Outlined';font-weight:normal;font-style:normal;font-size:inherit;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;}
      :root{--bg:#0f0b08;--bg-2:#160f0a;--bg-3:#1c1410;--gold:#c5a065;--gold-dim:#8a6e42;--gold-pale:#e8d5b0;--text-2:#b09070;--text-3:#7a6048;--rule:#2a1f17;--rule-2:#3a2a1f;--serif:'Cormorant',Georgia,serif;--sans:'Jost',sans-serif;}
      body{background:var(--bg);color:var(--gold-pale);font-family:var(--sans);font-weight:300;overflow:hidden;font-size:14px}
      .hdr{height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 6vw;background:var(--bg-2);border-bottom:1px solid var(--rule)}
      .steps{display:flex;border-bottom:1px solid var(--rule);overflow-x:auto}
      .step{flex:1;min-width:0;padding:10px 12px;border-right:1px solid var(--rule);font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;color:var(--text-3);display:flex;align-items:center;gap:6px;white-space:nowrap}
      .step.active{color:var(--gold-pale);background:var(--bg-2)} .step.done{color:var(--gold-dim)}
      .step-n{width:20px;height:20px;flex-shrink:0;border-radius:50%;border:1px solid var(--rule-2);display:grid;place-items:center;font-size:.65rem}
      .step.active .step-n{background:var(--gold);color:var(--bg)} .step.done .step-n{background:var(--gold-dim);color:var(--bg)}
      .p-inner{padding:16px 4vw;height:calc(100vh - 108px);overflow:auto;display:flex;flex-direction:column}
      .p-inner-content{flex:1;overflow:auto}
      .p-inner-footer{flex-shrink:0;padding-top:16px;border-top:1px solid var(--rule);margin-top:16px}
      .p-grid,.c-grid{display:grid;gap:1px;background:var(--rule)}
      .p-grid{grid-template-columns:repeat(2,1fr)} .c-grid{grid-template-columns:1fr 1fr}
      .pc,.cc{background:var(--bg-2);cursor:pointer;transition:.2s}
      .pc{padding:16px 18px;border-bottom:2px solid transparent}.cc{padding:18px 20px;border-bottom:2px solid transparent;position:relative}
      .pc:hover,.cc:hover{background:var(--bg-3)} .pc.sel,.cc.sel{background:var(--bg-3);border-bottom-color:var(--gold)}
      .btn{background:var(--gold);color:var(--bg);font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;padding:11px 22px;border:none;cursor:pointer;font-weight:500}
      .btn-g{background:none;color:var(--text-3);font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;padding:11px 18px;border:1px solid var(--rule-2);cursor:pointer}
      .btn:disabled{opacity:.4;cursor:not-allowed}
      .btn-g:hover{color:var(--gold-pale);border-color:var(--gold-dim)}
      .cal-wrap{display:grid;grid-template-columns:1fr;gap:16px;margin-top:16px}
      .cal-box{background:var(--bg-2);border:1px solid var(--rule);padding:14px 16px}
      .cal-days-hdr,.cal-days{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}
      .cal-dh{text-align:center;font-size:.68rem;letter-spacing:.06em;text-transform:uppercase;color:var(--text-3);padding:4px 0}
      .ai-opt{background:var(--bg-3);border:1px solid var(--rule-2);padding:6px 12px;font-size:.78rem;color:var(--text-3);cursor:pointer}
      .ai-opt.on{background:rgba(197,160,101,.1);border-color:var(--gold-dim);color:var(--gold-pale)}
      .s3{display:flex;flex-direction:column;height:calc(100vh - 108px)}
      .pal{flex-shrink:0;border-bottom:1px solid var(--rule);background:var(--bg);overflow:hidden}
      .pal-cats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--rule);margin:0 2vw}
      .pal-cat{background:var(--bg)}
      .pal-cat-n{padding:6px 8px;font-size:.65rem;letter-spacing:.08em;text-transform:uppercase;border-bottom:1px solid var(--rule);background:var(--bg);font-weight:500}
      .pal-items{padding:4px 6px;display:flex;flex-direction:column;gap:2px}
      .pill{font-size:.75rem;color:var(--text-2);padding:5px 6px 5px 4px;border:1px solid transparent;cursor:pointer;text-align:left;display:flex;align-items:center;gap:4px;background:none;width:100%;border-radius:2px;transition:background .15s,color .15s}
      .pill:hover{color:var(--gold-pale);background:rgba(197,160,101,.06);border-color:var(--rule)}
      .pill-label[data-tip]{position:relative;display:inline-block}
      .pill-label[data-tip]:hover::after{
        content:attr(data-tip);position:absolute;left:calc(100% + 10px);top:50%;transform:translateY(-50%);
        width:200px;max-width:200px;z-index:30;padding:7px 10px;border:1px solid #3a2a1f;background:#160f0a;
        color:#b09070;font-size:.65rem;line-height:1.5;letter-spacing:.01em;white-space:normal;font-style:italic;
        box-shadow:0 8px 20px rgba(0,0,0,.5);pointer-events:none;border-radius:2px;
      }
      .pill-label[data-tip]:hover::before{
        content:"";position:absolute;left:100%;top:50%;transform:translate(4px,-50%);
        border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #3a2a1f;
        pointer-events:none;z-index:31;
      }
      .arrow-slot{
        min-height:44px;display:flex;align-items:center;justify-content:center;padding:0 6px;position:relative;
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
      .arrow-slot[draggable="true"]{cursor:grab}
      .arrow-slot[draggable="true"]:active{cursor:grabbing}
      .arrow-fixed{--arrow-border:#5a3e28;--arrow-fill:#1c1410;color:#c5a065}
      .arrow-checkin{--arrow-border:#c5a065;--arrow-fill:#c5a065;color:#3a1f08}
      .arrow-checkout{--arrow-border:#c5a065;--arrow-fill:#c5a065;color:#3a1f08}
      .arrow-locked{--arrow-border:#2a1f17;--arrow-fill:#0f0b08;color:#3a2a1f;opacity:.7}
      @keyframes ai-slot-land {
        0%{transform:scale(.88);filter:brightness(1.12);box-shadow:0 0 0 0 rgba(197,160,101,.45)}
        40%{transform:scale(1.05);box-shadow:0 0 0 2px rgba(197,160,101,.3)}
        100%{transform:scale(1);filter:brightness(1);box-shadow:none}
      }
      .arrow-slot.ai-drop-flash{animation:ai-slot-land .55s cubic-bezier(0.4,0,0.2,1) forwards}
      .ai-drag-ghost{
        position:fixed;z-index:10100;left:0;top:0;display:flex;align-items:center;gap:6px;
        padding:7px 11px;border-radius:7px;background:rgba(22,16,16,.97);
        border:1px solid var(--ghost-accent,#8a6e42);box-shadow:0 10px 36px rgba(0,0,0,.55);
        pointer-events:none;font-size:.74rem;color:var(--gold-pale,#e8d5b0);max-width:220px;
        font-family:var(--sans,'Jost',sans-serif);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
      }
      .ai-drag-ghost-ic{font-size:15px!important;color:var(--ghost-accent,#c5a065)!important;line-height:1}
      .ai-drag-ghost-txt{overflow:hidden;text-overflow:ellipsis}
      .date-col{width:64px;flex-shrink:0;display:flex;align-items:center;padding-right:6px}
      .date-label{font-size:.65rem;color:var(--text-2);line-height:1.4;text-align:right;width:100%}
      .tl-wrap{flex:1;overflow:hidden;display:flex;flex-direction:column}
      .tl-scroll{flex:1;overflow:auto;padding:0}
      .table-tutorial-scrim{
        animation:table-tutorial-scrim-in .38s ease-out both;
      }
      @keyframes table-tutorial-scrim-in{
        from{opacity:0}
        to{opacity:1}
      }
      .table-tutorial-spotlight-pal{
        box-shadow:
          inset 0 0 0 2px rgba(197,160,101,.55),
          0 0 0 1px rgba(197,160,101,.35),
          0 12px 40px rgba(197,160,101,.12);
        animation:table-tutorial-ring-pulse 2.2s ease-in-out infinite;
      }
      .table-tutorial-spotlight-tl{
        box-shadow:
          inset 0 0 0 2px rgba(197,160,101,.45),
          0 0 0 1px rgba(197,160,101,.28),
          0 16px 48px rgba(0,0,0,.35);
        animation:table-tutorial-ring-pulse 2.2s ease-in-out infinite;
      }
      @keyframes table-tutorial-ring-pulse{
        0%,100%{ box-shadow:inset 0 0 0 2px rgba(197,160,101,.45),0 0 0 1px rgba(197,160,101,.25),0 12px 36px rgba(197,160,101,.1); }
        50%{ box-shadow:inset 0 0 0 2px rgba(232,213,176,.5),0 0 0 2px rgba(197,160,101,.4),0 16px 44px rgba(197,160,101,.18); }
      }
      .table-tutorial-fake-cursor{
        filter:drop-shadow(0 4px 12px rgba(0,0,0,.55));
        line-height:0;
        transform-origin:0 0;
      }
      .table-tutorial-fake-cursor.is-down{
        transform:translate(1px,2px) scale(.92);
        transition:transform .08s ease-out;
      }
      .table-tutorial-cross-glow{
        color:#f0e4cc!important;
        text-shadow:0 0 10px rgba(197,160,101,.95),0 0 22px rgba(197,160,101,.65),0 0 36px rgba(197,160,101,.35);
        animation:table-tutorial-cross-pulse 0.65s ease-in-out 1;
        display:inline-block;
      }
      @keyframes table-tutorial-cross-pulse{
        0%,100%{ filter:brightness(1); transform:scale(1); }
        50%{ filter:brightness(1.35); transform:scale(1.12); }
      }
      .table-tutorial-bar{
        animation:table-tutorial-in .45s cubic-bezier(0.22,1,0.36,1) both;
      }
      @keyframes table-tutorial-in{
        from{opacity:0;transform:translateY(10px)}
        to{opacity:1;transform:translateY(0)}
      }
      .cta-bar{flex-shrink:0;border-top:1px solid var(--rule);background:var(--bg-2);padding:12px 4vw;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
      .modal{position:fixed;inset:0;background:rgba(15,11,8,.88);display:grid;place-items:center;padding:16px;z-index:9999}
      .tsc-invite-modal-overlay{
        position:fixed;
        inset:0;
        background:rgba(15,11,8,.88);
        display:grid;
        place-items:center;
        padding:16px;
        z-index:12000;
      }
      @media(min-width:640px){
        .p-grid{grid-template-columns:repeat(4,1fr)}
        .pal-cats{grid-template-columns:repeat(6,1fr);margin:0 3vw}
        .pal-cat-n{padding:7px 10px}
        .pal-items{padding:6px 10px}
        .cal-wrap{grid-template-columns:1fr 220px}
        .date-col{width:90px;padding-right:10px}
        .date-label{font-size:.72rem}
        .p-inner{padding:24px 6vw}
        .cta-bar{padding:16px 6vw}
      }
    `}</style>
  );
}
