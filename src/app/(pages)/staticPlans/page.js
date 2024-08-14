import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-2">
       <Link href="/">
        <ArrowLeftSvg />
      </Link>
      <div className="mt-40 mb-20 text-center">
        <div className="backdrop-blur-md backdropSafari mb-10">
          <div>
            <h2 className="text-xl bg-appGrey/30 p-3">
              <span className="text-appBlue ml-1">Statische </span>
              Trainingspläne
            </h2>
            <button className="bg-appBlue  text-appGrey border border-appGrey/50 p-1.5 shadow-xl m-10 rounded hover:text-black transform transition-transform duration-500 ">
              <Link
                className="underline"
                target="_blank"
                href="https://siyli-app.de"
              >
                siyli-app.de
              </Link>
            </button>
            <p>
              Falls dir ein fertiger Plan ausreicht, schau gern in meiner App
              vorbei{" "}
            </p>

            <Image
              className="mx-auto shadow rounded m-10 w-auto mb-80"
              width={300}
              height={300}
              src="/bike.png"
              alt="bike"
            />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
