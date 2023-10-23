import { Footer, Header, Meta, Alert } from "~components";
import React from "react";

const ConsultingPage: React.FC = () => {
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
        <Alert content={"test"} />
      </div>
      <Footer />
    </>
  );
};

export default ConsultingPage;
