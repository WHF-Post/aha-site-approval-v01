"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-black text-white px-4 py-2 z-50 relative">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/aha_logo.png"
            alt="Artistic Heights Academy Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-4 text-sm font-medium">
          <li><Link className="hover:text-yellow-400" href="/about">About</Link></li>
          <li><Link className="hover:text-yellow-400" href="/elite-training">Elite Training</Link></li>
          <li><Link className="hover:text-yellow-400" href="/enrichment-options">Enrichment</Link></li>
          <li><Link className="hover:text-yellow-400" href="/exclusive-experiences">Experiences</Link></li>
          <li><Link className="hover:text-yellow-400" href="#">Tips & Testimonials</Link></li>
          <li><Link className="hover:text-yellow-400" href="#">Support</Link></li>
          <li><Link className="hover:text-yellow-400" href="/contact">Contact</Link></li>
          <li><Link className="hover:text-yellow-400" href="/shop">Shop</Link></li>
          <li><Link className="hover:text-yellow-400" href="/login">Login</Link></li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 text-sm font-medium">
          <li><Link className="hover:text-yellow-400 block" href="/about">About</Link></li>
          <li><Link className="hover:text-yellow-400 block" href="/elite-training">Elite Training</Link></li>
          <li><Link className="hover:text-yellow-400 block" href="/enrichment-options">Enrichment</Link></li>
          <li><Link className="hover:text-yellow-400 block" href="/exclusive-experiences">Experiences</Link></li>
          <li><Link className="hover:text-yellow-400 block" href="#">Tips & Testimonials</Link></li>
          <li><Link className="hover:text-yellow-400 block" href="#">Support</Link></li>
          <li><Link className="hover:text-yellow-400 block" href="/contact">Contact</Link></li>
          <li><Link className="hover:text-yellow-400 block" href="/shop">Shop</Link></li>
          <li><Link className="hover:text-yellow-400 block" href="/login">Login</Link></li>
        </ul>
      )}
    </nav>
  );
}
