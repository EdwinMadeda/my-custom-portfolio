import ButtonTemplate from './ButtonTemplate';

const ButtonLight = ({
  children,
  onClick,
  containerClass,
  linkClass,
  anchor,
  domLink,
  disabled = false,
}) => {
  containerClass = `border-white before:bg-transparent after:bg-white ${containerClass}`;
  linkClass = `text-[var(--dark)] 
            ${!disabled && `group-hover/button:text-white`} 
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

export default ButtonLight;
