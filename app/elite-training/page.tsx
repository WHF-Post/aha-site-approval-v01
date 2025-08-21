'use client';

import { useState } from 'react';

const trainingOptions = [
	{
		title: 'On-Camera Training',
		description: 'Master the fundamentals of performance, poise, and projection.',
	}
];

export default function Elite_Training() {
	const [showComingSoon, setShowComingSoon] = useState(false);

	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-b from-neutral-800 to-black">
			<main className="px-4 py-16 max-w-5xl mx-auto text-center flex-grow">
				<h1 className="text-5xl font-bold mb-8 text-center text-yellow-400">Elite Training</h1>
				<p className="text-lg mb-6 text-white">
				At Artistic Heights Academy, our acting classes are designed as a three-month immersive development program that lays the foundation of acting by integrating techniques from Meisner, Stanislavsky, and other famous acting teachers and legends.
				Through an engaging blend of instruction, exercises, discussions, and performances, students cultivate essential skills that enhance their craft and refine their artistic expression.

				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{trainingOptions.map((option, index) => (
						<div
							key={index}
							className="bg-[#1f1f1f] p-6 rounded-lg text-center border border-gray-700 hover:border-yellow-400 transition"
						>
							<h2 className="text-2xl font-semibold text-white russo">{option.title}</h2>
							<p className="mt-4 text-white">{option.description}</p>
						</div>
					))}
				</div>

				{/* Off Camera Training Button */}
				<div className="flex justify-center">
					<button
						onClick={() => setShowComingSoon(true)}
						className="px-10 py-4 bg-white text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-500 transition text-xl"
					>
						Off Camera Training
					</button>
				</div>

				{/* Coming Soon Popup */}
				{showComingSoon && (
					<div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
						<div className="bg-white text-black p-8 rounded-xl max-w-md text-center relative">
							<button
								onClick={() => setShowComingSoon(false)}
								className="absolute top-2 right-3 text-black text-xl hover:text-yellow-400"
							>
								&times;
							</button>
							<h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
							<p className="mb-4">Off Camera Training will be available soon. Stay tuned!</p>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}