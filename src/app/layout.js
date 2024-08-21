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
  url: "https://siyli-endurance-coaching.com",
  description: "Triathlon coaching and more",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
       <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />{" "}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <body className={`${inter.variable} font-sans bg-[url('/background.png')] bg-contain bg-fixed`}>
      
        <RecoilRootWrapper><Header />{children}</RecoilRootWrapper>
        <Footer/>
      </body>
      <GoogleAnalytics gaId="G-5RYG7LTMTJ" />
    </html>
  );
}
