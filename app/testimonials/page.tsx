'use client';

import Image from 'next/image';

const imagePaths = [
  '/Testimonials1.jpg',
  '/Testimonials2.jpg',
  '/Testimonials3.jpg',
  '/Testimonials4.jpg',
  '/Testimonials5.jpg',
  '/Testimonials6.jpg',
  '/Testimonials7.jpg',
  '/Testimonials8.jpg',
];

export default function TestimonialsPage() {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-black min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
          Tips & Testimonials
        </h1>
        <div className="flex flex-col items-center gap-10">
          {imagePaths.map((path, idx) => (
            <Image
              key={idx}
              src={path}
              alt={`Testimonial ${idx + 1}`}
              width={800}
              height={500}
              className="rounded-lg grayscale w-full max-w-3xl object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}