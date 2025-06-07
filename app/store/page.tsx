// app/store/page.tsx
import Image from 'next/image';

export default function StorePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* AHA Hoodie */}
        <div className="text-center">
          <Image
            src="/store/aha-hoodie.png"
            alt="AHA Hoodie"
            width={500}
            height={500}
          />
          <p className="mt-2 text-lg font-semibold">AHA Hoodie</p>
        </div>

        {/* AHA Shirt */}
        <div className="text-center">
          <Image
            src="/store/aha-shirt.png"
            alt="AHA T-Shirt"
            width={500}
            height={500}
          />
          <p className="mt-2 text-lg font-semibold">AHA T-Shirt</p>
        </div>

        {/* AHA Sketchpad */}
        <div className="text-center">
          <Image
            src="/store/sketchpad.png"
            alt="AHA Sketchpad"
            width={500}
            height={500}
          />
          <p className="mt-2 text-lg font-semibold">AHA Sketchpad</p>
        </div>
      </div>
    </main>
  );
}