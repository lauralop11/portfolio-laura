export default function LanguageSelector () {
  const langs = [
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English',},
];

return(
    <div className="flex flex-row-reverse gap-2">
    {langs.map((lang) => (
      <a href={`${lang.code !== 'fr' ? `/portfolio-laura/${lang.code}` : "/portfolio-laura/"}`}
        className="px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 hover:text-white text-gray-700" >
        {lang.label}
      </a>
    ))} 
  </div>

  )
}




