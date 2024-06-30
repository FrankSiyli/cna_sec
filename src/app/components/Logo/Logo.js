import { activeComponentState } from "@/app/recoil/atoms/activeComponentState";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

const Logo = () => {
  const [, setActiveComponent] = useRecoilState(activeComponentState);

  const handleLogoClick = () => {
    setActiveComponent("clickMenuResult");
  };

  return (
    <Link href="/">
    <Image
      className="w-auto h-24 fixed left-0 top-0 md:top-0 bg-appGrey/80"
      src="/logo.png"
      alt="logo"
      width={200}
      height={200}
      onClick={handleLogoClick}
      priority
    />
    </Link>
  );
};

export default Logo;
