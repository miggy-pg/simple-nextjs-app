import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "../../components/ui/button";
import GoogleIcon from "../../assets/google.png";
import { Input } from "../../components/ui/input";

export default function GetStarted() {
  return (
    <div className="flex flex-col w-dvw h-dvh bg-[#f6f6f6]">
      <section>
        <span>
          <p>Log in or sign up</p>
          <p>
            Create an account or log in to book and manage your appointments
          </p>
        </span>
        <div className="flex flex-col mx-2 px-10 border-red-500 border-2">
          <Button className="bg-[#000000] p-6 text-white">
            Continue with Apple
          </Button>
          <Button className="bg-[#fdfdfd] text-black">
            <Image src={GoogleIcon} alt="" width={15} height={15}></Image>
            Continue with Google
          </Button>
          <p>or</p>
          <Input
            type="email"
            placeholder="Email"
            className="bg-[#e1e0e0] text-black"
          />
          <Button className="bg-[#e1e0e0] text-black rounded-3xl">
            <Mail className="w-4 h-4 mx-2" />
            Continue
          </Button>
        </div>
        <footer>
          <Link href="">
            <strong>English</strong>
          </Link>
          <Link href="">
            <strong>Support</strong>
          </Link>
        </footer>
      </section>
    </div>
  );
}
