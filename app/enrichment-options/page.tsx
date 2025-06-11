'use client';

import Link from "next/link";
import { useState } from "react";

export default function EnrichmentOptions() {
  const [showInternPopup, setShowInternPopup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white">
      <div className="py-12 px-6 flex flex-col items-center justify-start space-y-10">
        <h1 className="text-yellow-400 font-russo text-4xl text-center">Enrichment Options</h1>

        <p className="px-20 text-lg mb-6 text-center">
          At Artistic Heights Academy, our acting classes are designed as a three-month immersive development program that lays the foundation of acting by integrating techniques from Meisner, Stanislavsky, and other famous acting teachers and legends. Through an engaging blend of instruction, exercises, discussions, and performances, students cultivate essential skills that enhance their craft and refine their artistic expression.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <button
            onClick={() => setShowInternPopup(true)}
            className="bg-neutral-800 text-white text-2xl px-8 py-6 rounded-xl font-russo hover:bg-yellow-400 transition"
          >
            Internships
          </button>

          <Link
            href="https://coachedbyjonnainc.com/actingclassesandbooks?category=Class"
            className="bg-neutral-800 text-white text-2xl px-8 py-6 rounded-xl font-russo hover:bg-yellow-400 transition"
          >
            Private Coaching
          </Link>

          <Link
            href="https://coachedbyjonnainc.com/actingclassesandbooks"
            className="bg-neutral-800 text-white text-2xl px-4 py-6 rounded-xl font-russo hover:bg-yellow-400 transition"
          >
            Educational Resources
          </Link>
        </div>

        {showInternPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white text-black p-8 rounded-xl max-w-md text-center space-y-4">
              <h2 className="text-xl font-bold">Internship Opportunities Coming Soon</h2>
              <p>
                We're actively developing partnerships with institutions like SCAD and other performing arts organizations to offer immersive internship experiences that support our students' real-world growth in the entertainment industry.
              </p>
              <button
                onClick={() => setShowInternPopup(false)}
                className="mt-4 bg-neutral-800 text-white px-4 py-2 rounded hover:bg-neutral-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Sticky Footer */}
      <footer className="bg-neutral-800 text-white text-center text-sm py-6 w-full">
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