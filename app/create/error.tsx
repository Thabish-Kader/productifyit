"use client";
import React from "react";
import { AuthButton } from "../components/Buttons";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
	return (
		<main className="flex flex-col items-center justify-center mt-[300px]">
			{" "}
			<h1 className="text-4xl text-gray-100">User not Authticated !!</h1>
			<AuthButton className="btn mt-20" />
		</main>
	);
};

export default Error;
