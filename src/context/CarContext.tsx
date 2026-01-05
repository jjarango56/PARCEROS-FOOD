import { createContext } from "react";
import type { ProductsContent } from "../data/products";
export type CarItem = ProductsContent
export type CarContext = {
    car:CarItem[];
    handleCar:(product:CarItem)=> void;
    handleOpenCar: () => void;
    open:boolean;

}
export const CarContext = createContext<CarContext | null>(null);