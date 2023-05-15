import { Footer, Header, Meta, EventItem } from "~components";
import React from "react";

const EventsPage: React.FC = () => {
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
      <div className="evnets__bg">
        <Header isBgTransparent={true} />
        <div className="events--title">Neurotech Events</div>
      </div>
      <div className="events-container">
        <EventItem
          linkRef="https://neurotechtokyo.peatix.com/"
          title="Neurotech Tokyo"
          imgSrc="/img/events/5.24-neurotechtokyo/cover.jpg"
          place="Tokyo"
          description="Neurotech Tokyo open."
        />
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
