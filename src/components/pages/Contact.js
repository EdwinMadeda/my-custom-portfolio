import { useForm } from 'react-hook-form';
import Button from '../Button';
import InputText from '../FormControl/InputText';
import InputTextArea from '../FormControl/InputTextArea';

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section name="contact" className="py-10 bg-[var(--bg-gray)]">
      <div className="section-container items-start">
        <h2 className="section-title">Contact</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded p-10"
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            boxShadow: 'var(--box-shadow-extra)',
          }}
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
                    /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
                  message: 'Name is Invalid',
                },
              }}
            />
            <InputText
              type="email"
              name="email"
              label="Email"
              labelVisible={false}
              placeholder="eg. example@domain.com"
              className=""
              errors={errors}
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
            <InputText
              type="tel"
              name="phone"
              label="Phone"
              labelVisible={false}
              placeholder="Phone"
              className=""
              errors={errors}
              register={register}
              watch={watch}
              rules={{
                pattern: {
                  value: /^\+[1-9]\d{1,14}$/,
                  message: 'Invalid Phone Number',
                },
              }}
            />
            <InputTextArea
              name="msg"
              label="Message"
              labelVisible={true}
              placeholder="Write something..."
              errors={errors}
              className="col-span-2"
              register={register}
              watch={watch}
              rules={{
                required: 'Message is required',
              }}
            />
            <div className="mt-4">
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
