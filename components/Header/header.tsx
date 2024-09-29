"use client";

import React from "react";
import Logo from "../Logo/logo";
import MobileNav from "../MobileNav/mobile-nav";
import Nav from "../Nav/nav";
import ThemeToggler from "../ThemeToggler/theme-toggler";
import { usePathname } from "next/navigation";

function Header() {
  const [header, setHeader] = React.useState<boolean>(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <div className="xl:hidden">
              {/* mobile nav */}
              <MobileNav />
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
