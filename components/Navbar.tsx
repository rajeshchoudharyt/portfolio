"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [toggle, setToggle] = useState("off");

    const onToggle = () => {
        toggle === "on" ? setToggle("off") : setToggle("on");
    };

    return (
        <div className="fixed top-2 left-2 z-10 text-stone-200 bg-transparent">
            <nav
                className={`flex justify-between items-center h-10 rounded-md bg-stone-800`}>
                <button onClick={onToggle} className="max-w-fit">
                    {toggle === "off" ? (
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 mx-2">
                            <path d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
                        </svg>
                    ) : (
                        ""
                    )}
                </button>
            </nav>
            <div
                className={`fixed top-0 left-0 h-full w-full -translate-x-full transition-transform duration-400
                            text-inherit ${
                                toggle === "on"
                                    ? "translate-x-0 ease-out"
                                    : "ease-in"
                            }`}>
                <div className="flex flex-col items-center py-10 px-2 gap-y-6 h-full w-3/5 sm:w-1/4 bg-stone-800">
                    <svg
                        viewBox="0 0 24 24"
                        onClick={onToggle}
                        className="w-6 h-6 relative -top-6 left-2 cursor-pointer self-start stroke-stone-200">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    {[
                        "#about",
                        "#experience",
                        "#education",
                        "#skills",
                        "#projects",
                        "#contact",
                    ].map((href) => (
                        <Link
                            key={href}
                            href={href}
                            replace
                            onClick={onToggle}
                            className="text-center w-full capitalize">
                            {href.slice(1)}
                        </Link>
                    ))}
                </div>
                <div
                    className={`fixed top-0 right-0 h-full w-2/5 sm:w-3/4 backdrop-blur-xs`}
                    onClick={onToggle}></div>
            </div>
        </div>
    );
}
