"use client";
import { button } from "leva";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

type PropsAuthButton = {
	className?: string;
};

export const AuthButton = ({ className, ...props }: PropsAuthButton) => {
	const { data: session } = useSession();

	return (
		<>
			{session ? (
				<button
					className={`${className}`}
					onClick={() => signOut()}
					{...props}
				>
					Sign Out
				</button>
			) : (
				<button className={`${className}`} onClick={() => signIn()}>
					Sign In
				</button>
			)}
		</>
	);
};

type PropsButton = {
	className?: string;
	fn?: () => void;
	children: React.ReactNode;
};

export const Button = ({ fn, className, children, ...props }: PropsButton) => {
	return (
		<button className={`btn ${className}`} onClick={fn} {...props}>
			{children}
		</button>
	);
};
