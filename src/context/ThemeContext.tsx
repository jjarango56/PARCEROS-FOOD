import { createContext } from "react";

export type Theme = 'light' | "dark"
export type ThemeContext = {
    theme:Theme
    handleTheme:() => void
}

export const Theme = createContext<ThemeContext| null>(null);