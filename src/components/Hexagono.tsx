import React from 'react';
import "../styles/global.css";

interface HexagonoProps{
  ruta:string
  text:string;
  color:string;
}
const Hexagono: React.FC<HexagonoProps> = ({ruta,text,color
 }) => {
  return(
    <a href={ruta} className={` hexagono flex items-center justify-center size-[100px] md:size-[200px] mr-1 font-semibold transition-all  hover:scale-110`} style={{ backgroundColor: color }}>
      <span className="md:text-xl">{text}</span>
    </a>
  )
}
export default Hexagono;