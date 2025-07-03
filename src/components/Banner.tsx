export default function Banner ({translation}){

return (
  <section className="flex flex-col justify-center items-center md:mt-10">
    <article className="flex flex-col md:flex-row justify-center items-center md:justify-around md:w-full md:px-10">
      <div className="flex flex-col justify-center items-center mt-5 mb-6">
        <h1 className="text-2xl font-bold md:text-4xl">{translation.home.greeting}</h1>
        <h3 className="text-xl md:text-2xl border-b-2 border-b-orange-400">{translation.home.me}</h3>
        <h2 className="text-2xl font-bold md:text-6xl">{translation.home.profession}</h2>
      </div>
      <div className="size-[200px] md:size-[300px] relative opacity-80 md:overflow-hidden">
        <div className="size-full rounded-full border-20 border-orange-400">
        </div>
      <img className="absolute top-0 left-0 scale-105 md:scale-110" src="/portfolio-laura/assets/img/profil.png" alt="Laura photo" />
      </div>
    </article>
    <ul className="flex flex-wrap justify-around items-center gap-2 p-2 md:p-4 md:text-base bg-gray-500/30 text-sm text-gray-400 w-full">
      <li>HTML5</li>
      <li>JS</li>
      <li>CSS</li>
      <li>SASS</li>
      <li>Bootstrap</li>
      <li>Tailwind</li>
      <li>React</li>
      <li>NextJS</li>
      <li>Astro</li>
      <li>TypeScript</li>
      <li>Git</li>
      <li>GitHub</li>
      <li>SQL</li>
      <li>PostgreSQL</li>
    </ul>
  </section>

)
}