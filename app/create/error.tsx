"use client";
import { SubscribeButton } from "../components/Buttons";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
	return (
		<main className="flex flex-col items-center justify-center mt-[300px]">
			{" "}
			<h1 className="text-4xl text-gray-100">{error.message}</h1>
			<SubscribeButton className="btn mt-4" />
		</main>
	);
};

export default Error;
