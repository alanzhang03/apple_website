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
				{[
					{
						title: "Advanced Cameras",
						description: "Selfie-takers. Movie-makers. Boundary-breakers.",
						image: "/assets/images/AdvanceCameras.jpg",
					},
					{
						title: "Apple-Designed Chips",
						description: "The kind of fast you can feel.",
						image: "/assets/images/Game.jpg",
					},
					{
						title: "Battery",
						description: "The power of great battery life.",
						image: "/assets/images/Battery.jpg",
					},
					{
						title: "Innovation",
						description: "Beautiful and durable, by design.",
						image: "/assets/images/innovation.jpg",
					},
					{
						title: "Personalization",
						description: "Make it you. Through and through.",
						image: "/assets/images/personalization.jpg",
					},
					{
						title: "Peace of Mind",
						description: "Helpful safety features. Just in case.",
						image: "/assets/images/peace-of-mind.jpg",
					},
					{
						title: "Privacy",
						description: "Your data. Just where you want it.",
						image: "/assets/images/privacy.jpg",
					},
					{
						title: "Environment",
						description: "Recycle. Reuse. Repeat.",
						image: "/assets/images/environment.jpg",
					},
				].map((item, index) => (
					<div
						key={index}
						className="relative bg-cover bg-center rounded-lg shadow text-white min-w-[350px] min-h-[550px] overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:opacity-100"
						style={{ backgroundImage: `url(${item.image})` }}
					>
						<div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-start transition-opacity duration-300 hover:bg-opacity-0">
							<div className="p-4 text-wrap break-words">
								<h3 className="font-bold text-lg">{item.title}</h3>
								<p>{item.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Snippets;
