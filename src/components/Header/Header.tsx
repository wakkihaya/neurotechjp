import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useResponsive from "~/hooks/use-responsive";
import { Banner } from "~components/Banner";

import styles from "./Header.module.scss";

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
      {lang === "EN" && <Link href="/slides">Reports</Link>}
      {lang === "JP" && <Link href="/jp/slides">Reports</Link>}
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
          href="https://twitter.com/NeurotechJP_en"
          target="_blank"
          className={styles["header--social-item"]}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="3x" border />
        </a>
      );
    } else {
      return (
        <a
          href="https://twitter.com/NeurotechJP_en"
          target="_blank"
          className={styles["header--social-item"]}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" border />
        </a>
      );
    }
  } else {
    if (device === "Desktop") {
      return (
        <>
          <a
            href="https://twitter.com/NeurotechJP"
            target="_blank"
            className={styles["header--social-item"]}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="3x" border />
          </a>
          <a
            href="https://discord.gg/ERh2pzQ6AW"
            target="_blank"
            className={styles["header--social-item"]}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} size="3x" border />
          </a>
        </>
      );
    } else {
      return (
        <>
          <a
            href="https://twitter.com/NeurotechJP"
            target="_blank"
            className={styles["header--social-item"]}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" border />
          </a>
          <a
            href="https://discord.gg/ERh2pzQ6AW"
            target="_blank"
            className={styles["header--social-item"]}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" border />
          </a>
        </>
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
      <div className={styles["header--index"]}>
        <div
          className={styles["header--index-home"]}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HeaderIndexHome lang={lang} />
        </div>
        <div
          className={styles["header--index-blog"]}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HeaderIndexBlog lang={lang} />
        </div>
        <div
          className={styles["header--index-slides"]}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HeaderIndexSlides lang={lang} />
        </div>
        <div
          className={styles["header--index-about"]}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HeaderIndexAbout lang={lang} />
        </div>
        <div
          className={styles["header--index-social"]}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HeaderSocial lang={lang} device={device} />
        </div>
      </div>
    </Menu>
  );
};

//2022/3/17: Discord Banner
const RenderBanner: React.FC<HeaderProps> = props => {
  const { lang } = props;
  if (lang === "JP") {
    return (
      <Banner>
        <p>
          Neurotech Discordコミュニティは
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/ERh2pzQ6AW"
          >
            こちら
          </a>
          から！
        </p>
      </Banner>
    );
  } else {
    return <></>;
  }
};

export const Header: React.FC<{ isBgTransparent: boolean }> = props => {
  const isBgTransparent = props.isBgTransparent ?? false;
  const router = useRouter();

  const device: Device = useResponsive();

  ///Default lang is EN.
  const [lang, setLang] = useState<Lang>("NotSpecified");

  const changeLang = (targetLang: Lang) => {
    setLang(targetLang);
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
    moveToPageInSpecifiedLang(lang);
  }, []);

  return (
    <>
      <RenderBanner lang={lang} />
      <div
        className={[
          styles["header-container"],
          isBgTransparent ? styles["bg-none"] : null,
        ].join(" ")}
      >
        {device === "Mobile" && <HamburgerMenu lang={lang} device={device} />}
        <header className={styles["header"]}>
          <div className={styles["header--logo"]}>
            {lang === "EN" && <Link href="/">NeurotechJP </Link>}
            {lang === "JP" && <Link href="/jp">NeurotechJP </Link>}
          </div>
          {device === "Desktop" && (
            <>
              <div className={styles["header--index"]}>
                <div className={styles["header--index-home"]}>
                  <HeaderIndexHome lang={lang} />
                </div>
                <div className={styles["header--index-blog"]}>
                  <HeaderIndexBlog lang={lang} />
                </div>
                <div className={styles["header--index-slides"]}>
                  <HeaderIndexSlides lang={lang} />
                </div>
                <div className={styles["header--index-about"]}>
                  <HeaderIndexAbout lang={lang} />
                </div>
              </div>
              <div className={styles["header--social"]}>
                <HeaderSocial lang={lang} device={device} />
              </div>
            </>
          )}

          <div className={styles["header--lang"]}>
            <div
              className={[
                styles["header--lang-char"],
                lang === "EN" ? styles.active : null,
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
                styles["header--lang-char"],
                lang === "JP" ? styles.active : null,
              ].join(" ")}
              onClick={() => {
                changeLang("JP");
                moveToPageInSpecifiedLang("JP");
              }}
            >
              JP
            </div>
          </div>
          {device === "Mobile" && (
            <div className={styles["header--index_menu-space"]} />
          )}
        </header>
        <div
          className={[
            styles["header-container--brain-wave"],
            isBgTransparent ? styles["bg-none"] : null,
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
