import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { AnimatePresence, motion } from "framer-motion";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "placementmgmt",
  description: "Production scouting agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header /> <div className="container">{children}</div>
      </body>
    </html>
  );
}
