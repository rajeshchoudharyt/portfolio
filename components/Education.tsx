export default function Education({
    theme,
}: {
    theme: {
        border: string;
    };
}) {
    return (
        <div className="text-center">
            <div>
                <h4 className="mb-0">Master of Technology</h4>
                <h4 className="text-sm font-normal mb-0">
                    Computer Science & Engineering
                </h4>
                <h5 className="text-xs">(2021 - 2023)</h5>
                <p className="text-sm font-bold mt-2">
                    M S Ramaiah Institute of Technology, Bengaluru
                </p>
                <p className="text-sm mt-2 font-semibold">
                    CGPA: <span className="font-normal">7.68/10</span>
                </p>
            </div>
            <div className={`my-8 w-full rounded-lg h-1 ${theme.border}`}></div>
            <div>
                <h4 className="mb-0">Bachelor of Technology</h4>
                <h4 className="text-sm font-normal mb-0">
                    Computer Science & Engineering
                </h4>
                <h5 className="text-xs">(2017 - 2021)</h5>
                <p className="text-sm font-bold mt-2">
                    Presidency University, Bengaluru
                </p>
                <p className="text-sm mt-2 font-semibold">
                    CGPA: <span className="font-normal">7.39/10</span>
                </p>
            </div>
        </div>
    );
}
