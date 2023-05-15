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
      <div className="slides__bg">
        <Header isBgTransparent={true} />
        <div className="events--title">Neurotech Events</div>
      </div>
      <div className="events--container">
        <EventItem
          linkRef="https://neurotechtokyo.peatix.com/"
          title="Neurotech Tokyo"
          imgSrc="/img/events/5.24-neurotechtokyo/cover.jpg"
          place="Tokyo"
          date="2023.5.24"
          description={
            <>
              This is an on-site event for all young people involved in
              neurotech, including young U40 students, researchers, and
              entrepreneurs who are the future of neurotech in Japan! <br />{" "}
              Panel discussion by guests who are commercializing the latest
              research technologies Networking opportunities will be provided
              for all participants in the field of neurotech! <br />
              <br />
              Let's make this an event that will further boost neurotech in
              Japan!"
            </>
          }
        />
        <hr className="events--container--divider" />
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
