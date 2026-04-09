const points = [
  "Selge ja kaasaegne ülesehitus",
  "Mobiilisõbralik disain",
  "Hoolikalt teostatud lahendus",
  "Lihtne ja stressivaba protsess kliendile",
];

export default function WhyChooseUs() {
  return (
    <section className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Miks valida Veebivorm
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Mitte lihtsalt ilus veebileht — vaid toimiv lahendus
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Minu eesmärk ei ole teha lihtsalt ilusat lehte, vaid veebileht, mis
            töötab hästi ka päriselt. Pööran tähelepanu detailidele,
            kasutusmugavusele ja sellele, et leht jätaks usaldusväärse mulje nii
            arvutis kui mobiilis.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-3xl border border-neutral-200 p-6"
            >
              <p className="text-lg font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}