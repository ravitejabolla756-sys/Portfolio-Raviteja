import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bolla Ravi Teja · Automation Systems Developer",
  description:
    "Portfolio of Bolla Ravi Teja, BTech CSE · App Builder · Automation Systems Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          poppins.variable +
          " font-[var(--font-poppins)] bg-[#020617] text-white min-h-screen"
        }
      >
        {children}
      </body>
    </html>
  );
}
