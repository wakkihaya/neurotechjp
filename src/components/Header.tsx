import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { slide as Menu, handleOnClose } from "react-burger-menu";
import useResponsive from "~/hooks/use-responsive";

type Lang = "EN" | "JP";

type HamburgerMenuProps = {
  lang: Lang;
};

//Only for Smartphone
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ lang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  return (
    <Menu
      right
      isOpen={isMenuOpen}
      onStateChange={(state) => handleStateChange(state)}
    >
      <div className="header--index">
        <div
          className="header--index-blog"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {lang === "EN" && <Link href="/">Blog</Link>}
          {lang === "JP" && <Link href="/jp">Blog</Link>}
        </div>
        <div
          className="header--index-about"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {lang === "EN" && <Link href="/">Blog</Link>}
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

  const moveToPageInSpecifiedLang = (targetLang: Lang) => {
    const currentPathName = window.location.pathname; /// '/' or '/jp/
    const listOfPath = currentPathName.split("/");
    if (listOfPath[1] === "jp") {
      if (targetLang === "EN") {
        /// .com/jp/hoge -> .com/hoge
        const redirectToPath = currentPathName.replace("jp/", "");
        router.push(redirectToPath);
      }
    } else {
      if (targetLang === "JP") {
        /// .com/hoge -> .com/jp/hoge
        const redirectToPath = "/jp" + currentPathName;
        router.push(redirectToPath);
      }
    }
  };

  useEffect(() => {
    const currentLang = localStorage.getItem("currentLang");
    const modCurrentLang = currentLang ? JSON.parse(currentLang) : "EN";
    setLang(modCurrentLang);

    /// Redirect to the page in selected language.
    moveToPageInSpecifiedLang(modCurrentLang);
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
            onClick={() => {
              changeLang("EN");
              moveToPageInSpecifiedLang("EN");
            }}
          >
            EN/
          </div>
          <div
            className={[
              "header--lang-char",
              lang === "JP" ? "active" : null,
            ].join(" ")}
            onClick={() => {
              changeLang("JP");
              moveToPageInSpecifiedLang("JP");
            }}
          >
            JP
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
