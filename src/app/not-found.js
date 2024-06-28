import React from "react";
import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center content-center text-center mx-auto w-screen h-screen">
        <Image
          priority
          src={logo}
          alt="logo"
          className="mx-auto"
          width={200}
          height={200}
        />
        <h2 className="my-10">uups... </h2>
        <p>
          <Link
            className="text-xl underline decoration-appDark underline-offset-2"
            href="/"
          >
            Startseite
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
