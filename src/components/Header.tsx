const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header--logo">NeurotechJP</div>
      <div className="header--index">
        <div className="header--index-blog">Blog</div>
        <div className="header--index-about">About NeurotechJP</div>
      </div>
      <div className="header--lang">
        <div className="header--lang-en">EN/</div>
        <div className="header--lang-JP">JP</div>
      </div>
    </header>
  );
};

export default Header;
