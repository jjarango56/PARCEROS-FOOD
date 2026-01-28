import axios from "axios";
import { useState } from "react";

export const useApiGit = () =>{
  const [data,setData] = useState([])
  const  ApiGit = async () =>{
  try {
    const response = await axios.get('https://api.github.com/users');
    if(response){
      console.log('Exito')
    }
    setData(response);
    console.log(data);
    return response.data;
  } catch (error) {
    throw new Error('Error en la peticion',error);
  }
}

return{ApiGit,data}
}

