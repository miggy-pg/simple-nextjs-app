import { LucideProps } from "lucide-react";

export interface MenuItemProps {
  name: string;
  path: string;
  icon: React.ComponentType<LucideProps>;
}
