'use client';

import Image from 'next/image';
import React from 'react';

export default function ServicesPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between text-center">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="/goatFarm_pic.jpg"
          alt="AHA Hero"
          layout="fill"
          objectFit="cover"
          className="grayscale"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-6 font-geo text-lg text-center">
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-400">Welcome to Artistic Heights Academy!</h1>
        <p>
          Established in 2020, Artistic Heights Academy is a vibrant institution dedicated to cultivating and
          empowering aspiring artists as they pursue careers in the entertainment industry. Located in the heart
          of West Midtown Atlanta, we provide an encouraging and stimulating environment where performers can
          refine their craft, build confidence, and reach new artistic heights.
        </p>
        <p>
          Our mission is to inspire creativity and unlock each artist’s full potential, helping them reach new
          artistic levels. We promote a safe, supportive, and stimulating environment where performers can refine
          their craft, build confidence, and excel in the performing arts and entertainment sectors.
        </p>
        <p>
          We are dedicated to encompassing, and upholding the values of: Individuality, Integrity, Creativity,
          and Diversity — ensuring that every artist can thrive in a space that champions authentic expression
          and artistic excellence.
        </p>
        <p className="font-bold italic text-white">
          Artistic Heights Academy — where creativity, passion, and talent come to life!
        </p>
      </div>
    </div>
  );
}