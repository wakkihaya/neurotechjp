import Header from "~/components/Header";
import Footer from "~/components/Footer";

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-container--index">
          <div className="about-container--index-title">About NeurotechJP</div>
          <div className="about-container--index-subtitle">
            NeurotechJP is the website in Japanese/English gathering information of neurotehcnology through interviews for those who are active in the flont lines of this are all over the world.
          </div>
        </div>
        <div className="about-container--index">
          <div className="about-container--index-title">About organaizer</div>
          <div className="about-container--index-subtitle">
            Hayato Waki
            {/* TODO */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
