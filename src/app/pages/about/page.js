"use client";
import React from "react";
import ArrowLeftSvg from "../../components/buttons/svgCollection/ArrowLeftSvg";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-2">
      <Header />
      <Link href="/">
        <ArrowLeftSvg />
      </Link>
      <div className="mt-40 mb-20 text-center">
        <div className="shadow p-10 bg-appGrey/50 rounded mb-10">
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
            className="rounded shadow mx-auto m-10"
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

          <div className="flex justify-center my-10">
            <Image
              className="rounded  mx-auto"
              width={150}
              height={1}
              src="/dtu.png"
              alt="dtu"
            />
            <Image
              className="rounded  mx-auto"
              width={200}
              height={1}
              src="/trainingpeaks_logo.png"
              alt="trainingpeaks-logo"
            />
          </div>
        </div>

        <div className="shadow p-10 bg-appGrey/50 rounded mb-10">
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
            className="rounded shadow mx-auto m-10"
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

          <div className="flex gap-2 flex-wrap">
            <Image
              className="rounded mx-auto m-10"
              width={500}
              height={0}
              src="/decaStats.png"
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
