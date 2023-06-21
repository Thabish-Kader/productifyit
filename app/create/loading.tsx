import React from "react";

const Loading = () => {
	return (
		<div className=" flex items-center justify-center h-screen w-screen  ">
			<div className="border flex-1 animate-pulse bg-black h-[800px] w-[900px] mx-10 flex flex-col items-center justify-center rounded-md">
				<h1 className="text-white text-3xl font-bold italic">
					Loading Canvas....
				</h1>
			</div>
		</div>
	);
};

export default Loading;
