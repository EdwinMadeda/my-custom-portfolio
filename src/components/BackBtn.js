const BackBtn = ({ onClick, containerClass = '', variant = 'light' }) => {
  return (
    <button
      className="justify-self-start text-[var(--color-primary)] underline hover:scale-105"
      onClick={() => {
        onClick();
      }}
    >
      back
    </button>
  );
};
export default BackBtn;
