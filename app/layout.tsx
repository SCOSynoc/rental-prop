import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'HomeAway',
  description: 'Feel at home, away from home.',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
              <html lang="en">
                  <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                    <Providers>
                      <Navbar/>
                      {children}
                    </Providers>
                  </body>
              </html>
    </ClerkProvider>
   
  );
}



