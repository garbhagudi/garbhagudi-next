import React from 'react';
import { Lexend, Nunito, B612, Benne } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const b612 = B612({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-b612',
  weight: ['400', '700'],
});

const benne = Benne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-benne',
  weight: ['400'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main
        className={`${lexend.variable} ${nunito.variable} ${b612.variable} ${benne.variable}`}
      >
        {children}
      </main>
    </>
  );
}
