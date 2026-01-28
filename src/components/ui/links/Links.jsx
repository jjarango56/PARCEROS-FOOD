import { Link } from "react-router-dom";

export const Links = ({ahref,className,content}) => {
  return (
    
        <Link
          to={ahref}
          className={className}
        >
         {content}
        </Link>
  );
};
