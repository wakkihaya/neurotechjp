import { Footer, Header, Meta } from "~components";
import React from "react";

const CES2023: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "CES2023 Neurotech Report | NeurotechJP",
          desc: " We went to CES2023 and conducted on-site interviews with neurotech companies from around the world. This is a report document summarizing the cutting-edge neurotech.",
          link: "https://neurotechjp.com/slides/ces-2023/",
          image: "https://neurotechjp.com/img/slides/ces2023-en.png",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--main">
          <img src="/img/slides/ces2023-menu-en.jpg" />
        </div>
        <div className="slides-item--title">CES2023 Neurotech Report</div>
        <div className="slides-item--subtitle">
          We went to CES2023 and conducted on-site interviews with neurotech
          companies from around the world. This is a report document summarizing
          the cutting-edge neurotech.
          <br />
          If you are interested in purchasing/hearing from us, please contact us
          using the form below!
          <br />
          <br />
          [Price]
          <br /> - CES2023 Basic report: $6000
          <br /> - (Optional) CES2023 Custom report: $2000〜
        </div>
        <div className="slides-item--button">
          <a
            href="https://survey.typeform.com/to/qPJz3ebs"
            target="_blank"
            rel="noreferrer"
          >
            Register Form
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CES2023;
