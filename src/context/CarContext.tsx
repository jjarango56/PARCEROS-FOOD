import { createContext } from "react";
import type { ProductsContent } from "../data/products";
export type CarItem = ProductsContent
export type CarContext = {
    car:CarItem[];
    handleCar:(product:CarItem)=> void;
    handleOpenCar: () => void;
    handleOrder:()=>void;
    open:boolean;
    amount:string;
    setAmount:React.Dispatch<React.SetStateAction<number>>

}
export const CarContext = createContext<CarContext | null>(null);