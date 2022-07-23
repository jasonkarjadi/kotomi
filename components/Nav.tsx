import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

interface NavBtnProps {
  href: LinkProps["href"];
  children?: ReactNode;
}

const NavBtn: FC<NavBtnProps> = ({ href, children }) => {
  const { pathname } = useRouter();

  return (
    <>
      {href !== pathname ? (
        <Link href={href}>
          <button className="navunit navbtn">{children}</button>
        </Link>
      ) : (
        <h2 className="navunit clicked">{children}</h2>
      )}
      <style jsx>{`
        .navunit {
          border: none;
          flex: 1;
          text-decoration: none;
          background: #9c4221;
          font-size: 0.875rem;
        }
        .navunit + .navunit {
          border-left: 2px solid #9c4221;
        }
        .navunit:first-child {
          border-radius: 30px 0 0 0;
        }
        .navunit:last-child {
          border-radius: 0 30px 0 0;
        }
        .navbtn {
          background: #dd6b20;
        }
        .navbtn:hover {
          background: #c05621;
        }
        .navbtn:active {
          background: #9c4221;
        }
        .clicked {
          font-weight: normal;
          margin: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: normal;
        }
      `}</style>
    </>
  );
};

interface MyNavProps {}

const MyNav: FC<MyNavProps> = () => {
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
