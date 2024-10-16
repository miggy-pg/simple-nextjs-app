import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "@/styles/assets/google.png";
import MicrosoftIcon from "@/styles/assets/microsoft.png";
import AppleIcon from "@/styles/assets/apple.png";
import { Mail } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function GetStarted() {
  return (
    <div className="flex flex-col w-dvw h-dvh">
      <section className="p-5">
        <div>
          <h1 className={`text-4xl font-signifier`}>
            Sign in or create a new account
          </h1>
          <p className="font-light my-4">
            Create an account or log in to book and manage your appointments
          </p>
        </div>
        <div className="flex flex-col mx-2 px-10 border-red-500 border-2">
          <Button className="font-sohne dark:text-[#fef8ee] dark:bg-transparent dark:border-2">
            <Image src={GoogleIcon} alt="" width={15} height={15}></Image>
            Continue with Google
          </Button>
          <Button className="font-sohne p-6 dark:text-[#fef8ee] dark:bg-transparent dark:border-2">
            <Image
              src={AppleIcon}
              className="dark:fill-white"
              alt=""
              width={15}
              height={15}
            ></Image>
            Continue with Apple
          </Button>
          <Button className="font-sohne p-6 dark:text-[#fef8ee] dark:bg-transparent text-white dark:border-2">
            <Image src={MicrosoftIcon} alt="" width={15} height={15}></Image>
            Continue with Microsoft
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
