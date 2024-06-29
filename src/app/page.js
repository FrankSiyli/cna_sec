"use client";

import Link from "next/link";
import CookieConsent from "./CookieConsent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <CookieConsent />
      <Header />

      <div className="mt-40 mb-20 text-center">
        <div className="shadow px-40 py-20 bg-appGrey/50 rounded mb-10">
          <h2 className="text-xl">
            <span className="text-appBlue ml-1">Trainingsplan</span>
            erstellung
          </h2>
          <br />
          <p>
            wöchentlicher Trainingsplan auf der professionellen Plattform von
            &nbsp;
            <Link
              className="target-link"
              target="_blank"
              href="https://www.trainingpeaks.com"
            >
              Trainingpeaks
            </Link>
          </p>
          <p>
            angepasst an dich und
            <span className="text-appBlue ml-1">dein Leben </span>
          </p>
          <p>
            <span className="text-appBlue ml-1">
              unbegrenzte Kontaktmöglichkeit{" "}
            </span>
          </p>
          <p>
            auf Wunsch
            <span className="text-appBlue ml-1">zyklusbasiertes Training </span>
          </p>
          <p>
            Unterstützung bei
            <span className="text-appBlue ml-1">
              Zielsetzungen, Materialauswahl und Ernährung{" "}
            </span>
          </p>
          <span className="text-appBlue ml-1">monatlich kündbar </span>

          <p>
            Schwimm-, Rad- und Laufeinheiten in abwechslungsreichen Intensitäten
            und Umfängen{" "}
          </p>
          <br />
          <Image
            className="mx-auto min-w-96 shadow rounded m-5"
            width={500}
            height={500}
            src="/trainingpeaks.png"
            alt="trainingpeaks"
          />

          <br />
          <span className="text-sm text-red-500">Currently no free slots</span>
          <p>für Triathlon-coaching </p>
          <p>
            <span className="text-sm text-appBlue"> inklusive Trainingpeaks Premium account </span>
          </p>
          <br />
          <span className="text-sm text-red-500">Currently no free slots</span>
          <p>für Einzelsport-coaching swim bike run</p>
          <p>
            <span className="text-sm text-appBlue"> inklusive Trainingpeaks Premium account </span>
          </p>
          <br />
        </div>

        <div className="shadow px-40 py-20 bg-appGrey/50 rounded mb-10">
          <div>
            <h2 className="text-xl">
              <span className="text-appBlue ml-1">Statische </span>
              Trainingspläne
            </h2>
            <br />
            <p>
              Falls dir ein statischer Plan ausreicht, schau gern in meiner App
              vorbei{" "}
            </p>

            <button className="border border-appBlue p-1.5 shadow m-5 rounded hover:scale-105 hover:shadow-xl transform transition-transform duration-100 ">
              <Link className="underline text-appBlue" target="_blank" href="https://siyli-app.vercel.app">
                siyli-app.de
              </Link>
            </button>
            <Image
              className="mx-auto shadow rounded m-5"
              width={300}
              height={300}
              src="/bike.png"
              alt="bike"
            />
          </div>
        </div>
        <div className="shadow px-40 py-20 bg-appGrey/50 rounded">
          <p>All training sessions are in german and english</p>
          <Image
            className="mx-auto shadow rounded m-5"
            width={100}
            height={100}
            src="/union.png"
            alt="english"
          />
          <p>if you have any questions let me know</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
