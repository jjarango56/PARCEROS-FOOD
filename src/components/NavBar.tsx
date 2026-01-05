
import { ButtonNav } from "./ui/ButtonNav";
import { useDesignContext } from "../helpers/useDesignContext";
import { Buttons } from "./ui/Buttons";
import { useThemeContext } from "../helpers/useThemeContext";
import { Links } from "./ui/Links";
 export type DefinitionProps = {
  title: string;
}
export const NavBar = ({ title }: DefinitionProps) => {
  const { open } = useDesignContext();
  const { handleTheme, theme } = useThemeContext();

  return (
 <header className="sticky top-0 z-50 flex flex-col items-center w-full transition-all duration-300 ease-in-out bg-bg-primary/80 backdrop-blur-md">
  <ButtonNav />
  {open && (
    <nav className="w-full max-w-full flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:px-10 h-auto md:h-20 shadow-xl bg-bg-ui/90 backdrop-blur-md transition-all animate-in fade-in zoom-in duration-200 border border-text-second/10">
      <h1 className="text-text-titles text-xl md:text-2xl font-bold whitespace-nowrap">
        {title}
      </h1>
      
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <Links
            ahref="/Introduction"
            content="Productos"
            style=""
          />
        <Buttons
          change={handleTheme}
          content={`Modo : ${theme}`}
          style="border rounded px-3 py-1 text-sm md:text-base whitespace-nowrap"
        />
      </div>
    </nav>
  )}
</header>)}
