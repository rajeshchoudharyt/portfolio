import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Profile",
};

const roboto = Roboto_Mono({
    weight: "400",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={roboto.className}>
            <body>
                <div className="relative top-10">{children}</div>
            </body>
        </html>
    );
}
