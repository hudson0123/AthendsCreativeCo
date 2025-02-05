"use client"

import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.ico" sizes="128x128"></link>
          <title>Athens Creative Co</title>
        </head>
        <body>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
