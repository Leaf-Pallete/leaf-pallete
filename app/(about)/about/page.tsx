import React from "react";

export default function AboutPage() {
	return (
		<main className="px-6 py-8 max-w-prose mx-auto">
			<h1 className="text-2xl font-bold">About Leaf Palette</h1>
			<p className="mt-4">
				Leaf Palette is a place to get ideas and learn how to make great and
				useful interfaces. Whether you're new or experienced, we have key tips
				that turn common problems into creative solutions.
			</p>
			<h2 className="mt-6 text-xl font-semibold">Why Join Leaf Palette?</h2>
			<ul className="list-disc list-inside mt-2">
				<li>
					Help designers worldwide get better and make more effective and
					good-looking projects.
				</li>
				<li>
					Be part of our active group of designers, share ideas, work on
					projects together, and improve.
				</li>
				<li>
					Keep up with the newest trends and best ways to design interfaces.
				</li>
			</ul>
			<h2 className="mt-6 text-xl font-semibold">What is Leaf Palette?</h2>
			<p className="mt-4">
				Leaf Palette is a website that acts as a helpful guide for designers. It
				gives ideas, tips, and best ways to make amazing and useful interfaces.
			</p>
			<h2 className="mt-6 text-xl font-semibold">Our Goal</h2>
			<p className="mt-4">
				We want to help designers make great interfaces that users love. We
				believe good design is key to making successful products, and we're here
				to help designers reach their goals.
			</p>
			<h2 className="mt-6 text-xl font-semibold">How We Help</h2>
			<p className="mt-4">
				We help designers in many ways, from giving ideas and guidance to
				offering useful tools and resources. Whether you're just starting or
				you're very experienced, we're here to help you do well.
			</p>
			<div className="mt-6">
				<h2 className="text-xl font-semibold">Our Group</h2>
				<p className="mt-2">
					See our code on GitHub for the dev team and help improve it.
					<a
						href="https://github.com/Leaf-Pallete"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:text-primary/80 ml-2 inline-flex items-center"
					>
						View on GitHub
					</a>
				</p>
			</div>
		</main>
	);
}
