"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar({
    theme,
    changeTheme,
}: {
    theme: {
        id: number;
        name: string;
        bgColor: string;
        color: string;
        border: string;
    };
    changeTheme: (id: number) => void;
}) {
    const [toggle, setToggle] = useState("off");

    const onToggle = () => {
        toggle === "on" ? setToggle("off") : setToggle("on");
    };

    const themeIconColor =
        theme.name === "Colourful"
            ? `fill-purple-300 bg${theme?.color.slice(4)}`
            : `fill${theme?.bgColor.slice(2)} bg${theme?.color.slice(4)}`;

    return (
        <div
            className={`fixed top-0 z-10 w-full transition-colors ease-linear duration-700 ${
                theme.name === "Colourful" ? "bg-purple-200" : theme.bgColor
            }`}>
            <nav
                className={`flex justify-between items-center px-4 py-2 h-14 bg-inherit text-inherit`}>
                <button onClick={onToggle} className="max-w-fit">
                    {toggle === "off" ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6">
                            <path d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
                        </svg>
                    ) : (
                        ""
                    )}
                </button>
                <button type="button" onClick={() => changeTheme(theme.id)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={`w-5 h-5 p-1 rounded-full hover:cursor-pointer mr-1 ${themeIconColor}`}>
                        <path
                            fillRule="evenodd"
                            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </nav>
            <div
                className={`fixed top-0 h-full transition-width ease-out duration-300 text-inherit ${
                    theme.name === "Colourful" ? "bg-purple-200" : theme.bgColor
                } ${toggle === "off" ? "w-0" : "w-3/4 md:w-1/4"}`}>
                {toggle === "on" ? (
                    <>
                        <div
                            className="flex flex-col p-10 gap-y-6"
                            onClick={onToggle}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 relative -top-6 -left-6">
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <Link href="#about" replace>
                                About
                            </Link>
                            <Link href="#education" replace>
                                Education
                            </Link>
                            <Link href="#skills" replace>
                                Skills
                            </Link>
                            <Link href="#experience" replace>
                                Experience
                            </Link>
                            <Link href="#projects" replace>
                                Projects
                            </Link>
                            <Link href="#contact" replace>
                                Contact
                            </Link>
                        </div>
                        <div
                            className={`fixed right-0 top-0 h-full w-1/4 md:w-3/4 ${
                                theme.name === "Colourful"
                                    ? "bg-white opacity-10"
                                    : theme.bgColor + " opacity-30"
                            }`}
                            onClick={onToggle}></div>
                    </>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
