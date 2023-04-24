import { useState } from 'react';

const HamburgerIcon = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`md:hidden cursor-pointer relative w-6 h-6 group ${
        isActive ? 'isActive' : ''
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <span
        className="absolute h-[2px] w-1/2 bg-[var(--color-primary2)] top-1/2 left-0 -translate-y-2
                   group-[.isActive]:left-1
                   group-[.isActive]:rotate-45
                   group-[.isActive]:-translate-y-1
                   transition-all duration-300"
      ></span>
      <span
        className="absolute h-[2px] w-1/2 bg-[var(--color-primary2)] top-1/2 left-0 translate-y-0
                  group-[.isActive]:-translate-x-[100%] group-[.isActive]:opacity-0
                  group-[.isActive]:-translate-y-1
                  transition-all duration-300"
      ></span>
      <span
        className="absolute h-[2px] w-1/2 bg-[var(--color-primary2)] top-1/2 left-0 translate-y-2
                    group-[.isActive]:-rotate-45 group-[.isActive]:left-1
                    group-[.isActive]:translate-y-1
                    transition-all duration-300"
      ></span>
      {/*left side*/}

      <span
        className="absolute h-[2px] w-1/2 bg-[var(--color-primary2)] top-1/2 left-1/2 -translate-y-2
                   group-[.isActive]:-rotate-45
                   group-[.isActive]:-translate-y-1
                   transition-all duration-300"
      ></span>
      <span
        className="absolute h-[2px] w-1/2 bg-[var(--color-primary2)] top-1/2 left-1/2 translate-y-0
                   group-[.isActive]:translate-x-[100%] group-[.isActive]:opacity-0
                   group-[.isActive]:-translate-y-1
                   transition-all duration-300"
      ></span>
      <span
        className="absolute h-[2px] w-1/2 bg-[var(--color-primary2)] top-1/2 left-1/2 translate-y-2
                   group-[.isActive]:rotate-45
                   group-[.isActive]:translate-y-1
                   transition-all duration-300"
      ></span>
      {/*right side*/}
    </div>
  );
};
export default HamburgerIcon;
