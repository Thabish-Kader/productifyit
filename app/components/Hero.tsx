import Image from "next/image";
import stevejobs from "../../public/assets/steve.webp";
import { SubscribeButton } from "./Buttons";

export const Hero = () => {
	return (
		<section className="">
			<div className="text-center max-w-7xl mx-auto pt-32 md:pt-40 pb-32 sm:py-32 flex flex-col sm:items-center justify-center">
				<div className="rounded-full w-fit text-xs text-gray-400 py-1 px-4 mb-4 bg-gray-900 border border-blue-500/50 shadow-md">
					Redefine Design: Transcend 2D, Embrace the Limitless World
					of 3D.
				</div>
				<h1 className="w-full max-w-3xl text-left md:text-center md:max-w-6xl text-3xl my-2 md:my-0 font-bold text-white md:text-5xl md:leading-tight ">
					Simplify{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
						Digital Product Design{" "}
					</span>
					for Maximum Leads.
				</h1>
				<p className="max-w-6xl text-left md:text-center mt-4 text-base font-medium text-gray-400 md:text-xl">
					Make a lasting impression on prospects and skyrocket sales
					with our platform, providing you with the tools to design
					compelling digital products for your website, applications,
					or brand in 3D.
				</p>

				<SubscribeButton className="btn mt-6 px-8 py-4" />
			</div>

			{/* Video */}
			<h1 className="w-full max-w-3xl text-left md:text-center md:max-w-6xl text-2xl my-2 md:mb-8 font-bold text-white md:text-4xl md:leading-tight">
				Effortlessly Craft{" "}
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
					Stunning Designs{" "}
				</span>
				Like a Pro
			</h1>
			<div className="mt-4 relative">
				<div className="absolute inset-0.5  bg-gradient-to-r from-blue-800  to-blue-900 blur-xl animate-pulse"></div>
				<video
					controls
					className="relative ring-1 ring-blue-500 rounded-lg shadow-lg"
				>
					<source src="./show.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

			{/* QUOTE */}
			<div className="mt-12">
				<figure className="max-w-screen-md mx-auto text-center">
					<svg
						aria-hidden="true"
						className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
						viewBox="0 0 24 27"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
							fill="currentColor"
						/>
					</svg>
					<blockquote>
						<p className="text-2xl italic font-medium text-transparent bg-clip-text bg-gradient-to-r  from-green-500 via-blue-500 to-purple-500">
							Design is the fundamental soul of a human-made
							creation that ends up expressing itself in
							successive outer layers of the product or service
						</p>
					</blockquote>
					<figcaption className="flex items-center justify-center mt-6 space-x-3">
						<div className="relative h-10 w-10">
							<Image
								className="object-cover"
								src={stevejobs}
								alt="profile picture"
								fill
							/>
						</div>
						<div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
							<cite className="pr-3 font-medium text-gray-900 dark:text-white">
								Steve Jobs
							</cite>
							<cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
								CEO of Apple
							</cite>
						</div>
					</figcaption>
				</figure>
			</div>
		</section>
	);
};
