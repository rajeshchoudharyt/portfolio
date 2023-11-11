import Image from "next/image";
import linkedInLogo from "@/public/LinkedIn_Logo.png";
import GithubIcon from "./common/GithubIcon";

export default function Contact({
    theme,
}: {
    theme: { name: string; bgColor: string; color: string };
}) {
    const downloadBtn = `text${
        theme.name === "Colourful" ? "-white" : theme.bgColor.slice(2)
    } bg${theme.color.slice(4)}`;

    return (
        <div className="flex flex-col items-center text-sm gap-y-4 pt-6">
            <div className="flex flex-row justify-center items-center gap-x-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={`${theme.name === "Dark" ? "white" : "black"}`}
                    className="w-4 h-4">
                    <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                    />
                </svg>
                <p>Bengaluru, India</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={`${theme.name === "Dark" ? "white" : "black"}`}
                    className="w-4 h-4">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>

                <a
                    href="mailto:rajeshchoudharyt@gmail.com"
                    className="underline">
                    rajeshchoudharyt@gmail.com
                </a>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-8 w-fit">
                <a
                    href="https://www.linkedin.com/in/rajesh-t-050b76284"
                    target="_blank"
                    className={`flex justify-center p-1 rounded ${
                        theme.name === "Dark" ? "bg-white" : "bg-inherit"
                    }`}>
                    <Image
                        alt="icon"
                        src={linkedInLogo}
                        className="h-5 w-auto"
                    />
                </a>
                <GithubIcon
                    href="https://github.com/rajeshchoudharyt"
                    themeName={theme.name}
                />
            </div>
            <a
                href="/"
                className={`flex justify-center font-semibold items-center gap-x-2 p-2 rounded ${downloadBtn}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 stroke-2">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                </svg>
                My Resume
            </a>
            <p>Designed and Developed by Me</p>
        </div>
    );
}
