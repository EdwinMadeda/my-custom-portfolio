import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiErrorAlt } from 'react-icons/bi';
import { IoWarningOutline } from 'react-icons/io5';
import { FiCheckCircle } from 'react-icons/fi';
import { TiTimesOutline } from 'react-icons/ti';
import { useContext } from 'react';
import SnackBarContext from '../contexts/SnackBarContext';

const VARIANTS = [
  {
    name: 'info',
    IconEl: <AiOutlineInfoCircle />,
    color: 'var(--color-variant-info)',
  },
  {
    name: 'success',
    IconEl: <FiCheckCircle />,
    color: 'var(--color-variant-success)',
  },
  {
    name: 'error',
    IconEl: <BiErrorAlt />,
    color: 'var(--color-variant-error)',
  },
  {
    name: 'warning',
    IconEl: <IoWarningOutline />,
    color: 'var(--color-variant-warning)',
  },
];

const Snackbar = () => {
  const { variant, msg, onClose } = useContext(SnackBarContext);
  const selectVariant = VARIANTS.find(({ name }) => name === variant);
  const { name, color, IconEl } = selectVariant ?? {};

  return (
    <>
      {selectVariant && (
        <div
          key={name}
          className={`Snackbar
                      fixed top-[calc(var(--nav-height)+1rem)] mx-auto  z-50
                      flex justify-center items-center max-w-[672px]
                      bg-[var(--bg-white-alt)] dark:bg-[var(--dark-secondary)] 
                      p-2 rounded-lg text-base
                     `}
          style={{
            color,
            boxShadow: `0px 3px 5px -1px rgba(0, 0, 0, 0.2),
          0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)`,
          }}
        >
          <span className="font-black">{IconEl}</span>
          <span className="mx-2 cursor-default">{msg}</span>
          <button type="button" className="text-xl" onClick={() => onClose()}>
            <TiTimesOutline />
          </button>
        </div>
      )}
    </>
  );
};
export default Snackbar;
