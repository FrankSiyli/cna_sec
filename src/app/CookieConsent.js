import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-30">
      <div className="fixed bottom-0 left-0 right-0 flex flex-col gap-5 text-center justify-center px-4 py-8 bg-appGrey">
        <span className="text-appText text-base">
        Unsere Website verwendet Cookies von Drittanbietern. Lesen Sie mehr darüber, indem Sie unten auf der Seite auf Datenschutz klicken.        </span>
        <button className="mx-auto bg-appBlue py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;