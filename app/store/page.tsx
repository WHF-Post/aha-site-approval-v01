'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function StorePage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-800 to-black text-white flex flex-col justify-between">
      <main className="flex flex-col items-center justify-start p-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="https://coachedbyjonnainc.com/studentmerch" target="_blank" rel="noopener noreferrer" className="text-center">
            <Image src="/store/aha-hoodie.png" alt="AHA Hoodie" width={500} height={500} />
          </a>
          <a href="https://coachedbyjonnainc.com/studentmerch" target="_blank" rel="noopener noreferrer" className="text-center">
            <Image src="/store/aha-shirt.png" alt="AHA T-Shirt" width={500} height={500} />
          </a>
          <a href="https://coachedbyjonnainc.com/studentmerch" target="_blank" rel="noopener noreferrer" className="text-center">
            <Image src="/store/sketchpad.png" alt="AHA Sketchpad" width={500} height={500} />
          </a>
        </div>

        <a href="https://coachedbyjonnainc.com/studentmerch" target="_blank" rel="noopener noreferrer">
          <button className="text-xl bg-red-700 hover:bg-red-800 text-white py-4 px-8 rounded-xl shadow-lg transition">AHA Swag Shop</button>
        </a>

        <div
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
          className="mt-8"
        >
          <p className="text-yellow-400 cursor-pointer">Make a Donation</p>
          {showPopup && (
            <div className="mt-2 text-sm text-white bg-neutral-700 p-4 rounded shadow text-center max-w-md">
              Donations to AHA over $250 will receive a unique piece of digital artwork from an AHA Student Creator.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
