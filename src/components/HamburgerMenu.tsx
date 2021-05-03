import { falldown as Menu } from "react-burger-menu";
import Link from "next/link";

export function HamburgerMenu(): React.ReactElement {
  return (
    <Menu width={25}>
      <div className="header--index">
        <div className="header--index-blog">
          <Link href="/">Blog</Link>
          {/* TODO: 押したら、modal close */}
        </div>
        <div className="header--index-about">
          <Link href="/about">About NeurotechJP</Link>
        </div>
      </div>
    </Menu>
  );
};
