const HamburgerIcon = ({ isActive, setIsActive }) => {
  return (
    <div
      className={`md:hidden relative w-6 h-[18px] cursor-pointer select-none group ${
        isActive ? 'js-is-active' : ''
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <span
        className="absolute w-[50%] h-[2.5px] bg-[var(--color-primary2)] rounded-l
        translate-x-0 translate-y-0 
        group-[.js-is-active]:rotate-45
        group-[.js-is-active]:top-[26%]
        group-[.js-is-active]:translate-x-[25%]
        transition-all
        duration-500
        ease-in-out"
      ></span>
      <span
        className="absolute w-[50%] h-[2.5px] bg-[var(--color-primary2)] rounded-l
        translate-x-0 -translate-y-[50%] top-[50%]
        group-[.js-is-active]:-translate-x-full
        group-[.js-is-active]:opacity-0
        transition-all
        duration-500
        ease-in-out"
      ></span>
      <span
        className="absolute w-[50%] h-[2.5px] bg-[var(--color-primary2)] rounded-l
        translate-x-0 -translate-y-full top-full
        group-[.js-is-active]:-rotate-45
        group-[.js-is-active]:top-[75%]
        group-[.js-is-active]:translate-x-[25%]
        transition-all
        duration-500
        ease-in-out"
      ></span>
      {/*left side*/}

      <span
        className="absolute w-[50%] h-[2.5px] bg-[var(--color-primary2)] left-[50%] rounded-r
        translate-x-0 translate-y-0
        group-[.js-is-active]:-rotate-45
        group-[.js-is-active]:top-[26%]
        group-[.js-is-active]:-translate-x-[25%]
        transition-all
        duration-500
        ease-in-out"
      ></span>
      <span
        className="absolute w-[50%] h-[2.5px] bg-[var(--color-primary2)] left-[50%] rounded-r
        translate-x-0 -translate-y-[50%] top-[50%]
        group-[.js-is-active]:translate-x-full
        group-[.js-is-active]:opacity-0
        transition-all
        duration-500
        ease-in-out"
      ></span>
      <span
        className="absolute w-[50%] h-[2.5px] bg-[var(--color-primary2)] left-[50%] rounded-r
        translate-x-0 -translate-y-full top-full
        group-[.js-is-active]:rotate-45
        group-[.js-is-active]:top-[75%]
        group-[.js-is-active]:-translate-x-[25%]
        transition-all
        duration-500
        ease-in-out"
      ></span>
      {/*right side*/}
    </div>
  );
};
export default HamburgerIcon;
