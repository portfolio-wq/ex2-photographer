import { Lato } from "next/font/google";
import "./globals.css";
import Topbare from "../components/Topbare";
import Footer from "../components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "gaijin",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main className="md:my-[10px] md:mx-auto md:p-[75px]">
          <Topbare />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
