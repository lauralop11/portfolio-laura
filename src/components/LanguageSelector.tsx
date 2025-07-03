export default function LanguageSelector () {
  const langs = [
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English',},
];

return(
  <div className="flex flex-row-reverse gap-2 p-4">
    {langs.map((lang) => (
      <a href={`/portfolio-laura/${lang.code}/`}
        className="bg-gray-300/20 px-4 py-1 rounded-lg text-sm font-semibold hover:scale-108 " >
        {lang.label}
      </a>
    ))} 
  </div>

  )
}




