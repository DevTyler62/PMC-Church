import type { Metadata } from 'next';
import '@fontsource/gloock/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/dm-sans/600.css';
import './globals.css';
export const metadata: Metadata = {
  title: 'Providence Mennonite Church | A place to belong',
  description:
    'Welcome to Providence Mennonite Church. Get to know us, explore sermons, plan a visit, and share a prayer request.',
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
