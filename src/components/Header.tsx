import React, {useState} from 'react';

interface HeaderProps{
  title:string;
}

const Header : React.FC<HeaderProps> = ({title}) => 
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    console.log("menu state", isMenuOpen);
    
    setIsMenuOpen(!isMenuOpen);
    };
  return (
    <header className="overflow-hidden">
      <nav className="flex flex-wrap justify-between min-w-full">
        <div className="flex flex-row items-center">
          <span className="block w-[25px] h-[25px] bg-[#22668D] rounded-xl mr-1"></span>
          <a  href="./" className="text-xl font-bold mx-1 md:text-3xl">{title} 
          <span className="text-lg font-light self-end text-gray-600 pl-2">Dev</span></a>
        </div>
        {/* boton responsive menu */}
        <div className="flex md:hidden z-20 ">
          <button onClick={toggleMenu} id="hamburger" >
            <img className={`toggle ${isMenuOpen ? 'hidden' : 'block'} cursor-pointer transition duration-700 ease-in-out active:-rotate-90`} src="./assets/menu.svg" width="40" height="40" />
            <img className={`toggle ${isMenuOpen ? 'block' : 'hidden'} cursor-pointer transition duration-700 ease-in-out active:rotate-90`}  src="./assets/close.svg" width="40" height="40" />
            </button>
        </div>
        <div className={`${isMenuOpen ? 'w-full block bg-[#e1e3e3]' : 'w-[200%] hidden md:bg-none md:flex'}  z-10 size-full absolute -top-5 md:top-0 pt-15 md:pt-0 left-0 md:relative md:w-auto  text-center text-bold mt-5 md:mt-0  transition duration-700 ease-in-out`}>
          <a href="/portfolio-laura/curriculum" className="block md:inline-block hover:text-sky-700 px-3 py-3 hover:underline underline-offset-4 text-lg">
            Curriculum
          </a>
          <a href="/portfolio-laura/project" className="block md:inline-block hover:hover:text-sky-700 px-3 py-3 hover:underline underline-offset-4 text-lg">
            Projects
          </a>
          <a href="mailto:lauralop1595@gmail.com" className="block md:inline-block hover:hover:text-sky-700 px-3 py-3 hover:underline underline-offset-4 text-lg">
            Contact
          </a>
        </div>
      </nav>
    </header> 
  );
};

export default Header;