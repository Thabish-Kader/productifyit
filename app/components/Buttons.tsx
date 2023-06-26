"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import getStripe from "../utils/getStripe";
import { useRouter } from "next/navigation";

type PropsAuthButton = {
	className?: string;
};

export const AuthButton = ({ className, ...props }: PropsAuthButton) => {
	const { data: session } = useSession();
	console.log(session);
	return (
		<>
			{session ? (
				<div className="flex items-center gap-2">
					<Image
						src={session?.user?.image!}
						className="rounded-full object-cover hidden sm:block"
						width={40}
						height={40}
						alt={session.user?.name!}
					/>
					<div className=" flex-col text-sm hidden lg:flex ">
						<p className="text-gray-300">
							Welcome {session?.user?.name}
						</p>
						<p className="text-gray-400 text-xs">
							{session?.user?.email!}
						</p>
					</div>
					<button
						className={`${className}`}
						onClick={() => signOut()}
						{...props}
					>
						Sign Out
					</button>
				</div>
			) : (
				<button
					className={`${className}`}
					onClick={() => signIn("google")}
				>
					Sign In
				</button>
			)}
		</>
	);
};

type PropsButton = {
	className?: string;
	onClick?: () => void;
	children?: React.ReactNode;
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

export const SubscribeButton = ({
	onClick,
	className,
	...props
}: PropsButton) => {
	const [isLoading, setIsLoading] = useState(false);

	const { data: session } = useSession();
	const router = useRouter();

	const handleSubscribe = async (email: string) => {
		setIsLoading(true);

		try {
			const res = await fetch("/api/stripe/subscription", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});
			const checkoutSession = await res.json().then((value) => {
				return value.session;
			});

			const stripe = await getStripe();
			const { error } = await stripe!.redirectToCheckout({
				sessionId: checkoutSession.id,
			});
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			{!session ? (
				<button
					className={`${className} disabled:bg-gray-700`}
					onClick={() => signIn("google")}
					{...props}
				>
					Sign in to Create Designs
				</button>
			) : session?.user.isActive ? (
				<button
					className={`${className} disabled:bg-gray-700`}
					onClick={() => router.push("/create")}
					{...props}
				>
					Start Designing
				</button>
			) : (
				<button
					className={`${className} disabled:bg-gray-700 disabled:cursor-not-allowed`}
					disabled={isLoading}
					onClick={() => handleSubscribe(session?.user?.email!)}
					{...props}
				>
					{isLoading ? "Subscribing..." : "Subscribe"}
				</button>
			)}
		</>
	);
};
