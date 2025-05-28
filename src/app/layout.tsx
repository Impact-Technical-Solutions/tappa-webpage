import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import "../embla-carousel/css/embla.css";

export const metadata: Metadata = {
  title: "Täppä - se parempi kirjaussovellus",
  description:
    "Täppä on erityisesti ravintolayrityksille suunniteltu tehokas keskitetty järjestelmä omavalvonnan ja inventaarion ylläpitämiseen. Kaikki yrityksesi kirjaukset tapahtuvat Täpän sisältä ja myös jäävät sinne.",
  keywords: [
    // Finnish keywords
    "omavalvonta",
    "inventaario",
    "varastonhallinta",
    "ravintola",
    "kahvila",
    "kirjanpito",
    "varastoseuranta",
    "lämpötilaseuranta",
    "siivouskirjanpito",
    "ravintolakirjanpito",
    "varastokirjanpito",
    "elintarviketurvallisuus",
    "täppä",
    "tappa",
    "tappa-app",
    "tappa-app.fi",
    "ravintolasovellus",
    "omavalvontasovellus",
    "inventaariosovellus",
    // English keywords
    "inventory management",
    "restaurant monitoring",
    "food safety",
    "temperature monitoring",
    "cleaning records",
    "stock control",
    "restaurant inventory",
    "food service management",
    "inventory tracking",
    "restaurant compliance",
    "food safety monitoring",
    "HACCP",
  ],
  authors: [{ name: "Täppä", url: "https://tappa-app.fi" }],
  openGraph: {
    title: "Täppä - se parempi kirjaussovellus",
    description:
      "Tehosta ravintolasi omavalvontaa ja inventaariota Täpän avulla",
    url: "https://tappa-app.fi",
    siteName: "Täppä",
    locale: "fi_FI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Täppä - se parempi kirjaussovellus",
    description:
      "Tehosta ravintolasi omavalvontaa ja inventaariota Täpän avulla",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  category: "Business Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
