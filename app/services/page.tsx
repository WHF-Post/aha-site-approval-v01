'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const services = [
  {
    title: 'Classes/Workshops',
    image: '/services/classes.png',
    description:
      'Expand horizons and master your craft with top-notch classes and workshops designed to help push beyond your limits and unlock your true potential.',
    cta: 'Sign up today!',
  },
  {
    title: '1:1 Private Coaching',
    image: '/services/coaching.png',
    description:
      'Reach your artistic height with personalized coaching sessions and entertainment industry prep designed to help land the role.',
    cta: 'Book today!',
  },
  {
    title: 'Self Tapes/Demo Reels',
    image: '/services/selftape.png',
    description:
      'Capture your best look with professional audition self tapes that showcase your unique personality and make a lasting impression.',
    cta: 'Book today!',
  },
  {
    title: 'Studio Rentals',
    image: '/services/studio.png',
    description:
      'Flexible, fully equipped creative spaces perfect for meetings, auditions, casting calls, rehearsals, photo shoots, and production.',
    cta: 'Book today!',
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const router = useRouter();

  const handleCTA = (serviceTitle: string) => {
    // TODO: check user login
    const isLoggedIn = false; // Placeholder for login check logic
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setActiveService(serviceTitle);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#000] text-white font-geo-regular">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">AHA Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-yellow-500 transition-all">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold group-hover:text-yellow-500 transition-all">
                {service.title}
              </h2>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity p-4 rounded-lg">
                <p className="text-xl mb-4 font-geo-regular">{service.description}</p>
                <button
                  onClick={() => handleCTA(service.title)}
                >
                  {service.cta}
                </button>
              </div>
              {activeService === service.title && (
                <div className="mt-4 p-4 bg-gray-700 rounded-lg text-sm">
                  <p>Placeholder booking/sign-up form for {service.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Sticky Footer */}
      <footer className="bg-neutral-800 text-white text-center text-sm py-6">
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