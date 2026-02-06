import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Synapse",
  description: "an intelligent school app for staff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

