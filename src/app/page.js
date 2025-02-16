"use client";

import Link from "next/link";
import CookieConsent from "./CookieConsent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <CookieConsent />
      <div className="mt-40 mb-20 text-center">
        <div className="backdrop-blur-md backdropSafari rounded-xl mb-10">
          <div className="bg-appGrey/30 w-screen p-3">
            <h2>
              <span className="text-xl">Moin</span>
            </h2>

            <p className="mt-5">
              Ich bin Frank aus Hamburg und unterstütze seit 2017 Athletinnen
              und Athleten dabei ihre Träume
            </p>

            <p>
              von der ersten Sprintdistanz über die Langdistanz bis hin zu
              Ultra-events zu verwirklichen
            </p>
          </div>

          <div>
            <Image
              className="mx-auto shadow rounded mt-10"
              width={600}
              height={1}
              src="/theBrutal.png"
              alt="brutal triathlon"
            />
            <p className="text-sm text-appDark scale-75">
              www.klickchickphotography.com
            </p>
          </div>

          <div className="flex flex-col justify-center items-center my-10 text-center bg-appGrey/30 p-3">
            <p>Ich bin lizensierter</p>
            <Image
              className="m-2 rounded shadow"
              width={200}
              height={1}
              src="/dtu.png"
              alt="dtu"
            />
            <p>und</p>
            <Image
              className="m-2 rounded shadow"
              width={200}
              height={1}
              src="/trainingpeaks_logo.png"
              alt="trainingpeaks-logo"
            />
            Trainer
          </div>
        </div>

        <div className="backdrop-blur-md backdropSafari rounded-xl mb-10">
          <div className="bg-appGrey/30 p-3">
            <p>Als Athlet fühle ich mich auf den Ultradistanzen zu Hause</p>
            <p>
              Diese Leidenschaft führte 2022 zu einem Finish beim
              <Link
                className="mx-1 underline text-appBlue"
                href="https://www.youtube.com/watch?v=hXKsAClUzMI"
                target="_blank"
              >
                DecaUK
              </Link>
            </p>
          </div>

          <Image
            className="mx-auto shadow rounded m-10"
            width={400}
            height={1}
            src="/deca.png"
            alt="deca uk"
          />
          <div className="bg-appGrey/30 p-3">
            <p>10x Langdistanz</p>
            <p>
              <span className="mx-1 text-appBlue">38km</span>Swim
              <span className="mx-1 text-appBlue">1800km</span>Bike
              <span className="mx-1 text-appBlue">422km</span>Run
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-2 mx-auto">
            <Image
              className="rounded min-w-[200px] w-auto mx-auto"
              width={296}
              height={425}
              src="/decaSwim.png"
              alt="deca uk"
            />
            <Image
              className="rounded min-w-[200px] w-auto mx-auto"
              width={296}
              height={425}
              src="/decaBike.png"
              alt="deca uk"
            />
            <Image
              className="rounded min-w-[200px] w-auto mx-auto"
              width={296}
              height={425}
              src="/decaRun.png"
              alt="deca uk"
            />
          </div>
          <p className="text-sm text-appDark scale-75">www.strava.com</p>
        </div>
      </div>
    </main>
  );
}
