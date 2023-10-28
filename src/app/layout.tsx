import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/common/Header';
import TopNavigation from './components/common/TopNavigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Everything uwanttono',
  description: 'Provides all information everything you want to know',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <TopNavigation
          navItems={[
            {
              label: 'food pros & cons',
              href: '/food-pros-and-cons',
            },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
