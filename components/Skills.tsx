import ListItem from "./common/ListItem";

const languages = ["C", "C++", "Java", "Python", "C#", "Solidity"];

const database = ["SQL", "MongoDB"];

const web = [
    "HTML5",
    "CSS3",
    "Tailwind",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "ASP.NET",
    "Django",
    "Next.js",
];

const tools = ["Git", "GitHub", "Figma", "Postman"];

const skills = [
    ["Microsoft", "Azure, Graph API, MSAL (MS Authentication Library)"],
    ["MERN Stack", "MongoDB, Express, React, Node"],
    ["API Development & Testing", "Express.js, Next.js, Postman"],
    ["Testing Framework", "Jest JS (Basics)"],
    ["Native App Development", "React Native (Intermediate)"],
    ["Web3", "Blockchain, Decentralized App, Smart Contract"],
    ["Big Data", "Hadoop, Spark"],
];

export default function Skills({ theme }: { theme: { border: string } }) {
    return (
        <>
            <div className="grid grid-cols-1 text-center sm:grid-cols-8 md:grid-cols-9 gap-x-6">
                <div className="sm:col-span-3 md:col-span-3 mb-4">
                    <h4>Programming Languages</h4>
                    <ListItem items={languages} theme={theme} />
                </div>
                <div className="sm:col-span-2 md:col-span-2 mb-4">
                    <h4>Database</h4>
                    <ListItem items={database} theme={theme} />
                </div>
                <div className="sm:col-span-3 md:col-span-4 mb-4">
                    <h4>Web Technologies</h4>
                    <ListItem items={web} theme={theme} />
                </div>
            </div>
            <div className="text-center">
                <h4>Tools and Technical Skills</h4>

                <div className="text-left bg-inherit rounded-lg p-4">
                    {skills.map((skill) => (
                        <div key={skill[0]}>
                            <h5 className="font-semibold">{skill[0]}</h5>
                            <p className="text-sm pl-4">{skill[1]}</p>
                            <div
                                className={`my-4 w-full rounded-lg h-0.5 ${theme.border}`}></div>
                        </div>
                    ))}
                    <div>
                        <h5 className="font-semibold mb-1">Tools</h5>
                        <ListItem
                            items={tools}
                            theme={theme}
                            justify="justify-start"
                        />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h4>Certifications</h4>
                <div className="text-left p-4 rounded-lg">
                    <h5 className="font-semibold">freeCodeCamp</h5>
                    <p className="text-sm pl-4">Responsive Web Design</p>
                    <div
                        className={`my-4 w-full rounded-lg h-1 ${theme.border}`}></div>
                    <h5 className="font-semibold pb-2 ">CodewithMosh</h5>
                    <div className="text-sm pl-4">
                        <p>The Ultimate JavaScript Series</p>
                        <p className="md:flex md:justify-between">
                            Mastering React 16
                            <span className="italic flex justify-end">
                                -Internship
                            </span>
                        </p>
                    </div>
                    <div
                        className={`my-2 w-full rounded-lg h-0.5 ${theme.border}`}></div>
                    <div className="text-sm pl-4">
                        <p>The Ultimate React Native Series</p>
                        <p>The Complete Node.js Course</p>
                    </div>
                </div>
            </div>
        </>
    );
}
