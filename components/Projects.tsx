const projects = [
    {
        title: "Web Scraping - Restaurants Data",
        duration: "May 2024",
        description: "A web scraper to scrape restaurants data along with an automated script to search based on different locations.",
        skills: "JavaScript, Puppeteer, Automation",
    },
    {
        title: "Job Listing - Weekday Assignment",
        duration: "May 2024",
        description: "Completed an assignment given by www.weekday.works to clone a weekday job listings chrome extension with filter options.",
        skills: "Next.js, Material UI, API Integration, React",
        url: "https://github.com/rajeshchoudharyt/weekday-search-job",
        live: "https://weekday-search-job.vercel.app",
    },
    {
        title: "Notes - Backend API",
        duration: "Feb 2024",
        description: "A backend API to manage Notes. Features: Login, Edit(with version history) and Share",
        skills: "Django, django-rest-framework, Python",
        url: "https://github.com/rajeshchoudharyt/django-notes-api",
    },
    {
        title: "Portfolio",
        duration: "Oct 2023",
        description:
            "A personal portfolio website developed using Next.js, TypeScript and Tailwind CSS",
        skills: "Next.js, TypeScript, Tailwind CSS",
        url: "https://github.com/rajeshchoudharyt/portfolio",
        live: "/portfolio",
    },
    {
        title: "Counterfeit Product Identification System",
        duration: "March 2023 - June 2023",
        description:
            "A blockchain DApp to identify counterfeit product by providing transparency to the supply chain transaction.",
        skills: "React, Bootstrap, Solidity, Smart Contract, Ethereum, MetaMask Wallet",
        url: "https://github.com/rajeshchoudharyt/my-projects/tree/main/Blockchain/counterfeit-product-identification",
    },
    {
        title: "DoneWithIt - Platform to Sell used Product",
        duration: "March 2023",
        description:
            "A mobile application to sell used or new products. Developed using React Native and Expo",
        skills: "React Native, Express, Push Notification",
        certification: true,
        url: "https://github.com/rajeshchoudharyt/my-projects/tree/main/React-Native/done-with-it",
    },
    {
        title: "Vidly - Movie Booking Web App",
        duration: "Jan 2023 - Feb 2023",
        description:
            "A full-stack web application for booking movie tickets with features like search, pagination etc.",
        skills: "MERN Stack, MongoDB, Express, React, Node",
        certification: true,
        url: "https://github.com/rajeshchoudharyt/my-projects/tree/main/React/vidly",
    },
    {
        title: "Todo List",
        duration: "Jan 2023",
        description:
            "A React based wed application to manage and access Microsoft Todo List using Graph API.",
        skills: "React, Microsoft Azure, Microsoft Graph API",
        internship: true,
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
            className="flex flex-col justify-center items-center py-20 px-2 w-full h-fit">
            <h2 className="text-center text-2xl font-bold text-stone-800 mb-20">
                Projects
            </h2>
            <div className="flex flex-nowrap overflow-x-scroll w-full h-fit gap-x-6 p-4 scrollbar">
                {projects.map((project) => (
                    <div
                        className="flex flex-col flex-none justify-center items-center text-center rounded-md
                                    shadow-all py-10 px-4 sm:px-10 min-h-md w-11/12 max-w-md"
                        key={project.title}>
                        <h3 className="text-xl font-bold text-stone-800">
                            {project.title}
                        </h3>
                        <p className="text-xs mb-6">({project.duration})</p>
                        <p>{project.description}</p>
                        <h4 className="font-semibold mt-6 text-stone-800">
                            Skills
                        </h4>
                        <p className="mb-6">{project.skills}</p>
                        <div className="flex justify-center items-center gap-x-6">
                            {project.live ? (
                                <a
                                    href={project.live}
                                    className="flex items-center justify-center text-sm font-semibold text-stone-800 w-20 h-7
                                                border-2 border-stone-800 hover:bg-stone-800 hover:text-white">
                                    Live
                                </a>
                            ) : (
                                ""
                            )}
                            {project.url ? (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    className="flex justify-center items-center w-20 gap-x-1 group bg-stone-800 hover:bg-white text-white hover:text-stone-800 border-2 border-stone-800">
                                    <svg
                                        viewBox="0 0 24 24"
                                        id="github"
                                        className="w-6 h-6 group-hover:fill-stone-800 fill-white">
                                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                                    </svg>
                                    <p className="text-sm font-semibold">
                                        Github
                                    </p>
                                </a>
                            ) : (
                                ""
                            )}
                        </div>
                        {project.certification || project.internship ? (
                            <p className="italic text-end text-orange-600 w-full">
                                -
                                {project.certification
                                    ? "Certification"
                                    : "Internship"}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
