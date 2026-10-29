import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-head">
      <h1>Page not found</h1>
      <p className="lede">That page doesn&apos;t exist. <Link href="/">Go back to the home page</Link>.</p>
    </div>
  );
}
