import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-end gap-5 text-appBlue underline">
      <Link href="../pages/impressum">Impressum</Link>
      <Link href="../pages/datenschutz">Datenschutz</Link>
      <Link href="mailto:info@siyli-endurance-coaching.com">Email</Link>
    </div>
  );
};

export default Footer;
