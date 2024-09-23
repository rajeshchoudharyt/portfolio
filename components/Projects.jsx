const projects = [
	{
		title: "Message.ai",
		duration: "Sep 2024",
		description: "A real-time group messaging app with AI.",
		skills: "Next.js, Fastify, WebSocket, Firebase, Clerk Auth, Llama 3.1 AI (LLM)",
		url: "https://github.com/rajeshchoudharyt/message.ai-nextjs",
		live: "https://message-ai-nextjs.vercel.app",
	},
	{
		title: "AI Rate My professor",
		duration: "Aug 2024",
		description:
			"An app to rate a professor and to query the feedback from AI.",
		skills: "Next.js, Vector DB, Pinecone, RAG Pipeline",
		url: "https://github.com/rajeshchoudharyt/ai-rate-my-professor",
		live: "https://ai-rate-my-professor-ruddy.vercel.app",
	},
	{
		title: "Flashcard.ai",
		duration: "Aug 2024",
		description:
			"A fullstack app to generate AI flashcards with shareable links.",
		skills: "Next.js, Stripe API, Supabase, Clerk Auth, LLM",
		url: "https://github.com/rajeshchoudharyt/ai-flashcard",
		live: "https://ai-flashcard-one.vercel.app",
	},
	{
		title: "AI Customer Support Agent",
		duration: "Aug 2024",
		description: "Multiple usecase based AI chatbot agent.",
		skills: "Next.js, Firebase, Llama 3 (LLM), Clerk Auth",
		url: "https://github.com/DanTiw/ai-customer-support",
		live: "https://chatify-rouge-three.vercel.app",
	},
	{
		title: "Pantry Tracker",
		duration: "Aug 2024",
		description: "A fullstack web app to store and track pantry items",
		skills: "Next.js, TypeScript, Firebase, MUI",
		url: "https://github.com/rajeshchoudharyt/pantry-tracker",
		live: "https://pantry-tracker-nine-beryl.vercel.app",
	},
	{
		title: "Chatbot",
		duration: "July 2024",
		description:
			"A working demo of chatbot with Auth, Session Management, Chat History, etc.",
		skills: "Strapi CMS, SQLite, WebSocket, Next.js, Tailwind CSS",
		url: "https://github.com/rajeshchoudharyt/chatbot-strapi",
	},
	{
		title: "Web Scraping - Restaurants Data",
		duration: "May 2024",
		description:
			"A web scraper to scrape restaurants data along with an automated script to search based on different locations.",
		skills: "JavaScript, Puppeteer, Automation",
	},
	{
		title: "Notes - Backend API",
		duration: "Feb 2024",
		description:
			"A backend API to manage Notes. Features: Login, Edit(with version history) and Share",
		skills: "Django, django-rest-framework, Python",
		url: "https://github.com/rajeshchoudharyt/django-notes-api",
	},
	{
		title: "Counterfeit Product Identification System",
		duration: "March 2023 - June 2023",
		description:
			"A blockchain based DApp to identify counterfeit product by providing transparency to the supply chain transaction.",
		skills: "React, Bootstrap, Solidity, Smart Contract, Ethereum, MetaMask Wallet",
		url: "https://github.com/rajeshchoudharyt/my-projects/tree/main/Blockchain/counterfeit-product-identification",
	},
	{
		title: "DoneWithIt - Platform to Sell used Product",
		duration: "March 2023",
		description:
			"A mobile application to sell used or new products. Developed using React Native and Expo",
		skills: "React Native, Express, Push Notification",
		url: "https://github.com/rajeshchoudharyt/my-projects/tree/main/React-Native/done-with-it",
	},
	{
		title: "Vidly - Movie Booking Web App",
		duration: "Jan 2023 - Feb 2023",
		description:
			"A full-stack web application for booking movie tickets with features like search, pagination etc.",
		skills: "MERN Stack, MongoDB, Express, React, Node",
		url: "https://github.com/rajeshchoudharyt/my-projects/tree/main/React/vidly",
	},
	{
		title: "Todo List",
		duration: "Jan 2023",
		description:
			"A React based wed application to manage and access Microsoft Todo List using Graph API.",
		skills: "React, Microsoft Azure, Microsoft Graph API",
		url: "https://github.com/rajeshchoudharyt/my-projects/tree/main/React/microsoft-todo-list",
	},
	{
		title: "Last Mile Delivery System",
		duration: "April 2022",
		description:
			"A system to calculate and to find the optimal efficient route among GPS coordinates using k-means clustering Machine Learning algorithm.",
		skills: "Python, Django, Machine Learning, Tomtom Maps API",
	},
	{
		title: "Gold Loan Management System",
		duration: "Sep 2019 - Nov 2019",
		description:
			"A database oriented web application for handling CRUD (Create, Read, Update, Delete) operations on user data.",
		skills: "HTML, CSS, C#, ASP.NET, SQL Server, MySql",
	},
];

export default function Projects() {
	return (
		<section
			id="projects"
			className="flex flex-col items-center text-white 
                                bg-image bg-fixed bg-cover">
			<h1 className="heading border-b-white">Projects</h1>
			<div className="flex flex-nowrap overflow-x-scroll w-full h-fit gap-x-6 scroll-smooth pb-4 snap-x snap-mandatory sm:snap-none">
				{projects.map((project) => (
					<div
						className="flex flex-col flex-none justify-center items-center text-center rounded p-6
                                     bg-white/10 backdrop-blur-[6px] max-w-80 md:max-w-[28rem] snap-always snap-center"
						key={project.title}>
						<p className="font-normal text-lg sm:text-2xl md:text-2xl">
							{project.title}
						</p>
						<p className="text-sm sm:text-sm md:text-base">
							({project.duration})
						</p>
						<br />
						<br />
						<p className="text-base md:text-xl">
							{project.description}
							<br />
							<br />
							<b>Skills</b>
							<br />
							{project.skills}
						</p>
						<br />
						<div className="flex justify-center items-center gap-x-2">
							{project.url ? (
								<a
									href={project.url}
									target="_blank"
									className="min-w-28 md:min-w-36 py-1 border-[1px] border-white rounded tracking-widest 
                                                    font-normal hover:bg-[#909090] hover:bg-opacity-30">
									GITHUB
								</a>
							) : (
								""
							)}
							{project.live ? (
								<a
									href={project.live}
									target="_blank"
									className="min-w-28 md:min-w-36 py-1 border-[1px] border-white rounded tracking-widest 
                                                    font-normal hover:bg-[#909090] hover:bg-opacity-30">
									LIVE
								</a>
							) : (
								""
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
