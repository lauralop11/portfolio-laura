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
    <header>
      <nav className="flex flex-wrap justify-between min-w-full">
        <div className="flex flex-row items-center">
          <span className="block w-[25px] h-[25px] bg-[#22668D] rounded-xl mr-1"></span>
          <p className="text-xl font-bold mx-1 ">{title} 
          <span className="text-lg font-light self-end text-gray-600 pl-2">Dev</span></p>
        </div>
        {/* boton responsive menu */}
        <div className="flex md:hidden z-20 ">
          <button onClick={toggleMenu} id="hamburger" >
            <img className={`toggle ${isMenuOpen ? 'hidden' : 'block'} cursor-pointer transition duration-700 ease-in-out active:-rotate-90`} src="/assets/menu.svg" width="40" height="40" />
            <img className={`toggle ${isMenuOpen ? 'block' : 'hidden'} cursor-pointer transition duration-700 ease-in-out active:rotate-90`}  src="/assets/close.svg" width="40" height="40" />
            </button>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} size-full absolute -top-5 pt-9 left-0 md:relative md:w-auto md:flex md:text-right text-center text-bold mt-5 md:mt-0 transition-all duration-700 ease-in-out transform ${
            isMenuOpen ? ' translate-y-0 bg-[#e1e3e3]' : ' -translate-y-20 '
          }  md:bg-none md:translate-none z-10`}>
          <a href="#" className="block md:inline-block hover:text-sky-700 px-3 py-3 underline underline-offset-4 text-lg">
            Curriculum
          </a>
          <a href="#" className="block md:inline-block hover:hover:text-sky-700 px-3 py-3 underline underline-offset-4 text-lg">
            Projects
          </a>
          <a href="#" className="block md:inline-block hover:hover:text-sky-700 px-3 py-3 underline underline-offset-4 text-lg">
            Contact
          </a>
        </div>
      </nav>
    </header> 
  );
};

export default Header;