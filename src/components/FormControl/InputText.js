import { useContext } from 'react';
import FormControl from '.';
import Store from '../../contexts/Store';

const InputText = ({
  type = 'text',
  name,
  placeholder,
  label,
  labelVisible = false,
  errors,
  clearErrors,
  register = () => {},
  watch = () => null,
  rules = {},
  className,
}) => {
  const { setThemeVariant } = useContext(Store);

  return (
    <FormControl
      name={name}
      label={label}
      labelVisible={labelVisible}
      errors={errors}
      watch={watch}
      className={className}
    >
      <input
        type={type}
        id={name}
        name={name}
        placeholder={labelVisible ? placeholder : label}
        style={{
          background: setThemeVariant({
            light: 'rgba(255, 255, 255, 0.5)',
            dark: 'rgba(0, 0, 0, 0.2)',
          }),
          boxShadow: 'var(--box-shadow-extra)',
        }}
        className="px-3 py-3 w-full rounded text-[var(--color-heading)] dark:text-white outline-none 
        border-2 border-transparent focus:border-[var(--color-accent)] peer
         focus:placeholder:text-transparent"
        {...register(name, rules)}
      />
    </FormControl>
  );
};
export default InputText;
