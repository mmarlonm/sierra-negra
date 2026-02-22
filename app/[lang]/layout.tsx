import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { CartProvider } from "../../components/CartContext";
import Header from "../../components/Header";
import CartDrawer from "../../components/CartDrawer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
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

import { getDictionary } from "../dictionaries";

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'es' | 'en');

  return (
    <html lang={lang}>
      <body
        className={`${outfit.variable} antialiased`}
      >
        <CartProvider>
          <Header lang={lang as 'es' | 'en'} dict={dict.header} />
          <CartDrawer lang={lang as 'es' | 'en'} dict={dict.cart} />
          <div style={{ paddingTop: 'var(--header-height)' }}>{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
