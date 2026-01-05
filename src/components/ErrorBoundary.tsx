import { FaHamburger } from "react-icons/fa";
import { Loading } from "./ui/Loader";

export type Props ={
    title:string;
    description:string,
    error:string;
}
export const ErrorBoundary = ({title,description,error}:Props) => {
    return(
        <aside className="h-screen flex flex-col justify-center">
            <div className="flex flex-col items-center">
                <Loading/>
                <FaHamburger className="text-6xl text-titles-car"/>
                <h3 className="text-error p-2 text-2xl">{title}<span className="font-bold px-1">{error}</span></h3>
                <p className="text-center text-text-second">{description}</p>
            </div>
        </aside>
    )
}