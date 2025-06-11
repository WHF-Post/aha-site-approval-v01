'use client';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-neutral-800 to-black text-white font-[Geo]">
      <main className="flex-grow max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-yellow-400">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-neutral-900 border border-gray-700 rounded p-3 text-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-neutral-900 border border-gray-700 rounded p-3 text-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-neutral-900 border border-gray-700 rounded p-3 text-white"
              placeholder="How can we help you?"
            />
          </div>

          <div className="text-center">
  <button
    type="submit"
    className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-400 transition"
  >
    Send Message
  </button>
</div>
        </form>

        <div className="text-center text-sm text-gray-400 mt-8">
          Or reach us at:<br />
          <a
            href="mailto:info@artisticheightsacademy.com"
            className="hover:text-yellow-400 transition"
          >
            admin@artisticheightsacademy.com
          </a>
        </div>
      </main>

      <footer className="bg-neutral-900 text-center py-6 mt-auto text-sm text-gray-400">
        <div className="flex flex-col items-center space-y-2">
          <img
            src="/aha_logo_txt.png"
            alt="Artistic Heights Academy"
            className="h-12 object-contain"
          />
          <p>
            <a
              href="https://maps.google.com?q=1200 Foster Street NW, Suite 220, Atlanta, GA 30318"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              1200 Foster Street NW, Suite 220, Atlanta, GA 30318
            </a>
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/profile.php?id=61574999932660" target="_blank">
              <img src="icons/facebook-logo_icon.png" alt="Facebook" className="h-5" />
            </a>
            <a href="https://www.instagram.com/artisticheightsacademy/" target="_blank">
              <img src="icons/instagram-logo_icon.png" alt="Instagram" className="h-5" />
            </a>
            <a href="https://www.linkedin.com/company/artistic-heights-academy/" target="_blank">
              <img src="icons/linkedin-logo_icon.png" alt="LinkedIn" className="h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}