"use client";

import Link from "next/link";
import CookieConsent from "./CookieConsent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Image from "next/image";
import HashtagSvg from "./components/buttons/svgCollection/HashtagSvg";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2 ">
      <CookieConsent />
      <Header />

      <div className="mt-40 mb-20 text-center">
        <h2 className="text-xl mb-10">
          <span className="text-appBlue ml-1 font-semibold">Trainingsplan</span>
          erstellung
        </h2>
        <div className="max-w-xl mx-5 backdrop-blur-md backdropSafari rounded-xl mb-10 flex flex-col text-left gap-3">
          <div className="flex">
            <p>
            <span className="text-appBlue mr-1">#</span> wöchentlicher Trainingsplan auf der professionellen Plattform
              von{" "}
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
          <div className="flex">            <span className="text-appBlue mr-1">#</span>unbegrenzte
            Kontaktmöglichkeit{" "}
          </div>
          <div className="flex">
          <span className="text-appBlue mr-1">#</span> auf Wunsch
            <span className="text-appBlue ml-1">zyklusbasiertes Training </span>
          </div>
          <div className="flex">
            <p>
            <span className="text-appBlue mr-1">#</span> Unterstützung bei{" "}
              <span className="text-appBlue ml-1">
                Zielsetzungen, Materialauswahl und Ernährung{" "}
              </span>
            </p>
          </div>
          <div className="flex">            {" "}
            <span className="text-appBlue mr-1">#</span> monatlich kündbar{" "}
          </div>

          <div className="flex">
          <span className="text-appBlue mr-1">#</span>Schwimm-, Rad- und Laufeinheiten in abwechslungsreichen
            Intensitäten und Umfängen{" "}
          </div>
        </div>
        <div>
          <Image
            className="mx-auto min-w-96 shadow rounded m-5 w-auto"
            width={400}
            height={400}
            src="/trainingpeaks.png"
            alt="trainingpeaks"
          />

          <br />

          <div className="backdrop-blur-md backdropSafari rounded-xl mb-10">
            <span className=" text-red-500">ausgebucht</span>
            <p>Triathlon-coaching </p>
            <p>
              <span className="text-sm text-appBlue">
                {" "}
                inklusive Trainingpeaks Premium account{" "}
              </span>
            </p>
            <br />
          </div>

          <br />
        </div>

        <div className="backdrop-blur-md backdropSafari rounded-xl mb-10">
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

            <button className="border border-appBlue p-1.5 shadow-xl m-5 rounded hover:scale-105 transform transition-transform duration-100 ">
              <Link
                className="underline text-appBlue"
                target="_blank"
                href="https://siyli-app.vercel.app"
              >
                siyli-app.de
              </Link>
            </button>
            <Image
              className="mx-auto shadow rounded m-5 w-auto"
              width={300}
              height={300}
              src="/bike.png"
              alt="bike"
            />
          </div>
        </div>
        <div className="backdrop-blur-md backdropSafari rounded-xl mb-10">
          <p>All training sessions are in german and english</p>
          <Image
            className="mx-auto shadow rounded m-5 w-auto h-10"
            width={70}
            height={70}
            src="/union.png"
            alt="english"
          />
          <p>if you have any questions just let me know</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
