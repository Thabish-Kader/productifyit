"use client";
import React from "react";
import { SubscribeButton } from "../components/Buttons";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
	return (
		<main className="flex flex-col items-center justify-center mt-[300px]">
			{" "}
			<h1 className="text-4xl text-gray-100">
				User not Authticated or has not Subscribed !!
			</h1>
			<SubscribeButton className="btn mt-4" />
		</main>
	);
};

export default Error;
