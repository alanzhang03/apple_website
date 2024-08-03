import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateWithGsap } from "../utils/animations";

gsap.registerPlugin(ScrollTrigger);

const Snippets = () => {
	useEffect(() => {
		animateWithGsap("#snippets-Header", { y: 0, opacity: 1 });
	}, []);

	return (
		<section className="h-full common-padding relative overflow-hidden bg-zinc">
			<div
				id="snippets-Header"
				className="section-heading text-white text-2xl mb-8"
			>
				Get to know iPhone.
			</div>
			<div className="flex overflow-x-auto whitespace-nowrap space-x-4 mt-8 custom-scrollbar p-4">
				<div
					className="relative bg-cover bg-center rounded-lg shadow text-white min-w-[350px] min-h-[550px] overflow-hidden"
					style={{ backgroundImage: "url(/assets/images/AdvanceCameras.jpg)" }}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-start">
						<div className="p-4 text-wrap break-words">
							<h3 className="font-bold text-lg">Advanced Cameras</h3>
							<p>Selfie-takers. Movie-makers. Boundary-breakers.</p>
						</div>
					</div>
				</div>
				<div
					className="relative bg-cover bg-center rounded-lg shadow text-white min-w-[350px] min-h-[550px] overflow-hidden"
					style={{ backgroundImage: "url(/assets/images/Game.jpg)" }}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-start">
						<div className="p-4 text-wrap break-words">
							<h3 className="font-bold text-lg">Apple-Designed Chips</h3>
							<p>The kind of fast you can feel.</p>
						</div>
					</div>
				</div>
				<div
					className="relative bg-cover bg-center rounded-lg shadow text-white min-w-[350px] min-h-[550px] overflow-hidden"
					style={{ backgroundImage: "url(/assets/images/Battery.jpg)" }}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-start">
						<div className="p-4 text-wrap break-words">
							<h3 className="font-bold text-lg">Battery</h3>
							<p>The power of great battery life.</p>
						</div>
					</div>
				</div>
				<div
					className="relative bg-cover bg-center rounded-lg shadow text-white min-w-[350px] min-h-[550px] overflow-hidden"
					style={{ backgroundImage: "url(/assets/images/innovation.jpg)" }}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-start">
						<div className="p-4 text-wrap break-words">
							<h3 className="font-bold text-lg">Innovation</h3>
							<p>Beautiful and durable, by design.</p>
						</div>
					</div>
				</div>
				<div
					className="relative bg-cover bg-center rounded-lg shadow text-white min-w-[350px] min-h-[550px] overflow-hidden"
					style={{ backgroundImage: "url(/assets/images/personalization.jpg)" }}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-start">
						<div className="p-4 text-wrap break-words">
							<h3 className="font-bold text-lg">Personalization</h3>
							<p>Make it you. Through and through.</p>
						</div>
					</div>
				</div>
				<div
					className="relative bg-cover bg-center rounded-lg shadow text-white min-w-[350px] min-h-[550px] overflow-hidden"
					style={{ backgroundImage: "url(/assets/images/peace-of-mind.jpg)" }}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-start">
						<div className="p-4 text-wrap break-words">
							<h3 className="font-bold text-lg">Peace of Mind</h3>
							<p>Helpful safety features. Just in case.</p>
						</div>
					</div>
				</div>
				<div
					className="relative bg-cover bg-center rounded-lg shadow text-white min-w-[350px] min-h-[550px] overflow-hidden"
					style={{ backgroundImage: "url(/assets/images/privacy.jpg)" }}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-start">
						<div className="p-4 text-wrap break-words">
							<h3 className="font-bold text-lg">Privacy</h3>
							<p>Your data. Just where you want it.</p>
						</div>
					</div>
				</div>
				<div
					className="relative bg-cover bg-center rounded-lg shadow text-white min-w-[350px] min-h-[550px] overflow-hidden"
					style={{ backgroundImage: "url(/assets/images/environment.jpg)" }}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-start">
						<div className="p-4 text-wrap break-words">
							<h3 className="font-bold text-lg">Environment</h3>
							<p>Recycle. Reuse. Repeat.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Snippets;
