"use client";

import Education from "../components/Education";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Page() {
    return (
        <main>
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}
