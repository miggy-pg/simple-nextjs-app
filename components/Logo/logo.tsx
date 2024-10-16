import Image from "next/image";
import React from "react";

import logo from "@/styles/assets/logo-vector.webp";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src={logo} width={54} height={54} priority alt="" />
    </Link>
  );
}

export default Logo;
