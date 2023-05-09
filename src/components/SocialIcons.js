import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Store from '../contexts/Store';

import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import CustomToolTip from './CustomToolTip';

const SocialIconsTemplate = ({
  containerClass,
  itemClass,
  linkClass,
  iconClass,
  labelClass,
  iconSize = 22,
}) => {
  const { SOCIAL_LINKS, THEME } = useContext(Store);

  return (
    <ul className={containerClass()}>
      {SOCIAL_LINKS.map(({ label, bgColor, textColor, IconEl, to }, index) => (
        <li
          key={label}
          className={itemClass(bgColor, index)}
          style={{ boxShadow: 'var(--box-shadow-extra)' }}
        >
          <Link
            to={to}
            className={linkClass && linkClass(bgColor)}
            data-tooltip-id={`social-link-${label}`}
            data-tooltip-content={label}
            data-tooltip-float={true}
            data-tooltip-offset={20}
            data-tooltip-place="top"
          >
            <span className={iconClass && iconClass(textColor)}>
              <IconEl size={iconSize} />
            </span>
            <span className={labelClass && labelClass()}>{label}</span>
          </Link>
          <CustomToolTip id={`social-link-${label}`} className="lg:hidden" />
        </li>
      ))}
    </ul>
  );
};

export const SocialIconsDesktop = ({ className }) => {
  const { THEME } = useContext(Store);

  return (
    <SocialIconsTemplate
      containerClass={() =>
        'hidden  lg:block fixed bottom-0 right-0 -translate-y-[10%] z-30'
      }
      itemClass={(
        bgColor
      ) => `flex justify-center items-center rounded-[35px] mx-5 my-6
      w-[35px] h-[35px] relative overflow-hidden hover:overflow-visible  group/desktop-social-icon
       ${THEME === 'light' ? 'bg-white' : bgColor}
     `}
      linkClass={(
        bgColor
      ) => `absolute top-0 right-0 translate-x-[85px] group-hover/desktop-social-icon:-translate-x-0
      transition-all duration-500 ease-in-out
      flex justify-start items-center  w-[120px] h-full rounded-[35px] 
      ${THEME === 'light' ? 'bg-white' : bgColor}`}
      iconClass={(textColor) =>
        `w-[35px] h-[35px] flex justify-center items-center rounded-[50%]
        ${THEME === 'light' ? textColor : 'text-white'}`
      }
      labelClass={() =>
        `ml-1 flex-1 ${THEME === 'dark' && 'text-white'} 
        opacity-0 group-hover/desktop-social-icon:opacity-100 transition-all duration-300 ease-in-out`
      }
      iconSize={19}
    />
  );
};

export const SocialIcons = ({ className }) => {
  const { THEME } = useContext(Store);
  return (
    <>
      <SocialIconsTemplate
        containerClass={() =>
          `mx-auto flex space-x-6 sm:space-x-11 ${className}`
        }
        itemClass={(
          bgColor
        ) => `flex justify-center items-center h-[35px] w-[35px]  sm:h-[40px] sm:w-[40px] rounded-[50%] 
        ${THEME === 'light' ? 'bg-white' : bgColor} shadow-light
        cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out`}
        linkClass={() =>
          `w-full h-full flex justify-center items-center rounded-[50%]`
        }
        iconClass={(textColor) =>
          ` ${THEME === 'light' ? textColor : 'text-white'}`
        }
        labelClass={() => `hidden`}
        iconSize={19}
      />
    </>
  );
};
