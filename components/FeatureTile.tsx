'use client';

import Link from 'next/link';

interface FeatureTileProps {
  title: string;
  image: string;
  link: string;
}

export default function FeatureTile({ title, image, link }: FeatureTileProps) {
  return (
    <Link
      href={link}
      className="group relative block w-full h-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
    >
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover brightness-125 group-hover:brightness-150 transition duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <h3 className="text-white text-4xl font-bold geo-regular group-hover:text-yellow-300 transition-colors duration-300 text-center">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}