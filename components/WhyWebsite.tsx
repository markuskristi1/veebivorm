const problems = [
  "Klient ei leia kiiresti vajalikku infot",
  "Sinu teenused ei ole selgelt välja toodud",
  "Ettevõte ei mõju professionaalselt",
  "Mobiilis on lehte ebamugav kasutada",
  "Järgmine samm on kliendi jaoks ebaselge",
];

export default function WhyWebsite() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Miks see oluline on
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Kui sul puudub hea koduleht, kaotad usaldust ja päringuid
          </h2>

          <ul className="mt-8 space-y-4">
            {problems.map((problem) => (
              <li
                key={problem}
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-neutral-700"
              >
                {problem}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-8">
          <h3 className="text-2xl font-semibold tracking-tight">
            Mida Veebivorm aitab teha
          </h3>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Veebivorm aitab luua veebilehe, mis näeb puhas ja kaasaegne välja,
            töötab hästi ka mobiilis ning juhib kliendi selgelt järgmise
            sammuni — olgu selleks päringu saatmine, kõne broneerimine või
            teenusega tutvumine.
          </p>
        </div>
      </div>
    </section>
  );
}