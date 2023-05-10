import { BsChevronCompactRight } from 'react-icons/bs';
import { BsChevronCompactLeft } from 'react-icons/bs';

const ArrowButton = ({ className, onClick, children }) => {
  return (
    <button
      className={`absolute w-7 h-7 md:w-10 md:h-10 
      text-white text-base md:text-xl font-extrabold border-1 border-white
      flex justify-center items-center rounded-[50%] z-0 hover:after:opacity-70
      after:absolute after:w-full after:h-full after:rounded-[50%] after:bg-[var(--color-primary)] after:opacity-50 after:-z-10
      ${className}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

const Left = ({ onClick, ...rest }) => {
  // eslint-disable-next-line no-unused-vars
  const { onMove, carouselState, containerClass = '' } = rest;
  // eslint-disable-next-line no-unused-vars
  const { currentSlide, deviceType } = carouselState ?? {};
  //onMove means if dragging or swiping in progress.

  return (
    <ArrowButton className={`left-0 ${containerClass}`} onClick={onClick}>
      <BsChevronCompactLeft className="left-0" />
    </ArrowButton>
  );
};

const Right = ({ onClick, ...rest }) => {
  // eslint-disable-next-line no-unused-vars
  const { onMove, carouselState, containerClass = '' } = rest;
  // eslint-disable-next-line no-unused-vars
  const { currentSlide, deviceType } = carouselState ?? {};
  //onMove means if dragging or swiping in progress.

  return (
    <ArrowButton className={`right-0 ${containerClass}`} onClick={onClick}>
      <BsChevronCompactRight />
    </ArrowButton>
  );
};

const CustomArrow = { Left, Right };
export default CustomArrow;
