import Link from "next/link";

const projects = [
  {
    title: "Iluteenindaja veebileht",
    category: "Iluteenindus",
    goal: "Luua puhas ja usaldusväärne veebileht teenuste tutvustamiseks ja päringute kogumiseks.",
    solution:
      "Kaasaegne avaleht, teenuste sektsioon, kontaktvorm ja mobiilisõbralik ülesehitus.",
    status: "Valmiv klienditöö",
  },
  {
    title: "Terapeudi demo veebileht",
    category: "Teraapia / heaolu",
    goal: "Luua rahulik ja professionaalne veebileht teenuse tutvustamiseks ning usalduse loomiseks.",
    solution:
      "Selge struktuur, teenuste plokid, usaldusväärne visuaal ja lihtne kontaktivõimalus.",
    status: "Demo projekt",
  },
  {
    title: "Raamatupidaja demo veebileht",
    category: "Raamatupidamine",
    goal: "Luua selge ja professionaalne veebileht, mis tutvustab teenuseid ja teeb ühenduse võtmise lihtsaks.",
    solution:
      "Teenuste sektsioonid, hinnastuse plokk, KKK ja kontaktvorm.",
    status: "Demo projekt",
  },
];

export default function PortfoolioPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Portfoolio
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Tööd ja näidislahendused
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Valik veebilehti ja näidislahendusi, mis on loodud
            väikeettevõtetele ja teenuspakkujatele.
          </p>
        </div>

        <div className="mt-14 grid gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-500">
                    {project.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h2>
                </div>

                <span className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600">
                  {project.status}
                </span>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-500">
                    Eesmärk
                  </p>
                  <p className="mt-3 leading-8 text-neutral-700">
                    {project.goal}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-500">
                    Lahendus
                  </p>
                  <p className="mt-3 leading-8 text-neutral-700">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-14 text-center">
                <p className="text-sm text-neutral-500">
                  Siia saad hiljem lisada projekti ekraanipildi või live lingi
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Järgmine projekt?
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Sinu ettevõtte veebileht võib olla järgmine
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Kui soovid oma teenusele kaasaegset ja professionaalset veebilehte,
            kirjuta mulle ja vaatame koos, milline lahendus sulle sobib.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Küsi pakkumist
            </Link>

            <Link
              href="/paketid"
              className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
            >
              Vaata pakette
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}