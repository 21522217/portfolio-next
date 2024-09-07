import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./providers";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khiem Tran's Portfolio",
  description: "Modern, Flashy and Minimal.",
  metadataBase: new URL("http://localhost:3000/"),
  authors: {
    name: "Khiem Hanzo Tran"
  },
  openGraph: {
    title: "Daily Vote",
    description: "Based in Vietnam,",
    url: "http://localhost:3000/",
    siteName: "Khiem Hanzo Tran",
    images: "",
    type: "website"
  },
  keywords: ["khiem hanzo tran", "frontend developer", "web developer"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
