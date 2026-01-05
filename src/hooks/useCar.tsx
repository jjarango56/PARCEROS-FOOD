import { useState } from "react";
import type { ProductsContent } from "../data/products";
export type Car = ProductsContent;
export const useCar = () => {
  const [car, setCar] = useState<Car[]>([]);
  const [open, setOpen] = useState<boolean>(true);
  const handleCar = (products: Car) => {
    const dataCar = [...car, products];
    setCar(dataCar);
  };

  const handleOpenCar = () => {
    setOpen((prev) => !prev);
  };

  const handleBuy = () => {
    if (car.length > 0) {
      setCar([]);
    }
  };

  return { car, handleCar, setCar, handleOpenCar, open, handleBuy };
};
