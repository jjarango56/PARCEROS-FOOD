import { Link } from "react-router-dom"
export const Links = () =>{
    return(
        <ul className="flex flex-col h-100 items-center justify-between ">
            <li><Link to="Products">Productos</Link></li>
            <li><Link to="/#us">Nosotros</Link></li>
            <li><Link to="/#points">Puntos</Link></li>
            <li><Link to="/#ubication">Ubicacion</Link></li>
        </ul>
    )
}