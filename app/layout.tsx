import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import {dark} from '@clerk/themes'
import { Toaster } from "@/components/ui/sonner"

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarryAI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
    <html lang="en">
      <body className="">
        <main>
          {children}
          
        </main>
        <Toaster />
      </body>
    </html>
  </ClerkProvider>
  );
}
