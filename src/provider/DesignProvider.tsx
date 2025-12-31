import React, { useState } from "react";
import { Design } from "../context/DesignContext";

interface Props {
  children: React.ReactNode;
}

export const DesignProvider = ({ children }: Props) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleOpen = () => setOpen((prev) => !prev);

  return <Design value={{ open, handleOpen }}>{children}</Design>;
};
