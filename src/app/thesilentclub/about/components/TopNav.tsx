import Image from "next/image";

import { SiteHeader } from "../../components/SiteHeader";

type Props = {
  scrolled: boolean;
  onOpenModal: () => void;
};

export function TopNav({ scrolled: _scrolled, onOpenModal: _onOpenModal }: Props) {
  return <SiteHeader active="about" />;
}
