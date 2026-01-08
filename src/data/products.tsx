export type ProductsContent = {
    index: number;
    title:string;
    content:string;
    price:number;
    toLowerCase?:() => void
}
export const products: ProductsContent[] = [
  { 
    index: 1, 
    title: "Papas de la casa", 
    content: "Nuestra especialidad: papas crujientes bañadas en salsa rosada artesanal, guacamole fresco, trozos de chorizo parrillero, tocineta ahumada y huevos de codorniz.", 
    price: 26.00,
    

  },
  { 
    index: 2, 
    title: "Papas madurito", 
    content: "Una explosión de sabores dulces y salados con trozos de plátano maduro meloso, queso fundido, tocineta crujiente y un toque de crema agria.", 
    price: 26.000 
   
  },
  { 
    index: 3, 
    title: "Papas criollas", 
    content: "La tradición en tu plato: papas criollas doraditas acompañadas de hogao tradicional, trocitos de chicharrón carnudo y una pizca de sal marina.", 
    price: 30.000, 
    
  },
  { 
    index: 4, 
    title: "Papas mixtas", 
    content: "Lo mejor de dos mundos: combinación de papa francesa y criolla con una lluvia de carnes desmechadas (res y pollo), maíz tierno y queso mozzarella.", 
    price: 28.500,
    
  },
  { 
    index: 5, 
    title: "Papas Campesinas", 
    content: "Sabor rústico con salchicha ranchera, cebolla caramelizada, pimentones asados y un toque de cilantro fresco sobre papas rústicas con cáscara.", 
    price: 26,
    
  },
  { 
    index: 6, 
    title: "Papas Gratinadas", 
    content: "Para los amantes del queso: bañadas en una mezcla de cuatro quesos fundidos, tocineta picada y gratinadas al horno hasta alcanzar el dorado perfecto.", 
    price: 26,
    
  },
];