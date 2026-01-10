import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Carlos Andres Pinilla - Data Scientist & Full Stack Developer',
  description: 'Expert Data Scientist, Machine Learning Engineer, and Full Stack Developer. Building intelligent solutions with React, Python, and modern web technologies.',
  authors: [{ name: 'Carlos Andres Pinilla', url: 'https://github.com/charliepinilla777' }],
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
    locale: 'en_US',
    url: 'https://charliepinilla.dev',
    title: 'Carlos Andres Pinilla - Data Scientist & Full Stack Developer',
    description: 'Expert in Machine Learning, Data Science, and Full Stack Development',
    siteName: 'Carlos Andres Pinilla Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Andres Pinilla - Data Scientist & Full Stack Developer',
    description: 'Expert in Machine Learning, Data Science, and Full Stack Development',
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
