import React from "react";

import ContactForm from "~/components/ContactForm";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { Meta } from "~/components/Meta";
import PersonCard from "~/components/PersonCard";

const AboutPage: React.FC = () => {
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
          <img src="/ogp.png" className="about-container--index-image" />
          <div className="about-container--index-subtitle">
            NeurotechJP is running to reveal “The killer use cases of
            Neurotech”. <br />
            We will publish trends, columns, and interviews with pioneers who
            are working at the cutting edge of the neurotech field.
          </div>
        </div>
        <div className="about-container--index">
          <div className="about-container--index-title">Meet the team</div>
          <div className="about-container--index-box">
            <PersonCard
              twitterLink="https://twitter.com/wakkihaya"
              linkedInLink="https://www.linkedin.com/in/wakkihaya/"
              fbLink="https://www.facebook.com/waki.hayato.1"
              name="Hayato Waki"
              role="Writer/Interviewer"
              description="At University of Tsukuba in Japan, he worked on the research project about BCI. After experiencing multiple software
              startups as a founder and an engineer in U.S. and Japan, he
              believes that neurotechnology is the most likely to be able to
              bring our lives destructive innovation. His passion is to become a person who achieves Science-Fiction with creativity and technology."
              image="/img/about/Hayato_Waki.jpg"
            />
            <PersonCard
              twitterLink="https://twitter.com/kadyboy1216"
              linkedInLink="https://www.linkedin.com/in/shoka-kadoi-7b95271ba/"
              fbLink="https://www.facebook.com/shouka.kadoi"
              name="Shouka Kadoi"
              role="Writer"
              description="Graduated from Doshisha University, Faculty of Sociology, Department of Communication Studies.
                After attending a conference organized by Israel Brain
                Technologies, he joined Relook, a mindfulness meditation app,
                where he worked as a CS, web marketer, and PdM, and experienced
                M&A."
              image="/img/about/Shouka_Kadoi.jpeg"
            />
            <PersonCard
              twitterLink="https://twitter.com/NaoYukawa"
              linkedInLink="https://www.linkedin.com/in/nao-yukawa-331615207/"
              fbLink="https://www.facebook.com/nao.yukawa.56"
              name="Nao Yukawa"
              role="Interviewer/Writer"
              description="A senior majoring in Engineering at the University of Tokyo.
                While he is doing research on deep learning at an AI research
                lab in the same university, he is also studying International
                Business at San Francisco State University. His goal is
                to contribute to the development of Neuroscience by bridging the
                gap between academia and industry like Neuralink, a company
                founded by Elon Musk, is trying to do."
              image="/img/about/Nao_Yukawa.jpg"
            />
            <PersonCard
              twitterLink="https://twitter.com/tomaitagaki"
              linkedInLink="https://www.linkedin.com/in/tomaitagaki/"
              fbLink="https://www.neurotechjp.com/"
              name="Toma Itagaki"
              role="Interviewer"
              description="Third-year Neuroscience and Electrical Engineering student at the 
                           University of Washington researching ubiquitous non-invasive neural 
                           interfaces and human computer interfaces. Toma’s ultimate goal is 
                           to quantify the body and mind and develop bio/neuro-inspired 
                           personalized assistants to improve the Human Experience."
              image="/img/about/Toma_Itagaki.jpg"
            />
          </div>
        </div>
        <ContactForm lang="EN" />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
