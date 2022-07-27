import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { borders, colors, shadows } from "theme";

interface NavBtnProps {
  href: LinkProps["href"];
  children?: ReactNode;
  btnProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const NavBtn: FC<NavBtnProps> = ({ href, children, btnProps }) => {
  const { pathname } = useRouter();
  const clicked = href === pathname;

  return (
    <Link href={clicked ? "/" : href}>
      <button {...btnProps} className={`navbtn ${clicked && "clicked"}`}>
        {children}
        <style jsx>{`
          .navbtn {
            height: 100%;
            background: ${colors.lightgreen};
            border: ${borders.book};
            border-style: none solid;
          }
          .navbtn:hover {
            box-shadow: ${shadows.book};
          }
          .navbtn:active {
            background: ${colors.darkgreen};
            box-shadow: ${shadows.book};
          }
          .clicked {
            box-shadow: ${shadows.book};
          }
          .navbtn.clicked:hover {
            box-shadow: none;
          }
        `}</style>
      </button>
    </Link>
  );
};

export default NavBtn;
