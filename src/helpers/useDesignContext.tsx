import { use } from "react";
import { Design } from "../context/DesignContext";

export const useDesignContext = () => {
    const ctx = use(Design);
    if (!ctx) throw new Error("useDesign must be used within a DesignProvider");
    return ctx;
};
