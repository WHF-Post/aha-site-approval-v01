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
            alt="/aha_logo_txt.png"
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
          <li><Link className="hover:text-yellow-400" href="/testimonials">Tips & Testimonials</Link></li>
          <li><Link className="hover:text-yellow-400" href="#">Support</Link></li>
          <li><Link className="hover:text-yellow-400" href="/contact">Contact</Link></li>
          <li>
            <a
              className="hover:text-yellow-400"
              href="https://coachedbyjonnainc.com/studentmerch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
          </li>
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
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-64 bg-neutral-900 text-white p-4 rounded-md shadow-lg z-50">
          <ul className="md:hidden space-y-2 text-sm font-medium">
            <li>
              <Link className="hover:text-yellow-400 block" href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 block" href="/elite-training" onClick={() => setIsOpen(false)}>
                Elite Training
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 block" href="/enrichment-options" onClick={() => setIsOpen(false)}>
                Enrichment
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 block" href="/exclusive-experiences" onClick={() => setIsOpen(false)}>
                Experiences
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 block" href="/testimonials" onClick={() => setIsOpen(false)}>
                Tips & Testimonials
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 block" href="#" onClick={() => setIsOpen(false)}>
                Support
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 block" href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <a
                className="hover:text-yellow-400 block"
                href="https://coachedbyjonnainc.com/studentmerch"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </a>
            </li>
            <li>
              <Link className="hover:text-yellow-400 block" href="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}