import Link from "next/link";
import React from "react";

export const Footer = () => {
	return (
		<footer className="mt-auto rounded-lg shadow border-t  border-blue-500 bg-black/30 ">
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
							<Link
								href="/terms"
								className="mr-4 hover:underline md:mr-6 "
							>
								Terms and Conditions
							</Link>
						</li>
						<li>
							<Link
								href="/privacy"
								className="mr-4 hover:underline md:mr-6"
							>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="mr-4 hover:underline md:mr-6 "
							>
								Licensing
							</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:underline">
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<hr className="my-6  sm:mx-auto border-blue-500 lg:my-8" />
				<span className="block text-sm  sm:text-center text-gray-400">
					© 2023 ProductVision3D . All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};
