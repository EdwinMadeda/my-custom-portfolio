import FormControl from '.';

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
          background: 'rgba(255, 255, 255, 0.5)',
          boxShadow: 'var(--box-shadow-extra)',
        }}
        className="px-3 py-2 w-full rounded accent-[var(--color-accent)] h-[150px] peer
        focus:placeholder:text-transparent"
        {...register(name, rules)}
      />
    </FormControl>
  );
};
export default InputTextArea;
