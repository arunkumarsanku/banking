import type { Metadata } from "next";
import { IBM_Plex_Serif , Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const  ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  // title: "Monifyne",
  title : "Horizon",
  description: "Monifyne simplifies managing expenses across multiple bank accounts in one app.",
  icons: {
    icon:'/icons/logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
