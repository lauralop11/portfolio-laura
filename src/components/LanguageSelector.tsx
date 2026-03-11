export default function LanguageSelector() {
  const langs = [
    { code: "fr", label: "FR" },
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
  ];

  return (
    <article className="flex flex-row-reverse gap-2 p-4">
      {langs.map((lang) => (
        <a key={lang.code}
          href={`/portfolio-laura/${lang.code}/`}
          className=" border-1 px-4 py-1 rounded-2xl text-sm font-semibold hover:scale-108 text-[var(--color-ink-soft)] hover:bg-[var(--color-ink)] hover:text-[var(--color-warm-white)]"
        >
          {lang.label}
        </a>
      ))}
    </article>
  );
}
