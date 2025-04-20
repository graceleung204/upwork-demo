import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <ul className="flex space-x-4 justify-center">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}