'use client';

import { useState } from 'react';

const experiences = [
  {
    title: 'LA Masterclass Experience',
    description: `Step into the heart of Hollywood with the LA Masterclass Experience!

This epic and exclusive annual week-long journey immerses you in the world of entertainment, offering unparalleled access to industry professionals, elite workshops, and iconic Hollywood experiences.

Perfect your craft, expand your network, and gain a competitive edge in the acting world. Don’t just dream it—experience it!

2025 LAMCE - Included Classes & Activities
- Industry Workshops with Casting & Producing Experts
- LA Photography Session with a Pro Photographer
- Networking & Industry Connections
- Auditing with a Notable LA Acting Coach
- Studio City Tour with Executive Producer Bruce Nahin

The 2025 LA Mastersclass Experience is now sold out!

It is with great honor that The Artistic Heights Academy Foundation will sponsor one additional deserving, aspiring, and talented artist to attend the 2025 LA Masters Class Experience (LAMCE). This year’s sponsorship is in recognition of the late Bryce Christopher Pitts and will be referred to as the 2025 BCP Scholarship. This opportunity will be awarded to an individual looking to reach their highest artistic potential.`,
    cta: 'Apply Now',
  },
  {
    title: 'Internship Opportunities',
    description: `Artists from Artistic Heights programs gain access to unique internship and shadowing opportunities with working professionals in the industry. These experiences are designed to provide valuable behind-the-scenes exposure, mentorship, and real-world insight into careers in entertainment, production, and creative fields.`,
    cta: 'Learn More',
  },
  {
    title: 'BCP Foundation',
    description: `Learn more about the BCP Foundation and the inspiring legacy of Bryce Christopher Pitts.`,
    cta: 'Learn More',
    link: '/exclusive-experiences/bcp-page',
  },
];

export default function ExclusiveExperiencesPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-800 to-black text-white flex flex-col items-center px-4 py-12">
      <main className="px-4 pb-20 pt-24 max-w-5xl mx-auto text-center flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-yellow-400">Exclusive Experiences</h1>
        <p className="max-w-4xl text-center mb-10">
          At Artistic Heights Academy, we offer more than just training—we offer transformative experiences that connect our students to real-world industry opportunities and career-shaping journeys.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <h2 className="text-xl font-semibold mb-4">{exp.title}</h2>
              <button
                onClick={() =>
                  exp.link ? (window.location.href = exp.link) : setActive(index)
                }
                className="mt-2 bg-white text-black font-bold px-4 py-2 rounded hover:bg-yellow-300 transition"
              >
                {exp.cta}
              </button>
            </div>
          ))}
        </div>

        {active !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
            <div className="bg-white text-black max-w-lg w-full p-6 rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-black text-xl"
                onClick={() => setActive(null)}
              >
                &times;
              </button>
              <h3 className="text-xl font-bold mb-4">{experiences[active].title}</h3>
              <p className="whitespace-pre-line">{experiences[active].description}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}