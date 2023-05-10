import ButtonTemplate from './ButtonTemplate';

const Button = ({
  children,
  onClick,
  containerClass,
  linkClass,
  anchor,
  domLink,
  disabled = false,
}) => {
  containerClass = `border-[var(--color-primary)] before:bg-transparent after:bg-[var(--color-primary)] ${containerClass}`;
  linkClass = `text-white 
                ${
                  !disabled &&
                  `group-hover/button:text-[var(--dark)] 
                   group-hover/button:dark:text-white`
                }
                ${linkClass}`;

  return (
    <ButtonTemplate
      {...{
        children,
        onClick,
        containerClass,
        linkClass,
        anchor,
        domLink,
        disabled,
      }}
    />
  );
};

export default Button;
