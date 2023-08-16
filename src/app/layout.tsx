import { Navbar, Footer } from "@/components/sections";
import "./globals.css";
import { Sora } from "next/font/google";
import ReduxProvider from "@/components/utils/ReduxProvider";

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
    <ReduxProvider>
      <html lang="en">
        <body className={sora.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}
