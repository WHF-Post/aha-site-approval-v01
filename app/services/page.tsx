// app/store/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function StorePage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between">
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

        <div onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>
          <button className="text-xl bg-yellow-700 hover:bg-yellow-800 text-white py-4 px-8 rounded-xl shadow-lg transition">
            Donate to AHA
          </button>
          {showPopup && (
            <div className="mt-2 p-4 bg-gray-800 text-white text-sm rounded shadow-md text-center max-w-sm mx-auto">
              Every Donation to AHA over $250 will receive an original piece of digital art from an AHA student.
            </div>
          )}
        </div>
      </main>

      <footer className="bg-neutral-800 text-white text-center text-sm py-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4">
          <img src="/aha_logo_txt.png" alt="AHA Logo" className="h-[60px] w-auto object-contain" />
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61574999932660" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook-logo_icon.png" alt="Facebook" className="h-6 w-6 hover:scale-110 transition" />
            </a>
            <a href="https://www.instagram.com/artisticheightsacademy/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram-logo_icon.png" alt="Instagram" className="h-6 w-6 hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com/company/artistic-heights-academy/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin-logo_icon.png" alt="LinkedIn" className="h-6 w-6 hover:scale-110 transition" />
            </a>
          </div>
          <a
            href="https://www.google.com/maps/place/1200+Foster+Street+NW,+Suite+220,+Atlanta,+GA+30318"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-yellow-300 transition-colors duration-300"
          >
            1200 Foster Street NW, Suite 220, Atlanta, GA 30318
          </a>
        </div>
      </footer>
    </div>
  );
}