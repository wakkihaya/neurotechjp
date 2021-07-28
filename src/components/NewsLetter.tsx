import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from "react";

const NewsLetterMailForm: React.FC = () => {
  const url = process.env.MAILCHIMP_URL || "";

  return <MailchimpSubscribe url={url} />;
};

//TODO: header かFotterに埋め込む
