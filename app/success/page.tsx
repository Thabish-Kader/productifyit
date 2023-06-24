import Link from "next/link";
import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Success = () => {
	return (
		<div className="flex flex-col h-screen ">
			<Navbar />
			<main className="my-32">
				<div className="flex flex-col items-center justify-center space-y-6">
					<h1 className="w-full max-w-3xl text-left md:text-center md:max-w-6xl text-2xl my-2 md:mb-8 font-bold text-white md:text-4xl md:leading-tight">
						Thank you for
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-300 to-amber-500">
							{" "}
							subscribing!{" "}
						</span>
						We&apos;d love to hear your thoughts through a
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-300 to-green-500">
							{" "}
							review{" "}
						</span>
						once you&apos;ve finished designing your product.
					</h1>

					<Link href="/create" className="btn ">
						Start Designing
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Success;
