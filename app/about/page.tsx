'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-neutral-800 to-black text-white font-Russo One">
      {/* YouTube Video */}
      <div className="w-full flex justify-center pt-8">
        <div className="relative w-full max-w-2xl aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/QU0AC1MYB6w?si=a8V4dM6jsNh8uTNh"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto px-6 py-12 text-center">
        {/* Header */}
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-400">About Artistic Heights Academy</h1>
        {/* Updated Paragraph */}
        <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
          Located in the heart of West Midtown Atlanta, Artistic Heights Academy (AHA) equips and empowers emerging artists to thrive in the entertainment industry through elite training, immersive enrichment, and transformative experiences that forges holistic creative growth. We provide a safe, supportive, and stimulating space where creatives can find their authentic and artistic voice.
          <br /><br />
          Every experience at Artistic Heights is intentionally designed to challenge boundaries and ignite potential. We go beyond instruction—elevating, connecting, and championing the next generation of artistic leaders. By expanding access to entertainment culture and fostering excellence, we build enduring pathways for artists to lead, influence, and thrive in a dynamic and creative landscape. At AHA, artistry meets strategy—and transformation begins.
        </p>
        <div className="mb-6 space-y-6 text-center">
          <p className="text-lg">
            <Link href="/elite-training" className="font-bold text-yellow-400 hover:text-yellow-500 transition">Elite Training:</Link>
            <span> Our curriculum integrates respected industry techniques into disciplines like acting, voiceover, production, and more—enhancing emotional depth and artistic versatility.</span>
          </p>
          <p className="text-lg">
            <Link href="/enrichment-options" className="font-bold text-yellow-400 hover:text-yellow-500 transition">Enrichment Programs:</Link>
            <span> Through high-impact workshops, curated events, and collaborative projects, we cultivate talent and inspire creators to rise with clarity, confidence and purpose.</span>
          </p>
          <p className="text-lg">
            <Link href="/exclusive-experiences" className="font-bold text-yellow-400 hover:text-yellow-500 transition">Exclusive Experiences:</Link>
            <span> Students receive personalized mentorship and strategic guidance, gaining access to professional networks and exclusive opportunities that accelerate their development.</span>
          </p>
        </div>
        {/* Link to Team Page */}
        <Link
          href="/team"
          className="inline-block mt-4 px-6 py-3 text-lg font-semibold text-black bg-yellow-400 rounded hover:bg-yellow-500 transition"
        >
          Meet the Team
        </Link>
      </main>
    </div>
  );
}