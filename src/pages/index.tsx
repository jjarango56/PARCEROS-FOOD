import { Links } from "../components/ui/Links";

export type Props = {
  url: string;
  description: string;
  title: string;
  logo: string;
};

export const Index = ({ url, logo, description, title }: Props) => {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 h-screen w-full overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 lg:relative lg:block">
        <div className="absolute inset-0 bg-black/40 lg:bg-transparent z-10 lg:hidden" />
        <img
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          src={url}
          alt={description}
        />
      </div>

      <div className="relative z-20 flex flex-col justify-center items-center gap-8 p-6 md:p-12 lg:p-20 bg-bg-primary/90 lg:bg-bg-primary backdrop-blur-sm lg:backdrop-blur-none">
        <div className="p-1 bg-white rounded-full shadow-xl ring-4 ring-bg-ui/20">
          <img
            className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover"
            src={logo}
            alt="Logo"
          />
        </div>

        <div className="space-y-4 max-w-md text-center">
          <h2 className="text-text-primary font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
            {title}
          </h2>
          <div className="h-1 w-20 bg-bg-ui mx-auto rounded-full" />{" "}
      
        </div>

        <div className="flex flex-col w-full max-w-xs gap-4 mt-4">
          <Links
            ahref="/Introduction"
            content="Sede Catania"
            style="w-full bg-bg-ui text-text-primary py-4 px-6 rounded-2xl font-bold shadow-lg hover:shadow-bg-ui/40 hover:-translate-y-1 transition-all duration-300"
          />
          <Links
            ahref="/Introduction"
            content="Sede Parque"
            style="w-full bg-white text-bg-ui border-2 border-bg-ui py-4 px-6 rounded-2xl font-bold shadow-sm hover:bg-bg-ui/5 transition-all duration-300"
          />
        </div>

        <p className="text-text-second text-sm uppercase tracking-widest font-medium opacity-60 mt-10">
          Selecciona una ubicación
        </p>
      </div>
    </section>
  );
};
