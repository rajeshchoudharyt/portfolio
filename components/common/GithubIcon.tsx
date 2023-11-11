import Image from "next/image";
import githubIcon from "../../public/GitHub_Logo.png";
import githubMark from "../../public/Github_Mark.png";
import githubIconBlack from "../../public/GitHub_Logo_Black.png";
import githubMarkBlack from "../../public/GitHub_Mark_Black.png";

export default function GithubIcon({
    href,
    themeName,
}: {
    href: string;
    themeName: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            className={`flex justify-center self-center p-1 rounded ${
                themeName === "Dark" ? "bg-white" : "bg-[#333]"
            }`}>
            <Image
                alt="icon"
                src={themeName === "Dark" ? githubMarkBlack : githubMark}
                className="h-5 w-auto"
            />
            <Image
                alt="icon"
                src={themeName === "Dark" ? githubIconBlack : githubIcon}
                className="h-5 w-auto"
            />
        </a>
    );
}
