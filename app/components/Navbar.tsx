import Image from "next/image";
import React from "react";
import logo from "../icon.png";
import Link from "next/link";

import { AuthButton } from "./Buttons";

export const Navbar = () => {
	return (
		<header className="border-b border-blue-500 bg-black/30">
			<div className="relative z-50 max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 h-20 backdrop-blur-md">
				<div className="flex items-center text-white justify-between w-full">
					{/* logo */}
					<Link href={"/"} className=" flex items-center ">
						<Image src={logo} alt="logo" height={50} width={50} />
						<h1 className="ml-2 font-bold text-md sm:text-2xl">
							ProductVision3D
						</h1>
					</Link>
					{/* Links */}
					<div className=" items-center space-x-2 hidden md:flex gap-8">
						<Link
							href="/billinginfo"
							className="hover:text-white transition text-gray-300"
						>
							Billing Info
						</Link>
						<Link
							href="https://billing.stripe.com/p/login/test_9AQg2E80Z5z6bpSeUU"
							className="hover:text-white transition text-gray-300"
						>
							Customer Portal
						</Link>
					</div>
					{/* Button  */}
					<AuthButton className="btn" />
				</div>
			</div>
		</header>
	);
};
