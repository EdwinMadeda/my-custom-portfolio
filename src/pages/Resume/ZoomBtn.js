const ZoomBtn = ({ onClick, children }) => {
  return (
    <button
      className="cursor-pointer text-base text-[var(--dark)] dark:text-white hover:text-[var(--color-primary)]
                 mx-[0.6rem]"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default ZoomBtn;
