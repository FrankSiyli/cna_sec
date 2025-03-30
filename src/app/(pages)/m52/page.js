import Link from "next/link";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Head from "next/head";
import Image from "next/image";

const Page = () => {
  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const images = {
    Januar: ["m52_1.png", "m52_2.png", "m52_3.png"],
    Februar: ["m52_4.png", "m52_5.png", "m52_6.png"],
    März: ["m52_7.png", "m52_8.png", "m52_9.png"],
  };
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-between p-2">
        <Link href="/">
          <ArrowLeftSvg />
        </Link>
        <div className="mt-40 mb-20 text-center">
          <div className="backdrop-blur-md backdropSafari mb-10">
            <div>
              <h2 className=" bg-appGrey/30 p-3 mb-10 w-screen text-xl">
                M-52 Challenge
              </h2>

              <div className="backdrop-blur-md backdropSafari rounded-xl mb-10 text-center">
                <div className="text-appBlue">
                  <p className="mb-5">52 Marathondistanzen in 52 Wochen</p>
                  <p>42.195km laufen = 1 Punkt</p>
                  <p>200km radfahren = 1 Punkt</p>
                  <p>10km schwimmen = 1 Punkt</p>
                  <p className="mb-5">8848hm = 1 Punkt</p>
                </div>

                <p>Beispiele:</p>
                <p>42.195km laufen = 1 Punkt</p>
                <p>84.4km laufen = 2 Punkte</p>
                <p>126.6km laufen = 3 Punkte</p>
                <p>42.195km laufen mit 8848hm = 2 Punkte</p>
                <p>200km radfahren mit 8848hm = 2 Punkte</p>
                <p>20km schwimmen = 2 Punkte</p>
                <p>600km radfahren = 3 Punkte</p>
                <p className="mb-5">600km radfahren mit 8848hm = 4 Punkte</p>
                <p>
                  Die{" "}
                  <span className="text-red-600">
                    &quot;Marathon Langdistanz&quot;
                  </span>
                  : 10km swim/200km bike/42.195km run = 3 Punkte
                </p>
                <p className="mb-5">Unter 24h = 1 Extrapunkt</p>
                <p className="mb-5">Regeln:</p>
                <p>
                  Bei Einheiten unter 24h keine Pause länger als 30min und
                  maximal 3h Gesamtpausenzeit in 24h
                </p>
                <p>
                  Bei Einheiten länger als 24h keine Pause länger als 3h und
                  maximal 6h Gesamtpausenzeit in 24h
                </p>
              </div>

              <div className="bg-appGrey/30 p-3 mb-10">
                <h2 className=" ">
                  <span className="text-xl">
                    Counter: <span className="text-appBlue">8/52 </span>
                  </span>{" "}
                </h2>
                <p>
                  swim: <span className="text-appBlue">0</span> bike:{" "}
                  <span className="text-appBlue">1</span> run:{" "}
                  <span className="text-appBlue">7</span>
                </p>
              </div>

              {months.map((month) => (
                <div key={month} className="mb-10">
                  <h2 className=" bg-appGrey/30 p-3 mb-5">{month} 2025</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {images[month]?.map((img, i) => (
                      <Image
                        key={i}
                        className="mx-auto shadow rounded w-60"
                        width={200}
                        height={200}
                        src={`/challenge/${img}`}
                        alt="challenge"
                      />
                    ))}
                  </div>

                  {images[month]?.length > 0 && (
                    <p className="text-sm text-appDark scale-75">
                      www.strava.com
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
