"use client";
import React, { useEffect, useState } from "react";
import { mockbilling } from "../mockData";
import { TBilling } from "@/types";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Billing = () => {
	// const [billingInfo, setBillingInfo] = useState<TBilling>();
	const { data: session } = useSession();
	// useEffect(() => {
	// 	async function fetchData() {
	// 		try {
	// 			const response = await fetch("/api/stripe/billinginfo");
	// 			const data = await response.json();
	// 			setBillingInfo(data);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}

	// 	fetchData();
	// }, []);
	// setBillingInfo(mockbilling.subscription);
	const currentPeriodEnd = new Date(
		mockbilling.subscription.current_period_end * 1000
	); // Multiply by 1000 to convert from seconds to milliseconds
	const currentPeriodStart = new Date(
		mockbilling.subscription.current_period_start * 1000
	);

	console.log(currentPeriodEnd); // Output: Fri Oct 06 2023 01:21:43 GMT+0000 (Coordinated Universal Time)
	console.log(currentPeriodStart);
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<main className=" my-12 h-full w-full flex flex-col justify-center items-center text-gray-100">
				<div className=" border border-indigo-950 bg-primary p-4 flex flex-col ">
					<h1 className="text-center text-2xl font-bold tracking-wider py-4">
						Billing Information
					</h1>
					<div className="flex items-center justify-center">
						<Image
							src={session?.user?.image!}
							className="rounded-full object-cover "
							width={60}
							height={60}
							alt={session?.user?.name!}
						/>
					</div>
					<div className="flex flex-col text-gray-300">
						<div className="py-4">
							<h2 className=" text-xl font-semibold">
								Name : {session?.user?.name}
							</h2>
							<h3 className=" text-xl font-semibold">
								Email : {session?.user?.email}
							</h3>
						</div>
						<div className="py-4">
							<p className=" text-md font-semibold">
								Billing Cycle Started:{" "}
								{currentPeriodStart.toDateString()}
							</p>
							<p className=" text-md font-semibold">
								Next Billing Cycle:{" "}
								{currentPeriodEnd.toDateString()}
							</p>
						</div>
					</div>
					<button className="btn w-full">Cancel Subscription</button>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Billing;
