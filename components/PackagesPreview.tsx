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
    ],
  },
  {
    name: "Business",
    price: "al. 699 €",
    description:
      "Sobib ettevõttele, kes soovib professionaalsemat kohalolu ja rohkem sisu.",
    features: [
      "Kuni 5 lehte",
      "Tugevam struktuur",
      "SEO baas",
      "Galerii või referentsid",
    ],
  },
  {
    name: "Premium",
    price: "al. 999 €",
    description:
      "Sobib ettevõttele, kes soovib põhjalikumat ja rohkem kohandatud lahendust.",
    features: [
      "Rohkem sektsioone",
      "Kohandatud ülesehitus",
      "Tugevam brändiline tervik",
      "Põhjalikum viimistlus",
    ],
  },
];

export default function PackagesPreview() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Paketid
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Vali endale sobiv lahendus
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-3xl border border-neutral-200 bg-white p-8"
            >
              <p className="text-xl font-semibold">{pkg.name}</p>
              <p className="mt-3 text-2xl font-bold">{pkg.price}</p>
              <p className="mt-4 text-neutral-600">{pkg.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                {pkg.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                className="mt-8 inline-block rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Küsi pakkumist
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-neutral-500">
          Lõplik hind sõltub projekti sisust, lehtede arvust ja võimalikest
          erilahendustest.
        </p>
      </div>
    </section>
  );
}