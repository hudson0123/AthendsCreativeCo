import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Athens Creative Co",
  description: "Digital Marketing Agency in Athens, Ga.",
  icons: {
    icon: '/favicon144.png',
    shortcut: '/favicon144.png',
    apple: '/favicon144.png',
  }
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5F5]">
        {children}
      </body>
    </html>
  );
}
