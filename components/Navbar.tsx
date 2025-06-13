'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase'; // assumes your firebase.ts exports `auth`
import { useRouter, usePathname } from 'next/navigation'; // Import usePathname
import Image from 'next/image';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

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
      >
        <Image
          src="/aha_logo.png"
          alt="Menu"
          width={30}
          height={30}
          className="object-contain"
        />
      </button>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex-row md:flex md:items-center md:gap-6 ${
          menuOpen ? 'flex' : 'hidden'
        } md:static absolute bg-black md:bg-transparent w-full md:w-auto left-0 md:top-auto top-full p-4 md:p-0`}
      >
        <Link href="/store" className="block py-1 md:py-0 hover:text-yellow-400">Shop</Link>
        <Link href="/about" className="block py-1 md:py-0 hover:text-yellow-400">About</Link>
        <Link href="/team" className="block py-1 md:py-0 hover:text-yellow-400">Team</Link>
        <Link href="/contact" className="block py-1 md:py-0 hover:text-yellow-400">Contact</Link>
        <Link href="/elite-training" className="block py-1 md:py-0 hover:text-yellow-400">Elite Training</Link>
        <Link href="/enrichment-options" className="block py-1 md:py-0 hover:text-yellow-400">Enrichment</Link>
        <Link href="/exclusive-experiences" className="block py-1 md:py-0 hover:text-yellow-400">Experiences</Link>

        {user ? (
          <button onClick={handleLogout} className="text-yellow-400 font-bold py-1 md:py-0">Logout</button>
        ) : (
          <Link href="/login" className="text-yellow-400 font-bold py-1 md:py-0">Login</Link>
        )}
      </div>
    </nav>
  );
}