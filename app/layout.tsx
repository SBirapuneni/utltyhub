import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UtltyHub - Your Ultimate Utility Tools Collection",
  description: "Access powerful online calculators, converters, generators, and utilities. Free tools for finance, health, development, and more.",
  keywords: "utilities, calculators, converters, generators, online tools, free tools",
  authors: [{ name: "UtltyHub" }],
  openGraph: {
    title: "UtltyHub - Your Ultimate Utility Tools Collection",
    description: "Access powerful online calculators, converters, generators, and utilities.",
    url: "https://utltyhub.com",
    siteName: "UtltyHub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UtltyHub - Your Ultimate Utility Tools Collection",
    description: "Access powerful online calculators, converters, generators, and utilities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
