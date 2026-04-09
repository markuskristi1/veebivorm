import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Võta ühendust
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Tahad oma ettevõttele professionaalset kodulehte?
        </h2>
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Kui soovid lihtsat, kaasaegset ja usaldusväärset veebilehte, kirjuta
          mulle ja vaatame koos, milline lahendus sulle kõige paremini sobib.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/kontakt"
            className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Küsi pakkumist
          </Link>

          <Link
            href="/paketid"
            className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
          >
            Vaata pakette
          </Link>
        </div>
      </div>
    </section>
  );
}