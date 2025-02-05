import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" sizes="128x128"></link>
        <title>Athens Creative Co</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
