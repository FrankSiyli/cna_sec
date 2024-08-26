"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="flex flex-col items-center justify-between p-2">
        <Link href="/">
          <ArrowLeftSvg />
        </Link>
        <div className="mt-40 mb-20 text-center">
          <div className="backdrop-blur-md backdropSafari rounded-xl mb-10">
            <div className="bg-appGrey/30 p-3">
              <h2>
                <span className="text-xl text-appBlue">Moin</span>
              </h2>

              <p>Ich bin Frank aus Hamburg </p>
              <p>und unterstütze seit 2017 </p>
              <p>
                Athlet:innen dabei ihre
                <span className="text-appBlue ml-1">Träume </span>
                zu verwirklichen
              </p>
            </div>

            <div>
              <img
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
              <img
                className="m-2 rounded shadow"
                width={200}
                height={1}
                src="/dtu.png"
                alt="dtu"
              />
              <p>und</p>
              <img
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
              <p>
                Als Athlet fühle ich mich auf den
                <span className="text-appBlue ml-1">Ultradistanzen </span> zu
                Hause
              </p>
              <p>
                Diese Leidenschaft führte 2022 zu einem
                <span className="text-appBlue mx-1">Finish</span>
                beim
                <Link
                  className="mx-1 underline text-appBlue"
                  href="https://www.youtube.com/watch?v=hXKsAClUzMI"
                  target="_blank"
                >
                  DecaUK
                </Link>
              </p>
            </div>

            <img
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
              <img
                className="rounded min-w-[200px] w-auto mx-auto"
                width={296}
                height={425}
                src="/decaSwim.png"
                alt="deca uk"
              />
              <img
                className="rounded min-w-[200px] w-auto mx-auto"
                width={296}
                height={425}
                src="/decaBike.png"
                alt="deca uk"
              />
              <img
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
      </div>
    </>
  );
};

export default Page;
