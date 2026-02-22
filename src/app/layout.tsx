import type { Metadata } from 'next';
import './globals.css';
import PageViewTracker from '../components/dashboard/PageViewTracker';

export const metadata: Metadata = {
  title: 'Christopher Castro | Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Next.js, Python, and AI/ML. Portfolio showcasing projects, open-source contributions, and community leadership.',
  openGraph: {
    title: 'Christopher Castro | Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Python, and AI/ML. Explore my projects, open-source contributions, and community leadership.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* BOXICONS */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        {/* UNICONS */}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body>
        <PageViewTracker />
        {children}
      </body>
    </html>
  );
}
