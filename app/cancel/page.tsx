import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SubscribeButton } from "../components/Buttons";

const Cancel = () => {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<main className="my-32">
				<div className="flex flex-col items-center justify-center space-y-6">
					<h1 className="text-4xl text-center text-gray-100 font-bold">
						Whats wrong ? Dont want to design your product
					</h1>
					<SubscribeButton />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Cancel;
