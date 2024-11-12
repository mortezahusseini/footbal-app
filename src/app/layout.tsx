import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "فوتسال قوم دهقان",
  description: "مسابقات فوتسال قوم دهقان در تهران، سال ۱۴۰۳ - دیزاین توسط مرتضی حسینی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body
        className={'antialiased'}
      >
        {children}
      </body>
    </html>
  );
}
