// app/store/page.tsx
'use client';

import Image from 'next/image';

const products = [
  {
    name: 'AHA T-Shirt',
    image: '/store/aha-shirt.png',
    price: '$25',
  },
  {
    name: 'Sketch Pad',
    image: '/store/sketchpad.png',
    price: '$15',
  },
  {
    name: 'Hoodie',
    image: '/store/aha-hoodie.png',
    price: '$40',
  },
];

export default function StorePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <h1 className="text-6xl font-bold text-center mb-12">AHA  Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item, index) => (
          <div key={index} className="bg-neutral-900 p-4 rounded-xl shadow-lg flex flex-col items-center">
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="object-contain mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-yellow-300 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}