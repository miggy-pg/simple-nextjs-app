import Link from "next/link";

export default function Blog() {
  return (
    <main>
      <p>This is the Blog Page</p>
      <div>
        <p>
          <Link href="/blog/post-1">Blog 1</Link>
        </p>
        <p>
          <Link href="/blog/post-2">Blog 2</Link>
        </p>
      </div>
    </main>
  );
}
