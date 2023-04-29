import { useContext } from 'react';
import FormControl from '.';
import Store from '../../contexts/Store';

const InputTextArea = ({
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
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        style={{
          background: setThemeVariant({
            light: 'rgba(255, 255, 255, 0.5)',
            dark: 'rgba(0, 0, 0, 0.2)',
          }),
          boxShadow: 'var(--box-shadow-extra)',
        }}
        className="px-3 py-2 w-full rounded  
        h-[150px] peer
        outline-none 
        border-2 border-transparent focus:border-[var(--color-accent)]
        focus:placeholder:text-transparent"
        {...register(name, rules)}
      />
    </FormControl>
  );
};
export default InputTextArea;
