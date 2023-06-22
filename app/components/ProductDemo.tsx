import proto from "../../public/assets/proto.webp";
import Image from "next/image";

const ProductDemo = () => {
	return (
		<section className="relative my-8">
			<div className="absolute inset-0 bg-gradient-to-r from-blue-900 from-10%  via-30% to-indigo-900 to-90% blur-xl opacity-10"></div>
			<div className="relative grid md:flex  items-center ">
				<div>
					<h2 className="text-white text-3xl md:text-5xl font-semibold shadow-md leading-tight">
						Design your first{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  ">
							Digital Product
						</span>
					</h2>
					<p className=" mt-4 max-w-xl text-base font-medium text-gray-400 md:text-md ">
						Welcome to the digital renaissance, where limitless
						creativity meets boundless possibilities. Design your
						first digital product and unleash your imagination in a
						realm of endless innovation. Embrace the convergence of
						art and technology, crafting captivating experiences
						that shape the future. The digital renaissance awaits,
						and you hold the key to unlock its transformative power.
					</p>
				</div>
				<Image src={proto} alt="proto" width={500} height={500} />
			</div>
		</section>
	);
};

export default ProductDemo;
