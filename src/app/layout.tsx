import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Dilshan Jayawardhana Photography & Cinematography | Dambulla, Sri Lanka',
  description: 'Official portfolio of Dilshan Jayawardhana Photography & Cinematography. We are capturing the moments of today that will wow your hearts tomorrow. Premium wedding photography and cinematography in Dambulla, Sri Lanka.',
  keywords: ['wedding photography sri lanka', 'cinematography sri lanka', 'best wedding photographer dambulla', 'luxury wedding photography', 'dilshan jayawardhana', 'photography dambulla'],
  authors: [{ name: 'Dilshan Jayawardhana' }],
  openGraph: {
    title: 'Dilshan Jayawardhana Photography & Cinematography',
    description: 'We are capturing the moments of today that will wow your hearts tomorrow.',
    url: 'https://dilshanjayawardana.com',
    siteName: 'Dilshan Jayawardhana Photography',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
