import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import "@styles-app/animation.css";

export default function Banner({ translation }) {
  const programmes = [
    "SASS",
    "Tailwind",
    "React",
    "NextJS",
    "Astro",
    "TypeScript",
    "GitHub",
    "SQL",
    "PostgreSQL",
  ];
  return (
    <section className="flex flex-col-reverse justify-center items-center md:flex-row p-10 gap-10">
      <article className="flex flex-col items-start gap-10 p-4">
        <div className="mt-10">
          <h1 className="text-5xl font-bold text-[var(--color-coral)]">
            {translation.home.greeting}
          </h1>
          <h3 className="text-5xl ">{translation.home.me}</h3>
          <h2 className="mt-5 text-base/8 w-[80%]">
            {translation.home.profession}
          </h2>
        </div>
        <div className="flex gap-4 mt-5">
          <a
            href={`/portfolio-laura/assets/docs/LauraLopez_${translation.home.current}.pdf`}
            download="CV_LauraLopez.pdf"
            className="py-3 px-5 shadow-[0_4px_16px_rgba(224,122,95,0.35)] rounded-full text-center font-semibold text-white bg-[var(--color-coral)] hover:scale-103 transition-transform duration-300"
          >
            {translation.curriculum.downloader}
          </a>
          <a
            href="mailto:lauralika1149@gmail.com"
            className="py-3 px-5 border-1 text-[var(--color-ink-soft)] rounded-full text-center font-semibold hover:bg-[var(--color-ink)] hover:text-white transition-colors duration-300 ease-in-out"
          >
            {translation.contact.title}
          </a>
        </div>
        <div>
          <ul className="flex flex-wrap gap-2 p-2 md:p-4">
            {programmes.map((programme)=>
              <li key={programme} className="border-1 p-2 text-[var(--color-ink-soft)] rounded-md bg-[var(--color-warm-white)]">{programme}</li>
            )}
          </ul>
        </div>
      </article>
      <article className="relative">
        <div className="circle relative overflow-hidden">
        </div>
        <div className="size-[180px] opacity-80 md:overflow-hidden absolute top-4 left-10">
          <img className="w-full rounded-bl-[30%] rounded-br-[30%] object-cover"
            src="/portfolio-laura/assets/img/profil.png"
            alt="Laura photo"
          />
        </div>
      </article>
    </section>
  );
}
