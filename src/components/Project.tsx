import Card from "@components/Card";
import { useRef } from "react";

export default function Project ({translation}) {
return (
  <section id="projects" className="p-10 mb-20">
    <h2 className="text-2xl font-bold text-[var(--color-coral)] mb-10">{translation.projects.title}</h2>
      <div className="flex flex-wrap gap-10 ">
        {translation.projects["items"].map((project, index) => (
           <Card key={index} img={project.img} description={project.description} link={project.link}/>
        ))
        }
      </div>
        
  </section>
  )
}
