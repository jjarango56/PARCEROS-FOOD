import { useState } from "react";
import type { ProductsContent } from "../data/products";
import { Loading } from "../components/ui/Loader";
export type Car = ProductsContent;
export const useCar = () => {
  const [car, setCar] = useState<Car[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState("")
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
      setOpen(false);
    }else if (!car){
      return<Loading/>
    }
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

  return { car, handleCar, setCar, handleOpenCar, open, handleBuy,handleOrder,amount,setAmount };
};
