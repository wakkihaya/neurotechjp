import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";

type Lang = "EN" | "JP";

type HamburgerMenuProps = {
  lang: Lang;
};

//Only for Smartphone
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ lang }) => {
  return (
    <Menu right>
      <div className="header--index">
        <div className="header--index-blog">
          {lang === "EN" && <Link href="/">Blog</Link>}
          {lang === "JP" && <Link href="/jp">Blog</Link>}
        </div>
        <div className="header--index-about">
          {lang === "EN" && <Link href="/about">About NeurotechJP</Link>}
          {lang === "JP" && <Link href="/jp/about">About NeurotechJP</Link>}
        </div>
      </div>
    </Menu>
  );
};

const Header: React.FC = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 798px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 798px)" });
  ///Default lang is EN.
  const [lang, setLang] = useState<Lang>("EN");

  const changeLang = (targetLang: Lang) => {
    setLang(targetLang);
    localStorage.setItem("currentLang", JSON.stringify(targetLang));
  };

  useEffect(() => {
    const currentLang = localStorage.getItem("currentLang");
    const modCurrentLang = currentLang ? JSON.parse(currentLang) : "EN";
    setLang(modCurrentLang);
  }, []);

  return (
    <div className="header-container">
      {isMobile && <HamburgerMenu lang={lang} />}
      <header className="header">
        <div className="header--logo">
          {lang === "EN" && <Link href="/">NeurotechJP </Link>}
          {lang === "JP" && <Link href="/jp">NeurotechJP </Link>}
        </div>
        {/* TODO: bug class名が変わる */}
        {isDesktop && (
          <div className="header--index">
            <div className="header--index-blog">
              {lang === "EN" && <Link href="/">Blog</Link>}
              {lang === "JP" && <Link href="/jp">Blog</Link>}
            </div>
            <div className="header--index-about">
              {lang === "EN" && <Link href="/about">About NeurotechJP</Link>}
              {lang === "JP" && <Link href="/jp/about">About NeurotechJP</Link>}
            </div>
          </div>
        )}
        <div className="header--lang">
          <div
            className={[
              "header--lang-char",
              lang === "EN" ? "active" : null,
            ].join(" ")}
            onClick={() => changeLang("EN")}
          >
            <Link href="/">EN/</Link>
          </div>
          <div
            className={[
              "header--lang-char",
              lang === "JP" ? "active" : null,
            ].join(" ")}
            onClick={() => changeLang("JP")}
          >
            <Link href="/jp">JP</Link>
          </div>
        </div>
        {isMobile && !isDesktop && (
          <div className="header--index_menu-space"></div>
        )}
      </header>
      <img src="/brain_wave.png" className="header-container--brain-wave" />
    </div>
  );
};

export default Header;
