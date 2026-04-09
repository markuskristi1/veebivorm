/* import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Veebivorm
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/paketid" className="text-sm text-neutral-700 hover:text-black">
            Paketid
          </Link>
          <Link href="/portfoolio" className="text-sm text-neutral-700 hover:text-black">
            Portfoolio
          </Link>
          <Link href="/kkk" className="text-sm text-neutral-700 hover:text-black">
            KKK
          </Link>
          <Link href="/kontakt" className="text-sm text-neutral-700 hover:text-black">
            Kontakt
          </Link>
        </nav>

        <Link
          href="/kontakt"
          className="rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Küsi pakkumist
        </Link>
      </div>
    </header>
  );
} */
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight"
          onClick={closeMenu}
        >
          Veebivorm
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/paketid"
            className="text-sm text-neutral-700 hover:text-black"
          >
            Paketid
          </Link>
          {/* <Link
            href="/portfoolio"
            className="text-sm text-neutral-700 hover:text-black"
          >
            Portfoolio
          </Link> */}
          <Link
            href="/kkk"
            className="text-sm text-neutral-700 hover:text-black"
          >
            KKK
          </Link>
          <Link
            href="/kontakt"
            className="text-sm text-neutral-700 hover:text-black"
          >
            Kontakt
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="hidden rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 md:inline-flex"
          >
            Küsi pakkumist
          </Link>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 p-2 text-neutral-900 md:hidden"
            aria-label="Ava menüü"
          >
            <span className="sr-only">Ava menüü</span>
            <div className="flex h-5 w-5 flex-col justify-between">
              <span className="block h-0.5 w-full rounded bg-black" />
              <span className="block h-0.5 w-full rounded bg-black" />
              <span className="block h-0.5 w-full rounded bg-black" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-6">
            <Link
              href="/paketid"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base text-neutral-800 hover:bg-neutral-50"
            >
              Paketid
            </Link>
            {/* <Link
              href="/portfoolio"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base text-neutral-800 hover:bg-neutral-50"
            >
              Portfoolio
            </Link> */}
            <Link
              href="/kkk"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base text-neutral-800 hover:bg-neutral-50"
            >
              KKK
            </Link>
            <Link
              href="/kontakt"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base text-neutral-800 hover:bg-neutral-50"
            >
              Kontakt
            </Link>

            <Link
              href="/kontakt"
              onClick={closeMenu}
              className="mt-4 inline-flex rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Küsi pakkumist
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}