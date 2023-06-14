import { UserInput } from "./../components/UserInput";
import { MyCanvasv2 } from "./../components/canvas/MyCanvasv2";

export default function Home() {
	return (
		<main className="flex  items-center justify-center">
			<div className="h-screen w-screen ">
				<MyCanvasv2 />
				<UserInput />
			</div>
		</main>
	);
}
