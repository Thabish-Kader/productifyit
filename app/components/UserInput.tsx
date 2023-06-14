"use client";
import state from "@/store";

import React, { useRef } from "react";

export const UserInput = () => {
	const inputFileFrontRef = useRef<HTMLInputElement>(null);
	const inputFileBackRef = useRef<HTMLInputElement>(null);
	const inputFileSideRef = useRef<HTMLInputElement>(null);
	const inputFileSideSecondRef = useRef<HTMLInputElement>(null);
	const inputFileTopRef = useRef<HTMLInputElement>(null);

	const handleFrontImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		state.frontSide = URL.createObjectURL(selectedFile!);
	};

	const handleBackImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		state.backSide = URL.createObjectURL(selectedFile!);
	};

	const handleSideImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		state.splineSide = URL.createObjectURL(selectedFile!);
	};

	const handleSideSecondImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		state.splineSide2 = URL.createObjectURL(selectedFile!);
	};
	const handleTopImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		state.topSide = URL.createObjectURL(selectedFile!);
	};

	return (
		<div className="absolute bottom-5 z-10 flex items-center justify-center w-full">
			<div className="bg-white/opactiy-80 p-2 rounded-full space-x-2">
				<button
					className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
					onClick={() => inputFileFrontRef.current?.click()}
				>
					Front Image
				</button>
				<button
					className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
					onClick={() => inputFileBackRef.current?.click()}
				>
					Back Image
				</button>
				<button
					className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
					onClick={() => inputFileSideRef.current?.click()}
				>
					Side Image
				</button>
				<button
					className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
					onClick={() => inputFileSideSecondRef.current?.click()}
				>
					Opposite Side Image
				</button>
				<button
					className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
					onClick={() => inputFileTopRef.current?.click()}
				>
					Top Image
				</button>

				<input
					ref={inputFileFrontRef}
					type="file"
					onChange={handleFrontImage}
					className="hidden"
					accept="image/png, image/jpg, image/jpeg"
				/>
				<input
					ref={inputFileBackRef}
					type="file"
					onChange={handleBackImage}
					className="hidden"
					accept="image/png, image/jpg, image/jpeg"
				/>
				<input
					ref={inputFileSideRef}
					type="file"
					onChange={handleSideImage}
					className="hidden"
					accept="image/png, image/jpg, image/jpeg"
				/>
				<input
					ref={inputFileSideSecondRef}
					type="file"
					onChange={handleSideSecondImage}
					className="hidden"
					accept="image/png, image/jpg, image/jpeg"
				/>
				<input
					ref={inputFileTopRef}
					type="file"
					onChange={handleTopImage}
					className="hidden"
					accept="image/png, image/jpg, image/jpeg"
				/>
			</div>
		</div>
	);
};
