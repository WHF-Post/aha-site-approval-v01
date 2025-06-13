'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [user, setUser] = useState<null | any>(null); // Replace `any` with the correct Firebase user type
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    router.push('/login');
  };

  // Render nothing if the current route is the homepage
  if (pathname === '/') {
    return null;
  }

  // Helper: Only close menu on mobile
  const handleMobileLinkClick = () => setMenuOpen(false);

  return (
    <nav className="bg-black text-white px-4 py-3 flex items-center justify-between shadow-md sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-yellow-400">
        <Image src="/aha_logo.png" alt="AHA Logo" width={40} height={40} className="object-contain" />
      </Link>

      {/* Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex-row md:flex md:items-center md:gap-6 ${
          menuOpen ? 'flex' : 'hidden'
        } md:static absolute ${
          menuOpen
            ? 'top-12 left-1/2 transform -translate-x-1/2 w-64 bg-neutral-900 text-white p-4 rounded-md shadow-lg z-50'
            : 'bg-black'
        } md:bg-transparent w-full md:w-auto left-0 md:top-auto top-full md:p-0`}
      >
        <Link
          href="/store"
          className="block py-1 md:py-0 hover:text-yellow-400"
          onClick={handleMobileLinkClick}
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="block py-1 md:py-0 hover:text-yellow-400"
          onClick={handleMobileLinkClick}
        >
          About
        </Link>
        <Link
          href="/team"
          className="block py-1 md:py-0 hover:text-yellow-400"
          onClick={handleMobileLinkClick}
        >
          Team
        </Link>
        <Link
          href="/contact"
          className="block py-1 md:py-0 hover:text-yellow-400"
          onClick={handleMobileLinkClick}
        >
          Contact
        </Link>
        <Link
          href="/elite-training"
          className="block py-1 md:py-0 hover:text-yellow-400"
          onClick={handleMobileLinkClick}
        >
          Elite Training
        </Link>
        <Link
          href="/enrichment-options"
          className="block py-1 md:py-0 hover:text-yellow-400"
          onClick={handleMobileLinkClick}
        >
          Enrichment
        </Link>
        <Link
          href="/exclusive-experiences"
          className="block py-1 md:py-0 hover:text-yellow-400"
          onClick={handleMobileLinkClick}
        >
          Experiences
        </Link>

        {user ? (
          <button
            onClick={() => {
              handleMobileLinkClick();
              handleLogout();
            }}
            className="text-yellow-400 font-bold py-1 md:py-0"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="text-yellow-400 font-bold py-1 md:py-0"
            onClick={handleMobileLinkClick}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}