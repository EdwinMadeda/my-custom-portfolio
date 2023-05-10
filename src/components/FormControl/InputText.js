import FormControl from '.';
import useInputStyling from './useInputStyling';

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
  const inputStyling = useInputStyling();

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
        id={name}
        type={type}
        name={name}
        placeholder={labelVisible ? placeholder : label}
        style={inputStyling.style}
        className={inputStyling.className}
        {...register(name, rules)}
      />
    </FormControl>
  );
};
export default InputText;
