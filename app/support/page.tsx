'use client';

export default function Support() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-neutral-800 to-black">
      <main className="px-4 py-20 max-w-4xl mx-auto text-center flex-grow">
        {/* Hero Header */}
        <h1 className="text-5xl font-bold mb-6 text-yellow-400">
          Support Artistic Heights Academy
        </h1>
        <p className="text-lg mb-10 text-white">
          Your contribution empowers the next generation of artists.
        </p>

        {/* Call to Action */}
        <div className="mt-8">
          <a
            href="https://www.paypal.com/ncp/payment/WGV5VT5YVEKW8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-yellow-500 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-400 transition"
          >
            Donate Now
          </a>
        </div>
      </main>
    </div>
  );
}