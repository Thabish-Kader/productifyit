import React from "react";

const Cancel = () => {
	return (
		<main className="mt-8">
			<div className="flex flex-col items-center justify-center space-y-6">
				<h1 className="text-4xl text-center text-gray-100 font-bold">
					Whats wrong ? Dont want to design your product
				</h1>
				{/* TODO: Change this video */}
				<video controls height="700px" width="700px">
					<source src="/demo.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				{/* TODO: Change this button */}
				<button className="btn">Subscribe</button>
			</div>
		</main>
	);
};

export default Cancel;
