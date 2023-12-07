export default function ProgressBar({
    progress = "100%",
}: {
    progress?: string;
}) {
    const obj = {
        "10%": "w-[10%]",
        "20%": "w-[20%]",
        "30%": "w-[30%]",
        "40%": "w-[40%]",
        "50%": "w-[50%]",
        "60%": "w-[60%]",
        "70%": "w-[70%]",
        "80%": "w-[80%]",
        "90%": "w-[90%]",
        "100%": "w-[100%]",
    };

    const width = obj[progress as keyof {}];

    return (
        <div className="h-2 w-full bg-stone-400 mt-4 sm:mt-2">
            <div className={`flex justify-end h-full bg-stone-800 ${width}`}>
                <p className="relative bottom-4 text-stone-800 text-xs font-semibold">
                    {progress}
                </p>
            </div>
        </div>
    );
}
