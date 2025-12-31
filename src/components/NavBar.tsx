import { Links } from "./ui/Links";
import { ButtonNav } from "./ui/ButtonNav";
import { useDesignContext } from "../hooks/useDesignContext";
import { Buttons } from "./ui/Buttons";
import { useThemeContext } from "../hooks/useThemeContext";
interface DefinitionProps {
  title: string;
}
export const NavBar = ({ title }: DefinitionProps) => {
  const {open} = useDesignContext();
  const {handleTheme,theme} = useThemeContext();
  return (
    <header className="flex flex-col items-center  text-text-primary">
      <ButtonNav />
      {open && (
        <nav className=" w-90 text-text-primary" >
          <h1 className="">{title}</h1>
          <Links />
          <Buttons
          change={handleTheme}
          content={`Modo : ${theme}`}
          />
        </nav>
      )}
    </header>
  );
};
