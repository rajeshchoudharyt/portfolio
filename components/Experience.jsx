import Image from "next/image";
import sarciLogo from "../public/sarci_logo.png";
import headstarterLogo from "../public/headstarter_logo.png";

export default function Experience() {
	return (
		<section
			id="experience"
			className="flex flex-col items-center text-[#555] lg:min-h-[80lvh] xl:min-h-[90lvh]">
			<h1 className="heading">Experience</h1>
			<div className="max-w-[50rem] flex flex-col items-center mb-16">
				<Image
					src={sarciLogo}
					height={60}
					alt="sarci.in logo"
					className="mb-1"
				/>
				<p className="font-normal">Frontend Developer Intern</p>
				<p className="text-sm sm:text-sm md:text-base">
					(Dec 2022 - Feb 2023)
				</p>
				<br />
				<p className="md:my-2 leading-5">
					• Developed and designed responsive web application using
					React and Figma
					<br />• Completed advanced JavaScript and React
					certification courses by codeWithMosh.com
				</p>
				<br />
				<p>
					<b>Skills:</b> HTML5, CSS3, JavaScript, UI & UX, React,
					Bootstrap, Figma, Microsoft - (Azure, Auth, Graph API),
					Postman API (test script), REST API
				</p>
			</div>
			<div className="max-w-[50rem] flex flex-col items-center">
				<div className="flex justify-center items-center gap-x-2 mb-2">
					<Image
						src={headstarterLogo}
						height={40}
						alt="headstarter logo"
					/>
					<p className="font-semibold text-xl">Headstarter</p>
				</div>
				<p className="font-normal">Software Engineering Fellow</p>
				<p className="text-sm sm:text-sm md:text-base">
					(July 2024 - Sep 2024)
				</p>
				<br />
				<p className="md:my-2 leading-5">
					• Built 5 AI projects in 7 weeks fellowship dedicating 100+
					hours.
					<br />
					• Built and Integrated ML and RAG Pipeline for a chatbot
					leveraging real-time users’ feedback as knowledge base
					utilizing Open Source ML Models (LLM) and Pinecone.
					<br />
					• Developed and Deployed real-time communication group
					messaging app with AI (LLM) and optimized performance to
					achieve a latency &lt;500ms with database storage.
					<br />• Participated in hackathons and weekly sessions from
					Engineers, CEO’s and Founder’s from startups and FAANG
					companies.
				</p>
				<br />
				<p>
					<b>Skills:</b> Next.js, React, JavaScript/TypeScript,
					Python, Fastify, WebSocket, Tailwind CSS, MUI, DaisyUI,
					Stripe API, Clerk Auth, Supabase (PostgreSQL), Firebase
					(Document DB), RAG Pipeline, Vector DB and ML Embeddings,
					Meta Llama 3.1 AI (LLM), DevOps, Google Analytics.
				</p>
			</div>
		</section>
	);
}
