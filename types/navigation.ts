import type { ReactNode } from "react";
import type { navigationLinks } from "@/data/navigation";

export type NavigationHref = (typeof navigationLinks)[number]["href"];

export interface NavigationItemsProps {
  activeHref: NavigationHref;
  onNavigate: (href: NavigationHref) => void;
}

export interface MobileNavigationProps {
  children: ReactNode;
}
