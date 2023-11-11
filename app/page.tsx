"use client";

import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import themes from "@/utils/theme";

import { useState } from "react";

export default function Page() {
    const [theme, setTheme] = useState(themes[0]);

    const handleTheme = (id: number) => {
        id = id % themes.length;
        setTheme(themes[id]);
    };

    const styles = {
        h3: "pt-14 -mt-10 mb-5 flex justify-center ",
        div: `m-5 mb-8 px-8 py-8 rounded-xl shadow-all transition-shadow ease-linear duration-700 ${
            theme.name === "Colourful"
                ? `${theme.bgColor} text-black shadow-sky-800`
                : ""
        }`,
    };

    return (
        <div
            className={`transition-colors ease-linear duration-700 ${
                theme.color
            } 
            ${theme.name === "Colourful" ? `bg-purple-200` : theme.bgColor}`}>
            <Navbar theme={theme} changeTheme={handleTheme} />
            <h3 className={styles.h3} id="about">
                About
            </h3>
            <div className={styles.div}>
                <About />
            </div>
            <h3 className={styles.h3} id="education">
                Education
            </h3>
            <div className={styles.div}>
                <Education theme={theme} />
            </div>
            <h3 className={styles.h3} id="skills">
                Skills
            </h3>
            <div className={styles.div}>
                <Skills theme={theme} />
            </div>
            <h3 className={styles.h3} id="experience">
                Experience
            </h3>
            <div className={styles.div}>
                <Experience theme={theme} />
            </div>
            <h3 className={styles.h3} id="projects">
                Projects
            </h3>
            <div className={styles.div}>
                <Projects theme={theme} />
            </div>
            <h3 className={styles.h3} id="contact">
                Contact Me
            </h3>
            <div className="p-2 shadow-all">
                <Contact theme={theme} />
            </div>
        </div>
    );
}
