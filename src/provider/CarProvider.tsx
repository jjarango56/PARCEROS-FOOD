import { useState } from "react";
import type { ProductsContent } from "../data/products";
import { CarContext } from "../context/CarContext";
export type Car = ProductsContent;
type PropsCar = {
  children: React.ReactNode;
};
export const CarProvider = ({ children }: PropsCar) => {
  const [car, setCar] = useState<Car[]>([]);
  const [open, setOpen] = useState<boolean>(true);
  const handleCar = (products: Car) => {
    const dataCar = [...car, products];
    setCar(dataCar);
  };

  const handleOpenCar = () => {
    setOpen((prev) => !prev);
  };
  return (
    <CarContext value={{ car, handleCar, handleOpenCar, open }}>
      {children}
    </CarContext>
  );
};
