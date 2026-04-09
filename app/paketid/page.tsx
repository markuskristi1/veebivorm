import Link from "next/link";

const packages = [
  {
    name: "Starter",
    price: "al. 399 €",
    description:
      "Sobib alustavale teenusettevõttele, kes vajab lihtsat ja usaldusväärset veebilehte.",
    features: [
      "1–3 lehte",
      "Kaasaegne disain",
      "Mobiilisõbralik vaade",
      "Kontaktvorm",
      "Sotsiaalmeedia ja kontaktid",
      "Põhisisu paigutus",
    ],
  },
  {
    name: "Business",
    price: "al. 699 €",
    description:
      "Sobib ettevõttele, kes soovib professionaalsemat kohalolu ja rohkem sisu.",
    features: [
      "Kuni 5 lehte",
      "Tugevam struktuur ja visuaal",
      "Teenuste sektsioonid",
      "Galerii või referentsid",
      "SEO baas",
      "Kontaktvorm ja CTA-d",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "al. 999 €",
    description:
      "Sobib ettevõttele, kes soovib põhjalikumat ja rohkem kohandatud lahendust.",
    features: [
      "Rohkem sektsioone ja alamlehti",
      "Kohandatud ülesehitus",
      "Tugevam brändiline tervik",
      "Põhjalikum viimistlus",
      "Lisasisu ja keerukam struktuur",
      "Personaalsem lahendus",
    ],
  },
];

const extras = [
  "Lisalehed",
  "Broneerimislingid",
  "Galerii",
  "Blogi",
  "Analüütika seadistus",
  "Hooldus ja sisumuudatused",
];

export default function PaketidPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Paketid
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Paketid ja kodulehe tegemise lahendused
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Veebivorm pakub lihtsaid ja selgeid veebilahendusi väikeettevõtetele.
            Siit leiad paketid, mis sobivad nii alustavale teenusettevõttele kui
            ka neile, kes soovivad tugevamat veebikohalolu.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`rounded-3xl border p-8 ${
                pkg.highlighted
                  ? "border-black bg-black text-white"
                  : "border-neutral-200 bg-white text-neutral-900"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-xl font-semibold ${
                      pkg.highlighted ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {pkg.name}
                  </p>
                  <p
                    className={`mt-3 text-2xl font-bold ${
                      pkg.highlighted ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {pkg.price}
                  </p>
                </div>

                {pkg.highlighted ? (
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                    Populaarne
                  </span>
                ) : null}
              </div>

              <p
                className={`mt-5 leading-7 ${
                  pkg.highlighted ? "text-neutral-300" : "text-neutral-600"
                }`}
              >
                {pkg.description}
              </p>

              <ul className="mt-8 space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm ${
                      pkg.highlighted ? "text-neutral-200" : "text-neutral-700"
                    }`}
                  >
                    • {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                className={`mt-8 inline-flex rounded-2xl px-5 py-3 text-sm font-medium transition ${
                  pkg.highlighted
                    ? "bg-white text-black hover:bg-neutral-100"
                    : "bg-black text-white hover:opacity-90"
                }`}
              >
                Küsi pakkumist
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-neutral-500">
          Lõplik hind sõltub projekti sisust, soovitud lehtede arvust ja
          võimalikest erilahendustest.
        </p>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Lisavõimalused
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Vajadusel saab lahendust laiendada
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Iga ettevõtte vajadused on erinevad. Kui sul on vaja rohkem
              lehti, spetsiifilisemat ülesehitust või lisafunktsioone, saab
              projekti vastavalt kohandada.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {extras.map((extra) => (
              <div
                key={extra}
                className="rounded-3xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-base font-medium text-neutral-900">
                  {extra}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-neutral-200 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Kuidas valida?
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                Milline pakett sobib sulle?
              </h2>

              <div className="mt-8 space-y-6 text-neutral-700">
                <div>
                  <p className="font-medium text-neutral-900">Starter</p>
                  <p className="mt-1 text-sm leading-7">
                    Sobib siis, kui vajad lihtsat esinduslehte ja tahad kiiresti
                    professionaalse veebikohalolu üles saada.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-neutral-900">Business</p>
                  <p className="mt-1 text-sm leading-7">
                    Sobib siis, kui soovid rohkem sisu, tugevamat struktuuri ja
                    professionaalsemat esitlust.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-neutral-900">Premium</p>
                  <p className="mt-1 text-sm leading-7">
                    Sobib siis, kui vajad rohkem kohandusi, lisalehti ja
                    detailsemalt viimistletud tulemust.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-black p-8 text-white">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                Järgmine samm
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                Küsi personaalset pakkumist
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-300">
                Kui sa ei ole kindel, milline pakett sulle sobib, kirjuta mulle.
                Vaatame koos sinu vajadused üle ja leiame kõige mõistlikuma
                lahenduse.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-100"
                >
                  Küsi pakkumist
                </Link>

                <Link
                  href="/kkk"
                  className="rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-900"
                >
                  Vaata KKK-d
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}