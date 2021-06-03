import Header from "~components/Header";
import Footer from "~components/Footer";
import { Meta } from "~components/Meta";

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
          link: "https://neurotechjp.com/resources/basic-theories-of-neurotechnology/",
          image:
            "https://neurotechjp.com/resources/slide-basic-theory-neurotech.jpg",
        }}
      />
      <Header isBgTransparent={false} />
      <div className="resources-item">
        <div className="resources-item--main">
          <iframe
            src="https://www.slideshare.net/slideshow/embed_code/key/ohvZ4HKmUH5cGa"
            allowFullScreen
          />
        </div>
        <div className="resources-item--title">
          Basic Theories of Neurotechnology
        </div>
        <div className="resources-item--subtitle">
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
