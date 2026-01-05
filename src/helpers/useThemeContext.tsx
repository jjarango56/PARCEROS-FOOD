import { Theme } from "../context/ThemeContext";
import { use } from "react";
export const useThemeContext = () =>{
    const context = use(Theme);
    if (!context) throw("useTheme must be used within a ThemeProvider");
    return context;
}