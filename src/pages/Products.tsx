import { Buttons } from "../components/ui/Buttons";
import { FaCartPlus } from "react-icons/fa";
import { useCar } from "../hooks/useCar";
import { useSearch } from "../hooks/useSeach";
import { Input } from "../components/ui/input";

export const Products = () => {
  const { handleCar, car, open, handleOpenCar, handleBuy } = useCar();
  const {productsFilter,query,setQuery} = useSearch();
  console.log(query)
  return (
    <div className="p-4 md:p-10 bg-bg-primary min-h-screen">
  <Input 
  query={query} 
  handleSearch={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} 
/>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {productsFilter.map((product) => (
      <div 
        key={product.index} 
        className="group bg-bg-primary backdrop-blur-sm border border-text-second/10 p-6 flex flex-col gap-4 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="space-y-2">
          <h3 className="text-text-primary text-xl font-bold tracking-tight">{product.title}</h3>
          <p className="text-text-second text-sm line-clamp-2">{product.content}</p>
          <p className="text-text-second font-mono text-lg">${product.price}</p>
        </div>
        
        <Buttons
          change={() => handleCar(product)}
          content="Agregar al carrito"
          style="w-full bg-bg-ui text-text-primary py-2 rounded-xl font-medium hover:opacity-90 transition-opacity"
        />
      </div>
    ))}
  </div>


  <div className="fixed bottom-8 right-8 z-50">
    <Buttons 
      change={handleOpenCar} 
      content={<div className="relative p-4 bg-bg-primary rounded-full shadow-2xl">
        <FaCartPlus size={24} />
        {car.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {car.length}
          </span>
        )}
      </div>} 
    />
  </div>

 
  {open && (
    <div className="fixed inset-0 z-60 flex justify-end bg-black/20 backdrop-blur-sm">
      <div className="w-full max-w-md bg-bg-ui h-full shadow-2xl p-8 flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-text-titles">Tu Carrito</h2>
          <button onClick={handleOpenCar} className="text-text-second hover:text-text-titles">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4">
          {car.map(({ title, price }, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-bg-primary/50 rounded-lg border border-text-second/5">
              <div>
                <h4 className="font-medium text-text-titles">{title}</h4>
                <p className="text-sm text-text-second">${price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-text-second/10">
          <div className="flex justify-between text-xl font-bold text-text-titles mb-6">
            <span>Total:</span>
            <span>${car.reduce((acc, { price }) => acc + price, 0)}</span>
          </div>
          <Buttons 
            content="Finalizar Compra" 
            change={handleBuy} 
            style="w-full bg-text-titles text-text-primary py-4 rounded-2xl font-bold shadow-lg hover:brightness-110 transition-all" 
          />
        </div>
      </div>
    </div>
  )}
</div>
  );
};
