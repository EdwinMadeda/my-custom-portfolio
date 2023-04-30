import { useContext } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PageScroll from '../../../contexts/PageScrollContext';
import Store from '../../../contexts/Store';

const NavLinks = ({
  onClick,
  containerStyle = {},
  containerClass,
  linkContainerClass,
  linkClass,
  linkTextClass,
}) => {
  const { TESTIMONIALS } = useContext(Store);

  const [links, setLinks] = useState([
    { label: 'Home', anchor: 'home', isActive: true, domLink: '/' },
    { label: 'About', anchor: 'about', isActive: false, domLink: '/' },
    { label: 'Skills', anchor: 'skills', isActive: false, domLink: '/' },
    { label: 'Works', anchor: 'works', isActive: false, domLink: '/' },
    TESTIMONIALS.length > 0
      ? {
          label: 'Testimonials',
          anchor: 'testimonials',
          isActive: false,
          domLink: '/',
        }
      : {},
    { label: 'Contact', anchor: 'contact', isActive: false, domLink: '/' },
  ]);
  const onSetLinks = (label) => {
    setTimeout(() => {
      setLinks(
        links.map((link) => ({
          ...link,
          isActive: link.label === label,
        }))
      );
    }, 300);
  };

  const { navigateAndScroll } = useContext(PageScroll);

  return (
    <ul className={containerClass()} style={containerStyle}>
      {links.map(({ label, anchor, isActive, domLink }) => (
        <li key={label} className={linkContainerClass && linkContainerClass()}>
          <NavLink
            data-hover={label}
            className={`${linkClass(isActive)}`}
            onClick={() => {
              navigateAndScroll({
                anchor,
                domLink,
                callback: () => {
                  onSetLinks(label);
                  onClick && onClick();
                },
              });
            }}
            to={domLink}
          >
            <span className={linkTextClass(isActive)}>{label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
