"use client";
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import "@smastrom/react-rating/style.css";
import "react-toastify/dist/ReactToastify.css";

const Polygon = (
	<path d="m16 0 13.8564065 8v16l-13.8564065 8-13.85640646-8v-16zm6.550845 10.6744304-6.5625807 3.489-6.56205691-3.489-.93894312 1.7658952 6.50100003 3.4561048.0002619 7.7691392h2l-.0002619-7.7701392 6.5015238-3.4551048z" />
);

const customStyles = {
	itemShapes: Polygon,
	activeFillColor: "white",
	activeBoxColor: "#FFA500",
	inactiveFillColor: "white",
	inactiveBoxColor: "grey",
};

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
					<div className=" border border-indigo-950 bg-black/30 py-4 px-12 flex flex-col  ">
						<h1 className="text-center text-2xl font-bold tracking-wider py-4">
							Leave us a Rating
						</h1>
						<textarea
							value={review}
							onChange={(e) => setReview(e.target.value)}
							className="p-2 bg-transparent border border-indigo-900 rounded-lg my-2 outline-none"
							placeholder="Review..."
						/>

						<Rating
							value={rateing}
							onChange={setRateing}
							itemStyles={customStyles}
							style={{ maxWidth: 300, padding: 10 }}
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
