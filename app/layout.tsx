import type { Metadata } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'North Western Innovators | Luxury Interior Design & Architecture in Chandigarh',
  description: 'NORTH WESTERN INNOVATORS (NWI) is Chandigarh\'s leading luxury interior design, architecture, and MEP services firm. Transforming residential, commercial, and institutional spaces into timeless masterpieces.',
  keywords: 'Interior Design Chandigarh, Architecture Chandigarh, Luxury Home Design, Commercial Interiors Office, MEP Services Chandigarh, Product Designing Chandigarh, North Western Innovators, NWI Chandigarh',
  openGraph: {
    title: 'North Western Innovators | Luxury Interior Design & Architecture',
    description: 'Chandigarh\'s premier design studio. Architecture, Interiors, MEP & Product Designing with exceptional precision and luxury finishes.',
    url: 'https://nwi-innovators.com',
    siteName: 'North Western Innovators',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-sans bg-soft-white text-dark-charcoal min-h-screen flex flex-col selection:bg-gold-500 selection:text-white" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
