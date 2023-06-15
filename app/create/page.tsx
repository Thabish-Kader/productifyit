"use client";
import { useSession } from "next-auth/react";
import { UserInput } from "./../components/UserInput";
import { MyCanvasv2 } from "./../components/canvas/MyCanvasv2";
import { useRouter } from "next/navigation";
const Create = () => {
	const { data: session } = useSession();
	const router = useRouter();
	if (!session) {
		throw new Error("Not authenticated");
	}
	return (
		<main className="flex  items-center justify-center">
			<div className="h-screen w-screen ">
				<MyCanvasv2 />
				<UserInput />
			</div>
		</main>
	);
};

export default Create;
