export default function Project ({translation}) {
  return (
    <section className="mx-auto py-8 sm:py-12 lg:px-8">
      <h2 className="font-bold text-gray-900 text-3xl py-4">{translation.projects["title-projects"]}</h2>
        <ul  className="-mt-[70px] grid gap-4 sm:grid-cols-2 lg:grid-cols-5 w-full">
          {
            translation.projects["items-projects"].map((project, index) => (
            <li data-aos="fade-up" key={index}>
              <div className="md:flex md:flex-col justify-between md:h-[400px] overflow-hidden">
                <div>
                  <h3 className="text-lg text-gray-700">
                    {project.subtitle}
                  </h3>
                  {
                    index === 4 ? <a className="cursor-pointer my-4 text-sm text-[#22668D]" href="https://github.com/lauralop11?tab=repositories" target="_blank">{project.technologies}</a> :<p className="my-2 text-sm text-[#22668D]"> <span className="font-light">{project.technologies}</span>
                  </p>
                  }
                
                  <p className="text-sm font-light">{project.description}</p>
                </div>
                  <img
                    src={project.img}
                    alt=""
                    className="object-cover h-[150px] w-full sm:h-[250px]"
                  />
              </div>
            </li>
            ))
          }
        </ul>
    </section>
  )
}