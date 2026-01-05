type ButtonProps = {
  content: React.ReactNode;
  style?: string;
  change?: () => void ;
  ahref?:string
};
export const Buttons = ({
  content,
  change,
  ahref,
  style = "bg-bg-ui text-text-primary px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-bg-primary border border-text-second/20 hover:border-text-titles/50 font-medium",
}: ButtonProps) => {
  if (ahref) {
    return (
      <a href={ahref} className={style}>
        {content}
      </a>
    )
  }
  return (
    <button onClick={change} className={style}>
      {content}
    </button>
  );
};
