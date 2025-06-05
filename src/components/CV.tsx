export default function CV({translation}) {
  return (
    <section className="flex flex-col justify-center md:p-4 gap-4">
      <h2 className="text-2xl font-bold my-6 ">{translation.curriculum.title}</h2>
      <a href="/portfolio-laura/assets/Laura_lopez.pdf" download="CV_LauraLopez.pdf" className="btn-download flex gap-3 mb-5 font-semibold text-[#22668D] hover:text-[#FFCC70]">
      {translation.curriculum.downloader}
        <svg className="size-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
      </a>
      <article data-aos="fade-up" className="-mt-20 md:grid grid-cols-3">
        <h3 className="text-xl underline underline-offset-2  flex-wrap">{translation.curriculum["subtitle-experience"]}</h3>
        < div className="md:col-span-2">
          {
            translation.curriculum.experience.map((item)=>(
              <div>
                <h4 className="font-bold">{item.job}</h4>
                <h5>{item.place}</h5>
                <p className="mt-2 mb-5">{item["description-job"]}</p>
              </div>
            
            ))
          }
        </div>
      </article>
      <article data-aos="fade-up" className="md:grid grid-cols-3">
        <h3 className="text-xl underline underline-offset-2 flex-wrap">{translation.curriculum["subtitle-certificates"]}</h3>
        <ul className="md:col-span-2">
          {
            translation.curriculum.certificates.map((item)=>(
            <li className="py-1">{item}</li>
            ))
          }
        </ul>
      </article>  
      <article data-aos="fade-up" className="md:grid grid-cols-3">
        <h3 className="text-xl underline underline-offset-2 flex-wrap">{translation.curriculum["subtitle-degrees"]}</h3>
        <div>
          {
            translation.curriculum.degrees.map((item, index)=>(
              <div key={index}>
                <h5 className="mt-2 font-bold">{item.deegre}</h5>
                <h6 className="mb-4 text-sm">{item.college}</h6>
              </div>
            ))
          }
        </div>
      </article>
    </section>
  );
}