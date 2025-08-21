'use client';

import { useState } from 'react';

export default function Elite_Training() {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-b from-neutral-800 to-black">
			<main className="px-4 py-16 max-w-5xl mx-auto text-center flex-grow">
				<h1 className="text-5xl font-bold mb-8 text-center text-yellow-400">Elite Training</h1>
				<p className="text-lg mb-6 text-white">
					At Artistic Heights Academy, our acting classes are designed as a three-month immersive development program that lays the foundation of acting by integrating techniques from Meisner, Stanislavsky, and other famous acting teachers and legends. Through an engaging blend of instruction, exercises, discussions, and performances, students cultivate essential skills that enhance their craft and refine their artistic expression.
				</p>

				{/* Centered Off-Camera Training Button */}
				<div className="flex justify-center mt-16">
					<a
						href="https://forms.fillout.com/t/oFkCqDRBKxus"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center px-10 py-6 bg-white text-black font-bold rounded-2xl shadow-lg hover:bg-yellow-500 transition text-2xl"
					>
						Off-Camera Training
						<span className="text-base font-normal mt-2">
							Master the fundamentals of performance, poise, and projection.
						</span>
					</a>
				</div>
			</main>
		</div>
	);
}