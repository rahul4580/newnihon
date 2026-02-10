import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import "./globals.css";
import ClientWrapper from "../components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dinakramam",
  description: "Dinakramam - Digital Portfolio & Insights",
  icons: {
    icon: '/nihongo.jpg',
    apple: '/nihongo.jpg',
  },
  openGraph: {
    title: "Dinakramam",
    description: "Dinakramam - Digital Portfolio & Insights",
    url: "https://dinakramam.vercel.app",
    siteName: "Dinakramam",
    locale: "en_US",
    type: "website",
  }
};

function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased selection:bg-blue-500 selection:text-white`}>
          <ClientWrapper>

            {children}
          </ClientWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;
