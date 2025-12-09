import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white text-center text-sm py-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Correct Image for Footer */}
        <Image
          src="/aha_logo_txt.png"
          alt="Artistic Heights Academy Logo"
          width={300}
          height={100}
          className="object-contain"
        />
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=61574999932660"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook-logo_icon.png"
              alt="Facebook"
              width={24}
              height={24}
              className="h-6 w-6 filter invert hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.instagram.com/artisticheightsacademy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram-logo_icon.png"
              alt="Instagram"
              width={24}
              height={24}
              className="h-6 w-6 filter invert hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/artistic-heights-academy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin-logo_icon.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="h-6 w-6 filter invert hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.youtube.com/@ArtisticHeightsAcademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6 fill-current hover:scale-110 transition"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
        {/* Support AHA QR Code */}
        <a
          href="https://form.fillout.com/t/jpHEoE31rcus"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <Image
            src="/QR code - Support AHA (yellow).png"
            alt="Support AHA QR Code"
            width={120}
            height={120}
            className="object-contain"
          />
        </a>
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