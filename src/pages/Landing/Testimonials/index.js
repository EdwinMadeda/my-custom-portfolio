import React, { useContext, useState } from 'react';
import { TiTimesOutline } from 'react-icons/ti';
import ReactMultiCarousel from '../../../components/Carousel';
import CustomArrow from './CustomArrow';
import SingleTestimonial from './SingleTestimonial';
import Store from '../../../contexts/Store';
import CustomDot from './CustomDot';

const Testimonials = () => {
  const { TESTIMONIALS } = useContext(Store);
  const [selectTestimonial, setSelectTestimonial] = useState(null);

  return (
    <section
      name="testimonials"
      className={`${TESTIMONIALS.length > 0 ? 'block' : 'hidden'}`}
      /*bg-[var(--bg-gray)]*/
    >
      <div className="section-container">
        <div>
          <h2 className="section-title">Testimonials</h2>
        </div>

        <div className="section-content">
          <h3 className="section-sub-title">Here's what others have to say</h3>
          <div className="w-full overflow-hidden">
            <ReactMultiCarousel
              customRightArrow={<CustomArrow.Right />}
              customLeftArrow={<CustomArrow.Left />}
              customDot={<CustomDot />}
              additionalTransfrom={0}
              dotListClass="items-center"
              itemClass="px-[10px]"
              sliderClass=""
              containerClass="pb-12 lg:pb-0"
            >
              {TESTIMONIALS.map((testimonial) => (
                <SingleTestimonial
                  testimonial={testimonial}
                  key={testimonial._id}
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
      </div>
    </section>
  );
};
export default Testimonials;
