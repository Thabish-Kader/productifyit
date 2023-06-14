import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.webp";
import Link from "next/link";
export const Navbar = () => {
	return (
		<header className="pt-10 py-4 px-16 absolute w-full top-0 border-b border-gray-800">
			<div className="flex items-center text-gray-100 justify-between w-full">
				{/* logo */}
				<div className=" flex items-center ">
					<Image src={logo} alt="logo" height={50} width={50} />
					<h1 className="ml-2 font-bold text-2xl">ProductVision3D</h1>
				</div>
				{/* Links */}
				<div className="flex items-center space-x-2">
					<Link href="/">Design</Link>
					<Link href="/">Community</Link>
				</div>
				{/* Button  */}
				<button className="btn">Sign In</button>
			</div>
		</header>
	);
};
