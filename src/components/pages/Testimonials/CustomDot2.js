import React from 'react';
import { TESTIMONIALS } from '../../../utils/constants';
import Figure from './Figure';

const CustomDot2 = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.

  return (
    <button
      className={`${
        active ? 'w-4 h-4 bg-[var(--color-primary)]' : 'w-[11px] h-[11px] '
      } border-2 border-[var(--color-primary)] rounded-[50%] mx-[10px] w-4 h-4 lg:hidden
        flex justify-center items-center group/custom-btn-2`}
      onClick={() => onClick()}
    >
      <span className="bg-white group-hover/custom-btn-2:bg-[var(--color-primary)] opacity-40 w-full h-full rounded-[50%]"></span>
    </button>
  );
};

export default CustomDot2;
