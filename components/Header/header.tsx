import Logo from "../Logo/logo";
import MobileNav from "../MobileNav/mobile-nav";
import Nav from "../Nav/nav";
import ThemeToggler from "../ThemeToggler/theme-toggler";
function Header() {
  return (
    <header>
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
