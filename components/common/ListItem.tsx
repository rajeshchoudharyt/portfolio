export default function ListItem({
    items,
    theme,
    justify,
}: {
    items: string[];
    theme: { border: string };
    justify?: string;
}) {
    const borderColor = "border" + theme?.border.slice(2);

    return (
        <div
            className={`flex flex-wrap gap-x-2 gap-y-3 text-sm mb-4 ${
                justify || "justify-center"
            }`}>
            {items.map((item) => (
                <div
                    key={item}
                    className={`flex justify-center w-20 min-w-fit p-1 border rounded border-opacity-30 ${borderColor}`}>
                    {item}
                </div>
            ))}
        </div>
    );
}
