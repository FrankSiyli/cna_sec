import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-8 text-center text-slate-700">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
