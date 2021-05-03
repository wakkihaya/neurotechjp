import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";

//Only for Smartphone
const HamburgerMenu: React.FC = () => {
  return (
    <Menu right>
      <div className="header--index">
        <div className="header--index-blog">
          <Link href="/">Blog</Link>
        </div>
        <div className="header--index-about">
          <Link href="/about">About NeurotechJP</Link>
        </div>
      </div>
    </Menu>
  );
};

const Header: React.FC = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 798px)"
  });
  const isMobile = useMediaQuery({ query: "(max-width: 798px)" });

  return (
    <div className="header-container">
      {isMobile && <HamburgerMenu />}
      <header className="header">
        <div className="header--logo">
          <Link href="/">NeurotechJP </Link>
        </div>
        {/* TODO: class名が変わる */}
        {isDesktop &&
          <div className="header--index">
            <div className="header--index-blog">
              <Link href="/">Blog</Link>
            </div>
            <div className="header--index-about">
              <Link href="/about">About NeurotechJP</Link>
            </div>
          </div>
        }

        <div className="header--lang">
          <div className="header--lang-en">EN/</div>
          {/* TODO: Change to English */}
          <div className="header--lang-JP">JP</div>
          {/* TODO: Change to Japanese */}
        </div>
        {isMobile && !isDesktop && <div className="header--index_menu-space"></div>}
      </header>
      <img src="/brain_wave.png" className="header-container--brain-wave" />
    </div>
  );
};

export default Header;
