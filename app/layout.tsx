import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/app/components/navbar-component/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shubham Prasad",
  description:
    "Software Engineer | Building Digital Worlds, One Line of Code at a Time",
  openGraph: {
    title: "Shubham Prasad",
    description:
      "Software Engineer | Building Digital Worlds, One Line of Code at a Time",
    url: "https://shubhamprasad.vercel.app/",
    siteName: "Shubham Prasad",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-portfolio-logo.png",
      },
    ],
  },
  authors: [
    {
      name: "Shubham Prasad",
    },
  ],
  creator: "Shubham Prasad",
  twitter: {
    card: "summary_large_image",
    site: "@SAMURAii_7",
    creator: "@SAMURAii_7",
    title: "Shubham Prasad",
    description:
      "Software Engineer | Building Digital Worlds, One Line of Code at a Time",
    images: ["/opengraph-portfolio-logo.png"],
  },
  keywords: [
    "Shubham Prasad",
    "Shubham",
    "Prasad",
    "Shubham Prasad Portfolio",
    "Shubham Prasad Website",
    "Shubham Prasad Developer",
    "Shubham Prasad Software Engineer",
    "Shubham Prasad Software Developer",
    "Shubham Prasad Full Stack Developer",
    "Shubham Prasad Full Stack Engineer",
    "Shubham Prasad Full Stack",
    "Shubham Prasad Full Stack Web Developer",
    "Shubham Prasad Full Stack Web Engineer",
    "Shubham Prasad Full Stack Web",
    "Shubham Prasad Full Stack Developer",
    "Shubham Prasad Full Stack Engineer",
    "Shubham Prasad Full Stack",
    "Shubham Prasad Full Stack Web Developer",
    "Shubham Prasad Full Stack Web Engineer",
    "Shubham Prasad Full Stack Web",
    "Shubham Prasad Full Stack Developer",
    "Shubham Prasad Full Stack Engineer",
    "Shubham Prasad Full Stack",
    "Shubham Prasad Full Stack Web Developer",
    "Shubham Prasad Full Stack Web Engineer",
    "Shubham Prasad Full Stack Web",
  ],
  robots: "index, follow",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
  manifest: "/site.webmanifest",
  verification: {
    google: "u7nSvwqDr2oWOwlJylnp6tDXX9IfaQThVm5fxhCGPgg",
    me: "https://twitter.com/SAMURAii_7",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex flex-col items-center bg-[#111010] text-white`}
      >
        <div className=" flex min-h-screen w-[672px] flex-col justify-start max-md:w-[300px]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
