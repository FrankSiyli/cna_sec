import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "./RecoilRootWrapper";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "siyli-endurance-coaching.com",
  url: "siyli-endurance-coaching.com",
  description: "Triathlon coaching and more",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body className={`${inter.variable} font-sans bg-[url('/background.png')] bg-contain bg-fixed`}>
      
        <RecoilRootWrapper><Header />{children}</RecoilRootWrapper>
        <Footer/>
      </body>
      <GoogleAnalytics gaId="G-5RYG7LTMTJ" />
    </html>
  );
}
