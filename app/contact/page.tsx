'use client';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-800 text-white font-[Geo]">
      <main className="flex-grow max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-5xl font-bold text-center mb-10 text-yellow-400">Contact AHA</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-neutral-800 border border-gray-700 rounded p-3 text-white"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-neutral-800 border border-gray-700 rounded p-3 text-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-neutral-800 border border-gray-700 rounded p-3 text-white"
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
    </div>
  );
}