import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const sans = Source_Sans_3({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});

export const metadata = {
    title: "Rajesh T - Portfolio",
    description: "A personal website of Rajesh T",
};

const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={sans.className}>{children}</body>
            <GoogleAnalytics gaId={measurementId} />
        </html>
    );
}
