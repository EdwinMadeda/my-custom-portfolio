import { useForm } from 'react-hook-form';
import { Button } from '../Button';

import InputText from '../FormControl/InputText';
import InputTextArea from '../FormControl/InputTextArea';
import InputTel from '../FormControl/InputTel';
import axios from 'axios';
import { useContext } from 'react';
import Store from '../../contexts/Store';

const Contact = () => {
  const { REACT_APP_GET_FORM_URL } = process.env;

  const {
    register,
    setError,
    clearErrors,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(
        REACT_APP_GET_FORM_URL,
        {
          ...data,
        },
        { headers: { Accept: 'application/json' } }
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const { setThemeVariant } = useContext(Store);

  return (
    <section name="contact" className="" /*py-10 bg-[var(--bg-gray)]*/>
      <div className="section-container items-start">
        <h2 className="section-title">Contact</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded p-10 mt-3"
          style={{
            background: setThemeVariant({
              light: 'rgba(255, 255, 255, 0.8)',
              dark: 'rgba(0, 0, 0, 0.2)',
            }),
            boxShadow: 'var(--box-shadow-extra)',
          }}
          id="js-contact-form"
        >
          <h3 className="section-sub-title">Let's talk</h3>
          <p className="mt-2 mb-1">
            I am available for freelance or full-time positions. Reach out and
            let's have a chat
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
            <InputText
              type="text"
              name="name"
              label="Name"
              labelVisible={true}
              placeholder="eg. Jane Doe"
              className="col-span-2"
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              watch={watch}
              rules={{
                required: 'Name is required.',
                minLength: {
                  value: 2,
                  message: "Name shouldn't be less than 2 characters",
                },
                pattern: {
                  value:
                    /^([a-zA-Z]{2,}\s?([a-zA-Z]{1,}'?-?[a-zA-Z]{2,})\s?([a-zA-Z]{1,})?)/,
                  message: 'Name is Invalid',
                },
              }}
            />
            <InputText
              type="email"
              name="email"
              label="Email"
              labelVisible={true}
              placeholder="eg. example@domain.com"
              className="col-span-2 lg:col-span-1"
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              watch={watch}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Invalid Email',
                },
              }}
            />
            <InputTel
              type="tel"
              name="phone"
              label="Phone"
              labelVisible={true}
              placeholder="eg. Phone"
              className="col-span-2 lg:col-span-1"
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              watch={watch}
              setError={setError}
              rules={{
                minLength: {
                  value: 9,
                  message: 'Number should be at least 9 characters',
                },
                maxLength: {
                  value: 15,
                  message: "Number shouldn't exceed 15 characters",
                },
                // pattern: {
                //   value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                //   message: 'Phone number is Invalid',
                // },
              }}
              setValue={setValue}
            />

            <InputTextArea
              name="msg"
              label="Message"
              labelVisible={true}
              placeholder="Write something..."
              errors={errors}
              clearErrors={clearErrors}
              className="col-span-2"
              register={register}
              watch={watch}
              rules={{
                required: 'Message is required',
              }}
            />
            <div className="mt-4 col-span-2">
              <Button className="inline-flex" onClick={handleSubmit(onSubmit)}>
                Send Message
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
