import React from "react";

import { FeatureCard } from "./FeatureCard";
import { featureCardInfo } from "@/constants";

export const Showcase = () => {
	return (
		<section className="mt-20 text-gray-100">
			{/* Video */}
			<h1 className="text-4xl text-center font-bold">
				I kid you not, it&apos;s{" "}
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
					RIDICULOUSLY{" "}
				</span>
				easy
			</h1>
			<div className="mt-4">
				<video controls>
					<source src="/demo.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

			{/* Features */}
			<div className="mt-20 text-center">
				<h1 className="text-4xl font-bold">
					Let us handle the{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500  to-orange-500">
						Time-Consuming{" "}
					</span>
					tasks for you
				</h1>
				<p className="text-gray-300 my-8">
					Finding and hiring a designer to create web assets and 3D
					models for your website can be a challenging and
					time-consuming process. Simply click and witness the
					enchanting transformation unfold before your eyes.
				</p>
				<div className="grid lg:grid-cols-2 gap-10">
					{/* 1st row */}
					{featureCardInfo.map((card, i) => (
						<FeatureCard
							key={i}
							img={card.img}
							title={card.title}
							description={card.description}
							gradientColors={card.gradientColor}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
