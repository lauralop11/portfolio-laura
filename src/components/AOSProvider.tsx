import React, { useEffect } from "react";
import type { ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
  children: ReactNode;
}

const AOSProvider: React.FC<AOSProviderProps> = ({ children }) => {
  useEffect(() => {
    console.log("hola mundoAOS");
    AOS.init({
      duration: 800, 
      once: false,  
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
