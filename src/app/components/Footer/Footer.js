import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-5 flex flex-col text-center">
      <h2 className="text-center">Kontakt:</h2>
      <a
        className="text-center underline mb-10"
        href="mailto:info@siyli-endurance-coaching.com"
      >
        info@siyli-endurance-coaching.com
      </a>
      <div className="flex justify-center gap-5 underline text-sm">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </div>
  );
};

export default Footer;
