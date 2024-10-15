import {
  Building,
  House,
  LightbulbIcon,
  PersonStanding,
  Settings,
} from "lucide-react";
import { MenuItemProps } from "@/next-types";

const menuItems: MenuItemProps[] = [
  {
    name: "Office",
    path: "/",
    icon: Building,
  },
  {
    name: "Services",
    path: "/services",
    icon: Settings,
  },
  {
    name: "Team",
    path: "/team",
    icon: PersonStanding,
  },
  {
    name: "Philosophy",
    path: "/philosophy",
    icon: LightbulbIcon,
  },
  {
    name: "Spaces",
    path: "/spaces",
    icon: House,
  },
];

export { menuItems };
