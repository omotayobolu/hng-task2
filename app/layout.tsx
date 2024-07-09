import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";

const elmessiri = El_Messiri({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-elmessiri",
});

const aeonik = LocalFont({
  src: [
    {
      path: "../public/fonts/Aeonik/AeonikTRIAL-Bold.otf",
      weight: "700",
      style: "bold",
    },

    {
      path: "../public/fonts/Aeonik/AeonikTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../public/fonts/Aeonik/AeonikTRIAL-Light.otf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-aeonik",
});

export const metadata: Metadata = {
  title: "Timbu Cloud Shop",
  description: "E-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${elmessiri.variable} ${aeonik.className}`}>
        {children}
      </body>
    </html>
  );
}
