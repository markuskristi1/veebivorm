import Link from "next/link";
import WhoItsFor from "@/components/WhoItsFor";
import WhyWebsite from "@/components/WhyWebsite";
import WhyChooseUs from "@/components/WhyChooseUs";
import PackagesPreview from "@/components/PackagesPreview";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Veebivorm
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Kodulehed väikeettevõtetele, mis näevad professionaalsed välja ja
          toovad päringuid
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Teen kaasaegseid ja mobiilisõbralikke veebilehti teenusettevõtetele —
          näiteks iluteenindajatele, terapeutidele, raamatupidajatele ja
          teistele väikeettevõtetele.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
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

        <div className="mt-12 flex flex-wrap gap-3 text-sm text-neutral-600">
          <span className="rounded-full border border-neutral-200 px-4 py-2">
            Mobiilisõbralik
          </span>
          <span className="rounded-full border border-neutral-200 px-4 py-2">
            Kaasaegne disain
          </span>
          <span className="rounded-full border border-neutral-200 px-4 py-2">
            Selge struktuur
          </span>
          <span className="rounded-full border border-neutral-200 px-4 py-2">
            Hoolikalt teostatud
          </span>
        </div>
      </section>

      <WhoItsFor />
      <WhyWebsite />
      <WhyChooseUs />
      <PackagesPreview />
      <FinalCTA />
    </main>
  );
}