import { Footer, Header, Meta } from "~components";
import React from "react";

const CES2022: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "CES2022 Neurotech report | NeurotechJP",
          desc: "We went to CES2022 and conducted on-site interviews with neurotech companies from around the world. This is a report document summarizing the cutting-edge neurotech",
          link: "https://neurotechjp.com/slides/ces-2022/",
          image: "https://neurotechjp.com/img/slides/ces2022-en.jpg",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--main">
          <img src="/img/slides/ces2022-menu-en.jpg" />
        </div>
        <div className="slides-item--title">CES2022 Neurotech Report</div>
        <div className="slides-item--subtitle">
          We went to CES2022 and conducted on-site interviews with neurotech
          companies from around the world. This is a report document summarizing
          the cutting-edge neurotech.
          <br />
          If you are interested in purchasing/hearing from us, please contact us
          using the form below!
          <br />
          <br />
          Price: $3000
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

export default CES2022;
