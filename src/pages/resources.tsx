import Link from "next/link";

import Footer from "~components/Footer";
import Header from "~components/Header";
import { Meta } from "~components/Meta";

const ResourcesPage: React.FC = () => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: 'NeurotechJP is running to reveal “The killer use cases of Neurotech”.We will publish trends, columns, and interviews with pioneers who are working at the cutting edge of the neurotech field.',
          link: "https://neurotechjp.com",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="resources__bg">
        <Header isBgTransparent={true} />
        <div className="resources--title">
          Useful resources about Neurotechnology.
        </div>
      </div>
      <div className="resources-container">
        <Link href="/resources/basic-theories-of-neurotechnology">
          <div className="resources-container--content">
            <div className="resources-container--content-image">
              <img src="/img/resources/slide-basic-theory-neurotech.jpg" />
            </div>
            <div className="resources-container--content-text content-text">
              <div className="content-text--title">
                Basic Theories of Neurotechnology
              </div>
              <div className="content-text--subtitle">
                This slide is about the basic theories of Neurotechnology. It
                shows <br />
                1. An overview of this area with a market value. <br />
                2. Basic knowledge including types of neurotechnologies, basics
                of neuroscience, and software engineering. <br />
                3. Use cases with neurotechnologies.
              </div>
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ResourcesPage;
