import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { BsFillPhoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import InputText from '../../components/FormControl/InputText';
import InputTextArea from '../../components/FormControl/InputTextArea';
import InputTel from '../../components/FormControl/InputTel';
import Store from '../../contexts/Store';
import CircularSpinner from '../../components/CircularSpinner';

import SnackBarContext from '../../contexts/SnackBarContext';

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

  const [status, setStatus] = useState('idle');

  const { displaySnackbar } = useContext(SnackBarContext);

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      await axios.post(
        REACT_APP_GET_FORM_URL,
        { ...data },
        { headers: { Accept: 'application/json' } }
      );
      displaySnackbar({
        msg: 'Thanks for your response. Will get back to you as soon as I can',
        variant: 'success',
      });

      setStatus('idle');
    } catch (error) {
      displaySnackbar({
        msg: error.message,
        variant: 'error',
      });

      setStatus('failed');
    }
  };

  const { setThemeVariant, CONTACTS } = useContext(Store);
  const [phone, email] = [CONTACTS?.phone?.[0], CONTACTS?.email?.[0]];
  const phoneLink = phone
    ? [
        {
          label: phone,
          link: `tel:${phone}`,
          Icon: <BsFillPhoneFill />,
        },
      ]
    : [];
  const emailLink = phone
    ? [
        {
          label: email,
          link: `mailto:${email}`,
          Icon: <BsFillPhoneFill />,
        },
      ]
    : [];

  return (
    <>
      {status === 'loading' && <CircularSpinner />}
      <section
        name="contact"
        className="dark:bg-transparent" /*bg-[var(--bg-gray)]*/
      >
        <div className="section-container">
          <div>
            <h2 className="section-title">Contact</h2>
          </div>

          <div className="section-content pt-4 lg:pt-8">
            {/* <h3 className="section-sub-title">Let's talk</h3> */}
            <div
              className="grid grid-cols-1 gap-7 max-w-[700px]
                lg:max-w-full lg:gap-8  lg:grid-cols-[minmax(0,_700px)_auto] items-start"
            >
              <div className="lg:order-2 lg:justify-self-center grid grid-cols-1 gap-3 max-w-[250px]">
                {[...phoneLink, ...emailLink].map(({ label, link, Icon }) => (
                  <Link
                    className="flex justify-start items-center px-2 py-3 rounded-xl  sm:px-3 hover:scale-105 active:scale-95 transition-all duration-300"
                    to={link}
                    style={{
                      background: setThemeVariant({
                        light: 'rgba(255, 255, 255, 0.8)',
                        dark: 'rgba(0, 0, 0, 0.2)',
                      }),
                      boxShadow: 'var(--box-shadow-extra)',
                    }}
                    key={`link-${label}`}
                  >
                    <span className="mr-2 text-[var(--dark)] dark:text-white text-xl">
                      {Icon}
                    </span>
                    <h5>{label}</h5>
                  </Link>
                ))}
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="rounded px-6 py-10 sm:px-8 md:px-10"
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
                  I am available for freelance or full-time positions. Reach out
                  and let's have a chat
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
                    placeholder="How can I help you?"
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
                    <Button
                      className="inline-flex"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
