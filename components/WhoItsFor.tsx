const items = [
  "Iluteenindajad",
  "Terapeudid",
  "Raamatupidajad",
  "Coachid ja koolitajad",
  "Fotograafid",
  "Muud teenusettevõtted",
];

export default function WhoItsFor() {
  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Kellele see sobib
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Lahendused väikeettevõtetele, kes pakuvad teenust
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Hea koduleht aitab jätta professionaalse esmamulje, tutvustada sinu
            teenuseid selgelt ja muuta ühenduse võtmise kliendi jaoks lihtsaks.
            Veebivorm sobib hästi ettevõtetele, kes soovivad lihtsat,
            kaasaegset ja usaldusväärset veebilehte.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-neutral-200 bg-white p-6"
            >
              <p className="text-lg font-medium text-neutral-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}