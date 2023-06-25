import { SubscribeButton } from "../../components/Buttons";

const ErrorPage = () => {
	return (
		<main className="flex flex-col items-center justify-center mt-[300px]">
			{" "}
			<h1 className="text-4xl text-gray-100">
				User has not Subscribed !!
			</h1>
			<SubscribeButton className="btn mt-4" />
		</main>
	);
};

export default ErrorPage;
