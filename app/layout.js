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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "Your Article Title",
                "image": "https://athenscreativeco.com/favicon.ico",
                "author": {
                  "@type": "Person",
                  "name": "Author Name"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Your Company Name",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://athenscreativeco.com/favicon.ico"
                  }
                },
                "datePublished": "2025-02-07T08:00:00+00:00",
                "dateModified": "2025-02-07T09:00:00+00:00"
              }
            `,
            }}
          />
          <link rel="icon" href="http://athenscreativeco.com/favicon.ico"></link>
        </head>

        <body className="bg-[#F5F5F5]">
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
