import { useContext } from 'react';
import PageScroll from '../../contexts/PageScrollContext';

const ButtonTemplate = ({
  children,
  onClick,
  containerClass,
  linkClass,
  anchor,
  domLink,
  disabled,
}) => {
  const { navigateAndScroll } = useContext(PageScroll);

  linkClass = `font-bold leading-6 capitalize flex justify-center items-center text-center align-middle select-none  px-4 text-[15px] min-h-[35px] 
    ${linkClass}`;

  return (
    <button
      className={`rounded-full border-solid border-2 outline-none 
        overflow-hidden transition-all duration-300  relative z-10

        before:absolute before:right-0 before:bottom-0 before:w-0 before:h-full before:rounded-full 
        before:-z-10 before:duration-300

        after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:rounded-full after:-z-20 after:duration-300 


        group/button 
        ${
          disabled
            ? 'grayscale active:scale-[unset]'
            : 'cursor-pointer hover:after:hover:w-0 hover:before:w-full'
        }
        ${containerClass}
        `}
      onClick={(e) => {
        if (anchor || domLink) {
          navigateAndScroll({
            anchor,
            domLink,
          });
        }
        onClick && onClick();
      }}
      type="button"
      disabled={disabled}
    >
      <span className={linkClass}>{children}</span>
    </button>
  );
};

export default ButtonTemplate;
