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
              <h2 className=" bg-appGrey/30 p-3 mb-5">
                <span className="text-appBlue ml-1">Statische </span>
                Trainingspläne
              </h2>
             
              <p>
                Falls dir ein fertiger Plan ausreicht, schau gern in meiner App
                vorbei{" "}
              </p>

              <button className="bg-appBlue/80  text-appGrey border border-appGrey/50 p-1.5 shadow-xl m-10 rounded hover:text-black/50 transform transition-transform duration-500 ">
                <Link
                  className="underline"
                  target="_blank"
                  href="https://siyli-app.de"
                >
                  siyli-app.de
                </Link>
              </button>

              <img
                className="mx-auto shadow rounded m-10 w-auto mb-80"
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
