import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({
  containerStyle = {},
  containerClass,
  linkContainerClass,
  linkClass,
  linkTextClass,
}) => {
  const [links, setLinks] = useState([
    { label: 'Home', to: 'home', isActive: true },
    { label: 'About', to: 'about', isActive: false },
    { label: 'Skills', to: 'skills', isActive: false },
    { label: 'Work', to: 'work', isActive: false },
    { label: 'Contact', to: 'contact', isActive: false },
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

  return (
    <ul className={containerClass()} style={containerStyle}>
      {links.map(({ label, to, isActive }) => (
        <li key={label} className={linkContainerClass && linkContainerClass()}>
          <Link
            data-hover={label}
            className={`${linkClass(isActive)}`}
            // to={to}
            onClick={() => onSetLinks(label)}
          >
            <span className={linkTextClass(isActive)}>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;
