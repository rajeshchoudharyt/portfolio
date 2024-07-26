export default function About() {
    return (
        <section
            id="about"
            className="flex justify-center items-center min-h-[80lvh] md:min-h-[100lvh]
                             text-white bg-header bg-fixed bg-cover">
            <div className="max-w-[60rem]">
                <p className="text-2xl sm:text-3xl md:text-4xl">
                    {"Hi, I'm"} <b>Rajesh T</b> <br />
                    <br />
                    A recent graduate with a
                    <br />
                    Master of Technology degree in Computer Science and
                    Engineering.
                </p>
                <br />
                <br />
                <br />
                <p className="text-lg sm:text-2xl md:text-2xl">
                    Good at problem solving skills and hands-on experience in
                    Software Engineering.
                    <br />
                    <br />
                    Proficient in 20+ tech stack.
                </p>
                <br />
                <br />
                <div className="space-x-4 sm:space-x-8 md:space-x-12">
                    <a
                        href="#contact"
                        className="px-4 py-1 border-[1px] border-white rounded tracking-normal 
                                    font-normal hover:bg-white/10 hover:bg-opacity-30">
                        CONTACT ME
                    </a>
                    <a
                        href="https://drive.google.com/file/d/10_R5MKehLM08obGnmkKcN_8SgMjRqa7l"
                        className="px-4 py-1 border-[1px] border-white rounded tracking-normal 
                                    font-normal hover:bg-white/10 hover:bg-opacity-30">
                        DOWNLOAD CV
                    </a>
                </div>
            </div>
        </section>
    );
}
