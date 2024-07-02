import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center content-center text-center mx-auto w-screen h-screen">
        <Image
          src="/logo.png"
          alt="logo"
          className="mx-auto w-auto"
          width={200}
          height={200}
        />
        <h2 className="my-10">uups... </h2>
        <p>
          <Link
            className="text-appBlue text-xl underline underline-offset-2"
            href="/"
          >
           Hier gehts zur Startseite
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
