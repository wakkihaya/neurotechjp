import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useResponsive from "~/hooks/use-responsive";
import { Banner } from "../Banner";

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

const HeaderSocial: React.FC<HeaderDeviceProps> = ({ lang, device }) => {
  if (lang === "EN") {
    return (
      <a
        href="https://twitter.com/NeurotechJP_en"
        target="_blank"
        className={styles["header--social-item"]}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size={"2x"} border />
      </a>
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
          <FontAwesomeIcon icon={faTwitter} size={"2x"} border />
        </a>
        <a
          href="https://discord.gg/ERh2pzQ6AW"
          target="_blank"
          className={styles["header--social-item"]}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} size={"2x"} border />
        </a>
      </>
    );
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
          className={[
            styles["header--index--item"],
            styles["header--index--item__home"],
          ].join(" ")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Link href={lang === "EN" ? "/" : "/jp"}>Home</Link>
        </div>
        <div
          className={styles["header--index--item"]}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Link href={lang === "EN" ? "/blog" : "/jp/blog"}>Blog</Link>
        </div>
        <div className={styles["header--index--item"]}>
          <a
            href="https://www.neurotechdaily.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            Podcast
          </a>
        </div>
        <div
          className={styles["header--index--item"]}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Link href={lang === "EN" ? "/slides" : "/jp/slides"}>Reports</Link>
        </div>
        <div
          className={styles["header--index--item"]}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Link href={lang === "EN" ? "/events" : "/jp/events"}>Events</Link>
        </div>
        <div
          className={styles["header--index--item"]}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Link href={lang === "EN" ? "/consulting" : "/jp/consulting"}>
            Service
          </Link>
        </div>
        <div
          className={styles["header--index--item"]}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Link href={lang === "EN" ? "/about" : "/jp/about"}>About us</Link>
        </div>
        <div
          className={[
            styles["header--index--item"],
            styles["header--index--item__social"],
          ].join(" ")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HeaderSocial lang={lang} device={device} />
        </div>
      </div>
    </Menu>
  );
};

//2023/11/15: 事業譲渡バナー
const RenderBanner: React.FC<HeaderProps> = props => {
  const { lang } = props;
  if (lang === "JP") {
    return (
      <Banner>
        <p>
          NeurotechJPは事業の一部を株式会社Actraに譲渡致しました。(
          <a
            target="_blank"
            rel="noreferrer"
            href="https://prtimes.jp/main/html/rd/p/000000004.000111004.html"
          >
            プレスリリース
          </a>
          )
        </p>
      </Banner>
    );
  } else {
    return (
      <Banner>
        <p>
          NeurotechJP transferred its part of business to Actra Corp.(
          <a
            target="_blank"
            rel="noreferrer"
            href="https://prtimes.jp/main/html/rd/p/000000004.000111004.html"
          >
            Press release
          </a>
          )
        </p>
      </Banner>
    );
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
                <div
                  className={[
                    styles["header--index--item"],
                    styles["header--index--item__home"],
                  ].join(" ")}
                >
                  <Link href={lang === "EN" ? "/" : "/jp"}>Home</Link>
                </div>
                <div className={styles["header--index--item"]}>
                  <Link href={lang === "EN" ? "/blog" : "/jp/blog"}>Blog</Link>
                </div>
                <div className={styles["header--index--item"]}>
                  <a
                    href={"https://www.neurotechdaily.com/"}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Podcast
                  </a>
                </div>
                <div className={styles["header--index--item"]}>
                  <Link href={lang === "EN" ? "/slides" : "/jp/slides"}>
                    Reports
                  </Link>
                </div>
                <div className={styles["header--index--item"]}>
                  <Link href={lang === "EN" ? "/events" : "/jp/events"}>
                    Events
                  </Link>
                </div>
                <div className={styles["header--index--item"]}>
                  <Link href={lang === "EN" ? "/consulting" : "/jp/consulting"}>
                    Service
                  </Link>
                </div>
                <div className={styles["header--index--item"]}>
                  <Link href={lang === "EN" ? "/about" : "/jp/about"}>
                    About us
                  </Link>
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
