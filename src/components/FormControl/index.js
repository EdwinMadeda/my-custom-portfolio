import ErrorMsg from '../ErrorMsg';

const FormControl = ({
  id = '',
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
      id={id}
      className={`flex flex-col-reverse justify-center items-start w-full ${className}`}
    >
      <ErrorMsg visible={Boolean(errors[name])}>
        {errors[name]?.message}
      </ErrorMsg>

      {children}
      <label
        className={`${
          !labelVisible ? (!Boolean(watch(name)) ? 'hidden' : '') : ''
        } peer-focus:block font-bold pt-1 text-[var(--color-heading)] dark:text-white`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};
export default FormControl;
