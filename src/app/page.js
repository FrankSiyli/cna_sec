"use client";

import Link from "next/link";
import CookieConsent from "./CookieConsent";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <CookieConsent />
      <div className="mt-40 mb-20 text-center">
        <h2 className="text-xl mb-10 bg-appGrey/30 p-3">
          <span className="text-appBlue ml-1 font-semibold">Trainingsplan</span>
          erstellung
        </h2>
        <div className="max-w-xl mx-5 backdrop-blur-md backdropSafari rounded-xl mb-10 flex flex-col text-left gap-3">
          <div className="flex">
            <p>
              <span className="text-appBlue mr-1">#</span>wöchentlicher
              Trainingsplan auf der professionellen Plattform von{" "}
              <Link
                className="underline text-appBlue"
                target="_blank"
                href="https://www.trainingpeaks.com"
              >
                Trainingpeaks
              </Link>
            </p>
            &nbsp;
          </div>
          <div className="flex">
            <span className="text-appBlue mr-1">#</span> angepasst an dich und
            <span className="text-appBlue ml-1">dein Leben </span>
          </div>
          <div className="flex">
            {" "}
            <span className="text-appBlue mr-1">#</span>unbegrenzte
            Kontaktmöglichkeit{" "}
          </div>
          <div className="flex">
            <span className="text-appBlue mr-1">#</span> auf Wunsch
            <span className="text-appBlue ml-1">zyklusbasiertes Training </span>
          </div>
          <div className="flex">
            <p>
              <span className="text-appBlue mr-1">#</span>Unterstützung bei{" "}
              <span className="text-appBlue ml-1">
                Zielsetzungen, Materialauswahl und Ernährung{" "}
              </span>
            </p>
          </div>
          <div className="flex">
            {" "}
            <span className="text-appBlue mr-1">#</span> monatlich kündbar{" "}
          </div>

          <div className="flex">
            <span className="text-appBlue mr-1">#</span>Schwimm-, Rad- und
            Laufeinheiten in abwechslungsreichen Intensitäten und Umfängen{" "}
          </div>
          <div className="flex">
            <span className="text-appBlue mr-1">#</span>
            inklusive Trainingpeaks Premium account{" "}
          </div>
        </div>
        <div className="bg-appGrey/30 rounded-xl mb-10 p-3">
          <span className=" text-red-500">ausgebucht</span>
          <p className="text-appBlue">Triathlon-coaching </p>
        </div>
        <div>
          <img
            className="mx-auto shadow rounded m-5"
            width={600}
            height={1}
            src="/trainingpeaks.png"
            alt="trainingpeaks"
          />
        </div>
        <div className="bg-appGrey/30 my-10 p-5">
          <p>All training sessions are in german and english</p>
          <img
            className="mx-auto shadow rounded m-5 w-auto h-10"
            width={70}
            height={70}
            src="/union.png"
            alt="english"
          />
          <p>if you have any questions just let me know</p>
        </div>
      </div>
    </main>
  );
}
