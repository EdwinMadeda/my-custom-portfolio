const Logo = ({ className }) => {
  return (
    <h1
      className={`font-extrabold uppercase  m-1 inline-flex justify-start items-center cursor-pointer ${className}`}
    >
      <span className="text-5xl text-[var(--color-primary)] font-rainbowBridge">
        E
      </span>
      <span className="text-3xl font-lemonJelly dark:text-white">madeda</span>
    </h1>
  );
};
export default Logo;
