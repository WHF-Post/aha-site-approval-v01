'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-neutral-800 to-black text-white font-[Geo]">
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Artistic Heights Academy</h1>
        <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
        Located in the heart of West Midtown Atlanta, AHA equips students with a solid, versatile foundation by exposing them to multiple approaches, allowing them to discover and develop their own authentic acting voice.  AHA vocational programs are designed to provide broad-based training experience grounded in a range of proven and widely respected acting methods, including Stanislavsky, Meisner, Chekhov, and more.

At Artistic Heights Academy, we take a holistic approach to artistic development, offering elite training, immersive enrichment options, and exclusive entertainment experiences year-round.  We provide an inspiring environment where performers can refine their craft, build confidence, and reach new artistic heights.  Our distinguished team of industry professionals and experienced educators are dedicated to providing high-quality instruction in a supportive and empowering setting - ensuring every artist has the tools to thrive.

Research underscores the transformative power of arts engagement, listing benefits such as: Enhanced Cognitive Ability, Sharpened Problem-Solving Skills, Increased Self-Esteem, and Deeper Emotional Expression.  These advantages not only shape personal growth but also foster professional success across industries.

        </p>

        <Link
          href="/team"
          className="inline-block mt-4 px-6 py-3 text-lg font-semibold text-black bg-yellow-400 rounded hover:bg-yellow-500 transition"
        >
          Meet the Team
        </Link>
      </main>

      {/* Sticky Footer */}
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