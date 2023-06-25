"use client";
import React, { Suspense, useEffect, useState } from "react";
import { TBilling } from "@/types";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { redirect } from "next/navigation";
import Loading from "./loading";

const Billing = () => {
	const [billingInfo, setBillingInfo] = useState<TBilling>();
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingData, setIsLoadingData] = useState(true);
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect("/");
		},
	});

	if (session?.user.isActive === false) {
		redirect("/create/error");
	}

	const notify = () =>
		toast.success(
			"Subscription cancelled successfully! . You won't be charged in the next billing cycle.",
			{
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			}
		);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("/api/stripe/billinginfo");
				const data = await response
					.json()
					.then((value) => value.subscription);

				setBillingInfo(data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoadingData(false);
			}
		}

		fetchData();
	}, []);

	const handleDeleteSubscription = async () => {
		setIsLoading(true);
		try {
			const res = await fetch(`/api/stripe/subscription-cancel`, {
				method: "POST",
			});

			const subscription = await res.json().then((value) => {
				return value.subscription;
			});
			notify();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const currentPeriodEnd = new Date(billingInfo?.current_period_end! * 1000); // Multiply by 1000 to convert from seconds to milliseconds
	const currentPeriodStart = new Date(
		billingInfo?.current_period_start! * 1000
	);
	const trialPeriod = new Date(billingInfo?.trial_end! * 1000);
	const billingPrice = billingInfo?.plan.amount! / 100;

	if (isLoadingData) {
		return <Loading />;
	}

	return (
		<div className="flex flex-col h-screen">
			<Navbar />

			<main className=" my-12 h-full w-full flex flex-col justify-center items-center text-gray-100">
				<div className=" border border-indigo-950 bg-black/30 py-4 px-12 flex flex-col ">
					<h1 className="text-center text-2xl font-bold tracking-wider py-4">
						Billing Information
					</h1>
					<div className="flex items-center justify-center">
						<Image
							src={session?.user?.image!}
							className="rounded-full object-cover "
							width={60}
							height={60}
							alt={session?.user?.name! || "profile Image"}
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
						<div className="py-4">
							<p className=" text-md font-semibold">
								Price : {billingPrice} USD / month
							</p>
							{billingInfo?.trial_end && (
								<p className="text-md font-semibold">
									Trial Period Ends :{" "}
									{trialPeriod.toDateString()}
								</p>
							)}
							<p className="text-md font-semibold capitalize">
								Status: {billingInfo?.status}
							</p>
						</div>
					</div>
					<button
						className="btn w-full disabled:cursor-not-allowed"
						onClick={handleDeleteSubscription}
						disabled={isLoading}
					>
						{isLoading ? "Canceling..." : "Cancel Subscription"}
					</button>
					<Link
						href={`https://billing.stripe.com/p/login/test_9AQg2E80Z5z6bpSeUU`}
						className="pt-8 text-center text-md font-semibold capitalize text-gray-400 hover:text-white transition-colors duration-300"
					>
						Customer Portal
					</Link>
				</div>

				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover
					theme="dark"
				/>
			</main>

			<Footer />
		</div>
	);
};

export default Billing;
