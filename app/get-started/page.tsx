import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function GetStarted() {
  return (
    <div className="flex flex-col w-dvw h-dvh">
      <div className="p-5">
        <div className="mb-8">
          <div className="px-6 md:px-0">
            <video
              className="w-[320px] h-[280px] dark:mix-blend-screen"
              src="/assets/media/steep-logo.mp4"
              autoPlay
              loop
              playsInline
              muted
            ></video>
          </div>
        </div>
        <div className="flex px-10 text-center mb-8">
          <h1 className={`text-2xl font-signifier dark:text-[#fafafb]`}>
            Sign in or create a new account
          </h1>
        </div>
        <div className="flex flex-col mb-8 w-full">
          <Button className="inline-flex items-center rounded-xl font-sohne w-full h-14 px-6 pb:0.5 whitespace-nowrap shrink-0 cursor:pointer md:text-sm md:rounded-lg dark:mb-2 dark:text-[#fafafb] dark:bg-transparent dark:border-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-5 md:h-5"
            >
              <path
                d="M22.7874 12.2475C22.7874 11.5234 22.7232 10.8359 22.6132 10.1667H12.2549V14.3009H18.1857C17.9199 15.6575 17.1407 16.8034 15.9857 17.5825V20.3325H19.524C21.5957 18.4167 22.7874 15.5934 22.7874 12.2475Z"
                fill="#4285F4"
              ></path>
              <path
                d="M12.2549 23C15.2249 23 17.7091 22.01 19.5241 20.3325L15.9858 17.5825C14.9958 18.2425 13.7399 18.6458 12.2549 18.6458C9.38575 18.6458 6.95659 16.7117 6.08575 14.0992H2.43742V16.9317C4.24325 20.525 7.95575 23 12.2549 23Z"
                fill="#34A853"
              ></path>
              <path
                d="M6.08572 14.0992C5.85655 13.4392 5.73738 12.7334 5.73738 12C5.73738 11.2667 5.86572 10.5609 6.08572 9.90086V7.06836H2.43738C1.68572 8.55336 1.25488 10.2217 1.25488 12C1.25488 13.7784 1.68572 15.4467 2.43738 16.9317L6.08572 14.0992Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12.2549 5.35417C13.8774 5.35417 15.3258 5.91334 16.4716 7.00417L19.6066 3.86917C17.7091 2.09083 15.2249 1 12.2549 1C7.95575 1 4.24325 3.475 2.43742 7.06834L6.08575 9.90084C6.95659 7.28834 9.38575 5.35417 12.2549 5.35417Z"
                fill="#EA4335"
              ></path>
            </svg>
            <span className="ml-2">Continue with Google</span>
          </Button>
          <Button className="inline-flex items-center rounded-xl font-sohne w-full h-14 px-6 pb:0.5 whitespace-nowrap shrink-0 cursor:pointer md:text-sm md:rounded-lg dark:mb-2 dark:text-[#fafafb] dark:bg-transparent dark:border-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-5 md:h-5"
            >
              <path
                d="M20.3399 7.50055C20.2123 7.59956 17.9593 8.86909 17.9593 11.692C17.9593 14.9571 20.8262 16.1122 20.912 16.1408C20.8988 16.2112 20.4565 17.7228 19.4004 19.2629C18.4587 20.6183 17.4752 21.9714 15.9791 21.9714C14.4829 21.9714 14.0979 21.1023 12.3707 21.1023C10.6876 21.1023 10.0891 22 8.72057 22C7.35203 22 6.39714 20.7459 5.29923 19.2057C4.0275 17.3971 3 14.5875 3 11.9208C3 7.64356 5.78108 5.37514 8.51815 5.37514C9.9725 5.37514 11.1848 6.33003 12.0979 6.33003C12.967 6.33003 14.3223 5.31793 15.9769 5.31793C16.604 5.31793 18.857 5.37514 20.3399 7.50055ZM15.1914 3.50715C15.8757 2.69527 16.3597 1.56876 16.3597 0.442244C16.3597 0.286029 16.3465 0.127613 16.3179 0C15.2046 0.0418042 13.8801 0.741474 13.0814 1.66777C12.4543 2.38064 11.8691 3.50715 11.8691 4.64906C11.8691 4.82068 11.8977 4.9923 11.9109 5.0473C11.9813 5.06051 12.0957 5.07591 12.2101 5.07591C13.209 5.07591 14.4653 4.40704 15.1914 3.50715Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="ml-2">Continue with Apple</span>
          </Button>
          <Button className="inline-flex items-center rounded-xl font-sohne w-full h-14 px-6 pb:0.5 whitespace-nowrap shrink-0 cursor:pointer md:text-sm md:rounded-lg dark:mb-2 dark:text-[#fafafb] dark:bg-transparent dark:border-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-5 md:h-5"
            >
              <path d="M2 2H11V11H2V2Z" fill="#F35325"></path>
              <path d="M13 2H22V11H13V2Z" fill="#81BC06"></path>
              <path d="M2 13H11V22H2V13Z" fill="#05A6F0"></path>
              <path d="M13 13H22V22H13V13Z" fill="#FFBA08"></path>
            </svg>
            <span className="ml-2">Continue with Microsoft</span>
          </Button>
        </div>
        <footer className="flex text-center">
          <p className="font-sohne font-light text-xs antialiased dark:text-[#767676]">
            By continuing, you agree to our &nbsp;
            <Link
              href="/terms-of-service"
              className="underline hover:no-underline"
            >
              <strong>Terms of Service</strong>
            </Link>
            , &nbsp;
            <Link
              href="/privacy-policy"
              className="underline hover:no-underline"
            >
              <strong>Privacy Policy</strong>
            </Link>{" "}
            &nbsp; and &nbsp;
            <Link
              href="/data-protection-agreement"
              className="underline hover:no-underline"
            >
              <strong>Data Protection Agreement</strong>
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
