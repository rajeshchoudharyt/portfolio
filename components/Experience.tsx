const skills =
    "HTML5, CSS3, JavaScript, React, Bootstrap, Figma, Microsoft Azure, Microsoft Authentication Library, Microsoft Graph API, Postman (Test Script)";
export default function Experience() {
    return (
        <section
            id="experience"
            className="flex flex-col justify-center items-center py-20 px-8 text-center bg-stone-200">
            <h2 className="text-center text-2xl font-bold text-orange-600 mb-20">
                Experience
            </h2>
            <h3 className="text-xl font-bold text-stone-800">SARCI.in</h3>

            <div className="my-6 w-8 rounded-lg h-0.5 bg-orange-600"></div>
            <h4 className="font-semibold text-stone-800">
                Front-End Developer - Intern
            </h4>
            <p className="text-xs">(Dec 2022 - Feb 2023)</p>
            <p className="mx-auto my-6 max-w-xl">
                As a frontend developer, gained hands-on experience in design
                and development of responsive web application using React and
                Bootstrap.
            </p>

            <h5 className="font-semibold text-stone-800">Skills</h5>
            <p className="mx-auto max-w-xl">{skills}</p>

            <h5 className="font-semibold text-stone-800 mt-6">Certification</h5>
            <p>JavaScript and React</p>
        </section>
    );
}
