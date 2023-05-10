const ErrorMsg = ({ visible = true, children }) => {
  return (
    <p
      className={`text-[var(--color-variant-error)] 
      dark:text-[var(--color-variant-error)] text-sm p-2  ${
        visible ? 'block' : 'hidden'
      }`}
    >
      {children}
    </p>
  );
};
export default ErrorMsg;
