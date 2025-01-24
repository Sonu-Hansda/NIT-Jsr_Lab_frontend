import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import { NewsProvider } from "@/contexts/NewsContext";
import Navbar from "@/components/Navbar/navbar";
import { MobileNavbar } from "@/components/MobileNavbar/mobileNavbar";
import Footer from "@/components/Footer/Footer";

const sans = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata = {
  title: "MVI Lab",
  description: "Machine Learning Vision Lab at NIT Jamshedpur",
};

export default function RootLayout({ children }) {
  return (
    <NewsProvider>
      <html lang="en">
        <body className={`${sans.className} bg-gray-50`}>
          <MobileNavbar />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </NewsProvider>
  );
}