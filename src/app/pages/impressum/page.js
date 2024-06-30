"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between">
    <Header/>
      <Link href="/">
        <ArrowLeftSvg />
      </Link>
      <div className="mt-48 px-10 backdrop-blur-md backdropSafari rounded-xl mb-10">
         <h2 className="mb-20 text-2xl">Impressum</h2>

        <h2>Angaben gemäß § 5 TMG:</h2>
        <p>Frank Siyli</p>
          <p>Siyli endurance coaching</p>
          <p>Vogt Groth Weg 45a</p>
          <p>22609 Hamburg</p>
          <p>E-Mail: info@siyli-endurance-coaching.com</p>
          <p>
            USt. wird nicht ausgewiesen, da der Verkäufer/ die Verkäuferin
            Kleinunternehmer:in im Sinne des UStG ist.
          </p>
          <p>
            Plattform der EU-Kommission zur Online-Streitbeilegung:
            https://ec.europa.eu/odr
          </p>
          <p>
            Ich bin zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
          </p>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
