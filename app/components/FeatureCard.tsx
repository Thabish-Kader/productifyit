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
		<div className=" border rounded-lg shadow bg-zinc-900/90 border-gray-700">
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
