import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crypto Dashboard',
  description: 'Track cryptocurrency prices and trends',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 dark:bg-crypto-dark`}>
        <Header />
        <div className='flex flex-1'>
          <Sidebar />
          <main className='flex-1 p-4'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
