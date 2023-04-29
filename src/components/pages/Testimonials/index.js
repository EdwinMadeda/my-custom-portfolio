import React, { useContext } from 'react';
import ReactMultiCarousel from '../../Carousel';
import CustomArrow from './CustomArrow';
import SingleTestimonial from './SingleTestimonial';
import { TiTimesOutline } from 'react-icons/ti';
import { useState } from 'react';
import CustomDot2 from './CustomDot2';
import Store from '../../../contexts/Store';

const Testimonials = () => {
  const { TESTIMONIALS } = useContext(Store);
  const [selectTestimonial, setSelectTestimonial] = useState(null);

  return (
    <section
      name="testimonials"
      className={`py-10 bg-[var(--bg-gray)] ${
        TESTIMONIALS.length > 0 ? 'block' : 'hidden'
      }`}
    >
      <div className="section-container">
        <h2 className="section-title">Testimonials</h2>

        <div className="w-full overflow-hidden">
          <ReactMultiCarousel
            customRightArrow={<CustomArrow.Right />}
            customLeftArrow={<CustomArrow.Left />}
            customDot={<CustomDot2 />}
            additionalTransfrom={0}
            dotListClass="items-center"
            itemClass="px-[10px]"
            sliderClass=""
            containerClass="pb-12 lg:pb-0 mt-3"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SingleTestimonial
                testimonial={testimonial}
                key={testimonial.id}
                setSelect={setSelectTestimonial}
              />
            ))}
          </ReactMultiCarousel>
        </div>

        {selectTestimonial && (
          <div
            className="fixed top-0 left-0  w-full h-screen px-6 md:px-8 z-30
                        flex flex-col justify-start items-center"
          >
            <div className="max-w-[1000px] z-40 pt-[var(--nav-height)]">
              <button
                className="float-right m-7 mr-0  w-7 h-7 flex justify-center items-center rounded-[50%]
                          group/testimonial-close-btn"
                onClick={() => setSelectTestimonial(null)}
              >
                <TiTimesOutline
                  className="text-2xl text-white  
              group-hover/testimonial-close-btn:text-[var(--color-primary)] 
              group-hover/testimonial-close-btn:opacity-80"
                />
              </button>
              <SingleTestimonial
                testimonial={selectTestimonial}
                isShorthand={false}
              />
            </div>
            <div
              className={`absolute w-full h-screen left-0  
            bg-[var(--dark)] opacity-70`}
            ></div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Testimonials;
