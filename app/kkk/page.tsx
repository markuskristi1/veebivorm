const faqs = [
  {
    question: "Kui kaua veebilehe tegemine aega võtab?",
    answer:
      "Lihtsamad veebilehed valmivad tavaliselt mõne päeva kuni paari nädala jooksul, sõltuvalt projekti mahust ja sellest, kui kiiresti vajalik sisu on olemas.",
  },
  {
    question: "Kas ma pean ise tekstid ja pildid andma?",
    answer:
      "Ideaalis jah, kuid saan aidata ka sisu struktuuri, tekstide paigutuse ja soovitustega. Vajadusel saame koos paika panna, mis infot lehele kindlasti vaja on.",
  },
  {
    question: "Kas leht töötab ka mobiilis?",
    answer:
      "Jah, kõik veebilehed on tehtud mobiilisõbralikult, et need näeksid head välja ja töötaksid hästi nii telefonis kui arvutis.",
  },
  {
    question: "Kas hiljem saab muudatusi teha?",
    answer:
      "Jah, soovi korral saab lehte täiendada, uuendada ja edasi arendada. Vajadusel saan aidata ka jooksvate muudatustega pärast valmimist.",
  },
  {
    question: "Kas aitad ka domeeni ja hostingu seadistamisega?",
    answer:
      "Jah, vajadusel aitan ka tehnilise poolega, et domeen, hosting ja veebileht saaksid korrektselt üles seatud.",
  },
  {
    question: "Kas saan ise hiljem lehe sisu muuta?",
    answer:
      "See sõltub valitud lahendusest. Vajadusel saan teha lehe nii, et lihtsamaid sisumuudatusi oleks mugav hiljem hallata.",
  },
  {
    question: "Kas pakud ka hooldust?",
    answer:
      "Jah, soovi korral saan aidata ka pärast lehe valmimist väiksemate muudatuste, uuenduste ja hooldusega.",
  },
  {
    question: "Kuidas tasumine käib?",
    answer:
      "Tasumine lepitakse kokku projekti alguses. Tavaliselt toimub see kokkulepitud etappide või projekti mahu alusel.",
  },
];

export default function KKKPage() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            KKK
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Korduma kippuvad küsimused
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Vastused levinumatele küsimustele veebilehe tegemise, protsessi ja
            tehnilise poole kohta.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-neutral-200 bg-white p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight">
                {faq.question}
              </h2>
              <p className="mt-4 leading-8 text-neutral-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Ei leidnud vastust?
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Küsi julgelt otse
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Kui sul on konkreetne küsimus oma projekti, hinna või tehnilise poole
            kohta, kirjuta mulle ja vaatame selle koos üle.
          </p>

          <a
            href="/kontakt"
            className="mt-8 inline-flex rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Võta ühendust
          </a>
        </div>
      </section>
    </main>
  );
}