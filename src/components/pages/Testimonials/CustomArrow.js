import { BsChevronCompactRight } from 'react-icons/bs';
import { BsChevronCompactLeft } from 'react-icons/bs';

const ArrowButton = ({ className, onClick, children }) => {
  return (
    <button
      className={`absolute w-10 h-10 text-white text-xl font-extrabold border-1 border-white
      flex justify-center items-center rounded-[50%] z-0 hover:after:opacity-70
      after:absolute after:w-full after:h-full after:rounded-[50%] after:bg-[var(--color-primary)] after:opacity-50 after:-z-10
      ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Right = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.

  return (
    <ArrowButton className="right-0" onClick={onClick}>
      <BsChevronCompactRight />
    </ArrowButton>
  );
};

const Left = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.

  return (
    <ArrowButton className="left-0" onClick={onClick}>
      <BsChevronCompactLeft className="left-0" />
    </ArrowButton>
  );
};

const CustomArrow = { Right, Left };
export default CustomArrow;
