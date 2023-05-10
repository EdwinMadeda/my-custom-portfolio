import FormControl from '.';
import useInputStyling from './useInputStyling';

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
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        style={inputStyling.style}
        className={`${inputStyling.className} h-[150px] `}
        {...register(name, rules)}
      />
    </FormControl>
  );
};
export default InputTextArea;
