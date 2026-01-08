import { Buttons } from "../components/ui/Buttons";
import { useSearch } from "../hooks/useSearch";
import { Input } from "../components/ui/input";
import { useCarContext } from "../helpers/useCarContext";
import { Car } from "../components/Car";
export const Products = () => {
  const {
    handleCar,
    amount,
    setAmount
  } = useCarContext();
  const { productsFilter, query, setQuery } = useSearch();
  console.log(query);
  return (
    <section className="p-4 md:p-10 bg-bg-primary min-h-screen">
      <div className="flex text-titles-car justify-between my-6 items-center">
        <h2 className="font-bold ">Buscar Productos</h2>
        <Input
          type="text"
          holder="Buscar productos... "
          style="shadow shadow-md p-2 rounded-md "
          query={query}
          handleSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsFilter.map((product) => (
          <div
            key={product.index}
            className="group bg-bg-primary backdrop-blur-sm border border-text-second/10 p-6 flex flex-col gap-4 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="space-y-2">
              <h3 className="text-titles-car text-xl font-bold tracking-tight">
                {product.title}
              </h3>
              <p className="text-text-second text-sm line-clamp-2">
                {product.content}
              </p>
              <p className="text-text-second font-mono text-lg">
                ${product.price}
              </p>
              <Input
                type="number"
                handleSearch={(e) => setAmount(Number(e.target.value))}
                query={String(amount)}
                style="shadow text-titles-car border-b-text-second p-1 text-center w-full"
                holder="cantidad"
              />
            </div>

            <Buttons
              change={() => handleCar(product)}
              content="Agregar al carrito"
              style="w-full bg-bg-ui text-text-primary py-2 rounded-xl font-medium hover:opacity-90 transition-opacity"
            />
          </div>
        ))}
        <Car/>
      </div> 
    </section>
  );
};
