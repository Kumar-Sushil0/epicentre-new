"use client";

import { useState } from "react";
import { SiteHeader } from "../../components/SiteHeader";

type Props = {
  html: string;
};

export function FaqDocumentFrame({ html }: Props) {
  const [iframeReady, setIframeReady] = useState(false);

  // Inject CSS to hide the embedded nav inside the iframe
  const htmlWithHiddenNav = html.replace(
    "</head>",
    `<style>.nav{display:none!important;}</style></head>`
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#0f0b08" }}>
      <SiteHeader active="faq" />
      {!iframeReady && (
        <div
          aria-hidden="true"
          style={{
            width: "100%",
            flex: 1,
            minHeight: "calc(100vh - 56px)",
            background: "#0f0b08",
          }}
        />
      )}
      <iframe
        title="The Silent Club FAQ"
        srcDoc={htmlWithHiddenNav}
        onLoad={() => setIframeReady(true)}
        style={{
          width: "100%",
          flex: 1,
          border: "none",
          display: "block",
          minHeight: "calc(100vh - 56px)",
          opacity: iframeReady ? 1 : 0,
          transition: "opacity 180ms ease",
        }}
      />
    </div>
  );
}
