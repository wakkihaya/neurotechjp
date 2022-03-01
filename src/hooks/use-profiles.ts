export type ProfileType = {
  twitterLink?: string;
  fbLink?: string;
  linkedInLink?: string;
  name?: string;
  role?: string;
  description?: string;
  image?: string;
};

export type MembersList =
  | "Hayato Waki"
  | "Shoka Kadoi"
  | "Nao Yukawa"
  | "Toma Itagaki"
  | "Kai Irwin";

export const useProfiles = () => {
  const getTargetProfile = (name: MembersList, lang: string) => {
    let targetProfile: ProfileType;

    switch (name) {
      case "Hayato Waki":
        targetProfile = {
          twitterLink: "https://twitter.com/wakkihaya",
          linkedInLink: "https://www.linkedin.com/in/wakkihaya/",
          fbLink: "https://www.facebook.com/waki.hayato.1",
          image: "/img/about/Hayato_Waki.jpg",
          name: "",
          role: "",
          description: "",
        };
        if (lang === "en") {
          targetProfile["name"] = "Hayato Waki";
          targetProfile["role"] = "Writer/Interviewer";
          targetProfile["description"] =
            "He worked on the research project about emotional BCI at Univ of Tsukuba in Japan. After experiencing multiple software startups as a founder/engineer in U.S. and Japan, he was attracted to neurotech and started building this media. Now, he also works for Neurons, the Danish neurotech company, as an engineer. His passion is to become a person who achieves Science-Fiction with creativity and technology.";
        } else {
          targetProfile["name"] = "和木勇人 Hayato Waki";
          targetProfile["role"] = "ライター/インタビュアー";
          targetProfile["description"] =
            "筑波大学にてBCIに関する研究に従事。日本と米国でソフトウェアスタートアップを起業、エンジニアとしての経験を詰んだ後、ニューロテックの魅力に惹かれ当サイトを立ち上げる。現在はデンマークのニューロテック会社'Neurons'にてエンジニアとしても働く。彼のパッションは、「創造性と技術力を持って、Science-Fictionを実現する1人になること」である。";
        }
        break;

      case "Shoka Kadoi":
        targetProfile = {
          twitterLink: "https://twitter.com/kadyboy1216",
          linkedInLink: "https://www.linkedin.com/in/shoka-kadoi-7b95271ba/",
          fbLink: "https://www.facebook.com/shouka.kadoi",
          image: "/img/about/Shouka_Kadoi.jpeg",
          name: "",
          role: "",
          description: "",
        };
        if (lang === "en") {
          targetProfile["name"] = "Shoka Kadoi";
          targetProfile["role"] = "Writer";
          targetProfile["description"] =
            "Graduated from Doshisha University, Faculty of Sociology, Department of Communication Studies. After attending a conference organized by Israel Brain Technologies, he joined Relook, a mindfulness meditation app, where he worked as a CS, web marketer, and PdM, and experienced M&A.";
        } else {
          targetProfile["name"] = "門井 翔佳 Shoka Kadoi";
          targetProfile["role"] = "ライター";
          targetProfile["description"] =
            "2018年、同志社大学社会学部メディア学科卒業。社会心理学専攻。Israel Brain Technologiesの主宰するカンファレンスに参加を機に、2019年6月よりマインドフルネス瞑想アプリ『Relook』にジョイン。CS、Webマーケ、プロダクトマネージャーとして働きM&Aを経験。";
        }
        break;

      case "Nao Yukawa":
        targetProfile = {
          twitterLink: "https://twitter.com/NaoYukawa",
          linkedInLink: "https://www.linkedin.com/in/nao-yukawa-331615207/",
          fbLink: "https://www.facebook.com/nao.yukawa.56",
          image: "/img/about/Nao_Yukawa.jpg",
          name: "",
          role: "",
          description: "",
        };
        if (lang === "en") {
          targetProfile["name"] = "Nao Yukawa";
          targetProfile["role"] = "Interviewer/Writer";
          targetProfile["description"] =
            "A senior majoring in Engineering at the University of Tokyo. While he is doing research on deep learning at an AI research lab in the same university, he is also studying International Business at San Francisco State University. His goal is to contribute to the development of Neuroscience by bridging the gap between academia and industry like Neuralink, a company founded by Elon Musk, is trying to do.";
        } else {
          targetProfile["name"] = "湯川 直旺 Nao Yukawa";
          targetProfile["role"] = "インタビュアー/ライター";
          targetProfile["description"] =
            "東京大学工学部4年生。現在は同大学の松尾研究室で深層学習関連の研究を行う傍ら、米国SanFranciscoにてInternational Businessを学んでいる。 Elon Musk率いるNeuralinkのように、ビジネスとNeurotechnologyを組み合わせることで、神経科学の発展に寄与することが目標。";
        }
        break;

      case "Toma Itagaki":
        targetProfile = {
          twitterLink: "https://twitter.com/tomaitagaki",
          linkedInLink: "https://www.linkedin.com/in/tomaitagaki/",
          fbLink: "",
          image: "/img/about/Toma_Itagaki.jpg",
          name: "",
          role: "",
          description: "",
        };
        if (lang === "en") {
          targetProfile["name"] = "Toma Itagaki";
          targetProfile["role"] = "Interviewer/Writer";
          targetProfile["description"] =
            "Third-year Neuroscience and Electrical Engineering student at the University of Washington researching ubiquitous non-invasive neural interfaces and human computer interfaces. Toma’s ultimate goal is to quantify the body and mind and develop bio/neuro-inspired personalized assistants to improve the Human Experience.";
        } else {
          targetProfile["name"] = "板垣 透馬 Toma Itagaki";
          targetProfile["role"] = "インタビュアー/ライター";
          targetProfile["description"] =
            "ワシントン大学神経科学部＋電気工学部３年生。現在はユビキタスなニューロテックやヒューマンコンピュータインタフェースの研究を行っている。脳や体のデータを使って Human Experience を数値化し、バイオ＋ニューロインスパイアされたパーソナルアシスタントを開発することを目標にさまざまな分野の勉強をしている。";
        }
        break;

      case "Kai Irwin":
        targetProfile = {
          twitterLink: "https://twitter.com/Kai__Irwin",
          linkedInLink: "https://www.linkedin.com/in/kai-irwin-806a54152/",
          fbLink: "https://www.facebook.com/kai.irwin.3",
          image: "/img/about/Kai_Irwin.jpg",
          name: "",
          role: "",
          description: "",
        };
        if (lang === "en") {
          targetProfile["name"] = "Kai Irwin";
          targetProfile["role"] = "Interviewer/Writer";
          targetProfile["description"] =
            "A junior at Keio university. He got interested in Neurotech while researching how he can directly put information in his brain, since studying for school was taking too much of his time.He is passionate about turning difficult research papers into easy-to-read formats, so that everyone can learn about cutting edge neurotech research. While participating in a BCI lab at university, he is an engineer in a startup. Also, he is a member of TNK.";
        } else {
          targetProfile["name"] = "アーウィン海 Kai Irwin";
          targetProfile["role"] = "インタビュアー/ライター";
          targetProfile["description"] =
            "慶應義塾大学3年。勉強がめんどくさく、脳に直接情報を入れる方法がないかと思い Neurotech に興味を持つ。Neurotech の論文をわかりやすく編集し、世に広めることがパッション。現在は同大学の BCI に関する研究室に参加しつつ Startup でエンジニアをしている。TNK18期。";
        }
    }
    return targetProfile;
  };
  return { getTargetProfile };
};
