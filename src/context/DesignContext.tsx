import { createContext } from "react";
export type Design = true | false
export type DesignContextType = {
  open:Design;
  handleOpen: () => void;
};

export const Design = createContext<DesignContextType | null>(null);
