"use client";
import { signIn } from "next-auth/react";
import React from "react";

export const SignIn = () => {
	return (
		<button className="btn" onClick={() => signIn("google")}>
			Sign In
		</button>
	);
};
