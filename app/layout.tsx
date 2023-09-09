import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Slack",
  description: "Generated by AusieJamster",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
