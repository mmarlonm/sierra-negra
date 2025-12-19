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

export const metadata = {
  title: "Sierra Negra – Turismo, rutas y lugares mágicos",
  description: "Explora la Sierra Negra: rutas, lugares naturales, cultura local y destinos impresionantes en Puebla.",
  keywords: ["sierra negra", "turismo puebla", "rutas", "senderismo", "lugares naturales"],
  openGraph: {
    title: "Sierra Negra – Naturaleza y Turismo",
    description: "Descubre los lugares más impresionantes de la Sierra Negra.",
    images: ["https://tusitio.com/tuimagen.jpg"]
  }
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
