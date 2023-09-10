import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Navbar from "@/app/components/Navbar";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Shubham Prasad",
    description: "Portfolio website of Shubham Prasad",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.className} bg-[#111010] text-white flex flex-col items-center`}
            >
                <div className=" w-[672px] flex justify-start flex-col min-h-screen max-md:w-[300px]">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
