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
        {/* Paragraph */}
        <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
          Located in the heart of West Midtown Atlanta in the{' '}
          <a
            href="https://www.thegoatfarm.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 transition"
          >
            GOAT FARM ARTS CENTER
          </a>
          , AHA equips students with a solid, versatile foundation by exposing them to multiple approaches, allowing them to discover and develop their own authentic acting voice. AHA vocational programs are designed to provide broad-based training experience grounded in a range of proven and widely respected acting methods, including Stanislavsky, Meisner, Chekhov, and more.
        </p>
        <div className="mb-6 space-y-4 text-center">
          <p className="text-lg">
            Our mission is to inspire creativity and empower aspiring artists to unlock their full potential in performing arts to reach new artistic heights.
            Through a holistic approach to artistic development, we cultivate performers to explore and discover their unique artistic voice via our 3-E Business Model:
            <br />
            <Link href="/elite-training" className="text-yellow-500 underline">Elite Training</Link>,{" "}
            <Link href="/enrichment-options" className="text-yellow-500 underline">Enrichment Options</Link>,{" "}
            & <Link href="/exclusive-experiences" className="text-yellow-500 underline">Exclusive Experiences</Link>.
          </p>
          <p className="text-lg">
            Our vision is to provide a safe, supportive, and stimulating space where artists can thrive, empowering them to excel in both the performing arts and entertainment industries.
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