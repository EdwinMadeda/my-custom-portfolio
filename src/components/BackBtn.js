import {
  IoArrowBackCircleOutline,
  IoArrowBackCircleSharp,
} from 'react-icons/io5';

const BackBtn = ({ onClick, containerClass = '', variant = 'light' }) => {
  return (
    <button
      className={`relative  z-10 group/back-btn rounded-[50%] mr-4 
      ${
        variant === 'dark' ? 'text-[var(--dark)] dark:text-white' : 'text-white'
      } 
      ${containerClass}`}
      style={{ boxShadow: 'rgba(149, 157, 165, 0.1) 0px 2px 2px' }}
      onClick={() => {
        onClick();
      }}
    >
      <IoArrowBackCircleSharp className="text-3xl md:text-4xl group-hover/back-btn:hidden" />
      <IoArrowBackCircleOutline className="text-3xl md:text-4xl hidden group-hover/back-btn:block" />
    </button>
  );
};
export default BackBtn;
