import { linksFooter } from "../data/footerLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-ui dark:bg-bg-ui-dark text-text-primary dark:text-text-primary-dark py-8">
      <div className="max-w-6xl mx-auto px-4">
       
        <div className="grid grid-cols-1  justify-items-center md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <img 
              className="rounded-full h-16 w-16 mb-4 object-cover" 
              src="../public/logo.jpg" 
              alt="PARCEROS-FOOD Logo" 
            />
            <h3 className="text-titles font-bold text-text-titles dark:text-text-titles-dark">
              PARCEROS FOOD
            </h3>
            <p className="text-sm text-text-second dark:text-text-second-dark mt-2">
              Los mejores sabores en tu mesa
            </p>
          </div>


          <div className="text-center">
            <h4 className="font-semibold text-text-titles dark:text-text-titles-dark mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2">
              {linksFooter.map((item)=>(
                <li className="text-center text-text-titles">{item.content}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-titles dark:text-text-titles-dark mb-4">
              Síguenos
            </h4>
            <div className="flex gap-4">
              {linksFooter.map((item)=>(
                 <a 
                href="#" 
                className="text-text-second dark:text-text-second-dark hover:text-text-titles dark:hover:text-text-titles-dark transition text-xl"
                aria-label="Facebook"
              >
                {item.icon}
              </a>
              ))}
            </div>
          </div>
        </div>

        
        <div className="border-t border-text-second dark:border-text-second-dark opacity-20 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-text-second dark:text-text-second-dark">
          <p>&copy; {currentYear} PARCEROS FOOD. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-text-titles dark:hover:text-text-titles-dark transition">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-text-titles dark:hover:text-text-titles-dark transition">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};