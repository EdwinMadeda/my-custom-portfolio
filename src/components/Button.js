import { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as DomLink } from 'react-router-dom';

import PageScroll from '../contexts/PageScrollContext';

const ButtonTemplate = ({
  children,
  onClick,
  containerClass,
  linkClass,
  to = '',
  linkType = 'scroll',
}) => {
  const { offset, smooth, duration } = useContext(PageScroll);
  linkClass = `font-bold leading-6 capitalize inline-flex justify-center items-center text-center align-middle select-none py-[7px] px-6 md:py-[10px] lg:px-8
  ${linkClass}`;

  return (
    <button
      className={`rounded-full border-solid border-2
      overflow-hidden transition-all duration-300  relative z-10

      before:absolute before:right-0 before:bottom-0 before:w-0 before:h-full before:rounded-full 
      before:-z-10 before:duration-300

      after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:rounded-full after:-z-20 after:duration-300 
      

      group/button hover:after:hover:w-0 hover:before:w-full
      ${containerClass}
      `}
      onClick={(e) => {
        onClick && onClick();
      }}
      type="button rounded-full"
    >
      {linkType === 'scroll' && (
        <ScrollLink
          to={to}
          smooth={smooth}
          duration={duration}
          offset={offset}
          className={linkClass}
        >
          {children}
        </ScrollLink>
      )}
      {linkType === 'dom' && (
        <DomLink to={to} className={linkClass}>
          {children}
        </DomLink>
      )}
    </button>
  );
};

export const Button = ({
  children,
  onClick,
  containerClass,
  linkClass,
  to = '',
}) => {
  containerClass = `border-[var(--color-primary)] before:bg-transparent after:bg-[var(--color-primary)] ${containerClass}`;
  linkClass = `text-white group-hover/button:text-[var(--dark)] 
              group-hover/button:dark:text-white  ${linkClass}`;

  return (
    <ButtonTemplate {...{ children, onClick, containerClass, linkClass, to }} />
  );
};

export const ButtonLight = ({
  children,
  onClick,
  containerClass,
  linkClass,
  to = '',
  linkType,
}) => {
  containerClass = `border-white before:bg-transparent after:bg-white ${containerClass}`;
  linkClass = `text-[var(--dark)] group-hover/button:text-white ${linkClass}`;

  return (
    <ButtonTemplate
      {...{ children, onClick, containerClass, linkClass, to, linkType }}
    />
  );
};
