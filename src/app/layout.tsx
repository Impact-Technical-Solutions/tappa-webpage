import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import "../embla-carousel/css/embla.css";

export const metadata: Metadata = {
  title: "Täppä",
  description: "Täppä",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
