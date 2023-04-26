import { useEffect, useState } from 'react';
import FormControl from '.';

const InputTel = ({
  name,
  placeholder,
  label,
  labelVisible = false,
  errors,
  clearErrors,
  register = () => {},
  watch = () => null,
  setError = () => null,
  setValue = () => null,
  rules = {},
  className,
}) => {
  const [iti, setIti] = useState(null);

  useEffect(() => {
    const input = document.querySelector(`#js-${name}`);

    if (input) {
      const iti = window.intlTelInput(input, {
        utilsScript:
          'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js',
        initialCountry: 'auto',
        geoIpLookup: function (callback) {
          fetch('https://ipapi.co/json')
            .then(function (res) {
              return res.json();
            })
            .then(function (data) {
              callback(data.country_code);
            })
            .catch(function () {
              callback('ke');
            });
        },
        customPlaceholder: function (
          selectedCountryPlaceholder,
          selectedCountryData
        ) {
          return 'e.g. ' + selectedCountryPlaceholder;
        },
        nationalMode: true,
        // autoInsertDialCode: true,
        autoPlaceholder: 'aggressive',
        dropdownContainer: document.querySelector('#js-input-tel-container'),
        formatOnDisplay: true,
        preferredCountries: ['ke'],
      });
      setIti(iti);
    }
  }, [name]);

  const itiValidate = (iti, inputValue, isSetItiNumber = false) => {
    const errorMap = [
      'Invalid number',
      'Country code not selected',
      'Number too short',
      'Number too long',
      'Invalid number',
    ];

    const clearItiError = () => {
      if (errors[name]?.type === 'iti') clearErrors(name);
    };

    if (inputValue.trim()) {
      clearItiError();
      if (iti.isValidNumber()) {
        clearItiError();
        return isSetItiNumber ? iti.getNumber() : inputValue;
      } else {
        setError(
          name,
          {
            type: 'iti',
            message: errorMap[iti.getValidationError()],
          },
          { shouldFocus: true }
        );
      }
    }

    return false;
  };

  const onBlur = (e) => {
    const result = itiValidate(iti, e.target.value);
    if (result) return e;
  };

  const onChange = (e) => {
    clearErrors(name);
    const {
      target: { value },
    } = e;
    const lastDigit = value.slice(-1);
    if (isNaN(lastDigit)) {
      setError(
        name,
        {
          type: 'INVALID_DIGIT',
          message: `${lastDigit} is invalid!. Only numbers allowed!`,
        },
        { shouldFocus: true }
      );
    } else {
      if (errors[name]?.type === 'INVALID_DIGIT') clearErrors(name);
      if (iti.isValidNumber()) setValue(name, iti.getNumber());
      else return e;
    }
  };

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
        id={`js-${name}`}
        type="tel"
        name={name}
        placeholder={labelVisible ? placeholder : label}
        style={{
          background: 'rgba(255, 255, 255, 0.5)',
          boxShadow: 'var(--box-shadow-extra)',
        }}
        className="px-3 py-3  w-full rounded accent-[var(--color-accent)] peer
         focus:placeholder:text-transparent"
        {...register(name, { ...rules, onChange, onBlur })}
      />
    </FormControl>
  );
};
export default InputTel;
