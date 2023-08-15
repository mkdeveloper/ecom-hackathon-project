import { Navbar, Footer } from "@/components/sections";
import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], style: "normal" });

export const metadata = {
  title: "Dine Market",
  description: "Ecommerce shopping App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
