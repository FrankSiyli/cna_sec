"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/#" className="flex items-center gap-3">
          <Image
            src="/logoDark.png"
            width={48}
            height={48}
            alt="Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-appBlue">
              Siyli Endurance
            </p>
            <p className="text-xs text-slate-500">Triathlon Coaching</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/#services"
            className="text-sm font-medium text-slate-700 hover:text-appBlue"
          >
            Leistungen
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-slate-700 hover:text-appBlue"
          >
            Über mich
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-slate-700 hover:text-appBlue"
          >
            Preise
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-appBlue">
            Kontakt
          </Link>
        </nav>

        <Link
          href="mailto:info@siyli-endurance-coaching.com"
          className="rounded-full border border-appBlue bg-appBlue px-4 py-2 text-sm font-semibold text-white transition hover:bg-appDark"
        >
          Anfrage
        </Link>
      </div>
    </header>
  );
}
