import { trimStr } from '../../../utils/functions';
import CustomToolTip from '../../../components/CustomToolTip';
import Figure from './Figure';

const SingleTestimonial = ({ testimonial, setSelect, isShorthand = true }) => {
  const { avatar, name, about, msg } = testimonial;

  return (
    <div
      className={`bg-white dark:bg-[var(--dark-secondary)] rounded-lg py-7 px-8 w-full ${
        isShorthand ? 'h-full' : ''
      } overflow-hidden 
      flex flex-col justify-start items-start`}
    >
      <div className="flex justify-start items-center">
        <Figure avatar={avatar} size={50} />
        <div className="ml-4">
          <h4>{name}</h4>
          <p
            className="text-sm cursor-default"
            data-tooltip-id="about-context"
            data-tooltip-content={about.context}
            data-tooltip-place="bottom"
          >
            {about.text}
            <CustomToolTip id="about-context" />
          </p>
        </div>
      </div>
      <p className="mt-5 w-full">
        {isShorthand
          ? trimStr(
              msg,
              200,
              <button
                className="text-sm font-bold hover:text-[var(--color-primary)]"
                onClick={() => setSelect(testimonial)}
              >
                ...More
              </button>
            )
          : msg}
      </p>
    </div>
  );
};
export default SingleTestimonial;
