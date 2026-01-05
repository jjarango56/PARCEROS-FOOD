import {useCarContext} from "../helpers/useCarContext";
import { Buttons } from "./ui/Buttons";
export const Car = () => {
  const { car,handleOpenCar,open } = useCarContext();
  return (
    <div className="fixed top-18 rounded-b-xl z-50 flex flex-col items-center w-md h-auto right-0 transition-all duration-300 ease-in-out bg-bg-primary/80 backdrop-blur-md ">
      <span>Cantidad en car: {car.length}</span>
      {open && car.length > 0 && (
        <div className="">
          {car.map((item, index) => (
            <div key={index} className="">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <Buttons
              content="Finalizar comprar"
              change={handleOpenCar}
              style=""
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};