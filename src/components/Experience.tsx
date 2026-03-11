import Certificat from "@components/Certificat";

export default function Experience({translation}) {

  return (
    <section id="curriculum" className="flex flex-col justify-center gap-10">
        <article className="p-10 bg-[var(--color-warm-white)]">
          <h3 className="text-2xl font-bold text-[var(--color-coral)]">{translation.curriculum["subtitle-experience"]}</h3>
          {translation.curriculum.experience.map((item, index)=>(
              <div key={index} className="flex flex-col gap-2 border-b-1 border-[var(--color-ink-soft)] py-5">
                <h4 className="font-bold text-[var(--color-ink)]">{item.job}</h4>
                <h5 className="text-[var(--color-coral)] text-sm">{item.place}</h5>
                <p className="text-base/7">{item["description-job"]}</p>
                <div className="flex gap-2 flex-wrap">
                  {item.tecno.map((tecno, index)=>(
                    <div key={index} className="text-sm text-[#7A9E87] bg-[#C8DDD0] px-2 py-1 rounded">{tecno}</div>
                  ))}
                </div>
              </div>
               ))
          }
      </article>
      <article className="bg-[var(--background)] p-10 flex flex-col gap-8">
        <h3 className="text-2xl font-bold text-[var(--color-coral)]">{translation.curriculum["subtitle-certificates"]}</h3>
        <Certificat/>
      </article>  
      <article className="p-10 flex flex-col gap-8">
        <h3 className="text-2xl font-bold text-[var(--color-coral)]">{translation.curriculum["subtitle-degrees"]}</h3>
        <div className="flex flex-col lg:flex-row gap-10">
          {translation.curriculum.degrees.map((item, index)=>(
              <div key={index} className="border-2 border-[var(--color-border)] rounded-lg p-5 bg-[var(--color-warm-white)]">
                <h5 className="mt-2 font-bold text-[var(--color-sage)]">{item.deegre}</h5>
                <h6 className="mb-4 text-sm">{item.college}</h6>
              </div>
            ))}
        </div>
      </article>
    </section>
  );
}