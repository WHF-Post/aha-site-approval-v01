'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FeatureTile from '../components/FeatureTile';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const safePages = ["/dashboard", "/profile"];
    const redirectTo = new URLSearchParams(window.location.search).get("next");

    // Redirect only if `next` is valid
    if (redirectTo && safePages.includes(redirectTo)) {
      router.push(redirectTo);
    }
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <main className="flex-grow">
      <section className="relative w-full h-screen bg-gradient-to-b from-[#1a1a1a] via-[#242424] to-[#1a1a1a] py-1">
  <video
    className="absolute top-0 left-0 w-full h-full object-contain"
    src="/hero-banner.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
</section>{/* Scrolling Core Values Bar */}
<section className="overflow-hidden bg-neutral-800 py-0 cursor-pointer font-russo">
  <Link href="/services" className="block w-full">
    <div className="relative w-full">
      <div className="flex animate-marquee space-x-10 items-center w-max">
        {[...Array(2)].map((_, j) => (
          <div key={j} className="flex items-center space-x-6">
            {["INDIVIDUALITY", "INTEGRITY", "CREATIVITY", "DIVERSITY"].map((word, i) => (
              <span
                key={`${j}-${i}`}
                className="text-white text-4xl font-bold flex items-center space-x-3 hover:text-yellow-300 transition-colors duration-300 font-russo"
              >
                <span>{word}</span>
                <div className="h-24 w-24 flex items-center justify-center">
                  <img
                    src="/aha_logo.png"
                    className="h-full w-full object-contain scale-[1.4] drop-shadow-lg brightness-125"
                    alt="AHA Logo"
                  />
                </div>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Link>
</section>{/* Three Feature Tiles */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureTile title="Elite Training" image="/img1.png" link="/elite-training" />
            <FeatureTile title="Enrichment Options" image="/img2.png" link="/enrichment-options" />
            <FeatureTile title="Exclusive Experiences" image="/img6.png" link="/exclusive-experiences" />
          </div>
        </section>

        {/* Tips & Testimonials Bar */}
        <section className="bg-neutral-800 text-white text-center py-4 text-5xl font-bold geo-regular hover:text-yellow-300 transition-colors duration-300 font-russo">
          <p>TIPS & TESTIMONIALS</p>
        </section>

        {/* About / Team / Contact Grid */}
        <section className="max-w-4xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureTile title="ABOUT US" image="/aha_logo.png" link="/about" />
            <FeatureTile title="TEAM" image="/aha_logo.png" link="/team" />
            <FeatureTile title="CONTACT US" image="/aha_logo.png" link="/contact" />
          </div>
        </section>

        {/* Store Banner */}
        <section className="relative w-full max-h-[400px] overflow-hidden -mt-4">
          <a href="/store" className="group relative block w-full h-full">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/img7-store.png"
                alt="Store Banner"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              <h2 className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold geo-regular group-hover:text-yellow-300 transition-colors duration-300 font-russo">
                SUPPORT AHA
              </h2>
            </div>
          </a>
        </section>
      </main>

      {/* Sticky Footer */}
      <footer className="bg-neutral-800 text-white text-center text-sm py-6 font-russo">
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