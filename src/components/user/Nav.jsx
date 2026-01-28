import { Theme } from "../../context/ThemeContext"
import { use } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Buttons } from "../ui/buttons/Buttons";
import { Open } from "../../context/openContext"
export const Nav = ()  =>{
  const {theme,handleTheme} = use(Theme);
  const {handleOpen} = use(Open);
  return(
    <header>
      <nav className="bg-bg-nav px-3 py-3 border-text-second border-b ">
      <div className="flex space-x-2 items-center">
        <Buttons onClick={handleOpen} content={ <FiAlignJustify/>} className="border border-text-second p-1 rounded-sm"/>
        <figure>
          <img src="./logo-white.svg" alt="Logo Git Hub" className="h-10"/>
        </figure>
        <h2 className="font-bold text-sm">Dashboard</h2>
      </div>
    </nav>
    </header>
   
  )
}