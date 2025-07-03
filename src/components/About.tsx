import Hexagono from "@components/Hexagono";

export default function Home({translation}) {
   const options = {
    fr: ["Curriculum", "Projets", "Contact"],
    en: ["Curriculum", "Projects", "Contact"],
    es: ["Curriculum", "Proyectos", "Contacto"],
  };
  const menuItems = options[translation.home.current] || options.fr;
  return (
  <section id="about" className="p-5 md:flex md:flex-row-reverse md:gap-10 items-center justify-baseline">
		<article className="md:w-[60%]">
			<div className="md:p-5">
				<h2 className="text-2xl font-bold md:text-2xl">{translation.home.about}</h2>
				<p className="my-3 text-sm/7 md:text-lg/7 text-center">
					{translation.home.description}
				</p>
			</div>
		</article>

	</section>
  );
}