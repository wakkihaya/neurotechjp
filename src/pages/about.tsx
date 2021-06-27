import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { Meta } from "~/components/Meta";

import useResponsive from "~/hooks/use-responsive";

const AboutPage: React.FC = () => {
  const { isDesktop } = useResponsive();

  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: 'NeurotechJP is running to reveal “The killer use cases of Neurotech.We will publish trends", columns, and interviews with pioneers who are working at the cutting edge of the neurotech field.',
          link: "https://neurotechjp.com",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="about__bg">
        <Header isBgTransparent={true} />
        <div className="about--title">Get a front line in Neurotech.</div>
      </div>
      <div className="about-container">
        <div className="about-container--index">
          <div className="about-container--index-title">About NeurotechJP</div>
          <div className="about-container--index-subtitle">
            NeurotechJP is running to reveal “The killer use cases of
            Neurotech”. <br />
            We will publish trends, columns, and interviews with pioneers who
            are working at the cutting edge of the neurotech field.
          </div>
        </div>
        <div className="about-container--index">
          <div className="about-container--index-title">About organaizer</div>
          <div className="about-container--index_box">
            <div className="about-container--index-subtitle">
              Hayato Waki (Writer, Interviewer) <br />
            </div>
            <div className="about-container--index-subtitle-text">
              At University of Tsukuba in Japan, he worked on the research
              project about BCI. <br /> After experiencing multiple software
              startups as a founder and an engineer in U.S. and Japan, he
              believes that neurotechnology is the most likely to be able to
              bring our lives destructive innovation.
              <br />
              His passion is to become a person who achieves Science-Fiction
              with creativity and technology.
            </div>
            <div className="about-container--index-sns">
              <a
                href="https://www.linkedin.com/in/wakkihaya/"
                target="_blank"
                className="about-container--index-sns-item"
                rel="noreferrer"
              >
                {isDesktop ? (
                  <FontAwesomeIcon icon={faLinkedin} size="5x" />
                ) : (
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                )}
              </a>
              <a
                href="https://www.facebook.com/waki.hayato.1"
                target="_blank"
                className="about-container--index-sns-item"
                rel="noreferrer"
              >
                {isDesktop ? (
                  <FontAwesomeIcon icon={faFacebookSquare} size="5x" />
                ) : (
                  <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                )}
              </a>
              <a
                href="https://github.com/wakkihaya"
                target="_blank"
                className="about-container--index-sns-item"
                rel="noreferrer"
              >
                {isDesktop ? (
                  <FontAwesomeIcon icon={faGithubSquare} size="5x" />
                ) : (
                  <FontAwesomeIcon icon={faGithubSquare} size="3x" />
                )}
              </a>
            </div>
            <div className="about-container--index_box">
              <div className="about-container--index-subtitle">
                Shouka Kadoi (Writer, Interviewer) <br />
              </div>
              <div className="about-container--index-subtitle-text">
                Graduated from Doshisha University, Faculty of Sociology,
                Department of Communication Studies. <br />
                After attending a conference organized by Israel Brain
                Technologies, he joined Relook, a mindfulness meditation app,
                where he worked as a CS, web marketer, and PdM, and experienced
                M&A.
              </div>
              <div className="about-container--index-sns">
                <a
                  href="https://www.facebook.com/shouka.kadoi"
                  target="_blank"
                  className="about-container--index-sns-item"
                  rel="noreferrer"
                >
                  {isDesktop ? (
                    <FontAwesomeIcon icon={faFacebookSquare} size="5x" />
                  ) : (
                    <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                  )}
                </a>
                <a
                  href="https://twitter.com/kadyboy1216"
                  target="_blank"
                  className="about-container--index-sns-item"
                  rel="noreferrer"
                >
                  {isDesktop ? (
                    <FontAwesomeIcon icon={faTwitterSquare} size="5x" />
                  ) : (
                    <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContactForm lang="EN" />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
