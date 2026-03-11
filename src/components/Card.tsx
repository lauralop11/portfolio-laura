import {ArrowRightCircleIcon} from '@heroicons/react/24/solid'

export default function Card ({img, description, link}){
  return(
    <div className="w-[300px] h-[350px] flex flex-col bg-[var(--color-warm-white)] justify-between rounded-lg border-2 border-[var(--color-border)] hover:shadow-xl hover:translate-y-[-5px] transition duration-300">
      <img src={img} alt="photo" className="w-full h-1/2 rounded-t-lg" />
      <p className="text-sm text-center mt-4">{description}</p>
      <a href={link} target="_blank" className="self-end mr-4"> 
        <ArrowRightCircleIcon className="size-10 fill-[var(--color-sage)] "/>
      </a>
    </div>
  )

}

