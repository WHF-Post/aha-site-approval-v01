'use client';

import Link from "next/link";
import { useState } from "react";

export default function EnrichmentOptions() {
  const [showInternPopup, setShowInternPopup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-neutral-800 to-black text-white">
      <div className="py-12 px-6 flex flex-col items-center justify-start space-y-10">
        <h1 className="text-5xl font-bold mb-8 text-center text-yellow-400">Enrichment Programs</h1>

        <p className="px-20 text-lg mb-6 text-center">
          At Artistic Heights Academy, we believe talent is just the beginning. Whether you’re stepping in
					front of the camera or leading from behind it, our enrichment programs are designed to sharpen
					your craft, deepen your industry insight, and prepare you for lasting success in entertainment
					and creative industries.
				</p>
 

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <button
            onClick={() => setShowInternPopup(true)}
            className="bg-neutral-800 text-white text-2xl px-8 py-6 rounded-xl font-russo hover:bg-yellow-400 transition"
          >
            Internship Opportunities
          </button>

          <Link
            href="https://form.fillout.com/t/1itS8711paus"
            className="bg-neutral-800 text-white text-2xl px-4 py-6 rounded-xl font-russo hover:bg-yellow-400 transition"
          >
            The Actor’s Edge Workshops
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
    </div>
  );
}