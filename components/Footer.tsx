export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-lg font-semibold">Veebivorm</p>
        <p className="mt-2 text-sm text-neutral-600">
          Kodulehed väikeettevõtetele
        </p>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-neutral-500">
          <p>info@veebivorm.ee</p>
          <p>veebivorm.ee</p>
        </div>
      </div>
    </footer>
  );
}