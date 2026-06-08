"use client";

import Link from "next/link";
import CookieConsent from "./CookieConsent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <CookieConsent />

      <section className="relative min-h-screen bg-slate-950 text-white pb-20 pt-28">
        <div className="absolute inset-0 bg-[url('/background_2.png')] bg-cover bg-center opacity-10" />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/90" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:px-8">
          <div className="">


            
            <div className="mx-auto max-w-3xl space-y-10 text-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                  Dein persönlicher Trainingsplan.
                </h1>
                <p className="text-lg leading-8 text-slate-300/90">
                  Ich bin Frank aus Hamburg. Seit 2017 erstelle ich individuelle
                  Triathlonpläne, die deine Termine, Ziele und Lebenssituation
                  miteinander verbinden.
                  <br />
                  <br />
                  Dein Plan passt in deinen Alltag, bleibt flexibel und wird
                  kontinuierlich an dein aktuelles Training angepasst.
                </p>
              </div>
            
            </div>
          </div>

          <div className="grid gap-6 justify-items-center">
            <div className="space-y-6 justify-self-center max-w-xl">
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/25 mx-auto max-w-2xl">
                <div className="" />
                <div className="relative z-10 space-y-6">
                  <Image
                    src="/theBrutal.png"
                    width={1200}
                    height={800}
                    alt="Brutal triathlon"
                    className="rounded-3xl object-cover shadow-2xl"
                  />
                </div>
              </div>
              <div className="grid gap-6 justify-center">
               
                <div className="rounded-[2rem] bg-slate-950/95 p-6 text-slate-200 shadow-2xl shadow-slate-950/25 max-w-xl mx-auto">
                  <div className="mt-4 flex justify-center">
                    <Image
                      src="/dtu.png"
                      width={320}
                      height={128}
                      alt="DTU Trainer:in C"
                      className="h-auto w-64 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="space-y-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/40">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-appBlue">
                  Ultra Triathlon
                </p>
                <h3 className="text-3xl font-semibold text-slate-900">
                  10x Langdistanz – DECA UK finisher 2022
                </h3>

                <Link
                  href="https://www.youtube.com/watch?v=hXKsAClUzMI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-appBlue px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
                >
                  Deca UK Video ansehen
                </Link>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  { src: "/decaSwim.png", alt: "Swim" },
                  { src: "/decaBike.png", alt: "Bike" },
                  { src: "/decaRun.png", alt: "Run" },
                ].map((item) => (
                  <div
                    key={item.src}
                    className="overflow-hidden rounded-3xl bg-slate-100 min-h-[280px]"
                  >
                    <Image
                      src={item.src}
                      width={360}
                      height={480}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold uppercase tracking-[0.3em] text-appBlue">
              Leistungen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              Alle Trainingspläne werden mit{" "}
              <Link
                href="https://www.trainingpeaks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-appBlue underline"
              >
                TrainingPeaks
              </Link>{" "}
              erstellt und digital für dich sichtbar gemacht.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Individuelle Trainingsplanung",
                description:
                  "Wöchentliche Struktur für Schwimmen, Radfahren und Laufen – auf dich und deinen Alltag abgestimmt.",
              },
              {
                title: "Ernährung & Regeneration",
                description:
                  "Auf Wunsch zyklusbasiertes Training, Wettkampfvorbereitung und Erholungsstrategien.",
              },
              {
                title: "Persönlicher Austausch",
                description:
                  "Regelmäßiger Kontakt, Fortschrittsanalyse und Anpassung deines Plans.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-slate-950 text-white py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Preise
          </p>
          <h2 className="mt-4 text-3xl font-bold">99€ pro Monat</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Volle Trainingsplanung, individuelle Anpassungen, direkte Betreuung
            und Unterstützung für dein nächstes großes Ziel.
          </p>
          <a
            href="mailto:info@siyli-endurance-coaching.com"
            className="mt-10 inline-flex rounded-full bg-appBlue px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-appBlue/30 transition hover:bg-slate-900"
          >
            Jetzt Anfragen
          </a>
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-bold text-slate-900">Kontakt</h2>
                <p className="leading-7 text-slate-600">
                  Fragen, individuelle Wünsche oder direktes Coaching? Schreib
                  einfach eine Mail.
                </p>
                <a
                  href="mailto:info@siyli-endurance-coaching.com"
                  className="inline-flex rounded-full bg-appBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
                >
                  info@siyli-endurance-coaching.com
                </a>
              </div>
              <div className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-appBlue">
                  Sprachen
                </p>
                <p className="text-slate-700">Deutsch & Englisch</p>
                <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
                  <Image
                    src="/union.png"
                    width={64}
                    height={64}
                    alt="english"
                    className="rounded-full bg-slate-100 p-2"
                  />
                  <p className="text-slate-600">
                    Coaching in beiden Sprachen möglich.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
