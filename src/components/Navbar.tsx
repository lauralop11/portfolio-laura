import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Navbar({ title, translation}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className="flex flex-wrap justify-between min-w-full px-4 overflow-hidden z-30">
        <div className="flex flex-row items-center">
          <a
            href={`/portfolio-laura/${translation.home.current}/`}
            className="text-xl font-bold mx-1 md:text-3xl"
          >
            {title}
          </a>
        </div>
        {/* boton responsive menu */}
        <div className="flex md:hidden z-20 text-white">
          <button onClick={toggleMenu}>
               <Bars3Icon className={`${isMenuOpen ? "hidden" : "block"} h-10 w-10  cursor-pointer transition duration-1000 easy-linear active:-rotate-90`}/>
               <XMarkIcon className={`${isMenuOpen ? "block" : "hidden"} h-10 w-10  cursor-pointer transition duration-1000 ease-linear active:-rotate-90`}/>
          </button>
        </div>
        <AnimatePresence initial={false}>
          {isMenuOpen ? (
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
              className="absolute top-0 left-0 bg-gray-300/80 size-full z-10" key="box" >
                <div className="flex flex-col justify-center content-center bg-gray-400 rounded-lg p-5 gap-4 w-[60%] h-[30%] m-auto mt-30">
                  <a href="#curriculum" onClick={toggleMenu}
                  className="block md:inline-block text-lg px-8  hover:border-b-2 border-orange-400 hover:scale-108 "
                  > {translation.curriculum.title}
                  </a>
                  <a href="#projects" onClick={toggleMenu}
                    className="block md:inline-block text-lg px-8 hover:border-b-2 border-orange-400 hover:scale-108 "
                  > {translation.projects.title}
                  </a>
                  <a href="#contact" onClick={toggleMenu}
                    className="block md:inline-block text-lg px-8 hover:border-b-2 border-orange-400 hover:scale-108 "
                  > {translation.contact.title}
                  </a>
                </div>
          </motion.div>
                ) : null}
        </AnimatePresence>
        <div className="hidden md:flex justify-end items-center gap-4">
           <a href="#curriculum"
            className="block md:inline-block text-lg px-8 hover:border-b-2 border-orange-400 hover:scale-108 "
            > {translation.curriculum.title}
            </a>
            <a href="#projects"
              className="block md:inline-block text-lg px-8 hover:border-b-2 border-orange-400 hover:scale-108 "
            > {translation.projects.title}
            </a>
            <a href="#contact"
              className="block md:inline-block text-lg px-8 hover:border-b-2 border-orange-400 hover:scale-108 "
            > {translation.contact.title}
            </a>
        </div>
      </nav>
  );
};


