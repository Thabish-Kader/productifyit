import Link from "next/link";
import React from "react";

const Success = () => {
	return (
		<main className="mt-8">
			<div className="flex flex-col items-center justify-center space-y-6">
				<h1 className="text-4xl text-center text-gray-100 font-bold">
					Success! Thanks for Subscribing
				</h1>
				{/* TODO: Change the video */}
				<video controls height="700px" width="700px">
					<source src="/demo.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<Link href="/create" className="btn mt-8">
					Start Designing
				</Link>
			</div>
		</main>
	);
};

export default Success;
