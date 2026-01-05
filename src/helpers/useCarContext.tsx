import { use } from "react";
import { CarContext } from "../context/CarContext";

export const useCarContext = () => {
    const ctx = use(CarContext);
    if (!ctx) throw new Error("useDesign must be used within a DesignProvider");
    return ctx;
};
