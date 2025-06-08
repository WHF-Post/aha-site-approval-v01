'use client';

import { useState } from 'react';
import { Transition } from '@headlessui/react';

const trainingOptions = [
  {
    title: 'Business of Entertainment',
    description: `Learn how the industry really works—contracts, auditions, branding, agents,
    unions, and strategy—so you’re ready for the real world.`,
    cta: 'Sign Up',
  },
  {
    title: 'On-Camera Training',
    description: `From Intro to Mastery, our acting classes teach techniques to help you bring
    characters to life with confidence, charisma, and emotional truth.`,
    cta: 'Sign Up',
  },
  {
    title: 'Voice Coaching',
    description: `Strengthen your voice with techniques that support projection, stamina,
    articulation, and vocal power—perfect for actors, singers, and speakers.`,
    cta: 'Sign Up',
  },
];

export default function EnrichmentOptionsPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="px-4 py-16 max-w-5xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 geo-regular">Enrichment Options</h1>
      <p className="text-lg mb-6">
        At Artistic Heights Academy, we believe talent is just the beginning. Whether you’re
        stepping in front of the camera or leading from behind it, our enrichment programs are
        designed to sharpen your craft, deepen your industry insight, and prepare you for lasting
        success in entertainment and creative industries.
      </p>
      <p className="text-base mb-10 text-gray-400">
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
            <h2 className="text-2xl font-semibold geo-regular">{option.title}</h2>
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
                window.location.href = "/login?redirect=https://forms.fillout.com/t/mt2v5XiKAuus";
              }}
            >
              {trainingOptions[active].cta}
            </button>
            <p className="text-sm mt-2 text-gray-400">Login required to continue</p>
          </div>
        </div>
      )}
    </main>
  );
}