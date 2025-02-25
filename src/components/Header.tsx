import React from 'react'

interface HeaderProps{
  title:string;
}
const Header : React.FC<HeaderProps> = ({title}) => {
  return(
    <header className="flex flex-row p-4 items-center">
      <span className="block w-[25px] h-[25px] bg-sky-700 rounded-xl"></span>
      <p className="text-3xl font-bold mx-3 ">{title} <p className="text-xl font-light self-end text-gray-600">Dev</p></p>
    </header>
  );
};
export default Header;