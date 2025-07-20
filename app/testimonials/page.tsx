'use client';

import Image from 'next/image';

const imagePaths = [
  '/testimonial/Testimonials1.jpg',
  '/testimonial/Testimonials2.jpg',
  '/testimonial/Testimonials3.jpg',
  '/testimonial/Testimonials5.jpg',
  '/testimonial/Testimonials4.jpg',
  '/testimonial/Testimonials6.jpg',
  '/testimonial/Testimonials7.jpg',
  '/testimonial/Testimonials8.jpg',
];

export default function TestimonialsPage() {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-black min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-10">
          Tips & Testimonials
        </h1>
        <div className="flex flex-col items-center gap-10">
          {imagePaths.map((_, idx) => (
            <Image
              key={idx}
              src={`/testimonial/Testimonials${idx + 1}.jpg`}
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