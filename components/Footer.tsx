import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white text-center text-sm py-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Correct Image for Footer */}
        <Image
  src="/aha_logo_txt.png"
  alt="Artistic Heights Academy Logo"
  width={300} // Increased width
  height={100} // Increased height
  className="object-contain"
/>
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=61574999932660"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/facebook-logo_icon.png"
              alt="Facebook"
              width={24}
              height={24}
              className="hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.instagram.com/artisticheightsacademy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram-logo_icon.png"
              alt="Instagram"
              width={24}
              height={24}
              className="hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/artistic-heights-academy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin-logo_icon.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="hover:scale-110 transition"
            />
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
  );
}