import Logo from '../Logo';
import { useEffect, useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import NavLinks from './NavLinks';
import { SocialIconsDesktop } from '../SocialIcons';

const Header = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const stickNavBar = () => {
      if (window !== undefined) {
        const windowHeight = window.scrollY;
        setIsNavSticky(windowHeight > 70);
      }
    };

    window.addEventListener('scroll', stickNavBar);
    return () => {
      window.removeEventListener('scroll', stickNavBar);
    };
  }, []);

  return (
    <header>
      <nav
        className={`flex justify-between items-center h-[var(--nav-height-mobile)] md:h-[var(--nav-height)] fixed top-0 left-1/2 -translate-x-1/2 w-full z-20 ${
          isNavSticky || isHamburgerActive ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center mx-auto px-5 py-2 md:py-5 h-full w-full max-w-[1000px]">
          <Logo />
          <HamburgerIcon
            isActive={isHamburgerActive}
            setIsActive={(status) => setIsHamburgerActive(status)}
          />
          <div
            className={`md:hidden absolute w-full h-screen left-0 top-[var(--nav-height-mobile)] ${
              isHamburgerActive ? 'bg-[var(--dark)] opacity-70' : 'hidden'
            }`}
          ></div>
          <div
            className={`md:hidden absolute w-full h-screen left-0 top-[calc(var(--nav-height-mobile)+1px)] z-20 flex justify-center items-center overflow-hidden transition-all duration-500 ease-in
            ${isHamburgerActive ? '' : 'invisible'}`}
          >
            <NavLinks
              containerClass={() =>
                `absolute bg-white py-5 px-6 pb-10 w-full  left-0 z-10 top-0  transtion-all duration-500 ease-in-out
                bg-center bg-fixed bg-cover bg-no-repeat w-full
                ${isHamburgerActive ? 'mt-0' : 'mt-[-999px]'}`
              }
              linkContainerClass={() =>
                'w-full flex flex-col justify-center items-center'
              }
              linkClass={() =>
                `font-bold w-full border-b-[1px] border-[#e0e0e0] flex justify-start items-center`
              }
              linkTextClass={(isActive) =>
                `py-3 relative  after:absolute after:h-[2px] after:w-full after:bg-[var(--color-primary2)] after:bottom-0 after:left-0  hover:after:block ${
                  isActive ? 'after:block' : 'after:hidden'
                }  `
              }
            />
          </div>

          <NavLinks
            containerClass={() => 'hidden md:flex md:space-x-11 font-bold'}
            linkClass={(
              isActive
            ) => `nav-link block relative cursor-pointer after:duration-300 after:content-[attr(data-hover)] after:absolute after:left-1/2 after:top-[30%] after:whitespace-nowrap after:opacity-0 after:-translate-x-1/2 after:p-1 after:lowercase after:text-[17px] hover:after:top-1/2 hover:after:opacity-100 after:hover:-translate-x-1/2 after:hover:-translate-y-1/2 group 

            before:absolute before:h-[8px] before:w-[8px] before:rounded-full before:bg-[var(--color-primary2)] before:left-1/2 before:-translate-x-1/2 before:-bottom-3 

            hover:before:visible
            
          ${isActive ? 'before:visible' : 'before:invisible'}
          `}
            linkTextClass={() =>
              'block uppercase text-[14px] transition-all duration-400 group-hover:invisible'
            }
          />
        </div>
      </nav>
      <SocialIconsDesktop />
    </header>
  );
};
export default Header;
