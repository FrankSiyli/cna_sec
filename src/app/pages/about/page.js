"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-between p-2">
      <Header />
      <Link href="/">
        <ArrowLeftSvg />
      </Link>
      <div className="mt-40 mb-20 text-center">
      <div className="backdrop-blur-md backdropSafari rounded-xl mb-10">
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

          <Image
            className="rounded shadow mx-auto m-10 w-auto"
            width={400}
            height={400}
            src="/theBrutal.png"
            alt="brutal triathlon"
          />

          <p>
            Ich bin lizensierter
            <span className="text-appBlue mx-1">DTU</span>
            und
            <span className="text-appBlue mx-1">Trainingpeaks</span>
            Trainer
          </p>

          <div className="">
            <Image
              className="rounded m-5 mx-auto w-auto"
              width={150}
              height={1}
              src="/dtu.png"
              alt="dtu"
            />
            <Image
              className="rounded  mx-auto w-auto"
              width={200}
              height={1}
              src="/trainingpeaks_logo.png"
              alt="trainingpeaks-logo"
            />
          </div>
        </div>

        <div className="backdrop-blur-md backdropSafari rounded-xl mb-10">
          <p>
            Als Athlet fühle ich mich auf den
            <span className="text-appBlue ml-1">Ultradistanzen </span> zu Hause
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

          <Image
            className="rounded shadow mx-auto m-10 w-auto" 
            width={300}
            height={300}
            src="/deca.png"
            alt="deca uk"
          />

          <p>
            <span>10x Langdistanz</span>
          </p>
          <p>
            <span className="mx-1 text-appBlue">38km</span>Swim
            <span className="mx-1 text-appBlue">1800km</span>Bike
            <span className="mx-1 text-appBlue">422km</span>Run
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 m-10 gap-2 mx-auto">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
