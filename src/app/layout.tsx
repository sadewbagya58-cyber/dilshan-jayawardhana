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
  title: 'Dilshan Jayawardhana Photography & Cinematography | Timeless Elegance',
  description: 'Premium wedding photography and cinematography in Sri Lanka. Specializing in capturing timeless elegance through weddings, preshoots, and bridal sessions.',
  keywords: ['wedding photography sri lanka', 'cinematography sri lanka', 'best wedding photographer colombo', 'luxury wedding photography', 'dilshan jayawardhana', 'timeless elegance photography'],
  authors: [{ name: 'Dilshan Jayawardhana' }],
  openGraph: {
    title: 'Dilshan Jayawardhana Photography & Cinematography',
    description: 'Capturing Timeless Elegance in Sri Lanka.',
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
