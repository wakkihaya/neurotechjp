import { Footer, Header, Meta, EventItem } from "~components";
import React from "react";

const EventsPage: React.FC = () => {
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
      <div className="slides__bg">
        <Header isBgTransparent={true} />
        <div className="events--title">Neurotech Events</div>
      </div>
      <div className="events--container">
        <EventItem
          linkRef="https://neurotechtokyo.peatix.com/"
          title="Neurotech Tokyo -vol 1-"
          imgSrc="/img/events/5.24-neurotechtokyo/cover.jpg"
          place="Tokyo"
          date="2023.5.24"
          description={
            <>
              日本のneurotechの未来を担うU40の若き学生、研究者、起業家等、
              全てのneurotechに関わる若手の方々を対象としたオンサイトイベントです！{" "}
              <br />
              最新の研究技術をもとに事業化をおこなっているゲストの方々によるパネルディスカッション
              neurotechの精鋭である参加者様同士におけるネットワーキングの場をご用意！
              <br />
              <br />
              ぜひ、日本のneurotechをより盛り上げる会にしていきましょう！
            </>
          }
        />
        <EventItem
          linkRef="https://neurotechtokyo.peatix-2.com/"
          title="Neurotech Tokyo -vol 2-"
          imgSrc="/img/events/8.17-neurotechtokyo/cover.jpg"
          place="Tokyo"
          date="2023.8.17"
          description={
            <>
              日本のneurotechの未来を担う若き学生、研究者、起業家等、
              全てのneurotechに関わる若手の方々を対象としたオンサイトイベントです！{" "}
              <br />
              最新の研究技術をもとに事業化をおこなっているゲストの方々によるパネルディスカッション
              neurotechの精鋭である参加者様同士におけるネットワーキングの場をご用意！
              <br />
              <br />
              ぜひ、日本のneurotechをより盛り上げる会にしていきましょう！
            </>
          }
        />
        <EventItem
          linkRef="http://ptix.at/Lfjemq"
          title="Neurotech Tokyo -vol 3-"
          imgSrc="/img/events/2024.2.9-neurotechtokyo/cover.png"
          place="Tokyo"
          date="2024.2.9"
          description={
            <>
              日本のneurotechの未来を担う若き学生、研究者、起業家等、
              全てのneurotechに関わる若手の方々を対象としたオンサイトイベントです！{" "}
              <br />
              ニューロテックに関してのライトニングトークセッションに加え、
              参加者様同士におけるネットワーキングの場をご用意！
              <br />
              <br />
              ぜひ、日本のneurotechをより盛り上げる会にしていきましょう！
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
