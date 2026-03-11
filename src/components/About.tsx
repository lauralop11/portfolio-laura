export default function Home({translation}) {
	const items = [
		"CSS",
		"React",
		"Next.js",
		"JavaScript",
		"TypeScript",
	]
  return (
  <section id="about" className="p-10 flex flex-col md:flex-row gap-10 items-center">
			<article className="flex flex-col justify-center items-start gap-10 md:w-[80%] ">
				<h2 className="text-2xl font-bold text-[var(--color-coral)]">{translation.home.about}</h2>
				<p className="text-base/7 text-[var(--ink)]">
					{translation.home.description}
				</p>
			</article>
			<article className="flex flex-wrap justify-start">
					{items.map((item,index)=>
						<div key={index} className="p-3 w-46 rounded-lg grid place-items-center font-semibold m-4 border-1 border-[var(--color-ink-soft)] shadow-lg text-[var(--color-coral)] bg-[var(--color-warm-white)] ">{item}</div>
					)}
			</article>
	</section>
  );
}