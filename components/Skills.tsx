import ProgressBar from "./common/ProgressBar";

const skills = [
    ["90%", "HTML5, CSS3, JAVASCRIPT, JAVA, REACT"],
    ["80%", "NEXT.JS, MERN STACK, PYTHON, NODE.JS, SQL"],
    ["60%", "C, C++, TYPESCRIPT, BOOTSTRAP"],
    ["70%", "TAILWIND CSS, MONGODB, EXPRESS.JS"],
    ["50%", "C#, DJANGO, ASP.NET, SOLIDITY"],
];

const otherSkills = [
    ["Microsoft", "Azure, Graph API, MSAL (MS Authentication Library)"],
    ["MERN Stack", "MongoDB, Express, React, Node"],
    ["API Development & Testing", "Express.js, Next.js, Postman"],
    ["Testing Framework", "Jest JS (Basics)"],
    ["Native App Development", "React Native (Intermediate)"],
    ["Web3", "Blockchain, Decentralized App, Smart Contract"],
    ["Big Data", "Hadoop, Spark"],
    ["Tools", "Git, GitHub, Figma, Postman"],
];

export default function Skills() {
    return (
        <section id="skills">
            <div className="py-20 px-8">
                <h2 className="text-center text-2xl font-bold text-stone-800 mb-12">
                    Skills
                </h2>
                <div>
                    {skills.map((skill) => (
                        <div key={skill[0]} className="mb-10">
                            <p className="text-sm font-semibold text-stone-800">
                                {skill[1]}
                            </p>
                            <ProgressBar progress={skill[0]} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-20 px-8">
                <h2 className="text-center text-2xl font-bold text-stone-800 mb-10">
                    Certifications
                </h2>
                <div className="text-left rounded-lg">
                    <h5 className="font-semibold text-stone-800">
                        freeCodeCamp
                    </h5>
                    <p className="text-sm pl-4">Responsive Web Design</p>
                    <div className="my-4 w-8 rounded-lg h-0.5 bg-orange-600"></div>

                    <h5 className="font-semibold text-stone-800">
                        CodewithMosh
                    </h5>
                    <div className="text-sm pl-4 max-w-xs">
                        <p>The Ultimate JavaScript Series</p>
                        <p>Mastering React 16</p>
                        <p className="italic text-end text-orange-600">
                            -Internship
                        </p>
                    </div>
                    <div className="my-2 w-full rounded-lg h-0.5"></div>
                    <div className="text-sm pl-4">
                        <p>The Ultimate React Native Series</p>
                        <p>The Complete Node.js Course</p>
                    </div>
                </div>
            </div>

            <div className="py-20 px-8 bg-stone-200">
                <h2 className="text-center text-2xl font-bold text-orange-600 mb-10">
                    Tools and Technical Skills
                </h2>

                <div className="text-left rounded-lg">
                    {otherSkills.map((skill) => (
                        <div key={skill[0]} className="group">
                            <h5 className="font-semibold text-stone-800">
                                {skill[0]}
                            </h5>
                            <p className="text-sm pl-4">{skill[1]}</p>
                            <div className="my-4 w-8 rounded-lg h-0.5 bg-orange-600 group-last:hidden"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
