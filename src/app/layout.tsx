import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Kasuana Trade Network",
  description: "Building Africa's Grassroots Trade Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" antialiased" 
      >
        <Header />
        <div className="h-screen">

        {children}
        </div>
      </body>
    </html>
  );
}
