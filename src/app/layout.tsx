import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Toaster } from 'sonner';
import Providers from '@/lib/Providers/Providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Found Way',
  description:
    'At Found Way, we understand the distress of losing valuable belongings and the joy of recovering them. Our mission is to simplify the process of reporting lost and found items, making it easier for people to recover their possessions and for good Samaritans to return found items to their rightful owners.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <>
              <Toaster position="top-center" />
              {children}
            </>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
