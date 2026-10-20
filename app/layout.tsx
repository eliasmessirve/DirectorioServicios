import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  metadataBase: new URL('https://directorio-servicios-blue.vercel.app'),
  title: {
    default: 'Directorio de Servicios',
    template: '%s | Directorio de Servicios',
  },
  
  description:
    'Encontrá profesionales y servicios para tu hogar. Explorá categorías y contactá fácilmente al profesional que necesitás.',
  openGraph: {
    title: 'Directorio de Servicios',
    description:
      'Encontrá profesionales y servicios para tu hogar de forma sencilla.',
    url: 'https://directorio-servicios-blue.vercel.app',
    siteName: 'Directorio de Servicios',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/DirectorioServiciosLogo.png',
        alt: 'Logo de Directorio de Servicios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Directorio de Servicios',
    description:
      'Encontrá profesionales y servicios para tu hogar de forma sencilla.',
      images: ['/DirectorioServiciosLogo.png'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
