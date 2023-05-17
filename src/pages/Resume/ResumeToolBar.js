const ResumeToolBar = ({ children, className }) => {
  return (
    <div
      className={`grid  gap-5 justify-center items-center 
      max-w-[500px] mx-auto rounded-lg mt-1 px-5 py-2 
       ${className}`}
    >
      {children}
    </div>
  );
};
export default ResumeToolBar;
