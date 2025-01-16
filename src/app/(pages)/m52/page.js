import Link from "next/link";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Head from "next/head";

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
        <div className="mt-40 mb-20 text-center">
          <div className="backdrop-blur-md backdropSafari mb-10">
            <div>
              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">M-52 Challenge</h2>

              <div className="backdrop-blur-md backdropSafari rounded-xl mb-10 text-left">
               
               <div className="text-appBlue">
                <p className="mb-5 text-lg">52 Marathondistanzen in 52 Wochen</p>
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
                <p>Die <span className="text-red-600">&quot;Marathon Langdistanz&quot;</span>: 10km swim/200km bike/42.195km run = 3 Punkte</p>
                <p className="mb-5">Unter 24h = 1 Extrapunkt</p>
                <p className="mb-5">Regeln:</p>
                <p>Bei Einheiten unter 24h keine Pause länger als 30min und maximal 3h Gesamtpausenzeit in 24h</p>
                <p>Bei Einheiten länger als 24h keine Pause länger als 3h und maximal 6h Gesamtpausenzeit in 24h</p>
              </div>

              <h2 className="text-xl bg-appGrey/30 p-3 mb-10"><span className="text-appBlue">Counter:</span> swim: <span className="text-appBlue">0</span> bike: <span className="text-appBlue">1</span> run: <span className="text-appBlue">2</span></h2>

              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">Januar 2025</h2>
             
              <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-2 mx-auto">

              <img
                className="mx-auto shadow rounded m-5 w-80"
                width={300}
                height={300}
                src="/challenge/m52_1.png"
                alt="bike"
              />
              <img
                className="mx-auto shadow rounded m-5 w-80"
                width={300}
                height={300}
                src="/challenge/m52_2.png"
                alt="bike"
              />
              <img
                className="mx-auto shadow rounded m-5 w-80"
                width={300}
                height={300}
                src="/challenge/m52_3.png"
                alt="bike"
              />
              </div>

              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">Februar 2025</h2>
              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">März 2025</h2>
              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">April 2025</h2>
              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">Mai 2025</h2>
              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">Juni 2025</h2>
              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">Juli 2025</h2>
              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">August 2025</h2>
              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">September 2025</h2>
              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">Oktober 2025</h2>
              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">November 2025</h2>
              <h2 className="text-xl bg-appGrey/30 p-3 mb-10">Dezember 2025</h2>


              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
