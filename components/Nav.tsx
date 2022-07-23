import Link, { LinkProps } from "next/link";
import { Dispatch, FC, ReactNode, SetStateAction } from "react";

interface NavBtnProps {
  href: LinkProps["href"];
  children?: ReactNode;
}

const NavBtn: FC<NavBtnProps> = ({ href, children }) => {
  return (
    <>
      <Link href={href}>
        <button className="navbtn">{children}</button>
      </Link>
      <style jsx>{`
        .navbtn {
          border: none;
          flex: 1;
          background: #dd6b20;
          text-decoration: none;
        }
        .navbtn + .navbtn {
          border-left: 2px solid #9c4221;
        }
        .navbtn:hover {
          background: #c05621;
        }
        .navbtn:disabled {
          background: #9c4221;
          color: black;
        }
        .navbtn:active {
          background: #9c4221;
        }
        .navbtn:first-child {
          border-radius: 30px 0 0 0;
        }
        .navbtn:last-child {
          border-radius: 0 30px 0 0;
        }
      `}</style>
    </>
  );
};

interface MyNavProps {
  pagePair: {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
  };
}

const MyNav: FC<MyNavProps> = ({ pagePair: { page, setPage } }) => {
  return (
    <nav className="topnav">
      <NavBtn href="/edawakare">枝分かれ</NavBtn>
      <NavBtn href="#">品詞</NavBtn>
      <NavBtn href="#">未実装</NavBtn>
      <NavBtn href="#">未実装</NavBtn>
      <style jsx>{`
        .topnav {
          height: 35px;
          display: flex;
        }
      `}</style>
    </nav>
  );
};

export default MyNav;
