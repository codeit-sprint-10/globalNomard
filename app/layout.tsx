import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from './_lib/registry';
import GlobalStyles from './_styles/GlobalStyles';
import ResetStyles from './_styles/ResetStyles';
import FontStyles from './_styles/FontStyles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Global Nomad',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ResetStyles />
          <GlobalStyles />
          <FontStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
