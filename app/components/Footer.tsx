import React from "react";

export const Footer = () => {
	return (
		<footer className="mt-20 rounded-lg shadow bg-zinc-900 border-t border-gray-700 ">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<a
						href="https://flowbite.com/"
						className="flex items-center mb-4 sm:mb-0"
					>
						<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
							ProductVision3D
						</span>
					</a>
					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
						<li>
							<a
								href="#"
								className="mr-4 hover:underline md:mr-6 "
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								className="mr-4 hover:underline md:mr-6"
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								href="#"
								className="mr-4 hover:underline md:mr-6 "
							>
								Licensing
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
				<span className="block text-sm  sm:text-center text-gray-400">
					© 2023 ProductVision3D . All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};
