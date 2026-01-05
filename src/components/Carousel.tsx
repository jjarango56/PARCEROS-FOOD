import { useCarousel } from "../hooks/useCarousel";
import { items } from "../data/featuredProducts";
import { Buttons } from "./ui/Buttons";
export function CarouselDemo() {
  const { currentIndex, nextSlide, prevSlide, setCurrentIndex } = useCarousel();
  return (
    <div className="relative">
      <div className="overflow-hidden h-1/2">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="shrink-0 w-full relative h-full">
              <img
                className="w-full h-full object-contain"
                src={item.img}
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <div className="text-text-titles text-xl md:text-2xl font-bold mb-4">
                  {item.content}
                </div>
                <div className="text-text-second text-sm md:text-base">
                  Descubre más sobre nuestros productos excepcionales.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <Buttons
          change={prevSlide}
          style="bg-bg-ui text-text-primary px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-bg-primary border border-text-second/20 hover:border-text-titles/50 font-medium"
          content=" ‹"
        />

        <Buttons
          change={nextSlide}
          style="bg-bg-ui text-text-primary px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-bg-primary border border-text-second/20 hover:border-text-titles/50 font-medium"
          content="›"
        />
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-text-titles"
                : "bg-text-second hover:bg-text-titles"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
