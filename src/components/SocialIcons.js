import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-600',
    IconEl: <FaLinkedin size={22} />,
    to: '',
  },
  {
    label: 'Github',
    bgColor: 'bg-[#333333]',
    textColor: 'text-[#333333]',
    IconEl: <FaGithub size={22} />,
    to: '',
  },
  {
    label: 'Email',
    bgColor: 'bg-[#6fc2b0]',
    textColor: 'text-[#6fc2b0]',
    IconEl: <HiOutlineMail size={22} />,
    to: '',
  },
  {
    label: 'Resume',
    bgColor: 'bg-[#565f69]',
    textColor: 'text-[#565f69]',
    IconEl: <BsFillPersonLinesFill size={22} />,
    to: '',
  },
];

const SocialIconsTemplate = ({
  containerClass,
  itemClass,
  linkClass,
  iconClass,
  labelClass,
}) => {
  return (
    <ul className={containerClass()}>
      {SOCIAL_LINKS.map(({ label, bgColor, textColor, IconEl, to }, index) => (
        <li key={label} className={itemClass(bgColor, index)}>
          <Link to={to} className={linkClass && linkClass()}>
            <span className={iconClass && iconClass(textColor)}>{IconEl}</span>
          </Link>
          <span className={labelClass && labelClass()}>{label}</span>
        </li>
      ))}
    </ul>
  );
};

export const SocialIconsDesktop = ({ className }) => {
  return (
    <SocialIconsTemplate
      containerClass={() =>
        'hidden  lg:block fixed top-1/2 right-0 -translate-y-1/2'
      }
      itemClass={(
        bgColor,
        index
      ) => `flex justify-start items-center cursor-pointer
        h-[50px] w-[130px] translate-x-[80px]
        hover:translate-x-0 hover:rounded-l
        active:scale-105
        transition-all duration-300 ease-in-out
        ${bgColor}
        ${
          index === 0
            ? 'rounded-tl'
            : index === SOCIAL_LINKS.length - 1
            ? 'rounded-bl'
            : ''
        }`}
      linkClass={() => `h-full  text-white`}
      iconClass={() => `h-full w-[50px] flex justify-center items-center`}
      labelClass={() => `text-white mx-1`}
    />
  );
};

export const SocialIcons = ({ className }) => {
  return (
    <>
      <SocialIconsTemplate
        containerClass={() =>
          `mx-auto flex space-x-6 sm:space-x-11 ${className}`
        }
        itemClass={() => `flex justify-center items-center h-[40px] w-[40px]  sm:h-[50px] sm:w-[50px] rounded-[50%] bg-white shadow-sm 
        shadow-[var(--box-shadow-regular)]-500/50 cursor-pointer hover:scale-125 active:scale-95 transition-all duration-200 ease-in-out`}
        iconClass={(textColor) => `${textColor}`}
        labelClass={() => `hidden`}
      />
    </>
  );
};
