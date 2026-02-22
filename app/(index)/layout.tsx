import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sierra Negra",
  description: "Descubre la belleza natural de la Sierra Negra",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
