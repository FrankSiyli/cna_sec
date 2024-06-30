import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "./RecoilRootWrapper";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "siyli-endurance-coaching.com",
  description: "Triathlon coaching and more",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body className={`${inter.variable} font-sans bg-[url('/background.png')] bg-contain bg-fixed`}>
        {" "}
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
      <GoogleAnalytics gaId="G-5RYG7LTMTJ" />
    </html>
  );
}
