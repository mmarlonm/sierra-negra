import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../components/CartContext";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sierra Negra Puebla | Turismo, Clima y Lugares Naturales",
    template: "%s | Sierra Negra Puebla"
  },
  description:
    "Descubre la Sierra Negra de Puebla: lugares turísticos, climas variados, montañas, cascadas, miradores y rutas ideales para ecoturismo y aventura.",
  keywords: [
    "Sierra Negra Puebla",
    "lugares turísticos Puebla",
    "turismo Sierra Negra",
    "clima frío Puebla",
    "ecoturismo Puebla",
    "cascadas Puebla",
    "montañas Puebla",
    "senderismo Puebla"
  ],
  authors: [{ name: "Sierra Negra Turismo" }],
  creator: "Sierra Negra Turismo",
  publisher: "Sierra Negra Turismo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  alternates: {
    canonical: "https://mmarlonm.github.io/sierra-negra/"
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://mmarlonm.github.io/sierra-negra/",
    title: "Sierra Negra Puebla | Turismo y Naturaleza",
    description:
      "Explora los mejores lugares turísticos de la Sierra Negra en Puebla: climas, rutas, vistas naturales y destinos imperdibles.",
    siteName: "Sierra Negra Puebla",
    images: [
      {
        url: "https://mmarlonm.github.io/sierra-negra/og-sierra-negra.jpg",
        width: 1200,
        height: 630,
        alt: "Paisaje natural de la Sierra Negra en Puebla"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sierra Negra Puebla | Turismo y Naturaleza",
    description:
      "Lugares turísticos, climas y vistas naturales de la Sierra Negra en Puebla.",
    images: ["https://mmarlonm.github.io/sierra-negra/og-sierra-negra.jpg"]
  },
  verification: {
    google: "peMxbZbtOeIMz__rEDRgRcTyvwhKRpNlDgL5V6soK9I"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          <div style={{ paddingTop: 'var(--header-height)' }}>{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
