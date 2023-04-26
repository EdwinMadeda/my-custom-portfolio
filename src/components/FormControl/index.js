const FormControl = ({
  name,
  label,
  labelVisible = false,
  errors = {},
  watch = () => null,
  className,
  children,
}) => {
  return (
    <div
      className={`flex flex-col-reverse justify-center items-start w-full ${className}`}
    >
      {children}

      {errors[name] ? (
        <p className="text-[red] text-sm">*{errors[name]?.message}</p>
      ) : (
        <label
          className={`${
            // (!Boolean(watch(name)) || !labelVisible) && 'hidden'
            !Boolean(watch(name)) ? (!labelVisible ? 'hidden' : '') : ''
          } peer-focus:block font-bold py-1 text-[var(--color-heading)]`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormControl;
