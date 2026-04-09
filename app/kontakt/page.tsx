"use client";

import { useState } from "react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Saatmine ebaõnnestus");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Kontakt
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Võta ühendust
        </h1>
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Kui sul on mõte uue veebilehe jaoks või soovid olemasolevat lehte
          uuendada, kirjuta mulle. Vaatame koos, milline lahendus sinu
          ettevõttele kõige paremini sobib.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_420px]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                Nimi
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Sinu nimi"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                E-post
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="nimi@ettevote.ee"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                Ettevõte
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Ettevõtte nimi"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                Millist lehte vajad?
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
              >
                <option value="">Vali sobiv variant</option>
                <option value="Starter pakett">Starter pakett</option>
                <option value="Business pakett">Business pakett</option>
                <option value="Premium pakett">Premium pakett</option>
                <option value="Olemasoleva lehe uuendamine">
                  Olemasoleva lehe uuendamine
                </option>
                <option value="Ma ei ole veel kindel">
                  Ma ei ole veel kindel
                </option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-neutral-800"
              >
                Sõnum
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Kirjelda lühidalt, millist veebilehte vajad."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 inline-flex rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Saadan..." : "Saada päring"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-sm text-green-600">
              Sõnum saadetud! Vastan sulle esimesel võimalusel.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm text-red-600">
              Midagi läks valesti. Proovi uuesti.
            </p>
          )}
        </form>

        <aside className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Kuidas edasi?
          </h2>

          <div className="mt-6 space-y-5 text-neutral-700">
            <div>
              <p className="font-medium text-neutral-900">1. Saadad päringu</p>
              <p className="mt-1 text-sm leading-7">
                Kirjeldad lühidalt, millist lehte sul vaja on.
              </p>
            </div>

            <div>
              <p className="font-medium text-neutral-900">
                2. Arutame vajadused läbi
              </p>
              <p className="mt-1 text-sm leading-7">
                Vaatame koos üle mahu, eesmärgid ja sobiva lahenduse.
              </p>
            </div>

            <div>
              <p className="font-medium text-neutral-900">
                3. Saad personaalse pakkumise
              </p>
              <p className="mt-1 text-sm leading-7">
                Kui pilt on selge, teen sulle konkreetse hinnapakkumise.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-neutral-200 pt-6">
            <p className="text-sm font-medium text-neutral-900">E-post</p>
            <p className="mt-2 text-sm text-neutral-600">
              kristimarkus@gmail.com
            </p>

            <p className="mt-6 text-sm font-medium text-neutral-900">
              Vastamise aeg
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Vastan üldjuhul 1–2 tööpäeva jooksul.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}