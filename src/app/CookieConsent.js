import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(!hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setCookie("localConsent", "true", {});
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 bg-slate-900/70">
      <div className="fixed bottom-0 left-0 right-0 mx-auto flex max-w-5xl flex-col gap-5 rounded-t-3xl bg-white px-6 py-8 text-center shadow-2xl shadow-slate-950/20">
        <p className="text-sm text-slate-800">
          Diese Website verwendet Cookies von Drittanbietern. Für mehr Infos:{" "}
          <Link className="text-appBlue underline" href="/datenschutz">
            Datenschutz
          </Link>
        </p>
        <button
          className="mx-auto rounded-full bg-appBlue px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-appBlue/30 transition hover:bg-slate-900"
          onClick={acceptCookie}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
