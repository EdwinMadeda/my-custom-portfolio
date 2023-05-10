import { useContext } from 'react';
import Store from '../../contexts/Store';
import SocialIconsTemplate from './SocialIconsTemplate';

const SocialIconsDesktop = ({ className }) => {
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
      ) => `absolute top-0 right-0 translate-x-[115px] group-hover/desktop-social-icon:-translate-x-0
        transition-all duration-500 ease-in-out
        flex justify-start items-center  w-[150px] h-full rounded-[35px] 
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

export default SocialIconsDesktop;
