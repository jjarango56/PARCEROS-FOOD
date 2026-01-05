import { Link } from "react-router-dom";
export type  LinksProps ={
  ahref:string;
  style:string;
  content:string;
}
export const Links = ({ahref,style,content}:LinksProps) => {
  return (
    
        <Link
          to={ahref}
          className={style}
        >
         {content}
        </Link>
      // </li>
    //   <li>
    //     <Link
    //       to="/#us"
    //       className="text-text-primary hover:text-text-titles transition-colors duration-300 text-lg font-medium hover:underline decoration-2 underline-offset-4"
    //     >
    //       Nosotros
    //     </Link>
    //   </li>
    //   <li>
    //     <Link
    //       to="/#points"
    //       className="text-text-primary hover:text-text-titles transition-colors duration-300 text-lg font-medium hover:underline decoration-2 underline-offset-4"
    //     >
    //       Puntos
    //     </Link>
    //   </li>
    //   <li>
    //     <Link
    //       to="/#ubication"
    //       className="text-text-primary hover:text-text-titles transition-colors duration-300 text-lg font-medium hover:underline decoration-2 underline-offset-4"
    //     >
    //       Ubicacion
    //     </Link>
    //   </li>
    // </ul>
  );
};
