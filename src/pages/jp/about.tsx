import React from "react";

import {
  Footer,
  Header,
  Meta,
  ContactForm,
  PersonCard,
  Alert,
} from "~components";
import { useProfiles } from "~hooks/use-profiles";

const AboutPage: React.FC = () => {
  const { getAllProfiles } = useProfiles();

  const profiles = getAllProfiles();
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP |  ニューロテックJP",
          desc: "NeurotechJP (ニューロテックJP）はニューロテックのキラーユースケースを明らかにする目的で運営しています。ニューロテクノロジー分野の最先端で活躍する先人へのインタビューやトレンド、コラムなどを発信していきます。",
          link: "https://neurotechjp.com/jp",
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
        <Alert
          content={
            <div className="consulting--alert">
              2023年11月1日に、合同会社NeurotechJPは事業の一部を株式会社Actraに譲渡いたしました。
              詳しくは
              <a
                href={
                  "https://prtimes.jp/main/html/rd/p/000000004.000111004.html"
                }
                target="_blank"
                rel="noreferrer"
                className="consulting--alert--cta"
              >
                こちらのプレスリリース
              </a>
              を参照ください。
            </div>
          }
        />
        <div className="about-container--index">
          <img src="/ogp.png" className="about-container--index-image" />
          <div className="about-container--index-subtitle">
            NeurotechJPはニューロテックのキラーユースケースを明らかにする目的で運営しています。
            <br />
            ニューロテクノロジー分野の最先端で活躍する先人へのインタビューやトレンド、コラムなどを発信していきます。
          </div>
        </div>
        <div className="about-container--index">
          <div className="about-container--index-title">NeurotechJP チーム</div>
          <div className="about-container--index-box">
            {profiles.map((profile, j) => {
              if (profile.shouldHide) {
                return null;
              }
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
        <ContactForm lang="JP" />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
