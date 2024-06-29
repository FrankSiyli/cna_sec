import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-28 flex flex-col text-center bg-appGrey/50">
    <h2 className="text-xl text-center">Kontakt:</h2>
            <a className="text-center underline mb-10" href="mailto:info@siyli-endurance-coaching.com">
            info@siyli-endurance-coaching.com
            </a>
    <div className="flex justify-center gap-5 text-appBlue underline">
      <Link href="../pages/impressum">Impressum</Link>
      <Link href="../pages/datenschutz">Datenschutz</Link>
      <Link href="mailto:info@siyli-endurance-coaching.com">Email</Link>
    </div>
    </div>
  );
};

export default Footer;
