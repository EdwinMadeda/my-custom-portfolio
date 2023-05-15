import React, { useContext } from 'react';
import Figure from './Figure';
import Store from '../../../contexts/Store';

const CustomDot = ({ onClick, ...rest }) => {
  const { TESTIMONIALS } = useContext(Store);

  const {
    // eslint-disable-next-line no-unused-vars
    onMove,
    index,
    active,
    // eslint-disable-next-line no-unused-vars
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
      } border-2 rounded-[50%] mx-2 lg:hidden`}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};

export default CustomDot;
