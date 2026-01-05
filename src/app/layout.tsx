import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Outfit } from 'next/font/google';
import ScrollToTop from "@/component/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  variable: '--font-outfit',
})


export const metadata: Metadata = {
  metadataBase: new URL("https://www.prpromotionhub.com"),

  title: "PR Promotion Hub – PR News, Marketing Insights & Global Business Coverage",
  description:
    "PR Promotion Hub delivers the latest PR news, marketing strategies, finance updates, global business coverage, and entertainment insights. Stay ahead with trusted industry reporting.",
  keywords:
    "pr news, press release news, marketing news, digital marketing, finance news, business news, world news, us news, entertainment news, brand promotion, pr promotion hub",

  openGraph: {
    title: "PR Promotion Hub – PR News, Marketing & Business Insights",
    description:
      "Get the latest PR news, marketing trends, finance updates, and global business insights from PR Promotion Hub—your trusted source for brand and media growth.",
    url: "https://www.prpromotionhub.com",
    siteName: "PR Promotion Hub",
    locale: "en_US",
    images: [
      {
        url: "https://www.prpromotionhub.com/images/prpromotionhub-logo.webp",
        width: 1200,
        height: 630,
        alt: "PR Promotion Hub logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PR Promotion Hub – PR News & Marketing Intelligence",
    description:
      "PR Promotion Hub brings you PR news, marketing intelligence, finance updates, and global business stories to help brands grow and succeed.",
    images: ["https://www.prpromotionhub.com/images/prpromotionhub-logo.webp"],
    site: "@prpromotionhub",
    creator: "@prpromotionhub",
  },

  alternates: {
    canonical: "https://www.prpromotionhub.com",
    languages: {
      "en-US": "https://www.prpromotionhub.com",
      "x-default": "https://www.prpromotionhub.com",
    },
  },

  authors: [{ name: "PR Promotion Hub Editorial Team" }],
  publisher: "PR Promotion Hub",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.className} antialiased`}
      >
      
          <Header/>
          {children}
          <Footer />
          <ScrollToTop />
      </body>
    </html>
  );
}