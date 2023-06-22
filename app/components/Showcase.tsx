import React from "react";
import { FeatureCard } from "./FeatureCard";
import { featureCardInfo } from "@/constants";

export const Showcase = () => {
	return (
		<section className="mt-20 text-gray-100">
			{/* Features */}
			<div className="mt-20 text-center">
				<h1 className="w-full max-w-3xl text-left md:text-center md:max-w-6xl text-2xl my-2 md:mb-8 font-bold text-white md:text-4xl md:leading-tight">
					Let us handle the{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500  to-orange-500">
						Time-Consuming{" "}
					</span>
					tasks for you
				</h1>
				<p className="max-w-6xl text-left md:text-center my-4 text-base font-medium text-gray-400 md:text-md">
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
