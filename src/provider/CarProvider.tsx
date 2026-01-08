import { useState } from "react";
import type { ProductsContent } from "../data/products";
import { CarContext } from "../context/CarContext";
export type Car = ProductsContent;
type PropsCar = {
  children: React.ReactNode;
};
export const CarProvider = ({ children }: PropsCar) => {
  const [car, setCar] = useState<Car[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);
  const handleCar = (products: Car) => {
    const dataCar = [...car, { ...products, amount }];
    setCar(dataCar);
    setAmount(1);
  };

  const handleOpenCar = () => {
    setOpen((prev) => !prev);
  };
  const handleOrder = () => {
    const phone = "573024416639";
    let message = "Hola, Como estas quiero realizar el siguiente pedido :\n\n";
    let total = 0 ;

    if(car.length === 0){
      alert("Carrito vacio");
    }

    car.forEach((item,index)=>{
      message += `${index + 1}. ${item.title} x ${item.amount} - $${(item.price * item.amount).toLocaleString()}\n`;
      total += item.price * item.amount;
    });
    message += `\n*Total a pagar: $${total.toLocaleString()}*`;
   
    const messageURL = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${messageURL}`;
    
    window.open(url, '_blank');
  } 
  return (
    <CarContext value={{ car, handleCar, handleOpenCar, open,handleOrder,amount,setAmount}}>
      {children}
    </CarContext>
  );
};
