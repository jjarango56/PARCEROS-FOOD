
import { AiOutlineClose } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { useDesignContext } from "../../hooks/useDesignContext";

export const ButtonNav = () => {
  const { open,handleOpen } = useDesignContext();
  return (
    <>
      <button
      className="position absolute left-0" 
      onClick={handleOpen} >
        {open ? (
          <>
            <AiOutlineClose />
          </>
        ) : (
          <>
            <FiAlignJustify />
          </>
        )}
      </button>
    </>
  );
};
