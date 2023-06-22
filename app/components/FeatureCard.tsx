import React from "react";
import Image, { StaticImageData } from "next/image";

type FeatureCardProps = {
	img: StaticImageData;
	title: string;
	description: string;
	gradientColors: string;
};

export const FeatureCard = ({
	img,
	title,
	description,
	gradientColors,
}: FeatureCardProps) => {
	return (
		<div className=" border border-blue-800 bg-black/30 rounded-lg shadow- shadow-blue-500/50 flex-col p-6 md:p-12">
			<div className="relative h-[300px]">
				<Image
					className="rounded-t-lg object-cover"
					src={img}
					alt={`photo of ${title}`}
					fill
				/>
			</div>

			<div className="p-5">
				<h5
					className={
						"mb-2 text-2xl font-bold tracking-tight   " +
						gradientColors
					}
				>
					{title}
				</h5>

				<p className="mb-3 font-normal  text-gray-400">{description}</p>
			</div>
		</div>
	);
};
