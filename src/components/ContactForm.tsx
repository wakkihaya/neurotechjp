//TODO: send data to google form
//TODO: Set a condition by props Jp or En
//TODO: send notification to slack

import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  mail: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <>
      <div className="contact-form">
        <div className="contact-form--title">Contact us</div>
        <div className="contact-form--detail">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="name"
              {...register("name", { required: true })}
              error={Boolean(errors.name)}
              helperText={errors.name && errors.name.message}
              className="contact-form--detail-text"
              size="medium"
            />
            <TextField
              fullWidth
              label="mail"
              {...register("mail", { required: true })}
              error={Boolean(errors.mail)}
              helperText={errors.mail && errors.mail.message}
              className="contact-form--detail-text"
            />
            <TextField
              fullWidth
              multiline
              rows={3}
              label="message"
              {...register("message", { required: true })}
              error={Boolean(errors.message)}
              helperText={errors.message && errors.message.message}
              className="contact-form--detail-text"
            />
            <div className="contact-form--detail-submit">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
