"use client";

import { SiteHeader } from "../../components/SiteHeader";

type Props = {
  html: string;
};

export function FaqDocumentFrame({ html }: Props) {
  // Inject CSS to hide the embedded nav inside the iframe
  const htmlWithHiddenNav = html.replace(
    "</head>",
    `<style>.nav{display:none!important;}</style></head>`
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SiteHeader active="faq" />
      <iframe
        title="The Silent Club FAQ"
        srcDoc={htmlWithHiddenNav}
        style={{
          width: "100%",
          flex: 1,
          border: "none",
          display: "block",
          minHeight: "calc(100vh - 56px)",
        }}
      />
    </div>
  );
}
