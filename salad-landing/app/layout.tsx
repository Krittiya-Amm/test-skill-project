import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const thai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verdant — ผักสลัดพร้อมทาน คัดสดทุกวัน",
  description:
    "Verdant ผักสลัดแบบแพ็คคัดคุณภาพ ล้างสะอาดพร้อมทาน วางจำหน่ายใน Tops Supermarket และ Gourmet Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${fraunces.variable} ${inter.variable} ${thai.variable} antialiased`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
