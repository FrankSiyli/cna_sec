import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "./RecoilRootWrapper";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: "siyli-endurance-coaching.com",
  description: "Triathlon coaching and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-mono`}>
        {" "}
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
