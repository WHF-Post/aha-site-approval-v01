'use client';

import { useState } from 'react';

const trainingOptions = [
  {
    title: 'Business of Entertainment',
    description:
      'Learn how the industry really works—contracts, auditions, branding, agents, unions, and strategy—so you’re ready for the real world.',
    cta: 'Start Learning',
  },
  {
    title: 'Production & Post',
    description:
      'Gain valuable creative and technical skills behind the camera in directing, editing, lighting, and producing for the screen.',
    cta: 'Enroll Now',
  },
];

export default function EnrichmentOptionsPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between font-sans">
      <main className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6 geo-regular">
          Enrichment Options
        </h1>

        <p className="max-w-3xl text-lg text-center mb-12 text-gray-300">
          At Artistic Heights Academy, we believe talent is just the beginning. Whether you’re stepping
          in front of the camera or leading from behind it, our enrichment programs are designed to
          sharpen your craft, deepen your industry insight, and prepare you for lasting success in entertainment
          and creative industries.
          <br /><br />
          Our instruction is delivered by a dynamic team of working professionals—actors, producers, editors,
          coaches, and creatives—who bring real-world experience and a commitment to developing confident,
          capable artists and storytellers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
          {trainingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] p-6 rounded-lg text-center border border-gray-700 hover:border-yellow-400 transition cursor-pointer"
              onClick={() => setActive(index)}
            >
              <h2 className="text-2xl font-semibold geo-regular">{option.title}</h2>
            </div>
          ))}
        </div>
      </main>

      {active !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#111] border border-gray-600 p-8 rounded-lg max-w-md text-center relative">
            <button
              onClick={() => setActive(null)}
              className="absolute top-2 right-3 text-white text-xl hover:text-yellow-400"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 geo-regular">
              {trainingOptions[active].title}
            </h2>
            <p className="mb-6 text-lg">{trainingOptions[active].description}</p>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 font-semibold transition">
              {trainingOptions[active].cta}
            </button>
            <p className="text-sm mt-2 text-gray-400">Login required to continue</p>
          </div>
        </div>
      )}

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