import { CarouselDemo } from "../components/Carousel";
import { Outlet } from "react-router-dom";
import { Links } from "../components/ui/Links";

export const Introduction = () => {
  return (
    <>
      <CarouselDemo />
      <div className="flex justify-center p-4">
        <Links
          ahref="Products"
          content="Ver Productos"
          style="bg-bg-ui text-text-primary py-2 px-4 rounded-lg font-bold shadow-lg hover:shadow-bg-ui/40 transition-all duration-300"
        />
      </div>
      <Outlet />
    </>
  );
};
