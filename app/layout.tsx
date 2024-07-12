import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { REVALIDATE_TIME } from "@/constants";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = REVALIDATE_TIME;
export const metadata: Metadata = {
  title: "IVJD PROJECT",
  description: "IVJD PROJECT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* <Navbar /> */}

        <div>{children}</div>
      </body>
    </html>
  );
}
