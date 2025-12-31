import { useEffect, useState } from "react";
import { Theme } from "../context/ThemeContext";

interface Props{
  children: React.ReactNode
}
export const ThemeProvider = ({ children }:Props) => {
  const [theme, setTheme] = useState<Theme>(
    () => localStorage.getItem("theme") as Theme ?? "light"
  );

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  } 
  return(
    <Theme value={{handleTheme,theme}}>
        {children}
    </Theme>
  )
};
