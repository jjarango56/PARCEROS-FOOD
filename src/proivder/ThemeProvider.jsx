import { useEffect, useState } from "react"
import { Theme } from "../context/ThemeContext";


export const ThemeProvider = ({children}) =>{
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'light');

  const handleTheme = () =>{
    setTheme((prev)=>(prev === 'light' ? 'dark' : 'light'));
  }

  useEffect(()=>{
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme",theme)
  },[theme])

  return(
    <Theme value={{handleTheme,theme}}>
      {children}
    </Theme>
  )
}