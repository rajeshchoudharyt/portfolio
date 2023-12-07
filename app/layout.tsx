import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Profile",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="font-sans leading-loose tracking-wide text-stone-500 bg-white">
            <body>
                <Navbar />
                <div>{children}</div>
            </body>
        </html>
    );
}
