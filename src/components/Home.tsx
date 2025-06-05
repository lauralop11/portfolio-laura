import Hexagono from "@components/Hexagono";

export default function Home({translation}) {
   const options = {
    fr: ["Curriculum", "Projets", "Contact"],
    en: ["Curriculum", "Projects", "Contact"],
    es: ["Curriculum", "Proyectos", "Contacto"],
  };
  const menuItems = options[translation.home.current] || options.fr;
  return (
  <section data-aos="fade-up" className="md:flex md:flex-row-reverse md:gap-10 items-center justify-baseline">
		<article className="md:w-[60%]">
			<div className="md:p-4">
				<h1 className="text-4xl font-bold md:text-8xl">{translation.home.greeting}</h1>
				<p className="my-3 text-sm/7 md:text-lg/7 ">
					{translation.home.description}
				</p>
			</div>
			<div className="flex flex-row justify-around my-5 items-center">
        {menuItems.map((item, index) => (
           <Hexagono
             key={index}
             ruta={index === 2 ? "mailto:lauralika1149@gmail.com":`/portfolio-laura/${translation.home.current}/${item.toLowerCase()}`}
             text={item}
             color={index === 0 ? "#FFCC70" : index === 1? "#FFFADD": "#8ECDDD"}
           />
        ))}
			</div>
		</article>
		<article className="mb-10">
			<div className="flex justify-center items-center mb-2 p-[2px 40px] rounded-full overflow-hidden bg-white w-[200px] h-[200px] md:w-[400px] md:h-[400px] m-auto shadow-lg">
				<img className="translate-[20px] scale-110 md:scale-150 md:translate-[50px]" src="/portfolio-laura/assets/memoji.png" alt="Laura" />
			</div>
		</article>
	</section>
  );
}