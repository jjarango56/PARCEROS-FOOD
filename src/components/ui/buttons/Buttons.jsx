export const Buttons = ({
  content,
  onClick,
  ahref,
  className = "bg-bg-ui text-text-primary px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-bg-primary border border-text-second/20 hover:border-text-titles/50 font-medium",
  ...props
}) => {
  if (ahref) {
    return (
      <a href={ahref} className={className}>
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className} {...props}>
      {content}
    </button>
  );
};
