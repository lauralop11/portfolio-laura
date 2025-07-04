import {ArrowRightCircleIcon} from '@heroicons/react/24/solid'

export default function Card ({img, description, link}){
  return(
    <div className="mx-5 flex flex-col items-center">
      <div className="w-[250px] h-[400px] flex flex-col justify-evenly bg-white/10 my-4 shadow-2xl rounded-lg">
        <div className="size-[200px] mx-auto">
          <img src={img} alt="photo" className="size-full rounded-lg" />
        </div>
        <p className="text-sm text-center">{description}</p>
        <a href={link} target="_blank" className="self-end mr-4">
          <ArrowRightCircleIcon className="size-10 fill-orange-400 "/>
        </a>
        
      </div>
    </div>
  )

}

