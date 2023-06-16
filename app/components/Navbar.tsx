"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.webp";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { AuthButton } from "./Buttons";

export const Navbar = () => {
	return (
		<header className="pt-10 py-4 px-16  w-full  border-b border-gray-800">
			<div className="flex items-center text-gray-100 justify-between w-full">
				{/* logo */}
				<Link href={"/"} className=" flex items-center ">
					<Image src={logo} alt="logo" height={50} width={50} />
					<h1 className="ml-2 font-bold text-md sm:text-2xl">
						ProductVision3D
					</h1>
				</Link>
				{/* Links */}
				<div className=" items-center space-x-2 hidden md:flex">
					<Link href="/">Designs</Link>
					<Link href="https://billing.stripe.com/p/login/test_9AQg2E80Z5z6bpSeUU">
						Customer Portal
					</Link>
				</div>
				{/* Button  */}
				<AuthButton className="btn" />
			</div>
		</header>
	);
};
