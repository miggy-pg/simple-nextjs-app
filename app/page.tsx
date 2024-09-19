import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <div className="absolute bg-[#FF6562] right-0 w-4/12 h-full">
        <div className="flex justify-end pr-16 pt-4">
          <Link
            href="/blog"
            className="text-xl hover:underline underline-offset-8"
          >
            Blog
          </Link>
        </div>
        <div>Your legal advisers for the problems of this century</div>
        <div>We offer solutions adapted to today&rsquo;s needs</div>
      </div>
    </main>
  );
}
