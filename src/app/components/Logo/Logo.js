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
      className="w-auto h-16 md:h-20 fixed left-2 top-4 md:top-2"
      src="/logo.png"
      alt="logo"
      width={200}
      height={200}
      onClick={handleLogoClick}
    />
    </Link>
  );
};

export default Logo;
