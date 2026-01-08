import {useCarContext} from "../helpers/useCarContext";
import { Buttons } from "./ui/Buttons";
import { MdDeleteForever } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
export const Car = () => {
  const { car,handleOpenCar,open,handleOrder,amount } = useCarContext();
  return (
    <>  
     <div className="fixed bottom-8 right-8 z-50">
        <Buttons
          change={handleOpenCar}
          content={
            <div className="relative p-4 bg-bg-primary text-titles-car rounded-full shadow-2xl">
              <FaCartPlus size={24} />
              {car.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {car.length}
                </span>
              )}
            </div>
          }
        />
      </div>
    
          {open && (
            <div className="fixed inset-0 z-60 flex justify-end bg-black/20 backdrop-blur-sm">
              <div className="w-full max-w-md bg-bg-primary h-full shadow-2xl p-8 flex flex-col animate-in slide-in-from-right duration-300">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-titles-car">Tu Carrito</h2>
                  <button
                    onClick={handleOpenCar}
                    className="text-text-second hover:text-text-titles"
                  >
                    ✕
                  </button>
                </div>
    
                <div className="flex-1 overflow-y-auto space-y-4 ">
                  {car.map(({ title, price }, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-bg-ui rounded-lg border border-text-second/5"
                    >
                      <div className="flex justify-between w-full">
                        <div className="">
                        <h4 className="font-medium text-text-titles">{title}</h4>
                        <p className="text-sm text-text-titles-car">${price}<span className="text-sm text-text-titles px-2">X{amount}</span></p>
                        </div>
                        <div className="flex items-center">
                          <Buttons
                            content={<MdDeleteForever />}
                            change={handleOrder}
                            style="hover:brightness-110 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    
                <div className="mt-6 pt-6 border-t border-text-second/10">
                  <div className="flex justify-between text-xl font-bold text-titles-car mb-6">
                    <span>Total:</span>
                    <span>${car.reduce((acc, { price,amount }) => acc + price * amount, 0)}</span>
                  </div>
                  <Buttons
                    content="Finalizar Compra"
                    change={handleOrder}
                    style="w-full bg-bg-ui text-text-titles py-4 rounded-2xl font-bold shadow-lg hover:brightness-110 transition-all"
                  />
                </div>
              </div>
            </div>
          )}
    </>
     
  );
};