import Image from "next/image";

import { SiteHeader } from "../../thesilentclub/components/SiteHeader";

type Props = {
  scrolled: boolean;
};

export function TopNav({ scrolled: _scrolled }: Props) {
  return <SiteHeader active="about" />;
}
