import Certificat from "@components/Certificat";

export default function Experience({translation}) {
  return (
    <section id="curriculum" className="flex flex-col justify-center gap-4 m-5">
      <article className="flex flex-col md:flex-row-reverse justify-between items-center gap-2 lg:w-[70%] md:mx-auto md:mt-20">
        <h3 className="text-2xl lg:text-4xl font-bold my-6 text-center lg:w-[30%]">{translation.curriculum["subtitle-experience"]}</h3>
        < div className="lg:w-[60%] mx-5">
          {translation.curriculum.experience.map((item)=>(
              <div>
                <h4 className="font-bold text-orange-400 text-lg md:text-xl">{item.job}</h4>
                <h5>{item.place}</h5>
                <p className="mt-2 mb-5 ml-6 text-sm/7 lg:text-base">{item["description-job"]}</p>
              </div>
               ))
          }
        </div>
      </article>
      <article className="w-full">
        <h3 className="text-2xl font-bold my-6 text-center lg:text-4xl">{translation.curriculum["subtitle-certificates"]}</h3>
        <Certificat/>
      </article>  
      <article className="md:flex justify-between items-center lg:w-[70%] md:mx-auto gap-2 mt-5">
        <h3 className="text-2xl font-bold my-6 text-center lg:text-4xl lg:w-[30%]">{translation.curriculum["subtitle-degrees"]}</h3>
        <div className="lg:w-[50%]">
          {
            translation.curriculum.degrees.map((item, index)=>(
              <div key={index}>
                <h5 className="mt-2 font-bold text-orange-400">{item.deegre}</h5>
                <h6 className="mb-4 text-sm">{item.college}</h6>
              </div>
            ))
          }
        </div>
      </article>
    </section>
  );
}