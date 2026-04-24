import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatWidgetWrapper from "@/components/ui/ai-chat-widget-wrapper";
import JsonLd from "@/components/json-ld";

const displayFont = Outfit({
  variable: "--font-display-var",
  subsets: ["latin"],
  weight: ["800"],
  display: "optional",
  preload: false,
});

const bodyFont = DM_Sans({
  variable: "--font-body-var",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "optional",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Prestige Driving School | Professional Driving Lessons in Lagos",
    template: "%s | Prestige Driving School",
  },
  description: "Learn to drive with confidence. Expert driving lessons in Sabo Yaba, Lagos. FRSC certified instructors, flexible schedules, and guaranteed results.",
  keywords: "driving school, driving lessons, Lagos, Sabo Yaba, learn to drive, driving instructor, FRSC certified, driver's license Nigeria",
  authors: [{ name: "Prestige Driving School" }],
  creator: "Prestige Driving School",
  publisher: "Prestige Driving School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://prestigedriving.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-NG": "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://prestigedriving.com",
    siteName: "Prestige Driving School",
    title: "Prestige Driving School | Professional Driving Lessons in Lagos",
    description: "Learn to drive with confidence. Expert driving lessons in Sabo Yaba, Lagos. FRSC certified instructors, flexible schedules, and guaranteed results.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prestige Driving School - Expert Driving Lessons in Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestige Driving School | Professional Driving Lessons in Lagos",
    description: "Learn to drive with confidence. Expert driving lessons in Sabo Yaba, Lagos. FRSC certified instructors.",
    images: ["/og-image.png"],
    creator: "@prestigedriving",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NG"
      data-theme="dark"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <AIChatWidgetWrapper />
      </body>
    </html>
  );
}