"use client";
import { useSession } from "next-auth/react";
import { UserInput } from "./../components/UserInput";
import { MyCanvasv2 } from "./../components/canvas/MyCanvasv2";
import { redirect } from "next/navigation";

const Create = () => {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect("/");
		},
	});

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
		redirect("/create/error");
	}
};

export default Create;
