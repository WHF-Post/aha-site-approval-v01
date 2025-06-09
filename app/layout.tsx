// app/layout.tsx
'use client';

import '../styles/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide navbar on homepage only
  const showNav = pathname !== '/';

  return (
    <html lang="en">
      <body className="bg-black text-white font-[Geo] min-h-screen flex flex-col">
        {showNav && (
          <nav className="bg-neutral-800 text-white py-4 px-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <img
                  src="/aha_logo.png"
                  alt="AHA Logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <Link href="/login">
                <span className="text-xl font-bold cursor-pointer hover:text-yellow-400">
                  Artistic Heights Academy
                </span>
              </Link>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/store" className="hover:text-yellow-400">Shop</Link>
              <a href="/about" className="hover:text-yellow-300">About</a>
              <a href="/team" className="hover:text-yellow-300">Team</a>
              <a href="/contact" className="hover:text-yellow-300">Contact</a>
              <a href="/elite-training" className="hover:text-yellow-300">Elite Training</a>
              <Link href="/enrichment-options" className="hover:text-yellow-400">Enrichment</Link>
              <Link href="/exclusive-experiences" className="hover:text-yellow-400">Experiences</Link>
            </div>
          </nav>
        )}
        <main className="flex-grow">{children}</main>
        {showNav && (
          <footer className="bg-neutral-900 text-center text-sm py-6 border-t border-neutral-700">
            <p>&copy; {new Date().getFullYear()} Artistic Heights Academy. All rights reserved.</p>
          </footer>
        )}
      </body>
    </html>
  );
}