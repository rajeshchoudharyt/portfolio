import ListItem from "./common/ListItem";

const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Bootstrap",
    "Figma",
    "Microsoft Azure",
    "Microsoft Authentication Library",
    "Microsoft Graph API",
    "Postman (Test Script)",
];

export default function Experience({ theme }: { theme: { border: string } }) {
    return (
        <>
            <div className="p-4 bg-inherit">
                <h4 className="flex justify-center">SARCI</h4>
                <p className="flex justify-center text-sm font-bold mt-4">
                    Front-End Developer Intern
                </p>
                <p className="flex justify-center text-xs mb-4">
                    (Dec 2022 - Feb 2023)
                </p>
                <p className="text-center">
                    As a frontend developer, gained hands-on experience in
                    design and development of responsive web application using
                    React and Bootstrap.
                </p>
            </div>

            <h4 className="flex justify-center mt-6">Skills</h4>
            <ListItem items={skills} theme={theme} />

            <h4 className="flex justify-center mt-6">Certification</h4>
            <ListItem items={["JavaScript", "React"]} theme={theme} />
        </>
    );
}
