import Link from "next/link";
import GuestLayout from "../layout/GuestLayout";

export default function About() {
  return (
    <GuestLayout>
    <div className="bg-teal-500 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold">Hello</h1>
      <p className="text-lg mt-2">Welcome to the about page</p>
      <nav className="mt-4">
        <ul>
          <li>
            <Link href="/home" className="text-white underline">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </GuestLayout>
  );
}
