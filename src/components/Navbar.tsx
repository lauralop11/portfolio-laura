import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import LanguageSelector from "./LanguageSelector";

export default function Navbar({ title, translation}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <nav className="flex flex-wrap justify-between min-w-full px-4 overflow-hidden z-30 border-b-1 border-border-color">
    <section className="flex flex-row items-center">
      <a href={`/portfolio-laura/${translation.home.current}/`}
        className="font-bold mx-1 md:text-xl font-serif">
        {title} <span className="text-[var(--color-coral)]">.</span>
      </a>
    </section>
    <section className="hidden md:flex justify-center items-center gap-4">
      <div>
        <a href="#curriculum"
        className="block md:inline-block px-8 text-[var(--color-ink-mid)] font-semibold text-sm hover:text-[var(--color-coral)]"
        > {translation.curriculum.title}
        </a>
        <a href="#projects"
          className="block md:inline-block px-8 text-[var(--color-ink-mid)] font-semibold text-sm hover:text-[var(--color-coral)]"
        > {translation.projects.title}
        </a>
        <a href="#contact"
          className="block md:inline-block px-8 text-[var(--color-ink-mid)] font-semibold text-sm hover:text-[var(--color-coral)]"
        > {translation.contact.title}
        </a>
      </div>
    </section>
    <section>
      <LanguageSelector/>
    </section>
  </nav>
  );
};


