import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1,
    partialVisibilityGutter: 27,
  },
  LargeDesktop: {
    breakpoint: { max: 3000, min: 2500 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 24,
  },
  desktop: {
    breakpoint: { max: 2500, min: 1024 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 21,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 18,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 15,
  },
};

const ReactMultiCarousel = ({
  customRightArrow,
  customLeftArrow,
  customDot,
  additionalTransfrom = 0,
  dotListClass = 'custom-dot-list-style',
  itemClass = 'carousel-item-padding-40-px',
  sliderClass = '',
  containerClass = 'carousel-container',
  children,
}) => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      partialVisible={true}
      centerMode={false}
      customRightArrow={customRightArrow}
      customLeftArrow={customLeftArrow}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      showDots={true}
      customDot={customDot}
      renderDotsOutside={false}
      renderButtonGroupOutside={true}
      responsive={responsive}
      infinite={false}
      autoPlay={true}
      autoPlaySpeed={8000}
      rewind={true}
      rewindWithAnimation={false}
      additionalTransfrom={additionalTransfrom}
      focusOnSelect={false}
      keyBoardControl={true}
      customTransition="all .5s"
      transitionDuration={500}
      dotListClass={dotListClass}
      itemClass={itemClass}
      sliderClass={sliderClass}
      containerClass={containerClass}
    >
      {children}
    </Carousel>
  );
};
export default ReactMultiCarousel;
