import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: {
    icon: './app/favicon.ico',
  },
  title: 'Leaf Palette',
  description:
    'Leaf Palette: Your pocket diary for UI design inspiration and best practices',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
