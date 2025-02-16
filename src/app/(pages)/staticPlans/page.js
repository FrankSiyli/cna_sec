import Link from "next/link";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Head from "next/head";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-between p-2">
        <Link href="/">
          <ArrowLeftSvg />
        </Link>
        <div className="mt-5 mb-20 text-center w-screen">
          <div className="mt-40 mb-20 text-center">
            <h2 className="mb-10 bg-appGrey/30 p-3 text-xl">
              Trainingsplanerstellung
            </h2>

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

              <div className="flex justify-center">
                <p>
                  <span className="text-appBlue mr-1">#</span>wöchentlicher
                  Trainingsplan auf
                  <Link
                    className="underline  ml-1"
                    target="_blank"
                    href="https://www.trainingpeaks.com"
                  >
                    Trainingpeaks
                  </Link>
                </p>
                &nbsp;
              </div>
              <div className="flex justify-center">
                <span className="text-appBlue mr-1">#</span> angepasst an dich
                und
                <span className=" ml-1">dein Leben </span>
              </div>
              <div className="flex justify-center">
                {" "}
                <span className="text-appBlue mr-1">#</span>regelmäßiger
                Austausch{" "}
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

            <div className="flex flex-col gap-5 p-5 my-10  bg-appGrey/30 rounded">
              <p>Bei Interesse oder Fragen:</p>
              <a
                className="text-center underline text-appBlue"
                href="mailto:info@siyli-endurance-coaching.com"
              >
                info@siyli-endurance-coaching.com
              </a>
            </div>

            <div>
              <Image
                className="mx-auto shadow rounded m-5"
                width={600}
                height={1}
                src="/trainingpeaks.png"
                alt="trainingpeaks"
              />
            </div>
            <div className=" my-10 p-5">
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

          <div className="backdrop-blur-md backdropSafari mb-10">
            <div>
              <h2 className=" bg-appGrey/30 p-3 mb-5">
                Allgemeine Trainingspläne findest du in meiner App:
              </h2>
              <button className="ml-2 hover:text-black/50  ">
                <Link
                  className="underline underline-offset-2 text-appBlue"
                  target="_blank"
                  href="https://siyli-app.de"
                >
                  siyli-app.de
                </Link>
              </button>
              <Image
                className="mx-auto shadow rounded m-5 w-auto"
                width={300}
                height={300}
                src="/siyli_app.png"
                alt="bike"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
