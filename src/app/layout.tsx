import type { Metadata } from "next";
import { Rajdhani, Source_Code_Pro } from "next/font/google";

import { META, URL } from "@/constants/global";

import "./globals.css";
import Providers from "./providers";

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

const rajdhani = Rajdhani({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

const { title, description, openGraphImage, shortname } = META;

export const metadata: Metadata = {
  description,
  openGraph: {
    ...openGraphImage,
    description,
    title,
    type: "website",
    url: URL,
  },
  title,
  keywords: [shortname, "vault hunters gear viewer"],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.variable} ${rajdhani.variable} font-rajdhani font-semibold text-neutral-100 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
