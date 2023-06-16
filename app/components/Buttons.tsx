"use client";
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
	onClick?: () => void;
	children: React.ReactNode;
};

export const Button = ({
	onClick,
	className,
	children,
	...props
}: PropsButton) => {
	return (
		<button className={` ${className}`} onClick={onClick} {...props}>
			{children}
		</button>
	);
};

const handleSubscribe = async () => {
	const res = await fetch("/subscribe", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const url = await res.json();
	window.location.href = url;
};

export const SubscribeButton = ({
	onClick,
	className,
	children,
	...props
}: PropsButton) => {
	return (
		<button className={`${className}`} onClick={handleSubscribe} {...props}>
			{children}
		</button>
	);
};
