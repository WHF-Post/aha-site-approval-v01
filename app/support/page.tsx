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
            <h1 className="text-5xl font-bold text-yellow-400">
              Support Artistic Heights Academy
              <br />
              <br /> 
              <br />
            </h1>
            <p className="text-lg text-white mt-4 max-w-2xl">
              Research underscores the transformative power of arts engagement,
              listing benefits such as: Enhanced Cognitive Ability, Sharpened
              Problem-Solving Skills, Increased Self-Esteem, and Deeper Emotional
              Expression. These advantages not only shape personal growth but
              also foster professional success across industries.
            </p>
            <a
              href="https://www.paypal.com/ncp/payment/WGV5VT5YVEKW8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-8 py-4 bg-white text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-500 transition"
            >
              Donate Now
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