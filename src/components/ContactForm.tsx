//TODO: send notification to slack

import { TextField } from "@material-ui/core";

import axios from "axios";

import { useForm } from "react-hook-form";

import { ContactGoogleForm } from "~/constants/ContactGoogleForm";

interface IFormInput {
  name: string;
  mail: string;
  message: string;
}
type ContactFormProps = {
  lang: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ lang }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async data => {
    const GOOGLE_FORM_ACTION = ContactGoogleForm.action;
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const submitParams = new FormData();

    submitParams.append(ContactGoogleForm.name, data.name);
    submitParams.append(ContactGoogleForm.mail, data.mail);
    submitParams.append(ContactGoogleForm.message, data.message);
    try {
      await axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-form--title">
          {lang === "EN" && <p> Contact us</p>}
          {lang === "JP" && <p> ご連絡はこちらから</p>}
        </div>
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
