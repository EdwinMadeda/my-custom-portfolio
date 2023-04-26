import FormControl from '.';

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
          background: 'rgba(255, 255, 255, 0.5)',
          boxShadow: 'var(--box-shadow-extra)',
        }}
        className="px-3 py-3  w-full rounded accent-[var(--color-accent)] peer
         focus:placeholder:text-transparent"
        {...register(name, rules)}
      />
    </FormControl>
  );
};
export default InputText;
