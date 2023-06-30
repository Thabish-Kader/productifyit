"use client";
import React, { Suspense, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import "@smastrom/react-rating/style.css";
import "react-toastify/dist/ReactToastify.css";

const Rate = () => {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect("/");
		},
	});
	const [review, setReview] = useState("");
	const [rateing, setRateing] = useState(4);
	const [isLoading, setIsLoading] = useState(false);
	const customerEmail = session?.user?.email;
	const notify = () =>
		toast.success(
			"Review Submitted Successfully. Thank you for your feedback",
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

	const submitRateing = async () => {
		setIsLoading(true);
		try {
			const res = await fetch("/api/review", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					review,
					rateing,
					customerEmail,
				}),
			});
			const { message } = await res.json();
			notify();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
			setReview("");
		}
	};
	return (
		<div className="flex flex-col h-screen">
			<Navbar />

			<main className=" my-12 h-full w-full flex flex-col justify-center items-center text-gray-100">
				<div className="max-w-[700px] w-full px-4">
					<div className=" border border-blue-500 bg-black/30 py-4 px-12 flex flex-col  ">
						<h1 className="text-center text-2xl font-bold text-gray-300 py-4">
							Thank you {session?.user.name}
						</h1>
						<p className="text-center text-sm italic font-semibold pb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 from-10% via-amber-500 via-30% to-orange-500 to-90%">
							“You could have given your time to anything, and yet
							you chose to invest it here. I take that in high
							regard. So sincerely, THANK YOU.”
						</p>
						<div className="flex items-center justify-center">
							<Image
								src={session?.user?.image!}
								className="rounded-full object-cover "
								width={60}
								height={60}
								alt={session?.user?.name! || "profile Image"}
							/>
						</div>
						<h3 className="text-sm md:text-lg font-semibold text-gray-300 py-4">
							Signed in as : {session?.user?.email}
						</h3>
						<textarea
							value={review}
							onChange={(e) => setReview(e.target.value)}
							className="p-2 bg-transparent border border-blue-500/50 rounded-lg my-2 outline-none"
							placeholder="Review..."
						/>

						<Rating
							value={rateing}
							onChange={setRateing}
							style={{ maxWidth: 300, padding: 3 }}
							transition="position"
							radius="medium"
							spaceBetween="small"
						/>

						<button
							className="btn w-full disabled:cursor-not-allowed"
							onClick={submitRateing}
							disabled={isLoading}
						>
							{isLoading ? "Loading..." : "Send Review"}
						</button>
					</div>
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

export default Rate;
