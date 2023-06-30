"use client";
import { useSession } from "next-auth/react";
import React from "react";

export const ReviewText = () => {
	const { data: session, status } = useSession();

	if (status === "authenticated") {
		return (
			<p className="max-w-6xl text-left md:text-center mt-4 text-base font-medium italic md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 from-10% via-amber-500 via-30% to-orange-500 to-90%">
				If you could spare a minute of your valuable time, I would
				greatly appreciate hearing your feedback on the app. &#8595;
				&#8595; &#8595;
			</p>
		);
	}

	if (status === "loading") {
		return (
			<div className="max-w-6xl mt-6 w-full h-6 animate-pulse  rounded-full bg-gray-100/20 border border-blue-500/30"></div>
		);
	}
};
