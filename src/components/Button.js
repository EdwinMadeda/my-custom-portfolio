const Button = (props) => {
  const { children, onClick, className } = props;

  return (
    <button
      className={`rounded-full py-2 px-6 sm:py-3 sm:px-7 font-bold leading-6 text-white  capitalize inline-flex justify-center items-center text-center align-middle select-none border-solid border-2 
      border-[var(--color-primary)] overflow-hidden transition-all duration-300  relative z-10
      
      before:absolute before:left-0 before:bottom-0 before:w-0 before:h-full 
      before:bg-white before:rounded-full before:-z-10 before:transition-all 

      after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:bg-[var(--color-primary)] after:rounded-full after:-z-20 after:duration-300

      hover:text-[var(--dark)] hover:after:hover:w-0
      ${className}
      `}
      onClick={(e) => {
        onClick && onClick();
      }}
      type="button"
    >
      {children}
    </button>
  );
};
export default Button;
