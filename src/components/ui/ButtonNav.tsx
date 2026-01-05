import { AiOutlineClose } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { useDesignContext } from "../../helpers/useDesignContext";

export const ButtonNav = () => {
  const { open, handleOpen } = useDesignContext();
  return (
    <>
      <button
        className="absolute left-4 top-4 z-50 p-2 bg-bg-ui rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-bg-primary text-text-primary hover:text-text-titles"
        onClick={handleOpen}
      >
        {open ? (
          <>
            <AiOutlineClose size={24} />
          </>
        ) : (
          <>
            <FiAlignJustify size={24} />
          </>
        )}
      </button>
    </>
  );
};
