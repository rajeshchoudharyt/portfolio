import GithubIcon from "./common/GithubIcon";
import ListItem from "./common/ListItem";

const projects = [
    {
        title: "Portfolio",
        duration: "Oct 2023",
        description:
            "A personal portfolio website developed using Next and Tailwind with multiple themes and styles.",
        skills: ["Next.js", "TypeScript", "Tailwind CSS"],
        url: "",
    },
    {
        title: "Counterfeit Product Identification System",
        duration: "March 2023 - June 2023",
        description:
            "A blockchain based Decentralized Application (DApp) to identify counterfeit product. A web application to provide transparency to the supply chain by maintaining the record of product information and its transaction.",
        skills: [
            "React",
            "Bootstrap",
            "Solidity",
            "Smart Contract",
            "Ethereum",
            "MetaMask Wallet",
        ],
        url: "https://github.com/rajeshchoudharyt/my-projects/tree/main/Blockchain/counterfeit-product-identification",
    },
    {
        title: "DoneWithIt - Platform to Sell used Product",
        duration: "March 2023",
        description: "A mobile application to sell used or new products.",
        skills: ["React Native", "Express", "Push Notification"],
        certification: true,
        url: "https://github.com/rajeshchoudharyt/my-projects/tree/main/React-Native/done-with-it",
    },
    {
        title: "Vidly - Movie Booking Web App",
        duration: "Jan 2023 - Feb 2023",
        description:
            "A full-stack web application for booking movie tickets with features like search, pagination etc.",
        skills: ["MERN Stack", "MongoDB", "Express", "React", "Node"],
        certification: true,
        url: "https://github.com/rajeshchoudharyt/my-projects/tree/main/React/vidly",
    },
    {
        title: "Todo List",
        duration: "Jan 2023",
        description:
            "A React based wed application to manage and access Microsoft Todo List using Graph API.",
        skills: ["React", "Microsoft Azure", "Microsoft Graph API"],
        internship: true,
        url: "https://github.com/rajeshchoudharyt/my-projects/tree/main/React/microsoft-todo-list",
    },
    {
        title: "Last Mile Delivery System",
        duration: "April 2022",
        description:
            "A system to calculate and to find the optimal efficient route among GPS coordinates using k-means clustering Machine Learning algorithm.",
        skills: ["Python", "Django", "Machine Learning", "Tomtom Maps API"],
    },
    {
        title: "Gold Loan Management System",
        duration: "Sep 2019 - Nov 2019",
        description:
            "A database oriented web application for handling CRUD (Create, Read, Update, Delete) operations on user data.",
        skills: ["HTML", "CSS", "C#", "ASP.NET", "SQL Server", "MySql"],
    },
];

export default function Projects({
    theme,
}: {
    theme: { name: string; border: string };
}) {
    return (
        <div>
            {projects.map((project) => (
                <div
                    className="flex flex-col text-center group"
                    key={project.title}>
                    <h4 className="mb-0">{project.title}</h4>
                    <h5 className="mb-2">({project.duration})</h5>
                    <p>{project.description}</p>
                    <h5 className="font-bold mt-3 mb-2">Skills</h5>
                    <ListItem items={project.skills} theme={theme} />
                    {project.url ? (
                        <GithubIcon href={project.url} themeName={theme.name} />
                    ) : (
                        ""
                    )}
                    {project.certification || project.internship ? (
                        <p className="text-sm text-right italic mt-2 mb-0">
                            -
                            {project.certification
                                ? "Certification"
                                : "Internship"}
                        </p>
                    ) : (
                        ""
                    )}
                    <div
                        className={`my-8 w-full rounded-lg h-1 group-last:hidden ${theme.border}`}></div>
                </div>
            ))}
        </div>
    );
}
