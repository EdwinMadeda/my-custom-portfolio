import { Link } from 'react-router-dom';

const NavLink = ({ label, to }) => {
  return (
    <Link className="font-bold mx-3" to={to}>
      {label}
    </Link>
  );
};
export default NavLink;
