const CtrlsWrapper = ({ className, children }) => {
  return <div className={`flex items-center  ${className}`}>{children}</div>;
};
export default CtrlsWrapper;
