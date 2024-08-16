import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "./RecoilRootWrapper";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Head from "next/head";

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
<<<<<<< HEAD
      <body className={`${inter.variable} font-sans`}>
=======
       <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" sizes="96x96" href="/favicon.ico" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <body className={`${inter.variable} font-sans bg-[url('/background.png')] bg-contain bg-fixed`}>
>>>>>>> f0756f9 (next config change)
      
        <RecoilRootWrapper><Header />{children}</RecoilRootWrapper>
        <Footer/>
      </body>
      <GoogleAnalytics gaId="G-5RYG7LTMTJ" />
    </html>
  );
}
