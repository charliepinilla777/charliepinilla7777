import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Radiant Gold Gems',
  description: 'Radiant Gold Gems - Jewelry and precious gems.',
  authors: [{ name: 'Radiant Gold Gems', url: 'https://github.com/charliepinilla777' }],
  keywords: [
    'Data Science',
    'Machine Learning',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Python',
    'JavaScript',
    'Web Development',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://charliepinilla.dev',
    title: 'Radiant Gold Gems',
    description: 'Radiant Gold Gems - Jewelry and precious gems.',
    siteName: 'Radiant Gold Gems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radiant Gold Gems',
    description: 'Radiant Gold Gems - Jewelry and precious gems.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
