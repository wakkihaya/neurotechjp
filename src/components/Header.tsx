import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useResponsive from "~/hooks/use-responsive";
import Banner from "~/components/Banner";

type Lang = "EN" | "JP" | "NotSpecified";

type Device = "Mobile" | "Desktop";

type HeaderProps = {
  lang: Lang;
};

type HeaderDeviceProps = {
  lang: Lang;
  device: Device;
};

const HeaderIndexHome: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <>
      {lang === "EN" && <Link href="/">Home</Link>}
      {lang === "JP" && <Link href="/jp">Home</Link>}
    </>
  );
};

const HeaderIndexBlog: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <>
      {lang === "EN" && <Link href="/blog">Blog</Link>}
      {lang === "JP" && <Link href="/jp/blog">Blog</Link>}
    </>
  );
};

const HeaderIndexSlides: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <>
      {lang === "EN" && <Link href="/slides">Slides</Link>}
      {lang === "JP" && <Link href="/jp/slides">Slides</Link>}
    </>
  );
};

const HeaderIndexAbout: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <>
      {lang === "EN" && <Link href="/about">About us</Link>}
      {lang === "JP" && <Link href="/jp/about">About us</Link>}
    </>
  );
};

const HeaderSocial: React.FC<HeaderDeviceProps> = ({ lang, device }) => {
  if (lang === "EN") {
    if (device === "Desktop") {
      return (
        <a
          href="https://twitter.com/NeurotechJPeng"
          target="_blank"
          className="header--social-item"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="4x" border />
        </a>
      );
    } else {
      return (
        <a
          href="https://twitter.com/NeurotechJPeng"
          target="_blank"
          className="header--social-item"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" border />
        </a>
      );
    }
  } else {
    if (device === "Desktop") {
      return (
        <a
          href="https://twitter.com/NeurotechJP"
          target="_blank"
          className="header--social-item"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="4x" border />
        </a>
      );
    } else {
      return (
        <a
          href="https://twitter.com/NeurotechJP"
          target="_blank"
          className="header--social-item"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" border />
        </a>
      );
    }
  }
};

//Only for Smartphone
const HamburgerMenu: React.FC<HeaderDeviceProps> = ({ lang, device }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  const handleStateChange = state => {
    setIsMenuOpen(state.isOpen);
  };

  return (
    <Menu
      right
      isOpen={isMenuOpen}
      onStateChange={state => handleStateChange(state)}
    >
      <div className="header--index">
        <div
          className="header--index-home"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HeaderIndexHome lang={lang} />
        </div>
        <div
          className="header--index-blog"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HeaderIndexBlog lang={lang} />
        </div>
        <div
          className="header--index-slides"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HeaderIndexSlides lang={lang} />
        </div>
        <div
          className="header--index-about"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HeaderIndexAbout lang={lang} />
        </div>
        <div
          className="header--index-social"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HeaderSocial lang={lang} device={device} />
        </div>
      </div>
    </Menu>
  );
};

//2021/10/6: Display Banner to install the report analytics only in Japanese.
const RenderBanner: React.FC<HeaderProps> = props => {
  const { lang } = props;
  if (lang === "JP") {
    return (
      <Banner>
        <p>
          Neurotech企業およそ200社の分析レポートを無料公開！詳細は
          <a href="slides">こちら</a>
          から
        </p>
      </Banner>
    );
  } else {
    return <></>;
  }
};

const Header: React.FC<{ isBgTransparent: boolean }> = props => {
  const isBgTransparent = props.isBgTransparent ?? false;
  const router = useRouter();

  const device: Device = useResponsive();

  ///Default lang is EN.
  const [lang, setLang] = useState<Lang>("NotSpecified");

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
      } else if (targetLang === "NotSpecified") {
        changeLang("JP");
      }
    } else {
      if (targetLang === "JP") {
        /// .com/hoge -> .com/jp/hoge
        const redirectToPath = "/jp" + currentPathName;
        router.push(redirectToPath);
      } else if (targetLang === "NotSpecified") {
        changeLang("EN");
      }
    }
  };

  useEffect(() => {
    const currentLang = localStorage.getItem("currentLang");
    const modCurrentLang = currentLang
      ? JSON.parse(currentLang)
      : "NotSpecified";
    setLang(modCurrentLang);

    /// Redirect to the page in selected language.
    moveToPageInSpecifiedLang(modCurrentLang);
  }, []);

  return (
    <>
      <RenderBanner lang={lang} />
      <div
        className={[
          "header-container",
          isBgTransparent ? "bg-none" : null,
        ].join(" ")}
      >
        {device === "Mobile" && <HamburgerMenu lang={lang} device={device} />}
        <header className="header">
          <div className="header--logo">
            {lang === "EN" && <Link href="/">NeurotechJP </Link>}
            {lang === "JP" && <Link href="/jp">NeurotechJP </Link>}
          </div>
          {device === "Desktop" && (
            <>
              <div className="header--index">
                <div className="header--index-home">
                  <HeaderIndexHome lang={lang} />
                </div>
                <div className="header--index-blog">
                  <HeaderIndexBlog lang={lang} />
                </div>
                <div className="header--index-slides">
                  <HeaderIndexSlides lang={lang} />
                </div>
                <div className="header--index-about">
                  <HeaderIndexAbout lang={lang} />
                </div>
              </div>
              <div className="header--social">
                <HeaderSocial lang={lang} device={device} />
              </div>
            </>
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
          {device === "Mobile" && <div className="header--index_menu-space" />}
        </header>
        <div
          className={[
            "header-container--brain-wave",
            isBgTransparent ? "bg-none" : null,
          ].join(" ")}
        >
          <img
            src="/brainwave.svg"
            alt="NeurotechJP Header brain wave"
            width="100%"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
