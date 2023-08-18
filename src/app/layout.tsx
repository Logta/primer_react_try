"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider, BaseStyles } from "@primer/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <BaseStyles>{children}</BaseStyles>
        </ThemeProvider>
      </body>
    </html>
  );
}
