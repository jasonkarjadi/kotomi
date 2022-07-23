import Link, { LinkProps } from "next/link";
import { ButtonHTMLAttributes, Dispatch, FC, SetStateAction } from "react";

interface NavBtnProps {
  linkProps: LinkProps;
  btnProps: ButtonHTMLAttributes<HTMLButtonElement>;
}

const NavBtn: FC<NavBtnProps> = ({ linkProps, btnProps }) => {
  return (
    <>
      <Link {...linkProps}>
        <button {...btnProps} className="navbtn" />
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
      <NavBtn
        linkProps={{ href: "/edawakare" }}
        btnProps={{ children: "枝分かれ" }}
      />
      <NavBtn linkProps={{ href: "/" }} btnProps={{ children: "品詞" }} />
      <NavBtn
        linkProps={{ href: "/" }}
        btnProps={{ children: "未実装", disabled: true }}
      />
      <NavBtn
        linkProps={{ href: "/" }}
        btnProps={{ children: "未実装", disabled: true }}
      />
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
