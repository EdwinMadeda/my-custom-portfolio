import React from 'react';
import { TESTIMONIALS } from '../../../utils/constants';
import Figure from './Figure';

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  const carouselItems = TESTIMONIALS.map(({ id, avatar }) => (
    <Figure key={id} avatar={avatar} size={28} />
  ));

  return (
    <button
      className={`${
        active ? 'border-[var(--color-primary)]' : 'border-[white]'
      } border-2 rounded-[50%] mx-2`}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};

export default CustomDot;
