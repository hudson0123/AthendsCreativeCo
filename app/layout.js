"use client"

import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="128x128"></link>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
          <title>Athens Creative Co</title>
        </head>
        
        <body className="bg-[#F5F5F5]">
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
