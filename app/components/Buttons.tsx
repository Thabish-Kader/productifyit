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
	const { data: session, status } = useSession();
	const [isLoading, setIsLoading] = useState(false);
	if (status === "loading") {
		return <SigninLoadingSkeleton />;
	} else if (status === "unauthenticated") {
		const signInWithGoogle = async () => {
			try {
				setIsLoading(true);
				await signIn("google");
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		return (
			<button
				className={`${className} disabled:bg-gray-500`}
				disabled={isLoading}
				onClick={signInWithGoogle}
			>
				{isLoading ? "Signing In..." : "Sign In"}
			</button>
		);
	} else if (status === "authenticated") {
		return (
			<>
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
			</>
		);
	}
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

const SigninLoadingSkeleton = () => {
	return (
		<div className="flex items-center justify-center  animate-pulse space-x-3">
			<svg
				className="w-10 h-10 text-gray-100/20 border border-blue-500/30 rounded-full"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
					clip-rule="evenodd"
				></path>
			</svg>
			<div className=" flex-col space-y-2 hidden sm:flex">
				<div className="w-20 h-2  rounded-full bg-gray-100/20  border border-blue-500/30"></div>
				<div className="w-24 h-2  rounded-full bg-gray-100/20 border border-blue-500/30"></div>
			</div>
			<div className="w-24 h-8 rounded-lg  bg-gray-100/20 border border-blue-500/30"></div>
		</div>
	);
};
