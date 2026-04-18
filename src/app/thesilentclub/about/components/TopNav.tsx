import Image from "next/image";

import { SiteHeader } from "../../components/SiteHeader";

type Props = {
  scrolled: boolean;
};

export function TopNav({ scrolled: _scrolled }: Props) {
  return <SiteHeader active="about" />;
}
