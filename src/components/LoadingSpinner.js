import { CircularProgress } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <div className="fixed top-[50%] left-[50%] z-40 flex justify-center items-center">
      <CircularProgress sx={{ color: 'var(--color-primary)' }} />
    </div>
  );
};
export default LoadingSpinner;
