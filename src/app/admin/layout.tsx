import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Kasuana Amin",
  description: "Building Africa's Grassroots Trade Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" antialiased">

        <div className="h-screen">{children}</div>
      </body>
    </html>
  );
}
