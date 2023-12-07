import Image from "next/image";
import Link from "next/link";
import profileImage from "../public/profile-image.jpg";

export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col justify-center items-center text-center w-full min-h-screen px-4 py-10">
            <Image
                priority
                alt="profile image"
                src={profileImage}
                className="w-auto h-48 rounded-full pointer-events-none"
            />
            <p className="flex flex-col max-w-xl gap-y-4 my-8">
                <span className="text-2xl">{"Hello I'm"}</span>
                <span className="text-4xl font-bold text-stone-800 mb-2">
                    Rajesh T
                </span>
                {"I'm"} a software developer with entry-level experience in
                full-stack web development and mobile application development. I
                have strong problem-solving skills and am a fast learner with a
                Master of Technology degree in Computer Science and Engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-y-4 text-stone-800 font-medium text-xs gap-x-4 sm:gap-x-8">
                <Link
                    href="#contact"
                    replace
                    className="p-2 w-36 sm:w-48 border-2 border-stone-800 hover:text-white hover:bg-stone-800">
                    CONTACT ME
                </Link>
                <Link
                    href="https://drive.google.com/file/d/10_R5MKehLM08obGnmkKcN_8SgMjRqa7l/"
                    target="_blank"
                    className="p-2 w-36 sm:w-48 border-2 border-stone-800 bg-stone-800 text-white hover:text-stone-800 hover:bg-white">
                    DOWNLOAD CV
                </Link>
            </div>
        </section>
    );
}
