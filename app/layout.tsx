import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Navbar from "@/app/components/Navbar";

const roboto = Roboto({
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
                className={`${roboto.className} bg-[#111010] text-white flex flex-col items-center`}
            >
                <div className=" w-[672px] flex justify-start flex-col min-h-screen">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
