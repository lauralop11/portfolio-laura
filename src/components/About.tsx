export default function Home({translation}) {
  return (
  <section id="about" className="m-10 md:w-[70%] md:mx-auto">
			<div className="flex flex-col md:flex-row justify-center items-center gap-2">
				<h2 className="text-2xl font-bold lg:text-4xl lg:w-[30%]">{translation.home.about}</h2>
				<p className="text-sm/7 md:text-base/7 text-center lg:w-[70%]">
					{translation.home.description}
				</p>
			</div>
	</section>
  );
}