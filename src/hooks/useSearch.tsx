import { useState } from "react";
import { products } from "../data/products";
export const useSearch = () =>{
    const [query,setQuery] = useState("");

    const productsFilter = products.filter((product)=>{
        const search = query.toLowerCase();
        const nameProduct = product.title.toLowerCase().trim();
        return nameProduct.includes(search);
    });

    
    return {productsFilter,query,setQuery}
}