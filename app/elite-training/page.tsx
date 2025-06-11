'use client';

import { useState } from 'react';

const trainingOptions = [
  {
    title: "On-Camera Training",
    description: "Master the fundamentals of performance, poise, and projection.",
    cta: "Sign Up",
  },
  {
    title: "Voice Over Training",
    description: "Refine your vocal presence for stage and screen.",
    cta: "Sign Up",
  },
  {
    title: "Audition Prep",
    description: "Get insider tips and reps to nail cold reads and produce self-tapes.",
    cta: "Sign Up",
  },
];

export default function Elite_Training() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="px-4 py-16 max-w-5xl mx-auto text-center flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-yellow-400">Elite Training</h1>
        <p className="text-lg mb-6">
          At Artistic Heights Academy, we believe talent is just the beginning. Whether you’re
          stepping in front of the camera or leading from behind it, our enrichment programs are
          designed to sharpen your craft, deepen your industry insight, and prepare you for lasting
          success in entertainment and creative industries.
        </p>
        <p className="text-lg mb-6">
          Our instruction is delivered by a dynamic team of working professionals—actors, producers,
          editors, coaches, and creatives—who bring real-world experience and a commitment to
          developing confident, capable artists and storytellers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] p-6 rounded-lg text-center border border-gray-700 hover:border-yellow-400 transition cursor-pointer"
              onClick={() => setActive(index)}
            >
              <h2 className="text-2xl font-semibold russo">{option.title}</h2>
            </div>
          ))}
        </div>

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
            
<button
  className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 font-semibold transition"
  onClick={() => {
    const isAuthenticated = document.cookie.includes("session_token"); // Example authentication check
    if (isAuthenticated) {
      window.open("https://forms.fillout.com/t/mt2v5XiKAuus", "_blank"); // Open in a new tab
    } else {
      const redirectUrl = encodeURIComponent("https://forms.fillout.com/t/mt2v5XiKAuus");
      window.location.href = `/login?redirect=${redirectUrl}`;
    }
  }}
>
  {trainingOptions[active].cta}
</button>

          </div>
          </div>
        )}
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