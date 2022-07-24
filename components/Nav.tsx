import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { borders, colors } from "theme";

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
          <button className="navbtn">{children}</button>
        </Link>
      ) : (
        <Link href="/">
          <button className="navbtn clicked">{children}</button>
        </Link>
      )}
      <style jsx>{`
        .navbtn {
          border: none;
          flex: 1;
          background: ${colors.lighter};
          font-size: 0.875rem;
          border: ${borders.fence};
        }
        .navbtn + .navbtn {
          border-left: none;
        }
        .navbtn:first-child {
          border-top-left-radius: inherit;
          border-bottom-left-radius: inherit;
        }
        .navbtn:last-child {
          border-top-right-radius: inherit;
          border-bottom-right-radius: inherit;
        }
        .navbtn:hover {
          box-shadow: 0 -1px 5px ${colors.darker} inset;
        }
        .navbtn:active {
          background: #c05621;
          box-shadow: 0 -1px 5px ${colors.darker} inset;
        }
        .clicked {
          box-shadow: 0 -1px 5px ${colors.darker} inset;
        }
        .navbtn.clicked:hover {
          box-shadow: none;
        }
      `}</style>
    </>
  );
};

interface MyNavProps {
  children?: ReactNode;
}

const MyNav: FC<MyNavProps> = ({ children }) => {
  return (
    <>
      <nav className="headnav">
        <NavBtn href="/edawakare">枝分かれ</NavBtn>
        <NavBtn href="#">品詞</NavBtn>
        <NavBtn href="#">未実装</NavBtn>
        <NavBtn href="#">未実装</NavBtn>
      </nav>
      {children}
      <nav className="footnav">
        <NavBtn href="/about">About</NavBtn>
      </nav>
      <style jsx>{`
        nav {
          height: 35px;
          display: flex;
        }
        .headnav {
          border-radius: 30px 30px 0 0;
        }
        .footnav {
          border-radius: 0 0 30px 30px;
        }
      `}</style>
    </>
  );
};

export default MyNav;
