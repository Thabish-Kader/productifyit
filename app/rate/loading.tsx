import React from "react";

const Loading = () => {
	return (
		<div
			role="status"
			className="flex flex-col items-center justify-center h-screen "
		>
			<div className=" h-[400px] w-[670px]  border p-4  border-blue-500 rounded shadow animate-pulse flex flex-col items-center justify-center ">
				<div className="w-[300px] my-4 h-6  rounded-full bg-gray-700"></div>

				<div className="w-[500px] my-4 h-6  rounded-full bg-gray-700"></div>

				<svg
					className=" w-14 h-14 text-gray-700"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
						clipRule="evenodd"
					></path>
				</svg>

				<div className="flex items-center mt-4 ">
					<div className="space-y-4">
						<div className="w-[500px] h-4  rounded-full bg-gray-700"></div>
						<div className="w-46 h-16  rounded-md bg-gray-700"></div>
						<div className="w-46 h-4  rounded-full bg-gray-700"></div>
						<div className="w-46 h-8  rounded-md bg-gray-700"></div>
					</div>
				</div>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default Loading;
