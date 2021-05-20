import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import useResponsive from "~/hooks/use-responsive";

type Lang = "EN" | "JP";

type HamburgerMenuProps = {
  lang: Lang;
};

type RedirectTo = "ToEN" | "ToJP" | "Stay";

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
  const router = useRouter();

  const { isDesktop, isMobile } = useResponsive();

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

    /// Redirect to the page in selected language.
    const currentPathName = window.location.pathname;
    if (currentPathName === "/") {
      if (modCurrentLang === "JP") {
        router.push("/jp");
      }
    } else if (currentPathName === "/jp/") {
      if (modCurrentLang === "EN") {
        router.push("/");
      }
    }
  }, []);

  return (
    <div className="header-container">
      {isMobile && <HamburgerMenu lang={lang} />}
      <header className="header">
        <div className="header--logo">
          {lang === "EN" && <Link href="/">NeurotechJP </Link>}
          {lang === "JP" && <Link href="/jp">NeurotechJP </Link>}
        </div>
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
