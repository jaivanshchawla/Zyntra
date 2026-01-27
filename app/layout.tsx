import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zyntra",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!clerkPublishableKey) {
    // Fail gracefully if Clerk is misconfigured in the environment
    return (
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <Navbar />
          <main className="p-6">
            <p className="text-red-600 font-semibold">
              Clerk is not configured correctly. Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.
            </p>
          </main>
          {children}
        </body>
      </html>
    );
  }

  return (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      appearance={{ variables: { colorPrimary: "#FE5933" } }}
    >
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <header>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
