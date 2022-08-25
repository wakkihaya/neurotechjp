import { Footer, Header, Meta } from "~components";
import React from "react";

const BasicTheoriesOfNeurotechnology: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "Basic Theories of Neurotechnology | NeurotechJP",
          desc:
            "This slide is about the basic theories of Neurotechnology. It shows" +
            "1.  An overview of this area with a market value." +
            "2. Basic knowledge including types of neurotechnologies, basics of neuroscience, and software engineering." +
            "3.Use cases with neurotechnologies",
          link: "https://neurotechjp.com/slides/basic-theories-of-neurotechnology/",
          image:
            "https://neurotechjp.com/img/slides/slide-basic-theory-neurotech.jpg",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="slides-item">
        <div className="slides-item--frame">
          <iframe
            allowFullScreen
            src="https://www.slideshare.net/slideshow/embed_code/key/ohvZ4HKmUH5cGa"
          />
        </div>
        <div className="slides-item--title">
          Basic Theories of Neurotechnology
        </div>
        <div className="slides-item--subtitle">
          This slide is about the basic theories of Neurotechnology. It shows
          <br />
          1. An overview of this area with a market value. <br />
          2. Basic knowledge including types of neurotechnologies, basics of
          neuroscience, and software engineering. <br />
          3. Use cases with neurotechnologies.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BasicTheoriesOfNeurotechnology;
