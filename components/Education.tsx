export default function Education() {
    return (
        <section
            id="education"
            className="flex flex-col items-center bg-stone-200 pt-20 pb-10 px-4">
            <h2 className="text-center text-2xl font-bold text-orange-600 mb-12">
                Education
            </h2>

            <div className="grid grid-flow-row grid-rows-2">
                <div className="grid grid-flow-col grid-cols-6 h-fit">
                    <div className="relative top-1.5 col-span-1 flex flex-col items-center">
                        <div className="w-5 h-5 p-1 rounded-full border-4 border-orange-600"></div>
                        <div className="h-full w-0.5 bg-orange-600"></div>
                    </div>
                    <div className="col-span-5 px-6 pb-12">
                        <h3 className="text-xl font-bold text-stone-800">
                            Master of Technology
                        </h3>

                        <p className="text-xs">(2021 - 2023)</p>
                        <div className="my-5 w-8 rounded-lg h-0.5 bg-orange-600"></div>
                        <h4 className="font-semibold -mt-1 text-stone-800">
                            Ramaiah Institute of Technology
                        </h4>
                        <p className="text-sm font-normal">
                            Computer Science & Engineering
                        </p>
                        <p className="text-sm font-semibold">
                            CGPA: <span className="font-normal">7.68/10</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-flow-col grid-cols-6 h-fit">
                    <div className="relative top-1.5 col-span-1 flex flex-col items-center pb-1.5">
                        <div className="w-5 h-5 p-1 rounded-full border-4 border-orange-600"></div>
                        <div className="h-full w-0.5 bg-orange-600"></div>
                    </div>
                    <div className="col-span-5 px-6">
                        <h3 className="text-xl font-bold text-stone-800">
                            Bachelor of Technology
                        </h3>

                        <p className="text-xs">(2017 - 2021)</p>
                        <div className="my-5 w-8 rounded-lg h-0.5 bg-orange-600"></div>
                        <h4 className="font-semibold -mt-1 text-stone-800">
                            Presidency University
                        </h4>
                        <p className="text-sm font-normal">
                            Computer Science & Engineering
                        </p>
                        <p className="text-sm font-semibold">
                            CGPA: <span className="font-normal">7.39/10</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
