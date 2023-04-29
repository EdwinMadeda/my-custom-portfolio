import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import PageScroll from '../../../contexts/PageScrollContext';
import { useNavigate } from 'react-router-dom';
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
    { label: 'Home', to: 'home', isActive: true, domLink: '/' },
    { label: 'About', to: 'about', isActive: false, domLink: '/' },
    { label: 'Skills', to: 'skills', isActive: false, domLink: '/' },
    { label: 'Works', to: 'works', isActive: false, domLink: '/' },
    { label: 'Contact', to: 'contact', isActive: false, domLink: '/' },
    TESTIMONIALS.length > 0
      ? {
          label: 'Testimonials',
          to: 'testimonials',
          isActive: false,
          domLink: '/',
        }
      : {},
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

  const { offset, smooth, duration } = useContext(PageScroll);
  const navigate = useNavigate();

  return (
    <ul className={containerClass()} style={containerStyle}>
      {links.map(({ label, to, isActive, domLink }) => (
        <li key={label} className={linkContainerClass && linkContainerClass()}>
          <Link
            data-hover={label}
            className={`${linkClass(isActive)}`}
            onClick={() => {
              navigate(domLink);
              onSetLinks(label);
              onClick && onClick();
            }}
            to={to}
            offset={offset}
            smooth={smooth}
            duration={duration}
          >
            <span className={linkTextClass(isActive)}>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
