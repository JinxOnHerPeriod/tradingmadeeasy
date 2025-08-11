// app/layout.tsx
import "./globals.css";
import React from "react";
import ClientHeader from "./ClientHeader";
import Footer from "./Footer";

export const metadata = {
  title: "My Trading Site",
  description: "Trading doesn't have to be hard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
        <ClientHeader />
        
        <main className="flex-grow max-w-6xl mx-auto mt-10 px-6">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
