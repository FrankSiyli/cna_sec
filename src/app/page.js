"use client";

import Link from "next/link";
import CookieConsent from "./CookieConsent";
import Image from "next/image";
import LinkSvg from "@/app/components/buttons/svgCollection/LinkSvg";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <CookieConsent />
      <div className="mt-40 text-center">
        <section className="text-center  mb-20">
          <h1 className="text-2xl font-bold mb-6 leading-tight text-appDark">
            Triathlon Coaching für jedes Level
          </h1>
          <p>
            Ich bin Frank aus Hamburg und unterstütze seit 2017 Athletinnen und
            Athleten dabei, ihre Träume zu verwirklichen – von der ersten
            Sprintdistanz bis zum Ultra-Event
          </p>

          <div className="mt-12">
            <Image
              className="mx-auto shadow-xl rounded-xl"
              width={900}
              height={600}
              src="/theBrutal.png"
              alt="brutal triathlon"
            />
            <p className="text-xs mt-2"> Photographer: Kathi Harman</p>
          </div>
        </section>

        <div className="flex flex-col justify-center items-center my-40 text-center p-3">
          <p>Ich bin lizensierter</p>
          <Image
            className="m-2 rounded shadow"
            width={300}
            height={1}
            src="/dtu.png"
            alt="dtu"
          />
          <p>und</p>
          <Link
            className="m-2 rounded bg-appGrey shadow hover:shadow-md"
            target="_blank"
            href="https://www.trainingpeaks.com"
          >
            <Image
              className=""
              width={300}
              height={1}
              src="/trainingpeaks_logo.png"
              alt="trainingpeaks-logo"
            />
          </Link>
          Trainer
        </div>

        <div className="mb-10">
          <p>Als Athlet bin ich auf den Ultradistanzen zu Hause</p>
          <p>
            Diese Leidenschaft führte 2022 zu einem Finish beim
            <Link
              className="my-2 underline text-appBlue flex gap-2 justify-center"
              href="https://www.youtube.com/watch?v=hXKsAClUzMI"
              target="_blank"
            >
              DecaUK
              <LinkSvg />
            </Link>
          </p>

          <div className="my-20">
            <p>10x Langdistanz</p>
            <p>
              <span className="mx-1 text-appBlue">38km</span>Swim
              <span className="mx-1 text-appBlue">1800km</span>Bike
              <span className="mx-1 text-appBlue">422km</span>Run
            </p>
          </div>

          <Image
            className="mx-auto shadow rounded m-20"
            width={400}
            height={1}
            src="/deca.png"
            alt="deca uk"
          />

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

      <div className="my-20 text-center ">
        <div className="mb-20 text-center">
          <h2 className="mb-10 p-3 text-2xl">Trainingsplanerstellung</h2>

          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <span className="text-appBlue mr-1">#</span>Schwimm-, Rad- und
              Laufeinheiten{" "}
            </div>

            <div className="flex justify-center">
              <p>
                <span className="text-appBlue mr-1">#</span>

                <span className=" ml-1">
                  Zielsetzungen, Materialauswahl und Ernährung{" "}
                </span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              <p>
                <span className="text-appBlue mr-1">#</span>wöchentlicher
                Trainingsplan auf
              </p>
              <Link
                className="rounded ml-2 shadow hover:shadow-md"
                target="_blank"
                href="https://www.trainingpeaks.com"
              >
                <Image
                  width={120}
                  height={1}
                  src="/trainingpeaks_logo.png"
                  alt="trainingpeaks-logo"
                />
              </Link>
            </div>
            <div className="flex justify-center">
              <span className="text-appBlue mr-1">#</span> angepasst an dich und
              <span className=" ml-1">dein Leben </span>
            </div>
            <div className="flex justify-center">
              {" "}
              <span className="text-appBlue mr-1">#</span>regelmäßiger und
              unbegrenzter Austausch{" "}
            </div>
            <div className="flex justify-center">
              <span className="text-appBlue mr-1">#</span> auf Wunsch
              <span className=" ml-1">zyklusbasiertes Training </span>
            </div>

            <div className="flex justify-center">
              {" "}
              <span className="text-appBlue mr-1">#</span> monatlich kündbar{" "}
            </div>
          </div>

          <div className="my-10 text-xl">99€ pro Monat</div>

          <div className="flex flex-col gap-5 p-5 my-10 ">
            <p>Bei Interesse oder Fragen:</p>
            <a
              className="text-center underline text-appBlue w-80 mx-auto"
              href="mailto:info@siyli-endurance-coaching.com"
            >
              info@siyli-endurance-coaching.com
            </a>
          </div>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20  m-10">
          <div>
            <h2 className="flex flex-col gap-6 justify-center">
              Allgemeine Trainingspläne findest du in meiner App:
              <Link
                className="ml-2 text-appBlue underline flex justify-center gap-1"
                target="_blank"
                href="https://siyli-app.de"
              >
                www.siyli-app.de
                <LinkSvg />
              </Link>
            </h2>
          </div>

          <div className="">
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
        </section>
      </div>
    </main>
  );
}
