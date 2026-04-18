import { RenderGate } from "./components/RenderGate";

export default function TheSilentClubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RenderGate>{children}</RenderGate>;
}
