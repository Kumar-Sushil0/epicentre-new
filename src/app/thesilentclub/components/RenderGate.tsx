"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function RenderGate({ children }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const showWhenReady = async () => {
      const fontsReady =
        typeof document !== "undefined" && "fonts" in document
          ? (document as Document & { fonts: FontFaceSet }).fonts.ready
          : Promise.resolve();

      await Promise.race([
        fontsReady,
        new Promise<void>((resolve) => window.setTimeout(resolve, 450)),
      ]);

      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      if (!cancelled) setReady(true);
    };

    void showWhenReady();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#0f0b08" }}>
      {!ready && <div aria-hidden="true" style={{ minHeight: "100vh", background: "#0f0b08" }} />}
      <div style={{ opacity: ready ? 1 : 0, transition: "opacity 180ms ease" }}>{children}</div>
    </div>
  );
}
