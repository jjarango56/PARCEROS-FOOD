import { useEffect, useState } from "react"
import { Open } from "../context/openContext";

export const OpenProvider = ({children})=>{
  const[open, setOpen] = useState(() => localStorage.getItem('open') ?? false);

  const handleOpen = () =>{
    setOpen(!open);
  }

  useEffect(()=>{
    localStorage.setItem('open-status', JSON.stringify(open));
  },[open])

  return(
    <Open value={{handleOpen,open}}>
      {children}
    </Open>
  )
}