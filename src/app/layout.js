import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6TD85QQZ6L"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6TD85QQZ6L');`}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased selection:bg-blue-500 selection:text-white`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
