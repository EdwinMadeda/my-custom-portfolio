import { useContext } from 'react';
import { Tooltip } from 'react-tooltip';
import Store from '../contexts/Store';

const CustomToolTip = (props) => {
  const { THEME } = useContext(Store);
  const baseStyles = {
    background: THEME === 'light' ? '#fff' : 'var(--dark-secondary)',
    color: THEME === 'light' ? 'var(--dark)' : '#fff',
    padding: '0 0.5rem',
    fontSize: '0.7rem',
    fontWeight: '500',
    borderRadius: '8px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
  };
  const { style } = props;
  return <Tooltip {...props} style={{ ...baseStyles, ...style }} />;
};
export default CustomToolTip;
