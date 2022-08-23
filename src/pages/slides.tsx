import SlideContent from "~components/SlideContent";
import { Footer } from "~components/Footer";
import { Header } from "~components/Header";
import { Meta } from "~components/Meta";
import React from "react";

const SlidesPage: React.FC = () => {
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
        <div className="slides--title">
          Useful resources about Neurotechnology.
        </div>
      </div>
      <div className="slides-container">
        <SlideContent
          linkRef="/slides/basic-theories-of-neurotechnology"
          imgSrc="/img/slides/slide-basic-theory-neurotech.jpg"
          title="Basic Theories of Neurotechnology"
        >
          This slide is about the basic theories of Neurotechnology. It shows{" "}
          <br />
          1. An overview of this area with a market value. <br />
          2. Basic knowledge including types of neurotechnologies, basics of
          neuroscience, and software engineering. <br />
          3. Use cases with neurotechnologies.
        </SlideContent>
        <SlideContent
          linkRef="/slides/bci-landscape-2022"
          imgSrc="/img/slides/bci-landscape-2022-en.jpg"
          title="BCI landscape 2022"
        >
          BCI Landscape 2022 is out now LIVE! 🧠
          <br />
          The landscape shows major players in various categories that are
          developing life-changing BCI technologies in 2022.
        </SlideContent>
      </div>
      <Footer />
    </>
  );
};

export default SlidesPage;
