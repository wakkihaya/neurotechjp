import { Footer, Header, Meta, Alert } from "~components";
import React from "react";

const ConsultingPage: React.FC = () => {
  const AlertContent: React.FC = () => (
    <div className="consulting--alert">
      On November 1, 2023, NeurotechJP, LLC transferred its part of business to
      Actra Corporation. As a result, our media will support Actra Corporation's
      consulting services using neuromarketing. For more information, please
      refer to{" "}
      <a
        href={"https://neurotecjp.com" /**TODO: PR times link */}
        target="_blank"
        rel="noreferrer"
        className="consulting--alert--cta"
      >
        this press release.
      </a>
    </div>
  );

  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: "NeurotechJP is running to reveal “The killer use cases of Neurotech”.We will publish trends, columns, and interviews with pioneers who are working at the cutting edge of the neurotech field.",
          link: "https://neurotechjp.com",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="slides__bg">
        <Header isBgTransparent={true} />
        <div className="consulting--title">Consulting service</div>
      </div>
      <div className="consulting--container">
        <Alert content={<AlertContent />} />
        <div className="consulting--content">
          <div className="consulting--content--explanation">
            <div className="consulting--content--explanation--title">
              Neuromarketing - Applying neuroscience to marketing
            </div>
            <div className="consulting--content--explanation--description">
              Brain activity is measured to evaluate sensitivity to commercials
              and products, and the results are used to make improvements and
              refinements. By measuring biometric information, it is possible to
              visualize unconscious and latent information that cannot be
              obtained through questionnaires.　Please contact us for details.
            </div>
            <a
              href="https://actra.co.jp"
              target="_blank"
              rel="noreferrer"
              className="consulting--content--explanation--cta"
            >
              See details
            </a>
          </div>
          <div className="consulting--content--image__wrapper">
            <img
              src="/img/consulting/actra-service.jpeg"
              className="consulting--content--image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConsultingPage;
