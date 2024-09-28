import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  containerStyles: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

function Nav({ containerStyles, linkStyles, underlineStyles }: NavProps) {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize ${linkStyles}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
