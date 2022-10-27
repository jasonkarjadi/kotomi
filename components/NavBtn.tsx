import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { borders, colors, shadows } from "../constants";

interface NavBtnProps {
  href: LinkProps["href"];
  bookicon?: IconProp;
  children?: ReactNode;
}

const NavBtn: FC<NavBtnProps> = ({ href, bookicon, children }) => {
  const { pathname } = useRouter();
  const clicked = href === pathname;

  const NavBookIcon = bookicon && (
    <FontAwesomeIcon icon={bookicon} className="fa-fw fa-2x" />
  );

  return (
    <Link href={clicked ? "/" : href} passHref legacyBehavior>
      <button
        className={`navbtn ${clicked ? "clicked" : ""} ${
          bookicon ? "navbook" : ""
        }`}
      >
        {NavBookIcon}
        <span className={`${bookicon ? "navbooklabel" : ""}`}>{children}</span>
        {NavBookIcon}
        <style jsx>{`
          .navbtn {
            height: 100%;
            background: ${colors.lightgreen};
            border: ${borders.book};
            border-style: none solid;
          }
          .navbtn + .navbtn {
            border-left: none;
          }
          .navbtn:active {
            background: ${colors.darkgreen};
            box-shadow: ${shadows.book};
          }
          .navbtn.clicked {
            box-shadow: ${shadows.book};
          }
          .navbtn.navbook {
            width: 12.5%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem;
          }
          .navbtn.navbook:hover .navbooklabel {
            background: #fbd38d;
          }
          .navbooklabel {
            writing-mode: vertical-rl;
            font-family: Zen Antique;
            border: ${borders.book};
            padding: 1rem 0.25rem;
            background: #c6f6d5;
          }
        `}</style>
      </button>
    </Link>
  );
};

export default NavBtn;
