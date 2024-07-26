import Image from "next/image";
import sarciLogo from "../public/sarci_logo.png";

export default function Experience() {
    return (
        <section
            id="experience"
            className="flex flex-col items-center text-[#555] lg:min-h-[80lvh] xl:min-h-[90lvh]">
            <h1 className="heading">Experience</h1>
            <div className="max-w-[50rem] flex flex-col items-center">
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
                <p className="md:my-2">
                    Developed and designed responsive web application using
                    React and Figma
                    <br />
                    Completed advanced JavaScript and React certification
                    courses by codeWithMosh.com
                </p>
                <br />
                <p>
                    <b>Skills:</b> HTML5, CSS3, JavaScript, UI & UX, React,
                    Bootstrap, Figma, Microsoft - (Azure, Auth, Graph API),
                    Postman API (test script), REST API
                </p>
            </div>
        </section>
    );
}
