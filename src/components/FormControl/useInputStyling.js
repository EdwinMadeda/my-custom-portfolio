import { useContext } from 'react';
import Store from '../../contexts/Store';

const useInputStyling = () => {
  const { setThemeVariant } = useContext(Store);
  return {
    style: {
      background: setThemeVariant({
        light: 'rgba(255, 255, 255, 0.5)',
        dark: 'rgba(0, 0, 0, 0.2)',
      }),
      boxShadow: 'var(--box-shadow-extra)',
    },
    className: `px-3 py-2 lg:py-[0.65rem] w-full rounded text-[var(--color-heading)] dark:text-white outline-none 
      border-2 border-transparent focus:border-[var(--color-accent)] 
      dark:focus:border-[var(--color-accent-light)] peer
       focus:placeholder:text-transparent`,
  };
};
export default useInputStyling;
