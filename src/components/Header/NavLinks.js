import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PageScroll from '../../contexts/PageScrollContext';
import Store from '../../contexts/Store';

const NavLinks = ({
  onClick,
  containerStyle = {},
  containerClass,
  linkContainerClass,
  linkClass,
  linkTextClass,
}) => {
  const { WORKS, TESTIMONIALS } = useContext(Store);

  const [links, setLinks] = useState([
    {
      label: 'Home',
      anchor: 'home',
      isActive: true,
      domLink: '/',
      visible: true,
    },
    {
      label: 'About',
      anchor: 'about',
      isActive: false,
      domLink: '/',
      visible: true,
    },
    {
      label: 'Skills',
      anchor: 'skills',
      isActive: false,
      domLink: '/',
      visible: true,
    },
    {
      label: 'Works',
      anchor: 'works',
      isActive: false,
      domLink: '/',
      visible: true,
    },
    {
      label: 'Testimonials',
      anchor: 'testimonials',
      isActive: false,
      domLink: '/',
      visible: true,
    },
    {
      label: 'Contact',
      anchor: 'contact',
      isActive: false,
      domLink: '/',
      visible: true,
    },
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

  useEffect(() => {
    setLinks((links) =>
      links.map((link) => {
        switch (link.anchor) {
          case 'works':
            return { ...link, visible: WORKS.length > 0 };
          case 'testimonials':
            return { ...link, visible: TESTIMONIALS.length > 0 };
          default:
            return link;
        }
      })
    );
  }, [WORKS.length, TESTIMONIALS.length]);

  return (
    <ul className={containerClass()} style={containerStyle}>
      {links.map(({ label, anchor, isActive, domLink, visible }) => (
        <li
          key={label}
          className={`${linkContainerClass && linkContainerClass()} ${
            !visible && 'hidden'
          }`}
          onClick={() => onClick && onClick()}
        >
          <NavLink
            data-hover={label}
            className={`${linkClass(isActive)}`}
            onClick={() => {
              navigateAndScroll({
                anchor,
                domLink,
                callback: () => {
                  onSetLinks(label);
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
