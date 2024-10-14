import Link from "next/link";
import { menuItems } from "@/data";

function MobileNav() {
  return (
    <div className="fixed w-dvw bottom-0 flex justify-center sm:hidden">
      <div className="absolute rounded-xl w-9/12 pt-8 pb-4 flex bg-white-200 gap-12 bottom-0 justify-center xs:gap-16">
        {menuItems.map(({ name, path, icon: Icon }, idx) => (
          <Link href={path} key={idx} className="flex flex-col justify-center">
            <Icon className="w-6 h-6 mx-auto" />
            <p className="font-light text-xs pt-2">{name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
