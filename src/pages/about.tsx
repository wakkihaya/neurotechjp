import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Meta } from "~/components/Meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import useResponsive from "~/hooks/use-responsive";

const AboutPage: React.FC = () => {
  const { isDesktop } = useResponsive();

  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: "NeurotechJP is the website gathering information of neurotehcnology through interviews with those who are active in the front lines of this area all over the world",
          link: "https://neurotechjp.com",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="about__bg">
        <Header isTop={false} />
        <div className="about--title">Get a front line in Neurotech.</div>
      </div>
      <div className="about-container">
        <div className="about-container--index">
          <div className="about-container--index-title">About NeurotechJP</div>
          <div className="about-container--index-subtitle">
            NeurotechJP is the website in Japanese/English gathering information
            of neurotehcnology through interviews with those who are active in
            the flont lines of this area all over the world.
          </div>
        </div>
        <div className="about-container--index">
          <div className="about-container--index-title">About organaizer</div>
          <div className="about-container--index-subtitle">
            Hayato Waki (Writer, Interviewer) <br />
          </div>
          <div className="about-container--index-subtitle-text">
            At University of Tsukuba in Japan, he worked on the research project
            about BCI. <br /> After experiencing multiple software startups as a
            founder and an engineer in U.S. and Japan, he believes that
            neurotechnology is the most likely to be able to bring our lives
            destructive innovation.
            <br />
            His passion is to become a person who achieves Science-Fiction with
            creativity and technology.
          </div>
          <div className="about-container--index-sns">
            <a
              href="https://www.linkedin.com/in/wakkihaya/"
              target="_blank"
              className="about-container--index-sns-item"
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
            >
              {isDesktop ? (
                <FontAwesomeIcon icon={faGithubSquare} size="5x" />
              ) : (
                <FontAwesomeIcon icon={faGithubSquare} size="3x" />
              )}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
