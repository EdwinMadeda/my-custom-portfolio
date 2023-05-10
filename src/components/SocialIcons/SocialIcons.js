import { useContext } from 'react';
import Store from '../../contexts/Store';
import SocialIconsTemplate from './SocialIconsTemplate';

const SocialIcons = ({ className }) => {
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

export default SocialIcons;
