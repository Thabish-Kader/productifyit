"use client";
import { useSession } from "next-auth/react";
import { UserInput } from "./../components/UserInput";
import { MyCanvasv2 } from "./../components/canvas/MyCanvasv2";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Create = () => {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "unauthenticated") {
			return router.push("/");
		}
	}, [status, session, router]);

	if (status === "loading") {
		return <p>Loading...</p>;
	}
	if (status === "authenticated" && session.user.isActive) {
		return (
			<main className="flex  items-center justify-center">
				<div className="h-screen w-screen ">
					<MyCanvasv2 />
					<UserInput />
				</div>
			</main>
		);
	} else {
		throw new Error("User is not active");
	}
};

export default Create;
