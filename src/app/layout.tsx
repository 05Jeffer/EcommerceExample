import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { AuthProvider } from "@/contexts/authContext";

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Mi E-commerce',
  description: 'Tienda online creada con Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
