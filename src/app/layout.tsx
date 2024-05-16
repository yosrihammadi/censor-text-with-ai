import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Censor text in any language",
  description: "Censor text in any language",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
