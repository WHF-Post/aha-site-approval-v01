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
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Welcome to Artistic Heights Academy!</h1>
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

      {/* Sticky Footer */}
      <footer className="bg-neutral-800 text-white text-center text-sm py-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4">
          <img src="/aha_logo_txt.png" alt="AHA Logo" className="h-[60px] w-auto object-contain" />
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61574999932660"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/facebook-logo_icon.png" alt="Facebook" className="h-6 w-6 hover:scale-110 transition" />
            </a>
            <a
              href="https://www.instagram.com/artisticheightsacademy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/instagram-logo_icon.png" alt="Instagram" className="h-6 w-6 hover:scale-110 transition" />
            </a>
            <a
              href="https://www.linkedin.com/company/artistic-heights-academy/"
              target="_blank"
              rel="noopener noreferrer"
            >
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