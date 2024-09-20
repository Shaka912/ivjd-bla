import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { REVALIDATE_TIME } from "@/constants";
import { Locale } from "@/i18n";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = REVALIDATE_TIME;
export const metadata: Metadata = {
  title: "Instituto Valencia Don Juan",
  description:
    " El Instituto Valencia de Don Juan fue fundado en 1916 por don Guillermo de Osma y Scull y su esposa doña Adelaida Crooke y Guzmán",
};
export type Params = {
  lang: Locale;
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
