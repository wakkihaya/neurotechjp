import React from "react";

import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { Meta } from "~/components/Meta";
import PersonCard from "~/components/PersonCard";
import { useProfiles, ProfileType } from "~hooks/use-profiles";

const AboutPage: React.FC = () => {
  const { getTargetProfile } = useProfiles();

  const wakki = getTargetProfile("Hayato Waki", "en");
  const shoka = getTargetProfile("Shoka Kadoi", "en");
  const nao = getTargetProfile("Nao Yukawa", "en");
  const toma = getTargetProfile("Toma Itagaki", "en");
  const profiles: ProfileType[] = [wakki, shoka, nao, toma];

  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc: 'NeurotechJP is running to reveal “The killer applications of Neurotech.We will publish trends", columns, and interviews with pioneers who are working at the cutting edge of the neurotech field.',
          link: "https://neurotechjp.com",
          image: "https://neurotechjp.com/ogp.png",
        }}
      />
      <div className="about__bg">
        <Header isBgTransparent={true} />
        <div className="about--title">
          Stay up-to-date with the latest Neurotech.
        </div>
      </div>
      <div className="about-container">
        <div className="about-container--index">
          <img src="/ogp.png" className="about-container--index-image" />
          <div className="about-container--index-subtitle">
            NeurotechJP is running to reveal “The killer applications of
            Neurotech”. <br />
            We publish interviews and articles with pioneers working on
            cutting-edge research and development in Neurotech.
          </div>
        </div>
        <div className="about-container--index">
          <div className="about-container--index-title">Meet the team</div>
          <div className="about-container--index-box">
            {profiles.map((profile, j) => {
              return (
                <PersonCard
                  key={j}
                  twitterLink={profile.twitterLink}
                  linkedInLink={profile.linkedInLink}
                  fbLink={profile.fbLink}
                  name={profile.name}
                  role={profile.role}
                  description={profile.description}
                  image={profile.image}
                />
              );
            })}
          </div>
        </div>
        <ContactForm lang="EN" />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
