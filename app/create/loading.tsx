import React from "react";

const Loading = () => {
	return (
		<div
			role="status"
			className=" flex items-center justify-center h-screen w-screen p-6  "
		>
			<div className=" h-[800px] w-full border border-blue-500 rounded shadow animate-pulse flex flex-col items-center justify-center bg-gray-900 ">
				<h1 className="text-gray-200 text-5xl font-bold">
					Loading Canvas...
				</h1>
			</div>
		</div>
	);
};

export default Loading;
