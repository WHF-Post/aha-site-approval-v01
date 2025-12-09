'use client';

import Image from "next/image";

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-neutral-800 to-black">
      <main className="px-0 py-0 max-w-none mx-auto text-center flex-grow">
        {/* Full-width Support Image with Overlay */}
        <div className="relative w-full">
          <div className="overflow-hidden w-full h-[500px]">
            <Image
              src="/Support kids.jpg"
              alt="Support Artistic Heights Academy Kids"
              width={1920}
              height={700}
              className="w-full h-[500px] object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              Support Artistic Heights Academy
            </h1>
            <p className="text-sm md:text-lg text-white mt-4 max-w-2xl leading-relaxed">
              Artistic Heights Academy is Atlanta's premier performing arts education institution. Our mission is to Equip, Empower, and Elevate the next generation of performing arts talent.

              Research underscores the transformative impact of arts engagement — fostering Enhanced Cognitive Ability, Sharpened Problem-Solving Skills, Increased Self-Esteem, and Deepen Emotional Expression. These advantages fuel personal growth and drive professional excellence across all fields.
            </p>
            <a
              href="https://form.fillout.com/t/jpHEoE31rcus"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-8 py-4 bg-white text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-500 transition"
            >
              Support AHA
            </a>
          </div>
        </div>
        {/* Logo below the image */}
        <div className="flex justify-center mt-8">
          <Image
            src="/aha_logo_txt.png"
            alt="Artistic Heights Academy Logo Text"
            width={300}
            height={80}
            className="object-contain"
          />
        </div>
      </main>
    </div>
  );
}